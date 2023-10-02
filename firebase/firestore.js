import { db } from "./config";
import { collection, setDoc, doc, updateDoc, getDoc } from "firebase/firestore";

export async function addTransaction(id) {
  try {
    const moneyCol = collection(db, "money");
    const newDocRef = doc(moneyCol, id);

    const data = {
      budget: 0,
      transactions: [],
    };

    await setDoc(newDocRef, data);
  } catch (err) {
    console.clear();
    console.log("Error:", err.message);
  }
}

export async function updateTransaction(id, transaction) {
  try {
    // Specify the reference to the document with the given ID
    const docRef = doc(db, "money", id);
    const previousData = await getTransanctions(id);
    let newData;
    // if previousData doesn't exists
    if (previousData == undefined) {
      newData = {
        budget: 0,
        transactions: [],
      };
    }
    // if previous data exists
    else {
      const transactions = [...previousData.transactions, transaction];
      const budget = previousData.budget;

      newData = {
        budget,
        transactions,
      };
    }
    // Use updateDoc to update the document with the new data
    // { merge: true } is used to create a doc if doesn't exist
    await setDoc(docRef, newData, { merge: true });
    console.log("Document updated successfully!");
  } catch (err) {
    console.log("Error -> ", err.message);
  }
}

export async function getTransanctions(id) {
  try {
    // get the collection -> then doc
    const moneyCol = collection(db, "money");
    const docRef = doc(moneyCol, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log(data);
      return data;
    }
  } catch (err) {
    console.log("Error", err.message);
  }
}
