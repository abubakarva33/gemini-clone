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

const hotQuestions = [
  { ques: "Describe about abubakar siddik" },
  { ques: "who abubakar siddik" },
  { ques: "abubakar siddik works history" },
  { ques: "abubakar siddik personal backgraound" },
];

const Homepage = () => {
  const { id } = useParams();
  const responseContainerRef = useRef(null);
  const { history } = useSelector((state) => state.chatHistory);
  const [loading, setIsLoading] = useState(false);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const { sideBg, textPrimary } = useSelector((state) => state.customizeSec);

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
      style={{ height: "99vh", position: "relative" }}
    >
      <Header {...{ isCustomizeOpen, setIsCustomizeOpen }} />
      <div ref={responseContainerRef} style={{ marginBottom: 20 }} className="overflow-y-auto">
        <Response id={id} className="response " />
        <Spin spinning={loading} height={100}></Spin>
      </div>

      <div className="hot-questions">
        {hotQuestions?.map((item, ind) => (
          <div key={ind} style={{ border: `1px solid ${sideBg}` }}>
            {item?.ques}
          </div>
        ))}
      </div>
      <div className="d-flex align-items-center flex-column" style={{ width: "80%" }}>
        <InputSection {...{ id, setIsLoading }} />
        <Footer />
      </div>

      {isCustomizeOpen && (
        <div
          className="position-absolute"
          style={{
            top: 50,
            right: 0,
            backgroundColor: sideBg,
            color: textPrimary,
          }}
        >
          <CustomizeInventory />
        </div>
      )}
    </div>
  );
};

export default Homepage;
