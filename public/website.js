function q(element){return  document.querySelector(element)}
let leftArr = q('.arrowSlide1');
let rightArr = q('.arrowSlide2');
let slider = q('.slider');
let bullets = q('.bullets');

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

// if(page===0){
// 	bullets[0].className="bb"
// 	console.log(bullets[0].className)
// }else if(page===1){
	
// }

}






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