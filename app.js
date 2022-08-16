// let ischecked=1;
// ischecked=true;
// console.log(ischecked);


// let ischecked=10;
// ischecked=20;
// console.log(ischecked);


// let ischecked='abdul';
// ischecked='mumin';
// console.log(ischecked);

// let ischecked='abdul';
// console.log(ischecked[0],ischecked[1]);

// let ischecked='abdul';
// ischecked[0]='r'
// console.log(ischecked,ischecked[0],ischecked[1]);


// console.log(10+10);
// console.log("10"+10);
// console.log("20"+"10");
// console.log("20"-"10");
// console.log("20"-10);
// console.log("a"-"b");
// console.log("a"+"b");

// console.log(10*20);
// console.log("10"*2);
// console.log("b"*2);

// console.log(10/2);
// console.log("10"/2);
// console.log("b"/2);

// console.log(!!1);
// console.log(!0);
// console.log(!!0);
// console.log({}==={});
// console.log(!'');
// console.log(!undefined);
// console.log(false || undefined);
// console.log(10 &&"dfa");

// console.log(!null);

// let news='vasant'

// if(news.includes('vasant')){
//     console.log("yes")
// }else{
//     console.log("no")
// }


// let news='vasant'

// if(news[4]=='n'){
//     console.log("yes")
// }else{
//     console.log("no")
// }


//print even number
// let arr=[1,2,3,4]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i])
//     }
// }




// const sub=function(){
//     console.log("sub")
// }
// sub()
// a()
// const a=function(){
//     console.log("sub")
// }



// print odd even

// let arr=[1,2,3,4,5,6]
// let even=[]
// let odd=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         even.push(arr[i])
//     }else{
//         odd.push(arr[i])
//     }
// }
// console.log(even,odd);




// join two arr together

// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let arr3=arr1.concat(arr2)
// console.log(arr3)



// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let arr3=arr1.concat('abdul',arr2,'mumin')
// console.log(arr3)



// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let arr3=['cdb',...arr1,'abc',...arr2,'bhhj']
// console.log(arr3)

//difference of concat and spread operator is that,
//  by using spread operator we can add element befor the first arr but in concat we can't



// declaration()
// expression()
// function declaration(){
//     console.log("declaration")
// }

// const expression=function(){
//     console.log("expression")
// }

// we can not call function expression befor
//  but we can call function declaration before




// var name='vasant'
// console.log(age)
// console.log(phone)
// var age=10;
// let phone="123"
// console.log(phone)



// console.log(age)
// console.log(fname)
// var fname="abdul"
// console.log(phone);
// var age=10;
// let phone="123"




// add()
// function add(){
//     console.log("adding");
// }
// setTimeout(()=>{
//     console.log("zero");
// },0)

// sub()
// const sub=function(){
//     console.log("substracting");
// }

// setTimeout(()=>{
//     console.log("vasant");
// },2000)

// setTimeout(()=>{
//     console.log("kumar");
// },2000)








// add()
// function add(){
//     console.log("adding");
// }
// setTimeout(()=>{
//     console.log("zero");
// },0)


// const sub=function(){
//     console.log("substracting");
// }
// sub()

// setTimeout(()=>{
//     console.log("vasant");
// },2000)

// setTimeout(()=>{
//     console.log("kumar");
// },2000)






//IIFE-> Immediately Invoked Function Expression

// (function add(){
//     console.log("adding")
// })();




// Object

// let obj={
//     add(){
//         console.log(this)
//     }
// };
// obj.add()


// let obj={
//     add:function(){
//         console.log(this)
//     }
// };
// obj.add()


// let obj={
//     name: "mumin",
//     add:function(){
//         console.log(this.name)

//     }
// }
// obj.add()






// const mumin=()=>{
//     console.log(this)
// };
// mumin()


// function mumin(){
//     console.log(this);
// }
// new mumin()



// let obj={
//         name: "mumin",
//         add:function(){
//             mumin=()=>{
//                 console.log(this.name)

//             }
//            mumin()
    
//         }
//     }
//     obj.add()




// let words="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati illo, atque veritatis laudantium molestias quod velit ad aut doloremque aperiam. Quasi expedita cupiditate voluptatem ratione minus, corporis quas asperiores."
// let splitword=words.split(" ")
// let [firstword,secondword,...remainingwords]=splitword
    
//     console.log(firstword,secondword,remainingwords)




// let obj={
//     name:"mumin",
//     age:22,
//     color:"black"

// }
// let {name,age,color}=obj;
// console.log(name,age,color)
// console.log(obj.name,obj.age,obj.color)



// let arr=[1,3,4,5]
// arr.splice(1,0,2)
// console.log(arr)



// let arr=[1,3,4,5]
// arr.splice(3,0,6)
// console.log(arr)



// let arr=[1,2,3,"mumin"];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==="mumin"){
//         console.log(i);
//     }
// }


// let arr=[1,2,3,"mumin"];
// for(let value of arr){
//     console.log(value);
// }



// let obj={
//     name:"mumin",
//     age:22,
//     city:'silchar',

// }
// for(let key in obj){
//     console.log(key,obj[key]);
// }




// const arr=[1,2,3]
// arr[121]=201;
// console.log(arr);