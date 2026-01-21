

# Plan - Correction de l'Affichage du Logo dans le Footer

## Probleme Identifie

Le logo dans le Footer utilise les filtres CSS `brightness-0 invert` qui transforment toute l'image en blanc uni. Cela fonctionne pour les logos simples monochromes, mais efface tous les details et couleurs du logo ITEC.

**Comparaison :**

| Composant | Classes CSS | Resultat |
|-----------|-------------|----------|
| Navbar | `object-contain drop-shadow-md` | Logo avec couleurs originales |
| Footer | `brightness-0 invert drop-shadow-lg` | Logo entierement blanc (probleme) |

---

## Solution

### Modifier `src/components/Footer.tsx` (ligne 50)

Supprimer les filtres `brightness-0 invert` pour afficher le logo avec ses couleurs originales :

**Avant :**
```tsx
className="h-20 md:h-24 lg:h-28 w-auto object-contain brightness-0 invert drop-shadow-lg"
```

**Apres :**
```tsx
className="h-20 md:h-24 lg:h-28 w-auto object-contain drop-shadow-lg"
```

---

## Resultat Attendu

- Le logo ITEC s'affichera correctement avec ses couleurs originales (bleu royal et orange)
- Meme style que dans la Navbar
- Visible et lisible sur le fond sombre du footer

