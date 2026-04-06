# 🚀 Astro Design System Playground

A dead-simple boilerplate for prototyping with Shipt's Astro Design System.

## Prerequisites

You need access to the `@shipt` GitHub Packages registry. Add this to your `~/.npmrc`:

```
@shipt:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

Your GitHub token needs the `read:packages` scope and SSO authorization for the `shipt` org.

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## How to Use

Edit `src/App.jsx` — that's the only file you need to touch. It has a list of all available component imports at the top.

Example:

```jsx
import { Button } from '@shipt/design-system-buttons'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Button>Click me!</Button>
    </div>
  )
}
```

Save the file and the browser updates instantly — no reload needed.

## Available Packages

| Component | Package |
|-----------|---------|
| Accordion | `@shipt/design-system-accordion` |
| Avatar | `@shipt/design-system-avatar` |
| Badge | `@shipt/design-system-badge` |
| Banner | `@shipt/design-system-banner` |
| Buttons | `@shipt/design-system-buttons` |
| Carousel | `@shipt/design-system-carousel` |
| Checkbox | `@shipt/design-system-checkbox` |
| Chip | `@shipt/design-system-chip` |
| Dialog | `@shipt/design-system-dialog` |
| Drawer | `@shipt/design-system-drawer` |
| Icons | `@shipt/design-system-icons` |
| Inputs | `@shipt/design-system-inputs` |
| Labs | `@shipt/design-system-labs` |
| Layouts | `@shipt/design-system-layouts` |
| Loading | `@shipt/design-system-loading` |
| Menu | `@shipt/design-system-menu` |
| Option | `@shipt/design-system-option` |
| Pagination | `@shipt/design-system-pagination` |
| Popovers | `@shipt/design-system-popovers` |
| Radio Group | `@shipt/design-system-radio-group` |
| Segmented Control | `@shipt/design-system-segmented-control` |
| Select | `@shipt/design-system-select` |
| Switch | `@shipt/design-system-switch` |
| Tables | `@shipt/design-system-tables` |
| Tabs | `@shipt/design-system-tabs` |
| Themes | `@shipt/design-system-themes` |
| Tile | `@shipt/design-system-tile` |
| Tooltip | `@shipt/design-system-tooltip` |
| Typography | `@shipt/design-system-typography` |
