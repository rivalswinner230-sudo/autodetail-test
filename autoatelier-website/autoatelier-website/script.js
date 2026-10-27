'use strict';

// German text in the HTML is the default and remains accessible without JavaScript.
const translations = {
  "Zum Inhalt springen": "Skip to content",
  "FAHRZEUGPFLEGE": "CAR DETAILING",
  "Leistungen": "Services",
  "Preise": "Pricing",
  "Über uns": "About",
  "Galerie": "Gallery",
  "Kontakt": "Contact",
  "FAHRZEUGAUFBEREITUNG IN ÖSTERREICH": "CAR DETAILING IN AUSTRIA",
  "Perfektion steckt": "Perfection is",
  "im Detail.": "in the details.",
  "Klare Linien. Makellose Pflege. Ein frisches Fahrgefühl. Wir geben Ihrem Fahrzeug die Aufmerksamkeit, die es verdient.": "Clean lines. Impeccable care. A fresh driving experience. We give your car the attention it deserves.",
  "Leistungen entdecken": "Explore services",
  "Anfrage stellen": "Get in touch",
  "INNEN. AUSSEN. BIS INS DETAIL.": "INSIDE. OUTSIDE. EVERY DETAIL.",
  "MEHR ENTDECKEN": "EXPLORE MORE",
  "WAS WIR TUN": "WHAT WE DO",
  "Pflege, die man": "Care you can",
  "sieht und spürt.": "see and feel.",
  "Von der schnellen Auffrischung bis zur intensiven Aufbereitung – für ein Fahrzeug, in das Sie gerne einsteigen.": "From a quick refresh to an intensive detail — for a car you love stepping into.",
  "01 / INNEN": "01 / INTERIOR",
  "Innenraumreinigung": "Interior cleaning",
  "Gründliche Reinigung von Oberflächen, Polstern und schwer erreichbaren Stellen.": "Thorough cleaning of surfaces, upholstery and hard-to-reach areas.",
  "Preise ansehen": "View pricing",
  "02 / AUSSEN": "02 / EXTERIOR",
  "Außenpflege": "Exterior care",
  "Schonende Handwäsche, Felgenreinigung und ein gepflegtes Finish.": "Gentle hand wash, wheel cleaning and a refined finish.",
  "03 / FINISH": "03 / FINISH",
  "Lackaufbereitung": "Paint correction",
  "Mehr Tiefenglanz durch sorgfältige Lackpflege und Politur nach Zustand.": "Deeper shine through careful paint care and polishing tailored to its condition.",
  "Weniger Alltagsspuren.": "Fewer signs of daily wear.",
  "Mehr Freude am Fahren.": "More joy in every drive.",
  "AUTOATELIER — FAHRZEUGPFLEGE": "AUTOATELIER — CAR DETAILING",
  "TRANSPARENT & FAIR": "TRANSPARENT & FAIR",
  "Das passende Paket": "The right package",
  "für Ihr Auto.": "for your car.",
  "Einfach einsteigen oder umfassend auffrischen: Wählen Sie die Pflege, die zu Ihrem Fahrzeug passt.": "From a simple refresh to a complete clean: choose the care that fits your car.",
  "01 / BASIS": "01 / ESSENTIAL",
  "Die unkomplizierte Auffrischung für zwischendurch.": "An easy refresh whenever you need it.",
  "ab": "from",
  "Beispielpreis": "Example price",
  "Schonende Außenwäsche": "Gentle exterior wash",
  "Felgenoberflächen reinigen": "Wheel surface cleaning",
  "Innenraum saugen": "Interior vacuuming",
  "Scheiben innen & außen": "Windows inside & out",
  "Paket anfragen": "Enquire about package",
  "02 / INTENSIV": "02 / INTENSIVE",
  "UMFASSEND": "COMPREHENSIVE",
  "Für ein rundum gepflegtes Erscheinungsbild.": "For a beautifully refreshed look inside and out.",
  "Leistungen aus Fresh Start": "All Fresh Start services",
  "Intensive Innenraumreinigung": "Deep interior cleaning",
  "Kunststoff- & Detailpflege": "Plastic trim & detail care",
  "Türfalze reinigen": "Door jamb cleaning",
  "03 / PREMIUM": "03 / PREMIUM",
  "Ausführliche Pflege mit Fokus auf das Finish.": "Thorough care with an emphasis on the finish.",
  "Leistungen aus Deep Clean": "All Deep Clean services",
  "Lackzustand beurteilen": "Paint condition assessment",
  "Einstufige Lackpolitur*": "Single-stage paint polish*",
  "Schutzfinish auftragen": "Protective finish application",
  "* Umfang abhängig von Lackzustand und Fahrzeug. Alle Preise sind unverbindliche Platzhalter für diese Demo-Website – keine verbindlichen Angebote. Endpreise nach Besichtigung bzw. Vereinbarung.": "* Scope depends on paint condition and vehicle. All prices are illustrative placeholders for this demo website, not binding offers. Final prices subject to inspection or agreement.",
  "UNSERE HALTUNG": "OUR APPROACH",
  "Nicht einfach sauber.": "More than clean.",
  "Mit Hingabe gepflegt.": "Detailed with care.",
  "Autoatelier ist eine fiktive Marke für moderne Fahrzeugaufbereitung. Die Idee dahinter: sorgfältige Arbeit, klare Kommunikation und ein Blick für die kleinen Details, die den Unterschied machen.": "Autoatelier is a fictional brand for modern car detailing. The idea behind it: careful work, clear communication and attention to the small details that make all the difference.",
  "Ob Alltagsauto oder besonderes Lieblingsstück – im Mittelpunkt stehen individuelle Pflegebedürfnisse und ein Ergebnis, das zum Fahrzeug passt.": "Whether it is your daily driver or a cherished vehicle, the focus is on individual care needs and results tailored to the car.",
  "Kontakt aufnehmen": "Contact us",
  "EINBLICKE": "A CLOSER LOOK",
  "Details, die": "Details that",
  "begeistern.": "impress.",
  "Galerie-Platzhalter: Hier können später eigene, authentische Aufnahmen Ihrer Arbeit gezeigt werden.": "Gallery placeholders: add your own authentic photos of your work here later.",
  "FOTO-PLATZHALTER": "PHOTO PLACEHOLDER",
  "Innenraum": "Interior",
  "Lackfinish": "Paint finish",
  "Detailarbeit": "Detail work",
  "Ihr Auto verdient": "Your car deserves",
  "etwas Besonderes.": "something special.",
  "Sie möchten mehr zu unseren Leistungen erfahren? Schreiben Sie uns oder rufen Sie an.": "Want to know more about our services? Send us an email or give us a call.",
  "Demo-Kontaktdaten – vor Veröffentlichung ersetzen.": "Demo contact details — replace before publishing.",
  "E-MAIL": "EMAIL",
  "TELEFON (MUSTER)": "PHONE (PLACEHOLDER)",
  "STANDORT": "LOCATION",
  "Österreich · Genauen Standort ergänzen": "Austria · Add exact location",
  "Fahrzeugpflege mit Anspruch.": "Premium car care.",
  "Eine fiktive Demo-Marke.": "A fictional demo brand.",
  "Nach oben ↑": "Back to top ↑",
  "Autoatelier · Demo-Website": "Autoatelier · Demo website",
  "Hinweis: Vor dem Livegang Impressum und Datenschutzhinweise nach geltendem Recht ergänzen.": "Note: Add a legally compliant legal notice and privacy information before launch."
};

