const wrapper = document.querySelector('.wrapper');
generateButton = wrapper.querySelector('.form button');
qrInput = wrapper.querySelector('.form input');
qrImg = wrapper.querySelector( '.qr-code img');
let preValue;

generateButton.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateButton,innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () =>{
        wrapper.classList.add("active");
        generateButton,innerText = "Generate QR Code";

    })

})

qrInput.addEventListener("keyup", () =>{
    if(!qrInput.value.trim()){
        wrapper.classList.remove("active");
        preValue = "";
    }
})