const ManageLocalStorage = (id) =>{
    let shoppingCart = {};

    // get shoppingCart from local storeage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }


    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}


const getStoredCart = () =>{
    let shoppingCart = {};

    // get shoppingCart from local storeage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}

const handleRemoveItem = (id) => {
    // get shoppingCart from local storeage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }


}
export {
    ManageLocalStorage,
    getStoredCart,
    handleRemoveItem
}