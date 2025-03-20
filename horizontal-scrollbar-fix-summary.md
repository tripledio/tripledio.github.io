# Horizontal Scrollbar Fix Summary

## Issue Description

A random horizontal scrollbar was appearing on the website due to excessive white space being created. This was causing an undesirable user experience and affecting the layout of the pages.

## Root Cause Analysis

After investigating the codebase, I identified two main causes of the horizontal scrollbar:

1. **Viewport Width Units in Spotlight Images**: In `_sass/_spotlight.scss`, blog post spotlight images were using `min-width: 100vw;` which forced them to be at least as wide as the viewport. This can cause horizontal overflow because viewport width (vw) units are relative to the viewport, not the container, so if there's any padding or margin on the parent elements, the element will be wider than its container.

2. **Viewport Width Units in Mobile Navigation**: In `_sass/_navigation.scss`, the mobile navigation menu was using `width: 100vw;` which similarly caused it to be exactly as wide as the viewport, potentially causing overflow.

## Changes Made

I made the following changes to fix the issue:

### 1. Spotlight Image Fix

**Before:**
```scss
.blog-post {
  .spotlight {
    .spot {
      .content {
        img {
          min-width: 100vw;
        }
      }
    }
  }
}
```

**After:**
```scss
.blog-post {
  .spotlight {
    .spot {
      .content {
        img {
          width: 100%;
          max-width: 100%;
        }
      }
    }
  }
}
```

This change ensures that the spotlight images are only as wide as their container, not the viewport, preventing horizontal overflow.

### 2. Mobile Navigation Fix

**Before:**
```scss
@media screen and (max-width: $breakpoint-lg) {
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  // ...
}
```

**After:**
```scss
@media screen and (max-width: $breakpoint-lg) {
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  // ...
}
```

This change ensures that the mobile navigation menu is only as wide as its container, not the viewport, preventing horizontal overflow.

## Technical Explanation

The issue occurs because viewport width (vw) units are relative to the viewport, not the container. This means that an element with `width: 100vw;` will be exactly as wide as the viewport, regardless of the width of its container. If the container has any padding or margin, or if there's any padding or margin on the body or html elements, the element will be wider than its container and cause horizontal overflow.

By changing these properties to use percentage units (`width: 100%;` and `max-width: 100%;`), we ensure that the elements are only as wide as their containers, not the viewport, preventing horizontal overflow.

## Result

The horizontal scrollbar no longer appears on the website, providing a cleaner and more professional user experience. The layout is now properly contained within the viewport without any overflow.