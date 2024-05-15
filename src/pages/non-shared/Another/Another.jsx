import { useDispatch, useSelector } from "react-redux";
import "./Another.css";
import { Button, Form, Input } from "antd";
import { lastResponse } from "../../../redux/features/ChatHistory";

const Another = () => {
  const dispatch = useDispatch();
  const lastRes = useSelector((state) => state.chatHistory.lastRes);
  const loading = useSelector((state) => state.chatHistory.loading);
  console.log({ lastRes, loading });

  const onFinish = ({ prompt }) => {
    dispatch(lastResponse(prompt));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div style={{ maxWidth: 700, margin: "auto" }} className=" formTemplate">
      <h3 className="title"> PRAN-RFL PCML DATA INPUT</h3>
      <Form
        name="basic"
        className="login-form"
        onFinish={onFinish}
        layout="vertical"
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="prompt"
          rules={[
            {
              required: true,
              message: "Please input salesman name!",
            },
          ]}
        >
          <div className="d-flex align-items-center formItem">
            <p className="mb-0"> NAME</p>
            <Input type="text" placeholder="Product Name" />
          </div>
        </Form.Item>
        <Button
          htmlType="submit"
          className="w-50 d-flex align-items-center justify-content-center mx-auto formBtn"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Another;
