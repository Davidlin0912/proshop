export const addDecimals=(num)=>{
    return (Math.round(num*100)/100).toFixed(2)
}


export const updateCart=(state)=>{
    
    //calculate Items Price
        state.itemsPrice=addDecimals(
            state.cartItems.reduce((acc,item)=>acc+item.price*item.qty,0)
        )

        //calculate Shipping Price
        state.shippingPrice=addDecimals(state.itemsPrice>100 ? 0: 100)

        //calculate Tax Price
        state.taxPrice=addDecimals(Number(0.15*state.itemsPrice))

        //calculate Total Price
        state.totalPrice=addDecimals(
            Number(state.itemsPrice)+Number(state.shippingPrice)+Number(state.taxPrice)
        )
         
        localStorage.setItem('cart',JSON.stringify(state))

        return state;
}