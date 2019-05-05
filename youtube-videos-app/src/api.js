import axios from 'axios';

const KEY = 'AIzaSyDPXWqQne57qpyhkAzk0JbEL81RUtkSjUc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
