(() => {
    console.log("this is the icon store of my cafe");

    let theTitle=document.querySelector(".title"),
        theIcons=document.querySelectorAll(".icon");
    //theTitle and theIcons are variables to which objects having classes title and icon are stored respectively:)

    function log() {
        console.log("Thank you for checking it out!", this.id);
    }

    theTitle.addEventListener("click", log);
    theIcons.forEach(icon => icon.addEventListener("click", log));

})();




