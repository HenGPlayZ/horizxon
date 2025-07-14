# SplitText Animation Component Guidelines

This document provides guidelines on how to use the `SplitText` component for text animations in the Horizxon (HZN) website.

## Overview

The `SplitText` component enables animated text effects by splitting text into characters, words, or lines. It uses GSAP (GreenSock Animation Platform) for smooth animations and Intersection Observer to trigger animations when content comes into view.

## Installation

The component requires GSAP and react-intersection-observer:

```bash
npm install gsap react-intersection-observer
```

## Basic Usage

```jsx
import SplitText from "@/components/ui/SplitText";

<SplitText
  text="Your text here"
  className="text-2xl font-bold"
  splitType="chars"
  delay={30}
  duration={0.6}
  ease="power3.out"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
/>;
```

## Props

| Prop                        | Type                          | Default                 | Description                                         |
| --------------------------- | ----------------------------- | ----------------------- | --------------------------------------------------- |
| `text`                      | string                        | (required)              | The text to animate                                 |
| `className`                 | string                        | ""                      | CSS classes to apply                                |
| `style`                     | object                        | {}                      | Inline styles for the container                     |
| `delay`                     | number                        | 50                      | Delay between animating each element (milliseconds) |
| `duration`                  | number                        | 0.6                     | Animation duration in seconds                       |
| `ease`                      | string                        | "power3.out"            | GSAP easing function                                |
| `splitType`                 | "chars" \| "words" \| "lines" | "chars"                 | How to split the text                               |
| `from`                      | object                        | `{ opacity: 0, y: 40 }` | Starting animation values                           |
| `to`                        | object                        | `{ opacity: 1, y: 0 }`  | Ending animation values                             |
| `threshold`                 | number                        | 0.1                     | Intersection observer threshold                     |
| `rootMargin`                | string                        | "-100px"                | Intersection observer root margin                   |
| `textAlign`                 | string                        | "left"                  | Text alignment                                      |
| `onLetterAnimationComplete` | function                      | undefined               | Callback when animation completes                   |

## Recommended Usage

### Where to Use

1. **Hero Section Headings**: Use character animations for main headings to create impact
2. **Section Titles**: Use word animations for a balanced effect
3. **Feature Introductions**: Use line animations for paragraph text
4. **Call to Action Text**: Use character animations to draw attention

### Where NOT to Use

1. **Long Paragraphs**: Avoid character animations on long text blocks
2. **Navigation Items**: Avoid on frequently accessed UI elements
3. **Form Labels**: Avoid on functional UI elements
4. **Footer Content**: Not needed for less prominent content

## Animation Types

### Character Animation

```jsx
<SplitText
  text="Welcome to Horizxon"
  splitType="chars"
  delay={30}
  duration={0.8}
/>
```

Best for: Main headlines, short important phrases, brand names

### Word Animation

```jsx
<SplitText
  text="Web Development Solutions"
  splitType="words"
  delay={100}
  duration={0.7}
/>
```

Best for: Section headings, medium-length titles, feature names

### Line Animation

```jsx
<SplitText
  text="We deliver cutting-edge web solutions.\nBuilt with modern technologies."
  splitType="lines"
  delay={150}
  duration={0.6}
/>
```

Best for: Short paragraphs, introductory text, testimonials

## Animation Presets

### Fade Up (Subtle)

```jsx
from={{ opacity: 0, y: 20 }}
to={{ opacity: 1, y: 0 }}
duration={0.5}
ease="power2.out"
```

### Slide In (Dynamic)

```jsx
from={{ opacity: 0, x: -30 }}
to={{ opacity: 1, x: 0 }}
duration={0.7}
ease="back.out(1.2)"
```

### Scale In (Attention-Grabbing)

```jsx
from={{ opacity: 0, scale: 0.8 }}
to={{ opacity: 1, scale: 1 }}
duration={0.8}
ease="elastic.out(1, 0.5)"
```

## Best Practices

1. **Performance**: Limit animations to important UI elements
2. **Timing**: Use shorter delays (30-50ms) for characters, longer delays (80-120ms) for words
3. **Consistency**: Use similar animation styles across the site
4. **Accessibility**: Ensure text is still readable during and after animations
5. **Mobile**: Consider simpler animations on mobile devices
