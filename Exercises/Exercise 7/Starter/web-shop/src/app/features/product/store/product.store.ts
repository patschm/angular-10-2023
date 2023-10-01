import { createReducer, on } from "@ngrx/store";
import { selectProduct } from "./product.actions";
import { Product } from "../../../core/entities";

export interface IProductState {
  currentProduct: Product
}

export const productSelect = (state: any) => state.product;

export const initialState: IProductState = {
  currentProduct: new Product()
}

export const productReducer = createReducer(
  initialState,
  on(selectProduct, (state, action) => ({ currentProduct: action }))
);
