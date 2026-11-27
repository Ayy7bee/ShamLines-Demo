// lang.js: Arabic / English switching.
// The pages are written in English. In Arabic mode, every known English text below is swapped for its Arabic version.
// To fix a translation, edit the Arabic text on the right. To translate a new sentence, add a new line.
const ar = {
  // navbar + footer
  "Home": "الرئيسية", "About": "من نحن",
  "Properties": "العقارات", "Services": "خدماتنا", "List your properties": "اعرض عقاراتك", "Contact": "اتصل بنا",
  "Log in": "تسجيل الدخول", "Sign up": "إنشاء حساب", "Open menu": "فتح القائمة",
  "© 2026 ShamLines · Damascus, Syria": "© 2026 ShamLines · دمشق، سوريا",
  // home
  "Find Your": "اعثر على", "Perfect Property": "عقارك المثالي",
  "Homes for rent and sale in Damascus, plus full management for owners and Airbnb hosts.": "منازل للإيجار والبيع في دمشق، مع إدارة كاملة للملاك ومضيفي Airbnb.",
  "Browse properties": "تصفح العقارات", "Location (e.g. Al-Mezzeh)": "الموقع (مثال: المزة)",
  "Any type": "أي نوع", "For Rent": "للإيجار", "For Sale": "للبيع", "Any price": "أي سعر",
  "Under $500": "أقل من 500 دولار", "$500 - $1,000": "500 - 1,000 دولار", "Over $1,000": "أكثر من 1,000 دولار", "Search": "بحث",
  "Featured properties": "عقارات مميزة", "A few of our latest listings.": "بعض أحدث عقاراتنا.",
  "What we do": "ماذا نقدم", "Everything an owner or a renter needs, in one place.": "كل ما يحتاجه المالك أو المستأجر في مكان واحد.",
  "Property management": "إدارة العقارات", "We find tenants, collect rent and look after your property.": "نبحث عن المستأجرين ونحصّل الإيجار ونعتني بعقارك.",
  "Learn more": "اعرف المزيد", "Airbnb management": "إدارة Airbnb", "Listings, guests, cleaning and pricing handled for you.": "ندير الإعلانات والضيوف والتنظيف والتسعير نيابةً عنك.",
  "Renovations": "الترميم والتجديد", "Refresh your property to rent or sell for more.": "جدّد عقارك لتؤجره أو تبيعه بسعر أفضل.",
  "Own a property?": "هل تملك عقارًا؟", "List it with us for rent, sale or Airbnb, and we handle the rest.": "اعرضه معنا للإيجار أو البيع أو Airbnb ونتولى الباقي.",
  "List your property with us": "اعرض عقارك معنا",
  // properties
  "Filter by type, tap the heart to save the ones you like.": "صنّف حسب النوع، واضغط على القلب لحفظ ما يعجبك.", "All": "الكل", "Save to favorites": "حفظ في المفضلة",
  "Ask about this property": "اسأل عن هذا العقار", "Close": "إغلاق", "Previous photo": "الصورة السابقة", "Next photo": "الصورة التالية",
  "Show all photos": "عرض كل الصور", "Back to properties": "العودة إلى العقارات", "About this property": "عن هذا العقار", "Property not found.": "العقار غير موجود.", "Details coming soon.": "التفاصيل قريبًا.",
  "Location": "الموقع", "Type": "النوع", "Total area": "المساحة الإجمالية", "Interior area": "المساحة الداخلية", "Bathrooms": "الحمامات", "Floor": "الطابق",
  "Furnishing": "الأثاث", "Furnished": "مفروش", "Unfurnished": "غير مفروش", "Partly furnished": "مفروش جزئيًا",
  "Status": "الحالة", "Available": "متاح", "Reserved": "محجوز", "Rented": "مؤجر", "Sold": "مباع",
  "Office": "مكتب", "Factory": "مصنع", "m²": "م²",
  // services
  "Our services": "خدماتنا", "Pick what you need. We can also combine them.": "اختر ما تحتاجه، ويمكننا الجمع بينها أيضًا.",
  "Tenant search, contracts, rent collection, maintenance and regular updates for owners.": "البحث عن مستأجرين، العقود، تحصيل الإيجار، الصيانة، وتقارير دورية للمالك.",
  "Listing creation, guest messaging, check-ins, cleaning and pricing for short-term rentals.": "إنشاء الإعلان، التواصل مع الضيوف، الاستقبال، التنظيف والتسعير للإيجار قصير الأمد.",
  "Repairs, painting, furniture and full renovations to raise your rent or sale price.": "إصلاحات ودهان وأثاث وترميم كامل لرفع سعر الإيجار أو البيع.",
  "Contact us": "تواصل معنا",
  // list your properties
  "Rent it, sell it, or let us run it as an Airbnb. Send us the basics and we take care of the rest.": "أجّره أو بِعه أو دعنا ندير عقارك كإيجار قصير الأمد. أرسل لنا التفاصيل الأساسية ونتولى الباقي.",
  "Send us the details": "أرسل لنا التفاصيل", "It takes about two minutes.": "يستغرق الأمر دقيقتين تقريبًا.",
  "We call you": "نتصل بك", "We agree on the price, photos and how we work together.": "نتفق على السعر والصور وآلية العمل معًا.",
  "We list and manage it": "نعرض عقارك وندير شؤونه", "Your property goes on our site and we find the right tenant, buyer or guests.": "يظهر عقارك على موقعنا ونبحث عن المستأجر أو المشتري أو الضيوف المناسبين.",
  "No photos needed now. We will ask for them when we call.": "لا حاجة لإرسال صور الآن، سنطلبها منك عند الاتصال.",
  "About you": "معلوماتك", "Full name": "الاسم الكامل", "Phone number": "رقم الهاتف", "Email": "البريد الإلكتروني",
  "Best way to reach you": "أفضل طريقة للتواصل", "Phone call": "اتصال هاتفي", "WhatsApp": "واتساب",
  "About the property": "عن العقار", "Address or area (e.g. Al-Mezzeh, Damascus)": "العنوان أو المنطقة (مثال: المزة، دمشق)",
  "Apartment": "شقة", "House": "منزل", "Villa": "فيلا", "Commercial": "تجاري", "Land": "أرض",
  "Size (m²)": "المساحة (م²)", "Bedrooms": "غرف النوم", "Expected price or rent ($)": "السعر أو الإيجار المتوقع ($)",
  "What do you need?": "ماذا تحتاج؟", "Rent it out": "أريد تأجيره", "Sell it": "أريد بيعه", "Renovation": "الترميم",
  "Anything else we should know?": "هل هناك أي شيء آخر نحتاج معرفته؟", "Send my property": "أرسل عقاري",
  // about + contact
  "About us": "من نحن",
  "We are a Damascus-based team helping people rent, buy and manage property. Replace this text with your real story.": "نحن فريق في دمشق نساعد الناس على استئجار العقارات وشرائها وإدارتها. (استبدل هذا النص بقصتكم الحقيقية)",
  "Send a message or write to us on WhatsApp.": "أرسل لنا رسالة أو راسلنا عبر واتساب.", "Your name": "اسمك", "How can we help?": "كيف يمكننا مساعدتك؟",
  "Send message": "إرسال الرسالة", "Hisham Sammouneh": "هشام سمونة", "Business Lead Director / Owner": "مدير الأعمال / المالك",
  "📍 Damascus, Syria": "📍 دمشق، سوريا", "Chat on WhatsApp": "تحدث معنا على واتساب", "Map goes here": "الخريطة هنا",
  // service pages + map
  "Back to services": "العودة إلى الخدمات",
  "Service": "خدمة",
  "What is included": "ماذا تشمل الخدمة",
  "How it works": "كيف نعمل",
  "Other services": "خدمات أخرى",
  "From a tired property to one people want to live in. We plan, price and carry out the work, so you do not have to chase builders.": "من عقار متعب إلى مكان يرغب الناس بالعيش فيه. نخطط ونسعّر وننفذ الأعمال، فلا تضطر إلى ملاحقة المقاولين.",
  "Demolition and clearing": "الهدم والتنظيف",
  "We remove old walls, floors and fittings and clear the site safely.": "نزيل الجدران والأرضيات والتجهيزات القديمة وننظف الموقع بأمان.",
  "Plumbing and electrical": "السباكة والكهرباء",
  "New pipes, wiring, lighting and sockets installed to a safe standard.": "أنابيب وأسلاك وإنارة ومقابس جديدة تُركَّب وفق معايير السلامة.",
  "Plastering and painting": "القصارة والدهان",
  "Smooth walls, clean finishes and colours that suit the space.": "جدران ملساء وتشطيبات نظيفة وألوان تناسب المكان.",
  "Floors, kitchens and bathrooms": "الأرضيات والمطابخ والحمامات",
  "Tiles, cabinets and fixtures fitted neatly and built to last.": "بلاط وخزائن وتجهيزات تُركَّب بإتقان لتدوم طويلًا.",
  "Lighting and furniture": "الإنارة والأثاث",
  "The finishing touches that make a property ready to rent or sell.": "اللمسات الأخيرة التي تجعل العقار جاهزًا للإيجار أو البيع.",
  "Full construction and extensions": "البناء الكامل والتوسعات",
  "Structural work and additions, managed from start to finish.": "أعمال إنشائية وإضافات ندير تنفيذها من البداية إلى النهاية.",
  "Site visit and quote": "زيارة الموقع وعرض السعر",
  "We look at the property, listen to your goals and give you a clear price.": "نعاين العقار ونستمع إلى أهدافك ونقدم لك سعرًا واضحًا.",
  "Plan and schedule": "التخطيط والجدول الزمني",
  "We agree the scope, the materials and a timeline before any work starts.": "نتفق على نطاق العمل والمواد والمدة قبل بدء أي عمل.",
  "Work and updates": "التنفيذ والمتابعة",
  "Our team does the work and keeps you updated along the way.": "ينفذ فريقنا الأعمال ويبقيك على اطلاع أثناء العمل.",
  "Handover": "التسليم",
  "We check every detail with you and hand over a finished property.": "نراجع كل التفاصيل معك ونسلّمك عقارًا جاهزًا.",
  "Turn your property into a hassle-free short-term rental. We run everything, from the first listing to the last guest check-out.": "حوّل عقارك إلى إيجار قصير الأمد بلا عناء. ندير كل شيء، من أول إعلان حتى مغادرة آخر ضيف.",
  "Listing creation": "إنشاء الإعلان",
  "A clear description and a listing that stands out from the rest.": "وصف واضح وإعلان يتميز عن غيره.",
  "Smart pricing": "التسعير الذكي",
  "Prices adjusted to the season and demand so your calendar stays full.": "أسعار تتغير حسب الموسم والطلب ليبقى جدولك ممتلئًا.",
  "Guest messaging": "التواصل مع الضيوف",
  "Fast replies to questions and bookings, day and night.": "ردود سريعة على الأسئلة والحجوزات ليلًا ونهارًا.",
  "Check-in and keys": "الاستقبال والمفاتيح",
  "A warm welcome and a smooth key handover for every guest.": "استقبال ودود وتسليم سلس للمفاتيح لكل ضيف.",
  "Cleaning and laundry": "التنظيف والغسيل",
  "Spotless rooms and fresh linen between every stay.": "غرف نظيفة وبياضات نظيفة بين كل إقامة وأخرى.",
  "Maintenance and reports": "الصيانة والتقارير",
  "Quick fixes for small problems and regular updates on your income.": "إصلاح سريع للمشاكل الصغيرة وتقارير دورية عن دخلك.",
  "Free consultation": "استشارة مجانية",
  "We talk about your property and what you expect to earn.": "نتحدث عن عقارك وعن الدخل الذي تتوقعه.",
  "Get the property ready": "تجهيز العقار",
  "We prepare the space so guests feel at home from the first night.": "نجهز المكان ليشعر الضيوف وكأنهم في بيتهم منذ الليلة الأولى.",
  "Go live": "نشر الإعلان",
  "We publish the listing and start accepting bookings.": "ننشر الإعلان ونبدأ باستقبال الحجوزات.",
  "Regular updates": "تقارير دورية",
  "You receive clear updates on bookings and income.": "تصلك تقارير واضحة عن الحجوزات والدخل.",
  "Whether you want to rent out or sell, we find the right tenant or buyer and take care of the paperwork and the day-to-day work.": "سواء أردت التأجير أو البيع، نجد المستأجر أو المشتري المناسب ونتولى الأوراق والعمل اليومي.",
  "Tenant search": "البحث عن مستأجرين",
  "We advertise your property and find reliable tenants.": "نعلن عن عقارك ونجد مستأجرين موثوقين.",
  "Selling your property": "بيع عقارك",
  "We help set the right price, show it to buyers and negotiate for you.": "نساعد في تحديد السعر المناسب ونعرض العقار على المشترين ونتفاوض نيابةً عنك.",
  "Contracts and paperwork": "العقود والأوراق",
  "Clear agreements prepared properly so everyone is protected.": "اتفاقيات واضحة تُعدّ بشكل سليم لحماية حقوق الجميع.",
  "Rent collection": "تحصيل الإيجار",
  "We collect the rent on time and pass it on to you.": "نحصّل الإيجار في موعده ونسلّمه لك.",
  "Maintenance and care": "الصيانة والعناية",
  "Repairs and regular checks to keep your property in good condition.": "إصلاحات وفحوصات دورية للحفاظ على عقارك بحالة جيدة.",
  "Simple reports so you always know what is happening.": "تقارير بسيطة لتعرف دائمًا ما الذي يجري.",
  "Tell us about your property": "أخبرنا عن عقارك",
  "Send us the basics, or call us and we will take it from there.": "أرسل لنا الأساسيات أو اتصل بنا ونتولى الباقي.",
  "Agree the price and plan": "نتفق على السعر والخطة",
  "We agree on the price and how we will work together.": "نتفق على السعر وآلية العمل معًا.",
  "We find the tenant or buyer": "نجد المستأجر أو المشتري",
  "We list your property and handle the viewings and the talks.": "نعرض عقارك ونتولى المعاينات والمفاوضات.",
  "We manage and keep you informed": "ندير ونبقيك على اطلاع",
  "After the deal we look after the property and keep you updated.": "بعد إتمام الصفقة نعتني بالعقار ونبقيك على اطلاع.",
  "Location on the map": "الموقع على الخريطة",
  "Open in Google Maps": "افتح في خرائط Google",
  // redesign
  "Why choose us": "لماذا تختارنا",
  "Call now": "اتصل الآن",
  "Request a quote": "اطلب عرض سعر",
  "Frequently asked questions": "أسئلة شائعة",
  "Ready to get started?": "هل أنت مستعد للبدء؟",
  "Call or message us and we will get back to you quickly.": "اتصل بنا أو راسلنا وسنرد عليك بسرعة.",
  "Quick links": "روابط سريعة",
  "A simple, honest way to rent, sell and manage property.": "طريقة بسيطة وصادقة لتأجير العقارات وبيعها وإدارتها.",
  "One point of contact": "جهة اتصال واحدة",
  "You deal directly with us, from the first call to the final handover.": "تتعامل معنا مباشرة، من أول مكالمة حتى التسليم النهائي.",
  "Clear and honest pricing": "أسعار واضحة وصادقة",
  "You know the cost before we start, with no surprises along the way.": "تعرف التكلفة قبل أن نبدأ، دون مفاجآت على الطريق.",
  "Local knowledge": "معرفة بالسوق المحلي",
  "We know Damascus, its neighbourhoods and what people are looking for.": "نعرف دمشق وأحياءها وما يبحث عنه الناس.",
  "Renovation done properly": "ترميم متقن",
  "A good renovation makes a property easier to rent, faster to sell and more pleasant to live in. We take care of the whole job, from the first measurements to the final clean-up, so the result matches what we agreed.": "الترميم الجيد يجعل العقار أسهل في التأجير وأسرع في البيع وأكثر راحة في السكن. نتولى العمل كاملًا، من أول قياس حتى التنظيف الأخير، لتأتي النتيجة مطابقة لما اتفقنا عليه.",
  "Whether it is one room that needs fresh paint or a whole building that needs rebuilding, we work with skilled tradespeople, use good materials and keep you informed at every stage.": "سواء كانت غرفة واحدة تحتاج إلى دهان جديد أو مبنى كامل يحتاج إلى إعادة بناء، نعمل مع حرفيين مهرة ونستخدم مواد جيدة ونبقيك على اطلاع في كل مرحلة.",
  "Every wall, every pipe and every finish checked before we hand it over.": "كل جدار وكل أنبوب وكل تشطيب نراجعه قبل أن نسلّمك العقار.",
  "Can you work on an apartment I am renting out?": "هل يمكنكم العمل في شقة مؤجرة؟",
  "Yes. We can plan the work around your tenants or carry it out while the property is empty, so you lose as little rent as possible.": "نعم. يمكننا تنظيم العمل بما يناسب المستأجرين أو تنفيذه أثناء خلو العقار، لتخسر أقل قدر ممكن من الإيجار.",
  "Do you give a price before starting?": "هل تعطونني سعرًا قبل البدء؟",
  "Yes. After visiting the property we give you a clear quote that explains what is included, and we agree it with you before any work begins.": "نعم. بعد زيارة العقار نقدم لك عرض سعر واضحًا يشرح ما يشمله، ونتفق عليه معك قبل بدء أي عمل.",
  "Can you renovate a property I want to sell?": "هل يمكنكم ترميم عقار أريد بيعه؟",
  "Yes. We focus on the improvements that add the most value, so the property looks its best to buyers.": "نعم. نركّز على التحسينات التي تضيف أكبر قيمة ليظهر العقار بأفضل صورة أمام المشترين.",
  "Your property, working for you": "عقارك يعمل لأجلك",
  "Running a short-term rental is a full-time job: messages at midnight, guests arriving late, cleaning between stays and prices that change every week. We take all of that off your shoulders.": "إدارة الإيجار قصير الأمد عمل متواصل: رسائل في منتصف الليل، وضيوف يصلون متأخرين، وتنظيف بين الإقامات، وأسعار تتغير كل أسبوع. نحن نحمل عنك كل ذلك.",
  "We make sure guests have a great stay and leave good reviews, which brings more bookings and a better income for you, while you keep full ownership of your property.": "نحرص على أن يحظى الضيوف بإقامة رائعة ويتركوا تقييمات جيدة، مما يجلب حجوزات أكثر ودخلًا أفضل لك، بينما تحتفظ بملكية عقارك كاملة.",
  "Happy guests, good reviews and a calendar that stays full.": "ضيوف سعداء وتقييمات جيدة وجدول حجوزات ممتلئ.",
  "Do I need to be in Damascus?": "هل يجب أن أكون في دمشق؟",
  "No. We handle everything on site, so you can own the property from anywhere and still follow your bookings.": "لا. نتولى كل شيء في الموقع، فيمكنك امتلاك العقار من أي مكان ومتابعة حجوزاتك.",
  "Who talks to the guests?": "من يتواصل مع الضيوف؟",
  "We do. We answer questions, confirm bookings, welcome guests and solve any problem during their stay.": "نحن. نرد على الاستفسارات ونؤكد الحجوزات ونستقبل الضيوف ونحل أي مشكلة أثناء إقامتهم.",
  "Can I still use the property myself?": "هل يمكنني استخدام العقار بنفسي؟",
  "Yes. Tell us which dates you need and we will block them in the calendar.": "نعم. أخبرنا بالتواريخ التي تحتاجها وسنحجبها في التقويم.",
  "Rent or sell with confidence": "أجّر أو بِع بثقة",
  "Finding the right tenant or buyer takes time, and mistakes can be expensive. We advertise your property, meet the people who are interested and check them carefully before we bring you an offer.": "إيجاد المستأجر أو المشتري المناسب يحتاج إلى وقت، والأخطاء قد تكون مكلفة. نعلن عن عقارك ونلتقي بالمهتمين ونتحقق منهم بعناية قبل أن نعرض عليك أي عرض.",
  "Once the deal is done we can keep looking after the property: collecting the rent, arranging repairs and sending you simple updates, so your investment stays safe and profitable.": "بعد إتمام الصفقة يمكننا الاستمرار في رعاية العقار: تحصيل الإيجار وترتيب الإصلاحات وإرسال تقارير بسيطة إليك، ليبقى استثمارك آمنًا ومربحًا.",
  "The right tenant or buyer, a fair price and everything in writing.": "المستأجر أو المشتري المناسب، وسعر عادل، وكل شيء مكتوب.",
  "Can I choose between renting and selling later?": "هل يمكنني الاختيار بين التأجير والبيع لاحقًا؟",
  "Of course. We explain what each option could bring you, so you can decide what suits you best.": "بالطبع. نشرح لك ما يمكن أن يحققه كل خيار لتقرر ما يناسبك أكثر.",
  "How is the price decided?": "كيف يُحدد السعر؟",
  "We compare similar properties in the area and agree a fair price with you, so your property gets attention without sitting empty for months.": "نقارن بعقارات مشابهة في المنطقة ونتفق معك على سعر عادل، فيحظى عقارك بالاهتمام دون أن يبقى فارغًا لأشهر.",
  "Will you handle the contracts?": "هل تتولون العقود؟",
  "Yes. We prepare clear agreements and explain them to you, so everyone knows what has been agreed.": "نعم. نعدّ اتفاقيات واضحة ونشرحها لك ليعرف الجميع ما تم الاتفاق عليه.",
  // form messages
  "Sending...": "جارٍ الإرسال...",
  "Thank you! We received your message and will contact you soon.": "شكرًا لك! وصلتنا رسالتك وسنتواصل معك قريبًا.",
  "Something went wrong. Please try again or message us on WhatsApp.": "حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا عبر واتساب."
};

