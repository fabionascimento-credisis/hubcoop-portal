# Grayscale Color System - Variable Mapping

This document explains the grayscale color system applied to the application.

## Color Variable Mapping

All colors have been converted to grayscale while maintaining the same CSS variable names for easy updates.

### Primary System Colors (in globals.css)
- `--background`: White (#ffffff) - Main app background
- `--foreground`: Dark gray (rgba(20, 20, 20, 1)) - Main text color
- `--card`: White (#ffffff) - Card backgrounds
- `--card-foreground`: Medium gray (rgba(75, 75, 75, 1)) - Text on cards
- `--primary`: Dark gray (rgba(60, 60, 60, 1)) - Primary action color (replaces green/teal)
- `--primary-foreground`: Light gray (rgba(246, 246, 246, 1)) - Text on primary
- `--accent`: Medium-dark gray (rgba(90, 90, 90, 1)) - Accent/highlight color (replaces green)
- `--accent-foreground`: White - Text on accent
- `--destructive`: Dark gray (rgba(80, 80, 80, 1)) - Destructive actions (replaces red)
- `--destructive-foreground`: White - Text on destructive
- `--muted`: Light gray (rgba(176, 176, 176, 1)) - Muted elements (replaces yellow)
- `--muted-foreground`: Light gray (rgba(176, 176, 176, 1)) - Muted text
- `--border`: Light gray (rgba(176, 176, 176, 1)) - Borders
- `--input`: Very light gray (rgba(246, 246, 246, 1)) - Input backgrounds
- `--ring`: Dark gray (rgba(70, 70, 70, 1)) - Focus rings

### Chart Colors (Grayscale Gradient)
- `--chart-1`: rgba(60, 60, 60, 1) - Darkest
- `--chart-2`: rgba(110, 110, 110, 1)
- `--chart-3`: rgba(145, 145, 145, 1)
- `--chart-4`: rgba(180, 180, 180, 1)
- `--chart-5`: rgba(220, 220, 220, 1) - Lightest

### Sidebar Colors
- `--sidebar`: White - Sidebar background
- `--sidebar-foreground`: Medium gray (rgba(75, 75, 75, 1))
- `--sidebar-primary`: Dark gray (rgba(60, 60, 60, 1))
- `--sidebar-primary-foreground`: White
- `--sidebar-accent`: Medium-dark gray (rgba(90, 90, 90, 1))
- `--sidebar-accent-foreground`: White
- `--sidebar-border`: Light gray (rgba(176, 176, 176, 1))
- `--sidebar-ring`: Dark gray (rgba(70, 70, 70, 1))

## Tailwind Class Replacements

### Removed Hardcoded Colors
- **Removed**: `HUB_BRAND_COLOR = "#3E807D"` constant
- **Removed**: All hex color values (#3E807D, #2c5d5a, etc.)
- **Removed**: Linear gradients with specific colors

### Color Class Mappings

#### Success/Positive States (Green → Grayscale)
- `bg-green-*` → `bg-accent`
- `text-green-*` → `text-accent`
- `border-green-*` → `border-accent`
- `hover:bg-green-*` → `hover:bg-accent`

#### Error/Destructive States (Red → Grayscale)
- `bg-red-*` → `bg-destructive`
- `text-red-*` → `text-destructive`
- `border-red-*` → `border-destructive`

#### Warning States (Yellow → Grayscale)
- `bg-yellow-*` → `bg-muted`
- `text-yellow-*` → `text-muted-foreground`
- `border-yellow-*` → `border-muted`

#### Brand Colors (Teal → Grayscale)
- `bg-teal-*` → `bg-primary`
- `text-teal-*` → `text-primary`
- `bg-hub-teal` → `bg-primary`
- `text-hub-teal` → `text-primary`
- `text-hub-teal-dark` → `text-accent`
- `hover:bg-teal-*` → `hover:bg-accent`
- `border-hub-teal` → `border-primary`
- `ring-hub-teal` → `ring-primary`

#### Other Colors
- `bg-indigo-*` → `bg-chart-1`
- `bg-sky-*` → `bg-chart-3`
- `bg-white` → `bg-card` (in component contexts)
- `text-gray-*` → Use appropriate semantic colors (text-muted-foreground, text-foreground, etc.)

## Benefits of This System

1. **Easy Color Updates**: Change colors by updating CSS variables in `/styles/globals.css`
2. **Consistent Naming**: Variable names remain the same (primary, accent, etc.)
3. **Semantic Meaning**: Colors have meaning (destructive, accent, muted) not just appearance
4. **Dark Mode Ready**: Separate dark mode values already defined
5. **Accessibility**: Grayscale ensures good contrast ratios

## How to Change Colors

To change from grayscale to another color scheme:

1. Open `/styles/globals.css`
2. Find the `:root` section
3. Update the `rgba()` values for each variable
4. The entire app will update automatically

Example - to change primary back to teal:
```css
--primary: rgba(62, 128, 125, 1);  /* Teal instead of gray */
```

## Components Updated

- Login page: Uses `bg-card`, `text-foreground`, `bg-primary`
- Sidebar: Uses `bg-sidebar`, `bg-sidebar-primary`, `bg-sidebar-accent`
- Dashboard: Uses `bg-card`, `text-accent` for positive changes
- All buttons: Use `bg-primary`, `hover:bg-accent`
- Status badges: Use `bg-accent` (success), `bg-destructive` (error), `bg-muted` (warning)
- Charts: Use `bg-chart-1` through `bg-chart-5`

## Important Notes

- Font sizes, weights, and line-heights are controlled by CSS variables and should not be overridden with Tailwind classes unless specifically requested
- Typography uses Open Sans font family defined in globals.css
- All colors can be easily updated by modifying the CSS variables in one place
