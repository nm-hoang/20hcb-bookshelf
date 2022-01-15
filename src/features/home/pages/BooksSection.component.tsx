import React from 'react';
import { Button, Card, Col, Rate, Row, Space, Tag, Typography } from 'antd';
import { v4 } from 'uuid';
import { getDiscountedPrice, redirectTo } from './home.utilities';
import { Book, PageUrl } from '../../../api/models';

export interface BooksSectionInterface {
  title: string
  books: Book[]
}

export function BooksSectionComponent(props: BooksSectionInterface): JSX.Element {
  const { title, books } = props;

  const handleClickBook = (bookId: number) => {
    return redirectTo(`${PageUrl.BOOK}/${bookId}`);
  }

  return (
    <div className="mt-3">
      <Space direction="vertical" size={[12, 24]}>
        <Typography.Title level={4}>{title}</Typography.Title>

        <Row gutter={[48, 48]}>
          {books.map((item) => (
            <Col key={v4()} span={6}>
              <Card
                className="rounded-5"
                hoverable
                cover={<img alt={item.name} src={item.avatar} />}
                onClick={() => handleClickBook(item.bookId)}
              >
                <div className="text-end">
                  <Typography.Title level={5}>{item.name}</Typography.Title>
                  <Typography.Text>{`by ${item.author}`}</Typography.Text>
                  <div>
                    <Rate value={item.rating} />
                  </div>
                  <div>
                    <Space align="center">
                      <Typography.Title level={4}>{`$${getDiscountedPrice(
                        item.price,
                        item.discount
                      )}`}</Typography.Title>
                      {item.discount && (
                        <Tag className="mb-1o2 mr-0" color="volcano">{`${item.discount}%`}</Tag>
                      )}
                    </Space>
                  </div>
                  {item.discount > 0 && (
                    <Typography.Text delete disabled>{`$${item.price}`}</Typography.Text>
                  )}
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Row justify="center">
          <Col span="auto">
            <Button type="primary">More</Button>
          </Col>
        </Row>
      </Space>
    </div>
  );
}
