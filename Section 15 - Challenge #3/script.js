const imgDiv = document.querySelector('.images');
let currImg;

const createImage = function (imgPath) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img')
        img.src = imgPath;

        img.addEventListener('load', () => {
            imgDiv.appendChild(img);
            resolve(img);
        });

        img.addEventListener('error', () => {
            reject(new Error('Image not found!'));
        });
    });
};

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

/* PART 1 - #3.1 - Write an async function 'loadNPause' that recreates Challenge #2, this time using async/await 
          (only the part where the promise is consumed, reuse the 'createImage' function from before) */
const loadNPause = async function () {
    try {
        var img = await createImage("resources/img_1.jpg");
        console.log("First image loaded!")
        currImg = img;

        var waitReturn = await wait(2);
        console.log("Waited 2 seconds, hidding image...")
        currImg.style = 'display:none;';

        img = await createImage("resources/img_2.jpeg");
        console.log("Second image loaded!")
        currImg = img;

        waitReturn = await wait(2);
        console.log("Waited 2 seconds, hidding image...")
        currImg.style = 'display:none;';
    } catch (err) {
        alert(`Something went wrong! ${err}`);

        //Reject promise returned from assync function
        throw err;
    }
}

//PART 2 - #3.1 - Create an async function 'loadAll' that receives an array of image paths 'imgArr'
const loadAll = async function (imgArr) {
    try {
        //PART 2 - #3.2 - Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
        const imgs = imgArr.map(async img => await createImage(img));

        //PART 2 - #3.3 - Check out the 'imgs' array in the console! Is it like you expected?
        console.log(imgs);

        //PART 2 - #3.4 - Use a promise combinator function to actually get the images from the array
        imgsNew = await Promise.all(imgs);

        imgsNew.map(img => img.classList.add("parallel"));
        console.log(imgsNew);
    } catch (err) {
        alert(`Something went wrong! ${err}`)
        throw err;
    }
}

//loadNPause();
loadAll(['resources/img_1.jpg', 'resources/img_2.jpeg']);