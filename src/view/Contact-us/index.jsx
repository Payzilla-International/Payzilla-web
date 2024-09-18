import './index.less'
import { Form, Input, TextArea, Button } from 'antd-mobile'
function Contactus() {
  const onFinish = () => {}
  return (
    <div className="contact-us-wrap">
      <div className="title">Contact us</div>
      <Form
        layout="vertical"
        mode="card"
        className="form-wrap"
        onFinish={onFinish}
        footer={
          <Button
            block
            type="submit"
            style={{ 'background-color': '#3553b0', color: '#fff' }}
            size="large">
            Sumbit
          </Button>
        }>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Name is required' }]}>
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Email is required' }]}>
          <Input placeholder="Enter your email" />
        </Form.Item>
        {/* <Form.Header /> */}
        <Form.Item label="Subject">
          <Input placeholder="Please enter" />
        </Form.Item>
        <Form.Item label="Comment or Message">
          <TextArea placeholder="Please enter" autoSize={{ minRows: 3 }} />
        </Form.Item>
      </Form>
    </div>
  )
}
export default Contactus
