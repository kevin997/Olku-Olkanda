# Taramoney UI/UX Design System Documentation

> **Source**: https://taramoney.com/
> **Date Analyzed**: 2025-10-07
> **Purpose**: Reusable design patterns for product catalogue and e-commerce projects

---

## 🎨 Design Philosophy

### Core Principles
1. **Conversational & Friendly**: Approachable language and tone
2. **Bold Typography**: Large, impactful headings (4xl to 7xl)
3. **High Contrast**: Strong color contrast for accessibility
4. **Spacious Layout**: Generous padding and margins
5. **Mobile-First**: Responsive design with mobile considerations
6. **Smooth Animations**: Subtle opacity and transform transitions

---

## 🎯 Color System

### Primary Colors
- **Accent Color**: `rgb(255, 59, 0)` - Vibrant orange/red for CTAs
- **Background**: Light/neutral backgrounds with border accents
- **Text**: High contrast text colors
- **Border**: `var(--border)` - Subtle borders for separation

### Color Usage
- **CTAs**: Bright accent color (orange-red)
- **Secondary Actions**: Black backgrounds with white text
- **Borders**: Subtle, low-contrast borders for cards and sections

---

## 📐 Layout Patterns

### 1. Hero Section
```
Structure:
- Full-width container
- Two-column layout (text left, image right on desktop)
- Reverses to single column on mobile
- Large heading (text-4xl to text-7xl)
- Subheading with leading-[1em]
- Primary CTA button with arrow
```

**Key Features**:
- Responsive flex layout (flex-col-reverse on mobile, lg:flex-row on desktop)
- Images with rounded corners (rounded-xl)
- Generous spacing (gap-10)

### 2. Product/Feature Grid
```
Structure:
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Card-based design with borders
- Hover effects with transitions
- Icon + Title + Description pattern
```

**Card Styling**:
- Border radius: `rounded-xl`
- Padding: `p-4` to `p-6`
- Border: `border` with `border-color: var(--text)`
- Hover: `transition-all` with shadow or scale effects

### 3. Pricing Cards
```
Structure:
- Three-tier layout (grid-cols-1 md:grid-cols-3)
- Featured card with accent background
- Price prominently displayed
- Feature list with checkmarks
- CTA button at bottom
```

**Pricing Card Elements**:
- Badge/Label at top
- Large price display
- Feature list with icons (fa-circle-check)
- Rounded CTA button

### 4. FAQ/Accordion Section
```
Structure:
- Two-column grid (md:grid-cols-2)
- Expandable cards with chevron icons
- Border styling matching theme
- Centered heading section
```

---

## 🔘 Button Styles

### Primary Button (BtnArrow)
```
Components:
1. Text container: px-6 py-3, rounded-full, font-semibold
2. Icon container: circular (w-[3.5em] h-[3.5em]), grid place-items-center
3. Arrow icon: fa-arrow-up-right

Colors:
- Primary: Accent color background (rgb(255, 59, 0))
- Secondary: Black background
- Text: White

Animation: Group hover transitions
```

### Secondary Button
```
Style:
- Inline-flex with border
- Rounded-full
- Badge + Text combination
- Hover shadow effect
```

---

## 📱 Typography Scale

### Headings
- **H1**: `text-4xl sm:text-7xl` - Hero headings
- **H2**: `text-4xl sm:text-7xl` - Section headings
- **H3**: `text-3xl` - Card/Feature titles
- **Body Large**: `text-2xl` - Subheadings
- **Body**: `text-lg sm:text-5xl` - Italic descriptions

### Font Weights
- **Bold**: `font-bold` - Headings
- **Semibold**: `font-semibold` - Buttons, emphasis
- **Medium**: `font-medium` - Body text, labels

### Line Heights
- **Tight**: `leading-[.9em]` or `leading-[1em]` - Headings
- **Normal**: Default - Body text

---

## 🎭 Animation Patterns

