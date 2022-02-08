import { Button, Card, Col, Form, Input, Row, Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

function ForgotPassword() {
  const handleFinish = (e: any) => {};
  return (
    <>
      <div style={{ minHeight: '60vh', padding: '10px 22px 60px 22px' }}>
        <Row wrap className="d-flex justify-content-center mt-5">
          <Col span={24} className="d-flex justify-content-center">
            <Card
              hoverable
              className=" text-align-center me-auto ms-auto mb-5"
              style={{ maxWidth: '525px', width: '525px' }}
            >
              <Title level={3}>Reset password</Title>
              <Form layout="vertical" onFinish={handleFinish}>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true },
                    {
                      type: 'email',
                      message: 'Email không hợp lệ!',
                    },
                  ]}
                  label={<Title level={5}>Email</Title>}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item className="mb-0 mt-2">
                  <Button block type="primary" htmlType="submit">
                    Confirm
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ForgotPassword;
