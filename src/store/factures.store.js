import { getAllFactures, getFactureById, insertFacture, editFacture, deleteFacture } from '@/api/factures.service.js';

export default {
    state: {
        factures: [],
        selectedFacture: {}
    },
    getters: {
        getAllFactures(state) {
            return state.factures;
        },
        getSelectedFacture(state) {
            return state.selectedFacture;
        }
    },
    mutations: {
        getAllFactures(state, factures) {
            state.factures = factures;
        },
        getFactureById(state, facture) {
            for (let i = 0; i < state.factures.length; i++) {
                if (state.factures._id === facture._id) {
                    state.factures.splice(i, 1);
                    break;
                }
            }
            state.factures.push(facture);
        },
        setSelectedFacture(state, facture) {
            state.selectedFacture = facture;
        },
        deleteFacture(state, id) {
            for (let i = 0; i < state.factures.length; i++) {
                if (state.factures._id === id) {
                    state.factures.splice(i, 1);
                    break;
                }
            }
        }
    },
    actions: {
        getAllFactures(context) {
            return new Promise((resolve, reject) => {
                getAllFactures().then(factures => {
                    context.commit("getAllFactures", factures);
                    resolve(factures);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        getFactureById(context, id) {
            return new Promise((resolve, reject) => {
                getFactureById(id).then(facture => {
                    context.commit("getFactureById", facture);
                    context.commit("setSelectedFacture", facture);
                    resolve(facture);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        insertFacture(context, facture) {
            return new Promise((resolve, reject) => {
                insertFacture(facture).then(facture => {
                    resolve(facture);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        editFacture(context, facture) {
            return new Promise((resolve, reject) => {
                editFacture(facture).then(facture => {
                    resolve(facture);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        deleteFacture(context, id) {
            return new Promise((resolve, reject) => {
                deleteFacture(id).then(() => {
                    context.commit('deleteFacture', id);
                    resolve();
                }).catch(err => {
                    reject(err);
                })
            });
        }
    }
}