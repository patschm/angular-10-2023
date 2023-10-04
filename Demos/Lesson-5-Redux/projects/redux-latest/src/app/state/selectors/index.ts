import { createSelector } from "@ngrx/store";
import { IOverviewState, IState } from "../interfaces";

export const overviewSelector = (state:IState)=>state.overview;
export const overviewSelectedSelector = createSelector(
    overviewSelector,
    (state:IOverviewState)=>state.selected
);
export const overviewItemsSelector = createSelector(
    overviewSelector,
    (state:IOverviewState)=>state.items
);