# Bungalows Hero Section

Seção premium de apresentação dos bungalows exclusivos com propriedade compartilhada inteligente.

## 🎯 Visão Geral

Esta seção foi implementada em 4 fases com foco em:
- ✨ Experiência do usuário premium
- 🎨 Qualidade estética excepcional
- 📱 Responsividade em todos dispositivos
- ♿ Acessibilidade WCAG AA
- ⚡ Performance otimizada

## 📦 Componentes

### Componentes Principais

#### `BungalowsHeroSection.tsx`
Componente principal que orquestra toda a seção.

#### `BungalowCarousel.tsx`
- Carrossel com Embla Carousel React
- Autoplay com pause on hover
- Ken Burns effect (zoom sutil 20s)
- Navigation arrows com glass morphism
- Keyboard navigation (←/→)
- Progress indicators
- Slide counter
- 5 slides: exterior, sala, suíte, terraço, cozinha

#### `StatsCounter.tsx`
- Animated counter com count-up effect
- Intersection Observer para trigger
- Easing personalizado (easeOutQuart)
- Configurável (duration, prefix, suffix)
- 4 estatísticas: 64 unidades, 50 anos, 80%, 4000+ destinos

#### `ROICard.tsx`
- Comparação de ROI (100% vs 70% ocupação)
- Scroll-triggered animations
- Gradient backgrounds
- Hover effects premium
- Badges de payback
- Variantes: green/blue

#### `FeatureCard.tsx`
- 6 cards de features com ícones Lucide
- Glass morphism effect
- Scroll-triggered com delays escalonados
- Hover effects: scale, rotate, shadow
- Animated background gradients

#### `CTAButtons.tsx`
- 2 botões premium com loading states
- Primary: "Agendar Visita Virtual" (Video icon)
- Secondary: "Ver Detalhes Completos" (ArrowRight icon)
- Shimmer effect no hover
- Pulse animation
- Fill effect no secondary
- Disabled states
- Focus-visible states

#### `TrustBadges.tsx`
- 3 badges de confiança com ícones
- Shield: Gestão Profissional
- FileCheck: Contrato Seguro
- Headphones: Suporte 24/7
- Glass morphism
- Stagger animation
- Hover effects

#### `FloatingBadge.tsx`
- Badge flutuante "64 unidades disponíveis"
- Position: top-right
- Pulse animation
- Glow effect
- Sparkles icon
- Responsivo (texto reduzido mobile)

#### `WaveSeparator.tsx`
- SVG wave separator animado
- Dual wave layers para profundidade
- Wave motion animation (8s/10s)
- Seamless transition para próxima seção
- Responsivo (altura adaptativa)

### Hook Customizado

#### `useIntersectionObserver.ts`
- Hook para detectar visibilidade de elementos
- Usado para scroll-triggered animations
- Configurável (threshold, rootMargin)
- freezeOnceVisible option
- Performance optimized

## 🎨 Design System

### Cores (HSL)

```css
/* Light Mode */
--bungalow-primary: 210 100% 40%;      /* Deep ocean blue */
--bungalow-secondary: 177 70% 41%;     /* Tropical turquoise */
--bungalow-coral: 0 84% 60%;           /* Sunset coral */
--bungalow-charcoal: 210 50% 20%;      /* Charcoal */
--bungalow-warm-white: 0 0% 98%;       /* Warm white */

/* Dark Mode */
--bungalow-primary: 210 100% 50%;
--bungalow-secondary: 177 70% 51%;
--bungalow-coral: 0 84% 70%;
--bungalow-charcoal: 210 40% 80%;
--bungalow-warm-white: 0 0% 10%;
```

### Glass Morphism

```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
}

.glass-card-strong {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
}
```

### Animações

#### Ken Burns Effect
```css
@keyframes ken-burns {
  0% { transform: scale(1); }
  100% { transform: scale(1.05); }
}
.animate-ken-burns {
  animation: ken-burns 20s ease-out infinite alternate;
}
```

#### Wave Motion
```css
@keyframes wave-motion {
  0%, 100% { transform: translateX(0) translateY(0); }
  50% { transform: translateX(-25px) translateY(-5px); }
}
.animate-wave-motion {
  animation: wave-motion 8s ease-in-out infinite;
}
```

## 📱 Responsividade

### Breakpoints
- **xs**: 0-639px (mobile)
- **sm**: 640px-767px
- **md**: 768px-1023px (tablet)
- **lg**: 1024px-1279px (desktop)
- **xl**: 1280px+ (large desktop)

### Layout
- Mobile: Stack vertical, 1 coluna
- Tablet: 2 colunas para feature cards
- Desktop: 60/40 split (carousel/cards), 3 colunas features

