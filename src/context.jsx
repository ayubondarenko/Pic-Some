import React, { useState } from "react";
import PropTypes from "prop-types";
const Context = React.createContext("");

function ContextProvider({ children }) {
  const [value, setValue] = useState();
  const setContext = () => {
    setValue(prevValue => (prevValue = " xxx " + prevValue));
  };

  return (
    <Context.Provider value={""}>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export { Context, ContextProvider };
