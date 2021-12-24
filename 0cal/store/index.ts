// import firebase from "@/plugins/firebase";
// import { FoodType } from "~/types/food";
// import 'firebase/firestore';
// import {
//   actionTree,
//   getterTree,
//   mutationTree,
//   getAccessorType,
// } from "typed-vuex";

// const db = firebase.firestore();
// const foodsRef = db.collection("foods");

// export const state = () => ({
//   foods: [] as FoodType[],
// });

// export type State = ReturnType<typeof state>;

// export const getters = getterTree(state, {
//   getFoods(state) {
//     return state.foods;
//   },
// });

// export const mutations = mutationTree(state, {
//   addFood(state, food) {
//     state.foods.push(food);
//   },
// });

// export const actions = actionTree(
//   { state, getters, mutations },
//   {
//     add({ commit }, str: string): void {
//       foodsRef
//         .get()
//         .then((res) => {
//           res.forEach((doc) => {
//             console.log("success : " + `${doc.id} => ${doc.data()}`);
//             commit("addFood", doc.data());
//           });
//         })
//         .catch((error) => {
//           console.log("error : " + error);
//         });
//     },
//   }
// );

// export const accessorType = getAccessorType({
//   state,
//   getters,
//   mutations,
//   actions,
//   modules: {},
// });
