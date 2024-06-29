import { useSelector } from "react-redux";
import "./Homepage.css";
import { Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Response from "../sub-components/Response/Response";
import InputSection from "../sub-components/InputSection";
import Footer from "../sub-components/Footer";
import Header from "../sub-components/Header";

const Homepage = () => {
  const { id } = useParams();
  const [loading, setIsLoading] = useState(false);
  const { history } = useSelector((state) => state.chatHistory);
  const responseContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (responseContainerRef.current) {
      responseContainerRef.current.scrollTop = responseContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  return (
    <div
      className="d-flex align-items-center flex-column justify-content-between"
      style={{ height: "100vh", position: "relative" }}
    >
      <Header />
      <div ref={responseContainerRef} style={{ marginBottom: 20 }}>
        <Response id={id} className="response  overflow-y-auto" />
        <Spin spinning={loading} height={100}></Spin>
      </div>
      <div className="d-flex align-items-center flex-column" style={{ width: "80%" }}>
        <InputSection {...{ id, setIsLoading }} />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
