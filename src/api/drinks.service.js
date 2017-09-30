import axios from 'axios';
import config from './config.json';
import { refresh } from './auth.service.js';
let url = config.host + "/api/drinks";

export function getAllDrinks() {
    return new Promise((resolve, reject) => {
        axios.get(url).then(response => {
            let drinks = response.data.data;
            resolve(drinks);
        }).catch((err) => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    getAllDrinks();
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}
export function getDrinkById(id) {
    return new Promise((resolve, reject) => {
        axios.get(url + "/" + id).then(response => {
            let drink = response.data.data;
            resolve(drink);
        }).catch(err => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    getDrinkById(id);
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}

export function insertDrink(drink) {
    return new Promise((resolve, reject) => {
        axios.post(url, drink).then(response => {
            let drink = response.data.data;
            resolve(drink);
        }).catch(err => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    insertDrink(drink);
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}

export function editDrink(drink) {
    return new Promise((resolve, reject) => {
        let id = drink.id;
        drink._method = 'PUT';
        axios.put(url + "/" + id, drink).then(response => {
            let drink = response.data.data;
            resolve(drink);
        }).catch(err => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    editDrink(drink);
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}

export function deleteDrink(id) {
    return new Promise((resolve, reject) => {
        axios.delete(url + "/" + id).then(response => {
            resolve();
        }).catch(err => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    deleteDrink(id);
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}