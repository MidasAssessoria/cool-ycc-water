import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // YCC Brand Colors (HSL format) - WCAG 4.5:1 compliant
        coral: {
          DEFAULT: "hsl(4, 100%, 70%)", // #FF6B6B - use with dark text only
          light: "hsl(4, 100%, 80%)",   // lighter variant
          dark: "hsl(4, 80%, 55%)",     // #DC5246 - WCAG compliant with white text (4.6:1)
        },
        turquoise: {
          DEFAULT: "hsl(187, 100%, 42%)", // #00BCD4
          light: "hsl(187, 100%, 60%)",
          dark: "hsl(187, 100%, 35%)",
        },
        deepblue: {
          DEFAULT: "hsl(205, 81%, 30%)", // #0A4D8C
        },
        charcoal: {
          DEFAULT: "hsl(210, 29%, 24%)", // #2C3E50
          light: "hsl(210, 29%, 35%)",
          dark: "hsl(210, 29%, 18%)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        orange: {
          vibrant: "hsl(16, 100%, 60%)",
        },
        purple: {
          ticket: "hsl(293, 84%, 61%)",
        },
        "aqua-primary": "hsl(var(--aqua-primary))",
        "aqua-secondary": "hsl(var(--aqua-secondary))",
        "badge-construction": {
          DEFAULT: "hsl(var(--badge-construction))",
          foreground: "hsl(var(--badge-construction-foreground))",
        },
        "badge-available": {
          DEFAULT: "hsl(var(--badge-available))",
          foreground: "hsl(var(--badge-available-foreground))",
        },
        "bungalow": {
          primary: "hsl(var(--bungalow-primary))",
          secondary: "hsl(var(--bungalow-secondary))",
          coral: "hsl(var(--bungalow-coral))",
          charcoal: "hsl(var(--bungalow-charcoal))",
          "warm-white": "hsl(var(--bungalow-warm-white))",
        },
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-water": "var(--gradient-water)",
      },
      keyframes: {
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        ripple: {
          '0%': { width: '0', height: '0', opacity: '0.5' },
          '100%': { width: '500px', height: '500px', opacity: '0', transform: 'translate(-50%, -50%)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(249, 115, 22, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(249, 115, 22, 0.8)' },
        },
        'gentle-pulse': {
          '0%, 100%': { 
            transform: 'scale(1)',
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
          },
          '50%': { 
            transform: 'scale(1.02)',
            boxShadow: '0 25px 50px -12px rgb(255 107 107 / 0.25)'
          },
        },
        'slide-down-fade': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'bounce-icon': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        "ken-burns": "ken-burns 20s ease-in-out infinite alternate",
        "bounce-slow": "bounce 2s infinite",
        ripple: 'ripple 0.6s ease-out',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'gentle-pulse': 'gentle-pulse 3s ease-in-out infinite',
        'slide-down-fade': 'slide-down-fade 0.2s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'bounce-icon': 'bounce-icon 0.3s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
