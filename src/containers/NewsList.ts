import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../store/actions/actionCreators';
import { INewsModel } from '../models/NewsModel';
import { AppState } from '../store/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../store/actions/types';
import Home from '../components/Home';

export interface LinkStateToProps {
    news: INewsModel[];
}

export interface LinkDispatchToProps {
    addAllNewsAction: (news: INewsModel[]) => void;
}

const mapStateToProps = (state: AppState, ownProps: INewsModel): LinkStateToProps => ({
    news: state.news,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>, ownProps: INewsModel): LinkDispatchToProps => ({
    addAllNewsAction: bindActionCreators(actionCreators.addAllNewsAction, dispatch),
});

const NewsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default NewsList;