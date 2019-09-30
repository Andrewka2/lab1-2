"use strict"

let quality = {
    id: 1,
    name: 'product',
    description: 'some information',
    price: 100,
    img: ['img1', 'img2', 'img3']
}
function abstractProduct(quality) {

    if (this.constructor === abstractProduct) {
        throw new Error("Can't instantiate abstract class!");
    }
      this.id = quality.id;
      this.name =  quality.name;
      this.description = quality.description;
      this.price = quality.price;
      this.img = quality.img;
};

abstractProduct.prototype.getId = function () {
    return this.id;
}
abstractProduct.prototype.getName = function () {
    return this.name;
}
abstractProduct.prototype.getDescription = function () {
    return this.description;
}
abstractProduct.prototype.getPrice = function () {
    return this.price;
}
abstractProduct.prototype.getImg = function () {
    return this.img;
}
abstractProduct.prototype.getFullInformation = function () {
    let arr = [];
    for (let prop in this) {
        if(typeof this[prop] != 'function'){
            arr.push(`${prop}:  ${this[prop]}`);
        }
    }
    return arr.join(' , ');
}
abstractProduct.prototype.getPriceForQuantity = function (amount) {
    let summary = 0;
    while (amount != 0) {
        summary += +this.price;
        amount--;
    }
    return `$${summary}.`;
}

abstractProduct.prototype.GetterSetter = function (getProp, set) {
    var str = '';
    if (arguments.length < 2 && arguments.length != 0) {
        if(getProp.includes('get')){
            str = getProp;
            }
            else {
                str = getProp[0].toUpperCase() + getProp.slice(1);
                str = 'get' + str;
            }
            
       return (this[str]());
    }
    else if (arguments.length < 3) {
        if(getProp.includes('set')){
            str = getProp;
        }
        else {
            str = getProp[0].toUpperCase() + getProp.slice(1);
            str = 'set' + str;
        }
        this[str](set);
    }
}



abstractProduct.prototype.getProductTileHTML = function(){ 
    var productCard = secondProduct.creator('li','',{ class:'col-md-4',class:"list-group-item"});
    titleContainer.prepend(productCard);
    var productOverlay = secondProduct.creator('div','',{class:'product-overlay'});
    productCard.append(productOverlay);
    var imgLink = secondProduct.creator('a','',{href:'#'});
    productOverlay.append(imgLink);
    var image = secondProduct.creator('img', '',{src:'https://www.macleans.ca/wp-content/uploads/2014/09/MAC36_WOMENS_CLOTHES_POST.jpg',alt:'Clothes',width:290,height:255})
    imgLink.append(image);
    var imgOverlay = secondProduct.creator('div','',{class:'img-overlay'});
    productOverlay.append(imgOverlay);
    var titleProductName = secondProduct.creator('a','',{href:'#', title:'Product Name', class:'text-decoration-none'});
    imgOverlay.append(titleProductName);
    var imgOverlayArea = secondProduct.creator('div','',{class:'img-overlay-area'});
    titleProductName.append(imgOverlayArea);
    var heading = secondProduct.creator('h2', 'name', {class:"text-hide",class:'text-center text-dark'});
    imgOverlayArea.append(heading);
    var headingHolder = secondProduct.creator('div','',{class:'heading-holder'})
    imgOverlayArea.append(headingHolder);
    var price = secondProduct.creator('strong', '',{class:'price'});
    headingHolder.append(price);
    var priceBox = secondProduct.creator('div', '',{class:'price-box'});
    price.append(priceBox);
    var regularPrice = secondProduct.creator('span','',{class:'regular-price'});
    priceBox.append(regularPrice);
    var spanPrice = secondProduct.creator('span', 'Price: €20.62', {class:'span-price',class:'text-danger'});
    regularPrice.append(spanPrice);
    var holder = secondProduct.creator('div','',{class:'holder'})
    imgOverlay.append(holder);
    var quickview = secondProduct.creator('a', 'Quickview',{class:'quickview', class:'text-decoration-none',rel:'nofollow',href:'#'})
    holder.append(quickview);
    var productName = secondProduct.creator('h3','',{class:'product-name'});
    productOverlay.append(productName);
    var linkProductName = secondProduct.creator('a', 'name',{href:'#', class:'text-decoration-none'});
    productName.append(linkProductName);
    var lastPriseBox = secondProduct.creator('div', '', {class:'price-box'});
    productOverlay.append(lastPriseBox);
    var lastRegularPrice = secondProduct.creator('span', '€20.62',{class:'regular-price'});
    lastPriseBox.append(lastRegularPrice); 
    }
    abstractProduct.prototype.creator = function(tag, content,attribute){ 
        var nameTag = document.createElement(tag);
        if(content){
            if(nameTag.innerHTML = this[content]){
            nameTag.innerHTML = this[content];
            }
            else{
                nameTag.innerHTML = content;
            }
        }
        if(attribute){
            for(let prop in attribute){
           nameTag.setAttribute(prop, attribute[prop]);
            }
        }
        
        return nameTag;  
    }


var qualities = {
    Id: 1,
    author: 'Andrew',
    date: new Date,
    comment: 'My comment'
}

function Reviews(reviews) {
    this.id = reviews.Id || 1;
    this.author = reviews.author || 2;
    this.date = reviews.date || 3;
    this.comment = reviews.comment || 4;
    this.raiting = new Map([
        ['price', '3'],
        ['service', '3'],
        ['value', '1'],
        ['quality', '4']
    ]);
}

var newReviews = new Reviews(qualities);
var boxForReview = [];
boxForReview.push(newReviews);

