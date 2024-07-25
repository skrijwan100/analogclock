setInterval(()=>{
 let d = new Date()
 let h= d.getHours()
 let m= d.getMinutes()
 let s= d.getSeconds()
 let hrotation = 30*h+ m/2
 let mrotation = 6*m
 let srotaion = 6*s
 hour.style.transform=`rotate(${hrotation}deg)`
 minute.style.transform=`rotate(${mrotation}deg)`
 second.style.transform=`rotate(${srotaion}deg)`
},1000)