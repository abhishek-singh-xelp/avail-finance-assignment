import React from "react";
const ProductCard = props => {
  console.log(props);
  return (
    <div className="productCardbase">
      <img src={props.imageURL} />
      <div className="info">
        <div>{props.productname}</div>
        <div>
          {props.price &&
            props.price.mrpPrice &&
            props.price.mrpPrice.formattedValue}
        </div>
        <div>
          Size-
          {props.price && props.price.mrpPrice && props.price.mrpPrice.size}
        </div>
        {props.location && props.location.pathname !== "/cart" && (
          <div className="addToBag" onClick={() => props.addToCart()}>
            <h3>Add To Cart</h3>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductCard;
