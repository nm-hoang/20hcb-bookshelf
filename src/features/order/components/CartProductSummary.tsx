import { Card, Space, Typography } from 'antd';
import React from 'react';
import { CartItem } from '../../../api/models';
import CardProductItem from './CartProductItem';

interface CardProductSummaryProps {
  cart: CartItem[];
}

const { Title } = Typography;

function CartProductSummary(props: CardProductSummaryProps): JSX.Element {
  const { cart } = props;
  return (
    <Card style={{width: 500}}>
      <Space direction="vertical" size={20}>
        <Title level={2} type="secondary">
          Order summary
        </Title>
        <Space direction="vertical">
          {cart &&
            // eslint-disable-next-line array-callback-return
            cart.map((item) => {
              if (item.checked === true) {
                return <CardProductItem item={item} />;
              }
            })}
        </Space>
      </Space>
    </Card>
  );
}

export default CartProductSummary;
