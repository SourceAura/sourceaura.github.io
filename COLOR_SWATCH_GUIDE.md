# Dynamic Color Swatch Usage Guide

## 🎨 Overview

The Dynamic Color Swatch system automatically extracts colors from focused Orb particles and applies them throughout the site as CSS variables.

## 🔄 How It Works

1. **Color Extraction**: Samples pixels from the currently focused Orb's canvas
2. **Palette Generation**: Creates a 6-color palette from dominant particle colors
3. **Theme Fallback**: Defaults to site dark/light theme when no Orb is focused
4. **CSS Variables**: Applies colors as `--dynamic-color-1` through `--dynamic-color-6`

## 🎯 Available CSS Variables

```css
:root {
  --dynamic-color-1: #000000;  /* Primary color */
  --dynamic-color-2: #ffffff;  /* Secondary color */
  --dynamic-color-3: #0064c8;  /* Accent color */
  --dynamic-color-4: #6400c8;  /* Supporting color */
  --dynamic-color-5: #ff6b35;  /* Highlight color */
  --dynamic-color-6: #4ecdc4;  /* Additional color */

  --dynamic-rgb-1: 0,0,0;    /* RGB format for filters */
  --dynamic-rgb-2: 255,255,255;
  --dynamic-rgb-3: 0,100,200;
  --dynamic-rgb-4: 100,0,200;
  --dynamic-rgb-5: 255,107,53;
  --dynamic-rgb-6: 78,205,196;
}
```

## 🎨 Usage Examples

### Text Styling
```html
<h1 class="text-glow-dynamic">Dynamic Title</h1>
<p class="accent-dynamic">Accent text</p>
```

### Buttons and Links
```html
<button class="button-dynamic">Dynamic Button</button>
<a href="#" class="link-dynamic">Dynamic Link</a>
```

### Cards and Containers
```html
<div class="card-dynamic">
  <h2 class="accent-dynamic">Card Title</h2>
  <p>Card content with dynamic colors</p>
</div>
```

### Gradients and Backgrounds
```html
<div class="gradient-dynamic">Gradient background</div>
<div class="accent-bg-dynamic">Subtle accent background</div>
```

### Interactive Elements
```html
<input type="text" class="focus-dynamic" placeholder="Dynamic focus style">
<div class="glow-animation-dynamic">Animated glow effect</div>
```

## 🎭 Theme Integration

The system automatically detects:
- **Dark Mode**: Uses dark theme palette as fallback
- **Light Mode**: Uses light theme palette as fallback
- **Orb Focus**: Extracts colors from focused Orb particle system

## 🔄 Automatic Updates

- **Focus Detection**: Monitors carousel item focus changes
- **Color Extraction**: Samples Orb canvas every 2 seconds
- **Theme Switching**: Responds to dark/light mode changes
- **Real-time Updates**: CSS variables update immediately

## 🎨 Implementation Tips

1. **Use Semantic Classes**: Apply `accent-dynamic` for emphasis, `highlight-dynamic-3` for primary actions
2. **Combine Colors**: Mix dynamic colors with static colors for hierarchy
3. **Consider Contrast**: Ensure text remains readable against dynamic backgrounds
4. **Test Both Themes**: Verify appearance in dark and light modes

## 🚀 Advanced Usage

### Custom Components
```css
.my-component {
  background: linear-gradient(45deg, 
    var(--dynamic-color-1), 
    var(--dynamic-color-3));
  border: 2px solid var(--dynamic-color-5);
  box-shadow: 0 4px 16px rgba(var(--dynamic-rgb-3), 0.3);
}
```

### Responsive Colors
```css
@media (max-width: 768px) {
  .mobile-dynamic {
    background: var(--dynamic-color-1);
    color: var(--dynamic-color-2);
  }
}
```

## 🎯 Best Practices

1. **Fallback Colors**: Always ensure readable contrast with dynamic colors
2. **Semantic Usage**: Use consistent color hierarchy (primary, accent, highlight)
3. **Smooth Transitions**: Leverage the built-in transition utilities
4. **Accessibility**: Test color combinations for accessibility compliance

The system creates a cohesive, dynamic color experience that responds to user interaction with the Orb particle system!
