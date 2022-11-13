export interface IBasket {
  id: number;
  title: string;
  price: number;
}

export interface BasketSliceState {
  basket: IBasket[];
}
