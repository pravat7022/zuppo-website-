
const platforms = [
  // 1. General Shopping
  {name:"Amazon India",category:"General Shopping",url:"https://www.amazon.in"},
  {name:"Flipkart",category:"General Shopping",url:"https://www.flipkart.com"},
  {name:"Meesho",category:"General Shopping",url:"https://www.meesho.com"},
  {name:"Shopsy",category:"General Shopping",url:"https://www.shopsy.in"},
  {name:"Snapdeal",category:"General Shopping",url:"https://www.snapdeal.com"},
  {name:"JioMart",category:"General Shopping",url:"https://www.jiomart.com"},
  {name:"Tata CLiQ",category:"General Shopping",url:"https://www.tatacliq.com"},
  {name:"ShopClues",category:"General Shopping",url:"https://www.shopclues.com"},
  {name:"Paytm Mall",category:"General Shopping",url:"https://paytmmall.com"},
  {name:"ONDC",category:"General Shopping",url:"https://ondc.org"},
  {name:"DealShare",category:"General Shopping",url:"https://www.dealshare.in"},
  {name:"Pepperfry",category:"General Shopping",url:"https://www.pepperfry.com"},

  // 2. Fashion
  {name:"Myntra",category:"Fashion",url:"https://www.myntra.com"},
  {name:"AJIO",category:"Fashion",url:"https://www.ajio.com"},
  {name:"Tata CLiQ Fashion",category:"Fashion",url:"https://www.tatacliq.com"},
  {name:"Nykaa Fashion",category:"Fashion",url:"https://www.nykaafashion.com"},
  {name:"LimeRoad",category:"Fashion",url:"https://www.limeroad.com"},
  {name:"Bewakoof",category:"Fashion",url:"https://www.bewakoof.com"},
  {name:"FabAlley",category:"Fashion",url:"https://www.faballey.com"},
  {name:"Urbanic",category:"Fashion",url:"https://in.urbanic.com"},
  {name:"Libas",category:"Fashion",url:"https://www.libas.in"},
  {name:"Craftsvilla",category:"Fashion",url:"https://www.craftsvilla.com"},
  {name:"Jaypore",category:"Fashion",url:"https://www.jaypore.com"},
  {name:"The Souled Store",category:"Fashion",url:"https://www.thesouledstore.com"},

  // 3. Beauty
  {name:"Nykaa",category:"Beauty",url:"https://www.nykaa.com"},
  {name:"Purplle",category:"Beauty",url:"https://www.purplle.com"},
  {name:"Tata 1mg",category:"Beauty",url:"https://www.1mg.com"},
  {name:"HealthKart",category:"Beauty",url:"https://www.healthkart.com"},
  {name:"SUGAR Cosmetics",category:"Beauty",url:"https://www.sugarcosmetics.com"},
  {name:"Mamaearth",category:"Beauty",url:"https://mamaearth.in"},
  {name:"The Derma Co.",category:"Beauty",url:"https://thedermaco.com"},
  {name:"Sephora India",category:"Beauty",url:"https://www.sephora.in"},

  // 4. Grocery & Quick Commerce
  {name:"BigBasket",category:"Grocery & Quick Commerce",url:"https://www.bigbasket.com"},
  {name:"Blinkit",category:"Grocery & Quick Commerce",url:"https://blinkit.com"},
  {name:"Zepto",category:"Grocery & Quick Commerce",url:"https://www.zepto.com"},
  {name:"Swiggy Instamart",category:"Grocery & Quick Commerce",url:"https://www.swiggy.com/instamart"},
  {name:"Amazon Fresh",category:"Grocery & Quick Commerce",url:"https://www.amazon.in"},
  {name:"JioMart Grocery",category:"Grocery & Quick Commerce",url:"https://www.jiomart.com"},
  {name:"Flipkart Minutes",category:"Grocery & Quick Commerce",url:"https://www.flipkart.com"},
  {name:"BB Now",category:"Grocery & Quick Commerce",url:"https://www.bigbasket.com"},
  {name:"DMart Ready",category:"Grocery & Quick Commerce",url:"https://www.dmart.in"},

  // 5. Electronics
  {name:"Croma",category:"Electronics",url:"https://www.croma.com"},
  {name:"Reliance Digital",category:"Electronics",url:"https://www.reliancedigital.in"},
  {name:"Vijay Sales",category:"Electronics",url:"https://www.vijaysales.com"},
  {name:"Poorvika",category:"Electronics",url:"https://www.poorvika.com"},
  {name:"Sangeetha Mobiles",category:"Electronics",url:"https://www.sangeethamobiles.com"},
  {name:"Bajaj Electronics",category:"Electronics",url:"https://www.bajajelectronics.com"},
  {name:"Tata Neu",category:"Electronics",url:"https://www.tataneu.com"},

  // 6. Baby & Kids
  {name:"FirstCry",category:"Baby & Kids",url:"https://www.firstcry.com"},
  {name:"Hopscotch",category:"Baby & Kids",url:"https://www.hopscotch.in"},
  {name:"BabyChakra",category:"Baby & Kids",url:"https://www.babychakra.com"},

  // 7. Furniture & Home
  {name:"Pepperfry",category:"Furniture & Home",url:"https://www.pepperfry.com"},
  {name:"Urban Ladder",category:"Furniture & Home",url:"https://www.urbanladder.com"},
  {name:"IKEA India",category:"Furniture & Home",url:"https://www.ikea.com/in/en"},
  {name:"Home Centre",category:"Furniture & Home",url:"https://www.homecentre.in"},
  {name:"WoodenStreet",category:"Furniture & Home",url:"https://www.woodenstreet.com"},
  {name:"Wakefit",category:"Furniture & Home",url:"https://www.wakefit.co"},
  {name:"SleepyCat",category:"Furniture & Home",url:"https://sleepycat.in"},

  // 8. Eyewear
  {name:"Lenskart",category:"Eyewear",url:"https://www.lenskart.com"},
  {name:"Titan Eye+",category:"Eyewear",url:"https://www.titaneyeplus.com"},
  {name:"Specsmakers",category:"Eyewear",url:"https://www.specsmakers.in"},

  // 9. B2B & Wholesale
  {name:"IndiaMART",category:"B2B & Wholesale",url:"https://www.indiamart.com"},
  {name:"TradeIndia",category:"B2B & Wholesale",url:"https://www.tradeindia.com"},
  {name:"Udaan",category:"B2B & Wholesale",url:"https://udaan.com"},
  {name:"Moglix",category:"B2B & Wholesale",url:"https://www.moglix.com"},
  {name:"OfBusiness",category:"B2B & Wholesale",url:"https://www.ofbusiness.com"},
  {name:"Bizongo",category:"B2B & Wholesale",url:"https://www.bizongo.com"},
  {name:"Jumbotail",category:"B2B & Wholesale",url:"https://www.jumbotail.com"},
  {name:"Ninjacart",category:"B2B & Wholesale",url:"https://ninjacart.com"},
  {name:"ElasticRun",category:"B2B & Wholesale",url:"https://elastic.run"},
  {name:"Infra.Market",category:"B2B & Wholesale",url:"https://www.inframarket.com"},
  {name:"Fashinza",category:"B2B & Wholesale",url:"https://fashinza.com"},
  {name:"Bijnis",category:"B2B & Wholesale",url:"https://www.bijnis.com"},
  {name:"Retailio",category:"B2B & Wholesale",url:"https://www.retailio.in"},
  {name:"Saveo",category:"B2B & Wholesale",url:"https://www.saveo.in"},
  {name:"DeHaat",category:"B2B & Wholesale",url:"https://agrevolution.in"},
  {name:"Amazon Business",category:"B2B & Wholesale",url:"https://business.amazon.in"},
  {name:"JioMart Wholesale",category:"B2B & Wholesale",url:"https://www.jiomart.com"},

  // 10. Store Builders
  {name:"Shopify",category:"Store Builders",url:"https://www.shopify.com/in"},
  {name:"WooCommerce",category:"Store Builders",url:"https://woocommerce.com"},
  {name:"Dukaan",category:"Store Builders",url:"https://mydukaan.io"},
  {name:"Instamojo",category:"Store Builders",url:"https://www.instamojo.com"},
  {name:"Zoho Commerce",category:"Store Builders",url:"https://www.zoho.com/commerce"},
  {name:"Wix eCommerce",category:"Store Builders",url:"https://www.wix.com"},
  {name:"BigCommerce",category:"Store Builders",url:"https://www.bigcommerce.com"},
  {name:"Ecwid",category:"Store Builders",url:"https://www.ecwid.com"},
  {name:"OpenCart",category:"Store Builders",url:"https://www.opencart.com"},
  {name:"Fynd Platform",category:"Store Builders",url:"https://www.fynd.com"},
  {name:"StoreHippo",category:"Store Builders",url:"https://www.storehippo.com"},
  {name:"Adobe Commerce",category:"Store Builders",url:"https://business.adobe.com/products/magento/magento-commerce.html"},

  // 11. Food & Food Delivery
  {name:"Swiggy",category:"Food & Food Delivery",url:"https://www.swiggy.com"},
  {name:"Zomato",category:"Food & Food Delivery",url:"https://www.zomato.com"},
  {name:"EatSure",category:"Food & Food Delivery",url:"https://www.eatsure.com"},
  {name:"Domino's India",category:"Food & Food Delivery",url:"https://www.dominos.co.in"},
  {name:"Pizza Hut India",category:"Food & Food Delivery",url:"https://www.pizzahut.co.in"},
  {name:"McDonald's India",category:"Food & Food Delivery",url:"https://www.mcdonalds.com/in/en-in.html"},
  {name:"KFC India",category:"Food & Food Delivery",url:"https://www.kfc.co.in"},
  {name:"Burger King India",category:"Food & Food Delivery",url:"https://www.burgerking.in"},
  {name:"FreshMenu",category:"Food & Food Delivery",url:"https://www.freshmenu.com"},
  {name:"Box8",category:"Food & Food Delivery",url:"https://box8.in"},
  {name:"Faasos",category:"Food & Food Delivery",url:"https://www.faasos.com"},
  {name:"Behrouz Biryani",category:"Food & Food Delivery",url:"https://www.behrouzbiryani.com"},
  {name:"Oven Story Pizza",category:"Food & Food Delivery",url:"https://ovenstory.in"},
  {name:"Rebel Foods",category:"Food & Food Delivery",url:"https://www.rebelfoods.com"},
  {name:"Magicpin",category:"Food & Food Delivery",url:"https://magicpin.in"}
];

