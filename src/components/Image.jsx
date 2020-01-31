import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context';
import useHover from '../hooks/useHover.jsx';

function Image({ className, photo }) {
  const { url, id, isFavorite } = photo;
  const [hovered, hoverRef] = useHover();
  const {
    toggleFavorite,
    addPhotoToCartItems,
    removePhotoFromCartItems,
    cartItems,
  } = useContext(Context);

  const cartIcon = () => {
    // if (!hovered) return null;
    const isExist = cartItems.some(c => c.id === id);
    if (isExist) {
      return (
        <i
          onClick={() => removePhotoFromCartItems(photo)}
          className="ri-shopping-cart-fill cart"
        />
      );
    }

    return (
      hovered && (
        <i
          onClick={() => addPhotoToCartItems(photo)}
          className="ri-add-circle-line cart"
        />
      )
    );
  };

  const hardIcon = () => {
    const fillClass = isFavorite ? 'ri-heart-fill' : 'ri-heart-line';
    if (!hovered && !isFavorite) return null;
    return (
      <i
        onClick={() => toggleFavorite(id)}
        className={`${fillClass} favorite`}
      />
    );
  };

  return (
    <div ref={hoverRef} className={`${className} image-container`}>
      <img src={url} className="image-grid" alt="some-url" />
      {hardIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string.isRequired,
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }).isRequired,
};

export default Image;
