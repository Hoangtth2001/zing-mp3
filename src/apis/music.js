import { ref, child, get } from "firebase/database";
import { database } from "../firebase";

export const getinforMusic = () => {
  const dbRef = ref(database);
  return new Promise((resolve, reject) => {
    get(child(dbRef, 'Music')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log("call success");
        const arrMusic = snapshot.val();
        resolve(arrMusic); // Trả về arrMusic qua resolve
      } else {
        console.log("No data available");
        resolve([]); // Trả về mảng rỗng nếu không có dữ liệu
      }
    }).catch((error) => {
      console.error(error);
      reject(error); // Trả về lỗi qua reject
    });
  });
}

