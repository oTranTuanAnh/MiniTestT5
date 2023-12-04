class Customer {
    constructor(name, age, point) {
        this.name = name;
        this.age = age;
        this.point = point;
    }
    promote (){
        if (this.point>100){
            console.log("khuyen mai 5%");
        } else {
            console.log("khong khuyen mai");
        }
    }
}

let customer1 = new Customer("abc", 18, 200);
let customer2 = new Customer("jqk", 22, 58);
customer1.promote();
customer2.promote();