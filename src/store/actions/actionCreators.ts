import { INewsModel } from '../../models/NewsModel';
import { ADD_ALL_NEWS, AppActions } from './types';
import { Dispatch } from 'redux';
import { AppState } from '../configureStore';

export const setAddingAllNews = (news: INewsModel[]): AppActions => ({
    type: ADD_ALL_NEWS,
    news,
});

export const addAllNewsAction = (news: INewsModel[]) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        dispatch(setAddingAllNews(news));
    }
}