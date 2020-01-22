import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext([]);
const URL =
  'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

function ContextProvider({ children }) {
  const [photos, setPhotos] = useState();
  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, []);

  return <Context.Provider value={{ photos }}>{children}</Context.Provider>;
}

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { Context, ContextProvider };
