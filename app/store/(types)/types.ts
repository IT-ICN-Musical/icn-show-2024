export type CartItem = {
  id: number;
  product: Product[];
};

export type Product = {
  productId: number;
  audience: Audience[];
};

export type Audience = {
  audienceId: number;
  name: string;
};

export type BackendData = {
  productName: string;
  matineeTicketPriceSgd: number;
  nightTicketPriceSgd: number;
  startPeriodSgt: string;
  endPeriodSgt: string;
  productDescription: string;
  productId: number;
  createdAt: string;
  updatedAt: string;
  matineeTicketStock: number;
  allocatedMatineeTicketStock: number;
  allocatedNightTicketStock: number;
  nightTicketStock: number;
};

export type StoreItemData = {
  id: number;
  productId: number;
  name: string;
  description: string;
  startPeriod: string;
  endPeriod: string;
  price: number;
  stock: number;
  imgUrl: string;
  isPromotion: boolean;
  showTime: string;
  numTickets: number;
};
