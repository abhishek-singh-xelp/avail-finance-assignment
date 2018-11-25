import React from "react";
import cloneDeep from "lodash.clonedeep";
import ProductCard from "./productCard";
import { PRODUCT_IN_CART } from "./plp";
import Header from "./Header";
export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInCart: JSON.parse(localStorage.getItem(PRODUCT_IN_CART))
    };
  }
  removeProduct = pId => {
    const productInCart = cloneDeep(this.state.productInCart);
    const indexToBeDelete = productInCart.findIndex(item => item === pId);
    productInCart.splice(indexToBeDelete, 1);
    this.setState({ productInCart });
    localStorage.setItem(PRODUCT_IN_CART, JSON.stringify(productInCart));
  };
  componentDidMount() {
    this.props.getPlp();
  }
  render() {
    console.log("herere", this.props);
    // console.log(this.state.productInCart.length, this.props.plp.plp);
    return this.state.productInCart && this.state.productInCart.length > 0 ? (
      <div>
        <Header />
        {this.state.productInCart.map((pId, idx) => {
          let productDetails =
            this.props.plp &&
            this.props.plp.plp.find(
              productDetails => productDetails.productId === pId
            );
          // console.log(productDetails, "CartContainer");
          return (
            <div>
              <ProductCard {...productDetails} location={this.props.location} />
              <span onClick={() => this.removeProduct(pId)}>
                <h3 className="removeProduct">Remove Product</h3>
              </span>
            </div>
          );
        })}
      </div>
    ) : (
      <h1>No Product IN Car</h1>
    );
  }
}
