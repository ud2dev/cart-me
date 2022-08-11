// variables
const dishes=document.getElementById("dishes");
const about=document.getElementById("about");
const steps=document.getElementById("steps");
const orders=document.getElementById("orders");
const wishlist=document.getElementById("wishlist");
const address=document.getElementById("address");
const addAddress=document.getElementById("add-address");
const faSearch=document.getElementById("fa-search");
const offers=document.getElementById("offers");
const cartPlus=document.getElementById("cart-plus");
const decreaseItem=document.getElementById("decrease-item");
const increaseItem=document.getElementById("increaseItem");
const cartPage=document.getElementById("cart-page");
const foodItems=document.getElementById("food-items");
const stepSection=document.getElementById("step-container");
let deductBtnArr = document.getElementsByClassName('minus1');
let addButtonArr = document.getElementsByClassName('add1');
let addpriceArr = document.getElementById('increase');
let updatetotal = document.getElementById('updatetotal')



// add address section
function addAddressArea(){
    prompt("Please Enter Your Address");
}
addAddress.addEventListener("click",addAddressArea)


// cartsection
function cartArea(){
    cartPage.style.display = "block";
    foodItems.style.display="none";
}
orders.addEventListener("click",cartArea)
cartPlus.addEventListener("click",cartArea)


// dishes section
function foodItemsArea(){
    cartPage.style.display = "none";
    foodItems.style.display="block";
}
dishes.addEventListener("click",foodItemsArea)

// Ordering Function 


for(let deductBtn of deductBtnArr){
    deductBtn.onclick = function(){
        let currentInputBox = deductBtn.nextElementSibling;
        currentInputBox.value =  currentInputBox.value - 1;
    }
    
}


for(let addButton of addButtonArr){
    addButton.onclick = function(){
        let currentInputBox = addButton.previousElementSibling;
        currentInputBox.value =  parseInt(currentInputBox.value) + 1;
        // updatetotal.innerHTML = addpriceArr.innerHTML  
        // console.log(addpriceArr)
    }
}