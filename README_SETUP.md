# Olkunda Ameublement - Catalogue en Ligne

Catalogue en ligne pour Olkunda Ameublement, spécialisé dans la vente de meubles (lits, canapés, etc.) au Cameroun.

## 🚀 Fonctionnalités

- ✅ Catalogue de produits avec grille responsive
- ✅ Filtrage par catégories (Lits, Canapés, Chaises, Tables, etc.)
- ✅ Panier d'achat avec gestion des quantités
- ✅ Intégration WhatsApp pour:
  - Demandes d'informations sur les produits
  - Commande complète du panier
- ✅ Design moderne inspiré de Taramoney.com
- ✅ Interface mobile-first et responsive
- ✅ Optimisation des images avec Next.js

## 📋 Prérequis

- Node.js 18+ installé
- npm ou yarn

## 🛠️ Installation

1. Les dépendances sont déjà installées. Si besoin, exécutez:
```bash
npm install
```

2. Ajoutez vos images de produits dans le dossier `public/products/`
   - Format recommandé: JPG ou WebP
   - Nommage: `bed-1.jpg`, `sofa-1.jpg`, etc.
   - Dimensions recommandées: 800x800px minimum

3. Modifiez les produits dans `lib/products.ts` avec vos données réelles

## 🎨 Configuration des Produits

Éditez le fichier `lib/products.ts` pour ajouter vos produits:

```typescript
{
  id: 'bed-001',
  name: 'Nom du produit',
  category: 'beds', // beds, sofas, chairs, tables, storage, decor
  price: 450000,
  currency: 'FCFA',
  image: '/products/bed-1.jpg',
  description: 'Description du produit',
  inStock: true,
}
```

## 🚀 Lancement du Projet

### Mode Développement
```bash
npm run dev
```
Ouvrez [http://localhost:3000/fr](http://localhost:3000/fr) dans votre navigateur.

### Mode Production
```bash
npm run build
npm start
```

## 🌍 SEO & Internationalization

Le site est entièrement optimisé pour le SEO avec support multilingue:

- **URLs localisées**: `/fr` (Français) et `/en` (English)
- **Metadata dynamique**: Titres et descriptions par langue
- **hreflang tags**: Pour le ciblage international
- **Sitemap multilingue**: Généré automatiquement
- **Open Graph**: Optimisé pour les réseaux sociaux
- **Robots.txt**: Configuration SEO-friendly

### Configuration SEO
1. Créez `.env.local` avec votre URL:
```bash
NEXT_PUBLIC_BASE_URL=https://votre-domaine.com
```

2. Ajoutez une image OG (1200x630px) dans `/public/og-image.jpg`

3. Consultez `SEO_GUIDE.md` pour la documentation complète

### Vérification Google
Mettez à jour le code de vérification dans `app/[locale]/layout.tsx`

## 📱 Intégration WhatsApp

Le numéro WhatsApp est configuré dans `lib/cart.ts`:
- Numéro actuel: `237697111394`
- Pour changer: modifiez le paramètre `phoneNumber` dans les fonctions

## 🎨 Design System

Le design est documenté dans `docs/TARAMONEY_UI_UX_DESIGN_SYSTEM.md` et peut être réutilisé pour d'autres projets.

### Principes clés:
- **Typographie**: Large et impactante (text-4xl à text-7xl)
- **Couleurs**: Contraste élevé avec accent personnalisable
- **Layout**: Grille responsive (1-4 colonnes selon l'écran)
- **Animations**: Transitions douces au survol
- **Mobile-first**: Optimisé pour tous les écrans

## 📁 Structure du Projet

```
olkunda/
├── app/
│   ├── page.tsx          # Page principale du catalogue
│   ├── layout.tsx        # Layout global
│   └── globals.css       # Styles globaux
├── components/
│   ├── product-card.tsx      # Carte produit
│   ├── cart-drawer.tsx       # Panier latéral
│   ├── category-filter.tsx   # Filtres de catégories
│   └── ui/                   # Composants shadcn/ui
├── lib/
│   ├── products.ts       # Données et types des produits
│   ├── cart.ts          # Logique du panier
│   └── utils.ts         # Utilitaires
├── public/
│   └── products/        # Images des produits (à ajouter)
└── docs/
    └── TARAMONEY_UI_UX_DESIGN_SYSTEM.md  # Documentation design
```

## 🎯 Personnalisation

### Changer les couleurs
Modifiez `app/globals.css` pour personnaliser les couleurs du thème.

### Ajouter des catégories
1. Ajoutez la catégorie dans le type `Product['category']` dans `lib/products.ts`
2. Ajoutez le label dans `categoryLabels`

### Modifier le texte
Tous les textes sont en français et peuvent être modifiés directement dans les composants.

## 📦 Technologies Utilisées

- **Next.js 15.5.4** - Framework React
- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Styles
- **shadcn/ui** - Composants UI
- **Lucide React** - Icônes

## 🔧 shadcn MCP Server (Configuration Globale)

Pour utiliser le serveur MCP shadcn globalement, ajoutez cette configuration à votre fichier MCP client:

### Pour Claude Code (`.mcp.json`)
```json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["shadcn@latest", "mcp"]
    }
  }
}
```

### Pour Cursor (`.cursor/mcp.json`)
```json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["shadcn@latest", "mcp"]
    }
  }
}
```

### Pour VS Code (`.vscode/mcp.json`)
```json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["shadcn@latest", "mcp"]
    }
  }
}
```

### Pour Windsurf
Le fichier est déjà configuré dans `mcp_config.json` à la racine du projet utilisateur.

## 📝 Prochaines Étapes

1. **Ajoutez vos images** dans `public/products/`
2. **Modifiez les produits** dans `lib/products.ts`
3. **Testez l'intégration WhatsApp** avec votre numéro
4. **Personnalisez les couleurs** selon votre marque
5. **Déployez** sur Vercel, Netlify ou votre hébergeur préféré

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Déployez le dossier .next
```

## 📞 Support

Pour toute question, contactez-nous sur WhatsApp: [+237 697 111 394](https://wa.me/237697111394)

---

**Développé avec ❤️ pour Olkunda Ameublement**
