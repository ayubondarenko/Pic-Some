import React from 'react';
import PropTypes from 'prop-types';


function Image({ className, url }) {
  return (
    <div className={`${className} image-container`}>
      <img src={url} className="image-grid" alt="some-url" />
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Image;
