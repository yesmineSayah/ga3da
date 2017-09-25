import axios from 'axios';
import config from './config.json';
import { refresh } from './auth.service.js';
let url = config.host + "/api/nights";

export function getAllNights() {
    return new Promise((resolve, reject) => {
        axios.get(url).then(response => {
            let nights = response.data.data;
            resolve(nights);
        }).catch((err) => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    getAllNights();
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}
export function getNightById(id) {
    return new Promise((resolve, reject) => {
        axios.get(url + "/" + id).then(response => {
            let night = response.data.data;
            resolve(night);
        }).catch(err => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    getNightById(id);
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}

export function insertNight(night) {
    return new Promise((resolve, reject) => {
        axios.post(url, night).then(response => {
            let night = response.data.data;
            resolve(night);
        }).catch(err => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    insertNight(night);
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}

export function editNight(night) {
    return new Promise((resolve, reject) => {
        let id = night._id;
        axios.put(url + "/" + id, night).then(response => {
            let night = response.data.data;
            resolve(night);
        }).catch(err => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    editNight(night);
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}

export function deleteNight(id) {
    return new Promise((resolve, reject) => {
        axios.delete(url + "/" + id).then(response => {
            resolve();
        }).catch(err => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    deleteNight(id);
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}