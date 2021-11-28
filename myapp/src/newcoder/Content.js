import React, { Component } from "react";
import "./Style.css";

class Content extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1>Helllo KIỀU ANH </h1>
          <nav className="navbar">
            <a href="#home">home</a>
            <a href="#products">products</a>
            <a href="#review">review</a>
            <a href="#blogs">blogs</a>
          </nav>

          <div className="icons">
            <div class="fas fa-bars" id="menu-btn"></div>
            <div class="fas fa-search" id="search-btn"></div>
            <div class="fas fa-shopping-cart" id="cart-btn"></div>
            <div class="fas fa-user" id="login-btn"></div>
          </div>
        </header>

        <section className="home" id="home">
          <div className="content">
            <h3>
              Delicios and <span>Nutritious</span> products for your
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              libero nostrum veniam facere tempore nisi.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Content;
