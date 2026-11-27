// script.js: draws the cards, photo gallery, favorites, filters, menu and forms.
// properties-data.js (the list) and lang.js (Arabic/English) load before this file.
const labels = { rent: "For Rent", sale: "For Sale" };
const typeLabel = p => labels[p.type] ? t(labels[p.type]) : "";   // "For Rent" / "For Sale"
let favs = JSON.parse(localStorage.getItem("favs") || "[]");   // saved hearts
let activeFilter = "all";                                       // current filter button

// Show "/mo" in Arabic too
const showPrice = price => lang === "ar" ? price.replace("/mo", " / شهر") : price;

// The card background: the first photo if the property has photos, otherwise its colour (bg)
const hasPhotos = p => Array.isArray(p.images) && p.images.length > 0;
const cover = p => hasPhotos(p) ? `url('${p.images[0]}')` : p.bg;

// Properties that are no longer free get a clear label on the card (sold / rented / reserved)
const unavailable = p => ["sold", "rented", "reserved"].includes(p.status);
const statusText = p => t({ sold: "Sold", rented: "Rented", reserved: "Reserved" }[p.status]);

// ===== 1. DRAW THE CARDS =====
function renderCards(list, target) {
  target.innerHTML = list.map(p => `
    <a class="card${unavailable(p) ? " unavail s-" + p.status : ""}" href="property.html?id=${p.id}" data-id="${p.id}" style="background-image:${cover(p)}">
      <span class="price">${showPrice(p.price)}</span>
      ${typeLabel(p) && !unavailable(p) ? `<span class="badge">${typeLabel(p)}</span>` : ""}   <!-- no "For Sale" badge next to a "Sold" label -->
      <button class="fav ${favs.includes(p.id) ? "on" : ""}" data-id="${p.id}" aria-label="${t("Save to favorites")}">${favs.includes(p.id) ? "♥" : "♡"}</button>
      ${hasPhotos(p) && p.images.length > 1 ? `<span class="count">📷 ${p.images.length}</span>` : ""}
      ${unavailable(p) ? `<span class="status s-${p.status}">${statusText(p)}</span>` : ""}
      <span class="place">📍 ${lang === "ar" && p.ar ? p.ar : p.title}</span>
    </a>`).join("");
}

// Home page shows the first 6, Properties page shows all (or the filtered ones)
const featured = document.getElementById("featured");
const grid = document.getElementById("grid");
function refreshCards() {
  if (featured) renderCards(properties.slice(0, 6), featured);
  if (grid) renderCards(activeFilter === "all" ? properties : properties.filter(p => p.type === activeFilter), grid);
  if (detail) renderDetail();
}

// ===== 2. HEART BUTTON =====
document.addEventListener("click", e => {
  const heart = e.target.closest(".fav");
  if (!heart) return;
  e.preventDefault();                       // stop the card link from opening
  const id = Number(heart.dataset.id);
  favs = favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id];
  localStorage.setItem("favs", JSON.stringify(favs));
  heart.classList.toggle("on");
  heart.textContent = favs.includes(id) ? "♥" : "♡";
});

// ===== 3. FILTER BUTTONS (Properties page) =====
document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach(b => b.classList.remove("on"));
    btn.classList.add("on");
    activeFilter = btn.dataset.filter;
    refreshCards();
  });
});

// ===== 4. MOBILE MENU =====
const menuBtn = document.querySelector(".menu-btn");
if (menuBtn) menuBtn.addEventListener("click", () => document.querySelector(".menu").classList.toggle("open"));

// ===== 5. PROPERTY PAGE + PHOTO GALLERY =====
// property.html?id=3 shows property number 3: photo mosaic, price, description and contact buttons.
const detail = document.getElementById("detail");
let detailProp = null;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const has = v => v !== undefined && v !== null && v !== "";
const FURNISHING = { yes: "Furnished", partly: "Partly furnished", no: "Unfurnished" };
const STATUS = { available: "Available", reserved: "Reserved", rented: "Rented", sold: "Sold" };

