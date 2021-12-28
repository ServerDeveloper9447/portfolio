    var bt = document.querySelector('#battery')
    var cmt = document.querySelector('#btr-cm')
    setInterval(() => {
    navigator.getBattery()
    .then(battery => {
      bt.innerHTML = Math.floor(battery.level*100)
      if (battery.charging === true) {
        cmt.innerHTML = `Your Battery (Charging)`
      } else {
        cmt.innerHTML = `Your Battery (Not Charging)`
      }
    })
    }, 100)