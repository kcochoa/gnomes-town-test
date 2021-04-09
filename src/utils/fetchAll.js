import axios from "axios";
const BASE_URL =
  "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

export async function fetchAll() {
    const response = await axios.get(BASE_URL);
 
    const data = response.data.Brastlewark;
    return data;

 
  
}
