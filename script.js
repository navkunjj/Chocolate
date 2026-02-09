let cart = [];

// Loader
window.onload = function () {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
  }, 3000);
};

// Add to cart only
function addToCart(item) {
  cart.push(item);
  document.getElementById("cartCount").innerText = cart.length;
}

// Toggle cart popup
function toggleCart() {
  const popup = document.getElementById("cartPopup");
  const itemsDiv = document.getElementById("cartItems");

  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
    itemsDiv.innerHTML = "";

    if (cart.length === 0) {
      itemsDiv.innerHTML = "<p>Your cart is empty 😢</p>";
    } else {
      cart.forEach((item, index) => {
        itemsDiv.innerHTML += `<p>${index + 1}. ${item}</p>`;
      });
    }
  }
}

// Shop now -> rain of that chocolate
function shopNow(emoji) {
  chocolateRain(emoji);
}

// Order now -> all chocolates rain instantly
function orderNow() {
  let all = ["🍫", "⭐", "💛", "🍬", "🥛", "🍩", "❤️", "🍭"];
  for (let i = 0; i < all.length; i++) {
    chocolateRain(all[i]);
  }
}

// Chocolate rain effect
function chocolateRain(emoji) {
  for (let i = 0; i < 45; i++) {
    const rain = document.createElement("div");
    rain.classList.add("rain");
    rain.innerHTML = emoji;

    rain.style.left = Math.random() * 100 + "vw";
    rain.style.animationDuration = (2 + Math.random() * 2) + "s";
    rain.style.fontSize = (20 + Math.random() * 25) + "px";

    document.body.appendChild(rain);

    setTimeout(() => {
      rain.remove();
    }, 4000);
  }
}

// Burst emojis (includes kisses and hugs)
function createBurst() {
  const burst = document.createElement("div");
  burst.classList.add("burst");

  const emojis = ["🍫", "💖", "❤️", "🥛", "✨", "🎀", "😍", "🤎", "🍭", "💋", "🤗", "😘"];
  burst.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

  burst.style.left = Math.random() * 100 + "vw";
  burst.style.top = (60 + Math.random() * 20) + "vh";

  document.body.appendChild(burst);

  setTimeout(() => {
    burst.remove();
  }, 2000);
}

// Lollipop opening effect with kisses hugs love
function openLollipop() {
  const lollipop = document.querySelector(".lollipop");
  const msg = document.getElementById("giftMessage");
  const heart = document.getElementById("heartSurprise");

  if (lollipop.classList.contains("burst")) return;

  lollipop.classList.add("shake");

  setTimeout(() => {
    lollipop.classList.remove("shake");
    lollipop.classList.add("burst");

    // burst kisses hugs hearts
    for (let i = 0; i < 50; i++) {
      createBurst();
    }

    setTimeout(() => {
      heart.classList.remove("hidden-heart");
      msg.innerHTML = "💋🤗❤️ Anu, I’m sending you unlimited kisses and hugs forever 🍭💖";
      chocolateRain("💋");
      chocolateRain("🤗");
      chocolateRain("❤️");
    }, 500);

  }, 1200);
}