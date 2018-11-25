import React from "react";
import cloneDeep from "lodash.clonedeep";
import sortBy from "lodash.sortby";
import ProductCard from "./productCard";
import CartContainer from "../containers/CartContainer";

import "./css/plp.css";
import Header from "./Header";
export const PRODUCT_IN_CART = "productInCart";
export default class Plp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priceLowToHigh: false,
      priceHighToLow: false
    };
  }

  goToCart() {
    this.props.history.push("/cart");
  }
  componentDidMount() {
    this.props.getPlp();
  }
  onLowToHigh = () => {
    this.setState({
      priceLowToHigh: true,
      priceHighToLow: false
    });
  };
  onHighToLow = () => {
    this.setState({
      priceLowToHigh: false,
      priceHighToLow: true
    });
  };
  addToCart = productId => {
    const localProduct = localStorage.getItem(PRODUCT_IN_CART);
    if (localProduct) {
      const productList = JSON.parse(localProduct);
      if (!productList.includes(productId)) {
        productList.push(productId);
        localStorage.setItem(PRODUCT_IN_CART, JSON.stringify(productList));
      }
    } else {
      localStorage.setItem(PRODUCT_IN_CART, JSON.stringify([productId]));
    }
  };
  render() {
    // console.log(this.props);
    let productList = cloneDeep(this.props.plp ? this.props.plp.plp : []);
    if (this.state.priceHighToLow) {
      productList = sortBy(productList, item => {
        return -(
          item.price &&
          item.price.mrpPrice &&
          item.price.mrpPrice.doubleValue
        );
      });
    }
    if (this.state.priceLowToHigh) {
      productList = sortBy(productList, item => {
        return (
          item.price && item.price.mrpPrice && item.price.mrpPrice.doubleValue
        );
      });
    }

    return (
      <div>
        <Header />
        <div className="base">
          <div className="filter">
            <button onClick={() => this.onLowToHigh()}>
              Price Low To High
            </button>
            <div>
              <button onClick={() => this.onHighToLow()}>
                Price High toLow
              </button>
            </div>
            <div className="cacrtPage" onClick={() => this.goToCart()}>
              Go to Cart
            </div>
          </div>

          <div className="grid">
            {productList &&
              productList.map((product, idx) => {
                return (
                  <div className="productCard" key={idx}>
                    <ProductCard
                      {...product}
                      addToCart={() => this.addToCart(product.productId)}
                      location={this.props.location}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
