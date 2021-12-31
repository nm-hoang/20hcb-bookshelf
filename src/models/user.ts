export interface User {
  username: string;
  password: string;
  fullname: string;
  role?: UserRole;
}

export enum UserRole {
  ADMIN = 'admin',
  CLIENT = 'client'
}