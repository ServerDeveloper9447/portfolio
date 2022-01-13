    var bt = document.querySelector('#battery')
    var cmt = document.querySelector('#btr-cm')
    var tm = document.querySelector('#test')
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

setTimeout(() => {
var ip = document.querySelector('#ip')
fetch('https://api.ipify.org/?format=json')
.then(res => res.json())
.then(json => {
  ip.innerHTML = json.ip
})
}, 1500)

setInterval(() => {
  var e = `${Date()}`.split(" ")
  tm.innerHTML = e[4]
}, 500)