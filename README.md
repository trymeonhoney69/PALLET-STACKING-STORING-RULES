# 360° Interactive Training Experience – Cursor AI Implementation Guide

## Project Purpose

Create a **browser-based 360° interactive experience** that demonstrates a training flow using immersive scenes, interactive hotspots, navigation arrows, and a quiz.

This document defines **exactly what Cursor AI must build**, how scenes are connected, and what interactions are required.

No backend, no authentication, and no database are needed.

---

## Overall Requirements

- Two (2) interactive 360° scenarios
- Scenario 1 acts as the **web landing page**
- A **functional arrow** navigates from Scenario 1 → Scenario 2
- A **“Take Quiz” button** is available
- **5–6 interactive hotspots**
- Fully browser-based
- Responsive layout
- VR-convertible (A-Frame / Marzipano compatible)

---

## Scenario 1 – Landing Page (Entry Scene)

### Purpose
This is the **first scene users see**. It introduces the experience and allows navigation to the next scenario.

---

### Embedded 360° Scene (Landing)

Use the following iframe **exactly as provided**:

```html
<iframe
  src="https://skybox.blockadelabs.com/e/106fc07b0b6acca7a868db2c5d1f000d"
  width="700"
  height="700"
  style="border:0;"
  allow="fullscreen">
</iframe>

```2nd senario
<iframe 
  src="https://skybox.blockadelabs.com/e/e4abfb2ca8fbb8b29c178cdfe92a72ec" 
  width="700" 
  height="700" 
  style="border:0;" 
  allow="fullscreen">
</iframe>
