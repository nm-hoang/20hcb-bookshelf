import { District, Province, Ward } from '../models';

export const listProvinces: Province[] = [
  {
    provinceid: 1,
    provincename: 'TP.HCM'
  },
  {
    provinceid: 2,
    provincename: 'Hà Nội'
  },
];

export const listDistrict: District[] = [
  {
    districtid: 1,
    provinceid: 1,
    districtname: 'Tân Bình'
  }
];

export const listWards: Ward[] = [
  {
    wardid: 1,
    districtid: 1,
    wardname: 'Phường 4',
  }];