<script setup>
// Purely decorative illustration: a single browser-chrome mockup
// representing the admin panels Pooja builds day to day.
</script>

<template>
  <div class="visual">
    <div class="panel">
      <div class="chrome">
        <span class="dot" /><span class="dot" /><span class="dot" />
        <span class="url">admin.local</span>
      </div>

      <div class="body">
        <div class="panel-top">
          <span class="panel-label">Admin overview</span>
          <span class="dot-status" />
        </div>

        <div class="metric">
          <span class="metric-value">128</span>
          <span class="metric-label">Orders today</span>
        </div>
        <div class="track"><span class="fill" /></div>

        <div class="row"><span class="chip" /><span class="bar w-70" /></div>
        <div class="row"><span class="chip" /><span class="bar w-45" /></div>
        <div class="row"><span class="pill">Buyer panel</span><span class="pill pill-quiet">Catalog</span></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.visual {
  position: relative;
  height: 100%;
  min-height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.panel {
  width: 100%;
  max-width: 380px;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: var(--surface);
  box-shadow: 0 20px 40px -22px rgba(28, 31, 38, 0.22);
  overflow: hidden;
}

.chrome {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 16px;
  background: var(--bg);
  border-bottom: 1px solid var(--line);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--line);
}

.url {
  margin-left: 10px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--muted);
}

.body { padding: 22px 22px 26px; }

.panel-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.panel-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--brass);
}

.dot-status {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4C9A6A;
  box-shadow: 0 0 0 3px rgba(76, 154, 106, 0.16);
}

.metric {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 12px;
}

.metric-value {
  font-family: var(--font-display);
  font-size: 2.1rem;
  color: var(--ink);
}

.metric-label {
  font-size: 0.82rem;
  color: var(--muted);
}

.track {
  height: 6px;
  border-radius: 4px;
  background: var(--bg);
  overflow: hidden;
  margin-bottom: 22px;
}

.fill {
  display: block;
  height: 100%;
  width: 68%;
  border-radius: 4px;
  background: linear-gradient(90deg, var(--accent), var(--accent-deep));
}

.row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
}

.chip {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  background: var(--bg);
  border: 1px solid var(--line);
  flex-shrink: 0;
}

.bar {
  height: 8px;
  border-radius: 4px;
  background: var(--bg);
}

.w-45 { width: 45%; }
.w-70 { width: 70%; }

.pill {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  padding: 5px 12px;
  border-radius: 999px;
  border: 1px solid var(--accent);
  color: var(--accent);
}

.pill-quiet {
  border-color: var(--line);
  color: var(--muted);
}

@media (max-width: 860px) {
  .visual { min-height: 260px; }
}
</style>
