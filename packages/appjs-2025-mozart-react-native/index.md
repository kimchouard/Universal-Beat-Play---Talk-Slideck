---
# You can also start simply with 'default'
theme: apple-basic # bricks
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# some information about your slides (markdown enabled)
title: "Mozart Never Had React Native: You Do"
info: |
  ## Mozart Never Had React Native: You Do!
  Craft Unforgettable UXs with Sound
# apply unocss classes to the current slide
class: text-center
layout: center
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
  /* background: linear-gradient(to right, #00E8FF, #FF00F7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  color: #ddd;
  font-size: 3.5rem !important;
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

.bold-blue {
  color: #00E8FF;
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
  <h1>Mozart Never Had React Native.<br />
  <span class="bold-gradient">You DO!</span></h1>
  <h2>Craft Unforgettable UXs with Sound</h2>
</div>

<div class="abs-bl ml-4 mb-4 flex items-center gap-4">
  <img src="/images/kim-profile.jpg" class="w-16 h-16 rounded-full" />
  <div class="flex flex-col">
    <div class="text-xl font-bold">Kim Chouard</div>
    <div class="text-sm opacity-75">
      CTO @ <a href="https://odiseimusic.com" target="_blank" class="text-blue-500 hover:underline">Odisei Music</a>
    </div>
  </div>
</div>

<div class="abs-br mr-4 mb-4 flex items-center gap-4">
  <div class="flex flex-col items-end">
    <div class="text-xl">App.js 2025</div> <!-- Update with actual date if known -->
    <div class="text-sm opacity-75">@Kraków, Poland</div> <!-- Update with actual venue if known -->
  </div>
  <!-- <img src="/images/appjs-logo.svg" class="w-16 h-16" /> Placeholder, replace with actual App.js logo if available -->
</div>

---
layout: center
class: text-center
transition: slide-up
---

# Guess the sound! 👂

<audio ref="microwaveAudioRef" src="/microwave-ding.wav" preload="auto"></audio>
<audio ref="netflixAudioRef" src="/netflix-intro.mp3" preload="auto"></audio>
<!-- <audio ref="duolingoAudioRef" src="/iphone-lock.wav" preload="auto"></audio> -->
<audio ref="duolingoAudioRef" src="/duolingo-success-ting.m4a" preload="auto"></audio>

<div class="grid grid-cols-3 gap-20 mt-12">
  <div @click="$refs.netflixAudioRef?.pause(); if($refs.netflixAudioRef) $refs.netflixAudioRef.currentTime = 0; $refs.duolingoAudioRef?.pause(); if($refs.duolingoAudioRef) $refs.duolingoAudioRef.currentTime = 0; if($refs.microwaveAudioRef) $refs.microwaveAudioRef.currentTime = 0; $refs.microwaveAudioRef?.play()" class="flex flex-col items-center cursor-pointer p-2 hover:bg-white hover:bg-opacity-10 rounded-md transition-colors">
    <div class="text-2xl font-bold mb-4">Sound 1</div>
    <div class="flex gap-4 mt-5 relative">
      <img v-click src="/images/microwave.png" class="w-40 h-40 absolute top-0 left-0 z-99" />
      <img src="/images/microwave.png" class="w-40 h-40 filter blur-lg" />
    </div>
  </div>
  <div @click="$refs.microwaveAudioRef?.pause(); if($refs.microwaveAudioRef) $refs.microwaveAudioRef.currentTime = 0; $refs.duolingoAudioRef?.pause(); if($refs.duolingoAudioRef) $refs.duolingoAudioRef.currentTime = 0; if($refs.netflixAudioRef) $refs.netflixAudioRef.currentTime = 0; $refs.netflixAudioRef?.play()" class="flex flex-col items-center cursor-pointer p-2 hover:bg-white hover:bg-opacity-10 rounded-md transition-colors">
    <div class="text-2xl font-bold mb-4">Sound 2</div>
    <div class="flex gap-4 mt-5 relative">
      <img v-click src="/images/Netflix_icon.svg" class="w-40 h-40 absolute top-0 left-0 z-99" />
      <img src="/images/Netflix_icon.svg" class="w-40 h-40 filter blur-xl" />
    </div>
  </div>
  <div @click="$refs.microwaveAudioRef?.pause(); if($refs.microwaveAudioRef) $refs.microwaveAudioRef.currentTime = 0; $refs.netflixAudioRef?.pause(); if($refs.netflixAudioRef) $refs.netflixAudioRef.currentTime = 0; if($refs.duolingoAudioRef) $refs.duolingoAudioRef.currentTime = 0; $refs.duolingoAudioRef?.play()" class="flex flex-col items-center cursor-pointer p-2 hover:bg-white hover:bg-opacity-10 rounded-md transition-colors">
    <div class="text-2xl font-bold mb-4">Sound 3</div>
    <div class="flex gap-4 mt-5 relative">
      <img v-click src="/images/Duolingo-Logo.png" class="w-40 h-40 absolute top-0 left-0 z-50" />
      <img v-click src="/images/duolingo-new-logo.png" class="w-40 h-40 absolute top-0 left-0 z-50" />
      <img src="/images/Duolingo-Logo.png" class="w-40 h-40 filter blur-xl" />
    </div>
  </div>
</div>

<!--
Speaker Notes:

* "Let's have some fun before we dive in. Listen to these sounds and try to guess what they are."
* Crowd participation.
* End with: "You knew these sounds instantly. Why? Because sound is memory, emotion, identity."
-->

---
layout: center
class: text-center
transition: slide-left
---

# 🔊 The Power of Sound 


> *(Sound FX only skit: iPhone default ringtone → message notification tone → then send message swish -> then a LOT of message received swish)*

<!--
Speaker Notes:

* "And... \[call sounds] sorry... "Chérie"? Shit, not the right time honey. (mimicate hanging up). \[text sound] Excuse me, my baby is at home and... \[send swish] my bad. \[multiple receive swiches] (face become shocked) oh shit. I was kidding, this was all fake. I'm not texting anybody.
* All sound cues — no visuals. Builds curiosity.
* Punchline: *"You didn't see anything, but just by hearing it you could "picture" the whole story. That's the power of sound!"*
-->

---
layout: default
transition: slide-left
---


# 🧠 Why Sound Matters

## 👂 Earcons, Emotions & Engagement

<!--
Speaker Notes:
* Define "Earcon": the audio equivalent of an icon.
* Examples:
  * **Duolingo**: fun "ding" when you're right → triggers dopamine, boosts habit formation.
    * 📈 30% more daily retention when sound cues are on (source: UX case studies)
  * **Netflix**: *ta-dum* = brand signature. Users recall it instantly — enhances emotional connection.
-->

---
layout: default
transition: slide-left
---

# ✅ Do's & ❌ Don'ts of Audio UX

| Platform   | ✅ Use Sound For...                                 | ❌ Avoid...                                    |
| ---------- | -------------------------------------------------- | --------------------------------------------- |
| **Mobile** | Microinteractions, confirmations, branding earcons | Autoplay media, blocking music/podcasts       |
| **Web**    | Subtle UX sounds, async feedback                   | Tabs that autoplay 🔊, sounds with no context |
| **TV**     | UI navigation (focus, selection), ambient bg       | Repeating sounds, no mute options             |
| **VR**     | Spatial cues, immersion, navigation aid            | No audio = disorientation, flat experience    |

<!--
Speaker Notes:

* "Sound is amazing, *when it's respectful*. Think about when and why you're adding it."
* Emphasize giving users control — mute toggles, respecting system settings.
-->

---
layout: center
transition: slide-left
---

# 🔧 The New Audio Stack in RN

## "Last year, I said RN audio was... garbage."

### This year? We've got **TWO** great tools.

<!--
Speaker Notes:

* Call back to your 2024 talk: "I said the audio in RN sucked. The community took it personally."
* Set the stage for the two libs that fixed it.
-->

---
layout: center
transition: slide-left
---

# 🔍 Choosing Your Tool

| Feature     | `expo-audio`              | `react-native-audio-api`                   |
| ----------- | ------------------------- | ------------------------------------------ |
| Level       | High-level                | Low-level / Web Audio API                  |
| Best For    | UI sounds, media playback | Synths, real-time DSP, low-latency control |
| Recording   | ✅ Yes                     | 🚧 Not yet                                 |
| Web Support | ✅ via Expo web            | ✅ via Web Audio API                        |
| Creator     | Expo team                 | Michał Sęk @ Software Mansion              |

<!--
Speaker Notes:

* Shout out to the authors!
* Emphasize how they complement each other.
-->

---
layout: default
transition: slide-left
---

# Un exemple simple 🐐

<div class="grid grid-cols-2 gap-8">
  <div v-click class="flex flex-col items-center h-[80%]">
    <audio ref="goatSound" src="/chevre.mp3" preload="auto"></audio>
    <!-- Chrome-style browser bar -->
    <div class="w-[400px] bg-[#1B1B1F] rounded-t-xl overflow-hidden border-b border-gray-700 pb-2">
      <div class="flex items-center px-4 py-2 gap-2">
        <!-- Traffic lights -->
        <div class="flex gap-1.5">
          <div class="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
          <div class="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div class="w-3 h-3 rounded-full bg-[#28C840]"></div>
        </div>
        <!-- URL bar -->
        <div class="flex-1 bg-[#2B2B2F] rounded-md px-3 py-1 text-sm text-gray-400 flex items-center gap-2">
          <div class="w-4 h-4 text-gray-500">🔒</div>
          jesuisunechev.re
        </div>
      </div>
    </div>
    <div
      class="relative w-[400px] h-[400px] overflow-hidden cursor-pointer"
      @click="$refs.goatSound?.play()"
    >
      <img
        src="/images/chevre_de_verzasca.jpg"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black bg-opacity-30" />
    </div>
  </div>
  <div v-click class="flex flex-col">
    <div class="text-left">
```tsx
// jesuisunechev.re, universellement!! 🐐💨
import { useAudioPlayer } from 'expo-audio';
import { Image, Pressable } from 'react-native';

export default function GoatButton() {
  const player = useAudioPlayer({
    uri: require('./assets/chevre.mp3'),
    volume: 1.0,
  });

  return (
    <Pressable onPress={() => {
      player.play()
    }}>
      <Image
        source={require('./assets/chevre.jpg')}
        style={{ width: 400, height: 400 }}
      />
    </Pressable>
  );
}
```
    </div>
  </div>
</div>

<!--
Speaker Notes:

* Tell your funny goat anecdote.
* Show **original web code**, then **expo-audio version in RN**.
* Highlight minimal code changes → universal audio!
-->

---
layout: center
transition: slide-left
---

# 🎛 Demo #2 — Synth with `react-native-audio-api`

> Explain node-based audio graph visually

<!--
Speaker Notes:

* Show a **diagram** of audio nodes (oscillator → LFO → gain → speaker)
* Explain LFO and real-time sound modulation.
* Show partial code / link to repo.
-->

---

# L'Audio avec React Native

<div class="grid grid-cols-2 gap-8">
  <div v-click class="flex flex-col">
    <h3 class="text-xl font-bold mb-4 text-[#00E8FF]">Cas d'usage simples</h3>
    <a class="display-block p-4 bg-[#1B1B1F] rounded-xl mb-4" href="https://docs.expo.dev/versions/latest/sdk/audio/" target="_blank">
      <div class="font-bold mb-2 text-[#00E8FF]">expo-audio</div>
      <ul class="space-y-2">
        <li>✨ Jouer des sons (effets, musique)</li>
        <li>🎙️ Enregistrer des sons</li>
        <li>🔊 Contrôle basique (volume, pitch)</li>
        <li>📱 Cross-platform facile</li>
      </ul>
    </a>
    <div class="text-sm opacity-75 italic">
      Parfait pour les apps avec des besoins audio basiques
    </div>
  </div>

  <div v-click class="flex flex-col">
    <h3 class="text-xl font-bold mb-4 text-[#FF00F7]">Cas d'usage avancés</h3>
    <a class="display-block p-4 bg-[#1B1B1F] rounded-xl mb-4" href="https://docs.swmansion.com/react-native-audio-api/" target="_blank">
      <div class="font-bold mb-2 text-[#FF00F7]">react-native-audio-api</div>
      <ul class="space-y-2">
        <li>🎹 Synthétiseur audio</li>
        <li>🎛️ Effets audio (filtres, delay)</li>
        <li>⚡️ Latence ultra-basse</li>
        <li>🔄 Synchronisation précise</li>
      </ul>
    </a>
    <div class="text-sm opacity-75 italic">
      Pour les apps musicales professionnelles
    </div>
  </div>
</div>

---
layout: center
transition: slide-left
---
# 🎵 Meloskia: The Audio Glow-Up
> Demo "Final Tech Stack" song:

* Background synth 🎹
* Skia wave animations 🌊
* TypeGPU sparkles ✨

<!--
Speaker Notes:

* Invite audience to tap to the beat!
* Celebrate the community: "This is what happens when we all build together."
-->

---
layout: center
transition: slide-left
---

# 🚀 What's Next?

* 🧪 **Stabilize & contribute**: `react-native-audio-api` needs real-world feedback
* 🎷 **Odisei Play**: From Travel Sax to **audio-to-MIDI via mic** (WASM demo ready)

  * Want to help build the native engine? Let's make it *Saaaaaxy* 💋
* 🧰 **Build a Sound/UX component library**: Imagine `@react-native-ui-sounds`

<!--
Speaker Notes:

* Self plug with charm: "If you love music, React Native, and want to help musicians learn better — talk to me."
-->

---
layout: center
---

<div class="mt-8">
  <div class="text-xl font-bold">Questions?</div>
  <div class="mt-4">
    <a href="mailto:kim@odiseimusic.com" target="_blank" class="text-blue-500 hover:underline">kim@odiseimusic.com</a>
  </div>
  <div class="text-xl mt-8 font-bold">Envie d'apprendre le Sax? 🎷</div>
  <div class="mt-4">
    <a href="https://play.odiseimusic.com" target="_blank" class="text-blue-500 hover:underline">play.odiseimusic.com</a>
  </div>
</div> 

# 🔚 Final Thoughts

### "Next time you add a button…

### give it a voice."

> 📱 play.odiseimusic.com  |  🎮 Meloskia

> 📸 Show 2 QR codes: one for Meloskia, one for Odisei Play

<!--
Speaker Notes:
* Leave audience with inspiration + ways to connect.
* Make the quote the last emotional hit.
--> 