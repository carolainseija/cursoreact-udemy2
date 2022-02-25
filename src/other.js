import React from "react";
import db from "./utils/firebase";
import { doc, getDoc, getDocs } from "firebase/firestore";

const getData = async () => {
    console.log("funcion")
    const docRef = doc(db, "enero", "K1Z8z344zUZ3045r12M5");
    const docSnap = await getDoc(docRef);
console.log(docSnap)
    if (docSnap.exists()) {
        const resultArray = [];
        resultArray.push(docSnap.data())
        console.log(resultArray);
    } else {
        console.log("No hay resultados");
    }
    console.log(true);
};


const Other = () => {
    return (
        <>
            <p>nueva pagina</p>
            <button onClick={getData}> prueba</button>
        </>
    )
}

export default Other;