// ZUPPO elements
const $ = id => document.getElementById(id);
const platformGrid = $("platformGrid");
const searchInput = $("searchInput");
const searchForm = $("searchForm");
const resultCount = $("resultCount");
const emptyState = $("emptyState");
const categoryGrid = $("categoryGrid");

let selectedCategory = "All";
let searchTerm = "";

// Create category buttons automatically
const categories = [...new Set(platforms.map(p => p.category))];

categoryGrid.replaceChildren();

["All", ...categories].forEach(category => {
  const button = document.createElement("button");
  button.className = "category";
  button.dataset.category = category;
  button.textContent = category;

  if (category === "All") button.classList.add("active");

  button.addEventListener("click", () => {
    selectedCategory = category;

    categoryGrid.querySelectorAll(".category").forEach(item => {
      item.classList.toggle("active", item === button);
    });

    displayPlatforms();
  });

  categoryGrid.append(button);
});

// Display platforms
function displayPlatforms() {
  const filtered = platforms.filter(p => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;

    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  platformGrid.replaceChildren();

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
    logo.loading = "lazy";

    logo.onerror = () => {
      logo.onerror = null;
      logo.src = "assets/platform-placeholder.svg";
    };

    const details = document.createElement("div");
    details.className = "platform-details";

    const name = document.createElement("strong");
    name.textContent = p.name;

    const cat = document.createElement("span");
    cat.textContent = p.category;

    details.append(name, cat);
    link.append(logo, details);
    platformGrid.append(link);
  });

  resultCount.textContent = `Showing ${filtered.length} platforms`;
  emptyState.hidden = filtered.length !== 0;
}

