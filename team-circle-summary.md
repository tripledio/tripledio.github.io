# Team Page Revamp: Circular Layout

## Overview
I've revamped the team page to create an interactive circular layout where team members are arranged in a circle. When a team member is clicked, their bio appears in the middle of the circle, replacing the current table view.

## Files Created/Modified
1. **_sass/_team-circle.scss**: New SCSS file with styles for the circular layout
2. **assets/css/style.scss**: Updated to import the new SCSS file
3. **team.html**: Updated with the new circular layout and JavaScript functionality

## Features
- **Interactive Circular Layout**: Team members are arranged in a circle around a central area
- **Click Functionality**: Clicking on a team member displays their bio in the center
- **Hover Effects**: Team members scale up and show their name on hover
- **Responsive Design**: Layout adapts to different screen sizes
- **Reset Functionality**: Clicking on the center area resets the view

## Technical Implementation
- **CSS**: Used CSS positioning, transitions, and transforms to create the circular layout and animations
- **JavaScript**: Used JavaScript to:
  - Position team members in a circle using trigonometric functions
  - Handle click events to show team member bios
  - Provide reset functionality

## Responsive Behavior
- On larger screens: Team members are arranged in a circle with the bio in the center
- On smaller screens: The layout switches to a more mobile-friendly grid view with the bio at the top

## User Experience
The new circular layout provides a more engaging and interactive experience for users:
1. Users can see all team members at once in an visually interesting arrangement
2. Clicking on a team member provides immediate feedback with the bio appearing in the center
3. The layout is intuitive and easy to navigate
4. Animations and transitions make the experience feel modern and polished

## Browser Compatibility
The implementation uses standard CSS and JavaScript features that are supported in all modern browsers.