let options = {
    id: 1,
    name: 'Coat',
    description: 'some information',
    price: 100,
    img: ['img1', 'img2', 'img3'],
    brand: 'Lacoste',
    color: 'Blue',
    material: 'Cotton',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    activeSize: 'XS',
    quantity: '1',
    date: new Date,
    reviews: boxForReview
}


function Clothes2(options) {
    abstractProduct.apply(this, arguments);

    this.brand = options.brand;
    this.color = options.color;
    this.material = options.material;
    this.sizes = options.sizes;
    this.activeSize = options.activeSize;
    this.quantity = options.quantity;
    this.date = options.date;
    this.reviews = options.reviews;

    this.getBrand = function () {
        return this.brand;
    }
    this.getColor = function () {
        return this.color;
    }
    this.getMaterial = function () {
        return this.material;
    }
    this.getSizes = function () {
        return this.sizes;
    }
    this.getActiveSize = function () {
        return this.activeSize;
    }
    this.getQuantity = function () {
        return this.quantity;
    }
    this.getDate = function () {
        return this.date;
    }
    this.getReviews = function () {
        return this.reviews;
    }
    this.setMaterial = function (settedMaterial) {
        this.material = settedMaterial;
    }
    this.setColor = function (settedColor) {
        this.color = settedColor;
    }
    this.setBrand = function (settedBrand) {
        this.brand = settedBrand;
    }
    this.addSize = function (addedSize) {
        if(typeof addedSize != 'number') {
            console.log('You should paste number!');
        }
        else{
        var size = this.getSizes()
        size.push(addedSize);
        }
    }
    this.setActiveSize = function (settedActiveSize) {
        this.activeSize = settedActiveSize;
    }
    this.setDate = function (dateString) {
        this.date = dateString || new Date();
    }
    this.addReview = function () {
        var test = this.getReviews();
        test.push(newReviews)
        return test;
    }
    this.deleteReviews = function (deleted) {
        let delReviews = this.getReviews();
        delReviews.splice(deleted - 1, 1);
    }
    this.getAverageRaiting = function () {

        let counter = 0;
        let priceAverage = 0;
        let serviceAverage = 0;
        let valueAverage = 0;
        let qualityAverage = 0;
        let arr = [];
        this.reviews.reduce((accumulator, curent) => {
            priceAverage += +curent.raiting.get('price');
            serviceAverage += +curent.raiting.get('service');
            valueAverage += +curent.raiting.get('value');
            qualityAverage += +curent.raiting.get('quality');
            counter++;
        }, 0)
        arr.push(priceAverage / counter, serviceAverage / counter, valueAverage / counter, qualityAverage / counter);
        return arr;
    }
}
Clothes2.prototype = Object.create(abstractProduct.prototype);
Clothes2.prototype.constructor = Clothes2;

let secondProduct = new Clothes2(options);
let thirdProduct = new Clothes2(options);

let electronicQualities = {
    id:2,
    name: 'product',
    description: 'some information',
    price: 100,
    img: ['img1', 'img2', 'img3'],
    warranty: 10,
    power: 5
}

function Electronic(electronicQualities, ) {

    abstractProduct.apply(this, arguments)

    this.warranty = electronicQualities.warranty;
    this.power = electronicQualities.power;
    this.getWarranty = function () {
        return this.warranty;
    }
    this.getPower = function () {
        return this.power;
    }
    this.setWarranty = function (duration) {
        if (duration < 0 || duration > 10) {
            throw Error('Invalid duration of warranty');
        }
        else {
            this.warranty = duration;
        }
    }

}

Electronic.prototype = Object.create(abstractProduct.prototype);
Electronic.prototype.constructor = Electronic;

let chainik = new Electronic(electronicQualities)

function searchProducts(search, ...arr) {
    let searchedArr = [];
    while (search != '') {
        arr.forEach((item) => {
            if (item.brand.includes(search) || item.qual.description.includes(search)) {
                searchedArr.push(item);
            }
        })
        return searchedArr;
    }
    return 'paste something';
}


function sortProducts(sortRule, ...products) {

    var rule = sortRule.toLowerCase();
    while (rule == 'id' || rule == 'name' || rule == 'price') {
        products.sort((a, b) => {
            if (parseInt(a.qual[rule]) > parseInt(b.qual[rule])) { return 1 }
            if (parseInt(b.qual[rule]) > parseInt(a.qual[rule])) { return -1 }
        })

        return products;
    }
    return 'paste expected property'
}





let validator = {
    validateEmail: function(mail){
        var valide = /^(([a-zA-Z0-9])([a-zA-Z0-9\-\.]{1,20}))@[^@]{1,15}\.([a-zA-Z]{1,5})$/;
       if(valide.test(mail) == true){
            alert('you paste right');
        }
        else{
            alert('you\'re wrong');
        }   
    },
    
    validatePhone: function(phone){
        var validePhone = /^((\+?\s?\-?[\d-?]){2})?\s?\-?(\((\s?\-?[\d]){3}\s?\-?\)|((\s?\-?[\d]){3}))\s?\-?((\s?\-?[\d]){3})\s?\-?((\s?\-?[\d]){4})$/;
        if(validePhone.test(phone) == true){
            console.log('you paste right');
        }
        else{
            console.log('you\'re wrong');
        } 
    },
    validatePassword: function(password){
        var validePassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!_@#\$%\^&])(?=.{4,})/
        if(validePassword.test(password) == true){
            console.log('you paste right');
        }
        else{
            console.log('you paste wrong')
        }
    }
  }
 
