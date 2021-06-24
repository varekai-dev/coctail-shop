import axios from 'axios';

axios.defaults.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const DB = {
	getCategoryList() {
		return axios.get('/list.php?c=list');
	},
	getCoctails() {
		return axios.get('search.php?f=a');
	}
};
