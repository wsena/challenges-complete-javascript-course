/* #2.1 - Create a function 'createImage' which receives 'imgPath' as an input. This function returns a promise which creates a new image 
(use document.createElement('img')) and sets the .src attribute to the provided image path */

const imgDiv = document.querySelector('.images');
let currImg;

const createImage = function (imgPath) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img')
        img.src = imgPath;

        /* #2.2 - When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. 
        The fulfilled value should be the image element itself. In case there is an error loading the image (listen for the'error' event), reject the promise */
        img.addEventListener('load', () => {
            imgDiv.appendChild(img);
            resolve(img);
        });

        img.addEventListener('error', () => {
            reject(new Error('Image not found!'));
        });
    });
};

const wait = function(seconds){
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

//#2.4 - Consume the promise using .then and also add an error handler
createImage("resources/img_1.jpg")
    .then(img => {
        console.log("First image loaded!")
        currImg = img;
        //#2.5 - After the image has loaded, pause execution for 2 seconds using the 'wait' function we created earlier
        return wait(2);
        })
        .then(() => {
            //#2.6 - After the 2 seconds have passed, hide the current image (set display CSS property to 'none'), and load a second image
            console.log("Waited 2 seconds, hidding image...")
            currImg.style = 'display:none;';
            return createImage("resources/img_2.jpeg");
        })
            .then(img =>{
                console.log("Second image loaded!")
                currImg = img;
                //#2.7 - After the second image has loaded, pause execution for 2 seconds again
                return wait(2);
            })
                .then(()=> {
                    //#2.8 - After the 2 seconds have passed, hide the current image
                    console.log("Waited 2 seconds, hidding image...")
                    currImg.style = 'display:none;';
                })
    .catch(err => console.error(err));