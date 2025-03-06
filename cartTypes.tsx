export interface Product {
  id: string;
  name: string;
  image: string;
  price: {
    original: number;
    discounted: number;
  };
}

export interface CartItemType {
  id: string;
  product_id: Product;
  quantity: number;
}

export interface Cart {
  items: CartItemType[];
  totalPrice: number;
}
