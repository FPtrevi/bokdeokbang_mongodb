/**
 * 회원가입 페이지
 * @Author 해운
 */

import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router"

export default function Register() {

    let params = useParams();

    // 개인 or 기업
    const [category, setCategory] = useState('');

    useEffect(() => {
        params.category === "person" ? setCategory("person") : setCategory("company");
    },[params]);

    return (
        <>
        </>
    )
}