---
# You can also start simply with 'default'
theme: apple-basic # bricks
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# some information about your slides (markdown enabled)
title: Universal Beat & Play
info: |
  ## Universal Beat & Play 🕹️📲
  Développe des jeux musicaux multi-plateformes avec *React Native*
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-up
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# open graph
# seoMeta:
#  ogImage: https://cover.sli.dev
highlighter: shiki
lineNumbers: false
---

<style>
.main-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 2rem;
}

.main-title h1 {
  background: linear-gradient(to right, #00E8FF, #FF00F7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4rem !important;
  line-height: 1.2 !important;
  margin-bottom: 1.5rem !important;
  padding: 0.5rem 0;
}

.main-title h2 {
  font-size: 2rem !important;
  line-height: 1.4 !important;
  opacity: 0.75;
  padding: 0.5rem 0;
}

.emoji {
  -webkit-background-clip: initial !important;
  -webkit-text-fill-color: initial !important;
  display: inline-block;
}

.bold-gradient {
  background: linear-gradient(to right, #00E8FF, #FF00F7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

.slide-title, h1 {
  color: #00E8FF;
  font-size: 2.5rem !important;
  margin-bottom: 2rem !important;
}

.mermaid-diagram {
  border: 2px solid;
  border-image: linear-gradient(to right, #00E8FF, #FF00F7) 1;
  border-radius: 8px;
  padding: 1rem;
}

.code-block {
  border: 2px solid;
  border-image: linear-gradient(to right, #00E8FF, #FF00F7) 1;
  border-radius: 8px;
}

/* Styles pour le diagramme de Venn */
.border-gradient {
  border-image: linear-gradient(45deg, #00E8FF, #FF00F7) 1;
}

.border-\[\#00E8FF\] {
  box-shadow: 0 0 15px rgba(0, 232, 255, 0.2);
}

.border-\[\#FF00F7\] {
  box-shadow: 0 0 15px rgba(255, 0, 247, 0.2);
}

.bg-\[\#00E8FF10\] {
  background: rgba(0, 232, 255, 0.05);
}

.bg-\[\#FF00F710\] {
  background: rgba(255, 0, 247, 0.05);
}

/* Style pour les listes du diagramme de Venn */
.venn-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.venn-list li {
  display: flex;
  gap: 0.5rem;
}

.venn-list.text-right li {
  justify-content: flex-end;
}

/* Styles pour les points négatifs */
.negative-point {
  opacity: 0.6;
  font-style: italic;
  position: relative;
  padding-left: 1.5em;
}

.negative-point::before {
  content: "🚫";
  position: absolute;
  left: 0;
}
</style>

<div class="main-title">
  <h1>Universal Beat & Play <span class="emoji">🕹️📲</span></h1>
  <h2>Développe des jeux musicaux <br/>multi-plateformes avec <span class="bold-gradient">React Native</span></h2>
</div>

<div class="abs-bl ml-4 mb-4 flex items-center gap-4">
  <img src="/images/kim-profile.jpg" class="w-16 h-16 rounded-full border-2 border-gradient" />
  <div class="flex flex-col">
    <div class="text-xl font-bold">Kim Chouard</div>
    <div class="text-sm opacity-75">
      CTO @ <a href="https://odiseimusic.com" class="text-blue-500 hover:underline">Odisei Music</a>
    </div>
  </div>
</div>

<div class="abs-br mr-4 mb-4 flex items-center gap-4">
  <div class="flex flex-col items-end">
    <div class="text-xl">23 Avril 2025</div>
    <div class="text-sm opacity-75">@Deezer Bordeaux</div>
  </div>
  <img src="/images/deezer.webp" class="w-16 h-16" />
</div>

---
layout: center
class: text-center
transition: slide-up
---

# Levez la main si...

<div class="grid grid-cols-3 gap-12 mt-12">
  <div v-click class="flex flex-col items-center">
    <div class="text-2xl font-bold mb-4">Mobile Dev?</div>
    <div class="flex gap-4">
      <img v-after src="/images/x-code.png" class="w-20 h-20" />
      <img v-after src="/images/android-studio.svg" class="w-20 h-20" />
    </div>
  </div>
  <div v-click class="flex flex-col items-center">
    <div class="text-2xl font-bold mb-4">Web Dev?</div>
    <img v-after src="/images/web-dev.png" class="w-20 h-20" />
  </div>
  <div v-click class="flex flex-col items-center">
    <div class="text-2xl font-bold mb-4">React?</div>
    <img v-after src="/images/react.svg" class="w-20 h-20" />
  </div>
</div>

---
layout: center
class: text-center
transition: slide-left
---

# Levez la main si...

<div class="flex flex-row items-start gap-8">
  <div v-click class="flex flex-col items-center">
    <div class="text-2xl font-bold mb-4">Vous êtes un peu flemmard? 😅</div>
    <img v-click src="/images/lazy-meme.jpeg" class="w-80 h-60 rounded-lg shadow-lg" />
  </div>
  <div v-click class="flex flex-col items-center">
    <div class="text-2xl font-bold mb-4">La solution?</div>
    <img v-after src="/images/react-native.svg" class="w-60 h-60" />
  </div>
</div>

---
layout: default
class: text-center
transition: slide-left
---

# Write once, run everywhere

<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px]">
  <div class="relative h-[500px]">
    <div v-click class="absolute -left-[150px] -top-[150px] w-[850px] h-[850px] rounded-full border-2 border-[#00E8FF] bg-[#00E8FF10] flex items-center">
      <div class="text-left pl-48 ml-[0px] -mt-[50px]">
        <div class="font-bold text-xl mb-4 text-[#00E8FF]">Mobile Dev</div>
        <ul class="venn-list">
          <li class="mb-2">📱 "Native Feel"</li>
          <li class="mb-2">✨ Accès complet: <br />capteurs, caméra, GPS...</li>
          <li class="mb-2">🚀 Performances</li>
          <li class="mb-2 opacity-50">🚫 1 équipe / platforme</li>
          <li class="mb-2 opacity-50">🚫 MAJ App Store longues</li>
        </ul>
      </div>
    </div>
    <div v-click class="absolute -right-[150px] -top-[150px] w-[850px] h-[850px] rounded-full border-2 border-[#FF00F7] bg-[#FF00F710] flex items-center justify-end">
      <div class="text-right pr-48 -mt-[50px]">
        <div class="font-bold text-xl mb-4 text-[#FF00F7]">Web Dev</div>
        <ul class="venn-list text-right">
          <li class="mb-2">⚡️ Dev Rapide</li>
          <li class="mb-2">🔄 Releases faciles</li>
          <li class="mb-2">📦 Gros écosystème</li>
          <li class="mb-2 opacity-50">🚫 Seulement sur navigateur</li>
          <li class="mb-2 opacity-50">🚫 Performance et<br />features limitées</li>
        </ul>
      </div>
    </div>
    <div v-click class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] z-10">
      <div class="text-center">
        <div class="font-bold text-2xl mb-6 bold-gradient">React Native</div>
        <ul class="venn-list text-left">
          <li class="mb-3">🔥 One Code</li>
          <li class="mb-3">🎯 Compiled Natively</li>
          <li class="mb-3">🚀 60 FPS</li>
          <li class="mb-3">🌈 UI Natives</li>
          <li class="mb-3">🔄 Releases faciles</li>
        </ul>
      </div>
    </div>
  </div>
</div>

---
layout: default
transition: slide-left
---

# Comment ça marche?

```mermaid
graph LR
    A[Code React Native] --> B[Metro Bundler]
    B --> C[iOS Native]
    B --> D[Android Native]
    B --> E[Web]
    C --> F[App iOS]
    D --> G[App Android]
    E --> H[App Web]

    style A fill:#1B1B1F,stroke:#A855F7,color:#A855F7
    style B fill:#1B1B1F,stroke:#A855F7,color:#A855F7
    style C fill:#1B1B1F,stroke:#00E8FF,color:#00E8FF
    style D fill:#1B1B1F,stroke:#00E8FF,color:#00E8FF
    style E fill:#1B1B1F,stroke:#FF00F7,color:#FF00F7
    style F fill:#1B1B1F,stroke:#00E8FF,color:#00E8FF
    style G fill:#1B1B1F,stroke:#00E8FF,color:#00E8FF
    style H fill:#1B1B1F,stroke:#FF00F7,color:#FF00F7
```

<div class="mt-8">
  <div v-click class="text-xl font-bold">Le meilleur des deux mondes</div>
  <ul class="list-disc pl-4 mt-4">
    <li v-click>Performance native</li>
    <li v-click>Développement rapide</li>
    <li v-click>Code partageable</li>
  </ul>
</div>

---
layout: default
transition: slide-left
---

# De Web à Mobile

<div class="grid grid-cols-2 gap-8 w-full">
<div>

```tsx {all|2-3|6-16|all}
// App.tsx
import React from 'react';

const Homepage = () => {
  return (
    <div class="w-[400px] bg-[#1B1B1F] rounded-lg shadow-xl overflow-hidden p-8 flex flex-col items-center justify-center">
      <h1 class="text-2xl font-bold mb-2 text-white text-center">
        Welcome to<br />Odisei Play!
      </h1>
      <p className="text-gray-400">
        Let's make some music! 🎵
      </p>
      <button class="relative px-8 py-2 mt-6 text-xl font-bold rounded-xl bg-gradient-to-r from-[#FF00F7] via-[#FF00F7] to-[#d800d2] transition-all duration-300 -translate-y-0.5 shadow-[0_4px_0_rgb(153,0,140)] hover:-translate-y-1 hover:shadow-[0_6px_0_rgb(153,0,140)] active:translate-y-0.5 active:shadow-[0_0px_0_rgb(153,0,140)] before:absolute before:inset-0 before:bg-white before:opacity-20 before:rounded-xl before:transition-all hover:before:opacity-30 active:before:opacity-40">
        Enter
      </button>
    </div>
  );
};

export default Homepage;
```

</div>
<div class="flex">
  <!-- Simulateur avec bordure gradient -->
  <div class="
    relative p-8 rounded-[2rem]
    before:absolute before:inset-0
    before:p-[2px] before:rounded-[2rem]
    before:bg-gradient-to-r before:from-[#00E8FF] before:to-[#FF00F7]
    before:content-['']
    after:absolute after:inset-[1px]
    after:rounded-[calc(2rem-1px)]
    after:bg-[#1B1B1F]
    after:content-['']
  ">
    <div class="relative z-10 w-[400px] bg-[#1B1B1F] rounded-lg overflow-hidden p-8 flex flex-col items-center justify-center">
      <h1 class="text-2xl font-bold mb-2 text-white text-center">
        Welcome to<br />Odisei Play!
      </h1>
      <p className="text-gray-400">
        Let's make some music! 🎵
      </p>
      <button class="relative px-8 py-2 mt-6 text-xl font-bold rounded-xl bg-gradient-to-r from-[#FF00F7] via-[#FF00F7] to-[#d800d2] transition-all duration-300 -translate-y-0.5 shadow-[0_4px_0_rgb(153,0,140)] hover:-translate-y-1 hover:shadow-[0_6px_0_rgb(153,0,140)] active:translate-y-0.5 active:shadow-[0_0px_0_rgb(153,0,140)] before:absolute before:inset-0 before:bg-white before:opacity-20 before:rounded-xl before:transition-all hover:before:opacity-30 active:before:opacity-40">
        Enter
      </button>
    </div>
  </div>
</div>
</div>

<div v-click class="mt-12">
  <div class="text-xl font-bold mb-4">Tailwind CSS</div>
  <div class="flex gap-4 items-center">
    <code class="bg-gray-800 p-2 rounded text-sm">npm install tailwindcss</code>
    <span class="opacity-50">→</span>
    <span>Styles directement dans le JSX</span>
  </div>
</div>

---
layout: default
transition: slide-left
---

# Playing UI avec Skia

<div class="grid grid-cols-2 gap-8">
  <div>
    <h3 class="text-xl font-bold mb-4">React Native Skia</h3>
    <ul class="list-disc pl-4">
      <li v-click>Rendu 2D performant</li>
      <li v-click>60 FPS garantis</li>
      <li v-click>Animations fluides</li>
    </ul>
  </div>
  <div>
    <h3 class="text-xl font-bold mb-4">Reanimated</h3>
    <ul class="list-disc pl-4">
      <li v-click>Animations natives</li>
      <li v-click>Thread UI dédié</li>
      <li v-click>Gestures</li>
    </ul>
  </div>
</div>

---
layout: default
transition: slide-left
---

# Gestion Audio

<div class="grid grid-cols-2 gap-8">
  <div>
    <h3 class="text-xl font-bold mb-4">expo-audio</h3>
    <ul class="list-disc pl-4">
      <li v-click>Simple d'utilisation</li>
      <li v-click>Parfait pour les débutants</li>
      <li v-click>Bonne documentation</li>
    </ul>
  </div>
  <div>
    <h3 class="text-xl font-bold mb-4">react-native-audio-api</h3>
    <ul class="list-disc pl-4">
      <li v-click>Plus de contrôle</li>
      <li v-click>Meilleures performances</li>
      <li v-click>Avancé</li>
    </ul>
  </div>
</div>

---
layout: center
class: text-center
transition: slide-left
---

# Merci!

<div class="mt-8">
  <div class="text-xl font-bold">Questions?</div>
  <div class="mt-4">
    <a href="https://odiseimusic.com" class="text-blue-500 hover:underline">odiseimusic.com</a>
  </div>
</div>
