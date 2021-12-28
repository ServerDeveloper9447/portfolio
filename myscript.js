var btrpgr = document.getElementById('batr-pgr')
var btr = document.querySelector('#battery')

setInterval(() => {
  navigator.getBattery()
  .then(battery => {
    btrpgr.innerHTML = `${Math.floor(battery.level*100)}%`
    btr.setAttribute('aria-valuenow', Math.floor(battery.level*100))
  })
}, 1000)