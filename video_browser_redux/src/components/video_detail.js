import React,{Component} from 'react';
import {connect} from 'react-redux'

class VideoDetail extends Component{
  render(){
    if (!this.props.currentVideo){
      return <div>Loading...</div>
    }
    const videoId = this.props.currentVideo.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url}></iframe>
          </div>
          <div className="details">
            <div>{this.props.currentVideo.snippet.title}</div>
            <div>{this.props.currentVideo.snippet.description}</div>
          </div>
        </div>
    )
  }
  
}
function mapStateToProps({currentVideo}){
  return {currentVideo};
}
export default connect(mapStateToProps)(VideoDetail);
