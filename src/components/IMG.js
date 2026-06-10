import React, { useEffect, useState } from 'react';
import { imageLoader } from '../lib/imageLoader';

const IMG = (props) => {
  const {
    name,
    type,
    description,
  } = props;
  const [image, setImage] = useState();

  useEffect(() => {
    let isMounted = true;

    setImage(undefined);
    imageLoader({ name, type }).then((loadedImage) => {
      if (isMounted) {
        setImage(loadedImage);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [name, type]);

  return (
    <>
      {
        image
        && <img
          {...props}
          src={image}
          alt={description && description}
        />
      }
    </>
  );
};

export default IMG;
