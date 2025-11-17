# Navigation System Documentation

## Overview
Sistema de navegação premium inspirado no Beach Park, com gradientes vibrantes, ícones temáticos, mega menus e controles de acessibilidade completos.

## Components

### `Navigation.tsx`
Componente principal que envolve a navbar completa com posicionamento fixo e z-index elevado.

### `TopBar.tsx`
Barra de navegação unificada com gradiente laranja-vermelho vibrante.

**Features:**
- **Gradiente vibrante**: `from-orange-500 via-orange-600 to-red-500`
- **Sticky inteligente**: Reduz altura de 80px → 64px ao rolar (desktop) e 64px → 56px (mobile)
- **Mega menus desktop**: Dropdowns de 600px com imagens, descrições e badges
- **Ícones temáticos coloridos**:
  - PARQUES: `Waves` (azul água `text-blue-400`)
  - RESORTS: `Hotel` (verde `text-green-400`)
  - EXPERIÊNCIAS: `Sparkles` (amarelo `text-yellow-400`)
- **CTAs com ripple effects**: Botões PACOTES (laranja) e INGRESSOS (roxo)
- **Toggle de contraste**: Ícone Moon/Sun no desktop
- **Animações**: Scale up, gradient shift, glow effects

### `MobileMenu.tsx`
Menu lateral premium para dispositivos móveis.

**Features:**
- **Header gradiente laranja**: Logo + Localização/Temperatura + Busca integrada
- **Hero CTA**: Botão "ENCONTRE SUAS FÉRIAS" com gradiente e ícone Compass
- **Ícones coloridos nos accordions**: Bounce animation ao abrir
- **Badges**: "NOVO" (verde) e "POPULAR" (amarelo) em itens relevantes
- **Controles de acessibilidade**: Footer fixo com tamanho de texto e contraste
- **Ripple effects**: Em todos os CTAs principais
- **Slide-in animation**: Animação suave ao abrir

### `AccessibilityControls.tsx`
Controles de acessibilidade com persistência em localStorage.

**Features:**
- **4 níveis de tamanho de texto**: A- (100%), A (112%), A+ (125%), A++ (150%)
- **Toggle de alto contraste**: Muda variáveis CSS para cores de alto contraste
- **Persistência**: Salva preferências no localStorage
- **Touch-friendly**: Botões de 44px mínimo para mobile

## Design System

### Color Tokens
```css
/* Gradientes principais */
--gradient-primary: linear-gradient(to right, #f97316, #ea580c, #dc2626);

/* Botões */
--orange-vibrant: hsl(16, 100%, 60%);
--purple-ticket: hsl(293, 84%, 61%);

/* Ícones temáticos */
--blue-water: #60a5fa;
--green-resort: #4ade80;
--yellow-experience: #facc15;

/* Badges */
--badge-new: #10b981;
--badge-popular: #fbbf24;
```

### Animations
```css
/* Ripple effect - Material Design */
animate-ripple: 0.6s ease-out

/* Gradient shift - botões premium */
animate-gradient-shift: 3s ease infinite

/* Slide down fade - dropdowns */
animate-slide-down-fade: 0.2s ease-out

/* Bounce icon - accordions */
animate-bounce-icon: 0.3s ease-out

/* Slide in right - menu mobile */
animate-slide-in-right: 0.3s ease-out
```

## Accessibility

### WCAG AA Compliance
- ✅ Contraste mínimo de 4.5:1 para texto normal
- ✅ Contraste mínimo de 3:1 para texto grande
- ✅ Navegação por teclado funcional (Tab, Enter, Escape)
- ✅ ARIA labels em todos os elementos interativos
- ✅ Touch targets mínimos de 44x44px
- ✅ Feedback visual em estados hover/focus/active

### Keyboard Navigation
- `Tab`: Navega entre elementos focáveis
- `Enter/Space`: Ativa botões e links
- `Escape`: Fecha dropdowns e menu mobile
- `Arrow keys`: Navega dentro de dropdowns

### Screen Reader Support
- Todos os botões têm `aria-label` descritivos
- Accordions têm `aria-expanded` dinâmico
- Dropdowns têm `aria-haspopup` e `aria-expanded`
- Landmarks semânticos (`<header>`, `<nav>`)

## Performance Optimizations

### React Optimizations
- Componentes memoizados com `React.memo()`
- Hooks otimizados com `useCallback()` e `useMemo()`
- Lazy loading de ícones quando possível

### CSS Optimizations
- GPU acceleration com `will-change: transform`
- `transform: translateZ(0)` para animações suaves
- Animações otimizadas para 60fps
- Redução de repaints com `contain: layout`

### Bundle Size
- Tree-shaking de ícones não utilizados
- Componentes code-split quando apropriado

## Browser Support
- Chrome/Edge: 90+
- Firefox: 88+
- Safari: 14+
- iOS Safari: 14+
- Android Chrome: 90+

## Mobile Optimization
- Touch targets de 44x44px mínimo
- Safe area insets para notches
- Smooth scrolling otimizado
- Drawer com gesture swipe
- Viewport otimizado

## Usage Example

```tsx
import Navigation from '@/components/navigation/Navigation';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Your app content */}
    </div>
  );
}
```

## Customization

### Changing Colors
Edit `tailwind.config.ts` and `src/index.css` for theme colors.

### Adding Menu Items
Edit the `items` arrays in `TopBar.tsx` and `MobileMenu.tsx`.

### Adjusting Animations
Edit keyframes in `tailwind.config.ts` animation section.

## Testing Checklist

- [ ] Desktop: Chrome, Firefox, Safari
- [ ] Mobile: iOS Safari, Android Chrome
- [ ] Tablet: iPad Safari, Android Chrome
- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly
- [ ] High contrast mode works
- [ ] Text size controls work
- [ ] All animations are smooth (60fps)
- [ ] Touch targets are 44px minimum
- [ ] WCAG AA contrast ratios met

## Known Issues
None at this time.

## Future Enhancements
- [ ] Multi-language support
- [ ] Search functionality integration
- [ ] User authentication integration
- [ ] Analytics tracking
- [ ] A/B testing variants
