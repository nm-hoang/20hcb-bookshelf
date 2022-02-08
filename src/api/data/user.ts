import { User, UserRole } from '../models';

export const listUsers: User[] = [
  {
    email: 'user01@gmail.com',
    password: '123456',
    fullName: 'Harry',
    role: UserRole.CLIENT
  },
  {
    email: 'user02@gmail.com',
    password: '123456',
    fullName: 'Daniel',
    role: UserRole.CLIENT
  }
];