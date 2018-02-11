import Flipping from 'flipping/dist/flipping.js';

const gemstones = {
  garnet: 'january',
  amethyst: 'february',
  aquamarine: 'march',
  diamond: 'april',
  emerald: 'may',
  alexandrite: 'june',
  ruby: 'july',
  peridot: 'august',
  sapphire: 'september',
  tourmaline: 'october',
  topaz: 'november',
  turquoise: 'december'
};
const colors = {
  garnet: '#8B0206',
  amethyst: '#694F91',
  aquamarine: '#7FC7F3',
  diamond: '#F1F9FF',
  emerald: '#04A24F',
  alexandrite: '#5D9094',
  ruby: '#F70004',
  peridot: '#B1E347',
  sapphire: '#2345B9',
  tourmaline: '#FC5191',
  topaz: '#F98603',
  turquoise: '#4DF5FF'
}

const gemstonesElm = document.getElementById('gemstones');
const stoneElm = document.getElementById('stone');

const letter = prefix => char => `<span data-flip-key="${prefix}-${char}">${char}</span>`;

function mapLetters(word, prefix) {
  const seen = {};

  return [...word].map(char => {
    let suffix = ''
    if (seen[char] !== undefined) {
      ++seen[char]
      return `<span data-flip-key="${prefix}-${char}-${seen[char]}">${char}</span>`
    } else {
      seen[char] = 0;
      return `<span data-flip-key ="${prefix}-${char}">${char}</span>`
    }
  })
}

const gemstonesHTML = Object.keys(gemstones)
  .map(gemstone => {
    const month = gemstones[gemstone]

    return `
     <div class="gemstone" id ="${gemstone}">
        <div class="month">
          ${mapLetters(month, 'month').join('')}
        </div>
      <div class="gem">
         ${mapLetters(gemstone, 'gem').join('')}
      </div>
    </div>
`
  })
  .join('\n')

gemstonesElm.innerHTML = gemstonesHTML

function cycle(states, action) {
  const statesMap = {}

  states.forEach((state, i) => {
    statesMap[state] = {
      [action]: states[i + 1] || states[0]
    }
  })
  return statesMap
}

function transition(state, action) {
  return machine[state][action]
}

const machine = cycle(Object.keys(gemstones), 'CLICK')
let currentState = 'sapphire'

function update(state) {
  stoneElm.style
    .setProperty('--color', colors[state])
  gemstonesElm.setAttribute('data-state', state)
}

const flipping = new Flipping({
  parentElement: gemstonesElm,
  duration: 600
})

document.body.addEventListener('click', flipping.wrap(() => {
  currentState = transition(currentState, 'CLICK')
  update(currentState)
}))

update(currentState)
