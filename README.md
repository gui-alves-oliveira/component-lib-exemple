# UI Design System

A modern React Design System built on top of **Base UI**, providing a consistent, accessible and customizable set of components for building applications.

## Features

* 🎨 Design Tokens as the single source of truth
* ♿ Accessible components powered by Base UI
* ⚡ Built with Vite
* ⚛️ React + TypeScript
* 🌙 Theme support
* 📦 Tree-shakeable exports
* 🧩 Atomic components
* 🏗️ Composed UI blocks

---

# Philosophy

This Design System is built around a few core principles.

## Composition over Configuration

Components are designed to be composed rather than heavily configured.

Instead of creating a single component with dozens of props to cover every possible scenario, small, focused components are combined to build richer interfaces.

```tsx
<Dialog.Root>
  <Dialog.Trigger>
    <Button>Open</Button>
  </Dialog.Trigger>

  <Dialog.Portal>
    <Dialog.Backdrop />

    <Dialog.Popup>
      <Dialog.Title>Delete project</Dialog.Title>
      <Dialog.Description>
        This action cannot be undone.
      </Dialog.Description>

      <Button variant="danger">
        Delete
      </Button>
    </Dialog.Popup>
  </Dialog.Portal>
</Dialog.Root>
```

Composition keeps components predictable, reusable and easy to extend without increasing API complexity.

---

## Build, Don't Inherit

New components should be created by composing existing primitives instead of extending or inheriting from existing components.

For example, a `Navbar` is built using components such as `Button`, `Popover`, `Avatar` and `Menu`, rather than creating specialized versions of those components.

This approach promotes consistency and reduces duplication across the Design System.

---

## Tokens as the Source of Truth

Every visual value should originate from a Design Token.

Colors, spacing, typography, radii, shadows and motion values should never be hardcoded.

Tokens are shared by both the Design System and consuming applications, ensuring a consistent visual language across the entire ecosystem.

---

## Accessibility by Default

Accessibility and interaction behavior are provided by Base UI.

The Design System focuses on visual language, theming and developer experience while relying on Base UI for robust accessibility primitives.

---

## Consistent APIs

Components should expose clear, predictable APIs that closely follow Base UI's composition model.

Whenever possible, familiar patterns should be preserved to reduce the learning curve and make components intuitive to use.

---

## Reusability over Business Logic

Components and blocks should remain generic and reusable.

Application-specific behavior, business rules and data fetching belong in the consuming application—not in the Design System.

---

# Installation

```bash
npm install @your-org/ui
```

or

```bash
pnpm add @your-org/ui
```

---

# Quick Start

Wrap your application with the `ThemeProvider`.

```tsx
import { ThemeProvider } from "@your-org/ui";

export function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

Import components normally.

```tsx
import { Button, Input } from "@your-org/ui";

export function Login() {
  return (
    <>
      <Input
        label="Email"
        placeholder="john@example.com"
      />

      <Button>Sign In</Button>
    </>
  );
}
```

---

# Project Structure

```text
src/
├── tokens/
├── components/
├── blocks/
├── hooks/
├── providers/
├── styles/
├── utils/
└── index.ts
```

---

# Design Tokens

Design Tokens are the foundation of the Design System.

Every visual value should originate from a token.

Examples include:

* Colors
* Typography
* Spacing
* Radius
* Borders
* Shadows
* Motion
* Breakpoints
* Z-index

## Using tokens

Tokens are exported as part of the public API and are intended to be used by both the Design System components and consuming applications.

```tsx
import { colors, spacing } from "@your-org/ui/tokens";

const styles = {
  backgroundColor: colors.primary,
  padding: spacing.md,
};
```

This ensures that custom application code remains visually consistent with the Design System.

Avoid hardcoded values:

```tsx
padding: "16px";
background: "#2563eb";
```

Prefer:

```tsx
padding: spacing.md;
background: colors.primary;
```

## CSS Variables

At runtime, tokens are also exposed as CSS custom properties.

```css
:root {
  --color-primary: #2563eb;
  --spacing-md: 16px;
  --radius-md: 8px;
}
```

These variables are used internally by the component library and can also be used by consuming applications.

```css
.card {
  padding: var(--spacing-md);
  background: var(--color-primary);
}
```

This enables:

* Theme switching
* Runtime customization
* Consistent styling between library components and application-specific components

---

# Components

Components are wrappers around Base UI primitives.

They provide:

* Styling
* Variants
* Theme integration
* Default behaviors

Examples:

* Button
* Input
* Checkbox
* Radio
* Switch
* Select
* Dialog
* Popover
* Tooltip
* Avatar
* Badge

Components should remain generic, reusable and free of application-specific business logic.

---

# Blocks

Blocks are higher-level UI compositions built using components.

Examples:

* Navbar
* Sidebar
* AppShell
* UserMenu
* SearchBar
* EmptyState
* PageHeader
* DataTableToolbar

Blocks encapsulate common interface patterns while remaining reusable across projects.

---

# Base UI

Accessibility and interaction logic are provided by Base UI.

This project does **not** reimplement headless primitives.

Instead, it focuses on:

* Design language
* Styling
* Tokens
* Variants
* Themes
* Reusable UI patterns

---

# Imports

Components

```tsx
import {
  Button,
  Dialog,
  Input,
} from "@your-org/ui";
```

Tokens

```tsx
import {
  colors,
  spacing,
  radius,
  typography,
} from "@your-org/ui/tokens";
```

Future versions may also support subpath imports for individual components.

```tsx
import { Button } from "@your-org/ui/button";
```

---

# Development

Start the development server.

```bash
pnpm dev
```

Build the library.

```bash
pnpm build
```

Run tests.

```bash
pnpm test
```

Lint the project.

```bash
pnpm lint
```
