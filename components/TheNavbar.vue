<script setup>
const links = [
  { to: '#about', label: 'About' },
  { to: '#skills', label: 'Skills' },
  { to: '#projects', label: 'Projects' },
  { to: '#experience', label: 'Experience' },
  { to: '#contact', label: 'Contact' }
]

const open = ref(false)
const close = () => { open.value = false }
</script>

<template>
  <header class="nav">
    <div class="wrap nav-inner">
      <a href="#top" class="brand" @click="close">
        <span class="brand-mark">portofilo</span>
      </a>

      <nav class="links">
        <a v-for="l in links" :key="l.to" :href="l.to">{{ l.label }}</a>
      </nav>

      <button
        class="toggle"
        type="button"
        :aria-expanded="open"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <span :class="{ x: open }" />
        <span :class="{ x: open }" />
      </button>
    </div>

    <nav v-if="open" class="drawer">
      <a v-for="l in links" :key="l.to" :href="l.to" @click="close">{{ l.label }}</a>
    </nav>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(246, 245, 241, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--line);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
}

.brand-mark {
  font-family: var(--font-mono);
  font-weight: 500;
  color: var(--accent);
  font-size: 1.05rem;
}

.links {
  display: flex;
  gap: 28px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.links a {
  text-decoration: none;
  color: var(--muted);
  transition: color 0.2s ease;
}

.links a:hover {
  color: var(--ink);
}

.toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
}

.toggle span {
  display: block;
  height: 2px;
  width: 100%;
  background: var(--ink);
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.toggle span.x:first-child { transform: translateY(3.5px) rotate(45deg); }
.toggle span.x:last-child { transform: translateY(-3.5px) rotate(-45deg); }

.drawer {
  display: flex;
  flex-direction: column;
  padding: 8px 24px 20px;
  border-top: 1px solid var(--line);
  font-family: var(--font-mono);
  font-size: 0.95rem;
}

.drawer a {
  text-decoration: none;
  color: var(--ink);
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}

.drawer a:last-child { border-bottom: none; }

@media (max-width: 720px) {
  .links { display: none; }
  .toggle { display: flex; }
}
</style>
