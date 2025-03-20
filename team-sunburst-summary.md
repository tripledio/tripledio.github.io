# Team Page Sunburst Effect Summary

## Changes Made

I've added a Japanese flag-inspired rotating sunburst effect to the team page using the existing red, green, and blue colors from the CSS. The effect features triangular rays with alternating colors and a circular border where the rays end. The effect rotates slowly and is designed to be visually interesting without being obtrusive.

### 1. HTML Changes

Added the sunburst HTML structure to the `team.html` file:

```html
<!-- Sunburst effect -->
<div class="sunburst-effect">
    <div class="sunburst-circle"></div>
    <div class="sunburst-rays">
        <!-- 12 rays with alternating colors -->
        <div class="sunburst-ray ray-red"></div>
        <div class="sunburst-ray ray-green"></div>
        <div class="sunburst-ray ray-blue"></div>
        <div class="sunburst-ray ray-red"></div>
        <div class="sunburst-ray ray-green"></div>
        <div class="sunburst-ray ray-blue"></div>
        <div class="sunburst-ray ray-red"></div>
        <div class="sunburst-ray ray-green"></div>
        <div class="sunburst-ray ray-blue"></div>
        <div class="sunburst-ray ray-red"></div>
        <div class="sunburst-ray ray-green"></div>
        <div class="sunburst-ray ray-blue"></div>
    </div>
</div>
```

This HTML creates:
- A container for the entire sunburst effect
- A circular border element where the rays end
- A container for the rays that rotates
- 12 triangular rays with alternating colors (red, green, blue)

### 2. CSS Changes

Added the following CSS to the `_sass/_team-circle.scss` file:

```scss
/* Sunburst effect - Japanese flag style with alternating colors */
.sunburst-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%; /* Size relative to container */
  height: 80%; /* Size relative to container */
  z-index: 1;
  opacity: 0.4; /* Opacity for the whole effect */
  pointer-events: none; /* Allow clicks to pass through */
}

/* Circular border where rays end */
.sunburst-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border: 2px solid rgba($color-primary, 0.3);
  border-radius: 50%;
  z-index: 3; /* Above rays */
}

/* Container for rays - this rotates */
.sunburst-rays {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: rotate 60s linear infinite; /* Slow rotation */
  transform-origin: center;
}

/* Individual triangular rays */
.sunburst-ray {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  transform-origin: 0 0; /* Origin at center of circle */
  border-style: solid;
  opacity: 0.7;
}

/* Create 12 triangular rays with alternating colors */
@for $i from 1 through 12 {
  .sunburst-ray:nth-child(#{$i}) {
    transform: rotate(#{$i * 30}deg); /* 360 / 12 = 30 degrees per ray */
    border-width: 0 10px 100px 10px; /* Triangle shape with fixed height */
    border-color: transparent transparent currentColor transparent;
  }
}

/* Ray colors */
.ray-red {
  color: $color-red;
}

.ray-green {
  color: $color-green;
}

.ray-blue {
  color: $color-blue;
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
    opacity: 0.3; /* Slightly reduced opacity for mobile */
  }

  /* Adjust circular border for mobile */
  .sunburst-circle {
    width: 80%;
    height: 80%;
    border-width: 1px;
  }

  /* Adjust rays for mobile */
  .sunburst-rays {
    width: 80%;
    height: 80%;
    top: 10%;
    left: 10%;
  }

  /* Make rays smaller for mobile */
  .sunburst-ray {
    border-width: 0 5px 50px 5px; /* Smaller triangles for mobile */
  }
}
```

Also adjusted z-index values for team circle components to ensure proper layering with the sunburst effect.

## Design Considerations

1. **Japanese Flag Inspiration**: 
   - Created a design similar to the Japanese flag but with alternating colored rays
   - Added a circular border where the rays end to create a defined boundary
   - Used triangular rays to create a classic sunburst pattern

2. **Color Alternation**: 
   - Used the existing brand colors (red, green, blue) in an alternating pattern
   - Created 12 rays (4 of each color) for a balanced, visually appealing design
   - Set opacity to 0.7 for the rays to ensure they're visible but not overwhelming

3. **Non-obtrusive Design**: 
   - Set `pointer-events: none` so clicks pass through to the team members
   - Positioned with appropriate z-index values to ensure it stays behind all interactive elements
   - Used a subtle border color with low opacity for the circular border

4. **Smooth Animation**: 
   - Set a slow rotation speed (60s) to avoid distraction
   - Rotated only the rays container, keeping the circular border static
   - Used CSS transforms for smooth, hardware-accelerated animation

5. **Responsive Behavior**:
   - Used fixed positioning on mobile to ensure the effect is always visible
   - Made the rays and circular border smaller on mobile for better proportions
   - Adjusted z-index values to ensure proper layering on all screen sizes

## Result

The team page now features a Japanese flag-inspired sunburst effect with alternating red, green, and blue triangular rays and a circular border. The effect rotates slowly, creating visual interest without being distracting. The design is clean and defined, with clear rays and a circular boundary, similar to the Japanese flag but with the three brand colors. The effect is responsive and works well on all screen sizes.
