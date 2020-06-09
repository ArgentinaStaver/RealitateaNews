import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { store } from './store/configureStore';
import * as serviceWorker from './serviceWorker';
import NewsList from './containers/NewsList';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div>
          <Route path='/' exact component={NewsList} />
        </div>        
      </Router>       
    </Provider>   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
