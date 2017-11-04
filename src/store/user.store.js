import { login, refresh } from '@/api/auth.service.js';

export default {
    state: {
        user: {}
    },
    getters: {
        getCurrentUser(state) {
            return state.user;
        }
    },
    mutations: {
        setCurrentUser() {

        }
    },
    actions: {
        login(context, user) {
            return new Promise((resolve, reject) => {
                login(user).then(user => {
                    context.commit('setCurrentUser');
                    resolve(user);
                }).catch(err => {
                    reject(err)
                });
            });
        },
        refresh(context) {
            return new Promise((resolve, reject) => {
                refresh().then(user => {
                    resolve(user);
                }).catch(err => {
                    reject(err)
                });
            });
        }
    }
}