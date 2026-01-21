

# Plan - Agrandissement du Logo + Nettoyage des Mentions "5+ ans"

## 1. Agrandissement du Logo (Navbar)

### Modifier `src/components/Navbar.tsx`

Augmenter significativement la taille du logo :

| Etat | Taille actuelle | Nouvelle taille |
|------|-----------------|-----------------|
| Normal (haut de page) | `h-14 md:h-16 lg:h-20` | **`h-16 md:h-20 lg:h-24`** |
| Scrolled (defilé) | `h-12 md:h-14` | **`h-14 md:h-16`** |
| Mobile menu | `h-20 md:h-24` | **`h-24 md:h-28`** |

**Ligne 54-56** - Changer :
```tsx
// AVANT
isScrolled ? "h-12 md:h-14" : "h-14 md:h-16 lg:h-20"

// APRES
isScrolled ? "h-14 md:h-16" : "h-16 md:h-20 lg:h-24"
```

**Ligne 155** - Mobile menu logo :
```tsx
// AVANT
className="h-20 md:h-24 mb-8 object-contain drop-shadow-lg"

// APRES
className="h-24 md:h-28 mb-8 object-contain drop-shadow-lg"
```

---

## 2. Supprimer le Badge "5+ ans" dans le Hero

### Modifier `src/components/Hero.tsx`

**Supprimer les lignes 86-97** - Le bloc du badge :
```tsx
{/* Badge */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="mb-8"
>
  <div className="inline-flex items-center gap-2 bg-orange/20 backdrop-blur-sm border border-orange/30 px-6 py-3 rounded-full">
    <div className="w-2 h-2 rounded-full bg-orange animate-pulse" />
    <span className="text-white font-semibold text-sm tracking-wide">5+ ans d'excellence</span>
  </div>
</motion.div>
```

Ce badge sera completement supprime, laissant le titre "Expertise - Innovation - Performance" comme element principal.

---

## 3. Nettoyer les Mentions Repetitives de "5+ ans"

Les mentions de "5+ ans" apparaissent dans 4 endroits. Pour garder le site propre, nous allons :

### 3.1 Modifier `src/components/About.tsx` (ligne 157-158)

Remplacer par un message plus general :
```tsx
// AVANT
<h4 className="font-semibold text-foreground mb-1">5+ ans d'expertise</h4>

// APRES
<h4 className="font-semibold text-foreground mb-1">Expertise reconnue</h4>
```

### 3.2 Modifier `src/components/WhyChoose.tsx` (ligne 45)

Changer le titre de la raison :
```tsx
// AVANT
title: "5+ ans d'expérience"

// APRES
title: "Expérience confirmée"
```

### 3.3 Modifier `src/pages/DemandeDevis.tsx` (ligne 123)

Simplifier la description :
```tsx
// AVANT
description: "5+ ans d'expérience terrain"

// APRES
description: "Expertise terrain éprouvée"
```

---

## Resume des Modifications

| Fichier | Action |
|---------|--------|
| `src/components/Navbar.tsx` | Agrandir le logo (h-16 a h-24 normal, h-14 a h-16 scrolled) |
| `src/components/Hero.tsx` | Supprimer le badge "5+ ans d'excellence" |
| `src/components/About.tsx` | Remplacer "5+ ans d'expertise" par "Expertise reconnue" |
| `src/components/WhyChoose.tsx` | Remplacer "5+ ans d'expérience" par "Expérience confirmée" |
| `src/pages/DemandeDevis.tsx` | Remplacer "5+ ans d'expérience terrain" par "Expertise terrain éprouvée" |

---

## Resultat Attendu

- Logo plus grand et plus visible dans le header (proportions elegantes)
- Hero propre sans badge redondant
- Mentions de "5+ ans" eliminees pour eviter la repetition
- Site plus epure et professionnel

