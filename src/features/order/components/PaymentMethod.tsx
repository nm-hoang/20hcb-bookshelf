import { Card, Checkbox, Image, Space, Typography } from 'antd';
import React, { useState } from 'react';
import cod from '../../../assets/img/paymentMethod/cod.png';
import momo from '../../../assets/img/paymentMethod/momo.png';
import visacard from '../../../assets/img/paymentMethod/visacard.png';

const { Title } = Typography;

function PaymentMethod(): JSX.Element {
  const [methodSelected, setMethodSelected] = useState({
    cod: true,
    momo: false,
    visacard: false,
  });
  const handleSelectMethod = (method: string) => {
    console.log(method)
    switch (method) {
      case 'cod':
        setMethodSelected((prev) => {
          console.log(prev);
          return {
            ...prev,
            cod: !prev.cod,
            momo: false,
            visacard: false,
          };
        });
        break;
      case 'momo':
        setMethodSelected((prev) => {
          console.log(prev);
          return {
            ...prev,
            cod: false,
            momo: !prev.momo,
            visacard: false,
          };
        });
        break;
      case 'visacard':
        setMethodSelected((prev) => {
          console.log(prev);
          return {
            ...prev,
            momo: false,
            cod: false,
            visacard: !prev.visacard,
          };
        });
        break;
      default:
        break;
    }
  };
  return (
    <Card style={{ width: 700 }}>
      <Space direction="vertical" size={20} className="d-flex justify-center">
        <Title level={2} type="secondary">
          Payment method
        </Title>
        <Space size={50} wrap className="d-flex justify-center">
          <Space size={15} direction="vertical" className="d-flex align-items-center">
            <Image height={75} preview={false} src={cod} />
            <Checkbox onChange={() => handleSelectMethod('cod')} checked={methodSelected.cod}>
              Ship COD
            </Checkbox>
          </Space>
          <Space size={15} direction="vertical" className="d-flex align-items-center">
            <Image height={75} preview={false} src={momo} />
            <Checkbox onChange={() => handleSelectMethod('momo')} checked={methodSelected.momo}>
              Momo
            </Checkbox>
          </Space>
          <Space size={15} direction="vertical" className="d-flex align-items-center">
            <Image height={75} preview={false} src={visacard} />
            <Checkbox
              onChange={() => handleSelectMethod('visacard')}
              checked={methodSelected.visacard}
            >
              Visa card
            </Checkbox>
          </Space>
        </Space>
      </Space>
    </Card>
  );
}

export default PaymentMethod;
