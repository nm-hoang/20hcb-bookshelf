export interface Order {
  name?: string;
  email?: string;
  phoneNumber?: string;
  province?: Province;
  district?: District;
  ward?: Ward;
  address?: string;
  paymentMethod: PaymentMethod;
}

export interface Province {
  provinceId: number;
  provinceName: string;
}
export interface District {
  districtId: number;
  provinceId: number;
  districtName: string;
}
export interface Ward {
  wardId: number;
  districtId: number;
  wardName: string;
}
export enum PaymentMethod {
  COD = 'cod',
  MOMO = 'momo',
  VISA_CARD = 'visa-card'
}
