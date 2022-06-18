var sizesToDiameterInches = {
  Small: 10,
  Medium: 12,
  Large: 14,
  "X-Large": 16,
};

var tax = 1.15

function reOrder() {
  const couponDivs = [...document.querySelectorAll(".local-coupon")];
  couponDivs.forEach(div => {
    const price = +div.querySelector('.appendix .price')?.innerText.match(/[\d\.]+/g)[0]
    if (!price) {
      div.style.order = Number.MAX_SAFE_INTEGER;
    }
    else {
      div.style.order = Math.round(price * 10 ** 7)
    }
  })
}

var sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function main() {
  const maxDivaporateDelay = 500;

  const couponDivs = [...document.querySelectorAll(".local-coupon")];

  couponDivs.forEach((div) => {
    setTimeout(() => div.classList.add('divaporate'), generateRandomInteger(0, maxDivaporateDelay))
  })

  await sleep(maxDivaporateDelay + 250);

  couponDivs.forEach((div) => {
    const cost = costPerSqInch(div);
    if (cost == undefined) return; // todo create "define" button

    const appendix = document.createElement("div");
    appendix.classList.add("appendix");
    appendix.innerHTML = `
      <span class="price">${(cost * 100).toFixed(2)}¢</span>
      <span>per inch²</span>

      <div class="flip-card tooltip">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <p>price per 1 medium-sized slice: ${(cost * 14.137).toFixed(2)}$</p>
          </div>
          <div class="flip-card-back">
            <p>price if it was a whole medium pizza: ${(cost * 14.137 * 8).toFixed(2)}$</p>
          </div>
        </div>
      </div>
    `;
    div.appendChild(appendix);
  });

  reOrder();

  couponDivs.forEach(div => {
    setTimeout(() => div.classList.remove('divaporate'), generateRandomInteger(0, maxDivaporateDelay));
  });
}

function generateRandomInteger(min, max) {
  return Math.floor(min + Math.random()*(max - min + 1))
}

function costPerSqInch(div) {
  const price = +div.querySelectorAll("div")[2].outerText.substr(1);
  const desc = div.querySelector(".local-coupon__description").innerText;
  const area = understandSurfaceArea(desc);
  if (!area) return undefined;
  const amount = understandHowManyPizzas(desc) || 1;
  return price* tax / (amount * area);
}

/**
 * @returns {number | undefined} in inch ** 2
 */
function understandSurfaceArea(couponText) {
  for (const sizeName of Object.keys(sizesToDiameterInches)) {
    if (couponText.includes(sizeName)) {
      const diameterInches = sizesToDiameterInches[sizeName];
      return Math.PI * (diameterInches / 2) ** 2;
    }
  }
}

/**
 * @returns {number | undefined}
 */
function understandHowManyPizzas(couponText) {
  const regex = new RegExp(
    `\\d+ (${Object.keys(sizesToDiameterInches).join("|")})`,
    "g"
  );
  const izkur = couponText.match(regex)?.[0];
  if (!izkur) return undefined;
  return +izkur.match(/\d+/g);
}

main();


////////////////////////////////////////////////////////////////////////////////////////
/// add styles
////////////////////////////////////////////////////////////////////////////////////////

const css = `
.local-coupon {
  position: relative;
}

.appendix {
  position: absolute;
  right: 20px;
  top: 13px;
  width: max-content;
  background: #006491;
  z-index: 1;
  color: white;
  padding: 7px;
  border-radius: 3px;
  text-align: center;
  font-family: cursive;
  box-shadow: 2px 4px 13px 9px rgba(0, 0, 0, 0.12);
}

.appendix:hover {
  background-color: transparent;
  color: transparent;
  box-shadow: none;
}

.appendix .price {
  display: block;
  font-size: 1.2rem;
}

.tooltip {
  position: absolute;
  border-radius: inherit;
  background: inherit;
  padding: inherit;
  width: 100px;
  right: 0;
  top: 0;
  font-size: 1.25em;
  transform: scale(0);
  transform-origin: top right;
  opacity: 0;
}

.appendix:hover .tooltip {
  transform: scale(1);
  opacity: 1;
}

.tooltip .more-info {
  color: rgba(255 255 255 / 0.8);
  font-size: 0.8em;
}

.local-coupon {
  transition: all 250ms ease;
}

.divaporate {
  opacity: 0;
  transform: translateY(-3rem);
}

.flip-card p {
  background: #006491;
  padding: 7px;
  color: white;
  font-size: 0.9em;
  border-radius: 3px;
  box-shadow: 2px 4px 13px 9px rgba(0, 0, 0, 0.12);
  transform: translate(0.625rem, -0.3rem);
}

.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transition-delay: 1s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}

@media(hover: none) {
  .appendix {
      font-family: system-ui;
  }
  
  .appendix:focus {
      background-color: transparent;
      color: transparent;
      box-shadow: none;
  }

  .appendix:focus .tooltip {
      transform: scale(1);
      opacity: 1;
  }

  .flip-card:focus .flip-card-inner {
      transform: rotateY(180deg);
  }
}
`

const styleEl = document.createElement('style');
styleEl.innerText = css;
document.head.appendChild(styleEl);
