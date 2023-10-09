import { productReducer } from "src/app/features/product/store/product.store";
import { productgroupReducer } from "src/app/features/productgroup/store/productgroup.store";

export const reducermap = {
    productgroup:productgroupReducer,
    product:productReducer
};