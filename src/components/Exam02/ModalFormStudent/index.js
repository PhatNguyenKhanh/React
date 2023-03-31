import { useEffect } from "react";
import { Form, Input, InputNumber, Modal } from "antd";

const ModalFormStudent = (props) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (!props.open) {
      form.resetFields();
    }
  }, [props.open]);

  useEffect(() => {
    if (props.open && props.formData.id) {
      form.setFieldsValue(props.formData);
    }
  }, [props.open, props.formData]);

  const onSubmit = async () => {
    const values = await form.validateFields();
    props.onSubmit(props.formData.id, values);
  };

  const onCancel = () => {
    props.setOpen(false);
  };

  return (
    <Modal open={props.open} onOk={onSubmit} onCancel={onCancel}>
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Full Name"
          rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="studentID"
          label="ID"
          rules={[{ required: true, message: "Vui lòng nhập ID" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="score"
          label="Score"
          rules={[{ required: true, message: "Vui lòng nhập điểm số" }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="className"
          label="Class Name"
          rules={[{ required: true, message: "Vui lòng nhập lớp học" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalFormStudent;