## ♿ Acessibilidade

### Implementações
- ✅ Semantic HTML5 (section, article, header, footer)
- ✅ ARIA labels em elementos interativos
- ✅ Keyboard navigation completa
- ✅ Focus-visible states
- ✅ Screen reader optimization
- ✅ Alt texts descritivos em imagens
- ✅ Color contrast ratio 4.5:1+
- ✅ Prefers-reduced-motion support
- ✅ Touch targets 44x44px+

### Keyboard Navigation
- **Tab**: Navegar entre elementos
- **Enter/Space**: Ativar botões
- **←/→**: Controlar carrossel
- **Esc**: Fechar modals (futuro)

## ⚡ Performance

### Otimizações
- Lazy loading em imagens
- GPU acceleration (translateZ)
- will-change: transform/opacity
- content-visibility: auto
- Intersection Observer (não pollyfill necessário)
- CSS animations (não JS-based)
- Debounced scroll events
- Minimal re-renders

### Métricas Alvo
- **FCP**: < 1.5s
- **LCP**: < 2.5s
- **CLS**: < 0.1
- **TTI**: < 3s
- **Lighthouse Score**: 95+

## 🔄 Fluxo de Animação

### Scroll Sequence
1. Header fade-in (título + subtítulo)
2. Floating badge pulse
3. Carousel + feature cards stagger (0ms, 100ms, 200ms)
4. Stats counter count-up
5. ROI cards slide-in (0ms, 150ms)
6. Feature cards grid stagger (0ms, 100ms, 200ms)
7. CTAs scale-in
8. Trust badges stagger

### Hover Effects
- Scale 1.05-1.10
- Rotate 3-12°
- Shadow increase
- Background gradient reveal
- Icon scale + rotate
- Smooth transitions 300ms

## 📝 Conteúdo

### Features
1. **66m² de Conforto**: Dormitório, suíte, 6 pessoas
2. **Comodidades Premium**: Ar, jacuzzi, WiFi, TV
3. **Flexibilidade Total**: 50 anos, uso/aluguel
4. **Intercâmbio Global**: 4.000+ destinos, 110 países
5. **ROI Atrativo**: 29,4% a.a., payback 3,4-5,2 anos
6. **Propriedade Inteligente**: 80% renda, transferível

### Stats
- 64 Unidades Exclusivas
- 50 Anos de Direito
- 80% Renda do Proprietário
- 4.000+ Destinos

### ROI
- **100% Ocupação**: 29,4% a.a., USD 4.940/ano, payback 3,4 anos
- **70% Ocupação**: 19,4% a.a., USD 3.260/ano, payback 5,2 anos

## 🎯 Futuras Melhorias

### Fase 5 (Opcional)
- [ ] Adicionar imagens reais dos bungalows
- [ ] Integrar com formulário de contato
- [ ] Adicionar vídeo tour virtual
- [ ] Implementar modal com mais detalhes
- [ ] Adicionar testimonials de proprietários
- [ ] Integrar com sistema de reservas
- [ ] Adicionar calculadora de ROI interativa
- [ ] Implementar comparação de planos

## 🛠️ Tecnologias

- **React**: 18.3.1
- **TypeScript**: Strict mode
- **Tailwind CSS**: 3.x
- **Embla Carousel React**: 8.6.0
- **Embla Carousel Autoplay**: Plugin
- **Lucide React**: 0.462.0
- **Intersection Observer API**: Nativo

## 📦 Estrutura de Arquivos

```
src/
├── components/
│   ├── BungalowsHeroSection.tsx
│   └── bungalows/
│       ├── BungalowCarousel.tsx
│       ├── StatsCounter.tsx
│       ├── ROICard.tsx
│       ├── FeatureCard.tsx
│       ├── CTAButtons.tsx
│       ├── TrustBadges.tsx
│       ├── FloatingBadge.tsx
│       ├── WaveSeparator.tsx
│       └── README.md (este arquivo)
├── hooks/
│   └── useIntersectionObserver.ts
├── assets/
│   └── attractions/
│       └── bungalows.jpg (placeholder)
└── index.css (design system + animations)
```

## 🎨 Customização

### Alterar Cores
Edite `src/index.css`:
```css
--bungalow-primary: [seu-hsl];
--bungalow-coral: [seu-hsl];
```

### Alterar Timing
Edite componente específico:
```tsx
duration={2000} // StatsCounter
delay={100}     // FeatureCard
```

### Alterar Conteúdo
Edite `BungalowsHeroSection.tsx`:
- Textos em JSX
- Array `slides` no BungalowCarousel
- Features nos FeatureCard props

## 📄 Licença

Parte do projeto YCC Water Park.
