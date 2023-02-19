

const getInputValueById = id => {

    const inputFiled = document.getElementById(id)
    const inputValue= inputFiled.value;
    inputFiled.value = '';
    return inputValue;
}


 const addProduct = () => {

    const product = getInputValueById('product-name-field');
    const quantity = getInputValueById('product-quantity-field') 
    adddisplayProduct(product,quantity)
    localStorage.setItem(product, quantity)
 }


 const adddisplayProduct = (product,quantity) => {


    const productContainer = document.getElementById('producC');

    console.log(productContainer)

    const li = document.createElement('li');

    li.innerText  = `${product} : ${quantity}`


  productContainer.appendChild(li);

 }

 const getShoppingCartFromLocalStorage = () => {


   let savedCart = localStorage.getItem('cart');

   let cart = {};

   if(savedCart){
 
      cart= JSON.parse(savedCart);


   }

   return cart;



 }


   const savedItemToLocalStorage = (product,quantity) => {


      const cart = getShoppingCartFromLocalStorage();

      cart[product] = quantity;

      const cartStringified = JSON.stringify(cart);

      localStorage.setItem('cart', cartStringified);
   }

   const displayStoredProduct = () => {


      const cart = getShoppingCartFromLocalStorage();

      for(const product in cart){

         console.log(product)

         const quantity = cart[product];

         console.log(product, quantity)

         adddisplayProduct(product,quantity)
      }



   }

   displayStoredProduct()