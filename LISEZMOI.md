# Site démo : marché à la ferme

## Les fichiers
- `index.html` : la structure de la page
- `style.css` : les couleurs et la mise en page (couleurs modifiables en haut du fichier)
- `script.js` : **les réglages du client** (nom, téléphone, adresse, horaires) tout en haut, dans `CONFIG`
- `produits-exemple.csv` : un tableau de produits à importer dans Google Sheets

## Voir le site
Double-cliquez sur `index.html`. Il s'ouvre dans votre navigateur.
Dans VS Code, l'extension **Live Server** permet de voir les changements en direct (clic droit sur `index.html` > *Open with Live Server*).

## Relier les produits à Google Sheets
1. Créez un Google Sheets (avec le compte Google **du client**).
2. Fichier > Importer > Importer `produits-exemple.csv`.
3. Gardez ces colonnes sur la 1re ligne : `Produit | Catégorie | Prix | Unité | Disponible`.
4. Fichier > Partager > **Publier sur le Web** > choisissez la feuille, puis le format **CSV (.csv)** > Publier.
5. Copiez le lien obtenu et collez-le dans `script.js`, à la ligne `sheetCsvUrl: ""`.

Pour le client ensuite :
- **Ajouter un produit** : une nouvelle ligne.
- **Produit épuisé** : écrire `non` dans la colonne *Disponible*.
- **Retirer un produit** : supprimer la ligne.
- Les changements apparaissent sur le site au bout de quelques minutes (délai de Google).

## Mettre le site en ligne avec Railway
Le code est sur GitHub (dépôt `Demo-Site`). Railway le récupère et le met en ligne.
Le fichier `package.json` dit à Railway comment lancer le site (petit serveur `serve`).

1. Sur **railway.com**, connectez-vous avec votre compte GitHub.
2. **New Project** > **Deploy from GitHub repo** > choisissez `Demo-Site`.
3. Attendez la fin du déploiement (pastille verte).
4. Dans le service : **Settings** > **Networking** > **Generate Domain**.
   Vous obtenez une adresse du type `demo-site-production.up.railway.app`.
5. À chaque `git push` sur GitHub, Railway remet le site à jour tout seul.

Pour un vrai nom (ex. `ferme-xxx.fr`) : achetez-le au nom du client (OVH, Gandi…),
puis ajoutez-le dans Railway (*Settings* > *Networking* > *Custom Domain*).

Lancer le serveur sur votre PC (facultatif) : `npm install` puis `npx serve .`

## Pour la démo à montrer aux commerçants
Changez le nom, le slogan et les produits dans `script.js` pour coller au commerce visé,
envoyez les changements sur GitHub (`git push`) et mettez le lien Railway dans votre message.
N'utilisez que des informations vraies (horaires, adresse) ou clairement fictives.
