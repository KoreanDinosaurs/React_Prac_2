// Actions
const LOAD   = 'data/LOAD';
const CREATE = 'data/CREATE'

// Action Creators
export function loadWidgets() {
  return { type: LOAD };
}

export function createWidget(widget) {
  return { type: CREATE, widget };
}


// Reducer
export default function reducer(state = {}, action = {}) {
    switch (action.type) {
      case LOAD:
          return state;
      default: return state;
    }
  }