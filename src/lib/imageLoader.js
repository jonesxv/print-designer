export const imageLoader = ({name, type}) => {
  import(`${name}.${type ? type : 'jpg'}`)
  .then(img => {
    return img.default;
  })
  .catch((err) => {
    console.log(err);
    return undefined;
  });
}

export default imageLoader;