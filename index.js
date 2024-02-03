document.addEventListener("DOMContentLoaded", () => {
    const backgroundImage = document.querySelector('.background-image');
    const backgroundMusic = document.getElementById("background-music");
    const changeButton = document.getElementById("change-button");

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
    'music/angela.mp3',
    'music/energy.mp3',
    'music/holdonme.mp3',
    'music/jungle.mp3',
    'music/longer.mp3',
    'music/lovedelux.mp3',
    'music/lovegalaxy.mp3',
    'music/memora.mp3',
    'music/moonlight.mp3',
    'music/nyc.mp3',
    'music/toysoldiers.mp3',
    'music/twin.mp3',
    'music/warmpop.mp3',
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

    function changeContent() {
        let [randomImage, newImageIndex]  = getRandomNewElement(currentImageIndex, images);
        let [randomMusic, newMusicIndex]  = getRandomNewElement(currentMusicIndex, music);
        let [randomFont, newFontIndex]  = getRandomNewElement(currentFontIndex, googleFonts);
        
        currentImageIndex = newImageIndex;
        currentMusicIndex = newMusicIndex;
        currentFontIndex = newFontIndex;

        backgroundImage.style.backgroundImage = `url('${randomImage}')`;
        document.body.style.fontFamily = randomFont;
        backgroundMusic.src = randomMusic;
    }

    changeButton.addEventListener("click", changeContent);

    // Initial content load
    changeContent();
});
