function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('yesButton').offsetWidth) -85;
    var y = Math.random() * (window.innerHeight - document.getElementById('yesButton').offsetHeight) -48;
    document.getElementById('yesButton').style.left = `${x}px`;
    document.getElementById('yesButton').style.top = `${y}px`;
}