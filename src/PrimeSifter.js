export function PrimeSifter() {

}

export const arrayOfN = (n) => {
  const newArray = [];
  for (let i = 2; i <= n; i++) {
    newArray.push(i);
  }
  return newArray;
}

export const currySift = function(n) {
  return function(primeArray) {
    return primeArray.filter(x => x === n || x % n != 0);
  }
}
export const sift = function(n, primeArray) {
  const newArray = primeArray.filter(x => x === n || x % n != 0);
  return newArray;
}

// const currySift(10)(newArray);

// const siftTwo = currySift(2);
// siftTwo(newArray);