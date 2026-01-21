

# Plan - Simplification de la Page Kwenda avec Image et Liens

## 1. Copier l'Image Kwenda

Copier l'image publicitaire dans le projet :

```text
user-uploads://campaign-client-bl_RrbLq.png -> src/assets/kwenda-campaign.png
```

## 2. Simplifier la Description dans le Hero

### Modifier `src/pages/Kwenda.tsx` (lignes 121-128)

Remplacer la description actuelle par le slogan officiel et une description simplifiee :

**Avant :**
```tsx
<h1>Kwenda <span className="text-gradient">Taxi</span></h1>
<p>Solution digitale complète de mobilité, taxi et livraison
   déployée en République Démocratique du Congo. ITEC assure la
   gestion technique et opérationnelle complète du projet.</p>
```

**Apres :**
```tsx
<h1>Kwenda <span className="text-gradient">Taxi</span></h1>
<p className="text-xl font-medium text-primary mb-2">
  Simplifiez vos trajets, profitez de chaque instant.
</p>
<p>Plateforme de transport et livraison geree par des partenaires 
   tiers en RD Congo. Trajets a partir de 2500 CDF.</p>
```

## 3. Ajouter le Hashtag et le Numero de Telephone

### Modifier la section Hero (apres les tags)

Ajouter une ligne avec le numero de telephone (avec diese) et le hashtag :

```tsx
{/* Contact Info */}
<div className="flex flex-wrap items-center gap-4 mt-6">
  <a 
    href="tel:#0858040400" 
    className="flex items-center gap-2 glass-card px-4 py-2 rounded-full"
  >
    <Phone className="w-4 h-4 text-primary" />
    <span className="font-medium">#085 80 40 400</span>
  </a>
  <span className="text-primary font-semibold">#TrajetSimplifie</span>
</div>
```

## 4. Ajouter les Boutons de Telechargement

### Modifier la section Hero (apres les informations de contact)

Ajouter les boutons App Store et Google Play :

```tsx
{/* Download Buttons */}
<div className="flex flex-wrap gap-4 mt-6">
  <a
    href="https://play.google.com/store/apps/details?id=cd.kwenda.app"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors"
  >
    <Play className="w-5 h-5" />
    <div className="text-left">
      <div className="text-xs">Telecharger sur</div>
      <div className="font-semibold">Google Play</div>
    </div>
  </a>
  
  <a
    href="#"
    className="flex items-center gap-2 bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors"
  >
    <Apple className="w-5 h-5" />
    <div className="text-left">
      <div className="text-xs">Telecharger sur</div>
      <div className="font-semibold">App Store</div>
    </div>
  </a>
</div>
```

## 5. Remplacer l'Image par la Campagne Kwenda

### Modifier la section image Hero (lignes 152-162)

Utiliser la nouvelle image de campagne au lieu du mockup generique :

```tsx
import kwendaCampaign from "@/assets/kwenda-campaign.png";

// Dans le JSX, remplacer kwendaMockup par kwendaCampaign
<motion.img
  src={kwendaCampaign}
  alt="Kwenda Taxi - Simplifiez vos trajets"
  className="w-full h-full object-cover rounded-3xl"
/>
```

## 6. Simplifier la Section Services

### Modifier les services (lignes 49-74)

Simplifier en 3 categories principales basees sur l'image :

```tsx
const services = [
  {
    name: "Transport",
    description: "Taxi et VTC pour tous vos deplacements en ville",
    icon: "🚗",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    name: "Livraison",
    description: "Service de livraison rapide par nos partenaires",
    icon: "📦",
    gradient: "from-green-500/20 to-green-500/5",
  },
  {
    name: "Kwenda Pay",
    description: "Wallet integre pour paiements securises",
    icon: "💳",
    gradient: "from-purple-500/20 to-purple-500/5",
  },
];
```

## Resume des Modifications

| Element | Modification |
|---------|--------------|
| Image Hero | Remplacer par `kwenda-campaign.png` |
| Slogan | Ajouter "Simplifiez vos trajets, profitez de chaque instant." |
| Prix | Ajouter "Trajets a partir de 2500 CDF" |
| Telephone | Ajouter `#085 80 40 400` avec icone |
| Hashtag | Ajouter `#TrajetSimplifie` |
| Play Store | Lien vers `https://play.google.com/store/apps/details?id=cd.kwenda.app` |
| Services | Simplifier a 3 categories principales |

## Nouveaux Imports Necessaires

```tsx
import { Phone } from "lucide-react";
import kwendaCampaign from "@/assets/kwenda-campaign.png";
```

## Resultat Attendu

- Page Kwenda avec l'image officielle de la campagne
- Slogan clair et impactant
- Prix visible (2500 CDF)
- Numero de telephone avec diese (#085 80 40 400)
- Hashtag #TrajetSimplifie visible
- Boutons de telechargement fonctionnels (Play Store avec lien reel)
- Description simplifiee et comprehensible

