import axios from "axios";

axios.defaults.baseURL = "https://www.thecocktaildb.com/api/json/v1/1";

export const DB = {
  getCategoryList() {
    return axios.get("/list.php?c=list");
  },
  getCoctails() {
    return axios.get("/search.php?f=a");
  },
  getCoctailsByLetter(letter) {
    return axios.get(`/search.php?f=${letter}`);
  },
  getCoctailsByName(name) {
    return axios.get(`search.php?i=${name}`);
  },
  getSingleCoctail(coctailName) {
    return axios.get(`/search.php?s=${coctailName}`);
  },
  searchByCategory(category) {
    return axios.get(`/filter.php?c=${category}`);
  },
};
