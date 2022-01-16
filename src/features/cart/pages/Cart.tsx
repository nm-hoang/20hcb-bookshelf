import React, { useCallback, useState } from 'react';
import { Button, Card, Col, Row, Typography, Checkbox, Space, Result } from 'antd';
import {
  decreaseItem,
  increaseItem,
  removeAll,
  removeItem,
  selectCart,
  setCheckedAll,
  setUnCheckedAll,
} from '../cartSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import CartComponent from '../components/CartComponent';
import { DeleteOutlined } from '@ant-design/icons';
import ModalRemoveItem from '../components/ModalRemoveItem';
import ModalRemoveAll from '../components/ModalRemoveAll';
import { moneyCartSummarize } from '../../../helpers/money';
import Money from '../../../components/common/Money';
import { Link } from 'react-router-dom';
import { PageUrl } from '../../../api/models';

const { Title } = Typography;

function Cart(): JSX.Element {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);
  const [visibleRemoveItem, setVisibleRemoveItem] = useState(false);
  const [visibleRemoveAll, setVisibleRemoveAll] = useState(false);
  const [bookIdSelected, setBookIdSelected] = useState<number>(0);

  const handleIncreaseItem = useCallback(
    (bookid: number) => {
      dispatch(increaseItem(bookid));
    },
    [dispatch]
  );
  const handleDecreaseItem = useCallback(
    (bookid: number) => {
      dispatch(decreaseItem(bookid));
    },
    [dispatch]
  );
  const confirmRemoveItem = useCallback(() => {
    dispatch(removeItem(bookIdSelected!));
  }, [bookIdSelected, dispatch]);
  const handleModalRemoveItem = useCallback((bookid: number) => {
    setVisibleRemoveItem(true);
    setBookIdSelected(bookid!);
  }, []);
  const confirmRemoveAll = () => {
    dispatch(removeAll());
  };

  let checkAll = cart?.find((item) => {
    return item.checked === false;
  })
    ? false
    : true;
  const handleOnChangeCheckAll = () => {
    console.log(checkAll);
    if (checkAll === true) {
      dispatch(setUnCheckedAll());
    } else {
      dispatch(setCheckedAll());
    }
    checkAll = !checkAll;
  };

  return (
    <>
      {cart?.length! > 0 ? (
        <>
          <ModalRemoveItem
            visible={visibleRemoveItem}
            confirmRemoveItem={confirmRemoveItem}
            setVisibleRemoveItem={setVisibleRemoveItem}
          />
          <ModalRemoveAll
            visible={visibleRemoveAll}
            confirmRemoveAll={confirmRemoveAll}
            setVisibleRemoveAll={setVisibleRemoveAll}
          />
          <Space direction="vertical" size={30} wrap className="d-flex mt-5">
            <Row>
              <Col push={3}>
                <Title level={1} type="secondary">
                  Cart
                </Title>
              </Col>
            </Row>
            <Space
              direction="horizontal"
              className="d-flex justify-center align-items-flex-start"
              size={30}
            >
              <Space style={{ width: 750 }} direction="vertical" size={15}>
                <Card style={{ width: '100%' }}>
                  <Row>
                    <Col span={12}>
                      <Checkbox checked={checkAll} onChange={handleOnChangeCheckAll}>
                        <Title level={5} className="text-normal" type="secondary">
                          Select all
                        </Title>
                      </Checkbox>
                    </Col>
                    <Col span={12} className="d-flex justify-flex-end">
                      <Button type="text" onClick={() => setVisibleRemoveAll(true)}>
                        Delete all
                        <DeleteOutlined />
                      </Button>
                    </Col>
                  </Row>
                </Card>
                {cart?.length! > 0 &&
                  cart?.map((item) => {
                    return (
                      <CartComponent
                        key={item.bookId}
                        item={item}
                        handleIncreaseItem={handleIncreaseItem}
                        handleDecreaseItem={handleDecreaseItem}
                        handleModalRemoveItem={handleModalRemoveItem}
                      />
                    );
                  })}
              </Space>
              <Card style={{ width: 400 }} className="text-align-center">
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
                    <Link to={PageUrl.CHECKOUT}>
                      <Button
                        disabled={cart?.every((item) => item.checked !== true)}
                        size="large"
                        type="primary"
                        style={{ width: '60%' }}
                      >
                        Checkout
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Card>
            </Space>
          </Space>
        </>
      ) : (
        <Result
          className="border-with-shadow mx-auto card-result-custom"
          title="Your cart is empty"
          extra={
            <Link to={PageUrl.HOMEPAGE}>
              <Button type="primary" key="console">
                Go to Homapge
              </Button>
            </Link>
          }
        />
      )}
    </>
  );
}

export default Cart;
