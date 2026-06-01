# Project Structure

## Directory Organization

```
nikke-db-vue/
├── src/
│   ├── assets/                    # Static assets and game data
│   │   ├── images/               # Image assets
│   │   │   ├── FB/              # Full-body character images
│   │   │   ├── gallery/         # Event/content galleries (organized by event)
│   │   │   ├── classes/         # Class icons (Attacker, Defender, Supporter)
│   │   │   ├── gun/             # Weapon/gun asset images
│   │   │   ├── manufacturer/    # Manufacturer/faction icons
│   │   │   ├── rarity/          # Rarity tier indicators
│   │   │   ├── sprite/          # Character sprite assets
│   │   │   ├── drive/           # Tutorial/guide images
│   │   │   └── *.png            # UI assets (battledata, coredust, credit, etc.)
│   │   ├── l2d/                 # Live2D model files (300+ character variants)
│   │   │   ├── c010/, c011/, ... # Character models by ID
│   │   │   ├── c010_01/, c010_02/ # Character variants
│   │   │   ├── 777/, absolute/, arkguardian/, ... # Event models
│   │   │   ├── story0001/, story0201/, ... # Story models
│   │   │   ├── favorite_c030/, favorite_c032/, ... # Favorite variants
│   │   │   ├── smol_*/ # Chibi/small character variants
│   │   │   └── eba*/, ebg*/, mba*/, mbg*/ # Special event models
│   │   ├── voice/               # Character voice lines
│   │   │   ├── c030/, c032/, ... # Character voices by ID
│   │   │   ├── favorite_c030/, favorite_c032/, ... # Favorite variant voices
│   │   │   └── oldtales/ # Event voices
│   │   └── favicon.ico
│   │
│   ├── components/              # Vue components
│   │   ├── common/              # Reusable components
│   │   │   ├── Header/          # Navigation header
│   │   │   ├── Footer/          # Footer component
│   │   │   ├── Gallery/         # Gallery display
│   │   │   ├── Spine/           # Spine animation player
│   │   │   ├── Tierlistmaker/   # Tier list UI components
│   │   │   ├── Tools/           # Utility tool components
│   │   │   └── Credits/         # Credits display
│   │   └── views/               # Page-level components
│   │       ├── Index.vue        # Home page
│   │       ├── L2D.vue          # Live2D viewer page
│   │       ├── Chibi.vue        # Chibi viewer page
│   │       ├── Gallery.vue      # Gallery page
│   │       ├── Tierlistmaker.vue # Tier list maker page
│   │       ├── Tools.vue        # Tools page
│   │       ├── Credits.vue      # Credits page
│   │       └── notices/         # Notice/announcement components
│   │
│   ├── stores/                  # Pinia state management
│   │   ├── market.ts            # Main store (aggregates all stores)
│   │   ├── globalParamsStore.ts # Global parameters and settings
│   │   ├── live2dStore.ts       # Live2D viewer state
│   │   ├── loaderStore.ts       # Loading state management
│   │   └── messageStore.ts      # Message/notification state
│   │
│   ├── router/                  # Vue Router configuration
│   │   └── index.ts             # Route definitions
│   │
│   ├── utils/                   # Utility functions and helpers
│   │   ├── enum/
│   │   │   └── globalParams.ts  # Global constants and enums
│   │   ├── interfaces/          # TypeScript interfaces
│   │   │   ├── tierlist/        # Tier list data structures
│   │   │   ├── contributor.ts
│   │   │   ├── gallery.ts
│   │   │   ├── levelingRecord.ts
│   │   │   ├── live2d.ts
│   │   │   └── outpostBattleRecords.ts
│   │   ├── json/                # JSON data files
│   │   │   ├── Gallery/         # Gallery metadata
│   │   │   ├── CharacterLevelTable.json
│   │   │   ├── OutpostBattleTable.json
│   │   │   ├── updateLog.json
│   │   │   ├── l2d.json
│   │   │   └── l2d.js
│   │   ├── spine/               # Spine animation framework
│   │   │   ├── spine-player.css
│   │   │   ├── spine-player4.0.js
│   │   │   └── spine-player4.1.js
│   │   ├── style/               # Global styles
│   │   │   ├── global_variables.less
│   │   │   └── naive-ui-theme-overrides.json
│   │   ├── LayerEditorUtils.ts  # Layer editing utilities
│   │   ├── tierlistUtils.ts     # Tier list helper functions
│   │   └── utils.ts             # General utility functions
│   │
│   ├── App.vue                  # Root component
│   ├── Wrapper.vue              # Wrapper component
│   └── main.ts                  # Application entry point
│
├── .kiro/                       # Kiro configuration
│   └── steering/               # Steering documents
│
├── node_modules/               # Dependencies (generated)
├── .git/                        # Git repository
├── .eslintrc.cjs               # ESLint configuration
├── .prettierrc.json            # Prettier configuration
├── .gitignore                  # Git ignore rules
├── .gitattributes              # Git attributes
├── env.d.ts                    # Environment type definitions
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── package-lock.json           # Locked dependency versions
├── tsconfig.json               # TypeScript configuration
├── tsconfig.vitest.json        # TypeScript config for tests
├── vite.config.ts              # Vite configuration
├── README.md                   # Project documentation
└── _run.bat                    # Windows quick-start script
```

