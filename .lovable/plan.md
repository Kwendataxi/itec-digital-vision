
# Plan - Logo Officiel ITEC + Splash Screen + Harmonisation des Couleurs

## 1. Intégration du Logo Officiel

### Ajout du fichier logo
- **Copier** le logo vers `src/assets/logo-itec.png`
- Le logo sera utilisé de manière optimale dans toute l'application

### Modification `src/components/Navbar.tsx`
**Avant :**
```tsx
<motion.div className="w-12 h-12 rounded-xl bg-gradient-primary...">
  <span className="text-primary-foreground font-black text-2xl">I</span>
</motion.div>
<span className="text-2xl font-black">ITEC</span>
```

**Après :**
```tsx
<motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring" }}>
  <img 
    src={logoItec} 
    alt="ITEC Logo" 
    className="h-12 w-auto object-contain"
  />
</motion.div>
```
- Logo seul, propre et moderne (sans texte a cote redondant)
- Animation subtile au hover
- Responsive : ajuster la taille selon `isScrolled`

---

## 2. Splash Screen Moderne et Professionnel

### Creer `src/components/SplashScreen.tsx`

**Design :**
- Fond avec mesh gradient aux couleurs ITEC (bleu + orange)
- Logo centre avec animation d'entree elegante
- Effet de pulsation subtile (glow)
- Animation de chargement moderne (barre de progression ou cercle)
- Texte "ITEC" qui apparait lettre par lettre
- Transition fluide (fade-out vers le site)

**Structure :**
```tsx
const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Animation de chargement ~2 secondes
    // Puis appeler onComplete()
  }, []);
  
  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-itec">
      {/* Logo avec animation scale + fade */}
      <motion.img 
        src={logoItec} 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
      {/* Barre de progression */}
      {/* Texte animé */}
    </motion.div>
  );
};
```

### Modifier `src/App.tsx`
- Ajouter un state `showSplash` = `true` par defaut
- Afficher `SplashScreen` pendant 2-3 secondes au premier chargement
- Transition fluide vers le contenu principal

---

## 3. Harmonisation des Couleurs (Logo)

### Analyse des couleurs du logo :
| Couleur | Hex | HSL | Usage |
|---------|-----|-----|-------|
| **Bleu Royal** | `#004AAD` | `214 100% 34%` | Couleur principale (deja configuree !) |
| **Orange/Dore** | `#E89616` | `37 88% 50%` | Accent pour CTAs, badges, elements clés |
| **Bleu Clair** (globe) | `#6B8EC2` | `215 40% 59%` | Decorations, icones secondaires |

### Modifier `src/index.css`
**Ajouter/Modifier :**
```css
:root {
  /* Couleurs existantes (OK) */
  --primary: 214 100% 34%;        /* #004AAD - Bleu principal */
  
  /* AJOUTER : Couleur accent orange du logo */
  --accent-orange: 37 88% 50%;    /* #E89616 - Orange/Dore */
  --accent-orange-light: 37 92% 60%;
  
  /* Globe decoratif */
  --decorative: 215 40% 59%;      /* #6B8EC2 - Bleu clair */
}
```

### Modifier `tailwind.config.ts`
**Ajouter :**
```ts
colors: {
  // ... existant
  orange: {
    DEFAULT: "hsl(var(--accent-orange))",
    light: "hsl(var(--accent-orange-light))",
  },
}
```

---

## 4. Application des Nouvelles Couleurs

### Composants a modifier :

| Fichier | Modification |
|---------|--------------|
| `src/components/Hero.tsx` | Badge "5+ ans" en orange, CTA secondaire en orange |
| `src/components/WhyChoose.tsx` | Stats avec accent orange, icones avec bordure orange |
| `src/components/Services.tsx` | Badges de service avec variation orange |
| `src/pages/Kwenda.tsx` | Stats en orange pour contraste |
| `src/pages/DemandeDevis.tsx` | Bouton submit avec gradient bleu-orange |

### Nouveaux gradients a ajouter dans `src/index.css` :
```css
--gradient-itec: linear-gradient(135deg, #004AAD 0%, #0A66C2 50%, #E89616 100%);
--gradient-orange: linear-gradient(135deg, #E89616 0%, #F5A623 100%);
--gradient-hero-v2: linear-gradient(135deg, hsl(214 100% 34%) 0%, hsl(37 88% 50% / 0.1) 100%);
```

---

## 5. Footer avec Logo

### Modifier `src/components/Footer.tsx`
- Remplacer le texte "ITEC" par le logo officiel
- Version claire du logo sur fond sombre
- Taille adaptee au footer

---

## 6. Favicon

### Modifier `index.html`
- Ajouter le favicon avec le logo ITEC
- Copier le logo en version carree pour favicon

---

## Resume des Fichiers

| Action | Fichier |
|--------|---------|
| **Copier** | `user-uploads://1001651584.png` → `src/assets/logo-itec.png` |
| **Creer** | `src/components/SplashScreen.tsx` |
| **Modifier** | `src/App.tsx` (splash screen integration) |
| **Modifier** | `src/components/Navbar.tsx` (logo) |
| **Modifier** | `src/components/Footer.tsx` (logo) |
| **Modifier** | `src/index.css` (couleurs orange) |
| **Modifier** | `tailwind.config.ts` (couleur orange) |
| **Modifier** | `index.html` (favicon, meta description) |
| **Modifier** | `src/components/Hero.tsx` (accents orange) |
| **Modifier** | `src/components/WhyChoose.tsx` (accents orange) |

---

## Resultat Attendu

- Logo officiel ITEC integre de facon professionnelle
- Splash screen moderne avec animation fluide (~2s)
- Palette de couleurs harmonisee avec le logo (bleu + orange)
- Experience utilisateur premium et coherente
- Favicon avec le logo ITEC
