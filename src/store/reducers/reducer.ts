import { ADD_ALL_NEWS, NewsActionTypes } from '../actions/types';
import { INewsModel } from '../../models/NewsModel';

const initialState: INewsModel[] = [];

const newsReducer = (
    state = initialState,
    action: NewsActionTypes,
): INewsModel[] => {
    switch (action.type) {
        case ADD_ALL_NEWS:
            return [...action.news];
        default: 
            return state;
    }
}

export { newsReducer };