## Key Architectural Patterns

### State Management (Pinia)
- **market.ts**: Central store that aggregates all sub-stores
- Sub-stores are composed into the main market store
- Components access state via `useMarket()` hook
- Example: `const market = useMarket(); market.globalParams.isMobile`

### Component Organization
- **Common components**: Reusable UI elements in `components/common/`
- **View components**: Page-level components in `components/views/`
- **Composition API**: Vue 3 `<script setup>` syntax used throughout

### Data Flow
- Global state managed through Pinia stores
- Local storage used for persistence (tier lists, user preferences)
- Crypto-JS used for encrypting sensitive data (tier list save slots)

### Styling
- **LESS**: CSS preprocessor for variables and mixins
- **Global variables**: `src/utils/style/global_variables.less`
- **Naive UI theme**: Custom overrides in `naive-ui-theme-overrides.json`
- **Dark theme**: Primary color scheme is dark (`@main-dark-theme`, `@alt-dark-theme`)

### Asset Management
- Large asset library organized by type and content
- Images served from `src/assets/images/`
- Animations (Spine, Live2D) in dedicated folders
- Gallery content organized by event/feature name

## Naming Conventions

- **Components**: PascalCase (e.g., `Header.vue`, `Tierlistmaker.vue`)
- **Stores**: camelCase with "Store" suffix (e.g., `globalParamsStore.ts`)
- **Utilities**: camelCase (e.g., `tierlistUtils.ts`)
- **Enums/Constants**: UPPER_CASE or PascalCase (e.g., `globalParams`, `messagesEnum`)
- **Interfaces**: PascalCase with "I" prefix or descriptive name (e.g., `contributor.ts`)

## Mobile Responsiveness

- Mobile detection via `market.globalParams.isMobile`
- Conditional rendering for mobile vs desktop views
- Special handling for Chibi viewer on mobile (`isChibiMobile()`)
- Responsive scrollbar styling (`.scrollBarMargin`, `.mobileScroll`)

## Data Persistence

- **Local Storage**: Tier lists, user preferences
- **Encryption**: Tier list save slots encrypted with crypto-js (key: "Nikke DB AES Key")
- **Export**: Tier lists can be exported as PNG via html2canvas

## Performance Considerations

- Lazy loading of large asset libraries (300+ character models)
- Spine and Live2D players handle heavy animations
- Vite's code splitting for optimized bundle size
- HMR (Hot Module Replacement) for fast development iteration
- Voice assets organized by character for efficient loading
