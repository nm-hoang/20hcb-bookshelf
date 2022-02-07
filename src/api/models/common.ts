export enum PageUrl {
  LOGIN = '/login',
  REGISTER = '/register',
  FORGOT_PASSWORD = '/forgot-password',
  HOMEPAGE = '/',
  CART = '/cart',
  CHECKOUT = '/checkout',
  CHECKOUT_SUCCESS = '/checkout-success',
  BOOK = '/book',
  PUBLISHERS = '/publishers',
  AUTHORS = '/authors'
};


export interface MessageStatus {
  status: 'Success' | 'Error';
  message?: string;
  errorCode?: number;
}

export interface ResponseBody extends MessageStatus {
  data?: string | number;
}


export interface ListResponse<T> extends MessageStatus {
  data?: T[];
}
export interface SingleResponse<T> extends MessageStatus {
  data?: T;
}

export interface ListParams {
  keysearch?: string;
  pagesize: number;
  offset: number;
}

export interface State<T> {
  requesting: boolean;
  success: boolean;
  message?: string;
  error?: string | any;
  data?: number | string;
  list?: T[];
  single?: T;
}

export enum StatusNotify {
  success = 'SUCCESS',
  warning = 'WARNING',
  error = 'ERROR',
  pending = 'PENDING'
}