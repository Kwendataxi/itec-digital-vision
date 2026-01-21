

# Plan - Logo Footer Agrandi + Bouton Scroll to Top

## 1. Agrandir le Logo dans le Footer

### Modifier `src/components/Footer.tsx`

Le logo existe deja (ligne 47-53) mais est trop petit. On va l'agrandir :

**Avant :**
```tsx
className="h-16 md:h-20 w-auto object-contain brightness-0 invert drop-shadow-md"
```

**Apres :**
```tsx
className="h-20 md:h-24 lg:h-28 w-auto object-contain brightness-0 invert drop-shadow-lg"
```

| Ecran | Taille actuelle | Nouvelle taille |
|-------|-----------------|-----------------|
| Mobile | `h-16` (64px) | `h-20` (80px) |
| Tablette | `h-20` (80px) | `h-24` (96px) |
| Desktop | `h-20` (80px) | `h-28` (112px) |

---

## 2. Creer un Composant ScrollToTop

### Nouveau fichier `src/components/ScrollToTop.tsx`

Creer un bouton flottant elegant qui :
- Apparait apres avoir scroll de 400px
- Animation fluide avec Framer Motion
- Design coherent avec le style ITEC (orange accent)
- Position fixe en bas a droite

```tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 md:w-14 md:h-14
                     bg-orange hover:bg-orange-light text-white
                     rounded-full shadow-xl hover:shadow-2xl
                     flex items-center justify-center
                     transition-colors duration-300
                     border-2 border-white/20"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
```

### Caracteristiques du Bouton :

| Propriete | Valeur |
|-----------|--------|
| Position | Fixe, bas droite (bottom-6 right-6) |
| Taille | 48px mobile, 56px desktop |
| Couleur | Orange ITEC (#E89616) |
| Animation entree | Scale + fade + slide up |
| Animation hover | Scale 1.1 |
| Seuil apparition | 400px de scroll |
| Scroll | Smooth behavior |

---

## 3. Integrer le Composant sur Toutes les Pages

### Modifier `src/pages/Index.tsx`

```tsx
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* ... sections existantes ... */}
      </main>
      <Footer />
      <ScrollToTop />  {/* Ajouter ici */}
    </div>
  );
};
```

### Modifier les autres pages :

| Page | Fichier |
|------|---------|
| Kwenda | `src/pages/Kwenda.tsx` |
| Devis | `src/pages/DemandeDevis.tsx` |
| Genie Civil | `src/pages/services/GenieCivil.tsx` |
| RH | `src/pages/services/RessourcesHumaines.tsx` |
| Technologies | `src/pages/services/Technologies.tsx` |
| Electricite | `src/pages/services/Electricite.tsx` |

Chaque page recevra l'import et le composant `<ScrollToTop />`.

---

## Resume des Modifications

| Fichier | Modification |
|---------|--------------|
| `src/components/Footer.tsx` | Agrandir le logo (h-20 a h-28) |
| `src/components/ScrollToTop.tsx` | Nouveau composant bouton flottant |
| `src/pages/Index.tsx` | Ajouter ScrollToTop |
| `src/pages/Kwenda.tsx` | Ajouter ScrollToTop |
| `src/pages/DemandeDevis.tsx` | Ajouter ScrollToTop |
| `src/pages/services/*.tsx` | Ajouter ScrollToTop (4 fichiers) |

---

## Resultat Attendu

- Logo footer plus grand et visible (112px sur desktop)
- Bouton "retour en haut" elegant et anime sur toutes les pages
- Apparition fluide apres 400px de scroll
- Design coherent avec la charte graphique ITEC
- Amelioration de l'experience utilisateur sur les longues pages

