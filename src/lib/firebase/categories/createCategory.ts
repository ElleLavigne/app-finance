import { ICategory } from "@/schemas/categories/categories";
import { firebaseCreate } from "../firebaseCreate";
import {v4 as uuid} from 'uuid' 
type IProps = {
    data: ICategory
}

export async function createCategory({data}: IProps){
   const id = uuid()


    await firebaseCreate({  
        collection: 'categories',
        data,
        id: id
    })
}