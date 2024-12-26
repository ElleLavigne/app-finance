import { firebaseDB } from "@/services/firebase/config";
import { doc, setDoc } from "firebase/firestore";

export async function createUserExample(){
    try{
        const docRef = doc(firebaseDB, 'users/1')
        const user = {
         name:'name',
         age: 12
        }
       await setDoc(docRef,user)

    } catch (error){
        console.log('Error', error)
    }
}