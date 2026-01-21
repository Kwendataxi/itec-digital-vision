

# Plan - Boutons Fonctionnels et Scroll en Haut des Pages

## 1. Rendre les Boutons Hero Fonctionnels

### Fichier : `src/components/Hero.tsx`

**Bouton "Nos Services"** (lignes 134-142)

Ce bouton doit faire défiler vers la section Services sur la page d'accueil.

```tsx
// Ajouter onClick pour scroller vers #services
<Button
  size="lg"
  className="bg-white text-primary hover:bg-white/95 font-bold text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 shadow-elegant group relative overflow-hidden rounded-2xl w-full sm:w-auto"
  onClick={() => {
    document.getElementById('services')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  }}
>
```

**Bouton "Découvrir ITEC"** (lignes 149-156)

Ce bouton doit faire défiler vers la section À propos.

```tsx
// Ajouter onClick pour scroller vers #about
<Button
  size="lg"
  className="bg-orange hover:bg-orange-light text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-2xl group w-full sm:w-auto shadow-lg"
  onClick={() => {
    document.getElementById('about')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  }}
>
```

---

## 2. Créer un Composant ScrollRestoration

Pour que toutes les pages s'affichent en haut lors de la navigation, il faut créer un composant qui écoute les changements de route.

### Nouveau fichier : `src/components/ScrollRestoration.tsx`

```tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollRestoration;
```

---

## 3. Intégrer ScrollRestoration dans App.tsx

### Fichier : `src/App.tsx`

Ajouter le composant juste après `<BrowserRouter>` :

```tsx
import ScrollRestoration from "./components/ScrollRestoration";

// Dans le JSX, après <BrowserRouter>
<BrowserRouter>
  <ScrollRestoration />
  <Routes>
    ...
  </Routes>
</BrowserRouter>
```

---

## Résumé des Modifications

| Fichier | Modification |
|---------|--------------|
| `Hero.tsx` | Ajouter `onClick` sur bouton "Nos Services" → scroll vers `#services` |
| `Hero.tsx` | Ajouter `onClick` sur bouton "Découvrir ITEC" → scroll vers `#about` |
| `ScrollRestoration.tsx` | Nouveau composant pour scroll en haut lors navigation |
| `App.tsx` | Importer et utiliser `<ScrollRestoration />` |

## Vérification des IDs des Sections

S'assurer que les sections ont bien les IDs correspondants :
- Section Services : `id="services"` 
- Section About : `id="about"`

## Résultat Attendu

- Clic sur "Nos Services" → Défilement fluide vers la section Services
- Clic sur "Découvrir ITEC" → Défilement fluide vers la section À propos
- Navigation vers `/kwenda`, `/rh`, etc. → Page affichée en haut

