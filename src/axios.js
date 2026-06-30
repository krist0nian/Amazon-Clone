import axios from "axios";

const instance = axios.create({
    // THE API (Cloud Function) URL
    baseURL: "http://127.0.0.1:5001/clone-9cf3b/us-central1/api"
})

export default instance;