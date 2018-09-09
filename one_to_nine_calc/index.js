const to3 = num => num.toString(3).padStart(8, '0')
const oneToNight = Array.from({length: 9}).map((_, idx) => idx + 1)
const makeSumString = num => {
  return oneToNight.reduce((acc, bit) => {
    if(bit === 9) return acc + bit
    const map = {0: '', 1: '+', 2: '-'}
    return acc + bit + map[to3(num)[bit - 1]]
  }, '')
}
const isTatal100 = sumStr => eval(sumStr) === 100

for( let i = 0; i < 3 ** 8; i++) {
  const str = makeSumString(i)
  if(isTatal100(str)) {
    console.log(str)
  }
}
