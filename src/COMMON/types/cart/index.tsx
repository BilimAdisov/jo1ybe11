import { IPropsItem } from "../items"

export interface IPropsCart {
    toggleDrawer: (value: boolean) => void
    orderItems: [IOrderItems]
    setOrderItems: (value: object) => void 
    // newSizeItem: undefined | IOrderItems
    // newPlusAmount: undefined | IOrderItems
    // newMinusAmount: undefined | IPropsCart
}

export interface IOrderItems {
    amount: number
    id: string
    img: string
    name: string
    price: number
    size: string
}