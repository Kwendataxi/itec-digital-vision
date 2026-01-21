

# Plan - Uniformiser l'Affichage des Details des Services

## Analyse

En comparant les cartes de services sur la page d'accueil (`src/components/Services.tsx`), toutes les cartes utilisent la meme structure mais ont un nombre different de features :

| Service | Nombre de features |
|---------|-------------------|
| Ressources Humaines | 6 |
| Genie Civil | 5 |
| Technologies | 6 |
| Electricite | 5 |

## Solution : Uniformiser a 5 features par service

### Fichier : `src/components/Services.tsx`

**Modifier le tableau `services` (lignes 47-110)**

### Ressources Humaines - Reduire de 6 a 5 features

```tsx
features: [
  "Recrutement et placement de personnel",
  "Gestion de la paie et administration",
  "Suivi quotidien du personnel",
  "Declarations fiscales et sociales",
  "Prise en charge medicale & Visas",  // Fusionner les 2 derniers
],
```

### Genie Civil - Garder tel quel (5 features)

```tsx
features: [
  "Construction de routes et batiments",
  "Ponts et ouvrages d'art",
  "Canalisation et curage",
  "Maintenance technique",
  "Housekeeping & espaces verts",
],
```

### Technologies - Reduire de 6 a 5 features

```tsx
features: [
  "Cubage des remblais",
  "Leves topographiques",
  "Implantation et alignement",
  "Alarmes anti-intrusion / anti-feu",
  "Videosurveillance & Controle d'acces",  // Fusionner les 2 derniers
],
```

### Electricite - Garder tel quel (5 features)

```tsx
features: [
  "Production, transport, distribution",
  "Installation electrique",
  "Maintenance electrique",
  "Fourniture de materiaux",
  "Produits alimentaires et de bureau",
],
```

## Resume des Modifications

| Fichier | Modification |
|---------|--------------|
| `Services.tsx` | Uniformiser toutes les cartes a 5 features maximum |

## Resultat Attendu

- Toutes les cartes de services auront exactement 5 points
- Affichage visuellement harmonise et equilibre
- Meme hauteur de carte pour tous les services

