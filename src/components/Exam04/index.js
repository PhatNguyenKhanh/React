import { Form, Input, Button, Select } from "antd";

const Exam04 = () => {
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
        rules={[{ required: true, type: "email" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          { required: true },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(value)) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Phone number format is wrong"));
            },
          }),
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="country" label="Country" rules={[{ required: true }]}>
        <Select
          options={[
            { value: "VN", label: "VietNam" },
            { value: "US", label: "USA" },
          ]}
        />
      </Form.Item>

      <Button type="primary" onClick={onSubmit}>
        Sign Up
      </Button>
    </Form>
  );
};

export default Exam04;
