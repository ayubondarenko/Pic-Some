import React, { useContext } from 'react';
import { Context } from '../context';
import Image from '../components/Image';
import { getClass } from '../utils/index';

function Photos() {
  const { photos } = useContext(Context);
  return (
    <main className="photos">
      {photos
        ? photos.map((p, i) => (
            <Image
              key={p.id}
              className={getClass(i)}
              url={p.url}
              alt="Smiley face"
            />
          ))
        : null}
    </main>
  );
}

export default Photos;
