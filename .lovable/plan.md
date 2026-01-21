

# Plan - Correction des Boutons CTA + Optimisation des Pages Services

## Probleme Identifie

Le bouton "Appeler maintenant" dans la section CTA n'affiche pas son texte. Cause :
- La variante `outline` du Button applique `bg-background` (fond blanc en mode clair)
- La classe `text-white` rend le texte invisible sur fond blanc

## 1. Corriger les Boutons CTA dans Toutes les Pages Services

### Fichiers a Modifier

| Fichier | Ligne |
|---------|-------|
| `src/pages/services/GenieCivil.tsx` | ~295-305 |
| `src/pages/services/Electricite.tsx` | ~295-305 |
| `src/pages/services/Technologies.tsx` | ~296-307 |
| `src/pages/services/RessourcesHumaines.tsx` | ~296-308 |

### Solution : Remplacer la variante "outline" par un style personnalise

**Avant (problematique) :**
```tsx
<Button 
  size="lg" 
  variant="outline"
  className="border-white/30 text-white hover:bg-white/10 font-bold px-8 py-6 rounded-xl group"
  asChild
>
  <a href="tel:+243XXXXXXXXX">
    <Phone className="mr-2 w-5 h-5" />
    Appeler maintenant
  </a>
</Button>
```

**Apres (corrige) :**
```tsx
<Button 
  size="lg" 
  className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 font-bold px-8 py-6 rounded-xl group"
  asChild
>
  <a href="tel:+243858040400">
    <Phone className="mr-2 w-5 h-5" />
    Appeler maintenant
  </a>
</Button>
```

**Changements cles :**
- Supprimer `variant="outline"` (qui ajoute `bg-background`)
- Ajouter `bg-transparent` pour un fond transparent
- Ajouter `border-2 border-white/50` pour une bordure blanche visible
- Garder `text-white` pour le texte blanc
- Mettre a jour le numero de telephone : `+243858040400`

## 2. Mettre a Jour les Numeros de Telephone

Remplacer `tel:+243XXXXXXXXX` par le vrai numero ITEC dans toutes les pages :

```tsx
<a href="tel:+243858040400">
```

## Resume des Modifications

| Fichier | Modification |
|---------|--------------|
| `GenieCivil.tsx` | Corriger bouton "Appeler" + numero |
| `Electricite.tsx` | Corriger bouton "Appeler" + numero |
| `Technologies.tsx` | Corriger bouton "Appeler" + numero |
| `RessourcesHumaines.tsx` | Corriger bouton "Appeler" + numero |

## Resultat Attendu

- Texte "Appeler maintenant" visible en blanc sur fond transparent
- Bordure blanche semi-transparente autour du bouton
- Numero de telephone reel (+243 858 040 400)
- Effet hover fonctionnel avec fond blanc/10

