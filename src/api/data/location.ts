import { District, Province, Ward } from '../models';

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
    districtId: 1,
    provinceId: 1,
    districtName: 'Tân Bình'
  }
];

export const listWards: Ward[] = [
  {
    wardId: 1,
    districtId: 1,
    wardName: 'Phường 4',
  }];
