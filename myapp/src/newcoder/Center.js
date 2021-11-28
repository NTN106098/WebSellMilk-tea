import React, { Component } from "react";
import "../Css/Center.css";
import logo from "../img/trasua.jpg";
import logo1 from "../img/trasua2.JPG";
import logo2 from "../img/trasuamach.jpg";
import logo3 from "../img/trasuatruyenthong.jpg";

class Center extends Component {
  render() {
    return (
      <div>
        <section className="products" id="products">
          {/* <h1 class="heading">
            {" "}
            our <span>products</span>{" "}
          </h1> */}

          <div className="swiper product-slider">
            <div class="swiper-wrapper">
              <div class="swiper-slide box">
                <img src={logo} alt="" />
                <h3>fresh cabbage</h3>
                <div class="price"> 15.000đ </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <a href="#bn" nnclass="btn">
                  add to cart
                </a>
              </div>

              <div class="swiper-slide box">
                <img src={logo1} alt="" />
                <h3>fresh cabbage</h3>
                <div class="price"> 15.000đ </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <a href="#bn" nnclass="btn">
                  add to cart
                </a>
              </div>

              <div class="swiper-slide box">
                <img src={logo2} alt="" />
                <h3>fresh cabbage</h3>
                <div class="price"> 15.000đ </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <a href="#bn" nnclass="btn">
                  add to cart
                </a>
              </div>

              <div class="swiper-slide box">
                <img src={logo3} alt="" />
                <h3>fresh cabbage</h3>
                <div class="price"> 15.000đ </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <a href="#bn" nnclass="btn">
                  add to cart
                </a>
              </div>

              <div class="swiper-slide box">
                <img src={logo} alt="" />
                <h3>fresh cabbage</h3>
                <div class="price"> 15.000đ </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <a href="#bn" nnclass="btn">
                  add to cart
                </a>
              </div>

              <div class="swiper-slide box">
                <img src={logo1} alt="" />
                <h3>fresh cabbage</h3>
                <div class="price"> 15.000đ </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <a href="#bn" nnclass="btn">
                  add to cart
                </a>
              </div>

              <div class="swiper-slide box">
                <img src={logo2} alt="" />
                <h3>fresh cabbage</h3>
                <div class="price"> 15.000đ </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <a href="#bn" nnclass="btn">
                  add to cart
                </a>
              </div>

              <div class="swiper-slide box">
                <img src={logo3} alt="" />
                <h3>fresh cabbage</h3>
                <div class="price"> 15.000đ </div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <a href="#bn" nnclass="btn">
                  add to cart
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Center;
