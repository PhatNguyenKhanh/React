import { useEffect } from "react";
import { Form, Input, Modal } from "antd";
import { PageNumber } from "./styles";
const { TextArea } = Input;

const ModalFormCities = (props) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (!props.open) {
      form.resetFields();
    }
  }, [props.open]);

  useEffect(() => {
    if (props.open && props.cities.id) {
      form.setFieldsValue(props.cities);
    }
  }, [props.open, props.cities]);

  const onSubmit = async () => {
    const values = await form.validateFields();
    props.onSubmit(props.cities.id, values);
  };

  const onCancel = () => {
    props.setOpen(false);
  };

  return (
    <Modal open={props.open} confirmLoading={props.loading} onOk={onSubmit} onCancel={onCancel}>
      <Form form={form} layout="vertical">
        <Form.Item
          name="cities"
          label="Cities"
          rules={[{ required: true, message: "Vui lòng nhập tên thành phố!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="country"
          label="Country"
          rules={[{ required: true, message: "Vui lòng nhập tên quốc gia!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="countryCode"
          label="Country Code"
          rules={[{ required: true, message: "Vui lòng nhập mã quốc gia!" }]}
        >
          <TextArea rows={2} placeholder="Description is 100" maxLength={100} />
        </Form.Item>

        <Form.Item
          name="countryFlag"
          label="Country Flag"
          rules={[{ required: true, message: "Vui lòng nhập quốc kỳ!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="population"
          label="Population"
          rules={[{ required: true, message: "Vui lòng nhập dân số!" }]}
        >
          <PageNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalFormCities;
