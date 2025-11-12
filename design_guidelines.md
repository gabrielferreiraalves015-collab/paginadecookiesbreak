# Design Guidelines: Truque do Sono - Sales Landing Page

## Design Approach
**Reference-Based Approach**: Sales/Landing page with high-impact hero section, following proven conversion-focused patterns from products like Headspace, Calm, and direct-response landing pages.

## Color Palette
- **Primary Background**: #000000 (Black)
- **Primary Text**: White (#FFFFFF)
- **Accent/Highlight**: Yellow (vibrant, energetic tone - suggest #FFD700 or #FFC107)
- **Supporting**: Dark grays for subtle contrast where needed

## Typography Hierarchy

**Title Structure** (Multi-part headline):
- Part 1: "Truque do sono" - White, Bold, Large (text-5xl to text-6xl desktop)
- Part 2: "Corrige a causa principal do sono não reparador" - White, continuation
- Part 3: "para que você durma a noite toda e acorde se sentindo revigorado, descansado e pronto para começar o dia" - **Yellow accent**, same size as parts 1-2

**Subtitle Hierarchy**:
- Primary Subtitle: "Para quem tem dificuldade em dormir bem à noite. - Pode ser bastante frustrante." - Medium size (text-xl to text-2xl), white
- Secondary Subtitle: "Você pode estar dormindo, deitado imóvel na cama por oito ou nove horas todas as noites, e ainda assim acordar todas as manhãs com a sensação de que não dormiu nada." - Smaller (text-base to text-lg), slightly muted white/gray

**Call-out Text**: "Parece familiar?" - Standalone, medium-large size with spacing above

## Layout System

**Spacing Units**: Use Tailwind spacing - py-16, py-20, py-24 for sections; p-8, p-12 for internal spacing; gap-6, gap-8 for element separation

**Hero Section Layout**:
- Black background (#000000) spanning full width
- Two-column grid on desktop (60/40 or 50/50 split)
- Left column: All text content (title, subtitles, callout)
- Right column: Baby sleeping image (provided asset)
- Mobile: Stack vertically - text first, then image

**Content Flow** (exact order):
1. Multi-part title (white + yellow)
2. Primary subtitle
3. Secondary subtitle (smaller)
4. Spacer (py-8 or py-12)
5. "Parece familiar?" text
6. Transition image at bottom

## Images

**Hero Image**: 
- Location: Right side of hero section
- Asset: Baby sleeping image (provided)
- Treatment: Full height of hero section, object-cover or object-contain
- Mobile: Full width below text content

**Transition Element**:
- Location: Bottom of first block
- Asset: https://assets-v0.cdn-bio.com/img/trans/from-red-red.png
- Purpose: Creates pointed/arrow visual effect transitioning to next section
- Implementation: Full width, positioned at section bottom

## Component Specifications

**Hero Section**:
- Full viewport height or auto-height based on content
- Black background
- Generous padding (py-20 to py-32)
- Max-width container for text content (max-w-7xl)
- Text content has breathing room from image

**Typography Treatment**:
- Line height: Generous for readability (leading-relaxed to leading-loose)
- Title: Bold weight (font-bold or font-extrabold)
- Subtitles: Normal to medium weight
- Color contrast: Ensure white text pops on black, yellow is vibrant

## Responsive Behavior

**Desktop (lg and above)**:
- Side-by-side layout (text left, image right)
- Ample padding and spacing
- Title can span 60% width

**Tablet (md)**:
- Maintain two-column or transition to stack
- Reduce font sizes moderately

**Mobile (base)**:
- Single column stack
- Text content first
- Image below (full width)
- Reduce padding (py-12)
- Scale down typography (text-3xl to text-4xl for title)

## Animation & Interactions
Minimal animations - focus on content clarity and conversion. Optional subtle fade-in on scroll if appropriate for sales psychology.

## Critical Implementation Notes
- Exact text content must be preserved as provided
- Color scheme is fixed: Black background, white/yellow text
- Image placement is specific: right side on desktop
- Transition image creates visual flow to next section
- This is a sales page - prioritize readability and persuasive hierarchy