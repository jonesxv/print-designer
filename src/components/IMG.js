import React, { useEffect, useState } from 'react';
import { getCachedImage, imageLoader } from '../lib/imageLoader';

const IMG = (props) => {
  const {
    name,
    type,
    description,
    className = '',
  } = props;
  const [image, setImage] = useState(() => getCachedImage({ name, type }));
  const placeholderClassName = [
    className,
    'image-placeholder',
  ].filter(Boolean).join(' ');

  useEffect(() => {
    let isMounted = true;
    const cachedImage = getCachedImage({ name, type });

    setImage(cachedImage);
    imageLoader({ name, type }).then((loadedImage) => {
      if (isMounted) {
        setImage(loadedImage);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [name, type]);

  if (!image) {
    return (
      <span
        aria-hidden="true"
        className={placeholderClassName}
        data-placeholder-for={name}
      />
    );
  }

  return (
    <img
      {...props}
      className={className}
      src={image}
      alt={description && description}
    />
  );
};

export default IMG;
