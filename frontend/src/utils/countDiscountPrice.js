export default function countDiscountPrice(price, discount) {
    if (discount){
        return parseFloat(price) * (1 - parseFloat(discount));
    } else {
        return parseFloat(price);
    }
}

