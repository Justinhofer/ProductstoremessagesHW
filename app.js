var products = [
    {
        id:0,
        name:"Apples",
        price:"2.99",
        image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
        color:"red"
    },
    {
        id:1,
        name:"Bananas",
        price:"2.50",
        image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
        color:"gold"
    },
    {
        id:2,
        name:"oranges",
        price:"3.50",
        image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
        color:"orange"
    }
];

function popUp(id) {
    var that = this;
    this.ele = document.createElement("div");
    this.ele.classList.add("popUp");
    this.img = document.createElement("img");
    this.img.setAttribute("src", products[id].image);
    this.nameEle = document.createElement("p");
    this.nameEle.innerHTML = "Name:  " + products[id].name;
    this.priceEle= document.createElement("p");
    this.priceEle.innerHTML = "Price:  "+ products[id].price;


    this.ele.append(this.img);
    this.ele.append(this.nameEle);
    this.ele.append(this.priceEle);

    this.ele.addEventListener("click", function(){
        that.ele.style.display = "none";
    });

    document.body.appendChild(this.ele);

}
function Fruits (){
    var that = this;
    this.productsArray = [];
    this.ele = document.createElement("div");
    this.ele.classList.add("Products");

    for (let i= 0; i < products.length; i++){
        this.productsArray.push(new product(i));
        this.productsArray[i].ele.addEventListener("click", function(){
            var up = new popUp(i);
        });
        that.ele.appendChild(this.productsArray[i].ele);
    }
    document.body.appendChild(this.ele);
}

function product(id){
    let that=this;

    this.ele = document.createElement("div");
    this.foodImg = document.createElement("img");
    this.foodImg.setAttribute("src", products[id].image);
    this.nameEle = document.createElement("p");
    this.nameEle.innerHTML = "Name: "+ products[id].name;
    this.priceEle = document.createElement("p");
    this.priceEle.innerHTML= "Price: $" + products[id].price;

    this.ele.classList.add("product");
    this.ele.append(this.foodImg);
    this.ele.append(this.nameEle);
    this.ele.append(this.priceEle);

    this.ele.addEventListener("mouseover", function(){
        that.ele.style.borderColor = products[id].color;
    });
    this.ele.addEventListener("mouseout", function(){
        that.ele.style.borderColor = "Grey"
    });
}

var allProduce = new Fruits;