/* =========================================================
   1. CONFIGURATION  (replace these values)
   ========================================================= */
const whatsappNumber = "918669119482"; // digits only, with country code e.g. 919876543210
const phoneNumber = "+918669119482";
const brandName = "PC Reality";

/* =========================================================
   2. PROPERTY DATA  (DEMO DATA - replace with real listings)
   Images: demo Unsplash URLs are used below; replace them with your own licensed/local images when available.
   priceValue is in lakhs (used for budget filter, sale only)
   ========================================================= */
const properties = [
  {id:1,title:"Skyline 2BHK Apartment",location:"Wakad",city:"Pune",propertyType:"Apartment",purpose:"Buy",bhk:2,area:"1,050 sq ft",price:"₹78 Lakh",priceValue:78,image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",amenities:["Gym","Parking","24/7 Security","Garden"],description:"Demo listing: bright 2BHK in a gated community with open balcony and ample parking."},
  {id:2,title:"Green Meadows 3BHK",location:"Tathawade",city:"Pune",propertyType:"Apartment",purpose:"Buy",bhk:3,area:"1,380 sq ft",price:"₹1.1 Crore",priceValue:110,image:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",amenities:["Swimming Pool","Clubhouse","Kids Play Area","Power Backup"],description:"Demo listing: spacious 3BHK with clubhouse access and landscaped surroundings."},
  {id:3,title:"Cozy 1BHK for Rent",location:"Hinjawadi",city:"Pune",propertyType:"Apartment",purpose:"Rent",bhk:1,area:"620 sq ft",price:"₹18,000 / month",priceValue:0.18,image:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",amenities:["Parking","24/7 Security","Power Backup"],description:"Demo listing: furnished 1BHK close to major IT offices."},
  {id:4,title:"Palm Grove Villa",location:"Punawale",city:"Pune",propertyType:"Villa",purpose:"Buy",bhk:4,area:"2,600 sq ft",price:"₹1.9 Crore",priceValue:190,image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",amenities:["Garden","Parking","Yoga","Sports Area"],description:"Demo listing: independent villa with private garden and quiet surroundings."},
  {id:5,title:"Premium Commercial Office",location:"Hinjawadi",city:"Pune",propertyType:"Commercial",purpose:"Rent",bhk:0,area:"900 sq ft",price:"₹55,000 / month",priceValue:0.55,image:"https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",amenities:["Parking","Power Backup","24/7 Security"],description:"Demo listing: ready-to-use office space in a business hub."},
  {id:6,title:"Smart Starter 1BHK",location:"Pune",city:"Pune",propertyType:"Apartment",purpose:"Buy",bhk:1,area:"560 sq ft",price:"₹42 Lakh",priceValue:42,image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",amenities:["Gym","Garden","Parking"],description:"Demo listing: affordable 1BHK, ideal for first-time buyers."}
];

/* =========================================================
   ICONS  (inline SVG, line style; use icon("name") anywhere)
   ========================================================= */
const ICONS = {
  home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
  tag:'<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z"/><circle cx="7.5" cy="7.5" r="1.2"/>',
  key:'<circle cx="8" cy="15" r="4"/><path d="m10.8 12.2 9.2-9.2M16 7l3 3M14 9l2 2"/>',
  trending:'<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  message:'<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/><path d="M8.5 11h7M8.5 14h4"/>',
  pin:'<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
  shieldcheck:'<path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3Z"/><path d="m9 12 2 2 4-4"/>',
  shield:'<path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3Z"/>',
  eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="m9 15 2 2 4-4"/>',
  scale:'<path d="M12 3v18M7 21h10M5 7h14"/><path d="m5 7-3 7a4 4 0 0 0 6 0L5 7ZM19 7l-3 7a4 4 0 0 0 6 0l-3-7Z"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  building:'<rect x="4" y="3" width="10" height="18" rx="1"/><path d="M14 9h5a1 1 0 0 1 1 1v11H14M8 7h2M8 11h2M8 15h2M17 13h1M17 17h1"/>',
  cap:'<path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5M22 9v6"/>',
  hospital:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M12 8v6M9 11h6M9 21v-4h6v4"/>',
  bag:'<path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  train:'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M9 14h.01M15 14h.01M8 21l2-4M16 21l-2-4"/>',
  route:'<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h8a3 3 0 0 0 0-6H8a3 3 0 0 1 0-6h8"/>',
  pool:'<path d="M3 15c2 0 2 1.5 4.5 1.5S10 15 12 15s2.5 1.5 4.5 1.5S19 15 21 15"/><path d="M3 20c2 0 2 1 4.5 1S10 20 12 20s2.5 1 4.5 1S19 20 21 20"/><path d="M8 12V5a2 2 0 0 1 4 0M14 12V5a2 2 0 0 1 4 0M8 8h6"/>',
  dumbbell:'<path d="M6 7v10M3 9v6M18 7v10M21 9v6M6 12h12"/>',
  tree:'<circle cx="12" cy="9" r="6"/><path d="M12 15v7M9 22h6"/>',
  smile:'<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9.5h.01M15 9.5h.01"/>',
  ball:'<circle cx="12" cy="12" r="9"/><path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18M3 12h18"/>',
  yoga:'<circle cx="12" cy="5" r="2"/><path d="M12 8v5M6 10l6 3 6-3M8 21l4-8 4 8"/>',
  car:'<path d="M4 16v-4l2-5h12l2 5v4"/><rect x="3" y="12" width="18" height="6" rx="1.5"/><circle cx="7.5" cy="15" r=".6"/><circle cx="16.5" cy="15" r=".6"/>',
  landmark:'<path d="M3 10 12 4l9 6H3ZM5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18"/>',
  battery:'<rect x="3" y="8" width="16" height="9" rx="2"/><path d="M21 11v3M10 10l-2 3h3l-2 3"/>',
  heart:'<path d="M12 20.5s-8-4.9-8-11A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5c0 6.1-8 11-8 11Z"/>',
  star:'<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>'
};
const icon = (n, c = "") => `<svg class="i ${c}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICONS[n] || ""}</svg>`;

/* Static content blocks (edit freely) */
const content = {
  categories:[["home","Buy a Home","Find homes that match your budget and lifestyle.","Buy"],["tag","Sell a Property","Get guidance on pricing, buyers and paperwork.","Sell"],["key","Rent a Property","Quality rentals with simple, clear terms.","Rent"],["trending","Investment Property","Explore options with long-term potential.","Buy"]],
  services:[["home","Property Buying","Shortlisting, site visits and negotiation support."],["tag","Property Selling","Listing guidance and buyer coordination."],["key","Property Renting","Rental search for tenants and owners."],["message","Property Consultation","Honest advice before you decide."],["building","Project Highlights",`<span class="svc-list"><span>• 38 Guntha Land Parcel</span><span>• 14-Storey Residential Tower</span><span>• 3 Levels of Parking Space</span><span>• 11 Apartments on Each Floor</span><span>• 4 High-Speed Elevators</span><span>• 2 Staircases</span><span>• Three-Side Open Views</span><span>• Podium &amp; Rooftop Amenities</span><span>• Possession Within 2 Years</span></span>`],["heart","Lifestyle Amenities",`<span class="svc-list"><span>• Solar PV Panels for Renewable Energy Generation</span><span>• Co-working Space</span><span>• Indoor &amp; Open Gym</span><span>• Yoga &amp; Meditation Zone</span><span>• Jogging Track</span><span>• Society Office</span><span>• Children's Play Area</span><span>• Grand Clubhouse</span><span>• Box Cricket</span></span>`]],
  amenities:[["pool","Swimming Pool"],["dumbbell","Gym"],["tree","Garden"],["smile","Kids Play Area"],["ball","Sports Area"],["yoga","Yoga"],["car","Parking"],["shield","24/7 Security"],["landmark","Clubhouse"],["battery","Power Backup"]],
  steps:[["Tell Us Your Requirement","Share your budget, location and needs."],["Get Property Options","Receive a shortlist matched to you."],["Schedule Site Visit","Visit the properties with my support."],["Close the Deal","Negotiate and complete paperwork."]],
  why:[["pin","Local Market Knowledge","Understanding of Pune's neighbourhoods."],["shieldcheck","Genuine Property Options","Properties checked before sharing."],["eye","Transparent Communication","Clear updates at every step."],["calendar","Site Visit Assistance","Visits arranged around your schedule."],["scale","Negotiation Support","Help reaching a fair deal."],["user","Personal Guidance","One point of contact throughout."]],
  nearby:[["building","Nearby IT Parks"],["cap","Major Schools"],["hospital","Healthcare Facilities"],["bag","Shopping & Entertainment"],["train","Metro Connectivity"],["route","Expressway Access"]],
  /* SAMPLE testimonials: replace with real customer reviews */
  testimonials:[["Sample Customer A","Wakad","Sample review: clear guidance and a smooth site visit experience."],["Sample Customer B","Hinjawadi","Sample review: helped me find a rental that fit my budget."],["Sample Customer C","Tathawade","Sample review: honest advice throughout the buying process."]],
  faq:[["Do you help with property site visits?","Yes. I coordinate site visits at times that suit you."],["What type of properties do you deal with?","Apartments, villas, plots and commercial spaces."],["Do you help with buying and renting?","Yes, I help with buying, selling and renting."],["How can I enquire about a property?","Use the enquiry form, call, or message me on WhatsApp."],["Can I contact you through WhatsApp?","Yes. Use any WhatsApp button on this page."],["Which areas do you cover?","Pune, Wakad, Tathawade, Hinjawadi and Punawale."]],
  gallery:[
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"
  ]
};

/* =========================================================
   16. UTILITY FUNCTIONS
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const fallbackImage = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
  <defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#173B35"/><stop offset="1" stop-color="#C9A45C"/></linearGradient></defs>
  <rect width="1200" height="800" fill="url(#g)"/>
  <rect x="270" y="330" width="660" height="300" rx="8" fill="#F8F7F4" opacity=".96"/>
  <path d="M210 350 600 120l390 230" fill="#C9A45C" opacity=".95"/>
  <rect x="365" y="420" width="125" height="105" fill="#173B35"/><rect x="710" y="420" width="125" height="105" fill="#173B35"/>
  <rect x="545" y="480" width="110" height="150" rx="4" fill="#173B35"/>
  <text x="600" y="710" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif" font-size="34" font-weight="700">Property Image</text>
</svg>`);
const imgTag = (src, alt, lazy = true) => `<img src="${src}" alt="${alt}" ${lazy ? 'loading="lazy"' : ''} onerror="this.onerror=null;this.src=fallbackImage;this.classList.add('img-fallback');">`;

/* =========================================================
   13. WHATSAPP & PHONE
   ========================================================= */
function waLink(text = "Hello, I am interested in a property. Please share more details.") {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}
const propWaLink = p => waLink(`Hello, I am interested in ${p.title}. Please share more details.`);
function initContactLinks() {
  $$("[data-wa]").forEach(a => { a.href = waLink(); a.target = "_blank"; a.rel = "noopener"; });
  $$("[data-tel]").forEach(a => a.href = `tel:${phoneNumber}`);
  $$("[data-brand]").forEach(el => el.textContent = brandName);
}

/* =========================================================
   Static sections (rendered from the content object)
   ========================================================= */
function renderStatic() {
  const fill = (id, arr, fn) => {
    const el = $(id);
    if (!el) return; // Some sections are intentionally commented out for later use.
    el.innerHTML = arr.map(fn).join("");
  };
  fill("#categories", content.categories, c => `<article class="card reveal"><div class="ic">${icon(c[0])}</div><h3>${c[1]}</h3><p>${c[2]}</p><a href="#properties" data-purpose="${c[3]}">Explore</a></article>`);
  const svcCard = (s, i) => `<article class="svc reveal"><span class="svc-num" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span><div class="svc-ic">${icon(s[0])}</div><h3>${s[1]}</h3><p>${s[2]}</p><a href="#contact" class="svc-link">Enquire ${icon("arrow")}</a></article>`;
  fill("#services-grid", content.services.slice(0, 4), (s, i) => svcCard(s, i));
  fill("#project-grid", content.services.slice(4), (s, i) => svcCard(s, i));
  fill("#steps", content.steps, (s, i) => `<li class="step reveal"><b>${String(i + 1).padStart(2, "0")}</b><h3>${s[0]}</h3><p>${s[1]}</p></li>`);
  fill("#why-grid", content.why, w => `<article class="why-card reveal"><div class="why-ic">${icon(w[0])}</div><h3>${w[1]}</h3><p>${w[2]}</p></article>`);
  const nearby = $("#nearby"); if (nearby) fill("#nearby", content.nearby, n => `<div class="chip reveal"><span aria-hidden="true">${icon(n[0])}</span>${n[1]}</div>`);
  fill("#testimonials", content.testimonials, t => `<figure class="card reveal"><div class="stars" aria-label="5 out of 5 stars">${icon("star").repeat(5)}</div><blockquote class="quote">"${t[2]}"</blockquote><figcaption><b>${t[0]}</b><br><span class="meta">${t[1]}</span></figcaption></figure>`);
  /* Category cards pre-select the search purpose */
  $$("[data-purpose]").forEach(a => a.addEventListener("click", () => {
    const purpose = $("#fPurpose");
    if (purpose) {
      purpose.value = a.dataset.purpose;
      applyFilters();
    } else {
      $("#properties")?.scrollIntoView({ behavior: "smooth" });
    }
  }));
}

/* =========================================================
   3. NAVBAR  (scroll style + active link)
   ========================================================= */
function initNavbar() {
  const nav = $("#navbar");
  const links = $$(".nav-link");
  const sections = links.map(l => $(l.getAttribute("href"))).filter(Boolean);

  const update = () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
    const targetY = window.scrollY + 110;
    let current = sections[0]?.id || "home";
    sections.forEach(section => {
      if (section.offsetTop <= targetY) current = section.id;
    });
    links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update, { passive: true });
}

/* =========================================================
   4. MOBILE MENU
   ========================================================= */
function initMobileMenu() {
  const nav = $("#navbar"), btn = $("#menuBtn");
  const set = open => { nav.classList.toggle("open", open); btn.setAttribute("aria-expanded", open); };
  btn.addEventListener("click", () => set(!nav.classList.contains("open")));
  $$("#mobileMenu a").forEach(a => a.addEventListener("click", () => set(false)));
  document.addEventListener("keydown", e => { if (e.key === "Escape") set(false); });
}

/* =========================================================
   5. PROPERTY RENDERING
   ========================================================= */
const favorites = new Set(JSON.parse(localStorage.getItem("favs") || "[]"));
function propertyCard(p) {
  return `<article class="prop reveal" data-id="${p.id}">
    <div class="prop-img">
      <span class="badge">${p.purpose === "Buy" ? "For Sale" : "For Rent"}</span>
      <button class="fav ${favorites.has(p.id) ? "on" : ""}" data-fav="${p.id}" aria-label="Save ${p.title} to favorites" aria-pressed="${favorites.has(p.id)}">${icon("heart")}</button>
      ${imgTag(p.image, p.title + " in " + p.location)}
    </div>
    <div class="prop-body">
      <div class="prop-category">${p.propertyType}</div>
      <h3>${p.title}</h3>
      <p class="meta prop-location">${icon("pin", "i-pin")} ${p.location}, ${p.city}</p>
      <div class="prop-info">
        ${p.bhk ? `<span>${p.bhk} BHK</span>` : ""}
        <span>${p.area}</span>
      </div>
      <div class="prop-footer">
        <p class="price">${p.price}</p>
        <button class="btn btn-primary" data-details="${p.id}">View Details</button>
      </div>
    </div>
  </article>`;
}
function renderProperties(list) {
  const grid = $("#propertyGrid");
  // Projects section is intentionally commented out for now.
  // Keep the data/functionality ready without stopping the rest of the page.
  if (!grid) return;

  grid.innerHTML = list.map(propertyCard).join("");
  $("#noResults")?.classList.toggle("hidden", list.length > 0);
  const resultCount = $("#resultCount");
  if (resultCount) resultCount.textContent = `${list.length} ${list.length === 1 ? "property" : "properties"} found`;
  observeReveals();
}

/* =========================================================
   6. SEARCH & FILTERING
   ========================================================= */
function applyFilters() {
  const purposeEl = $("#fPurpose"), typeEl = $("#fType"), locEl = $("#fLocation"), budgetEl = $("#fBudget");
  // The search/filter block is intentionally commented out for now.
  // When it is enabled later, the original filtering logic will work again.
  if (!purposeEl || !typeEl || !locEl || !budgetEl) {
    renderProperties(properties);
    return;
  }

  const purpose = purposeEl.value, type = typeEl.value, loc = locEl.value, budget = budgetEl.value;
  const list = properties.filter(p => {
    if ((purpose === "Buy" || purpose === "Rent") && p.purpose !== purpose) return false;
    if (type && p.propertyType !== type) return false;
    if (loc && loc !== "Pune" && p.location !== loc) return false;
    if (budget && p.purpose === "Buy") {
      const [min, max] = budget.split("-").map(Number);
      if (p.priceValue < min || p.priceValue >= max) return false;
    }
    if (budget && p.purpose === "Rent") return false;
    return true;
  });
  renderProperties(list);
}
function initSearch() {
  const form = $("#searchForm");
  const reset = $("#resetBtn");
  // Search UI is currently commented out, so do not throw errors.
  if (!form || !reset) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    applyFilters();
    $("#properties")?.scrollIntoView({ behavior: "smooth" });
  });
  reset.addEventListener("click", () => {
    form.reset();
    applyFilters();
  });
}

/* =========================================================
   7. PROPERTY MODAL  (+ shared overlay helpers)
   ========================================================= */
let lastFocus = null;
function openOverlay(el) { lastFocus = document.activeElement; el.hidden = false; document.body.classList.add("no-scroll"); requestAnimationFrame(() => el.classList.add("show")); $(".close, [data-lclose]", el)?.focus(); }
function closeOverlay(el) { el.classList.remove("show"); setTimeout(() => { el.hidden = true; document.body.classList.remove("no-scroll"); lastFocus?.focus(); }, 280); }

function openModal(id) {
  const p = properties.find(x => x.id === id);
  $("#modalBody").innerHTML = `<div class="m-img">${imgTag(p.image, p.title)}</div><div class="m-content">
    <h2 id="mTitle">${p.title}</h2><p class="meta">${icon("pin", "i-pin")} ${p.location}, ${p.city}</p><p class="price">${p.price}</p>
    <div class="facts"><div><b>BHK</b>${p.bhk || "N/A"}</div><div><b>Area</b>${p.area}</div><div><b>Type</b>${p.propertyType}</div><div><b>Purpose</b>${p.purpose === "Buy" ? "For Sale" : "For Rent"}</div></div>
    <p>${p.description}</p><ul class="tags">${p.amenities.map(a => `<li>${a}</li>`).join("")}</ul>
    <div class="m-actions"><a class="btn btn-primary" href="tel:${phoneNumber}">Call</a>
    <a class="btn btn-gold" href="${propWaLink(p)}" target="_blank" rel="noopener">WhatsApp</a>
    <a class="btn btn-outline-dark" href="#contact" data-close>Enquire Now</a></div></div>`;
  openOverlay($("#modal"));
}
function initModal() {
  const modal = $("#modal");
  const propertyGrid = $("#propertyGrid");

  // Projects section is intentionally commented out for now.
  // Do not let the missing grid stop the remaining sections from initializing.
  if (!modal || !propertyGrid) return;

  propertyGrid.addEventListener("click", e => {
    const d = e.target.closest("[data-details]"), f = e.target.closest("[data-fav]");
    if (d) openModal(+d.dataset.details);
    if (f) toggleFavorite(+f.dataset.fav, f);
  });
  modal.addEventListener("click", e => { if (e.target === modal || e.target.closest("[data-close]")) closeOverlay(modal); });
}

/* =========================================================
   8. FAVORITES  (saved in localStorage)
   ========================================================= */
function toggleFavorite(id, btn) {
  favorites.has(id) ? favorites.delete(id) : favorites.add(id);
  btn.classList.toggle("on", favorites.has(id));
  btn.setAttribute("aria-pressed", favorites.has(id));
  try { localStorage.setItem("favs", JSON.stringify([...favorites])); } catch (e) { /* storage unavailable */ }
}

/* =========================================================
   9. GALLERY / LIGHTBOX  (images in assets/images/gallery/)
   ========================================================= */
let lIndex = 0, gView = [];
const GALLERY_SLOTS = 12; /* 4 cards per row x 3 rows; empty slots show a placeholder until photos are added */
const P = "assets/gallery/";
const galleryData = {
  /* Order of cards = order of this list. To add/replace a photo, put it in assets/gallery/ and edit a row. */
  plans: [
    { src: P + "01-2bhk-type-1.jpg", card: P + "01-2bhk-type-1-card.jpg", thumb: P + "01-2bhk-type-1-thumb.jpg", title: "2 BHK · Type 1", sub: "Saleable area 1050 sq.ft", tag: "2 BHK", kind: "plan" },
    { src: P + "02-2bhk-type-2.jpg", card: P + "02-2bhk-type-2-card.jpg", thumb: P + "02-2bhk-type-2-thumb.jpg", title: "2 BHK · Type 2", sub: "Saleable area 1015 sq.ft", tag: "2 BHK", kind: "plan" },
    { src: P + "03-2bhk-type-3.jpg", card: P + "03-2bhk-type-3-card.jpg", thumb: P + "03-2bhk-type-3-thumb.jpg", title: "2 BHK · Type 3", sub: "Saleable area 945 sq.ft", tag: "2 BHK", kind: "plan" },
    { src: P + "04-3bhk-type-1.jpg", card: P + "04-3bhk-type-1-card.jpg", thumb: P + "04-3bhk-type-1-thumb.jpg", title: "3 BHK · Type 1", sub: "Saleable area 1449 sq.ft", tag: "3 BHK", kind: "plan" },
    { src: P + "05-building-side-view.jpg", card: P + "05-building-side-view-card.jpg", thumb: P + "05-building-side-view-thumb.jpg", title: "Building Side View", sub: "Brick and white façade with entrance gate", tag: "Elevation", kind: "photo" },
    { src: P + "06-fountain.jpg", card: P + "06-fountain-card.jpg", thumb: P + "06-fountain-thumb.jpg", title: "Fountain", sub: "Water feature with landscaped lawn", tag: "Amenity", kind: "photo" },
    { src: P + "07-play-area.jpg", card: P + "07-play-area-card.jpg", thumb: P + "07-play-area-thumb.jpg", title: "Play Area", sub: "Colourful play zone for children", tag: "Amenity", kind: "photo" },
    { src: P + "08-podium-garden.jpg", card: P + "08-podium-garden-card.jpg", thumb: P + "08-podium-garden-thumb.jpg", title: "Podium Garden", sub: "Landscaped garden with canopy structures", tag: "Amenity", kind: "photo" },
    { src: P + "09-seating-area.jpg", card: P + "09-seating-area-card.jpg", thumb: P + "09-seating-area-thumb.jpg", title: "Seating Area", sub: "Relaxing seating surrounded by greenery", tag: "Amenity", kind: "photo" },
    { src: P + "10-temple.jpg", card: P + "10-temple-card.jpg", thumb: P + "10-temple-thumb.jpg", title: "Temple", sub: "Peaceful temple corner on the terrace", tag: "Amenity", kind: "photo" },
    { src: P + "11-terrace-garden.jpg", card: P + "11-terrace-garden-card.jpg", thumb: P + "11-terrace-garden-thumb.jpg", title: "Terrace Garden", sub: "Aerial view of the terrace amenities", tag: "Aerial", kind: "photo" },
    { src: P + "12-top-view.jpg", card: P + "12-top-view-card.jpg", thumb: P + "12-top-view-thumb.jpg", title: "Top View", sub: "Project and its surroundings from above", tag: "Aerial", kind: "photo" }
  ]
};
const zoomIcon = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M11 8v6M8 11h6"/></svg>';
function renderGallery() {
  gView = galleryData.plans;
  const grid = $("#galleryGrid");
  grid.innerHTML = gView.map((g, i) => `<button type="button" class="g-item is-${g.kind}" data-i="${i}" aria-label="Open ${g.title}">
      <span class="g-media">${imgTag(g.card || g.src, g.title)}<span class="g-tag ${g.kind === "photo" ? "gold" : ""}">${g.tag}</span><span class="g-zoom" aria-hidden="true">${zoomIcon}</span></span>
      <span class="g-body"><b>${g.title}</b><em>${g.sub}</em><i aria-hidden="true">View ›</i></span>
    </button>`).join("") + Array.from({ length: Math.max(0, GALLERY_SLOTS - gView.length) }, () => `<div class="g-item g-empty" aria-hidden="true">
      <span class="g-media"><span class="g-plus">+</span></span>
      <span class="g-body"><b>Photo Coming Soon</b><em>Floor plan will be added here</em></span>
    </div>`).join("");
  $("#lThumbs").innerHTML = gView.map((g, i) => `<button type="button" data-t="${i}" aria-label="Show image ${i + 1}"><img src="${g.thumb}" alt="" loading="lazy"></button>`).join("");
}
function showLightbox(i) {
  const n = gView.length;
  lIndex = (i + n) % n;
  const g = gView[lIndex], img = $("#lImg"); img.style.opacity = 0;
  setTimeout(() => { img.src = g.src; img.alt = g.title; img.style.opacity = 1; }, 150);
  $("#lCap").textContent = g.title;
  $("#lOpen").href = g.src;
  $("#lCount").textContent = `${String(lIndex + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;
  $$("#lThumbs button").forEach((t, k) => { t.classList.toggle("on", k === lIndex); if (k === lIndex) t.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" }); });
}
function initGallery() {
  const grid = $("#galleryGrid"), box = $("#lightbox");
  renderGallery();
  grid.addEventListener("click", e => { const b = e.target.closest("[data-i]"); if (b) { showLightbox(+b.dataset.i); openOverlay(box); } });
  $("#lThumbs").addEventListener("click", e => { const t = e.target.closest("[data-t]"); if (t) showLightbox(+t.dataset.t); });
  $("#lPrev").addEventListener("click", () => showLightbox(lIndex - 1));
  $("#lNext").addEventListener("click", () => showLightbox(lIndex + 1));
  $("[data-lclose]").addEventListener("click", () => closeOverlay(box));
  box.addEventListener("click", e => { if (e.target === box) closeOverlay(box); });
  let sx = 0;
  box.addEventListener("touchstart", e => { sx = e.changedTouches[0].clientX; }, { passive: true });
  box.addEventListener("touchend", e => { const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 50) showLightbox(lIndex + (d < 0 ? 1 : -1)); }, { passive: true });
  document.addEventListener("keydown", e => {
    if (box.hidden) return;
    if (e.key === "ArrowLeft") showLightbox(lIndex - 1);
    if (e.key === "ArrowRight") showLightbox(lIndex + 1);
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") [$("#modal"), box].forEach(o => !o.hidden && closeOverlay(o)); });
}

/* =========================================================
   10. FAQ  (one open at a time)
   ========================================================= */
function initFaq() {
  const faq = $("#faq");
  if (!faq) return; // FAQ section is intentionally commented out for now.

  faq.innerHTML = content.faq.map((f, i) => `<div class="faq-item"><h3><button class="faq-q" aria-expanded="false" aria-controls="fa${i}" id="fq${i}">${f[0]}</button></h3><div class="faq-a" id="fa${i}" role="region" aria-labelledby="fq${i}"><div><p>${f[1]}</p></div></div></div>`).join("");
  faq.addEventListener("click", e => {
    const q = e.target.closest(".faq-q"); if (!q) return;
    const opening = q.getAttribute("aria-expanded") !== "true";
    $$(".faq-q").forEach(b => b.setAttribute("aria-expanded", "false"));
    $$(".faq-a").forEach(a => a.classList.remove("open"));
    if (opening) {
      q.setAttribute("aria-expanded", "true");
      $("#" + q.getAttribute("aria-controls"))?.classList.add("open");
    }
  });
}

/* =========================================================
   11. TESTIMONIALS: responsive cards (rendered in renderStatic)
   ========================================================= */

/* =========================================================
   12. CONTACT FORM  (frontend validation only)
   ========================================================= */
function initForm() {
  const form = $("#enquiryForm"), msg = $("#formMsg");
  const rules = {
    name: v => /^[A-Za-z][A-Za-z .'-]{1,}$/.test(v.trim()) || "Enter your full name (letters only).",
    phone: v => /^(\+?\d{1,3}[\s-]?)?[6-9]\d{9}$/.test(v.replace(/\s/g, "")) || "Enter a valid 10-digit mobile number.",
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) || "Enter a valid email address.",
    date: v => (v && v >= todayISO()) || "Select today's date or a future date."
  };
  /* Visit date: past dates are disabled in the calendar and rejected on submit */
  const todayISO = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; };
  const dateInput = form.elements.date;
  const setMinDate = () => { dateInput.min = todayISO(); };
  setMinDate();
  dateInput.addEventListener("focus", setMinDate);
  dateInput.addEventListener("click", () => { setMinDate(); try { dateInput.showPicker(); } catch (e) { /* browser without showPicker: use the calendar icon */ } });
  form.addEventListener("submit", e => {
    e.preventDefault();
    let ok = true;
    Object.keys(rules).forEach(n => {
      const input = form.elements[n], r = rules[n](input.value);
      input.classList.toggle("invalid", r !== true);
      input.setAttribute("aria-invalid", r !== true);
      input.nextElementSibling.textContent = r === true ? "" : r;
      if (r !== true) ok = false;
    });
    msg.className = "form-msg";
    if (!ok) { msg.textContent = "Please fix the highlighted fields."; return; }
    /* Send the enquiry details directly to the configured WhatsApp number. */
    const enquiryText = `Hello, I would like to make an enquiry.

Name: ${form.elements.name.value.trim()}
Phone: ${form.elements.phone.value.trim()}
Email: ${form.elements.email.value.trim()}
Preferred Visit Date: ${form.elements.date.value}
Preferred Location: ${form.elements.location.value}
Budget: ${form.elements.budget.value}
Message: ${form.elements.message.value.trim() || "N/A"}`;
    const whatsappUrl = waLink(enquiryText);
    window.open(whatsappUrl, "_blank", "noopener");
    msg.textContent = "Thank you! Your enquiry is ready to send on WhatsApp.";
    msg.classList.add("ok");
    form.reset();
  });
}

/* =========================================================
   14. SCROLL REVEAL
   ========================================================= */
let revealObserver;
function observeReveals() {
  revealObserver ??= new IntersectionObserver((entries, o) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); o.unobserve(e.target); } }), { threshold: .12 });
  $$(".reveal:not(.in)").forEach(el => revealObserver.observe(el));
}

/* =========================================================
   15. COUNTER ANIMATION
   ========================================================= */
function initCounters() {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const io = new IntersectionObserver((entries, o) => entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.count; let t0;
    const step = t => { t0 ??= t; const k = Math.min((t - t0) / 1400, 1); el.textContent = Math.round(end * k); if (k < 1) requestAnimationFrame(step); };
    reduce ? el.textContent = end : requestAnimationFrame(step);
    o.unobserve(el);
  }), { threshold: .6 });
  $$("[data-count]").forEach(el => io.observe(el));
}

/* ===== Init ===== */
document.addEventListener("DOMContentLoaded", () => {
  initContactLinks(); renderStatic(); renderProperties(properties);
  initNavbar(); initMobileMenu(); initSearch(); initModal(); initGallery(); initFaq(); initForm(); initCounters(); observeReveals();
});
