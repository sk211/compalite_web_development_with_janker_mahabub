const images = [
    "./img/img-1.jpg",
    "./img/img-2.jpg",
    "./img/img-3.jpg",
    "./img/img-4.jpg",
    "./img/img-5.jpg",
    "./img/img-6.jpg",

]
// let imgIndex = 0
// const imgEleenment = document.getElementById("slider")
// setInterval(() => {
//     if (imgIndex >= images.length) {
//         imgIndex = 0;
//     }
//     const imgUrl = images[imgIndex]
//     imgEleenment.src = imgUrl;
//     imgIndex++
// }, 1000)

let imgsIndex = 0
const imgEle = document.getElementById("slider")
setInterval(() => {
    if (imgsIndex >= images.length) {
        imgsIndex = 0
    }
    const imgurl = images[imgsIndex];
    imgsIndex++
    imgEle.src = imgurl
}, 2000)