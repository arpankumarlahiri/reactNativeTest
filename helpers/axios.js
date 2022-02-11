import axios from 'axios';

axios.defaults.headers.common = {
    "X-Requested-With": "XMLHttpRequest",
    "X-CSRFToken": "example-of-custom-header"
};

axios.defaults.baseURL = 'https://youtube.googleapis.com/youtube'
export default axios;