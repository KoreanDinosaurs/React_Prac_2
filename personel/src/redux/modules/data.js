import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import {db} from "../../firebase";

// Actions
const LOAD   = 'data/LOAD';
const CREATE = 'data/CREATE';
const UPDATE = 'data/UPDATE';
const DELETE = 'data/DELETE';
const REVISE = 'data/REVISE';
const initialState = {list:[]
};

// Action Creators
export function loadData(data_list) {
  return { type: LOAD, data_list};
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

// Middlewares
export const loadDataFB = () => {
  return async function (dispatch) {
    // 데이터 가져오기!
    const data = await getDocs(collection(db, "dictionary"));
    
    let data_list = [];

    // 하나씩 우리가 쓸 수 있는 배열 데이터로 만들어주기!
    data.forEach(v => {
      // 콘솔로 확인하기!
      // console.log("데이터 잘 불러와지나?", v.id, v.data())
      data_list.push({id: v.id, ...v.data()})
    })
    // 잘만들어졌는지 확인해보자!
    // console.log(data_list);
    dispatch(loadData(data_list));
  }
}

export const createDataFB = (data) => {
  return async function (dispatch){
    // 파이어스토어에 추가되기를 기다리기! 비동기니깐!
    const docRef = await addDoc(collection(db, "dictionary"), data)
    // 추가한 데이터 중 id를 가져와서 객체를 생성해주기!
    const data_list = {id: docRef.id, ...data}
    // 수정해달라고 요청하기!
    dispatch(createData(data_list));
  }
}

export const updateDataFB = (data, id) => {
  return async function (dispatch, getState){
    // 수정할 도큐먼트를 가져오고,
    const docRef = doc(db, "dictionary", id)
    // 수정!
    await updateDoc(docRef, data)
    // getState()를 사용해서 스토어의 데이터를 가져올 수 있어!
    // console.log(getState().data)
    // data_list 데이터를 가져오자
    // const _data_list = getState().data.list
    // 몇번째인지 찾기!
    // const data_index = _data_list.findIndex(v => v.id === id);
    // console.log(data_index)
    dispatch(reviseData(data, id))
  }
}

export const updateDataFB2 = (id) => {
  return async function (dispatch, getState){
    // 수정할 도큐먼트를 가져오고,
    const docRef = doc(db, "dictionary", id)
    const docSnap = await getDoc(docRef)
    // 수정!
    if(docSnap.data().completed) await updateDoc(docRef, {completed: 0})
    else await updateDoc(docRef, {completed: 1})
    
    // console.log(docRef.completed)
    // if(docRef.completed) await updateDoc(docRef, {completed: 1})
    // else await updateDoc(docRef, {completed: 1})
    
    // getState()를 사용해서 스토어의 데이터를 가져올 수 있어!
    console.log(getState().data)
    // data_list 데이터를 가져오자
    // const _data_list = getState().data.list
    // 몇번째인지 찾기!
    // const data_index = _data_list.findIndex(v => v.id === id);
    // console.log(data_index)
    dispatch(updateData(id))
  }
}

export const deleteDataFB = (id) => {
  return async function (dispatch, getState){
    const docRef = doc(db, "dictionary", id)
    await deleteDoc(docRef)
    
    // const _data_list = getState().data.list
    // const data_index = _data_list.findIndex(v => v.id === id);
    dispatch(deleteData(id))
  }
}
 


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case LOAD:
          return {list: action.data_list};
      case CREATE:
          const new_dictionary_arr = [...state.list, action.data]
          return {list: new_dictionary_arr};
      case UPDATE:
          const update_dictionary_arr = state.list.map((v, i) => v.id === action.data ? (v.completed ? {...v, completed: 0} : {...v, completed: 1}) : v)
          return {list: update_dictionary_arr};
      case DELETE:
          const delete_dictionary_arr = state.list.filter((v, i) => v.id !== action.data)
          return {list: delete_dictionary_arr}
      case REVISE:
          const revise_dictionart_arr = state.list.map((v, i) => v.id === action.index ? {...v, ...action.data} : v)
          return {list: revise_dictionart_arr};
      default: return state;
    }
  }