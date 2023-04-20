
import './NavBar.css'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
const Nav = () => {
  
  const { addtocart } = useSelector((storeData) => {
    return storeData
})
  return (
    <div className='Nav'>
      <h2>Redux Cart</h2>
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      <Link to='/cart'>
        <button>Add Cart</button>
      </Link>
      <p className='count'>{addtocart.length}</p>
    </div>
  )
}

export default Nav