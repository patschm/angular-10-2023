import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { selectProductgroup } from './productgroup.actions';
import { ProductGroup } from '../../../core/entities';

export interface IProductgroupState {
    currentProductgroup: ProductGroup;
}

export const productgroupSlice = createFeatureSelector<IProductgroupState>("productgroup");
export const productgroupSelect = createSelector(productgroupSlice, (state:any)=>state.currentProductgroup);

export const initialState: IProductgroupState = {
    currentProductgroup: new ProductGroup()
}

export const productgroupReducer = createReducer(
  initialState,
  on(selectProductgroup, (state, payload)=> ({...state, currentProductgroup:payload}))
);




