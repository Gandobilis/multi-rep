import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.headers["ngrok-skip-browser-warning"] = "69420"

export default axios;