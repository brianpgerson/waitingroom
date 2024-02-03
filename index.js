document.addEventListener("DOMContentLoaded", () => {
    const backgroundImage = document.querySelector('.background-image');
    const backgroundMusic = document.getElementById("background-music");
    const changeButton = document.getElementById("change-button");
    const audio = document.getElementById('background-music');
    // const ctrl = document.getElementById('play-button');
    const ctrlDiv = document.querySelector('div.play')

    const images = [ 
        "images/arcade.gif" ,
        "images/barbie.gif" ,
        "images/beach.gif" ,
        "images/cat.gif" ,
        "images/creek.gif" ,
        "images/flood.gif" ,
        "images/forest.gif" ,
        "images/galaxy.gif" ,
        "images/heaven.gif" ,
        "images/kyoto.gif" ,
        "images/library.gif" ,
        "images/lightpost.gif" ,
        "images/night.gif" ,
        "images/snow.webp" ,
        "images/star.gif" ,
        "images/strangecity.gif" ,
        "images/suburban.gif" ,
        "images/trad.gif" ,
        "images/underpass.gif" ,
        "images/waterfall.gif"
    ];
   


const music = [
    'https://waiting-room-media.s3.amazonaws.com/angela.mp3',
    'https://waiting-room-media.s3.amazonaws.com/energy.mp3',
    'https://waiting-room-media.s3.amazonaws.com/holdonme.mp3',
    'https://waiting-room-media.s3.amazonaws.com/jungle.mp3',
    'https://waiting-room-media.s3.amazonaws.com/longer.mp3',
    'https://waiting-room-media.s3.amazonaws.com/lovedelux.mp3',
    'https://waiting-room-media.s3.amazonaws.com/lovegalaxy.mp3',
    'https://waiting-room-media.s3.amazonaws.com/memora.mp3',
    'https://waiting-room-media.s3.amazonaws.com/moonlight.mp3',
    'https://waiting-room-media.s3.amazonaws.com/nyc.mp3',
    'https://waiting-room-media.s3.amazonaws.com/toysoldiers.mp3',
    'https://waiting-room-media.s3.amazonaws.com/twin.mp3',
    'https://waiting-room-media.s3.amazonaws.com/warmpop.mp3',
];

    let currentImageIndex = 0;
    let currentMusicIndex = 0;
    let currentFontIndex = 0;

    const googleFonts = [
        'Dancing Script',
        'Fondamento',
        'Fredericka the Great',
        'Shrikhand',
        'Sixtyfour',
      ];

    function getRandomNewElement(curr, arr) {
        if (arr.length <= 1) {
            return arr[0]
        }
        let randomIndex = Math.floor(Math.random() * arr.length);
        while (randomIndex === curr) {
            randomIndex = Math.floor(Math.random() * arr.length);
        }

        return [arr[randomIndex], randomIndex];
    }

    function changeContent(forcePlaying = false) {
        let [randomImage, newImageIndex]  = getRandomNewElement(currentImageIndex, images);
        let [randomMusic, newMusicIndex]  = getRandomNewElement(currentMusicIndex, music);
        let [randomFont, newFontIndex]  = getRandomNewElement(currentFontIndex, googleFonts);
        
        currentImageIndex = newImageIndex;
        currentMusicIndex = newMusicIndex;
        currentFontIndex = newFontIndex;

        backgroundImage.style.backgroundImage = `url('${randomImage}')`;
        document.body.style.fontFamily = randomFont;
        backgroundMusic.src = randomMusic;

        if (forcePlaying) {
            ctrlDiv.style.backgroundImage = `url('images/pause.png')`;
        }
    }

    ctrlDiv.addEventListener("click",  () => {
        // Update the Button
        const isPaused = ctrlDiv.getAttribute("data-status") === 'paused';
        ctrlDiv.style.backgroundImage = isPaused ? `url('images/pause.png')` : `url('images/play.png')`
        
        // Update the Audio
        if (isPaused) {
            ctrlDiv.setAttribute("data-status", "playing");
            audio.play()
        } else {
            ctrlDiv.setAttribute("data-status", "paused");
            audio.pause()
        }

        // Prevent Default Action
        return false;
    });

    changeButton.addEventListener("click", () => changeContent(true));

    // Initial content load
    changeContent();
});
