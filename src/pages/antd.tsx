import { Divider, Button, Form, Input } from 'antd';
import type { Store } from 'antd/es/form/interface';
// import { DatePicker } from "@components";

// const { RangePicker } = DatePicker;

const Antd = () => {
  const [form] = Form.useForm();
  const onFinish = (value: Store) => {
    console.log('antd.value----->：', value);
  };
  return (
    <>
      <Divider>表单验证</Divider>
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="input"
          label="input"
          rules={[
            {
              required: true,
              validator: (_, value, callback) => {
                if (!value) {
                  callback('请输入input');
                }
              },
            },
          ]}
        >
          <Input placeholder="请输入input" />
        </Form.Item>
        {/* <Form.Item name="datePicker" label="datePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item name="rangePicker" label="rangePicker">
          <RangePicker />
        </Form.Item> */}
      </Form>
      <Button type="primary" onClick={() => form.submit()}>
        确定
      </Button>
    </>
  );
};

export default Antd;
