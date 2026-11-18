
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
  { name: "FirstCry", category: "Baby & Kids", url: "https://www.firstcry.com" },
  { name: "Bata India", category: "Footwear", url: "https://www.bata.in" },
  { name: "Titan", category: "Watches & Accessories", url: "https://www.titan.co.in" },
  { name: "Lenskart", category: "Eyewear", url: "https://www.lenskart.com" },
  { name: "Swiggy", category: "Food & Delivery", url: "https://www.swiggy.com" },
  { name: "Zomato", category: "Food & Delivery", url: "https://www.zomato.com" },
  { name: "MakeMyTrip", category: "Travel & Lifestyle", url: "https://www.makemytrip.com" }
];

const platformGrid = document.getElementById("platformGrid");
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const categoryButtons = document.querySelectorAll(".category");

let selectedCategory = "All";
let searchTerm = "";

function displayPlatforms() {
  const filtered = platforms.filter(p => {
    const categoryMatch =
      selectedCategory === "All" || p.category === selectedCategory;

    const searchMatch =
      p.name.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm);

    return categoryMatch && searchMatch;
  });

  platformGrid.innerHTML = "";

  filtered.forEach(p => {
    const link = document.createElement("a");
    link.className = "platform-card";
    link.href = p.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const logo = document.createElement("img");
    logo.className = "platform-logo";
    logo.src = `https://www.google.com/s2/favicons?domain=${new URL(p.url).hostname}&sz=128`;
    logo.alt = p.name + " logo";

    const details = document.createElement("div");
    details.className = "platform-details";

    const name = document.createElement("strong");
    name.textContent = p.name;

    const category = document.createElement("span");
    category.textContent = p.category;

    details.append(name, category);
    link.append(logo, details);
    platformGrid.appendChild(link);
  });

  resultCount.textContent = `Showing ${filtered.length} platforms`;
  emptyState.hidden = filtered.length !== 0;
}

searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value.trim().toLowerCase();
  displayPlatforms();
});

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  displayPlatforms();
});

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.category;

    categoryButtons.forEach(item =>
      item.classList.remove("active")
    );

    button.classList.add("active");
    displayPlatforms();
  });
});

document.getElementById("clearFilter").addEventListener("click", () => {
  selectedCategory = "All";
  searchTerm = "";
  searchInput.value = "";

  categoryButtons.forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.category === "All"
    );
  });

  displayPlatforms();
});

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  mainNav.classList.toggle("open", !open);
});

document.getElementById("year").textContent =
  new Date().getFullYear();

displayPlatforms();
      
