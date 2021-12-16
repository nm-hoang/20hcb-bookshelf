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
  status?: 'idle' | 'pending' | 'success' | 'error';
  message?: string;
  error?: string | any;
  data?: number | string;
  list?: T[];
  single?: T;
}
