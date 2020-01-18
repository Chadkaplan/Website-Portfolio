$("#linkedInIcon").on("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    event.isPropagationStopped()
    window.open("www.linkedin.com/in/chad-kaplan-599186198")
    console.log("Clicked LinkedIn", "_blank");
})