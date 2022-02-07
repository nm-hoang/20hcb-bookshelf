import { Button, Card, Col, Rate, Row, Space, Tag, Typography } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { v4 } from 'uuid';
import { Book, PageUrl } from '../../../api/models';
import { getDiscountedPrice } from './home.utilities';

export interface BooksSectionInterface {
  title: string;
  books: Book[];
}

export function BooksSectionComponent(props: BooksSectionInterface): JSX.Element {
  const { title, books } = props;
  const history = useHistory();
  const handleClickBook = (bookId: number) => {
    // return redirectTo(`${PageUrl.BOOK}/${bookId}`);
    history.push(`${PageUrl.BOOK}/${bookId}`);
  };

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
                cover={<img alt={item.name} src={item.avatar} style={{height:'300px'}} />}
                onClick={() => handleClickBook(item.bookId)}
              >
                <div className="text-end">
                  <Typography.Title level={5}>
                    <Typography.Paragraph
                      ellipsis={{
                        rows: 1,
                        expandable: false,
                      }}
                      title="name"
                    >
                      {item.name}
                    </Typography.Paragraph>
                    {/* {item.name} */}
                  </Typography.Title>
                  <Typography.Text>{`by ${item.author}`}</Typography.Text>
                  <Space>
                  <Typography.Title className="mb-0" level={5}>ISBN:</Typography.Title>
                  <Typography.Text>{item.isbn}</Typography.Text>
                  </Space>
                  <div>
                    <Rate value={item.rating} disabled={true} />
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
