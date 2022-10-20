(function(){
    "use strict";



    // Write a function that when passed an object will return the value of the object’s price property.
    //     Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
    // getPrice(obj); // returns “$7.89”

    // let apples = new Object();
    // apples.price = "1.99"
    // getPrice(apples)

    function price(object) {
        return object.price
    }

    let apples = {
        name: "apples"
        quantity: 3,
        price: "1.99"
    };
    console.log(getPrice(apples));

})();