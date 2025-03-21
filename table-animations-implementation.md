# Table Animations and UI Component Enhancements

This document outlines the changes made to add subtle highlights and animations to tables and other UI components using the existing color scheme.

## Implementation Instructions

1. Add the new `_table-animations.scss` file to the `_sass` directory
2. Import the file in `assets/css/style.scss` by adding the following line before the `helpers` import:
   ```scss
   @import 'table-animations';
   ```

## Features Added

### Table Enhancements
- **Row Hover Effect**: Subtle background color change and slight horizontal movement when hovering over table rows
- **Header Styling**: Table headers now have a primary color background with white text and a subtle shimmer animation
- **Cell Highlight**: Table cells change color and display an animated underline when hovered
- **Alternating Row Colors**: Even rows have a subtle background color for better readability

### Other UI Component Enhancements
- **Button Hover Effects**: Buttons now have a subtle shimmer effect on hover
- **Card Hover Effects**: Cards slightly lift up and have enhanced shadows on hover
- **Service Icon Animation**: Service icons scale and rotate slightly on hover

## Technical Details

The animations use the existing color scheme:
- Primary color (#21314c) for headers and hover states
- Blue accent color (#00abf5) for highlights
- Gray shades for alternating rows

All animations use CSS transitions and transforms for smooth effects and good performance. The shimmer effect uses CSS keyframe animations.

## Example HTML

For tables to work properly with these animations, they should have this structure:

```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
      <td>Data 3</td>
    </tr>
    <!-- More rows -->
  </tbody>
</table>
```

## Browser Compatibility

These animations work in all modern browsers. For older browsers that don't support CSS animations, the tables will still be functional but without the animation effects.