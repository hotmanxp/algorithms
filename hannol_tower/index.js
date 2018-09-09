const makeTower = n => {
  const origin = Array.from({length: n}).map((_, idx) => idx + 1)
  return {
    origin,
    mid: [],
    dest: [],
    step: 0
  }
}

const showTower = tower => {
  const arrToString = arr => arr.join(',')
  console.log(`Step${tower.step}:`, arrToString(tower.origin), ' ; ', arrToString(tower.mid), ' ; ', arrToString(tower.dest))
}

const move = (from, to, tower) => {
  const disk = from.shift()
  to.unshift(disk)
  tower.step++
  showTower(tower)
}

const solute = (originArr, midArr, destArr, n, tower) => {
  if (n === 1) {
    move(originArr, destArr, tower)
    return
  }
  solute(originArr, destArr, midArr, n - 1, tower)
  move(originArr, destArr, tower)
  solute(midArr, originArr, destArr, n -1, tower )
}
const soluteHanolTower = n => {
  const tower = makeTower(n)
  solute(tower.origin, tower.mid, tower.dest, n, tower)
}
soluteHanolTower(10)
