import React, { useEffect } from 'react'
import './Product.css'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


const Product = () => {
    const dispatch = useDispatch();

    const { products } = useSelector((storeData) => {
        return storeData
    })


    useEffect(() => {
        if (products.length === 0) {
            fetch(
                ' https://fakestoreapi.com/products'
            )
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    dispatch({
                        type: "products",
                        payload: data
                    })
                })
        }

    }, [])


    return (
        <div className='Product'>
            {products.map((ele) => {
                return (

                    <>

                        <div className="Card">
                            <div className="category">
                                <p>{ele && ele.category}</p>
                            </div>
                            <img src={ele && ele.image} alt="" />
                            <div className="title">
                                <p>{ele && ele.title}</p>
                            </div>

                            <p><span>PRICE :</span> $ {ele && ele.price} </p>


                            <button onClick={

                                () => {
                                    dispatch({
                                        type: "cart",
                                        addCart: ele
                                    })
                                    { console.log("ele", ele); }
                                }
                            }>Add To Cart</button>

                        </div >
                    </>
                )
            })}
        </div >
    )
}

export default Product

