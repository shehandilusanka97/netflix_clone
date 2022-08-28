import axios from "axios";

const instance =axios.create({
    baseURL:"https://api.themovedb.org/3"
});
export default instance;