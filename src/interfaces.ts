import {EnumOrderStatus, EnumPaymentType} from "./enums.ts";

export interface IOrder {
    id: string,
    amount: number,
    status: EnumOrderStatus,
    paymentType: EnumPaymentType,
}

export interface IUpdateOrderStatus {
    (order: IOrder, status: EnumOrderStatus): void;
}

export interface IGetOrdersByStatus {
    (order: IOrder[], status: EnumOrderStatus): IOrder[];
}