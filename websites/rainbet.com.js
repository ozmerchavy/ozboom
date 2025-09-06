(() => {
  function calculateEV(numBombs, numDiamonds, numTurns, xMoneyBack) {
    let total = numBombs + numDiamonds
    let prob = 1
    for (let i = 0; i < numTurns; i++) {
      prob *= (numDiamonds - i) / (total - i)
    }
    return prob * xMoneyBack
  }

  function getGameData() {
    const TURN = [...document.querySelectorAll('button')].filter(b => b.className.includes('Mines_grid-item-revealed')).length + 1
    
    const bombElement = Array.from(document.querySelectorAll('span')).find(span =>
      span.className.includes('Mines_bomb-count')
    )
    if (!bombElement) throw new Error('Could not find bomb count element')
    const NUM_BOMBS = Number(bombElement.innerText)
    
    const diamondElement = Array.from(document.querySelectorAll('div'))
      .find(div => div.querySelector(':scope > img[alt="Gem"]'))
    if (!diamondElement) throw new Error('Could not find diamond count element')
    const NUM_DIAMONDS = Number(diamondElement.innerText)

    const multiplierElement = Array.from(document.querySelectorAll('div')).filter(d =>
      d.className.includes('Mines_multiplier-item')
    )[1]
    if (!multiplierElement) throw new Error('Could not find multiplier element')
    const MULTIPLAYER = parseFloat(multiplierElement.innerText)

    return { TURN, NUM_BOMBS, NUM_DIAMONDS, MULTIPLAYER }
  }

  function evaluateEV() {
    const { TURN, NUM_BOMBS, NUM_DIAMONDS, MULTIPLAYER } = getGameData()
    console.warn(TURN, NUM_BOMBS, NUM_DIAMONDS, MULTIPLAYER)
    const EV = calculateEV(NUM_BOMBS, NUM_DIAMONDS, TURN, MULTIPLAYER)
    return EV
  }

  let retryInterval = null
  
  // Create or update the EV display
  function updateEVDisplay() {
    let evDisplay = document.getElementById('ev-display')
    if (!evDisplay) {
      evDisplay = document.createElement('div')
      evDisplay.id = 'ev-display'
      evDisplay.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        background: white;
        color: black;
        padding: 5px 10px;
        font-size: 12px;
        font-family: monospace;
        border: 1px solid #ccc;
        border-radius: 4px;
        z-index: 9999;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      `
      document.body.appendChild(evDisplay)
    }
    
    try {
      const ev = evaluateEV()
      const evPercentage = Math.round(10000 * ev) / 100 + "%"
      evDisplay.textContent = `EV: ${evPercentage}`
      evDisplay.style.display = 'block'
      evDisplay.style.color = 'black' // Reset to black when successful
      
      // Clear retry interval if successful
      if (retryInterval) {
        clearInterval(retryInterval)
        retryInterval = null
      }
    } catch (error) {
      console.error('Error calculating EV:', error)
      
      // Show error briefly then hide
      evDisplay.textContent = `Error: ${error.message}`
      evDisplay.style.color = 'red'
      
      setTimeout(() => {
        evDisplay.style.display = 'none'
      }, 2000) // Hide after 2 seconds
      
      // Start retry interval if not already running
      if (!retryInterval) {
        retryInterval = setInterval(() => {
          updateEVDisplay()
        }, 5000) // Retry every 5 seconds
      }
    }
  }

  // Use event delegation to handle clicks on mine grid items
  document.addEventListener('click', (event) => {
    if (event.target.matches('button[class*="Mines_grid-item"]')) {
      setTimeout(updateEVDisplay, 100) // Small delay to let DOM update
    }
  })

  // Initialize
  updateEVDisplay()
})()
