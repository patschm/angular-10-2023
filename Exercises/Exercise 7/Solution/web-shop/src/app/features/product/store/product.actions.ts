import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./action.types";
import { Product } from "../../../core/entities";

export const selectProduct = createAction(
    ActionTypes.SelectProduct, props<Product>()
  );