import { District, Province, Ward } from '../models';

// TODO: Need discuss and refine
export const listProvinces: Province[] = [
  {
    provinceId: 1,
    provinceName: 'TP.HCM'
  },
  {
    provinceId: 2,
    provinceName: 'Hà Nội'
  },
];

export const listDistrict: District[] = [
  {
    "districtId": 1,
    "provinceId": 1,
    "districtName": "District 1"
  },
  {
    "districtId": 2,
    "provinceId": 2,
    "districtName": "District 2"
  },
  {
    "districtId": 3,
    "provinceId": 3,
    "districtName": "District 3"
  },
  {
    "districtId": 4,
    "provinceId": 4,
    "districtName": "District 4"
  },
  {
    "districtId": 5,
    "provinceId": 5,
    "districtName": "District 5"
  },
  {
    "districtId": 6,
    "provinceId": 6,
    "districtName": "District 6"
  },
  {
    "districtId": 7,
    "provinceId": 7,
    "districtName": "District 7"
  },
  {
    "districtId": 8,
    "provinceId": 8,
    "districtName": "District 8"
  },
  {
    "districtId": 9,
    "provinceId": 9,
    "districtName": "District 9"
  },
  {
    "districtId": 10,
    "provinceId": 10,
    "districtName": "District 10"
  },
  {
    "districtId": 11,
    "provinceId": 11,
    "districtName": "District 11"
  },
  {
    "districtId": 12,
    "provinceId": 12,
    "districtName": "District 12"
  },
  {
    "districtId": 13,
    "provinceId": 13,
    "districtName": "Thu Duc City"
  },
  {
    "districtId": 14,
    "provinceId": 14,
    "districtName": "Binh Tan District"
  },
  {
    "districtId": 15,
    "provinceId": 15,
    "districtName": "Binh Thanh District"
  },
  {
    "districtId": 16,
    "provinceId": 16,
    "districtName": "Go Vap District"
  },
  {
    "districtId": 17,
    "provinceId": 17,
    "districtName": "Phu Nhuan District"
  },
  {
    "districtId": 18,
    "provinceId": 18,
    "districtName": "Tan Binh District"
  },
  {
    "districtId": 19,
    "provinceId": 19,
    "districtName": "Tan Phu District"
  },
];

export const listWards: Ward[] = [
  {
    wardId: 1,
    districtId: 1,
    wardName: 'Ward 1',
  }
];
