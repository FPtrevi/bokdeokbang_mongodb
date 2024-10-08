import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryclient = new QueryClient();

function App() {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryclient}>
        <Outlet />
      </QueryClientProvider>
      <Footer />
    </>
  );
}

export default App;
