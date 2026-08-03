<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="wrap footer-inner">
      <span>&copy; {{ year }} Pooja Sharma</span>
      <span class="loc">Jaipur, Rajasthan &middot; Built with Nuxt</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  padding: 32px 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--muted);
}
</style>
