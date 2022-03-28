// Actions
const LOAD   = 'data/LOAD';
const CREATE = 'data/CREATE';
const UPDATE = 'data/UPDATE';
const DELETE = 'data/DELETE';
const REVISE = 'data/REVISE';
// const initialState = {list:[
//     { 
//       id: 0,  
//       language: 'cn',
//       word: "중국감자",
//       sound: "뫌하는괌좌",
//       meaning: "강원도감자",
//       example: "맛있어요",
//       translation: "비싸요",
//       completed: 0,
//     },
//     {   
//       id: 1, 
//       language: 'en',
//       word: "영어감자",
//       sound: "뫌하는괌좌",
//       meaning: "강원도감자",
//       example: "맛있어요",
//       translation: "비싸요",
//       completed: 0,
//     },
//     {   
//       id: 2, 
//       language: 'ja',
//       word: "일본감자",
//       sound: "뫌하는괌좌",
//       meaning: "강원도감자",
//       example: "맛있어요",
//       translation: "비싸요",
//       completed: 0,
//     }
// ]};

// Action Creators
export function loadData() {
  return { type: LOAD };
}

export function createData(data) {
  return { type: CREATE, data };
}

export function updateData(data) {
  return { type: UPDATE, data };
}

export function deleteData(data) {
  return { type: DELETE, data };
}

export function reviseData(data, index) {
  return { type: REVISE, data, index};
}

// Reducer
export default function reducer(state = {}, action = {}) {
    switch (action.type) {
      case LOAD:
          return state;
      case CREATE:
          const new_dictionary_arr = [...state.list, action.data]
          console.log(new_dictionary_arr)
          return {list: new_dictionary_arr};
      case UPDATE:
          const update_dictionary_arr = state.list.map((v, i) => v.id === parseInt(action.data) ? (v.completed ? {...v, completed: 0} : {...v, completed: 1}) : v)
          return {list: update_dictionary_arr};
      case DELETE:
          const delete_dictionary_arr = state.list.filter((v, i) => v.id !== parseInt(action.data))
          return {list: delete_dictionary_arr}
      case REVISE:
          const revise_dictionart_arr = state.list.map((v, i) => v.id === parseInt(action.index) ? {language: v.language, completed: v.completed, id: v.id, ...action.data} : v)
          console.log(revise_dictionart_arr)
          return {list: revise_dictionart_arr};
      default: return state;
    }
  }