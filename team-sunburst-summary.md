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
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.15; /* Subtle opacity to not be too obtrusive */
  pointer-events: none; /* Allow clicks to pass through */
}

/* Sunburst rays */
.sunburst-ray {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
  animation: rotate 60s linear infinite; /* Slow rotation */
}

/* Red ray */
.sunburst-ray-red {
  background: radial-gradient(circle at center, rgba($color-red, 0.4) 0%, rgba($color-red, 0) 70%);
  transform-origin: center;
  animation-delay: 0s;
}

/* Green ray */
.sunburst-ray-green {
  background: radial-gradient(circle at center, rgba($color-green, 0.4) 0%, rgba($color-green, 0) 70%);
  transform-origin: center;
  animation-delay: -20s; /* Offset animation */
}

/* Blue ray */
.sunburst-ray-blue {
  background: radial-gradient(circle at center, rgba($color-blue, 0.4) 0%, rgba($color-blue, 0) 70%);
  transform-origin: center;
  animation-delay: -40s; /* Offset animation */
}

/* Rotation animation */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

Also added `overflow: hidden;` to the `.team-circle-container` to ensure the sunburst doesn't overflow the container.

## Design Considerations

1. **Non-obtrusive Design**: 
   - Used a low opacity (0.15) to ensure the effect doesn't distract from the team members
   - Set `pointer-events: none` so clicks pass through to the team members
   - Positioned with z-index: 1 to ensure it stays behind all interactive elements

2. **Color Harmony**: 
   - Used the existing brand colors (red, green, blue) to maintain visual consistency
   - Applied radial gradients that fade out to create a soft, subtle effect

3. **Smooth Animation**: 
   - Set a slow rotation speed (60s) to avoid distraction
   - Added different animation delays to each ray to create a more interesting, layered effect

## Result

The team page now features a subtle, slowly rotating sunburst effect that adds visual interest without being distracting. The effect uses the brand colors and creates a gentle radial highlight behind the team members, drawing attention to the center of the circle where the team information is displayed.