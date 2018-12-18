const textToASINs = text => {
  const matcher = text.match(/(B[A-Z0-9]{9})/g);
  return matcher && matcher.length
    ? matcher
        .filter(function(x, i, a) {
          return a.indexOf(x) === i;
        })
        .join("\n")
    : [];
};

export default textToASINs;
