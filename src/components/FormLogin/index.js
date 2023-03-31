import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";

const FormLogin = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onSubmit = async () => {
    const values = await form.validateFields();

    if (values.email === "admin@gmail.com" && values.password === "admin123") {
      localStorage.setItem("token", `${values.email}${values.password}`);
      navigate("/dashboard");
    } else {
      message.error("Information is wrong.");
    }
  };

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true }, { type: "email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>
      <Button type="primary" onClick={onSubmit}>
        Log In
      </Button>
    </Form>
  );
};

export default FormLogin;
