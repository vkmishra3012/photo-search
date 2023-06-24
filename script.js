function imageGenerate() {
    let txt = document.getElementById("txt").value;
    let url = `https://source.unsplash.com/400x400/?${txt}`;
    let result = document.getElementById("result");
    let welcomeMsg = document.getElementById("welcome-msg");

    welcomeMsg.innerHTML = `Here is the result for ${txt}`;
    result.innerHTML = `<img src="${url}" class="img-fluid">`;
}