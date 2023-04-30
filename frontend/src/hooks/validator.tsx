import axios from "axios";



export default async function validator () : Promise<number> {
    const baseURL = `http://${window.location.hostname}:5000/validate`;
    const response = await axios.get(baseURL);
    if (response.status === 200)
        return response.data;
    return -1;
}