(function() {
function q(element){return  document.querySelector(element)};
let leftArr = q('.arrowSlide1'),
rightArr = q('.arrowSlide2'),
slider = q('.slider'),
bullets = q('.bullets'),
navHome = q('.navHome'),
navAbout = q('.navAbout'),
navServ = q('.navServ'),
navTeam = q('.navTeam'),
navPrice = q('.navPrice'),
headerMainBt = q('.headerMainBt'),
aboutBt = q('.aboutBt'),
moreInfoBt = q('.moreInfoBt'),
moreInfoBt2 = q('.moreInfoBt2');



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


navHome.addEventListener('click',()=>scrollFun(0));
navAbout.addEventListener('click',()=>scrollFun(1));
headerMainBt.addEventListener('click',()=>scrollFun(1));
navServ.addEventListener('click',()=>scrollFun(3.67));
moreInfoBt.addEventListener('click',()=>scrollFun(3.67));
moreInfoBt2.addEventListener('click',()=>scrollFun(3.67));
navTeam.addEventListener('click',()=>scrollFun(4.67));
aboutBt.addEventListener('click',()=>scrollFun(5.77));
navPrice.addEventListener('click',()=>scrollFun(5.77));

var scrollFun = (num)=>{
window.scrollTo({
    top: window.innerHeight*num,
    behavior: "smooth"
});
}

})();
// var arr = [6,4,8,2,10,14,12]


// var arrSort = (array) => {


// for(let i= 0;i<arr.length;i++){
// 	var x = arr[i];
// 	var y = arr[0]
// 	console.log(x)
//     if(x>x+1){
    	
//     	console.log(x)
//     }
// }


// }

// arrSort(arr)