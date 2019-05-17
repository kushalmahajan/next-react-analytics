import { createStore, combineReducers, applyMiddleware} from 'redux';
import analyticsMiddleware from '../analyticsMiddleware';
import analyticsReducer from './reducers/analytics';
import { Analytics } from '../index';
import segmentTagClick from './analytics/listeners/segment-tag-click';

const analytics = new Analytics([segmentTagClick]);

const store = createStore(
    analyticsReducer,
    applyMiddleware(analyticsMiddleware(analytics))
);

export default store;

