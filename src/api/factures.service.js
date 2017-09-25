import axios from 'axios';
import config from './config.json';
import { refresh } from './auth.service.js';
let url = config.host + "/api/v1/secure/factures";

export function getAllFactures() {
    return new Promise((resolve, reject) => {
        axios.get(url).then(response => {
            let factures = response.data.data;
            resolve(factures);
        }).catch((err) => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    getAllFactures();
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}
export function getFactureById(id) {
    return new Promise((resolve, reject) => {
        axios.get(url + "/" + id).then(response => {
            let facture = response.data.data;
            resolve(facture);
        }).catch(err => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    getFactureById(id);
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}

export function insertFacture(facture) {
    return new Promise((resolve, reject) => {
        axios.post(url, facture).then(response => {
            let facture = response.data.data;
            resolve(facture);
        }).catch(err => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    insertFacture(facture);
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}

export function editFacture(facture) {
    return new Promise((resolve, reject) => {
        let id = facture._id;
        axios.put(url + "/" + id, facture).then(response => {
            let facture = response.data.data;
            resolve(facture);
        }).catch(err => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    editFacture(facture);
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}

export function deleteFacture(id) {
    return new Promise((resolve, reject) => {
        axios.delete(url + "/" + id).then(response => {
            resolve();
        }).catch(err => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    deleteFacture(id);
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}