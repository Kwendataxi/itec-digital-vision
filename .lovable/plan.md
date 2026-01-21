

# Plan - Modernisation de la Section Kwenda et Page Projet

## Objectif

Simplifier et moderniser la presentation du projet Kwenda sur la page d'accueil ET la page dediee, en utilisant l'image publicitaire officielle et en supprimant les elements superflus.

---

## 1. Modifier la Section Projets (Homepage)

### Fichier : `src/components/Projects.tsx`

**Changements a effectuer :**

| Element | Action |
|---------|--------|
| Badge "Projet Majeur" (lignes 76-87) | Supprimer completement |
| Image mockup | Remplacer par l'image publicitaire `kwenda-campaign.png` |
| Description | Simplifier avec le slogan officiel |

**Code a supprimer (lignes 75-88) :**
```tsx
<div className="relative">
  <motion.div 
    className="absolute top-4 right-4 z-10"
    ...
  >
    <div className="gradient-primary ...">
      <Star className="w-4 h-4 fill-current" />
      Projet Majeur
    </div>
  </motion.div>
</div>
```

**Image a modifier (ligne 92) :**
```tsx
// Avant
src={kwendaMockup}

// Apres
src={kwendaCampaign}
```

**Description simplifiee :**
```tsx
<p className="text-lg text-muted-foreground mb-6 leading-relaxed">
  Simplifiez vos trajets, profitez de chaque instant. 
  Plateforme de transport et livraison en RD Congo.
</p>
```

---

## 2. Moderniser la Page Kwenda

### Fichier : `src/pages/Kwenda.tsx`

**Objectifs :**
- Design plus epure et professionnel
- Reduire la surcharge visuelle
- Garder les elements essentiels

### Changements proposes :

| Section | Modification |
|---------|--------------|
| Hero | Simplifier les effets de fond, focus sur l'image et le slogan |
| Badge "Projet Phare" (ligne 105-113) | Supprimer pour plus de legerete |
| Features (6 cards) | Regrouper en 4 cards maximum ou afficher en grille 2x2 sur mobile |
| Services Types | Grille 3 colonnes au lieu de 4 (seulement 3 services definis) |
| Effets d'animation | Reduire les animations flottantes excessives |

### Section Hero simplifiee :

**Supprimer les cercles animes excessifs :**
```tsx
// Supprimer ou reduire l'opacite de ces elements (lignes 79-88)
<motion.div
  className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
  ...
/>
```

**Simplifier a un seul effet de fond subtil.**

### Reduire les Features a 4 essentielles :

```tsx
const features = [
  {
    icon: Smartphone,
    title: "Application Mobile",
    description: "Interface intuitive et facile d'utilisation",
  },
  {
    icon: MapPin,
    title: "Geolocalisation",
    description: "Suivi de votre course en temps reel",
  },
  {
    icon: DollarSign,
    title: "Kwenda Pay",
    description: "Wallet integre pour paiements securises",
  },
  {
    icon: Shield,
    title: "Securite",
    description: "Chauffeurs verifies et courses securisees",
  },
];
```

### Grille Services : 3 colonnes

```tsx
// Changer de lg:grid-cols-4 a lg:grid-cols-3 (ligne 277)
<div className="grid md:grid-cols-3 gap-6">
```

---

## 3. Copier l'Image Publicitaire

L'image `kwenda-campaign.png` est deja dans `src/assets/`. 
Mettre a jour l'import dans `Projects.tsx` :

```tsx
import kwendaCampaign from "@/assets/kwenda-campaign.png";
```

---

## Resume des Modifications

| Fichier | Modifications |
|---------|---------------|
| `Projects.tsx` | Supprimer badge "Projet Majeur", utiliser image publicitaire, simplifier description |
| `Kwenda.tsx` | Supprimer badge "Projet Phare", reduire les animations de fond, 4 features au lieu de 6, grille services 3 colonnes |

## Resultat Attendu

- Section Projets : Plus propre avec l'image publicitaire officielle Kwenda
- Page Kwenda : Design moderne et professionnel sans surcharge
- Focus sur le contenu essentiel et l'image de marque
- Meilleure lisibilite et experience utilisateur

