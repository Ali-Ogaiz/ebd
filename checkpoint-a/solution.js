import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Cairo" && order.status === "pending"
  );
}

export function summarize(orders) {
  return orders.reduce((total, order) => total + order.quantity, 0);
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.quantity} x ${order.item} for ${order.student}`;
  } catch (error) {
    return `Missing order: ${id}`;
  }
}

export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map((order) => ({ item: order.item, quantity: order.quantity }))
  );
}