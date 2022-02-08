import { Button, Card, Col, Form, Input, Row, Typography } from 'antd';
import axios from 'axios';
import React from 'react';
import { StatusNotify } from '../../../api/models';
import { useAppSelector } from '../../../app/hooks';
import { FROM_NAME, SERVICE_ID, TEMPLATE_ID, USER_ID } from '../../../constants/mail';
import Notify from '../../../helpers/notify';
import { selectListUsers } from '../authSlice';

const { Title } = Typography;

function ForgotPassword() {
  const listUsers = useAppSelector(selectListUsers);
  const handleFinish = (e: any) => {
    const TO_NAME = listUsers?.find((user) => user.email === e.email)?.fullName;
    const data = {
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: USER_ID,
      template_params: {
        to_name: TO_NAME,
        to_email: e.email,
        from_name: FROM_NAME,
      },
    };
    axios({
      method: 'post',
      url: 'https://api.emailjs.com/api/v1.0/email/send',
      data,
    })
      .then(function (_response) {
        Notify.success('The system has sent instructions to your email', StatusNotify.success);
      })
      .catch(function (error) {
        console.log(error);
      });
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
