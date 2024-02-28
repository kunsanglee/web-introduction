let movie1Name = document.getElementById("movie1Name");
let movie2Name = document.getElementById("movie2Name");
let movie3Name = document.getElementById("movie3Name");
let movie4Name = document.getElementById("movie4Name");
let movie5Name = document.getElementById("movie5Name");

let movie1NameLabel = document.getElementById("movie1NameLabel");
let movie2NameLabel = document.getElementById("movie2NameLabel");
let movie3NameLabel = document.getElementById("movie3NameLabel");
let movie4NameLabel = document.getElementById("movie4NameLabel");
let movie5NameLabel = document.getElementById("movie5NameLabel");

movie1NameLabel.innerText = movie1Name.innerText;
movie2NameLabel.innerText = movie2Name.innerText;
movie3NameLabel.innerText = movie3Name.innerText;
movie4NameLabel.innerText = movie4Name.innerText;
movie5NameLabel.innerText = movie5Name.innerText;

let button = document.getElementById("button");
let reset = document.getElementById("reset");

let name = document.getElementById("name");

button.addEventListener("click", function () {
    if (name.value === '') {
        alert('이름을 입력해주세요!');
        return;
    }

    let count = 0;

    if (checkbox1.checked) {
        count++;
    }
    if (checkbox2.checked) {
        count++;
    }
    if (checkbox3.checked) {
        count++;
    }
    if (checkbox4.checked) {
        count++;
    }
    if (checkbox5.checked) {
        count++;
    }

    alert(name.value + "님, 저와 " + count + "개의 취향이 같으시네요!");
});
