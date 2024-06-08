const TestimoniData = [
  {
    image:
      "https://source.unsplash.com/660x200?profile+pic",
    content: "Ndak tau kok tanyak saya!?",
    author: "Joko Widodo",
    rating: 5,
  },
  {
    image:
      "https://source.unsplash.com/660x200?profile+pic",
    content: "Waka waka ee",
    author: "Ronaldo Brazil",
    rating: 4,
  },
  {
    image:
      "https://source.unsplash.com/660x200?profile+pic",
    content: "Ih anak gua mahhh canttiikk, udaahhh kaya",
    author: "Ayah Ojak",
    rating: 1,
  },
  {
    image:
      "https://source.unsplash.com/660x200?profile+pic",
    content: "AKHhhdhakwdhwakdhkawhdkahk....",
    author: "Lucinta Dede Hidayat?",
    rating: 2,
  },
  {
    image:
      "https://source.unsplash.com/660x200?profile+pic",
    content: "Warmindo Kuy, Warkop Bang Saykotsss",
    author: "Amanda Puspita JKT48",
    rating: 5,
  },
  {
    image:
      "https://source.unsplash.com/660x200?profile+pic",
    content: "Warmindo Kuy, Warkop Bang Saykotsss",
    author: "Amanda Puspita JKT48",
    rating: 3,
  },
  {
    image:
      "https://source.unsplash.com/660x200?profile+pic",
    content: "Warmindo Kuy, Warkop Bang Saykotsss",
    author: "Amanda Puspita JKT48",
    rating: 2,
  },
  {
    image:
      "https://source.unsplash.com/660x200?profile+pic",
    content: "Warmindo Kuy, Warkop Bang Saykotsss",
    author: "Amanda Puspita JKT48",
    rating: 4,
  },
  {
    image:
      "https://source.unsplash.com/360x200?profile+pic",
    content: "Warmindo Kuy, Warkop Bang Saykotsss",
    author: "Amanda Puspita JKT48",
    rating: 3,
  },
];

function generateTestimonials(data) {
  const container = document.getElementById("testimonials-container");
  container.innerHTML = "";
  data.forEach((item) => {
    const testimonialDiv = document.createElement("div");
    testimonialDiv.className = "testimonial";
    testimonialDiv.setAttribute("data-rating", item.rating);
    testimonialDiv.innerHTML = `
          <img src="${item.image}" alt="testimonial" class="profile-testimonial">
          <p class="quote">${item.content}</p>
          <p class="author">- ${item.author}</p>
          <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
      `;
    container.appendChild(testimonialDiv);
  });
}

// Higher-Order Function untuk filtering testimoni
function filterTestimonials(callback) {
  const testimonials = document.querySelectorAll(".testimonial");
  testimonials.forEach((testimonial) => {
    if (callback(testimonial)) {
      testimonial.style.display = "block";
    } else {
      testimonial.style.display = "none";
    }
  });
}

// Callback untuk filter semua testimoni
function showAll(testimonial) {
  return true;
}

// Callback untuk filter testimoni positif
function showPositive(testimonial) {
  return testimonial.getAttribute("data-rating") >= 4;
}

// Callback untuk filter testimoni negatif
function showNegative(testimonial) {
  return testimonial.getAttribute("data-rating") <= 2;
}

// Callback untuk filter testimoni berdasarkan rating bintang
function showStarRating(rating) {
  return function (testimonial) {
    return testimonial.getAttribute("data-rating") == rating;
  };
}

// Fungsi untuk menerapkan filter berdasarkan tombol yang diklik
function applyFilter(type) {
  switch (type) {
    case "all":
      filterTestimonials(showAll);
      break;
    case "positive":
      filterTestimonials(showPositive);
      break;
    case "negative":
      filterTestimonials(showNegative);
      break;
    case "star-1":
      filterTestimonials(showStarRating(1));
      break;
    case "star-2":
      filterTestimonials(showStarRating(2));
      break;
    case "star-3":
      filterTestimonials(showStarRating(3));
      break;
    case "star-4":
      filterTestimonials(showStarRating(4));
      break;
    case "star-5":
      filterTestimonials(showStarRating(5));
      break;
    default:
      filterTestimonials(showAll);
      break;
  }
}

// Pada awalnya tampilkan semua testimoni
document.addEventListener("DOMContentLoaded", () => {
  generateTestimonials(TestimoniData);
  applyFilter("all");
});
