class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getP(){
        return (this.height+this.width)*2;
    }
    getS(){
        return (this.height*this.width);
    }
    draw(){
        let canvas = document.getElementById("draw");
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "red";
        ctx.fillRect(5,5,this.width,this.height);

    }

}

let rec1 =  new Rectangle(500,1000);
let rec2 = new Rectangle(2000,2000);
console.log(rec1.getP());
console.log(rec1.getS());
rec1.draw();