import {IGetOrdersByStatus, IOrder, IUpdateOrderStatus} from "./interfaces.ts";
import {EnumOrderStatus, EnumPaymentType} from "./enums.ts";

const order1: IOrder = {
    id: '1',
    amount: 1200,
    status: EnumOrderStatus.Delivered,
    paymentType: EnumPaymentType.CashOnDelivery
}

const order2: IOrder = {
    id: '2',
    amount: 1200,
    status: EnumOrderStatus.Canceled,
    paymentType: EnumPaymentType.CreditCard
}

const order3: IOrder = {
    id: '3',
    amount: 1200,
    status: EnumOrderStatus.Processing,
    paymentType: EnumPaymentType.BankTransfer
}

const order4: IOrder = {
    id: '4',
    amount: 1200,
    status: EnumOrderStatus.Shipped,
    paymentType: EnumPaymentType.CashOnDelivery
}

const order5: IOrder = {
    id: '5',
    amount: 1200,
    status: EnumOrderStatus.Pending,
    paymentType: EnumPaymentType.PayPal
}

const orders: IOrder[] = [order1, order2, order3, order4, order5]

const updateOrderStatus: IUpdateOrderStatus = (order, status) => {
    console.log(`Order status has been changed \nfrom: ${order.status} \nto: ${order.status = status}`)
}
updateOrderStatus(order1, EnumOrderStatus.Processing)


const getOrdersByStatus: IGetOrdersByStatus = (array, status) => {
    return array.filter((order) => order.status === status)
}

console.log(getOrdersByStatus(orders, EnumOrderStatus.Processing))

