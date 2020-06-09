import { INewsModel } from '../../models/NewsModel';

export const ADD_ALL_NEWS = 'ADD_ALL_NEWS';

export interface AddAllNewsAction {
    type: typeof ADD_ALL_NEWS;
    news: INewsModel[];
}

export type NewsActionTypes = AddAllNewsAction;

export type AppActions = NewsActionTypes;