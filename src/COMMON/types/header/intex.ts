import { IOrderItems } from "../cart"

export interface IPropsHeader {
    toggleDrawer: (value: boolean) => void
    toggleDrawer2: (value: boolean) => void
    setPath: (value: string) => void
    setCurrentPage: (value: number) => void
    orderItems: [IOrderItems]
    setPaginatNone: (value: boolean) => void
}

