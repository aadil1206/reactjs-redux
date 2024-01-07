import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Products.css";
import star from "../../assets/star.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch } from "react-redux"
import { ADD } from "../redux/Action";



const Products = () => {
 
  const [items, setitems] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);


  const handlefilterchange = (value) => {
    var res = items.filter((f) => f.title.toLowerCase().includes(value));
    setitems(res);
  };
  const xyz = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        // Handle successful response

        setitems(response.data.products);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    xyz();
   setLoading(true)
  }, []);
  const dispatch = useDispatch()
  const addToCart = (e) => {
    // console.log(e)
    // ADD(e) => single items lai add garko
    dispatch(ADD(e))
  }
  return (
    <div className="row mx-4">
    
    

      {items.map((item) => {
        return (
          <div key={item.id} className="col-12 my-4 card1 col-sm-6 col-lg-4">
           <div className="d-flex justify-content-center">
            <img
              src={item.images[0]}
              className='img1'
              alt=""
           
            />
            </div>
            <div className="d-flex justify-content-between brand_title">
              <p>{item.brand}</p>
              <p>{item.title}</p>
            </div>
            <p className="px-3" style={{ height: "88px" }}>
              {item.description}
            </p>
            <div className="d-flex justify-content-around">
              <p className=""> ₹ {item.price}</p>
              <p style={{ color: "green" }}>{item.discountPercentage} %Off</p>
            </div>
            <p
              style={{ backgroundColor: "green", color: "white", gap: "12px" }}
              className="d-flex align-items-center justify-content-center"
            >
              {item.rating}
              <img src={star} alt="" style={{ width: "16px" }} />
            </p>
            <button
                          style={{ backgroundColor: "green", color: "white" }}
                         onClick={() => addToCart(item)}
              className="d-flex align-items-center justify-content-center">Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
