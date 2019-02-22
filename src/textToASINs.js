const textToASINs = text => {
  const asin_match = text.match(/(B[A-Z0-9]{9})/g);
  return asin_match && asin_match.length > 0
    ? asin_match.filter(function(x, i, a) {
        return a.indexOf(x) === i;
      })
    : [];
};

export default textToASINs;
