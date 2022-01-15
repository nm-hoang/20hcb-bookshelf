import { Card, Form, Input, Row, Select, Typography } from 'antd';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  chooseDistrict,
  chooseProvince,
  selectListDistrict,
  selectListProvinces,
  selectListWards,
} from '../orderSlice';

const { Title } = Typography;
const { Option } = Select;
function DeliveryAddress(): JSX.Element {
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  const dispatch = useAppDispatch();
  const listProvinces = useAppSelector(selectListProvinces);
  const listDistrict = useAppSelector(selectListDistrict);
  const listWards = useAppSelector(selectListWards);
  const handleOnChangeProvince = (e: any) => {
    dispatch(chooseProvince(e));
  };
  const handleOnChangeDistrict = (e: any) => {
    dispatch(chooseDistrict(e));
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
          <Select onChange={handleOnChangeProvince}>
            {listProvinces &&
              listProvinces.map((province) => {
                return <Option value={province.provinceId}>{province.provinceName}</Option>;
              })}
          </Select>
        </Form.Item>
        <Form.Item name="district" label="District">
          <Select onChange={handleOnChangeDistrict}>
            {listDistrict &&
              listDistrict.map((district) => {
                return <Option value={district.districtId}>{district.districtName}</Option>;
              })}
          </Select>
        </Form.Item>
        <Form.Item name="ward" label="Ward">
          <Select>
            {listWards &&
              listWards.map((ward) => {
                return <Option value={ward.wardId}>{ward.wardName}</Option>;
              })}
          </Select>
        </Form.Item>
        <Form.Item name="address" label="Address">
          <Input />
        </Form.Item>
      </Form>
    </Card>
  );
}

export default DeliveryAddress;
