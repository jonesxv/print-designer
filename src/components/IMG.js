import React, { useState } from 'react';

const IMG = (props) => {
  const {
    name,
    type,
    description,
  } = props;
  const [image, setImage] = useState();
  console.log('name', name);
  import(`../images/${name}.${type ? type : 'jpg'}`)
    .then(img => {
      setImage(img.default);
    })
    .catch((err) => {
      console.log(err);
      setImage(undefined);
    });
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