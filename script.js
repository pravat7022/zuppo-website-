
const platforms = [
  { name: "Amazon India", category: "General Shopping", url: "https://www.amazon.in" },
  { name: "Flipkart", category: "General Shopping", url: "https://www.flipkart.com" },
  { name: "Meesho", category: "General Shopping", url: "https://www.meesho.com" },
  { name: "Myntra", category: "Fashion & Clothing", url: "https://www.myntra.com" },
  { name: "AJIO", category: "Fashion & Clothing", url: "https://www.ajio.com" },
  { name: "Nykaa", category: "Beauty & Cosmetics", url: "https://www.nykaa.com" },
  { name: "Purplle", category: "Beauty & Cosmetics", url: "https://www.purplle.com" },
  { name: "BigBasket", category: "Grocery & Daily Needs", url: "https://www.bigbasket.com" },
  { name: "JioMart", category: "Grocery & Daily Needs", url: "https://www.jiomart.com" },
  { name: "Croma", category: "Electronics & Mobiles", url: "https://www.croma.com" },
  { name: "Reliance Digital", category: "Electronics & Mobiles", url: "https://www.reliancedigital.in" },
  { name: "IKEA India", category: "Furniture & Home Decor", url: "https://www.ikea.com/in/en" },
  { name: "FirstCry", category: "Baby & Kids Products", url: "https://www.firstcry.com" },
  { name: "Bata India", category: "Footwear", url: "https://www.bata.com/in" },
  { name: "Titan", category: "Watches & Accessories", url: "https://www.titan.co.in" },
  { name: "Lenskart", category: "Eyewear", url: "https://www.lenskart.com" },
  { name: "Swiggy", category: "Food & Delivery", url: "https://www.swiggy.com" },
  { name: "Zomato", category: "Food & Delivery", url: "https://www.zomato.com" },
  { name: "MakeMyTrip", category: "Travel & Lifestyle", url: "https://www.makemytrip.com" }
];

const grid = document.getElementById("platformGrid");

if (grid) {
  grid.innerHTML = platforms.map(item => `
    <a class="platform-card"
       href="${item.url}"
       target="_blank"
       rel="noopener noreferrer">
      <strong>${item.name}</strong>
      <p>${item.category}</p>
      <span>Visit Website ↗</span>
    </a>
  `).join("");
}

const search = document.getElementById("searchInput");

if (search && grid) {
  search.addEventListener("input", () => {
    const query = search.value.toLowerCase();

    grid.querySelectorAll(".platform-card").forEach(card => {
      card.hidden = !card.textContent.toLowerCase().includes(query);
    });
  });
    }
