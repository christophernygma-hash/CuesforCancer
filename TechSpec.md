# Cues for Cancer — Technical Specification

---

## 1. Component Inventory

### shadcn/ui Components (Built-in)

| Component | Purpose | Customization |
|-----------|---------|---------------|
| Button | CTAs, form submission | Custom amber/plum variants |
| Card | Program cards, story cards | Custom shadows, hover states |
| Input | Newsletter email input | Amber focus ring |
| Separator | Visual dividers | Muted color |

### Third-Party Registry Components

None required — all visual effects will be custom-built with GSAP and React Three Fiber for better performance control.

### Custom Components

| Component | Purpose | Props |
|-----------|---------|-------|
| `CurtainReveal` | Hero entrance animation | `children`, `onComplete` |
| `HorizontalScroll` | Pinned horizontal scroll section | `children`, `sectionCount` |
| `ParticleField` | Ambient dust motes | `count`, `color`, `opacity` |
| `SpotlightCursor` | Mouse-following gradient | `color`, `size` |
| `ScrollProgress` | Right-rail navigation dots | `sections`, `activeIndex` |
| `TextScramble` | Decoding text effect | `text`, `duration` |
| `FadeUp` | Scroll-triggered fade animation | `children`, `delay` |

---

## 2. Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| **Curtain Reveal** | GSAP Timeline | Two divs animate translateX on load, then fade content in | High |
| **Particle Dust** | React Three Fiber | Points material with custom shader, mouse repulsion | High |
| **Horizontal Scroll** | GSAP ScrollTrigger | Pin section, scrub horizontal translateX based on scroll | High |
| **Text Scramble** | GSAP + Custom | Character replacement animation with random chars | Medium |
| **Fade Up Reveal** | GSAP ScrollTrigger | Standard opacity/y animation on scroll trigger | Low |
| **Parallax Image** | GSAP ScrollTrigger | Scrub y transform at 0.5x scroll speed | Low |
| **Spotlight Cursor** | CSS + React State | CSS custom properties updated on mousemove | Low |
| **Card Hover Lift** | CSS Transitions | translateY + box-shadow on hover | Low |
| **Section Snap** | GSAP ScrollTrigger | Global snap to section centers | Medium |

---

## 3. Animation Library Choices

### Primary: GSAP (GreenSock)

**Rationale**: Industry-standard for complex scroll-driven animations. Required for:
- Precise scrubbing control
- Timeline sequencing (curtain reveal)
- ScrollTrigger pinning
- Performance optimization

**Packages**:
- `gsap` — Core library
- `@gsap/react` — React integration hooks

### Secondary: React Three Fiber

**Rationale**: Lightweight 3D in React. Used only for hero particle effect.

**Packages**:
- `@react-three/fiber` — Core
- `@react-three/drei` — Utilities (if needed)
- `three` — Three.js core

### Smooth Scrolling: Lenis

**Rationale**: Provides inertia-based smooth scrolling that makes the experience feel premium and consistent with high-end brand sites.

**Package**:
- `lenis` — Smooth scroll library

---

## 4. Project File Structure

