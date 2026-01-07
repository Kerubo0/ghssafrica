var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g = Object.create(
        (typeof Iterator === "function" ? Iterator : Object).prototype
      );
    return (
      (g.next = verb(0)),
      (g["throw"] = verb(1)),
      (g["return"] = verb(2)),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
// get current year
var footerYear = document.querySelector(".current_year");
if (footerYear) {
  footerYear.innerText = String(new Date().getFullYear());
}
// program to get new Years date
var newyears = new Date(2024, 10, 27);
var links = document.querySelectorAll(".navlink");
var hamMenu = document.querySelector("#h_menu");
if (links) {
  links.forEach(function (item) {
    item.addEventListener("click", function () {
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
var regPopup = function (form, value) {
  var participation = document.querySelector(".register_now");
  var partnership = document.querySelector(".partner_form");
  var emailConfirm = document.querySelector(".email_confirm");
  var body = document.querySelector("#main_body");
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
var regFrom = document.getElementById("registration-form");
var partForm = document.getElementById("partnership-form");
var contactForm = document.getElementById("contact-form");

// let emailEndpoint = "http://127.0.0.1:5000/send_email/";
var emailEndpoint = "https://mailer.ghssafrica.org/send_email/";
function sendEmail(formObject) {
  return __awaiter(this, void 0, void 0, function () {
    var response, data, error_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3, , 4]);
          return [
            4 /*yield*/,
            fetch(emailEndpoint, {
              method: "POST",
              mode: "cors",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formObject),
            }),
          ];
        case 1:
          response = _a.sent();
          return [4 /*yield*/, response.json()];
        case 2:
          data = _a.sent();
          return [3 /*break*/, 4];
        case 3:
          error_1 = _a.sent();
          console.error("Error:", error_1);
          return [3 /*break*/, 4];
        case 4:
          return [2 /*return*/];
      }
    });
  });
}
if (regFrom) {
  regFrom.addEventListener("submit", function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var formObject = {
      first_name: formData.get("p_first_name"),
      last_name: formData.get("p_last_name"),
      organization: formData.get("organization"),
      email: formData.get("p_email"),
      phone_number: formData.get("p_phone_number"),
      // mode_of_payment: formData.get("payment"),
      form_type: "delegate",
    };

    console.log(formObject);

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
    var formData = new FormData(this);
    var formObject = {
      first_name: formData.get("p_first_name"),
      last_name: formData.get("p_last_name"),
      organization: formData.get("organization"),
      email: formData.get("p_email"),
      phone_number: formData.get("p_phone_number"),
      package: formData.get("package"),
      form_type: "sponsorship",
    };

    console.log(formObject);

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
    var formData = new FormData(this);
    var formObject = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      form_type: "contact",
    };

    console.log(formObject);

    // Send the form data to a server or process it in some way
    sendEmail(formObject);
    contactForm.reset();
    regPopup("email", "flex");
  });
}
