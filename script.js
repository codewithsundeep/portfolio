let form = document.querySelector("form");

function sendMail() {
    let message = `
    ${form[2].value}\n
    By : ${form[0].value}
    Email : ${form[1].value}
    `;
    fetch('https://script.google.com/macros/s/AKfycbzRf8lLi_3DWP8TSWcX53gN_C2z2OY7DZhU9yYIU71ElbsyknVjtlo_P3b73NBun4uT/exec', {
            method: "POST",
            body: JSON.stringify({ message: message, name: form[0].value, email: form[1].value })
        })
        .then(res => res.text())
        .then(data => {
            form[3].value = "Send";
            alert("message has been sent")

        }).catch(err => {
            form[3].value = "Send";
            alert("something went wrong please try again")
        });
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    form[3].value = "Sending...";
    sendMail();

})