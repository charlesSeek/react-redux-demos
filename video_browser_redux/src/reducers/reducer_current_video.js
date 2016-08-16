export default function(state=null, action) {
  switch (action.type) {
  case 'FETCH_CURRENT_VIDEO':
    return  action.payload
  }
  return state;
}