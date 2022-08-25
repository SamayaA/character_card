export default function orderByProps(obj, sortKeys) {
  let result = [];
  // append sorted Keys
  for (let i = 0; i < sortKeys.length; i++) {
    const subObj = {
      key: sortKeys[i],
      value: obj[sortKeys[i]],
    };
    result.push(subObj);
    delete obj[sortKeys[i]];
  }
  // append keys in alphabet order
  let alphabetObj = [];
  for (const key in obj) {
    const subObj = {
      key,
      value: obj[key],
    };
    alphabetObj.push(subObj);
  }
  alphabetObj = alphabetObj.sort((a, b) => ((a.key > b.key) ? 1 : -1));
  result = result.concat(alphabetObj);
  return result;
}
