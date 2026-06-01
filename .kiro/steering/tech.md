# Tech Stack & Build System

## Core Technologies

### Frontend Framework
- **Vue 3** (^3.4.*): Progressive JavaScript framework for building UIs
- **TypeScript** (~5.1.6): Type-safe JavaScript development
- **Vite** (^4.4.9): Modern build tool and dev server

### State Management
- **Pinia** (^2.1.6): Vue 3 state management library (replaces Vuex)

### Routing
- **Vue Router** (^4.2.4): Official router for Vue.js

### UI Framework
- **Naive UI** (^2.34.4): Vue 3 component library
- **Vicons** (multiple packages): Icon libraries (@vicons/carbon, @vicons/fa, @vicons/material, @vicons/tabler, @vicons/antd)

### Utilities & Libraries
- **crypto-js** (^4.2.0): Cryptographic functions (used for tier list encryption)
- **html2canvas** (^1.4.1): Convert HTML to canvas/PNG (tier list export)
- **vuedraggable** (^4.1.0): Drag-and-drop functionality
- **ndarray-pixels** (^3.1.0): Pixel manipulation
- **less** (^4.2.0): CSS preprocessor

### Animation & Visualization
- **Spine Player** (custom spine-player4.0.js & spine-player4.1.js): Skeletal animation framework
- **Live2D**: Character visualization (via custom integration)

## Development Tools

### Code Quality
- **ESLint** (^8.46.0): JavaScript linter with Vue support
- **Prettier** (^3.0.0): Code formatter
- **vue-tsc** (^1.8.8): Vue TypeScript compiler

### Testing
- **Vitest** (^0.34.2): Unit testing framework
- **@vue/test-utils** (^2.4.1): Vue component testing utilities
- **jsdom** (^22.1.0): DOM implementation for Node.js

### Build & Task Running
- **npm-run-all** (^4.1.5): Run multiple npm scripts in parallel/sequence

## Common Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:5173)
npm run serve           # Start dev server with --host flag (accessible from network)

# Building
npm run build           # Full build with type checking
npm run build-only      # Build without type checking
npm run preview         # Preview production build locally

# Code Quality
npm run lint            # Run ESLint with auto-fix
npm run format          # Format code with Prettier
npm run type-check      # TypeScript type checking

# Testing
npm run test:unit       # Run unit tests with Vitest

# Quick Start
_run.bat               # Windows batch file for quick setup and dev server start
```

## Project Configuration Files

- **vite.config.ts**: Vite build configuration
- **tsconfig.json**: TypeScript configuration
- **tsconfig.vitest.json**: TypeScript config for tests
- **.eslintrc.cjs**: ESLint rules and configuration
- **.prettierrc.json**: Prettier formatting rules
- **package.json**: Dependencies and scripts

## Asset Paths

Assets are organized in `src/assets/`:
- `images/`: Character portraits, UI assets, and metadata
  - `FB/`: Full-body character images
  - `gallery/`: Event/content galleries (organized by event name)
  - `classes/`: Class icons (Attacker, Defender, Supporter)
  - `gun/`: Weapon/gun asset images
  - `manufacturer/`: Manufacturer/faction icons
  - `rarity/`: Rarity tier indicators
  - `sprite/`: Character sprite assets
  - `*.png`: UI assets (battledata, coredust, credit, index_bg, nikke-db logo, etc.)
- `l2d/`: Live2D model files (organized by character ID and event)
  - Character models: `c010/`, `c011/`, etc. (with variants like `c010_01/`, `c010_02/`)
  - Event models: `777/`, `absolute/`, `arkguardian/`, etc.
  - Story models: `story0001/`, `story0201/`, etc.
  - Favorite variants: `favorite_c030/`, `favorite_c032/`, etc.
  - Special models: `smol_*` (chibi variants), `eba*/`, `ebg*/`, `mba*/`, `mbg*/`
- `voice/`: Character voice lines (organized by character ID)
  - Character voices: `c030/`, `c032/`, etc.
  - Event voices: `oldtales/`
  - Favorite variants: `favorite_c030/`, `favorite_c032/`, etc.

## Development Notes

- **Port**: Default dev server runs on `http://localhost:5173`
- **Hot Module Replacement**: Vite provides HMR for fast development
- **Type Safety**: Project uses strict TypeScript with Vue 3 composition API
- **Mobile Support**: Responsive design with mobile detection utilities
- **Local Storage**: Used for persisting user data (tier lists, preferences)
- **Asset Scale**: Extensive local asset library with 300+ character models and variants