let lang = localStorage.getItem("lang") || "ar";            // Arabic is the default
const t = text => (lang === "ar" && ar[text]) || text;      // translate one string (script.js uses this too)
const originals = new Map();                                // remembers the English text of each translated text node

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";   // rtl = right-to-left layout
  if (window.refreshCards) refreshCards();                        // redraw the property cards

  // 1. Text on the page: remember the English once, then swap
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const n = walker.currentNode;
    if (!originals.has(n) && ar[n.nodeValue.trim()] && n.parentNode.tagName !== "SCRIPT") originals.set(n, n.nodeValue);
  }
  originals.forEach((english, n) => {
    if (!n.isConnected) return originals.delete(n);
    const key = english.trim();
    n.nodeValue = lang === "ar" ? english.replace(key, () => ar[key]) : english;
  });

  // 2. Placeholders and aria-labels
  document.querySelectorAll("[placeholder],[aria-label]").forEach(el => {
    ["placeholder", "aria-label"].forEach(attr => {
      if (!el.hasAttribute(attr)) return;
      if (!el.hasAttribute("data-en-" + attr)) el.setAttribute("data-en-" + attr, el.getAttribute(attr));
      el.setAttribute(attr, t(el.getAttribute("data-en-" + attr)));
    });
  });

  // 3. Browser tab title ("Home | Your Brand")
  if (!document.documentElement.dataset.title) document.documentElement.dataset.title = document.title;
  document.title = document.documentElement.dataset.title.split(" | ").map(t).join(" | ");

  // 4. The switch button always shows the OTHER language
  document.getElementById("langBtn").textContent = lang === "ar" ? "English" : "العربية";
}

document.getElementById("langBtn").addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  localStorage.setItem("lang", lang);
  applyLang();
});
