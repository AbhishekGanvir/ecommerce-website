export const cart = [{
    productId:`e43638ce-6aa0-4b85-b27f-e1d07eb678c6`,
    quantity:2,
},{
     productId:`15b6fc6f-327a-4ec4-896f-486349e85a3d`,
     quantity:1
}        
];

export function addToCart(productId){
    let matchingItem;
       //check if product is in the cart
       cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
       });
       //it it is in cart,increase the quantity
       if (matchingItem){
        matchingItem.quantity +=1;
       }
       // if it is not in cart, add in cart
           else{
            cart.push({
        productId: productId,
        quantity:1
       });
     } 
}