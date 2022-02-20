import axios from "axios";
const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});
export const characterAPI = {
    getCharacters({pageNumber, gender,status,species}) {
        return instance.get(`character/?page=${pageNumber}
        ${(gender && gender!=="Gender")?`&gender=${gender}`:""}
        ${(status && status!=="Status")?`&status=${status}`:""}
        ${(species)?`&species=${species}`:""}`);
      }
};