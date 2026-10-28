# Dynamic Color Swatch

`src/components/ColorSwatch.astro` extracts colors from the currently
focused Orb and publishes them as CSS variables. It renders inside the
Ase inspector HUD (AseHud.astro, dev only).

## How it works

1. Nelumbo publishes the focused carousel index as `window.__focusedIndex`.
2. The swatch polls that index every 200ms. When it changes, it extracts
   colors from the focused orb's canvas: first the computed style color,
   then a canvas pixel sample (center region, most frequent colors) as a
   fallback.
3. The palette is written to the document root as CSS variables and shown
   in the swatch's own display.
4. When no orb is focused, it falls back to a fixed six-color palette for
   the current theme (dark or light), and re-applies it on theme changes.

## CSS variables

For each palette color `N` (1-based):

```css
--dynamic-color-N: #0064c8;   /* hex */
--dynamic-rgb-N: 0,100,200;    /* "r,g,b" triplet for rgb()/rgba() use */
```

## Using the variables

Any stylesheet can consume them:

```css
.my-component {
  background: linear-gradient(45deg,
    var(--dynamic-color-1),
    var(--dynamic-color-3));
  border: 2px solid var(--dynamic-color-5);
  box-shadow: 0 4px 16px rgba(var(--dynamic-rgb-3), 0.3);
}
```

The site ships no utility classes for these variables; they are consumed
directly, as above. Keep fallback colors in mind: the palette changes
with orb focus, so text set over a dynamic background needs its contrast
checked in both themes.
