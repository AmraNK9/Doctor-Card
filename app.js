//assign redom saying header
let saying_list = [
  "Take care of your body. It's the only place you have to live.",
  "A healthy outside starts from the inside.",
  "Healthy citizens are the greatest asset any country can have.",
//   "The only way to keep your health is to eat what you don't want,drink what you don't like, and do what you'd rather not.",
//   "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
//   "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
//   "Healthy eating is a way of life, so it's important to establish routines that are simple, realistic, and ultimately livable.",
  "The first wealth is health.",
  "The first wealth is health."

];
const header = document.querySelector("header h1");
console.log(header);
header.innerHTML = saying_list[Math.floor(Math.random()*saying_list.length)]
const xhr = new XMLHttpRequest();
xhr.open("get", "data/data.xml");
xhr.send();
xhr.onload = function () {
  let response_xml = xhr.responseXML;
  let doctor_nList = response_xml.querySelectorAll("doctor");
  doctor_nList.forEach((doctor) => {
    let doctor_img = doctor.querySelector("image").innerHTML;
    let doctor_name = doctor.querySelector("name").innerHTML;
    let doctor_speciality = doctor.querySelector("speciality").innerHTML;
    let doctor_email = doctor.querySelector("email").innerHTML;

    const doctor_card_wrapper = document.querySelector(".doctor-wraper");
    doctor_card_wrapper.innerHTML += `
        <div class="doctor-card">
            <div class="doctor-image">
              <img src="${doctor_img}" alt="Doctor">
            </div>
            <div class="doctor-info">
              <h2>${doctor_name}</h2>
              <p>${doctor_speciality}</p>
              <p>${doctor_email}</p>
              <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>

        `;
  });
};


