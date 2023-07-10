import React from "react";
import Billing from '../AddProduct/AddProduct'



function Product() {

    const data = [
        {
            names:"iluvia Professional",
            information:"iluvia Professional provides advanced",
            price:"300",
            image:"https://m.media-amazon.com/images/I/61gOFKtFw8L._SL1500_.jpg"
        },
        {
            names:"Pure Argan Oil",
            information:"logo",
            price:"300",
            image:"https://cdn.shopify.com/s/files/1/0506/1761/4499/products/AO2_900x.jpg?v=1643867096"

        },
        {
            names:"iluvia Professional",
            information:"iluvia Professional provides advanced",
            price:"300",
            image:"https://m.media-amazon.com/images/I/61gOFKtFw8L._SL1500_.jpg"
        },
        {
            names:"iluvia Professional",
            information:"logo",
            price:"300",
            image:"https://cdn.shopify.com/s/files/1/0506/1761/4499/products/AO2_900x.jpg?v=1643867096"
        },
        {
            names:"Pure Argan Oil",
            information:"logo",
            price:"300",
            image:"https://cdn.shopify.com/s/files/1/0506/1761/4499/products/AO2_900x.jpg?v=1643867096"
        },
        {
            names:"iluvia Professional",
            information:"iluvia Professional provides advanced",
            price:"300",
            image:"https://m.media-amazon.com/images/I/61gOFKtFw8L._SL1500_.jpg"
        },
        {
            names:"Pure Argan Oil",
            information:"logo",
            price:"300",
            image:"https://cdn.shopify.com/s/files/1/0506/1761/4499/products/AO2_900x.jpg?v=1643867096"

        },
        {
            names:"iluvia Professional",
            information:"iluvia Professional provides advanced",
            price:"300",
            image:"https://m.media-amazon.com/images/I/61gOFKtFw8L._SL1500_.jpg"
        },
        {
            names:"iluvia Professional",
            information:"logo",
            price:"300",
            image:"https://cdn.shopify.com/s/files/1/0506/1761/4499/products/AO2_900x.jpg?v=1643867096"
        },
        {
            names:"Pure Argan Oil",
            information:"logo",
            price:"300",
            image:"https://cdn.shopify.com/s/files/1/0506/1761/4499/products/AO2_900x.jpg?v=1643867096"
        },
        {
            names:"iluvia Professional",
            information:"iluvia Professional provides advanced",
            price:"300",
            image:"https://m.media-amazon.com/images/I/61gOFKtFw8L._SL1500_.jpg"
        },
        {
            names:"Pure Argan Oil",
            information:"logo",
            price:"300",
            image:"https://cdn.shopify.com/s/files/1/0506/1761/4499/products/AO2_900x.jpg?v=1643867096"

        },
        {
            names:"iluvia Professional",
            information:"iluvia Professional provides advanced",
            price:"300",
            image:"https://m.media-amazon.com/images/I/61gOFKtFw8L._SL1500_.jpg"
        },
        {
            names:"iluvia Professional",
            information:"logo",
            price:"300",
            image:"https://cdn.shopify.com/s/files/1/0506/1761/4499/products/AO2_900x.jpg?v=1643867096"
        },
        {
            names:"Pure Argan Oil",
            information:"logo",
            price:"300",
            image:"https://cdn.shopify.com/s/files/1/0506/1761/4499/products/AO2_900x.jpg?v=1643867096"
        },
    ]

    return(
        <>
        <div className="product_main" >
                {data.map((item)=>(
            <div className="product_card" >
                <div className="product_img" >
                    <img src={item.image} />
                </div>
                    <div className="card_details" >
                        <div className="card_title" >
                            {item.names}
                        </div>
                        <div className="product_information" >
                            {item.information}
                        </div>
                        <div className="card_rating" >
                        ₹{item.price}
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <div className='bill' >
                <Billing/>
            </div>
        </>
    )
}

export default Product;