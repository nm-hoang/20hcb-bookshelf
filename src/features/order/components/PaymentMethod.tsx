import { Card, Image, Radio, Space, Typography } from 'antd';
import React, { useState } from 'react';
import cod from '../../../assets/img/paymentMethod/cod.png';
import momo from '../../../assets/img/paymentMethod/momo.png';
import visacard from '../../../assets/img/paymentMethod/visacard.png';

const { Title } = Typography;

function PaymentMethod(): JSX.Element {
  const [method, setMethod] = useState('cod');
  const handleOnChangeMethod = (e: any) => {
    setMethod(e.target.value);
  };
  return (
    <Card style={{ width: 700 }} className="pb-2">
      <Space direction="vertical" size={20} className="d-flex justify-center">
        <Title level={2} type="secondary">
          Payment method
        </Title>
        <Radio.Group onChange={handleOnChangeMethod} value={method} className="custom-group-checkbox">
          <Radio value={'cod'} className="custom-checkbox">
            <Image height={75} preview={false} src={cod} />
          </Radio>
          <Radio value={'momo'} className="custom-checkbox">
            <Image height={75} preview={false} src={momo} />
          </Radio>
          <Radio value={'visacard'} className="custom-checkbox">
            <Image height={75} preview={false} src={visacard} />
          </Radio>
        </Radio.Group>
      </Space>
    </Card>
  );
}

export default PaymentMethod;
