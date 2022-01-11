import { Button, Card, Col, Row, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem, PageUrl } from '../../../api/models';
import Money from '../../../components/common/Money';
import { moneyCartSummarize } from '../../../helpers/money';

const { Title } = Typography;

interface PriceInfoProps {
  cart: CartItem[];
}

function PriceInformation(props: PriceInfoProps): JSX.Element {
  const { cart } = props;
  return (
    <Card style={{ width: 500 }} className="text-align-center">
      <Row gutter={[30, 30]}>
        <Col span={24}>
          <Row justify="space-between" style={{ width: '100%' }}>
            <Col>
              <Title level={5}>Items subtotal:</Title>
            </Col>
            <Col>
              <Title level={5}>
                <Money money={moneyCartSummarize(cart!)} />
              </Title>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Link to={PageUrl.CHECKOUT_SUCCESS}>
            <Button size="large" type="primary" style={{ width: '60%' }}>
              Submit
            </Button>
          </Link>
        </Col>
      </Row>
    </Card>
  );
}

export default PriceInformation;
