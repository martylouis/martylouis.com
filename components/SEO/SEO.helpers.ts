export const getSocialImage = (img: string | [], type: string) => {
  return `<meta property="${type}:image" content="${img}">`;
  // if (img && img.length > 0) {
  //   img.constructor.name === 'Array'
  //     ? `<meta property="${type}:image" content="${img[0]}">`
  //     : `<meta property="${type}:image" content="${img}">`;
  // }
};
