import { CartItem } from '../models';

export const moneyAfterDiscount =
  (money: number, discount?: number) => money - (money * discount!) / 100;

export const moneyItemSummarize =
  (money: number, discount?: number, quantity?: number) => moneyAfterDiscount(money, discount) * quantity!;

export const moneyCartSummarize =
  (cart: CartItem[]) => {
    const total = cart.reduce((currentTotal, item) => {
      return currentTotal + (item.checked === true ? moneyItemSummarize(item?.price!, item?.discount!, item?.quantity!) : 0);
    }, 0);
    return total;
  };
