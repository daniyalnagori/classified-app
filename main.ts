// // class ads{
// //     name  : Array<string>;
// //     price: Array<number>;
// //     constructor(name: Array<string> , price:Array<number>){
// //         this.name = name;
// //         this.price = price;
// //     }
// // }



// // class cars extends ads{
// //     constructor(name,price){
// //         super(name,price)
// //         //this.name =name;
// //         //this.price =price;
// //         document.getElementById("menu").innerHTML += "<p>" + this.name + " " + this.price + "</p>"
// //     }

// // }
// // class mobiles extends ads{
// //     constructor(name,price){
// //         super(name,price)
// //         //this.name =name;
// //         //this.price =price;
// //         document.getElementById("menu").innerHTML += "<p>" + this.name + " " + this.price + "</p>"
// //     }

// // }
// // var a : ads = new ads("da",21);
// // var b : ads = new cars("fg",545);

// // var array1 : Array<ads> = new Array<ads>();
// // array1[0] = new ads("daniyal" , 21);
// // array1[1] = new ads("fasih", 43);
// // console.log(array1[1]);  
// // var array2 :Array<ads> = new Array<cars>();
// // array2[0] = new cars("hello", 456);
// // array2[1] = new cars("corolla", 346);
// // var array3 :Array<ads> = new Array<mobiles>();
// // array2[0] = new cars("nokia", 456);
// // array2[1] = new cars("iphone", 346);







// // class Animal{
// //     name ;
// //     constructor(name){
// //         this.name = name;
// //     }
// //     move(meter){
// //         alert(this.name + " " + "moved" + meter + " m");
// //     }
// // }

// // class snake extends Animal{
// //     constructor(name){
// //         super(name)
// //     }
// //     move(){
// //         alert(this.name + " is Slithing");
// //         super.move(5);
// //     }
// // }

// // class Horse extends Animal {
// //     move(){
// //         alert(this.name + " is Galloping");
// //         super.move(45);
// //     }
// // }

// // var a : Array<Horse> = new Array<Horse>();
// // [
// //     a[0] = new Horse("horse1"),
// //     a[1] = new Horse("horse2")
// // ]
// // a[1].move();
// // var b : Array<snake> = new Array<snake>();
// // [
// //     b[0] = new snake("snake1"),
// //     b[1] = new snake("snake2")
// // ]
// // b[0].move();













// class products {
//     product_name : Array<string>;
//     price : Array<number>;
//     color : Array<string>;
//     quality : Array<string>;
//     warranty : Array<string>;

//     constructor(name : Array<string>,price : Array<number>,color: Array<string>,quality : Array<string>,warranty: Array<string>){
//         this.product_name = name;
//         this.price = price;
//         this.color = color;
//         this.quality = quality;
//         this.warranty = warranty;
//     }
//  }





//  class furniture extends products{
//      constructor(name,price,color,quality,warranty){
//          super(name,price,color,quality,warranty);
// let getit =  document.getElementById("get");

//       getit.innerHTML += "<div class='border'><p><span class='product'>Product: " + a[0].product_name + a[0].product_name + "</span>" +"<span class='price'> Price:  " + a[0].price + "</span> " + "<span class='color'>Color : " + a[0].color + "</span> "+ "<span class='quality'> : Quality : " + a[0].quality + "</span>" + "<span class='warranty'> Warranty: " + a[0].warranty +  "</span></p></div><br>"  
//        let getit1 = document.getElementById("menu1");
//      getit1.innerHTML  += "<p><span>Product : " + this.product_name + "</span>" + "<span class='price'> Price: " + this.price + "</span> " + "<span class='color'>Color : " + this.color + "</span> "+ "<span class='quality'> : Quality : " + this.quality + "</span>" + "<span class='warranty'> Warranty: " + this.warranty +  "</span></p><br>";  

//      }

// //    furnitureSearch () {
// //     let getit  = document.getElementById("menu1");
// //    getit.innerHTML  === "<p><span>Product : " + this.product_name + "</span>" + "<span class='price'> Price: " + this.price + "</span> " + "<span class='color'>Color : " + this.color + "</span> "+ "<span class='quality'> : Quality : " + this.quality + "</span>" + "<span class='warranty'> Warranty: " + this.warranty +  "</span></p><br>";
// //      let furniture1 = (<HTMLInputElement>document.getElementById("search")).value;
// //       let array : Array<string> = ["furniture", "FURNITURE","Furniture"];  
// //      for (var i =0 ;i< array.length; i++){
// //     if (furniture1 === array[i]){
// //         var newWindowOpen = window.open();
// //     newWindowOpen.document.write(getit.innerHTML);  
// //             } 
// //         }
// //       //  let getValueBed = document.getElementById("a");
    
