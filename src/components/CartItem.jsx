import React from "react"
import PropTypes from 'prop-types';

function CartItem({item, removeItem}) {
    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line"
              onClick={()=>removeItem(item)} />
            <img src={item.url} width="130px" />
            <p>{item.price.toLocaleString("ru-RU", {style: "currency", currency: "RUB"})}</p >
        </div>
    )
}
CartItem.propTypes = {
  removeItem:PropTypes.func.isRequired,
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem
