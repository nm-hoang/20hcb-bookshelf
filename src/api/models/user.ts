export interface User {
  username: string;
  password: string;
  fullName: string;
  role?: UserRole;
}

export enum UserRole {
  ADMIN = 'admin',
  CLIENT = 'client'
}
