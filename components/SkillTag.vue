<script setup>
defineProps({
  label: String,
  level: { type: String, default: 'core' } // core | growing
})
</script>

<template>
  <span class="tag" :class="level">{{ label }}</span>
</template>

<style scoped>
.tag {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  padding: 8px 14px;
  border-radius: 4px;
  border: 1px solid var(--line);
  color: var(--ink);
}

.tag.growing {
  border-style: dashed;
  color: var(--muted);
}

.tag.growing::after {
  content: ' \2022 learning';
  color: var(--accent);
  font-size: 0.7rem;
}
</style>
