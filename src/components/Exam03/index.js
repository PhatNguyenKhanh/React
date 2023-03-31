import { Form, Input, Button } from "antd";

const Exam03 = () => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    const values = await form.validateFields();
    console.log(values);
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

export default Exam03;
