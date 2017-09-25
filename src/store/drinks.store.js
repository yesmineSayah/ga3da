import { getAllDrinks, getDrinkById, insertDrink, editDrink, deleteDrink } from '@/api/drinks.service.js';

export default {
    state: {
        drinks: [],
        selectedDrink: {}
    },
    getters: {
        getAllDrinks(state) {
            return state.drinks;
        },
        getSelectedDrink(state) {
            return state.selectedDrink;
        }
    },
    mutations: {
        getAllDrinks(state, drinks) {
            state.drinks = drinks;
        },
        getDrinkById(state, drink) {
            for (let i = 0; i < state.drinks.length; i++) {
                if (state.drinks._id === drink._id) {
                    state.drinks.splice(i, 1);
                    break;
                }
            }
            state.drinks.push(drink);
        },
        setSelectedDrink(state, drink) {
            state.selectedDrink = drink;
        },
        deleteDrink(state, id) {
            for (let i = 0; i < state.drinks.length; i++) {
                if (state.drinks._id === id) {
                    state.drinks.splice(i, 1);
                    break;
                }
            }
        }
    },
    actions: {
        getAllDrinks(context) {
            return new Promise((resolve, reject) => {
                getAllDrinks().then(drinks => {
                    context.commit("getAllDrinks", drinks);
                    resolve(drinks);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        getDrinkById(context, id) {
            return new Promise((resolve, reject) => {
                getDrinkById(id).then(drink => {
                    context.commit("getDrinkById", drink);
                    context.commit("setSelectedDrink", drink);
                    resolve(drink);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        insertDrink(context, drink) {
            return new Promise((resolve, reject) => {
                insertDrink(drink).then(drink => {
                    resolve(drink);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        editDrink(context, drink) {
            return new Promise((resolve, reject) => {
                editDrink(drink).then(drink => {
                    resolve(drink);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        deleteDrink(context, id) {
            return new Promise((resolve, reject) => {
                deleteDrink(id).then(() => {
                    context.commit('deleteDrink', id);
                    resolve();
                }).catch(err => {
                    reject(err);
                })
            });
        }
    }
}