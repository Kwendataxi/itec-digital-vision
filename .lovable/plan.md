

# Plan - Migration vers la Police Montserrat

## Objectif

Remplacer la police **Inter** par **Montserrat** pour un look plus moderne et dynamique.

### Pourquoi Montserrat ?

| Caracteristique | Inter | Montserrat |
|-----------------|-------|------------|
| Style | Neutre, technique | Moderne, geometrique |
| Personnalite | Sobre, minimaliste | Vivante, elegante |
| Lisibilite | Excellente | Excellente |
| Usage ideal | Tech, SaaS | Branding, Corporate |

---

## Fichiers a Modifier

### 1. `index.html` (ligne 13)

**Avant :**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

**Apres :**
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

- Ajout du poids **900** (Black) pour les titres impactants
- Suppression de Inter

---

### 2. `tailwind.config.ts` (ligne 17)

**Avant :**
```ts
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
},
```

**Apres :**
```ts
fontFamily: {
  sans: ['Montserrat', 'system-ui', 'sans-serif'],
},
```

---

### 3. `src/index.css` (ligne 78-79)

Ajouter des styles specifiques pour optimiser Montserrat :

```css
body {
  @apply bg-background text-foreground font-sans antialiased;
  font-feature-settings: "cv02", "cv03", "cv04", "cv11";
  letter-spacing: -0.01em;
}

h1, h2, h3, h4, h5, h6 {
  @apply font-bold tracking-tight;
  letter-spacing: -0.02em;
}
```

- `letter-spacing` legerement negatif pour un look plus moderne
- `font-bold` par defaut pour les titres avec Montserrat

---

## Resume des Modifications

| Fichier | Modification |
|---------|--------------|
| `index.html` | Remplacer Google Fonts Inter par Montserrat |
| `tailwind.config.ts` | Changer `font-sans` de Inter a Montserrat |
| `src/index.css` | Optimiser le letter-spacing pour Montserrat |

---

## Resultat Attendu

- Police **Montserrat** appliquee sur tout le site
- Titres plus impactants avec le poids 700-900
- Textes corporels plus vivants et modernes
- Meilleure harmonie avec le style premium du site ITEC

