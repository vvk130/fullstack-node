export default function showDiscountedPrice(price, discount) {
    return `${(parseFloat(price) * (1 - parseFloat(discount))).toFixed(2)}€ | -${discount*100}% off!`;
}
