﻿function openAbout() {
    document.getElementById("aboutPopUp").classList.remove('aboutPopUpClosed');
    document.getElementById("aboutPopUp").classList.add('aboutPopUpOpen');
    document.getElementById("aboutPopUpX").classList.remove('aboutPopUpXclosed');
    document.getElementById("aboutPopUpX").classList.add('aboutPopUpXopen');

}

function closeAbout() {
    document.getElementById("aboutPopUp").classList.remove('aboutPopUpOpen');
    document.getElementById("aboutPopUp").classList.add('aboutPopUpClosed');
    document.getElementById("aboutPopUpX").classList.remove('aboutPopUpXopen');
    document.getElementById("aboutPopUpX").classList.add('aboutPopUpXclosed');
}

function openHow() {
    document.getElementById("howPopUp").classList.remove('howPopUpClosed');
    document.getElementById("howPopUp").classList.add('howPopUpOpen');
    document.getElementById("howPopUpX").classList.remove('howPopUpXclosed');
    document.getElementById("howPopUpX").classList.add('howPopUpXopen');

}

function closeHow() {
    document.getElementById("howPopUp").classList.remove('howPopUpOpen');
    document.getElementById("howPopUp").classList.add('howPopUpClosed');
    document.getElementById("howPopUpX").classList.remove('howPopUpXopen');
    document.getElementById("howPopUpX").classList.add('howPopUpXclosed');
}