// ===== YOUR PROPERTIES =====
// To add a property: open admin.html, fill the form, copy the line it gives you,
// and paste it below, just before the closing  ];
// To remove a property: delete its line.
// title = English name, ar = Arabic name (optional), price = any text you like (use /mo for monthly rent)
// type: "rent" or "sale".   bg: the colour shown when a property has no photos.
// images: optional list of photo paths, e.g.  images: ["images/p9-ab12c.jpg", "images/p9-x7k2m.jpg"]
//         the first photo is the cover; admin.html creates this part for you.
// desc / descAr: optional description (English / Arabic) shown on the property's own page.
// Optional facts shown as boxes on the property's page (anything missing is simply not shown):
//   loc / locAr (location), kind (Apartment, House, Villa, Office, Commercial, Factory, Land),
//   area, inner (m2), beds, baths, floor, furnished ("yes" / "partly" / "no"),
//   status ("available" / "reserved" / "rented" / "sold").
//   A "sold", "rented" or "reserved" status also puts a label on the property's card on the home and properties pages.
//   map: where the property is. Coordinates ("33.5138,36.2765") or an address. admin.html fills this in for you.
//        It shows a Google map at the bottom of the property's page with a button that opens Google Maps.
const properties = [
  { id: 1, title: "Malki Luxury Apartment",  ar: "شقة فاخرة في المالكي",  price: "$120,000",  type: "sale",   bg: "linear-gradient(160deg,#f6c58e,#c9835a)" },
  { id: 2, title: "Mezzeh Family Apartment", ar: "شقة عائلية في المزة",   price: "$400/mo",   type: "rent",   bg: "linear-gradient(160deg,#9cc3d5,#e9a96b)" },
  { id: 3, title: "Gypsum factory", ar: "معمل اسبيداج", price: "0000$", type: "sale", bg: "linear-gradient(160deg,#e3b98a,#7b5a46)", loc: "Rural Damascus", locAr: "ريف دمشق", kind: "Factory", area: 10000, inner: 70000, furnished: "no", status: "available", desc: "معمل اسبيداج في ريف دمشق بحاجة لبعض الصيانة بسعر ممتاز", descAr: "معمل اسبيداج في ريف دمشق بحاجة لبعض الصيانة بسعر ممتاز", images: ["images/p5-km45y.jpg","images/p5-7g23u.jpg","images/p5-lgis0.jpg","images/p5-euuis.jpg","images/p5-tq19b.jpg","images/p5-m3lja.jpg","images/p5-44c7u.jpg","images/p5-rpj7e.jpg","images/p5-kbg55.jpg"] },
];
