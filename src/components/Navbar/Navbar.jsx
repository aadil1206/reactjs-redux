import React from 'react'
import z19 from "../../assets/Amazon.jpg"
import z20 from "../../assets/search.svg"
import z21 from "../../assets/25.svg"
import z22 from "../../assets/27.svg"
import './Navbar.css'
import { Link } from "react-router-dom"
import { connect, useDispatch, useSelector } from "react-redux"
import { useState ,useEffect} from "react"
import { DELETE } from "../redux/Action"
import cartimg from '../../assets/cart.png'
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"


const Navbar = () => {
  const getdata = useSelector((state) => state.cartReducer.carts)
  const [cartList, setCartList] = useState(false)
  console.log(getdata)
  const dispatch = useDispatch()
  const delet = (id) => {
    dispatch(DELETE(id))
  }
  const [price, setPrice] = useState(0)
  const totals = () => {
    let price = 0
    getdata.map((e, i) => {
      price = parseFloat(e.price) * e.qty + price
    })
    setPrice(price)
  }
  useEffect(() => {
    totals()
  }, [totals])
  const handleCloses = () => {
    setCartList(!cartList)
  }
  return (
    <nav className="row" style={{backgroundColor: "black"}}>
      <div className="row py-2 justify-content-between align-items-center c4">
        <div
          className="col-6 d-flex px-3 justify-content-between align-items-center c7"
        >
          <img src={z19} alt="" className="c5 ml-4" style={{width:'60px'}}/>
          <div className="dropdown ">
              <button className="btn btn-secondary dropdown-toggle border-0" type="button" id="dropdownMenu2"
                style={{backgroundcolor: '#000000'}} data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><button className="dropdown-item" type="button">Abrasives</button></li>
                <li><button className="dropdown-item" type="button">Adhesives, Sealants and Tape</button></li>
                <li><button className="dropdown-item" type="button">Lubrication</button></li>
                <li><button className="dropdown-item" type="button">Machinery & Machining</button></li>
                <li><button className="dropdown-item" type="button">Material Handling</button></li>
                     <li><button className="dropdown-item" type="button">Power Transmission</button></li>
              <li><button className="dropdown-item" type="button">Welding</button></li>
              </ul>
            </div>
            <div className="dropdown" style={{marginleft :'40px'}}>
            <button className="btn btn-secondary dropdown-toggle border-0" type="button" id="dropdownMenu2"
              data-bs-toggle="dropdown" style={{backgroundcolor:'#000000'}} aria-expanded="false">
              Service
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li><button className="dropdown-item" type="button">Service</button></li>
              <li><button className="dropdown-item" type="button">About us</button></li>
              <li><button className="dropdown-item" type="button">Contact Us</button></li>
              <li><button className="dropdown-item" type="button">Caliberation</button></li>
              <li><button className="dropdown-item" type="button">Engineering & Consultancy</button></li>
              <li><button className="dropdown-item" type="button">Industry 4IR</button></li>
              <li><button className="dropdown-item" type="button">Maintenance</button></li>
              <li><button className="dropdown-item" type="button">MRO Supplies</button></li>
            </ul>
          </div>
          <a href="" className="c9">About us</a>
          <a href="" className="c8">Contact us</a>
        </div>
        <div className="col d-flex justify-content-end px-2 c91">
          <button className="c3">Login/Register</button>
        </div>
      </div>
      <div className="row py-3 px-5 justify-content-between c11">
        <div className="input-group mb-3 mb3">
          <button
            className="btn btn-outline-secondary dropdown-toggle b1"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All Categories
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Separated link</a></li>
          </ul>
          <input
            type="text"
            className="form-control e1"
            aria-label="Text input with dropdown button"
            placeholder="Search Products"
            
          />
          <span className="input-group-text bg-white border none" id="basic-addon1"
            ><img src={z20} alt=""
          /></span>
        </div>

        <div
          className="col-4 d-flex text-white align-items-center justify-content-end c12"
        >
          <div className="d-flex align-items-center mx-2">
          <button className='button' onClick={() => setCartList(!cartList)}>
                <BsBagCheck className='shop heIcon' />
                MY CART<span> ({getdata.length})</span>
              </button>
            <div className={cartList ? "showCart " : "hideCart"}>
                {getdata.length ? (
                  <section className='details'>
                    <div className='details_title'>
                      <h3>Photo</h3>
                      <p>Product Name</p>
                    </div>
                    {getdata.map((e) => (
                      <div className='details_content'>
                        <div className='details_content_img'>
                          <Link to={`/cart/${e.id}`} onClick={handleCloses}>
                            <img src={e.cover} alt='' />
                          </Link>
                        </div>
                        <div className='details_content_detail'>
                          <div className='details_content_detail_price'>
                            <p>{e.title.slice(0, 20)}...</p>
                            <p>Price : ${e.price}</p>
                            <p>Quantity : {e.qty}</p>
                          </div>
                        </div>
                        <div className='details_content_detail_icon'>
                          <i onClick={() => delet(e.id)}>
                            <AiOutlineDelete />
                          </i>
                        </div>
                      </div>
                    ))}
                    <div className='details_total'>
                      <h4>Total : ${price}</h4>
                    </div>
                  </section>
                ) : (
                  <div className='empty'>
                    <p>Your cart is empty</p>
                    <img src={cartimg} alt='' />
                  </div>
                )}
              </div>
          </div>
          <div className="d-flex align-items-center mx-2">
            <img
              src={z22}
              alt=""
              className="d-flex align-items-center"
            />
            <p className='y1'>Wishlist</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
