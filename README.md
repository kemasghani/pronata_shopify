# 🛍️ BricksActive Homepage Migration – Shopify Theme

**Author:** Kemas Ghani
**Objective:** Migrate the BricksActive homepage into Shopify while maintaining **design fidelity**, **performance**, and **functionality**.

---

## 📌 Overview
This project replicates the BricksActive homepage using **Shopify Liquid**, **JavaScript**, and **CSS**, with a strong focus on **mobile responsiveness** and **page performance**.
The goal was to create a pixel-perfect, interactive, and optimized Shopify homepage.

---

## 🚀 Features & Implementation

### 1️⃣ Hero Banner with Video Background
- 🎥 **Desktop:** Autoplay (muted) video background.
- 📱 **Mobile:** Static image fallback for performance & compatibility.
- 🎯 Centered CTA button with hover effects.
- 💤 **Lazy-loaded** video for faster initial load.
- 🖼️ `<picture>` element with `srcset` for responsive image handling.

---

### 2️⃣ Product Category Slider
- 🔄 Horizontal slider for categories such as **New Arrivals** & **Best Sellers**.
- 📲 Swipe support on mobile.
- 📦 Each card includes:
  - Optimized product image (`srcset`, `loading="lazy"`)
  - Title
  - Price (with sale logic)
  - AJAX **Add to Cart** button (instant update without reload)
- 📡 Data loaded dynamically from Shopify product collections.

---

### 3️⃣ Testimonials & Social Proof
- 💬 Carousel with:
  - User avatars
  - Star ratings ⭐⭐⭐⭐⭐
  - Customer quotes
- ⏱️ Auto-slide every **5 seconds** + manual navigation via dots.
- 🗄️ Testimonials stored in **Shopify metafields** for easy CMS updates.

---

### 4️⃣ Mobile Responsiveness & Performance
- 📱 Fully responsive across mobile, tablet, and desktop.
- 🖼️ **Image Optimization**:
  - `srcset` for responsive image sizes
  - Explicit `width` & `height` to reduce **CLS** (Cumulative Layout Shift)
  - `loading="lazy"` for below-the-fold assets
- ⚡ **Performance Optimization**:
  - Deferred non-critical JavaScript
  - Preloaded LCP (Largest Contentful Paint) images
  - Reserved space for dynamic content to prevent layout shifts

---

## 🛠️ Tech Stack
- **Shopify Liquid** – Templating engine
- **JavaScript (Vanilla)** – Interactivity & sliders
- **CSS** – Styling & responsiveness

---

## 📂 Project Links
- **GitHub Repo:** [https://github.com/kemasghani/pronata_shopify.git](#)
- **Live Demo Store:** [https://4mxn4egjy78uoooa-90620723475.shopifypreview.com](#)

---

## 📄 License
This project was developed for the **Shopify Frontend Developer Technical Test**.
© 2025 Kemas Ghani. All rights reserved.
