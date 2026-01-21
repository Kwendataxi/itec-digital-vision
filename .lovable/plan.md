
# Plan de Mise à Jour - Suppression du lien site + Formulaire de Devis

## 1. Suppression du lien "itec-sarlu.com"

### Fichiers à modifier :

**`src/components/Contact.tsx`** (ligne 256)
- Supprimer la ligne `<p className="text-white/70 text-xs mt-1">itec-sarlu.com</p>` dans le placeholder de carte

**`src/components/Footer.tsx`** (lignes 154-156)
- Supprimer le lien :
```tsx
<a href="https://itec-sarlu.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm mt-1 block">
  itec-sarlu.com
</a>
```

---

## 2. Formulaire de Demande de Devis Detaille

### Approche :
Creer une nouvelle page dediee `/demande-devis` avec un formulaire complet et professionnel.

### Nouvelle page : `src/pages/DemandeDevis.tsx`

**Structure du formulaire :**

| Champ | Type | Details |
|-------|------|---------|
| Nom complet | Input text | Obligatoire |
| Email | Input email | Obligatoire, validation |
| Telephone | Input tel | Optionnel |
| Entreprise | Input text | Optionnel |
| **Service souhaite** | Select dropdown | RH, Genie Civil, Technologies, Electricite |
| **Budget estime** | Select dropdown | Moins de 5 000$, 5 000$ - 15 000$, 15 000$ - 50 000$, Plus de 50 000$, A definir |
| Description du projet | Textarea | Obligatoire, min 50 caracteres |
| **Telechargement fichiers** | Input file | Multiple, PDF/DOC/IMG, max 10MB par fichier |
| Date souhaitee de debut | Date picker (optionnel) | Calendrier |

### Design de la page :

1. **Hero compact**
   - Titre "Demande de Devis" avec animation
   - Sous-titre explicatif
   - Breadcrumb (Accueil > Demande de Devis)
   - Mesh gradient en fond

2. **Section Formulaire**
   - Carte glassmorphism centree
   - Champs organises en grille responsive
   - Labels clairs avec indicateurs obligatoires (*)
   - Zone de drag & drop pour fichiers
   - Bouton submit avec animation de chargement

3. **Sidebar Informations**
   - Pourquoi nous choisir (3 points cles)
   - Contact direct (email, telephone)
   - Delai de reponse (24-48h)

### Fichiers a modifier/creer :

| Fichier | Action |
|---------|--------|
| `src/pages/DemandeDevis.tsx` | **CREER** - Page complete du formulaire |
| `src/App.tsx` | Ajouter route `/demande-devis` |
| `src/components/Contact.tsx` | Supprimer lien site + ajouter bouton vers devis |
| `src/components/Footer.tsx` | Supprimer lien site + ajouter lien devis |
| `src/components/Navbar.tsx` | Modifier CTA "Nous contacter" vers "Demander un devis" |

### Composants UI utilises :

- `Select` (existant) - pour service et budget
- `Input` (existant) - pour les champs texte
- `Textarea` (existant) - pour la description
- `Button` (existant) - pour le submit
- `Card` (existant) - pour le conteneur
- `Calendar` (existant) - pour la date optionnelle

### Gestion des fichiers uploades :

```tsx
// Zone de drop avec apercu des fichiers
const [files, setFiles] = useState<File[]>([]);

// Validation : max 5 fichiers, max 10MB chacun
// Types acceptes : .pdf, .doc, .docx, .jpg, .png, .zip
```

### Validation du formulaire :

- Utilisation de **Zod** + **react-hook-form** pour validation robuste
- Messages d'erreur en francais
- Validation temps reel des champs

### Animation et UX :

- Animation d'entree staggered sur les champs
- Focus ring avec gradient
- Bouton submit avec loader anime
- Toast de confirmation apres envoi
- Redirection vers page d'accueil apres succes

---

## 3. Resume des Modifications

```text
SUPPRIMER :
- Contact.tsx ligne 256 : texte "itec-sarlu.com"
- Footer.tsx lignes 154-156 : lien "itec-sarlu.com"

CREER :
- src/pages/DemandeDevis.tsx : Formulaire complet

MODIFIER :
- App.tsx : Ajouter route /demande-devis
- Navbar.tsx : CTA vers demande de devis
- Contact.tsx : Bouton vers demande de devis
- Footer.tsx : Lien vers demande de devis
```

---

## 4. Resultat Attendu

- Plus de lien "itec-sarlu.com" visible sur le site
- Nouvelle page professionnelle `/demande-devis`
- Formulaire complet avec selection de service, budget et upload de fichiers
- Experience utilisateur fluide avec animations premium
- Validation robuste et feedback utilisateur clair
