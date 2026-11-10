// =====================================================================
//  RÉGLAGES DU SITE : tout ce qu'il faut changer pour un nouveau client
// =====================================================================
const CONFIG = {
  nom: "La Ferme des Quatre Saisons",
  slogan:
    "Légumes, fruits, œufs et viande produits sur notre exploitation et vendus en direct, chaque semaine, au marché de la ferme.",
  presentation:
    "Depuis trois générations, notre famille cultive et élève sur place. Chaque semaine, " +
    "nous proposons ce que la saison permet de récolter, cueilli au plus près de la vente. " +
    "Venez nous rencontrer au marché de la ferme.",
  telephone: "06 00 00 00 00",
  adresse: "Chemin de la Ferme, 00000 Votre Ville",
  horaires: [
    ["Mercredi", "15h00 – 19h00"],
    ["Vendredi", "15h00 – 19h00"],
    ["Samedi", "9h00 – 12h30"],
  ],

  // Lien CSV du Google Sheets publié (Fichier > Partager > Publier sur le Web > CSV).
  // Laissez vide pour afficher les produits d'exemple ci-dessous.
  sheetCsvUrl: "",
};

// Produits affichés si aucun Google Sheets n'est relié (ou s'il ne répond pas).
const PRODUITS_EXEMPLE = [
  { produit: "Carottes", categorie: "Légumes", prix: "2,50 €", unite: "le kg", disponible: "oui" },
  { produit: "Poireaux", categorie: "Légumes", prix: "3,00 €", unite: "la botte", disponible: "oui" },
  { produit: "Courge butternut", categorie: "Légumes", prix: "2,80 €", unite: "le kg", disponible: "oui" },
  { produit: "Pommes de terre", categorie: "Légumes", prix: "1,90 €", unite: "le kg", disponible: "non" },
  { produit: "Pommes Reinette", categorie: "Fruits", prix: "3,20 €", unite: "le kg", disponible: "oui" },
  { produit: "Poires", categorie: "Fruits", prix: "3,50 €", unite: "le kg", disponible: "oui" },
  { produit: "Œufs plein air", categorie: "Œufs", prix: "3,60 €", unite: "la douzaine", disponible: "oui" },
  { produit: "Poulet fermier", categorie: "Viande", prix: "11,90 €", unite: "le kg", disponible: "oui" },
  { produit: "Saucisses maison", categorie: "Viande", prix: "15,00 €", unite: "le kg", disponible: "non" },
  { produit: "Miel de fleurs", categorie: "Épicerie", prix: "8,50 €", unite: "le pot de 500 g", disponible: "oui" },
];

// =====================================================================
//  Icônes (traits SVG). Le code ci-dessous n'a normalement pas besoin
//  d'être modifié.
// =====================================================================
const ICONES = {
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  arrowRight: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  navigation: '<path d="M3 11l19-9-9 19-2-8-8-2z"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  sprout: '<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
  store: '<path d="M3 9l1.5-5h15L21 9"/><path d="M4 9v11h16V9"/><path d="M3 9h18"/><path d="M9 20v-6h6v6"/>',
  handshake: '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
  carrot: '<path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7z"/><path d="M8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"/><path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"/><path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"/>',
  apple: '<path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/>',
  egg: '<path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"/>',
  beef: '<circle cx="12.5" cy="8.5" r="2.5"/><path d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"/><path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"/>',
  milk: '<path d="M8 2h8"/><path d="M9 2v2.79a4 4 0 0 1-.67 2.22l-.66.98A4 4 0 0 0 7 10.21V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.79a4 4 0 0 0-.67-2.22l-.66-.98A4 4 0 0 1 15 4.79V2"/><path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"/>',
  cheese: '<path d="M3 18h18v-7L11 5 3 11z"/><path d="M3 11h18"/><circle cx="8" cy="14.5" r="1"/><circle cx="15" cy="15" r="1.3"/>',
  jar: '<path d="M8 2h8v3H8z"/><path d="M7 5h10a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/><path d="M5 11h14M5 17h14"/>',
  wheat: '<path d="M2 22 16 8"/><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
};

