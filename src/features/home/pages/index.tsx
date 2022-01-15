import React from 'react';
import { Button, Card, Carousel, Col, Image, Menu, Rate, Row, Space, Tag, Typography } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import {
  getAuthorsFromBooks,
  getCategoriesFromBooks,
  getDiscountedPrice,
  getPublishersFromBooks,
} from './home.utilities';
import { mockBooks } from '../../../api/data/book';
import { v4 } from 'uuid';
import Meta from 'antd/lib/card/Meta';
import { BooksSectionComponent } from './BooksSection.component';

const spotlightBookImages = [
  'https://images.unsplash.com/photo-1558901357-ca41e027e43a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1839&q=80',
  'https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
  'https://images.unsplash.com/photo-1466386460451-cbc548bf581b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://cdn0.fahasa.com/media/wysiwyg/NGOAI-VAN-2018/AUG-2018/Bestsellers1920x350-111.jpg',
];

const authorNames = getAuthorsFromBooks(mockBooks);
const publisherNames = getPublishersFromBooks(mockBooks);
const categories = getCategoriesFromBooks(mockBooks);

function Homepage(): JSX.Element {
  return (
    <>
      <Carousel autoplay>
        {spotlightBookImages.map((image) => (
          <div key={v4()}>
            <Image
              height={420}
              width="100%"
              style={{ objectFit: 'cover' }}
              preview={false}
              src={image}
            />
          </div>
        ))}
      </Carousel>

      <div className="px-4 pt-4 mb-4">
        <Row>
          <Col span={6}>
            <Typography.Title level={4}>
              Advance filters
              <FilterOutlined className="pl-1" />
            </Typography.Title>

            <div className="mb-1">
              <Typography.Title level={5}>By authors</Typography.Title>

              <Space direction="vertical" size={[12, 6]}>
                {authorNames.map((item) => (
                  <Checkbox key={item.key}>{item.author}</Checkbox>
                ))}
                <Button className="ml-1" type="link" size="small">
                  More...
                </Button>
              </Space>
            </div>

            <div className="mb-1">
              <Typography.Title level={5}>By publishers</Typography.Title>

              <Space direction="vertical" size={[12, 6]}>
                {publisherNames.map((item) => (
                  <Checkbox key={item.key}>{item.publisher}</Checkbox>
                ))}
                <Button className="ml-1" type="link" size="small">
                  More...
                </Button>
              </Space>
            </div>
          </Col>

          <Col span={18}>
            <Menu mode="horizontal" defaultSelectedKeys={['all']}>
              {categories.map((item) => (
                <Menu.Item key={item.key}>{item.category}</Menu.Item>
              ))}
            </Menu>

            <BooksSectionComponent title="Top pick for you" books={mockBooks.slice(0, 4)} />
            <BooksSectionComponent title="Business" books={mockBooks.slice(5, 9)} />
            <BooksSectionComponent title="Fantasy" books={mockBooks.slice(10, 14)} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Homepage;
