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
