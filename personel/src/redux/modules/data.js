// Actions
const LOAD   = 'data/LOAD';
const CREATE = 'data/CREATE';
const UPDATE = 'data/UPDATE';
const initialState = {list:[
    {
        word: "말하는감자",
        sound: "뫌하는괌좌",
        meaning: "",
        example: "",
        translation: "",
        completed: 0,
    }
]};

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


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case LOAD:
          return state;
      case CREATE:
          const new_dictionary_arr = [...state.list, action.data]
          console.log("추가하기", new_dictionary_arr)
          return {list: new_dictionary_arr};
      case UPDATE:
          const update_dictionary_arr = state.list.map((v, i) => i === parseInt(action.data) ? (v.completed ? {...v, completed: 0} : {...v, completed: 1}) : v)
          console.log("업데이트", update_dictionary_arr)
          return {list: update_dictionary_arr};
      default: return state;
    }
  }