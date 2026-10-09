import shopName, { products, formatEGP } from "./catalog.js";

export function productCount() {
  return products.length;
}

export function priceTag(product) {
  return formatEGP(product.price);
}

export function shopHeading() {
  return `${shopName} catalog`;
}