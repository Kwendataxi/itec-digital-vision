

# Plan de Correction - Pages de Services + Logo Optimise

## Probleme Identifie

Les pages de services affichent une erreur 404 car les routes ne correspondent pas :

| Route definie dans App.tsx | URL attendue par l'utilisateur |
|---------------------------|-------------------------------|
| `/services/genie-civil` | `/genie-civil` |
| `/services/rh` | `/rh` |
| `/services/technologies` | `/technologies` |
| `/services/electricite` | `/electricite` |

---

## 1. Correction du Routage

### Modifier `src/App.tsx`

Simplifier les routes pour des URLs plus courtes et intuitives :

```text
AVANT :
- /services/rh
- /services/genie-civil
- /services/technologies
- /services/electricite

APRES :
- /rh
- /genie-civil
- /technologies
- /electricite
```

---

## 2. Mise a Jour des Liens Internes

### Modifier `src/components/Services.tsx`

Les liens "En savoir plus" pointent vers `/services/${slug}`. Il faut les mettre a jour :

```tsx
// AVANT
<Link to={`/services/${service.slug}`}>

// APRES
<Link to={`/${service.slug}`}>
```

### Modifier les Breadcrumbs dans chaque page service

Les pages `RessourcesHumaines.tsx`, `GenieCivil.tsx`, `Technologies.tsx`, `Electricite.tsx` ont des breadcrumbs qui pointent vers `/#services`. Ils resteront fonctionnels.

---

## 3. Agrandissement du Logo (Navbar)

### Modifier `src/components/Navbar.tsx`

Agrandir le logo de maniere optimale et elegante :

| Etat | Taille actuelle | Nouvelle taille |
|------|-----------------|-----------------|
| Normal (haut de page) | `h-12 md:h-14` | **`h-14 md:h-16 lg:h-18`** |
| Scrolled (defilé) | `h-10 md:h-12` | **`h-12 md:h-14`** |
| Mobile menu | `h-16` | **`h-20`** |

Ajouter aussi une legere ombre pour plus d'elegance :
```tsx
className="drop-shadow-md"
```

---

## 4. Agrandissement du Logo (Footer)

### Modifier `src/components/Footer.tsx`

Agrandir le logo dans le footer pour une meilleure visibilite :

```text
AVANT : h-12
APRES : h-16 md:h-20
```

---

## Resume des Modifications

| Fichier | Action |
|---------|--------|
| `src/App.tsx` | Simplifier les routes (retirer `/services/`) |
| `src/components/Services.tsx` | Mettre a jour les liens vers les nouvelles routes |
| `src/components/Navbar.tsx` | Agrandir le logo (h-14 a h-18) + ombre elegante |
| `src/components/Footer.tsx` | Agrandir le logo (h-16 a h-20) |

---

## Resultat Attendu

- Toutes les pages de services seront accessibles aux URLs simplifiees
- `/genie-civil`, `/rh`, `/technologies`, `/electricite` fonctionneront correctement
- Logo plus grand et plus visible dans le header et le footer
- Experience utilisateur fluide et coherente

