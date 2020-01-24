import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext([]);
const URL =
  'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

function ContextProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, []);

  function toggleFavorite(id) {
    const newPhotos = photos.map(p => {
      if (p.id === id) return { ...p, isFavorite: !p.isFavorite };
      return p;
    });
    setPhotos(newPhotos);
  }

  const addPhotoToCartItems = photo => {
    if (cartItems.every(c => c.id !== photo.id)) {
      setCartItems(prevCartItems => [...prevCartItems, photo]);
    }
  };

  const removePhotoFromCartItems = photo => {
    setCartItems(prevCartItems => prevCartItems.filter(p => p.id !== photo.id));
  };

  return (
    <Context.Provider
      value={{ photos, toggleFavorite, cartItems, addPhotoToCartItems, removePhotoFromCartItems }}
    >
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { Context, ContextProvider };
