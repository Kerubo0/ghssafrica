// get current year
let footerYear = document.querySelector(".current_year") as HTMLSpanElement;
if (footerYear) {
  footerYear.innerText = String(new Date().getFullYear());
}

// program to get new Years date
const newyears = new Date(2024, 10, 27);

let links = document.querySelectorAll(
  ".navlink"
) as NodeListOf<HTMLUListElement>;

let hamMenu = document.querySelector("#h_menu") as HTMLInputElement;

if (links) {
  links.forEach((item) => {
    item.addEventListener("click", () => {
      if (hamMenu) {
        hamMenu.checked = false;
      }
    });
  });
}

// hero section image change
// let heroSection = document.querySelector(".hero") as HTMLDivElement;
// let hackHero = document.querySelector(".hack") as HTMLDivElement;
// let summitHero = document.querySelector(".pre-summit-slide") as HTMLDivElement
// let bootCampHero = document.querySelector(".bootcamp-slide") as HTMLDivElement
// let delegateSlide = document.querySelector(".hero-delegate") as HTMLDivElement

// const slides = [heroSection, delegateSlide, bootCampHero, ];
// let currentIndex = 0;

// const swapItems = (): void => {
//   if (slides.length === 0) return;

//   // Hide current slide
//   const currentSlide = slides[currentIndex];
//   if (currentSlide) {
//     currentSlide.style.display = "none";
//     currentSlide.classList.remove("appear");
//   }

//   // Update index to the next slide, looping back to the start
//   currentIndex = (currentIndex + 1) % slides.length;

//   // Show the next slide
//   const nextSlide = slides[currentIndex];
//   if (nextSlide) {
//     nextSlide.style.display = "flex";
//     nextSlide.classList.add("appear");
//   }
// };

// // Set an interval to switch slides every 7 seconds
// setInterval(swapItems, 7000);

// // Initial display setup
// slides.forEach((slide, index) => {
//   if (slide) {
//     slide.style.display = index === 0 ? "flex" : "none";
//     if (index === 0) slide.classList.add("appear");
//   }
// });


let regPopup = (form: string, value: string) => {
  let participation = document.querySelector(".register_now") as HTMLDivElement;
  let partnership = document.querySelector(".partner_form") as HTMLDivElement;
  let emailConfirm = document.querySelector(".email_confirm") as HTMLDivElement;
  let body = document.querySelector("#main_body") as HTMLBodyElement;

  if (body) {
    if (value == "flex") {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }
  if (form == "participation") {
    if (participation) {
      participation.style.display = value;
    }
  } else if (form == "partner") {
    if (partnership) {
      partnership.style.display = value;
    }
  } else {
    if (emailConfirm) {
      emailConfirm.style.display = value;
    }
  }
};

// - - - - - send emails - - - - -
let regFrom = document.getElementById("registration-form") as HTMLFormElement;
let partForm = document.getElementById("partnership-form") as HTMLFormElement;
let contactForm = document.getElementById("contact-form") as HTMLFormElement;
// let emailEndpoint = "http://127.0.0.1:5000/send_email/";
let emailEndpoint = "https://mailer.ghssafrica.org/send_email/";

async function sendEmail(formObject: object) {
  try {
    const response = await fetch(emailEndpoint, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formObject),
    });
    const data = await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

if (regFrom) {
  regFrom.addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = new FormData(this);
    let formObject = {
      first_name: formData.get("p_first_name"),
      last_name: formData.get("p_last_name"),
      organization: formData.get("organization"),
      email: formData.get("p_email"),
      phone_number: formData.get("p_phone_number"),
      // mode_of_payment: formData.get("payment"),
      form_type: "delegate",
    };

    // Send the form data to a server or process it in some way
    sendEmail(formObject);
    regFrom.reset();
    regPopup("participation", "none");
    regPopup("email", "flex");
  });
}

if (partForm) {
  partForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = new FormData(this);
    let formObject = {
      first_name: formData.get("p_first_name"),
      last_name: formData.get("p_last_name"),
      organization: formData.get("organization"),
      email: formData.get("p_email"),
      phone_number: formData.get("p_phone_number"),
      package: formData.get("package"),
      form_type: "sponsorship",
    };

    // Send the form data to a server or process it in some way
    sendEmail(formObject);
    partForm.reset();
    regPopup("partner", "none");
    regPopup("email", "flex");
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = new FormData(this);
    let formObject = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      form_type: "contact",
    };

    // Send the form data to a server or process it in some way
    sendEmail(formObject);
    contactForm.reset();
    regPopup("email", "flex");
  });
}