function renderDetail() {
  const id = Number(new URLSearchParams(location.search).get("id"));
  const p = detailProp = properties.find(x => x.id === id) || null;
  if (!p) {
    detail.innerHTML = `<h2>${t("Property not found.")}</h2><p style="margin-top:16px"><a class="btn" href="properties.html">${t("Back to properties")}</a></p>`;
    return;
  }
  const title = lang === "ar" && p.ar ? p.ar : p.title;
  const desc = lang === "ar" && p.descAr ? p.descAr : (p.desc || "");
  const imgs = hasPhotos(p) ? p.images : [];
  const shown = imgs.length >= 5 ? 5 : imgs.length >= 3 ? 3 : imgs.length;     // how many photos fit the mosaic
  const tiles = shown
    ? imgs.slice(0, shown).map((src, i) => `<button class="tile" type="button" data-i="${i}" style="background-image:url('${src}')" aria-label="${esc(title)} ${i + 1}"></button>`).join("")
    : `<div class="tile" style="background-image:${p.bg}"></div>`;

  // Fact boxes: [icon, label, value]. A box only appears when the admin filled that value in.
  const area = v => has(v) ? `${v} ${t("m²")}` : "";
  const facts = [
    ["📍", "Location", lang === "ar" && p.locAr ? p.locAr : p.loc],
    ["🏠", "Type", p.kind ? t(p.kind) : ""],
    ["📐", "Total area", area(p.area)],
    ["📏", "Interior area", area(p.inner)],
    ["🛏️", "Bedrooms", p.beds],
    ["🛁", "Bathrooms", p.baths],
    ["🏢", "Floor", p.floor],
    ["🛋️", "Furnishing", FURNISHING[p.furnished] ? t(FURNISHING[p.furnished]) : ""],
    ["✅", "Status", STATUS[p.status] ? t(STATUS[p.status]) : ""]
  ].filter(f => has(f[2]));

  const msg = lang === "ar" ? "مرحبًا، أنا مهتم بهذا العقار: " + title : "Hi, I'm interested in this property: " + title;
  detail.innerHTML = `
    <a class="back" href="properties.html">${t("Back to properties")}</a>
    <div class="mosaic m${shown || 1}">${tiles}${imgs.length > 1 ? `<button class="show-all" id="showAll" type="button">📷 ${t("Show all photos")} (${imgs.length})</button>` : ""}</div>
    <div class="d-head">
      <div class="d-tags">${typeLabel(p) ? `<span class="tag-type">${typeLabel(p)}</span>` : ""}${unavailable(p) ? `<span class="tag-status s-${p.status}">${statusText(p)}</span>` : ""}</div>
      <h1>${esc(title)}</h1>
      <p class="d-price">${showPrice(p.price)}</p>
    </div>
    ${facts.length ? `<div class="facts">${facts.map(f => `<div class="fact"><span class="f-ico">${f[0]}</span><span class="f-label">${t(f[1])}</span><strong>${esc(f[2])}</strong></div>`).join("")}</div>` : ""}
    <div class="d-body">
      <div>
        <h3 class="sec-title">${t("About this property")}</h3>
        <p class="desc">${desc ? esc(desc) : t("Details coming soon.")}</p>
      </div>
      <aside class="agent">
        <img src="Hisham_Profile.webp" alt="" width="112" height="112">
        <strong>${t("Hisham Sammouneh")}</strong>
        <span>${t("Business Lead Director / Owner")}</span>
        <a dir="ltr" href="tel:+963933331994">+963 933 331 994</a>
        <a class="btn" href="https://wa.me/963933331994?text=${encodeURIComponent(msg)}">${t("Chat on WhatsApp")}</a>
        <a class="btn light" style="border:1px solid #d9cfc6" href="contact.html">${t("Contact us")}</a>
      </aside>
    </div>
    ${has(p.map) ? `
    <div class="map-sec">
      <h3 class="sec-title">${t("Location on the map")}</h3>
      <div class="map-frame"><iframe title="${esc(title)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=${encodeURIComponent(p.map)}&z=15&output=embed&hl=${lang}"></iframe></div>
      <a class="btn" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.map)}">📍 ${t("Open in Google Maps")}</a>
    </div>` : ""}`;
  document.documentElement.dataset.title = `${title} | ShamLines`;   // browser tab title (lang.js applies it)
}

