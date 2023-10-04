import {createActionGroup, emptyProps, props } from "@ngrx/store";

export const OverviewActions = createActionGroup({
    source:'Overview',
    events: {
        'Select':props<{item:string}>(),
        'Add':props<{item:string}>(),
        'Fetch':emptyProps(),
        'Loaded': props<{items:string[]}>()
    }
});