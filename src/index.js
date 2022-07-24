module.exports = function toReadable (number) {
  let array = ('' + number).split('').reverse();
  console.log(array);
  let resultArray = [];
  const objNumber = {
    0: {
        '0': '',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
    },
    1: {
        '0': '',
        '1': {
            '0': 'ten',
            '1': 'eleven',
            '2': 'twelve',
            '3': 'thirteen',
            '4': 'fourteen',
            '5': 'fifteen',
            '6': 'sixteen',
            '7': 'seventeen',
            '8': 'eighteen',
            '9': 'nineteen',
        },
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
        '6': 'sixty',
        '7': 'seventy',
        '8': 'eighty',
        '9': 'ninety',

    },
    2: {
        '1': 'one hundred',
        '2': 'two hundred',
        '3': 'three hundred',
        '4': 'four hundred',
        '5': 'five hundred',
        '6': 'six hundred',
        '7': 'seven hundred',
        '8': 'eight hundred',
        '9': 'nine hundred',
    }
  }

  for (let i = 0; i < array.length; i++) {
    resultArray.unshift(objNumber[i][array[i]]);
  }

  if (array[1] === '1') {
    resultArray.pop();
    resultArray[resultArray.length - 1] = objNumber['1']['1'][array[0]];
  } 

  for (let i = 0; i < resultArray.length; i++) {
    if (resultArray[i] === '') {
        resultArray.splice(i, 1);
        i--;
    }
  }

  let result = resultArray.join(' ');

  if (result === '') {
    result = 'zero';
  }
  return result;
}
