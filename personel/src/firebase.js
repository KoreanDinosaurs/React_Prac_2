//firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjcDU1MX9pqD_pWwZV2g2mz1Z2QZAS3X0",
    authDomain: "dictionary-193e4.firebaseapp.com",
    projectId: "dictionary-193e4",
    storageBucket: "dictionary-193e4.appspot.com",
    messagingSenderId: "193172171472",
    appId: "1:193172171472:web:2abf8788a56bbe58734cd5",
    measurementId: "G-MJSZ6XR9QL"
  };

// firebaseConfig 정보로 firebase 시작
initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
// const db = getFirestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export const db = getFirestore();