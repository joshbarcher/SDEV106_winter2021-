//wait until the page loads
window.onload = function() {
    //create a variable to hold the paragraph below
    let paragraph = document.querySelector("p");

    //change the text of the paragraph
    paragraph.innerHTML += " Let's take a walk on the boardwalk!";

    //set a timer for every 1000 milliseconds
    window.setInterval(function() {
        //this code will run every 1000 milliseconds
        let span = document.querySelector("#time");
        let now = new Date();

        //get time components
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        let time = hours + ":" + minutes + ":" + seconds;
        span.innerHTML = time;
    }, 1000);
};