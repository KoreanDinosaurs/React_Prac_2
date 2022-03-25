// Actions
const LOAD   = 'data/LOAD';
const CREATE = 'data/CREATE';
const initialState = {list:[
    {
        word: "말하는감자",
        sound: "뫌하는괌좌",
        meaning: "사고가 멈춘 상태",
        example: "난 말하는 감자야",
        translation: "나도 모르겠어",
    }
]};

// Action Creators
export function loadData() {
  return { type: LOAD };
}

export function createData(data) {
  return { type: CREATE, data };
}


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case LOAD:
          return state;
      case CREATE:
          const new_dictionary_arr = [...state.list, action.data]
          console.log("만들거야", new_dictionary_arr)
          return {list: new_dictionary_arr};
      default: return state;
    }
  }