// Search
searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value.trim().toLowerCase();
  displayPlatforms();
});

searchForm.addEventListener("submit", e => {
  e.preventDefault();
  displayPlatforms();
});

// Clear filters
$("clearFilter").addEventListener("click", () => {
  selectedCategory = "All";
  searchTerm = "";
  searchInput.value = "";

  categoryGrid.querySelectorAll(".category").forEach(button => {
    button.classList.toggle("active", button.dataset.category === "All");
  });

  displayPlatforms();
});

// Mobile navigation
const menuButton = $("menuButton");
const mainNav = $("mainNav");

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  mainNav.classList.toggle("open", !open);
});

// Footer year
$("year").textContent = new Date().getFullYear();

// Firebase Authentication
const modal = $("authModal");
const authMessage = $("authMessage");

let authMode = "login";
let firebaseAuth = null;

function setAuthMessage(message, isError = false) {
  authMessage.textContent = message;
  authMessage.classList.toggle("error", isError);
}

function openAuth() {
  modal.hidden = false;
  setAuthMessage("");
  $("authEmail").focus();
}

function closeAuth() {
  modal.hidden = true;
}

$("accountButton").addEventListener("click", () => {
  if (firebaseAuth && firebaseAuth.currentUser) {
    $("accountMenu").hidden = !$("accountMenu").hidden;
  } else {
    openAuth();
  }
});

