import axiosClient from './axiosClient';
import {
  Todo,
  // ListParams,
  ListResponse,
  SingleResponse,
  ResponseBody
} from '../models';

const todoUrl = 'todos';

const todoApi = {
  getList(): Promise<ListResponse<Todo>> {
    const url = `${todoUrl}`;
    return axiosClient.get(url);
  },
  getById(id: number): Promise<SingleResponse<Todo>> {
    const url = `${todoUrl}/${id}`;
    return axiosClient.get(url);
  },
  insert(data: Todo): Promise<ResponseBody> {
    const url = `${todoUrl}`;
    return axiosClient.post(url, data);
  },
};

export default todoApi;