// // let getValue = (<HTMLInputElement>document.getElementById("search2")).value;
// //     if (getValue === a.product_name){
// //         document.write("<p><span>Product : " + a.product_name + "</span>" + "<span class='price'> Price: " + a.price + "</span> " + "<span class='color'>Color : " + a.color + "</span> "+ "<span class='quality'> : Quality : " + a.quality + "</span>" + "<span class='warranty'> Warranty: " + a.warranty +  "</span></p><br>");
// //     }
// //     else if (getValue === b.product_name){
// //         document.write("<p><span>Product : " + b.product_name + "</span>" + "<span class='price'> Price: " + b.price + "</span> " + "<span class='color'>Color : " + b.color + "</span> "+ "<span class='quality'> : Quality : " + b.quality + "</span>" + "<span class='warranty'> Warranty: " + b.warranty +  "</span></p><br>");
// //     }

// //}
// }

// // class grocery extends products{
// //     constructor(name,price,manufacture,quality,expire){
// //         super(name,price,manufacture,quality,expire);
// //     document.getElementById("get").innerHTML += "<p> <span class='product' >Product : " + this.product_name + "</span>" + "<span class='price'  > Price : " + this.price + "</span>" + "<span class='color'  > Manufacture : " + this.color + "</span>" + "<span class='quality'  > Quality : " + this.quality+ "</span>" + "<span class='warranty'  > Warranty : "  + this.warranty  + " </span></p><br>";      
// //      document.getElementById("menu2").innerHTML += "<p> <span class='product' >Product : " + this.product_name + "</span>" + "<span class='price'  > Price : " + this.price + "</span>" + "<span class='color'  > Manufacture : " + this.color + "</span>" + "<span class='quality'  > Quality : " + this.quality+ "</span>" + "<span class='warranty'  > Warranty : "  + this.warranty  + " </span></p><br>"         
// //     }
// //     grocerySearch(){
         
     
// //     let a =  document.getElementById("menu2");
// //     a.innerHTML == "<p> <span class='product' >Product : " + this.product_name + "</span>" + "<span class='price'  > Price : " + this.price + "</span>" + "<span class='color'  > Manufacture : " + this.color + "</span>" + "<span class='quality'  > Quality : " + this.quality+ "</span>" + "<span class='warranty'  > Warranty : "  + this.warranty  + " </span></p><br>"  
// //         var groc = (<HTMLInputElement>document.getElementById("search")).value;
// //          if (groc === "grocery"){
// //             let newWindowOpen = window.open();
// //              newWindowOpen.document.write(a.innerHTML);
// //     }
// // }
// // }



// //  var a : products = new furniture("bed", 2000, "white", "good","2 years");

// //  var b :products = new furniture("chair", 1000, "black", "good", "no warranty");

// //  var c :products = new grocery("ketchup", 190 ,"29 june 2016","good","20 june 2017");

// //   var c :products = new grocery("Chicken", 200 ,"29 june 2016","good","20 june 2017");


// var a : Array<products> = new Array<furniture>();
// [
// a[0] = new  furniture("bed",2000,"white","good","2 years"),
// a[1] = new furniture("das",3,"white","good","da"),
// ]
// console.log(a[0].product_name);


// // var b : Array<products> = new Array<grocery>();
// // [
// // b[0] = new products("bed",2000,"white","good","2 years"),
// // b[1] = new products("das",3,"white","good","da"),
// // ]




class ads{
    constructor(public name ,public price ){
}
    product(){

    }
}

class cars extends ads{ 
    product(){
        var a = document.getElementById("get");

        a.innerHTML +=  "<p>" + this.name + "   RS " + this.price + "</p></br>";
        super.product(); 
    }   
}


class mobiles extends ads{ 
    product(){
        var b = document.getElementById("get");
        b.innerHTML +=   "<p>" + this.name + "    Rs" + this.price + "</p>";
        super.product(); 
    }   
}





let a : Array<ads> = new Array<cars>();
[
    a[0]  = new cars("corolla",2000000),
    a[1] = new cars("mercedez",3000000),
];

a[0].product();
a[1].product();



let b : Array<ads> = new Array<mobiles>();
[
    b[0]  = new cars("nokia",10000),
    b[1] = new cars("samsung",2000),
];

b[0].product();
b[1].product();