$("closeAuth").addEventListener("click", closeAuth);

modal.addEventListener("click", e => {
  if (e.target === modal) closeAuth();
});

document.querySelectorAll(".auth-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    authMode = tab.dataset.mode;

    document.querySelectorAll(".auth-tab").forEach(t => {
      t.classList.toggle("active", t === tab);
    });

    $("authTitle").textContent =
      authMode === "login" ? "Welcome to ZUPPO" : "Create your ZUPPO account";

    $("authSubmit").textContent =
      authMode === "login" ? "Login" : "Create account";

    $("authPassword").autocomplete =
      authMode === "login" ? "current-password" : "new-password";

    setAuthMessage("");
  });
});

function updateUserUI(user) {
  if (user) {
    $("accountButton").textContent = "My Account";
    $("accountEmail").textContent = user.email || "Signed in";
  } else {
    $("accountButton").textContent = "Login / Sign Up";
    $("accountMenu").hidden = true;
  }
}

// Email and password login
$("authForm").addEventListener("submit", async e => {
  e.preventDefault();

  if (!firebaseAuth) {
    setAuthMessage("Firebase is not connected.", true);
    return;
  }

  const email = $("authEmail").value.trim();
  const password = $("authPassword").value;

  setAuthMessage("Please wait...");

  try {
    if (authMode === "signup") {
      await firebaseAuth.createUserWithEmailAndPassword(email, password);
    } else {
      await firebaseAuth.signInWithEmailAndPassword(email, password);
    }

    closeAuth();
  } catch (err) {
    setAuthMessage(err.message, true);
  }
});

// Google login
$("googleButton").addEventListener("click", async () => {
  if (!firebaseAuth) {
    setAuthMessage("Firebase is not connected.", true);
    return;
  }

  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebaseAuth.signInWithPopup(provider);
    closeAuth();
  } catch (err) {
    setAuthMessage(err.message, true);
  }
});

// Logout
$("logoutButton").addEventListener("click", async () => {
  if (firebaseAuth) await firebaseAuth.signOut();
});

// Initialize Firebase
if (
  window.ZUPPO_FIREBASE_CONFIG &&
  window.ZUPPO_FIREBASE_CONFIG.apiKey &&
  window.ZUPPO_FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY"
) {
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(window.ZUPPO_FIREBASE_CONFIG);
    }

    firebaseAuth = firebase.auth();
    firebaseAuth.onAuthStateChanged(updateUserUI);

  } catch (e) {
    console.error("Firebase setup error:", e);
  }
}

// Require login before opening homepage
document.body.style.visibility = "hidden";

if (firebaseAuth) {
  firebaseAuth.onAuthStateChanged(user => {
    if (user) {
      document.body.style.visibility = "visible";
    } else {
      window.location.replace("login.html");
    }
  });
} else {
  window.location.replace("login.html");
}

// Initial display
displayPlatforms();
  
