import React from "react";
import logo from "../img/trasua.jpg";
import logo1 from "../img/trasua2.JPG";
import logo2 from "../img/trasuamach.jpg";
import logo3 from "../img/trasuatruyenthong.jpg";
import "../Css/Newapp.css";

const Newapp = () => {
  return (
    <div className="wrapper">
      <ul className="products">
        <li>
            <div className="product-top">
              <div className="product-item">
                <a href="#ng" className="product-themb">
                <img src={logo} alt="" />
                </a>
                
              </div>
              <a href="#" className="add-card">Add Card</a>
              <div className="product-info">
                <a href="#" className="product-cat">TRÀ Sữa</a>
              
                <p className="price">0.9$</p>
              </div>
            </div>
          </li>
        <li>
        <div className="product-top">
          <div className="product-item">
            <a href="#ng" className="product-themb">
              <img src={logo1} alt="" />
              </a>
              
            </div>
            <a href="#" className="add-card">Add Card</a>
            <div className="product-info">
              <a href="#" className="product-cat">TRÀ Sữa</a>
              
              <p className="price">0.9$</p>
            </div>
          </div>
        </li>
        <li>
          <div className="product-top">
            <div className="product-item">
            <a href="#ng" className="product-themb">
              <img src={logo2} alt="" />
              </a>
              
            </div>
            <a href="#" className="add-card">Add Card</a>
            <div className="product-info">
              <a href="#" className="product-cat">TRÀ Sữa</a>
              
              <p className="price">0.9$</p>
            </div>
          </div>
        </li>
        <li>
          <div className="product-top">
            <div className="product-item">

            <a href="#ng" className="product-themb">
              <img src={logo3} alt="" />
              </a>
              
            </div>
            <div className="product-info">
              <a href="#" className="product-cat">TRÀ Sữa</a>
              
              <p className="price">0.9$</p>
            </div>
            <a href="#" className="add-card">Add Card</a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Newapp;
