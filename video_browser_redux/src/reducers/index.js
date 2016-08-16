import { combineReducers } from 'redux';
import VideosReducer from './reducer_videos';
import CurrentVideoReducer from './reducer_current_video'

const rootReducer = combineReducers({
  videos: VideosReducer,
  currentVideo:CurrentVideoReducer
});

export default rootReducer;