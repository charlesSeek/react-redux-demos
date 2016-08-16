import axios from 'axios';
const  ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY='AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss'
export function fetchVideos(term){
	var params = {
    	part: 'snippet',
    	key: API_KEY,
    	q: term,
    	type: 'video'
  	};
	const request = axios.get(ROOT_URL,{params:params});
	return{
		type:'FETCH_VIDEOS',
		payload:request
	}
}
export function fetchCurrentVideo(video){
	return {
		type:'FETCH_CURRENT_VIDEO',
		payload:video
	}
}