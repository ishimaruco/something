import firebase from "@/plugins/firebase";
import { FoodType } from "~/types/food";
import { actionTree, getterTree, mutationTree } from "typed-vuex";

const db = firebase.firestore();
const foodsRef = db.collection("foods");

export const state = () => ({
  foods: [] as FoodType[],
});

export type State = ReturnType<typeof state>;

export const getters = getterTree(state, {
  getFoods(state) {
    return state.foods;
  },
});

export const mutations = mutationTree(state, {
  addFood(state, food) {
    state.foods.push(food);
  },
});

export const actions = actionTree(
  { state, getters, mutations },
  {
    load({ commit }): void {
      // const history = JSON.parse(localStorage?.getItem('search') || '[]')
      // commit(
      //     'setHistory',
      //     history.filter((obj: unknown) => typeof obj === 'string' || obj instanceof String),
      // )
    },

    add({ commit }, str: string): void {
      foodsRef
        .get()
        .then((res) => {
          res.forEach((doc) => {
            console.log("success : " + `${doc.id} => ${doc.data()}`);
            commit("addFood", doc.data());
          });
        })
        .catch((error) => {
          console.log("error : " + error);
        });
    },

    remove({ commit }, str: string): void {
      // commit('removeHistory', str)
    },

    removeAll({ commit }): void {
      // commit('removeAllHistory')
    },
  }
);
