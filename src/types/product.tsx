export interface IRootObject {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'sucsess',
  ERROR = 'error',
}

export interface ProductSliceState {
  products: IProduct[];
  isLoading: Status;
}
