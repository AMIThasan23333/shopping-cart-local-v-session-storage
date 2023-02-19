

const getInputValueById = id => {

    const inputFiled = document.getElementById(id)
    const inputValue= inputFiled.value;
    inputFiled.value = '';
    return inputValue;
}


 const addProduct = () => {

    const product = getInputValueById('product-name-field');

    const quatity = getInputValueById('product-quantity-field') 
    displayProduct(product,quatity)
 }


 const displayProduct = (product,quatity) => {


    const productContainer = document.getElementById('producC');

    console.log(productContainer)

    const li = document.createElement('li');

    li.innerText  = `${product} : ${quatity}`


  productContainer.appendChild(li);

 }