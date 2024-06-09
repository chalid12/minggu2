const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});
const cardPhoto = document.querySelector(".card-photo");

function submitData() {
  const inputName = document.getElementById("inputName").value;
  const inputEmail = document.getElementById("inputEmail").value;
  const inputPhone = document.getElementById("inputPhone").value;
  const inputSubject = document.getElementById("inputSubject").value;
  const inputMessage = document.getElementById("inputMessage").value;

  // Perkondisian
  if (inputName == "") {
    alert("Name harus diisi"); // Kondisi 1
  } else if (inputEmail == "") {
    alert("Email Harus Diisi"); // kondisi 2
  } else if (inputPhone == "") {
    alert("Phone Number tidak boleh K0s0n9"); //kondisi 3
  } else if (inputSubject == "") {
    alert("Subject tidak boleh kosong"); // kondisi 4
  } else if (inputMessage == "") {
    alert("Message tidak boleh kosong"); // kondisi 5
  }
  console.log(
    `Name : ${inputName}\nEmail : ${inputEmail}\nPhone : ${inputPhone}\nSubject : ${inputSubject}\nMessage : ${inputMessage}`
  );

  const myemail = "chalidanwarr@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${myemail}?subject=${inputSubject}&body=Hello my name ${inputName}, and my number ${inputPhone} ${inputMessage}`;
  a.click();
}
