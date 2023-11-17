// variables for text and imgs

const diveroniImgs = ['../assets/bambooForest.jpg','../assets/bambooPackaging.jpg']
const diveroniText = ["At Bamboo Solutions, we're passionate about creating sustainable packaging solutions that help businesses reduce their environmental impact. We believe that bamboo is the perfect material for eco-friendly packaging that's why we're on a mission to make bamboo packaging the norm for all businesses.", "Bamboo is a fast-growing, renewable resource that is becoming increasingly popular as a sustainable alternative to cardboard and plastic packaging. Bamboo packaging is biodegradable, compostable, and non-toxic, making it a much more environmentally friendly option than traditional packaging materials."];

// elements

const diveroni = document.querySelector(".diveroni");
const nextButton = document.querySelector(".diveroni-button");
const img = document.querySelector(".diveroni-img");
const text = document.querySelector(".diveroni-text");

// assigning default page

let salesPage = 0;
text.innerHTML = diveroniText[salesPage];
img.src = diveroniImgs[salesPage];

const second = 1000;

// plastic packaging slideshow

let salesSlideshow = setInterval(()=>{
    salesPage += 1;
    if (salesPage > 1) salesPage = 0;

    // sliding text animation

    text.style.transform ="translate(100%,0%)";

    // making then invisible

    img.style.opacity = "0";
    text.style.opacity = "0";
    
    let newTimeout = setTimeout(()=>{
        // bringing text back

        text.style.transform ="translate(0%,0%)";

        // changing img and text in div

        text.innerHTML = diveroniText[salesPage];
        img.src = diveroniImgs[salesPage];

        // making it visible again

        text.style.opacity = '1';
        img.style.opacity = '1';
    }, 500)
    
}, second * 20);

// let bambooSlideshow = setInterval(()=>{
//     page += 1;
//     if (page > 2) page = 0;

//     // sliding text animation

//     text.style.transform ="translate(100%,0%)";

//     // making then invisible

//     img.style.opacity = "0";
//     text.style.opacity = "0";
    
//     let newTimeout = setTimeout(()=>{
//         // bringing text back

//         text.style.transform ="translate(0%,0%)";

//         // changing img and text in div

//         text.innerHTML = diveroniText[page];
//         img.src = diveroniImgs[page];

//         // making it visible again

//         text.style.opacity = '1';
//         img.style.opacity = '1';
//     }, 500)
    
// }, second * 10);