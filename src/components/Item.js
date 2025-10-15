import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  function handleAddToCartClick() {
    setInCart((prevInCart) => !prevInCart);
  }

  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";
  const liClass = inCart ? "in-cart" : "";
  const buttonClass = inCart ? "remove" : "add";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleAddToCartClick}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;

