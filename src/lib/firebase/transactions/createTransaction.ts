import { ITransaction } from "@/schemas/transactions/transactions"
import {v4 as uuid} from 'uuid' 
import { firebaseCreate } from "../firebaseCreate"
import { zFirebaseCollection } from "../@types/collections"

type IProps = {
    data: ITransaction
}

export async function createTransaction({data}: IProps){
    const id = uuid()
    await firebaseCreate({
        collection: zFirebaseCollection.Enum.transactions,
        data,
        id: id
    })
}