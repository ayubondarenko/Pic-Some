import React from 'react';
import PropTypes from 'prop-types';
import useHover from '../hooks/useHover.jsx';

function CartItem({ item, removeItem }) {
  // const [isHover, setIsHover] = useState(false);
  const [isHover, delRef] = useHover();
  const delIconClass = `ri-delete-bin-${isHover ? 'fill' : 'line'}`;

  return (
    <div ref={delRef} className="cart-item">
      <i className={delIconClass} onClick={() => removeItem(item)} />
      <img alt="???" src={item.url} width="130px" />
      <p>
        {item.price.toLocaleString('ru-RU', {
          style: 'currency',
          currency: 'RUB',
        })}
      </p>
    </div>
  );
}
CartItem.propTypes = {
  removeItem: PropTypes.func.isRequired,
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
