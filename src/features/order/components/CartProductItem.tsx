import { Card, Image, Space, Typography } from 'antd';
import React from 'react';
import { CartItem } from '../../../api/models';
import Money from '../../../components/common/Money';
import { moneyItemSummarize } from '../../../helpers/money';

interface CartProductItemProps {
  item: CartItem;
}

const { Title } = Typography;

function CardProductItem(props: CartProductItemProps): JSX.Element {
  const { item } = props;
  return (
    <Card>
      {item && (
        <>
          <Space size={20} wrap className="d-flex align-items-flex-end">
            <Space size={20} className="d-flex align-items-flex-start">
              <Image height={190} src={item.avatar} />
              <Space direction="vertical">
                <Title level={5}>{`${item.name} x ${item.quantity}`}</Title>
                <Title level={5} type="secondary">
                  <Money money={item.price} />
                </Title>
              </Space>
            </Space>
            <Space className="d-flex">
              <Title level={4} type="secondary">
                <Money money={moneyItemSummarize(item.price, item.discount, item.quantity)} />
              </Title>
            </Space>
          </Space>
        </>
      )}
    </Card>
  );
}

export default CardProductItem;
