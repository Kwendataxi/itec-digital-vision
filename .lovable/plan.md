

# Plan - Integration Optimale des Images ITEC

## Analyse des Images Fournies

| Image | Contenu | Usage Optimal |
|-------|---------|---------------|
| `IMG-20251202-WA0003.jpg` | Technicien ITEC avec casque devant bulldozer | Page Genie Civil (Hero) |
| `IMG-20251202-WA0001.jpg` | Equipe en reunion sur chantier | Section About (image equipe) |
| `IMG-20251202-WA0004.jpg` | Bulldozer SD22 ITEC | Section Services (Genie Civil) |
| `IMG-20251202-WA0000.jpg` | Ouvrier supervisant construction | Page Genie Civil (section prestations) |
| `IMG-20251202-WA0022.jpg` | Directeur au bureau | Section WhyChoose ou Contact |
| `IMG-20251202-WA0024.jpg` | Professionnel dans couloir bureaux | Page RH (Hero) |
| `IMG-20251202-WA0025.jpg` | Deux professionnels devant enseigne ITEC | Section About ou Footer |
| `IMG-20251202-WA0018.jpg` | Deux employees avec banner ITEC | Page RH (section prestations) |

---

## 1. Copier les Images dans le Projet

Copier toutes les images dans `src/assets/` avec des noms descriptifs :

```text
user-uploads://IMG-20251202-WA0003.jpg -> src/assets/itec-technicien-chantier.jpg
user-uploads://IMG-20251202-WA0001.jpg -> src/assets/itec-equipe-terrain.jpg
user-uploads://IMG-20251202-WA0004.jpg -> src/assets/itec-bulldozer.jpg
user-uploads://IMG-20251202-WA0000.jpg -> src/assets/itec-supervision-construction.jpg
user-uploads://IMG-20251202-WA0022.jpg -> src/assets/itec-directeur.jpg
user-uploads://IMG-20251202-WA0024.jpg -> src/assets/itec-bureau-professionnel.jpg
user-uploads://IMG-20251202-WA0025.jpg -> src/assets/itec-accueil-equipe.jpg
user-uploads://IMG-20251202-WA0018.jpg -> src/assets/itec-equipe-rh.jpg
```

---

## 2. Section About - Image Equipe

### Modifier `src/components/About.tsx`

Remplacer `team-itec.jpg` par `itec-equipe-terrain.jpg` (equipe en reunion sur chantier) :

```tsx
import teamImage from "@/assets/itec-equipe-terrain.jpg";
```

Cette image montre une vraie equipe ITEC en action, plus authentique.

---

## 3. Section Services - Images par Domaine

### Modifier `src/components/Services.tsx`

Remplacer les images generiques par les vraies photos ITEC :

| Service | Image Actuelle | Nouvelle Image |
|---------|----------------|----------------|
| Genie Civil | `construction.jpg` | `itec-bulldozer.jpg` |
| Technologies | `technology.jpg` | Garder (pas de photo techno disponible) |
| Electricite | `electrical.jpg` | Garder (pas de photo elec disponible) |

Ajouter aussi une image pour RH (actuellement sans image) :

```tsx
// Ajouter dans le service RH
image: rhTeamImg,  // itec-equipe-rh.jpg
```

---

## 4. Page Genie Civil - Hero avec Image Authentique

### Modifier `src/pages/services/GenieCivil.tsx`

Remplacer l'image hero par le technicien sur chantier :

```tsx
import heroImage from "@/assets/itec-technicien-chantier.jpg";
```

Cette image avec l'employe ITEC devant le bulldozer est parfaite pour cette page.

---

## 5. Page RH - Images de l'Equipe Bureau

### Modifier `src/pages/services/RessourcesHumaines.tsx`

Ajouter une image hero avec le professionnel dans le bureau :

```tsx
import heroImage from "@/assets/itec-bureau-professionnel.jpg";
```

Ajouter aussi une section galerie ou image secondaire avec `itec-equipe-rh.jpg`.

---

## 6. Section WhyChoose - Image Directeur

### Modifier `src/components/WhyChoose.tsx`

Ajouter une image du directeur au travail pour renforcer la credibilite :

- Ajouter une colonne avec l'image `itec-directeur.jpg`
- Positionner a cote des statistiques

---

## 7. Section Contact ou Footer - Image Accueil

### Option : Modifier `src/components/Contact.tsx`

Utiliser `itec-accueil-equipe.jpg` (deux personnes devant enseigne lumineuse) pour montrer l'accueil professionnel.

---

## Resume des Modifications

| Fichier | Image Utilisee | Contexte |
|---------|----------------|----------|
| `src/components/About.tsx` | `itec-equipe-terrain.jpg` | Section A Propos - equipe |
| `src/components/Services.tsx` | `itec-bulldozer.jpg` | Carte Genie Civil |
| `src/components/Services.tsx` | `itec-equipe-rh.jpg` | Carte RH (nouvelle image) |
| `src/pages/services/GenieCivil.tsx` | `itec-technicien-chantier.jpg` | Hero background |
| `src/pages/services/RessourcesHumaines.tsx` | `itec-bureau-professionnel.jpg` | Hero background |
| `src/components/WhyChoose.tsx` | `itec-directeur.jpg` | Section credibilite |
| `src/components/Contact.tsx` | `itec-accueil-equipe.jpg` | Section contact |

---

## Resultat Attendu

- Images authentiques ITEC sur toutes les sections cles du site
- Meilleure credibilite avec de vraies photos d'equipe
- Coherence visuelle avec l'identite de marque ITEC
- Remplacement des images stock par du contenu reel