// Click a photo, or "Show all photos", to open the full gallery
document.addEventListener("click", e => {
  if (!detailProp) return;
  const tile = e.target.closest(".tile[data-i]");
  if (tile) return openGallery(detailProp, Number(tile.dataset.i));
  if (e.target.closest("#showAll")) openGallery(detailProp, 0);
});

let closeGallery = () => {};
function openGallery(p, start = 0) {
  closeGallery();
  const title = lang === "ar" && p.ar ? p.ar : p.title;
  const box = document.createElement("div");
  box.className = "lightbox" + (p.images.length < 2 ? " single" : "");
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.innerHTML = `
    <div class="lb-inner">
      <button class="lb-close" type="button" aria-label="${t("Close")}">✕</button>
      <div class="lb-stage">
        <button class="lb-nav lb-prev" type="button" aria-label="${t("Previous photo")}">‹</button>
        <img class="lb-img" alt="">
        <button class="lb-nav lb-next" type="button" aria-label="${t("Next photo")}">›</button>
      </div>
      <div class="lb-bar">
        <div><strong>${title}</strong><br><span>${showPrice(p.price)}${typeLabel(p) ? " · " + typeLabel(p) : ""}</span></div>
        <span class="lb-count"></span>
        <a class="btn" href="contact.html">${t("Ask about this property")}</a>
      </div>
    </div>`;
  document.body.appendChild(box);
  document.body.style.overflow = "hidden";

  const img = box.querySelector(".lb-img"), count = box.querySelector(".lb-count");
  const total = p.images.length;
  let i = 0;
  const show = n => {
    i = (n + total) % total;
    img.src = p.images[i];
    img.alt = title;
    count.textContent = total > 1 ? `${i + 1} / ${total}` : "";
  };
  const dir = () => document.documentElement.dir === "rtl" ? -1 : 1;   // arrow keys follow the reading direction

  const onKey = e => {
    if (e.key === "Escape") closeGallery();
    if (e.key === "ArrowRight") show(i + dir());
    if (e.key === "ArrowLeft") show(i - dir());
  };
  closeGallery = () => {
    box.remove();
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onKey);
    closeGallery = () => {};
  };

  box.querySelector(".lb-prev").addEventListener("click", () => show(i - 1));
  box.querySelector(".lb-next").addEventListener("click", () => show(i + 1));
  box.querySelector(".lb-close").addEventListener("click", () => closeGallery());
  box.addEventListener("click", e => { if (e.target === box) closeGallery(); });   // click the dark area to close
  document.addEventListener("keydown", onKey);

  // Swipe on phones
  let startX = null;
  const stage = box.querySelector(".lb-stage");
  stage.addEventListener("touchstart", e => { startX = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener("touchend", e => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(dx) > 50) show(i + (dx < 0 ? 1 : -1) * dir());
  });

  show(start);
  box.querySelector(".lb-close").focus();
}

// ===== 6. FORMS THAT SEND AN EMAIL =====
// Any <form data-endpoint="..."> is sent to that address (a Formspree form) without reloading the page.
document.querySelectorAll("form[data-endpoint]").forEach(form => {
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    const note = form.querySelector(".note");
    const label = btn.textContent;
    btn.disabled = true; btn.textContent = t("Sending...");
    try {
      const res = await fetch(form.dataset.endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      note.textContent = t("Thank you! We received your message and will contact you soon.");
      note.className = "note ok";
    } catch (err) {
      note.textContent = t("Something went wrong. Please try again or message us on WhatsApp.");
      note.className = "note err";
    }
    btn.disabled = false; btn.textContent = label;
  });
});

// ===== 7. START: draw the cards and apply the saved language (Arabic first) =====
applyLang();
