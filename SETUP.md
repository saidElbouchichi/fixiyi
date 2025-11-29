# Configuration de Fixiyi

## Prérequis

- Node.js 18+ et npm
- Un compte Supabase

## Installation

1. Installez les dépendances :
```bash
npm install
```

2. Configurez les variables d'environnement :
   - Copiez `.env.example` vers `.env`
   - Remplissez les valeurs Supabase (URL et clé anonyme)

```bash
cp .env.example .env
```

## Configuration Supabase

### 1. Créer un projet Supabase

Allez sur [supabase.com](https://supabase.com) et créez un nouveau projet.

### 2. Récupérer les clés

Dans votre projet Supabase :
- Allez dans Settings > API
- Copiez l'URL du projet et la clé `anon public`
- Ajoutez-les dans votre fichier `.env` :

```
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre-cle-anonyme
```

### 3. Vérifier les migrations

Les migrations de base de données ont déjà été appliquées automatiquement. Le schéma inclut :

- **profiles** : Profils utilisateurs (clients et prestataires)
- **providers** : Informations détaillées des prestataires
- **service_categories** : Catégories de services
- **services** : Services proposés par les prestataires
- **bookings** : Réservations
- **reviews** : Avis et évaluations
- **payments** : Paiements

### 4. (Optionnel) Ajouter des catégories de services

Vous pouvez ajouter des catégories de services via l'interface Supabase ou en exécutant :

```sql
INSERT INTO service_categories (name, slug, icon, description, display_order) VALUES
  ('Plomberie', 'plomberie', '🔧', 'Services de plomberie', 1),
  ('Électricité', 'electricite', '⚡', 'Services d''électricité', 2),
  ('Ménage', 'menage', '🧹', 'Services de ménage', 3),
  ('Jardinage', 'jardinage', '🌱', 'Services de jardinage', 4),
  ('Déménagement', 'demenagement', '📦', 'Services de déménagement', 5),
  ('Peinture', 'peinture', '🎨', 'Services de peinture', 6);
```

## Développement

Lancez le serveur de développement :

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## Build

Pour créer une version de production :

```bash
npm run build
```

## Structure du projet

```
src/
├── app/
│   ├── providers/       # Configuration des providers (React Query, Router)
│   └── routes/          # Pages de l'application
│       ├── public/      # Pages publiques (accueil, login, register)
│       └── private/     # Pages privées (dashboard)
├── components/
│   ├── auth/            # Composants d'authentification
│   └── layout/          # Layouts et navigation
├── hooks/               # Hooks React personnalisés
├── lib/                 # Configuration des bibliothèques (Supabase)
├── services/            # Services API
├── stores/              # État global (Zustand)
└── types/               # Types TypeScript
```

## Fonctionnalités

### Actuellement implémentées

- ✅ Système d'authentification complet (inscription, connexion, déconnexion)
- ✅ Base de données Supabase avec RLS
- ✅ Pages publiques (accueil, login, register, 404)
- ✅ Dashboard privé avec statistiques
- ✅ Layouts responsive avec TailwindCSS
- ✅ Protection des routes privées

### À venir

- 🔄 Recherche de services par catégorie
- 🔄 Géolocalisation des prestataires
- 🔄 Système de réservation
- 🔄 Gestion des profils prestataires
- 🔄 Système d'avis et évaluations
- 🔄 Intégration du paiement
- 🔄 Notifications en temps réel
- 🔄 Messagerie interne

## Technologies utilisées

- **Frontend** : React 18 + TypeScript + Vite
- **Styling** : TailwindCSS
- **Routing** : React Router v7
- **État** : Zustand + React Query
- **Backend** : Supabase (PostgreSQL, Auth, Storage)
- **Icons** : Lucide React

## Support

Pour toute question ou problème, consultez la documentation de :
- [Supabase](https://supabase.com/docs)
- [React](https://react.dev)
- [TailwindCSS](https://tailwindcss.com)