// Icône utilisée pour chaque catégorie du tableau (nom sans accent ni majuscule)
const ICONE_CATEGORIE = {
  legumes: "carrot", fruits: "apple", oeufs: "egg", viande: "beef", viandes: "beef",
  fromages: "cheese", fromage: "cheese", laitages: "milk", lait: "milk",
  epicerie: "jar", miel: "jar", pain: "wheat", cereales: "wheat",
};

function icone(nom) {
  return '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONES[nom] || ICONES.sprout) + "</svg>";
}

// Enlève accents et majuscules : "Légumes" -> "legumes", "Œufs" -> "oeufs"
function normaliser(texte) {
  return String(texte || "")
    .trim()
    .toLowerCase()
    .replace(/œ/g, "oe")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

function echapper(texte) {
  const div = document.createElement("div");
  div.textContent = texte == null ? "" : String(texte);
  return div.innerHTML;
}

// Lit un fichier CSV (gère les guillemets et les virgules dans les cellules)
function lireCSV(texte) {
  const lignes = [];
  let ligne = [], champ = "", entreGuillemets = false;
  for (let i = 0; i < texte.length; i++) {
    const c = texte[i];
    if (entreGuillemets) {
      if (c === '"') {
        if (texte[i + 1] === '"') { champ += '"'; i++; }
        else entreGuillemets = false;
      } else champ += c;
    } else if (c === '"') entreGuillemets = true;
    else if (c === ",") { ligne.push(champ); champ = ""; }
    else if (c === "\n") { ligne.push(champ); lignes.push(ligne); ligne = []; champ = ""; }
    else if (c !== "\r") champ += c;
  }
  if (champ || ligne.length) { ligne.push(champ); lignes.push(ligne); }

  const entetes = lignes.shift().map(normaliser);
  return lignes
    .filter((l) => l.some((cellule) => cellule.trim() !== ""))
    .map((l) => Object.fromEntries(entetes.map((e, i) => [e, (l[i] || "").trim()])));
}

async function chargerProduits() {
  if (!CONFIG.sheetCsvUrl) return PRODUITS_EXEMPLE;
  try {
    // "t=" évite que le navigateur garde une ancienne version en mémoire
    const separateur = CONFIG.sheetCsvUrl.includes("?") ? "&" : "?";
    const reponse = await fetch(CONFIG.sheetCsvUrl + separateur + "t=" + Date.now());
    if (!reponse.ok) throw new Error("HTTP " + reponse.status);
    return lireCSV(await reponse.text());
  } catch (e) {
    console.warn("Google Sheets indisponible, produits d'exemple affichés :", e);
    return PRODUITS_EXEMPLE;
  }
}

// ===== Produits et filtres =====
let tousLesProduits = [];
let categorieActive = "Tout";

function estEpuise(p) {
  return ["non", "epuise", "0", "x"].includes(normaliser(p.disponible));
}

function afficherFiltres() {
  const categories = [...new Set(tousLesProduits.map((p) => p.categorie || "Autres"))];
  const boutons = [["Tout", "grid", tousLesProduits.length]].concat(
    categories.map((c) => [
      c,
      ICONE_CATEGORIE[normaliser(c)] || "sprout",
      tousLesProduits.filter((p) => (p.categorie || "Autres") === c).length,
    ])
  );

  const zone = document.getElementById("filtres");
  zone.innerHTML = boutons.map(([nom, ic, nb]) => `
    <button class="filtre${nom === categorieActive ? " actif" : ""}" role="tab"
            aria-selected="${nom === categorieActive}" data-categorie="${echapper(nom)}">
      ${icone(ic)}<span>${echapper(nom)}</span><span class="filtre-compte">${nb}</span>
    </button>`).join("");

  zone.querySelectorAll(".filtre").forEach((bouton) => {
    bouton.addEventListener("click", () => {
      categorieActive = bouton.dataset.categorie;
      afficherFiltres();
      afficherProduits();
    });
  });
}

function afficherProduits() {
  const zone = document.getElementById("liste-produits");
  const liste = tousLesProduits.filter(
    (p) => categorieActive === "Tout" || (p.categorie || "Autres") === categorieActive
  );

  if (liste.length === 0) {
    zone.innerHTML = '<p class="message">La liste des produits sera bientôt disponible. Appelez-nous pour connaître les arrivages.</p>';
    return;
  }

  zone.innerHTML = liste.map((p) => {
    const epuise = estEpuise(p);
    const cat = p.categorie || "Autres";
    return `
      <article class="produit${epuise ? " epuise" : ""}">
        <div class="produit-haut">
          <span class="produit-icone">${icone(ICONE_CATEGORIE[normaliser(cat)] || "sprout")}</span>
          <span class="badge">${epuise ? "Épuisé" : "Disponible"}</span>
        </div>
        <div>
          <p class="produit-categorie">${echapper(cat)}</p>
          <h3 class="produit-nom">${echapper(p.produit)}</h3>
        </div>
        <div class="produit-bas">
          <span class="produit-prix">${echapper(p.prix)}</span>
          <span class="produit-unite">${echapper(p.unite)}</span>
        </div>
      </article>`;
  }).join("");
}

// ===== Jour du marché =====
const JOURS = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

function prochainMarche() {
  const aujourdhui = new Date().getDay();
  for (let ecart = 0; ecart < 7; ecart++) {
    const jour = JOURS[(aujourdhui + ecart) % 7];
    const creneau = CONFIG.horaires.find(([j]) => normaliser(j) === jour);
    if (creneau) return { ecart, jour: creneau[0], heures: creneau[1] };
  }
  return null;
}

function afficherStatut() {
  const marche = prochainMarche();
  if (!marche) return;
  const quand = marche.ecart === 0 ? "Aujourd'hui" : marche.ecart === 1 ? "Demain" : marche.jour;

  const statut = document.getElementById("statut");
  statut.classList.toggle("ouvert", marche.ecart === 0);
  document.getElementById("statut-texte").textContent =
    (marche.ecart === 0 ? "Marché aujourd'hui" : "Prochain marché : " + quand.toLowerCase()) +
    " · " + marche.heures;

  document.getElementById("carte-label").textContent = marche.ecart === 0 ? "Marché aujourd'hui" : "Prochain marché";
  document.getElementById("carte-valeur").textContent = quand + " · " + marche.heures;
}

// ===== Informations générales =====
function remplirInfos() {
  document.title = CONFIG.nom + " – Marché à la ferme";

  document.querySelectorAll("[data-config]").forEach((el) => {
    el.textContent = CONFIG[el.dataset.config] || "";
  });

  document.querySelectorAll("[data-icon]").forEach((el) => {
    el.outerHTML = icone(el.dataset.icon);
  });

  const lienTel = "tel:" + CONFIG.telephone.replace(/\s/g, "");
  document.querySelectorAll("[data-tel]").forEach((el) => {
    el.href = lienTel;
    if (!el.textContent.trim()) el.textContent = CONFIG.telephone;
  });

  const aujourdhui = JOURS[new Date().getDay()];
  document.getElementById("liste-horaires").innerHTML = CONFIG.horaires
    .map(([jour, heures]) => `
      <tr${normaliser(jour) === aujourdhui ? ' class="aujourdhui"' : ""}>
        <td>${echapper(jour)}</td><td>${echapper(heures)}</td>
      </tr>`)
    .join("");

  document.getElementById("footer-horaires").innerHTML = CONFIG.horaires
    .map(([jour, heures]) => `<p class="footer-horaires-ligne"><span>${echapper(jour)}</span><span>${echapper(heures)}</span></p>`)
    .join("");

  const adresse = encodeURIComponent(CONFIG.adresse);
  document.getElementById("carte").src = "https://maps.google.com/maps?q=" + adresse + "&output=embed";
  document.getElementById("itineraire").href = "https://www.google.com/maps/dir/?api=1&destination=" + adresse;
  document.getElementById("annee").textContent = new Date().getFullYear();

  afficherStatut();
}

remplirInfos();
chargerProduits().then((produits) => {
  tousLesProduits = produits.filter((p) => p.produit);
  afficherFiltres();
  afficherProduits();
});
