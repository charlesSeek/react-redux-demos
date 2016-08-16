import React,{Component} from 'react';
import {connect} from 'react-redux'
import {fetchCurrentVideo} from '../actions/index'

class VideoListItem  extends Component{
  videoClick(){
    const video = this.props.video;
    this.props.fetchCurrentVideo(video);
  }
  render(){
    if (!this.props.video){
      return <div>Loading...</div>
    }
    const imageUrl = this.props.video.snippet.thumbnails.default.url;
    return(
      <li className='list-group-item' onClick={this.videoClick.bind(this)}>
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">{this.props.video.snippet.title}</div>
          </div>
        </div>
      </li>
    )
  }
}
export default connect(null,{fetchCurrentVideo})(VideoListItem);
