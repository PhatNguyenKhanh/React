import { useEffect } from "react";
import { Form, Input, Modal, Select } from "antd";
import { PageNumber } from "./styles";
const { TextArea } = Input;

const ModalFormBook = (props) => {
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
    <Modal open={props.open} confirmLoading={props.loading} onOk={onSubmit} onCancel={onCancel}>
      <Form form={form} layout="vertical">
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Vui lòng nhập tiêu đề!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="author"
          label="Author"
          rules={[{ required: true, message: "Vui lòng nhập tên tác giả!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Vui lòng nhập phần mô tả!" }]}
        >
          <TextArea rows={2} placeholder="Description is 10" maxLength={100} />
        </Form.Item>

        <Form.Item
          name="type"
          label="Type"
          rules={[{ required: true, message: "Vui lòng nhập kiểu sách!" }]}
        >
          <Select
            options={[
              { value: "Romance", label: "Romantic" },
              { value: "Drama", label: "Dramatic" },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="page"
          label="Page"
          rules={[{ required: true, message: "Vui lòng nhập số trang!" }]}
        >
          <PageNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalFormBook;