const pageMeta = {
  de: { title: 'Autoatelier | Fahrzeugpflege mit Anspruch', description: 'Autoatelier – moderne Fahrzeugaufbereitung in Österreich. Innenreinigung, Außenpflege und Lackaufbereitung. Leistungen und Beispielpreise entdecken.', ogDescription: 'Premium-Fahrzeugaufbereitung: sorgfältige Innen- und Außenpflege. Leistungen und Beispielpreise ansehen.' },
  en: { title: 'Autoatelier | Premium Car Detailing', description: 'Autoatelier – modern car detailing in Austria. Interior cleaning, exterior care and paint correction. Discover services and example prices.', ogDescription: 'Premium car detailing: careful interior and exterior care. Explore services and example prices.' }
};

const languageSelect = document.querySelector('#language-select');
const toggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('#hauptnavigation');
let activeLanguage = 'de';

// Capture original text nodes, keeping markup, icons and links intact.
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
const localizableNodes = [];
while (walker.nextNode()) {
  const node = walker.currentNode;
  const key = node.nodeValue.trim();
  if (Object.prototype.hasOwnProperty.call(translations, key)) {
    const match = node.nodeValue.match(/^(\s*)([\s\S]*?)(\s*)$/);
    localizableNodes.push({ node, german: key, before: match[1], after: match[3] });
  }
}

function setLanguage(language) {
  const selected = language === 'en' ? 'en' : 'de';
  activeLanguage = selected;
  document.documentElement.lang = selected === 'de' ? 'de-AT' : 'en';
  localizableNodes.forEach(({ node, german, before, after }) => {
    node.nodeValue = before + (selected === 'en' ? translations[german] : german) + after;
  });
  const meta = pageMeta[selected];
  document.title = meta.title;
  document.querySelector('meta[name="description"]').content = meta.description;
  document.querySelector('meta[property="og:title"]').content = meta.title;
  document.querySelector('meta[property="og:description"]').content = meta.ogDescription;
  document.querySelector('meta[property="og:locale"]').content = selected === 'de' ? 'de_AT' : 'en_US';
  document.querySelectorAll('.brand[aria-label]').forEach(el => {
    el.setAttribute('aria-label', selected === 'de' ? 'Autoatelier – zur Startseite' : 'Autoatelier – home');
  });
  const aboutImage = document.querySelector('.about-visual[role="img"]');
  if (aboutImage) aboutImage.setAttribute('aria-label', selected === 'de' ? 'Abstrakter Platzhalter für ein Foto der Fahrzeugpflege' : 'Abstract placeholder for a car detailing photo');
  if (navigation) navigation.setAttribute('aria-label', selected === 'de' ? 'Hauptnavigation' : 'Main navigation');
  if (languageSelect) languageSelect.value = selected;
  updateToggleLabel();
  try { localStorage.setItem('autoatelier-language', selected); } catch (_) { /* storage may be blocked */ }
}

function updateToggleLabel() {
  if (!toggle) return;
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-label', activeLanguage === 'de' ? (open ? 'Menü schließen' : 'Menü öffnen') : (open ? 'Close menu' : 'Open menu'));
}

function closeMenu() {
  if (!toggle || !navigation) return;
  toggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  updateToggleLabel();
}

if (toggle && navigation) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
    updateToggleLabel();
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => {
    if (!navigation.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 720) closeMenu(); });
}

if (languageSelect) {
  languageSelect.addEventListener('change', event => setLanguage(event.target.value));
}
let savedLanguage = 'de';
try { savedLanguage = localStorage.getItem('autoatelier-language') || 'de'; } catch (_) { /* storage may be blocked */ }
setLanguage(savedLanguage);

const yearElement = document.querySelector('#jahr');
if (yearElement) yearElement.textContent = String(new Date().getFullYear());
