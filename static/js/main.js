const btnSwitch = document.getElementById('switch');

let pricesMonthly = {
  priceBasic: 19.99,
  pricePro: 24.99,
  priceMaster: 39.99
}

let pricesAnnually = {
  priceBasic: 199.99,
  pricePro: 249.99,
  priceMaster: 399.99
}

btnSwitch.addEventListener('click', () => {
  if (btnSwitch.classList.contains('monthly')) {
    btnSwitch.classList.remove('monthly')
    priceBasic.innerHTML = pricesAnnually.priceBasic
    priceProfessional.innerHTML = pricesAnnually.pricePro
    priceMaster.innerHTML = pricesAnnually.priceMaster
  } else {
    btnSwitch.classList.toggle('monthly')
    priceBasic.innerHTML = pricesMonthly.priceBasic
    priceProfessional.innerHTML = pricesMonthly.pricePro
    priceMaster.innerHTML = pricesMonthly.priceMaster
  }
})

  priceBasic.innerHTML = pricesAnnually.priceBasic
  priceProfessional.innerHTML = pricesAnnually.pricePro
  priceMaster.innerHTML = pricesAnnually.priceMaster