import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const shopSelector = (state) => state.shop;

export const selectShopCollections = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

// same as last selector. Purpose : turn the object into an array to be iterable by .map function in the preview component.
export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = memoize((CollectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[CollectionUrlParam] : null
  )
);

// new selector after the redux-thunk implementation
export const selectIsCollectionFetching = createSelector(
  [shopSelector],
  (shop) => shop.isFetching
);

export const isCollectionLoaded = createSelector(
  [shopSelector],
  (shop) => !!shop.collections
);
