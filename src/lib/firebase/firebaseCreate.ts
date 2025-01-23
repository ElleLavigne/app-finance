import { doc, setDoc } from "firebase/firestore";
import { firebaseDB } from "./config";
type IProps = {
  data: any;
  id: string;
  collection: string;
};
export async function firebaseCreate({ collection, data, id }: IProps) {
  const docRef = doc(firebaseDB, `${collection}/${id}`);
  await setDoc(docRef, data);
}
