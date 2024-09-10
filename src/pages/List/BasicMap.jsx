import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";

import { Link } from "react-router-dom";

export default function BasicMap() {
  const { isLoading, data } = useQuery({
    queryKey: ["buildingList"],
    queryFn: async () => {
      const response = await axios.get("/Mock/ListofSale.json");
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
  });

  //==============================================맵
  const mapRef = useRef(null);
  const [info, setInfo] = useState({});
  const [filter, setFilter] = useState([]);
  // const [selectedItem, setSelectidItem] = useState();

  const getInfo = () => {
    const map = mapRef.current;
    if (!map) return;

    const bounds = map.getBounds();
    const swLatLng = bounds.getSouthWest();
    const neLatLng = bounds.getNorthEast();

    setInfo({
      e: neLatLng.getLng(),
      w: swLatLng.getLng(),
      s: swLatLng.getLat(),
      n: neLatLng.getLat(),
    });
  };

  useEffect(() => {
    const filtered = getFilteredItems(data, info);
    setFilter(filtered);
  }, [data, info]);
  //==============================================마커

  const handelMarkerClick = (item) => {
    setFilter([item]);
  };

  if (isLoading) {
    return <div>Loding...</div>;
  }

  return (
    <div className="flex flex-row">
      <Map
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 37.3836736794297,
          lng: 127.11225299059,
        }}
        className="w-[800px] h-[700px] m-4"
        level={3}
        ref={mapRef}
        onDragEnd={(map) => getInfo(map)}
      >
        <MarkerClusterer averageCenter={true}>
          {data &&
            data.map((item, index) => (
              <EventMarkerContainer
                key={index}
                position={item.latlng}
                clickable={true}
                onClick={() => handelMarkerClick(item)}
              />
            ))}
        </MarkerClusterer>
      </Map>
      <div className="flex flex-col h-[700px] overflow-scroll">
        {filter &&
          filter.map((item, index) => (
            <Link
              to={`/list/details/${item.house_no}`}
              key={index}
              className="flex flex-row border cursor-pointer"
            >
              <div className="w-52 h-52 border rounded-lg">사진</div>
              <div className="flex flex-col justify-between mx-2">
                <p className="text-xl">{item.room_type}</p>
                <p className="text-2xl font-semibold">
                  월세 {item.monthly_cost}원
                </p>
                <p className="text-sm">
                  {item.size_m2}㎡ · {item.floor}층
                </p>
                <p>{item.address1}</p>
                <p>{item.description}</p>
                <p>★(10)</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

function getFilteredItems(data, info) {
  if (data && data.length > 0) {
    return data.filter(
      (item) =>
        item.latlng.lat >= info.s &&
        item.latlng.lat <= info.n &&
        item.latlng.lng >= info.w &&
        item.latlng.lng <= info.e
    );
  }
}

const EventMarkerContainer = ({ position, clickable, onClick }) => {
  // const map = useMap();

  // const moveMarker = marker => map.panTo(marker.getPosition());

  const handelMarkerClick = () => {
    // moveMarker();
    if (clickable) {
      onClick();
    }
  };

  return (
    <MapMarker position={position} onClick={handelMarkerClick}></MapMarker>
  );
};
