//import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise';
//import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//import VideoDetail from './components/video_detail';
//const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
class App extends Component {
  
  render() {
    return (
      <div>
        <SearchBar/>
        <VideoDetail/>
        <VideoList/>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
