# Team Page Sunburst Effect Summary

## Changes Made

I've added a subtle rotating sunburst effect to the team page that fades out from the center using the existing red, green, and blue colors from the CSS. The effect rotates slowly and is designed to be non-obtrusive.

### 1. HTML Changes

Added the sunburst HTML structure to the `team.html` file:

```html
<!-- Sunburst effect -->
<div class="sunburst-effect">
    <div class="sunburst-ray sunburst-ray-red"></div>
    <div class="sunburst-ray sunburst-ray-green"></div>
    <div class="sunburst-ray sunburst-ray-blue"></div>
</div>
```

This HTML creates a container for the sunburst effect with three rays in the three brand colors.

### 2. CSS Changes

Added the following CSS to the `_sass/_team-circle.scss` file:

```scss
/* Sunburst effect */
.sunburst-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%; /* Increased size to ensure it covers the entire container */
  height: 120%; /* Increased size to ensure it covers the entire container */
  z-index: 1;
  opacity: 0.3; /* Increased opacity to make it more visible */
  pointer-events: none; /* Allow clicks to pass through */
}

/* Sunburst rays */
.sunburst-ray {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%);
  animation: rotate 60s linear infinite; /* Slow rotation */
}

/* Red ray */
.sunburst-ray-red {
  background: radial-gradient(circle at center, rgba($color-red, 0.7) 0%, rgba($color-red, 0) 70%);
  transform-origin: center;
  animation-delay: 0s;
}

/* Green ray */
.sunburst-ray-green {
  background: radial-gradient(circle at center, rgba($color-green, 0.7) 0%, rgba($color-green, 0) 70%);
  transform-origin: center;
  animation-delay: -20s; /* Offset animation */
}

/* Blue ray */
.sunburst-ray-blue {
  background: radial-gradient(circle at center, rgba($color-blue, 0.7) 0%, rgba($color-blue, 0) 70%);
  transform-origin: center;
  animation-delay: -40s; /* Offset animation */
}
```

Also added `overflow: hidden;` to the `.team-circle-container` to ensure the sunburst doesn't overflow the container.

### 3. Responsive Design Adjustments

Added responsive adjustments to ensure the sunburst effect is visible on all screen sizes:

```scss
@media screen and (max-width: $breakpoint-md) {
  /* Adjust sunburst for responsive layout */
  .sunburst-effect {
    position: fixed; /* Fixed position to ensure it's always visible */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: none;
    z-index: 0; /* Behind everything */
    opacity: 0.2; /* Slightly reduced opacity for mobile */
  }

  /* Make rays larger for better visibility on mobile */
  .sunburst-ray {
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
  }
}
```

Also adjusted z-index values for team circle components to ensure proper layering with the sunburst effect.

## Design Considerations

1. **Enhanced Visibility**: 
   - Increased the size of the sunburst effect to 120% to ensure it covers the entire container
   - Increased the opacity from 0.15 to 0.3 to make it more visible
   - Increased the opacity of the colors in the radial gradients from 0.4 to 0.7
   - Added special handling for mobile devices with fixed positioning and larger rays

2. **Non-obtrusive Design**: 
   - Set `pointer-events: none` so clicks pass through to the team members
   - Positioned with appropriate z-index values to ensure it stays behind all interactive elements
   - Slightly reduced opacity on mobile to 0.2 to prevent it from being too dominant

3. **Color Harmony**: 
   - Used the existing brand colors (red, green, blue) to maintain visual consistency
   - Applied radial gradients that fade out to create a soft, subtle effect

4. **Smooth Animation**: 
   - Set a slow rotation speed (60s) to avoid distraction
   - Added different animation delays to each ray to create a more interesting, layered effect

5. **Responsive Behavior**:
   - Used fixed positioning on mobile to ensure the effect is always visible
   - Made the rays larger on mobile (200%) and centered them for better coverage
   - Adjusted z-index values to ensure proper layering on all screen sizes

## Result

The team page now features a visible, slowly rotating sunburst effect that adds visual interest without being distracting. The effect uses the brand colors and creates a gentle radial highlight behind the team members, drawing attention to the center of the circle where the team information is displayed. The effect is responsive and works well on all screen sizes.
