import axios from 'axios';


const bible = axios.create({
	baseURL: "https://bibleapi.co/api/verses"
});

export default bible;

