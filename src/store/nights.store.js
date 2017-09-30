import { getAllNights, getNightById, insertNight, editNight, deleteNight } from '@/api/nights.service.js';

export default {
    state: {
        nights: [],
        selectedNight: {}
    },
    getters: {
        getAllNights(state) {
            return state.nights;
        },
        getSelectedNight(state) {
            return state.selectedNight;
        }
    },
    mutations: {
        getAllNights(state, nights) {
            state.nights = nights;
        },
        getNightById(state, night) {
            for (let i = 0; i < state.nights.length; i++) {
                if (state.nights.id === night.id) {
                    state.nights.splice(i, 1);
                    break;
                }
            }
            state.nights.push(night);
        },
        setSelectedNight(state, night) {
            state.selectedNight = night;
        },
        deleteNight(state, id) {
            for (let i = 0; i < state.nights.length; i++) {
                if (state.nights.id === id) {
                    state.nights.splice(i, 1);
                    break;
                }
            }
        }
    },
    actions: {
        getAllNights(context) {
            return new Promise((resolve, reject) => {
                getAllNights().then(nights => {
                    context.commit("getAllNights", nights);
                    resolve(nights);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        getNightById(context, id) {
            return new Promise((resolve, reject) => {
                getNightById(id).then(night => {
                    context.commit("getNightById", night);
                    context.commit("setSelectedNight", night);
                    resolve(night);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        insertNight(context, night) {
            return new Promise((resolve, reject) => {
                insertNight(night).then(night => {
                    resolve(night);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        editNight(context, night) {
            return new Promise((resolve, reject) => {
                editNight(night).then(night => {
                    resolve(night);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        deleteNight(context, id) {
            return new Promise((resolve, reject) => {
                deleteNight(id).then(() => {
                    context.commit('deleteNight', id);
                    resolve();
                }).catch(err => {
                    reject(err);
                })
            });
        }
    }
}