import { createFeatureSelector, createSelector } from '@ngrx/store';

export const featureKey = 'feature';

export interface FeatureState {
  counter: number;
}

export interface AppState {
  feature: FeatureState;
}

// export const selectFeature = (state: AppState) => state.feature;
// export const selectFeature = createFeatureSelector<FeatureState>(featureKey);
export const selectFeature = (state: FeatureState) => state.counter;
export const selectFeatureCount = createSelector(
  selectFeature,
  (state: number) => state
);
