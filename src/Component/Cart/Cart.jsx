import React from 'react'
import { useDispatch } from 'react-redux'

import './Cart.css'

import { useSelector } from 'react-redux'
const Cart = () => {

  const dispatch = useDispatch();
  const { addtocart } = useSelector((storeData) => {
    return storeData
  })

  const deletefnc = (id) => {
    dispatch({
      type: "remove",
      removeCart: id
    })
  }
  return (
    <div className='AddtocartOuterDiv'>

      <div className='lowerDiv'>
        {
          addtocart.length === 0 ? <div><h1>Cart is Empty</h1></div> :
            <div className='wrapperDiv'>
              {addtocart.map((ele) => {
                return <div className='AddtocartItems'>
                  <div className='imageDiv'>
                    <img src={ele.image} alt="" width="100%" height="100%" />
                  </div>
                  <div className='detailDiv'>
                    <h2 style={{ color: "green" }}>{ele.category}</h2>
                    <h1 style={{ color: "black" }}>{ele.title}</h1>
                    <span>-: Product Description :-</span>
                    <p>{ele.description}</p>
                  </div>
                  <div className='priceDiv'>
                    <span>
                      <h2>Price : </h2>
                      <h2 style={{ color: "red" }}>${ele.price}</h2>
                    </span>
                    <button onClick={() => { deletefnc(ele.id) }}>remove</button>
                  </div>
                </div>
              })}
            </div>
        }
      </div>
    </div>
  )
}

export default Cart



