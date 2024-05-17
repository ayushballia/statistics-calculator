const getMean = (array) => {
  return array.reduce((acc, el) => acc + el, 0) / array.length;
};

// const testArr1 = [1, 2, 3, 4, 5];
// const testArr2 = [1, 2, 3, 4, 5, 6];
// const isEven = testArr2.length % 2 === 0;
// console.log(isEven);
// const oddListMedian =testArr1[Math.floor(testArr1.length / 2)]
// console.log(oddListMedian)
// const evenListMedian = getMean(testArr2)
// console.log(evenListMedian);

const getMedian = (array) => {
  const sorted = array.sort((a, b) => a - b);
  if (array.length % 2 === 0) {
    return getMean(sorted);
  } else {
    return array[Math.floor(array.length / 2)];
  }
};

const getMode = (array) => {
  const counts = {};

  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  });
  // array.forEach((el) => {
  //   if (counts[el]) {
  //     counts[el] += 1;
  //   } else {
  //     counts[el] = 1;
  //   }
  // });

  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }

  const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];

  const mode = Object.keys(counts).filter(
    (el) => counts[el] === counts[highest]
  );

  return mode.join(", ");

  // return counts;
};

const getRange = (array) => {
  return Math.max(array) - Math.min(array);
};

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));

  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mode").textContent = mode;
  document.querySelector("#range").textContent = range;
};
