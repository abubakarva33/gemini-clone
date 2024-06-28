import { useSelector } from "react-redux";
import "./Homepage.css";
import { Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Response from "../sub-components/Response/Response";
import InputSection from "../sub-components/InputSection";
import VoiceInput from "../sub-components/VoiceInput";

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
      style={{ height: "95vh", position: "relative" }}
    >
      <div className="  overflow-scroll" ref={responseContainerRef} style={{ marginBottom: 100 }}>
        <Response id={id} className="response  overflow-y-auto" />
        <Spin spinning={loading} height={100}></Spin>
      </div>
      <InputSection {...{ id, setIsLoading }} />
      {/* <VoiceInput /> */}
    </div>
  );
};

export default Homepage;
