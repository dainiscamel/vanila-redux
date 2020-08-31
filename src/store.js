import { createStore } from "redux";
import { createAction } from '@reduxjs/toolkit'

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter(toDo => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };



const reducer = createReducer([], {
  [addToDo] : (state, action) => {
    // 1.createReducer를 사용하면 state 를 mutate 하기에 용이. (= return 하지 않음.)
    state.push({text: action.payload, id: Date.now()})
  },
  [delelteToDo] : (state, action) => {
    // 2. createReducer를 사용하면 state를 return 할 수 있다.(= mutate 하지 않음/)
    state.filter(toDo => toDo.id !== action.payload);
  },
})

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo
};

export default store;