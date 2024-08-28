import { useSelector } from "react-redux";
import "./Homepage.css";
import { Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Response from "../sub-components/Response/Response";
import InputSection from "../sub-components/InputSection";
import Footer from "../sub-components/Footer";
import Header from "../sub-components/Header";
import CustomizeInventory from "../sub-components/CustomizeInventory/CustomizeInventory";
import HotQuestions from "../sub-components/HotQuestions";

const Homepage = () => {
  const { id } = useParams();
  const responseContainerRef = useRef(null);
  const { history } = useSelector((state) => state.chatHistory);
  const [loading, setIsLoading] = useState(false);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const { sideBg, textColor } = useSelector((state) => state.customizeSec);

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
      style={{ height: "99dvh", position: "relative", color: textColor }}
    >
      <Header {...{ isCustomizeOpen, setIsCustomizeOpen }} />
      {id && (
        <div
          ref={responseContainerRef}
          style={{ marginBottom: 20 }}
          className="overflow-y-auto px-4 w-100"
        >
          <Response id={id} className="response " />
        </div>
      )}
      <div className="px-5" style={{ alignSelf: "flex-start" }}>
        <Spin spinning={loading} height={100}></Spin>
      </div>

      <HotQuestions {...{ id, setIsLoading, loading }} />
      <div className="inputContainer d-flex align-items-center flex-column px-4 ">
        <InputSection {...{ id, setIsLoading, loading }} />
        <Footer />
      </div>

      {isCustomizeOpen && (
        <div
          className="position-absolute"
          style={{
            top: 50,
            right: 0,
            backgroundColor: sideBg,
            color: textColor,
          }}
        >
          <CustomizeInventory />
        </div>
      )}
    </div>
  );
};

export default Homepage;