```
app/
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── input.tsx
│   │   ├── animations/
│   │   │   ├── CurtainReveal.tsx
│   │   │   ├── FadeUp.tsx
│   │   │   ├── HorizontalScroll.tsx
│   │   │   ├── ParticleField.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   ├── SpotlightCursor.tsx
│   │   │   └── TextScramble.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── MissionSection.tsx
│   │       ├── ProgramsSection.tsx
│   │       ├── StoriesSection.tsx
│   │       ├── EventSection.tsx
│   │       ├── GetInvolvedSection.tsx
│   │       ├── NewsletterSection.tsx
│   │       └── FooterSection.tsx
│   ├── hooks/
│   │   ├── useLenis.ts
│   │   ├── useMousePosition.ts
│   │   └── useScrollProgress.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── images/
│       ├── hero-bg.jpg
│       ├── mission-hands.jpg
│       ├── story-portrait-1.jpg
│       ├── story-portrait-2.jpg
│       └── event-arena.jpg
├── components.json
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 5. Dependencies to Install

### Core Animation
```bash
npm install gsap @gsap/react lenis
```

### 3D/Particles
```bash
npm install three @react-three/fiber
```

### Fonts (via Google Fonts in HTML)
- Cormorant Garamond
- Inter
- JetBrains Mono

---

## 6. Key Implementation Details

### Global Scroll Snap Configuration

```typescript
// In App.tsx or useLenis hook
useEffect(() => {
  const sections = gsap.utils.toArray<HTMLElement>('.section');
  const maxScroll = ScrollTrigger.maxScroll(window);
  
  const snapPoints = sections.map(section => {
    const start = ScrollTrigger.getById(section.id)?.start || 0;
    return start / maxScroll;
  });

  ScrollTrigger.create({
    snap: {
      snapTo: (value) => {
        return snapPoints.reduce((closest, point) => 
          Math.abs(point - value) < Math.abs(closest - value) ? point : closest
        );
      },
      duration: { min: 0.2, max: 0.5 },
      delay: 0,
      ease: "power1.inOut"
    }
  });
}, []);
```

### Curtain Reveal Animation

```typescript
// Timeline sequence
const tl = gsap.timeline();
tl.to('.curtain-left', { xPercent: -100, duration: 1.2, ease: 'power3.inOut' })
  .to('.curtain-right', { xPercent: 100, duration: 1.2, ease: 'power3.inOut' }, '<')
  .from('.hero-headline', { opacity: 0, y: 30, duration: 0.8 }, '-=0.3')
  .from('.hero-subhead', { opacity: 0, y: 20, duration: 0.6 }, '-=0.5')
  .from('.hero-cta', { opacity: 0, scale: 0.9, duration: 0.5 }, '-=0.3');
```

### Horizontal Scroll Section

```typescript
// Programs section pinned horizontal scroll
ScrollTrigger.create({
  trigger: '.programs-section',
  start: 'top top',
  end: '+=300%', // Scroll distance
  pin: true,
  scrub: 1,
  onUpdate: (self) => {
    // Update horizontal position based on scroll progress
    gsap.set('.programs-track', {
      x: -self.progress * (trackWidth - viewportWidth)
    });
  }
});
```

### Spotlight Cursor CSS

```css
.spotlight-container {
  position: relative;
  overflow: hidden;
}

.spotlight-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(212, 165, 116, 0.15),
    transparent 40%
  );
  pointer-events: none;
  z-index: 1;
}
```

---

## 7. Performance Considerations

### Optimization Strategies

1. **Will-Change**: Apply `will-change: transform` to animated elements
2. **GPU Acceleration**: Use `transform` and `opacity` only for animations
3. **Lazy Loading**: Images below fold use `loading="lazy"`
4. **Particle Count**: Limit to 200 particles max
5. **Debounce**: Mouse move handlers debounced at 16ms (60fps)
6. **Reduced Motion**: Respect `prefers-reduced-motion` media query

### Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. Responsive Strategy

### Mobile Adaptations

| Feature | Desktop | Mobile |
|---------|---------|--------|
| Horizontal Scroll | Pinned, scrubbed | Vertical stack, no pin |
| Particle Effect | 200 particles | Disabled |
| Spotlight Cursor | Enabled | Disabled (no hover) |
| Text Scramble | Enabled | Disabled |
| Curtain Reveal | Full animation | Simplified (fade only) |
| Section Snap | Enabled | Disabled |

### Breakpoint Logic

```typescript
const isMobile = window.innerWidth < 768;
const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

// Conditionally enable animations
const enableParticles = !isMobile;
const enableHorizontalScroll = !isMobile;
const enableSpotlight = !isMobile;
```

---

## 9. Color Variables (Tailwind Config)

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      background: {
        DEFAULT: '#F8F5F0',
        primary: '#5D2E46',
        muted: '#EAE3D9',
      },
      foreground: {
        DEFAULT: '#2D2D2D',
        inverse: '#F8F5F0',
        muted: '#8C8C8C',
      },
      accent: {
        DEFAULT: '#D4A574',
        highlight: '#C9A9A6',
      },
    },
    fontFamily: {
      display: ['Cormorant Garamond', 'serif'],
      sans: ['Inter', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
  },
}
```

---

## 10. Build Configuration

### Vite Config

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
  },
});
```

### TypeScript Paths

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## Implementation Checklist

- [ ] Initialize project with webapp-building skill
- [ ] Install GSAP, Lenis, Three.js dependencies
- [ ] Configure Tailwind with custom colors/fonts
- [ ] Add Google Fonts to index.html
- [ ] Build animation utility components
- [ ] Build section components
- [ ] Implement global scroll snap
- [ ] Add responsive breakpoints
- [ ] Test reduced motion support
- [ ] Generate/search for images
- [ ] Build and deploy