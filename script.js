function change(){
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
}


    document.getElementsByClassName("title")[0].style.transform = "scale(0.01)";
    document.getElementsByClassName("title")[0].style.transition = "1s";
    sleep(1000).then(() => {
        document.getElementsByClassName("title")[0].style.display = "none";
    });
}
function changePath() {
    location.href = 'https://mck.survivo.tk/index.html'
}
