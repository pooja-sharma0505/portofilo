<script setup>
defineProps({
  name: String,
  description: String,
  stack: Array,
  href: String,
  demo: { type: String, default: '' },
  index: String,
  highlights: { type: Array, default: () => [] }
})
</script>

<template>
  <article class="card">
    <div class="card-head">
      <span class="index">{{ index }}</span>
    </div>
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
    <ul v-if="highlights.length" class="highlights">
      <li v-for="h in highlights" :key="h">{{ h }}</li>
    </ul>
    <div class="stack">
      <span v-for="s in stack" :key="s" class="chip">{{ s }}</span>
    </div>
    <div class="card-links">
      <a v-if="demo" :href="demo" target="_blank" rel="noopener" class="card-link">
        Live demo <span class="arrow">&#8599;</span>
      </a>
      <a v-if="href" :href="href" target="_blank" rel="noopener" class="card-link">
        Code <span class="arrow">&#8599;</span>
      </a>
    </div>
  </article>
</template>

<style scoped>
.card {
  display: block;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: 6px;
  color: var(--ink);
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.card:hover { border-color: var(--accent); transform: translateY(-2px); }

.card-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.index {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--brass);
}

.arrow { color: var(--accent); }

h3 { font-size: 1.2rem; }

.highlights {
  margin: 12px 0 0;
  padding-left: 18px;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.6;
}

.highlights li { margin-bottom: 2px; }

.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.chip {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  padding: 4px 10px;
  border: 1px solid var(--line);
  border-radius: 20px;
  color: var(--muted);
}

.card-links {
  display: flex;
  gap: 16px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid var(--line);
}

.card-link {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--ink);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.card-link:hover { color: var(--accent); }
</style>