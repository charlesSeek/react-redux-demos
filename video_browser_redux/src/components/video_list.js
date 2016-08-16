import React,{Component} from 'react';
import VideoListItem from './video_list_item';
import {connect} from 'react-redux'
import {fetchVideos,fetchCurrentVideo} from '../actions/index'

class VideoList extends Component {
  componentWillMount(){
    this.props.fetchVideos('surfboard');
  }
  componentDidUpdate(){
    if (this.props.videos.length>=1){
      this.props.fetchCurrentVideo(this.props.videos[0]);
    }
  }
  render(){
    if (this.props.videos.length<1){
      return <div>Loading...</div>
    }
    const videoItems = this.props.videos.map((video)=>{
      return(
        <VideoListItem
        key={video.etag}
        video={video} />
      )
    })
    return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    )
  }
}
function mapStateToProps({ videos }) {
  return { videos };
}

export default connect(mapStateToProps, {fetchVideos,fetchCurrentVideo})(VideoList);