### Scroll Animations
```css
Initial State:
- opacity: 0
- transform: translateY(20px) or translateY(30px)

Animated State:
- opacity: 1
- transform: translateY(0)
```

### Hover Effects
- **Cards**: `transition-all` with shadow or border changes
- **Buttons**: Group transitions with scale or color changes
- **Images**: Smooth transitions on hover

---

## 🖼️ Image Handling

### Image Optimization
- Next.js Image component with optimization
- Responsive sizes: `w=1080`, `w=2048`, `w=3840`
- Quality: `q=75`
- Format: WebP for performance

### Image Styling
- **Rounded corners**: `rounded-xl`
- **Object fit**: `object-cover` for consistent sizing
- **Max width**: Constrained within containers

---

## 📦 Component Patterns

### 1. Feature Card
```
Structure:
- Icon/Number indicator
- Heading (text-3xl)
- Description text
- Optional image
- Border styling
```

### 2. Brand Showcase
```
Structure:
- Horizontal scrolling carousel
- Grayscale images with hover color
- Infinite loop animation
- Responsive sizing (w-[256px])
```

### 3. Comparison Section (Before/After)
```
Structure:
- Two-column layout
- Icon indicators (X for before, check for after)
- Contrasting colors
- Clear visual hierarchy
```

### 4. CTA Section
```
Structure:
- Full-width background
- Centered content
- Large heading + description
- Primary CTA button
- Optional image
```

---

## 🎨 Spacing System

### Container Spacing
- **Padding Y**: `py-20 sm:py-40` - Major sections
- **Padding X**: `px-10 sm:px-0` - Horizontal padding
- **Gap**: `gap-4`, `gap-10` - Between elements

### Content Width
- **Narrow**: `w-[50%]` - Centered content
- **Medium**: `w-[75%]` - Section content
- **Wide**: `w-[80%]` or `w-[90%]` - Full sections

---

## 🔧 Utility Classes

### Flexbox Patterns
```css
- flex items-center justify-between
- flex flex-col gap-0
- inline-flex justify-start items-center
- grid place-items-center
```

### Grid Patterns
```css
- grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- grid place-items-center
```

### Border & Radius
```css
- rounded-xl (cards)
- rounded-full (buttons, badges)
- rounded-4xl (sections)
- border with var(--border)
```

---

## 📋 Best Practices for E-Commerce Catalogue

### Product Display
1. **Grid Layout**: Use 2-4 columns depending on screen size
2. **Card Design**: Consistent border, padding, and hover effects
3. **Image Quality**: High-resolution with Next.js optimization
4. **Quick Actions**: Visible CTA buttons (WhatsApp, Add to Cart)

### Navigation
1. **Sticky Header**: Keep navigation accessible
2. **Category Filters**: Easy product filtering
3. **Search**: Prominent search functionality

### Mobile Experience
1. **Touch-Friendly**: Large tap targets (min 44x44px)
2. **Responsive Images**: Proper sizing for mobile
3. **Simplified Layout**: Single column on mobile

### Performance
1. **Lazy Loading**: Load images as needed
2. **Optimized Images**: WebP format, proper sizing
3. **Minimal JavaScript**: Fast page loads

---

## 🎯 Key Takeaways for Olkunda Ameublement

1. **Use bold, large typography** for product names and categories
2. **Implement card-based grid** for product display
3. **Add smooth hover effects** on product cards
4. **Use accent color** (can be customized) for CTAs
5. **Maintain generous spacing** between elements
6. **Ensure mobile responsiveness** with flex/grid
7. **Add WhatsApp integration** with prominent buttons
8. **Implement shopping cart** with visual feedback
9. **Use high-quality images** with Next.js optimization
10. **Keep navigation simple** and accessible

---

## 📚 Implementation Notes

- All CSS custom properties use `var(--property-name)` pattern
- Font Awesome icons for UI elements
- Transitions use `transition-all` for smooth effects
- Responsive breakpoints: `sm:`, `md:`, `lg:`
- Color scheme can be customized via CSS variables

---

**End of Documentation**
