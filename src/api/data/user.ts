import { User, UserRole } from '../models';

export const listUsers: User[] = [
  {
    username: 'user01',
    password: '123456',
    fullName: 'Harry',
    role: UserRole.CLIENT
  },
  {
    username: 'user02',
    password: '123456',
    fullName: 'Daniel',
    role: UserRole.CLIENT
  }
];