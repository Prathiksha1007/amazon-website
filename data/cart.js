export const cart = [];

export function addToCart(productId, quantity){
    let matchingItem;
        cart.forEach((cartItem) => {
            if(productId === cartItem.productId){
                matchingItem = cartItem;
            }
        });

        if(matchingItem){
            // matchingItem.quantity++;
            matchingItem.quantity += quantity;
        } else {
            cart.push({
                productId,
                //quantity: 1
                quantity
            });     
        }
}