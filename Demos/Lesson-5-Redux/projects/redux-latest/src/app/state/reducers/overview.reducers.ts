import { createReducer, on } from "@ngrx/store";
import { OverviewActions } from "../actions/overview.actions";
import { IOverviewState } from "../interfaces";

const initialState:IOverviewState = { 
    selected:'', 
    items:[]
};

export const overviewReducer = createReducer<IOverviewState>(
    initialState,
    on(OverviewActions.select, (state, {item})=>({...state, selected:item})),
    on(OverviewActions.add, (state, {item})=>({...state, items:[...state.items, item] })),
    on(OverviewActions.loaded, (state, {items} )=>({...state, items:items}))
);