import { Col, Row, Space, Typography } from 'antd';
import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectCart } from '../../cart/cartSlice';
import CartProductSummary from '../components/CartProductSummary';
import DeliveryAddress from '../components/DeliveryAddress';
import PaymentMethod from '../components/PaymentMethod';
import PriceInformation from '../components/PriceInfomation';

const { Title } = Typography;

function PaymentInformation(): JSX.Element {
  const cart = useAppSelector(selectCart);
  return (
    <Space direction="vertical" size={30} wrap className="d-flex mt-5">
      <Row>
        <Col push={3}>
          <Title level={1} type="secondary">
            Checkout
          </Title>
        </Col>
      </Row>

      <Space size={[25, 25]} wrap className="d-flex justify-center align-items-flex-start">
        <DeliveryAddress />
        <CartProductSummary cart={cart!} />
        <PaymentMethod />
        <PriceInformation cart={cart!} />
      </Space>
    </Space>
  );
}

export default PaymentInformation;
