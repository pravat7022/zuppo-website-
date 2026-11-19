const platforms = [
  {name:"Amazon India",category:"Shopping",url:"https://www.amazon.in"},{name:"Flipkart",category:"Shopping",url:"https://www.flipkart.com"},{name:"Meesho",category:"Shopping",url:"https://www.meesho.com"},
  {name:"Myntra",category:"Fashion",url:"https://www.myntra.com"},{name:"AJIO",category:"Fashion",url:"https://www.ajio.com"},
  {name:"BigBasket",category:"Grocery",url:"https://www.bigbasket.com"},{name:"JioMart",category:"Grocery",url:"https://www.jiomart.com"},
  {name:"Swiggy",category:"Food",url:"https://www.swiggy.com"},{name:"Zomato",category:"Food",url:"https://www.zomato.com"},
  {name:"Rapido",category:"Ride & Transport",url:"https://www.rapido.bike"},{name:"Uber",category:"Ride & Transport",url:"https://www.uber.com/in/en/"},{name:"Ola",category:"Ride & Transport",url:"https://www.olacabs.com"},{name:"Namma Yatri",category:"Ride & Transport",url:"https://nammayatri.in"},{name:"inDrive",category:"Ride & Transport",url:"https://www.indrive.com"},{name:"Quick Ride",category:"Ride & Transport",url:"https://quickride.in"},{name:"Bharat Taxi",category:"Ride & Transport",url:"https://bharattaxi.com"},
  {name:"MakeMyTrip",category:"Travel & Hotels",url:"https://www.makemytrip.com"},{name:"Booking.com",category:"Travel & Hotels",url:"https://www.booking.com"},{name:"Goibibo",category:"Travel & Hotels",url:"https://www.goibibo.com"},{name:"ixigo",category:"Travel & Hotels",url:"https://www.ixigo.com"},{name:"EaseMyTrip",category:"Travel & Hotels",url:"https://www.easemytrip.com"},{name:"Yatra",category:"Travel & Hotels",url:"https://www.yatra.com"},{name:"Agoda",category:"Travel & Hotels",url:"https://www.agoda.com"},{name:"Skyscanner",category:"Travel & Hotels",url:"https://www.skyscanner.co.in"},{name:"IRCTC",category:"Travel & Hotels",url:"https://www.irctc.co.in"},{name:" redBus",category:"Travel & Hotels",url:"https://www.redbus.in"},{name:"AbhiBus",category:"Travel & Hotels",url:"https://www.abhibus.com"},
  {name:"Croma",category:"Electronics",url:"https://www.croma.com"},{name:"Reliance Digital",category:"Electronics",url:"https://www.reliancedigital.in"},
  {name:"Nykaa",category:"Beauty",url:"https://www.nykaa.com"},{name:"Purplle",category:"Beauty",url:"https://www.purplle.com"},
  {name:"IKEA India",category:"Home & Furniture",url:"https://www.ikea.com/in/en"},{name:"Pepperfry",category:"Home & Furniture",url:"https://www.pepperfry.com"},
  {name:"Bata India",category:"Footwear",url:"https://www.bata.in"},{name:"Campus",category:"Footwear",url:"https://www.campusshoes.com"},
  {name:"Titan",category:"Watches & Accessories",url:"https://www.titan.co.in"},{name:"Fastrack",category:"Watches & Accessories",url:"https://www.fastrack.in"},
  {name:"FirstCry",category:"Baby & Kids",url:"https://www.firstcry.com"},{name:"Lenskart",category:"Eyewear",url:"https://www.lenskart.com"},
  {name:"Tata 1mg",category:"Health & Pharmacy",url:"https://www.1mg.com"},{name:"PharmEasy",category:"Health & Pharmacy",url:"https://pharmeasy.in"},
  {name:"Coursera",category:"Education",url:"https://www.coursera.org"},{name:"Udemy",category:"Education",url:"https://www.udemy.com"},{name:"Decathlon",category:"Sports & Fitness",url:"https://www.decathlon.in"}
];
const $=id=>document.getElementById(id);
const platformGrid=$("platformGrid"),searchInput=$("searchInput"),searchForm=$("searchForm"),resultCount=$("resultCount"),emptyState=$("emptyState"),categoryButtons=document.querySelectorAll(".category");
let selectedCategory="All",searchTerm="";
function displayPlatforms(){
 const filtered=platforms.filter(p=>(selectedCategory==="All"||p.category===selectedCategory)&&(p.name.toLowerCase().includes(searchTerm)||p.category.toLowerCase().includes(searchTerm)));
 platformGrid.replaceChildren();
 filtered.forEach(p=>{const link=document.createElement("a");link.className="platform-card";link.href=p.url;link.target="_blank";link.rel="noopener noreferrer";
  const logo=document.createElement("img");logo.className="platform-logo";logo.src=`https://www.google.com/s2/favicons?domain=${new URL(p.url).hostname}&sz=128`;logo.alt=p.name.trim()+" logo";logo.loading="lazy";logo.onerror=()=>{logo.src="assets/platform-placeholder.svg"};
  const details=document.createElement("div");details.className="platform-details";const name=document.createElement("strong");name.textContent=p.name.trim();const cat=document.createElement("span");cat.textContent=p.category;details.append(name,cat);link.append(logo,details);platformGrid.append(link);
 });
 resultCount.textContent=`Showing ${filtered.length} platforms`;emptyState.hidden=filtered.length!==0;
}
searchInput.addEventListener("input",()=>{searchTerm=searchInput.value.trim().toLowerCase();displayPlatforms()});searchForm.addEventListener("submit",e=>{e.preventDefault();displayPlatforms()});
categoryButtons.forEach(b=>b.addEventListener("click",()=>{selectedCategory=b.dataset.category;categoryButtons.forEach(x=>x.classList.toggle("active",x===b));displayPlatforms()}));
$("clearFilter").addEventListener("click",()=>{selectedCategory="All";searchTerm="";searchInput.value="";categoryButtons.forEach(b=>b.classList.toggle("active",b.dataset.category==="All"));displayPlatforms()});
const menuButton=$("menuButton"),mainNav=$("mainNav");menuButton.addEventListener("click",()=>{const open=menuButton.getAttribute("aria-expanded")==="true";menuButton.setAttribute("aria-expanded",String(!open));mainNav.classList.toggle("open",!open)});
$("year").textContent=new Date().getFullYear();displayPlatforms();

