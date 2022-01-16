import { Button, Result } from 'antd';
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { PageUrl } from '../../../api/models';

function OrderSuccess(): JSX.Element {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push(PageUrl.HOMEPAGE);
    }, 5000);
  }, [history]);
  return (
    <Result
      status="success"
      className="border-with-shadow mx-auto card-result-custom mt-5"
      title="Your order is successfully !"
      extra={
        <Link to={PageUrl.HOMEPAGE}>
          <Button type="primary" key="console">
            Go to Homapge
          </Button>
        </Link>
      }
    />
  );
}

export default OrderSuccess;
