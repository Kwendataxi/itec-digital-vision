

# Plan de Mise à Jour Complète - ITEC

## 1. Correction des Informations de l'Entreprise

### Fichiers concernés et modifications :

| Fichier | Correction |
|---------|------------|
| `src/components/About.tsx` | 15+ → **5+** ans, 200+ → **100+** projets |
| `src/components/WhyChoose.tsx` | 15+ → **5+** ans, 200+ → **100+** projets, 100+ → **30+** experts |
| `src/components/Contact.tsx` | Email: **infos@itec-sarlu.com**, Adresses: **Kinshasa & Lubumbashi** |
| `src/components/Footer.tsx` | Email: **infos@itec-sarlu.com**, Adresses: **Kinshasa & Lubumbashi** |

---

## 2. Effet Parallaxe sur les Images de Fond

### Approche technique :
- Utiliser `framer-motion` avec `useScroll()` et `useTransform()` pour créer un effet parallaxe fluide et performant
- Appliquer sur les images de fond des sections : Hero, Services (images des cartes), About (image équipe)

### Sections à modifier :

**Hero Section** (`Hero.tsx`)
- L'image de fond bougera légèrement plus lentement que le scroll
- Transformation: `translateY` de 0 à 30% selon la position du scroll

**About Section** (`About.tsx`)
- Image de l'équipe avec effet parallaxe subtil (translateY inverse)
- Mouvement de -20% à +10% sur le scroll

**Services Section** (`Services.tsx`)
- Images des cartes services avec parallaxe léger au scroll dans la section
- Scale et translateY subtils

---

## 3. Pages Dédiées pour Chaque Service

### Nouvelles pages à créer :

| Page | Route | Service |
|------|-------|---------|
| `src/pages/services/RessourcesHumaines.tsx` | `/services/rh` | Gestion RH |
| `src/pages/services/GenieCivil.tsx` | `/services/genie-civil` | Construction |
| `src/pages/services/Technologies.tsx` | `/services/technologies` | Tech & Topographie |
| `src/pages/services/Electricite.tsx` | `/services/electricite` | Électricité |

### Structure de chaque page service :

1. **Hero Section**
   - Titre du service avec animation
   - Description courte
   - Image de fond avec parallaxe
   - Breadcrumb (Accueil > Services > [Nom du service])

2. **Section Présentation**
   - Description détaillée du service
   - Points clés avec icônes animées
   - Image ou illustration

3. **Section Prestations Détaillées**
   - Liste des prestations en cartes glassmorphism
   - Animations d'entrée staggered
   - Icônes pour chaque prestation

4. **Section Processus/Méthodologie**
   - Étapes de travail en timeline
   - Animation de progression au scroll

5. **Section CTA**
   - Appel à l'action pour demander un devis
   - Bouton contact avec effet glow

### Fichiers à créer :
```
src/pages/services/
├── RessourcesHumaines.tsx
├── GenieCivil.tsx
├── Technologies.tsx
├── Electricite.tsx
└── index.ts (exports)
```

### Modifier `App.tsx` :
- Ajouter les nouvelles routes pour chaque service

### Modifier `Services.tsx` :
- Les boutons "En savoir plus" redirigeront vers les pages dédiées avec `<Link to="/services/...">`

---

## 4. Modifications par Fichier

### `src/components/Hero.tsx`
- Ajouter `useScroll()` et `useTransform()` pour effet parallaxe sur l'image de fond
- L'image se déplace à 50% de la vitesse du scroll

### `src/components/About.tsx`
- Corriger : `yearsCount = useCountUp(5, ...)` 
- Corriger : `projectsCount = useCountUp(100, ...)`
- Corriger texte "15+ ans" → "5+ ans"
- Ajouter parallaxe sur l'image de l'équipe

### `src/components/WhyChoose.tsx`
- Corriger les stats : 5+ ans, 100+ projets, 50+ clients, 30+ experts
- Ajouter parallaxe sur le fond de la section stats

### `src/components/Contact.tsx`
- Email : `infos@itec-sarlu.com`
- Téléphone : garder le format actuel (à confirmer)
- Adresses : `Kinshasa & Lubumbashi, RD Congo`
- Ajouter les deux villes dans l'affichage

### `src/components/Footer.tsx`
- Mettre à jour l'email et les adresses
- Ajouter lien vers le site : `itec-sarlu.com`
- Afficher les deux bureaux (Kinshasa & Lubumbashi)

### `src/components/Services.tsx`
- Ajouter un attribut `slug` à chaque service pour les liens
- Transformer les boutons "En savoir plus" en `<Link>` vers les pages dédiées
- Ajouter effet parallaxe sur les images des cartes

### `src/App.tsx`
- Ajouter les imports des pages services
- Ajouter les routes `/services/rh`, `/services/genie-civil`, `/services/technologies`, `/services/electricite`

---

## 5. Composant Parallaxe Réutilisable

### Créer `src/components/ParallaxImage.tsx`
```typescript
// Composant réutilisable pour effet parallaxe
// Props: src, alt, speed (0.1 à 0.5), className
// Utilise useScroll et useTransform de framer-motion
```

---

## 6. Résumé des Fichiers

| Action | Fichiers |
|--------|----------|
| **Modifier** | `Hero.tsx`, `About.tsx`, `WhyChoose.tsx`, `Contact.tsx`, `Footer.tsx`, `Services.tsx`, `App.tsx` |
| **Créer** | `ParallaxImage.tsx`, `services/RessourcesHumaines.tsx`, `services/GenieCivil.tsx`, `services/Technologies.tsx`, `services/Electricite.tsx` |

---

## 7. Design des Pages Services

Chaque page service aura :
- **Mesh gradient** en arrière-plan
- **Glassmorphism** sur les cartes
- **Compteurs animés** (si statistiques)
- **Parallaxe** sur l'image hero
- **Animations stagger** sur les listes
- **Bouton CTA** avec effet glow
- **Navigation retour** avec breadcrumb animé

