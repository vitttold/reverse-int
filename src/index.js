module.exports = function reverse(n) {

  let str = String(Math.abs(n));
  let res = "";
  for (let i = 0; i < str.length; i++ ) {
    res = str[i] + res
  }
  return Number(res);

}