// Firebase Authentication: set your real keys in firebase-config.js to activate it.
const modal=$("authModal"),authMessage=$("authMessage");let authMode="login",firebaseAuth=null;
function setAuthMessage(message,isError=false){authMessage.textContent=message;authMessage.classList.toggle("error",isError)}
function openAuth(){modal.hidden=false;setAuthMessage("");$("authEmail").focus()}
function closeAuth(){modal.hidden=true}
$("accountButton").addEventListener("click",()=>{if(firebaseAuth&&firebaseAuth.currentUser){$("accountMenu").hidden=!$("accountMenu").hidden}else openAuth()});
$("closeAuth").addEventListener("click",closeAuth);modal.addEventListener("click",e=>{if(e.target===modal)closeAuth()});
document.querySelectorAll(".auth-tab").forEach(tab=>tab.addEventListener("click",()=>{authMode=tab.dataset.mode;document.querySelectorAll(".auth-tab").forEach(t=>t.classList.toggle("active",t===tab));$("authTitle").textContent=authMode==="login"?"Welcome to ZUPPO":"Create your ZUPPO account";$("authSubmit").textContent=authMode==="login"?"Login":"Create account";$("authPassword").autocomplete=authMode==="login"?"current-password":"new-password";setAuthMessage("")}));
function updateUserUI(user){if(user){$("accountButton").textContent="My Account";$("accountEmail").textContent=user.email||"Signed in";}else{$("accountButton").textContent="Login / Sign Up";$("accountMenu").hidden=true;}}
$("authForm").addEventListener("submit",async e=>{e.preventDefault();if(!firebaseAuth){setAuthMessage("Login is not activated yet. Add your Firebase settings using the README instructions.",true);return;}const email=$("authEmail").value.trim(),password=$("authPassword").value;setAuthMessage("Please wait...");try{if(authMode==="signup")await firebaseAuth.createUserWithEmailAndPassword(email,password);else await firebaseAuth.signInWithEmailAndPassword(email,password);closeAuth();}catch(err){setAuthMessage(err.message,true);}});
$("googleButton").addEventListener("click",async()=>{if(!firebaseAuth){setAuthMessage("Google login is not activated yet. Add your Firebase settings using the README instructions.",true);return;}try{const provider=new firebase.auth.GoogleAuthProvider();await firebaseAuth.signInWithPopup(provider);closeAuth();}catch(err){setAuthMessage(err.message,true);}});
$("logoutButton").addEventListener("click",async()=>{if(firebaseAuth)await firebaseAuth.signOut();});
if(window.ZUPPO_FIREBASE_CONFIG&&window.ZUPPO_FIREBASE_CONFIG.apiKey&&window.ZUPPO_FIREBASE_CONFIG.apiKey!=="YOUR_API_KEY"){try{firebase.initializeApp(window.ZUPPO_FIREBASE_CONFIG);firebaseAuth=firebase.auth();firebaseAuth.onAuthStateChanged(updateUserUI);}catch(e){console.error("Firebase setup error",e);}}else{console.info("ZUPPO login UI is ready; Firebase configuration is still required.");}
