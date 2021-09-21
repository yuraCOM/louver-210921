const logo = document.querySelector('.logo')
const logoP = document.querySelector('.logo p')
let louvreSite = `https://louvre-museum.tickets-paris.fr/`

logo.onclick = function(){
    window.open(louvreSite)
    // logo.style.color = 'var(--color-gold)'
    logoP.style.color = 'var(--color-gold)'
}


// let vrCardArr = ['Royal Palace', 'Denon Wing', 'Colonnade Perrault', 'Greek hall', 'Mona Lisa', 'Night Palace']
// console.log(vrCardArr)

//перенес в data.js
// let vrCardArr = [
//     {
//         place : "Royal Palace",
//         http : "https://goo.gl/maps/Yt9eNHZqZGeJL9Wa9"
//     },
//     {
//         place : 'Denon Wing',
//         http : "https://goo.gl/maps/MT9gw4W4NBVTpDoKA"
//     },
//     {
//         place : 'Colonnade Perrault',
//         http : "https://goo.gl/maps/kEePSTpCtoZzjwjo9"
//     },
//     {
//         place : 'Greek hall',
//         http : "https://goo.gl/maps/kBoBZRm59AYoGVuq5"
//     },
//     {
//         place : 'Mona Lisa',
//         http : "https://goo.gl/maps/5jGxo9oLitQVBf1Z8"
//     },
//     {
//         place : 'Night Palace',
//         http : "https://goo.gl/maps/uoCEJ8ZcV1kuVGtF8"
//     },
// ]

// vrCardArr.forEach( item => {
//     console.log(item)
//     vrCard.innerHTML += `
//          <div class="vr-card">
//             <a href="${item.http}"> <img src="./assets/img/vr0${vrCardArr.indexOf(item)+1}.jpg" alt=""></a>
//             <h3 class="style-title">${item.place}</h3>
//             <h4>360° Virtual Tour</h4>
//             <p>Google Street Panorama View</p>
//          </div>
//     `
// })

let vrCard = document.querySelector('.vr')

vrCardArr.forEach( item => {
    vrCard.innerHTML += `
    <div class="vr-card vr-card-block">
            <a class="vr-card" href="${item.http}" target="_blank"> <img src="./assets/img/vr0${vrCardArr.indexOf(item)+1}.jpg" alt="">
                <h3 class="style-title">${item.place}</h3>
                <div class="line"></div>
                <h4>360° Virtual Tour</h4>
                <p>Google Street Panorama View</p>
            </a>
         </div>
    `
})

// let vrCards = document.querySelectorAll('.vr-card-block')
// vrCards.forEach( item =>{
//     item.addEventListener('mouseover', (target) =>{
//
//         document.querySelector('.line').style.transitionDuration = '5s'
//         // document.querySelector('.line').style.transform = 'scaleX(1.5)'
//         document.querySelector('.line').style.transition = 'width'
//         document.querySelector('.line').style.width = '440px'
//         // transition: background-color;
//         // transition-duration: 2s;
//     })
// })
// console.log(vrCards)


