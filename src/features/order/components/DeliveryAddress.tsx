import { Card, Form, Input, Row, Select, Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

function DeliveryAddress(): JSX.Element {
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  return (
    <Card style={{ width: 700 }}>
      <Form {...formItemLayout} name="deliveryAddress" layout="horizontal">
        <Form.Item name="title" className="d-flex justify-center">
          <Row>
            <Title level={2} type="secondary">
              Delivery address
            </Title>
          </Row>
        </Form.Item>
        <Form.Item name="name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Phone">
          <Input />
        </Form.Item>
        <Form.Item name="province" label="Province">
          <Select />
        </Form.Item>
        <Form.Item name="district" label="District">
          <Select />
        </Form.Item>
        <Form.Item name="ward" label="Ward">
          <Select />
        </Form.Item>
        <Form.Item name="address" label="Address">
          <Input />
        </Form.Item>
      </Form>
    </Card>
  );
}

export default DeliveryAddress;
