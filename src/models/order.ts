export interface Order {
  name?: string;
  email?: string;
  phonenumber?: string;
  province?: Province;
  district?: District;
  Ward?: Ward;
  address?: string;
  paymentmethod: PaymentMethod;
}

export interface Province {
  provinceid: number;
  provincename: string;
}
export interface District {
  districtid: number;
  provinceid: number;
  districtname: string;
}
export interface Ward {
  wardid: number;
  districtid: number;
  wardname: string;
}
export enum PaymentMethod {
  COD = 'cod',
  MOMO = 'momo',
  VISACARD = 'visacard'
}