import { Button, Card, Col, Form, Input, Row, Typography } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import { StatusNotify, User } from '../../../api/models';
import { useAppDispatch } from '../../../app/hooks';
import Notify from '../../../helpers/notify';
import { changePassword } from '../authSlice';

const { Title } = Typography;

function ResetPassword() {
  interface ParamTypes {
    email: string;
  }
  const dispatch = useAppDispatch();
  const { email } = useParams<ParamTypes>();
  const handleFinish = (e: any) => {
    if (e.password !== e.confirmPassword) {
      Notify.error('Confirm password does not match !', StatusNotify.error);
    } else {
      const data: User = {
        email,
        password: e.password,
      };
      dispatch(changePassword(data));
    }
  };
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
              <Title level={3}>Change your new password</Title>
              <Form layout="vertical" onFinish={handleFinish}>
                <Form.Item
                  rules={[{ required: true }]}
                  name="password"
                  label={<Title level={5}>Password</Title>}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  name="confirmPassword"
                  label={<Title level={5}>Confirm password</Title>}
                >
                  <Input.Password placeholder="Confirm password" />
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

export default ResetPassword;
