(function() {
function q(element){return  document.querySelector(element)};
let leftArr = q('.arrowSlide1'),
rightArr = q('.arrowSlide2'),
slider = q('.slider'),
bullets = q('.bullets');


//slider without animation
leftArr.addEventListener('click',()=>slideFun(minus));
rightArr.addEventListener('click',()=>slideFun(plus));

let page = 0;
let minus =  ()=>page-- ;
let plus = ()=>page++ ;

let slideFun = (n)=>{
n();
page>4?page=0:page<0?page=4:page;
let l = page * -100;
slider.style.left = l + '%';

};

//smooth scrolling
var scrollFun = (num)=>{
window.scrollTo({
    top: window.innerHeight*num,
    behavior: "smooth"
});
};

q('.navHome').addEventListener('click',()=>scrollFun(0));
q('.navAbout').addEventListener('click',()=>scrollFun(1));
q('.arrowDown').addEventListener('click',()=>scrollFun(1));
q('.headerMainBt').addEventListener('click',()=>scrollFun(1));
q('.navServ').addEventListener('click',()=>scrollFun(3.67));
q('.moreInfoBt').addEventListener('click',()=>scrollFun(3.67));
q('.moreInfoBt2').addEventListener('click',()=>scrollFun(3.67));
q('.navTeam').addEventListener('click',()=>scrollFun(4.67));
q('.aboutBt').addEventListener('click',()=>scrollFun(5.77));
q('.navPrice').addEventListener('click',()=>scrollFun(5.77));
q('.mapBt').addEventListener('click',()=>scrollFun(7.485));

var pricingBlockMainBt = document.getElementsByClassName('pricingBlockMainBt');
for(let i=0;i<pricingBlockMainBt.length;i++){
 pricingBlockMainBt[i].addEventListener('click',()=>scrollFun(7.485));
};


//form validation

let callBackform = q('.callBackform'),
nameInput = q('.nameInput'),
emailInput = q('.emailInput'),
phoneInput = q('.phoneInput');


let invalidFornmColorFun = (elem,ev) =>{
	ev.preventDefault();
	elem.classList.add('invalidClass');
}



var nameRegEx =  /^[A-Za-z '\-]{2,20}$/;
var emailRegEx =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var phoneRegEx = /^(?=.*?[1-9])[0-9()-]+$/;


let inputValidation = (elem,regEx)=>{
	if(elem.value.match(regEx)){
		elem.classList.remove('invalidClass');
		elem.classList.add('validClass');
		// callBackform.submit();	
		
	}
	else{
		elem.classList.remove('validClass');
		elem.classList.add('invalidClass');
		
	}
	

};

nameInput.addEventListener('keyup',()=>inputValidation(nameInput,nameRegEx));
emailInput.addEventListener('keyup',()=>inputValidation(emailInput,emailRegEx));
phoneInput.addEventListener('keyup',()=>inputValidation(phoneInput,phoneRegEx));


let preventFormValidationFun = e =>{
	if(!nameInput.value)invalidFornmColorFun(nameInput,e);
	if(!emailInput.value)invalidFornmColorFun(emailInput,e);
	if(!phoneInput.value)invalidFornmColorFun(phoneInput,e);

};

callBackform.addEventListener('submit',preventFormValidationFun);


})();
// var arr = [6,4,8,2,10,14,12]


// var arrSort = (array) => {


// for(let i= 0;i<array.length;i++){

// }
// }

// arrSort(arr)

