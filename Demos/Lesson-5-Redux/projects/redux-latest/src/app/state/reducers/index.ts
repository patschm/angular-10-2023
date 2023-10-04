import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { IState, overviewReducer } from "..";
import { isDevMode } from "@angular/core";

export const reducers: ActionReducerMap<IState> = {
    overview:overviewReducer
};

export const metaReducers: MetaReducer<IState>[] = isDevMode() ? [] : [];