**You:**

explain the list of web browser apis

* * *

**ChatGPT:**

Web Browser APIs are **built-in interfaces provided by browsers** that let JavaScript interact with the browser, the device, and the web platform (beyond basic HTML/CSS).

Below is a **clear, categorized list of the most important Web Browser APIs**, with what they do and common use cases.

* * *

## 1. **DOM (Document Object Model) API**

**Purpose:** Manipulate HTML & CSS

**What it allows**

* Read / modify elements
    
* Change styles
    
* Handle events (click, input, scroll)
    

**Examples**

```js
document.getElementById("btn").addEventListener("click", () => {
  document.body.style.background = "black";
});
```

📌 Foundation of all frontend development

* * *

## 2. **Fetch API**

**Purpose:** Make HTTP requests (AJAX)

**What it allows**

* Call REST APIs
    
* Send/receive JSON
    
* Handle async network requests
    

**Examples**

```js
fetch("/api/user")
  .then(res => res.json())
  .then(data => console.log(data));
```

📌 Replaces `XMLHttpRequest`

* * *

## 3. **Storage APIs**

### a) **localStorage**

* Persistent key–value storage
    
* Survives page reload
    

```js
localStorage.setItem("theme", "dark");
```

### b) **sessionStorage**

* Data cleared when tab closes
    

### c) **IndexedDB**

* Large structured storage
    
* Offline apps, caching
    

📌 Used for preferences, tokens, offline data

* * *

## 4. **Geolocation API**

**Purpose:** Access user’s location

```js
navigator.geolocation.getCurrentPosition(pos => {
  console.log(pos.coords.latitude, pos.coords.longitude);
});
```

⚠️ Requires user permission

* * *

## 5. **Media APIs**

### a) **MediaDevices API**

* Access camera & microphone
    

```js
navigator.mediaDevices.getUserMedia({ video: true });
```

### b) **MediaRecorder API**

* Record audio/video
    

📌 Used in video calls, voice notes, recording apps

* * *

## 6. **Canvas API**

**Purpose:** Draw graphics using JavaScript

**Use cases**

* Games
    
* Charts
    
* Image editors
    

```js
const ctx = canvas.getContext("2d");
ctx.fillRect(10, 10, 100, 100);
```

* * *

## 7. **Web Audio API**

**Purpose:** Advanced audio processing

**Use cases**

* Music apps
    
* Audio effects
    
* Visualization
    

📌 Much more powerful than `<audio>`

* * *

## 8. **WebSockets API**

**Purpose:** Real-time communication

**Use cases**

* Chat apps
    
* Live notifications
    
* Multiplayer games
    

```js
const socket = new WebSocket("ws://server");
```

* * *

## 9. **Web Workers API**

**Purpose:** Run JS in background threads

**What it solves**

* Prevents UI freezing
    
* Heavy computations
    

📌 JavaScript is single-threaded → workers add concurrency

* * *

## 10. **Service Workers API**

**Purpose:** Background scripts for web apps

**Use cases**

* Offline support
    
* Caching
    
* Push notifications
    
* PWA support
    

📌 Core of **Progressive Web Apps (PWA)**

* * *

## 11. **History API**

**Purpose:** Control browser navigation

```js
history.pushState({}, "", "/profile");
```

📌 Used by SPA frameworks (React, Next.js)

* * *

## 12. **URL & URLSearchParams API**

**Purpose:** Work with URLs safely

```js
const params = new URLSearchParams(window.location.search);
params.get("id");
```

* * *

## 13. **Notifications API**

**Purpose:** Show system notifications

```js
new Notification("Message received!");
```

⚠️ Requires permission

* * *

## 14. **Clipboard API**

**Purpose:** Copy & paste programmatically

```js
navigator.clipboard.writeText("Hello");
```

* * *

## 15. **File & Drag-and-Drop APIs**

**Purpose:** Handle file uploads and drops

📌 Used in upload forms, editors, cloud apps

* * *

## 16. **Intersection Observer API**

**Purpose:** Detect element visibility

**Use cases**

* Lazy loading images
    
* Infinite scrolling
    

📌 More efficient than scroll listeners

* * *

## 17. **Performance API**

**Purpose:** Measure performance

```js
performance.now();
```

📌 Used for monitoring and optimization

* * *

## 18. **WebRTC API**

**Purpose:** Peer-to-peer communication

**Use cases**

* Video calls
    
* Screen sharing
    

📌 Used by Google Meet, Zoom (web)

* * *

## High-Level Summary

| Category | Examples |
| --- | --- |
| UI & DOM | DOM, Events |
| Networking | Fetch, WebSockets |
| Storage | localStorage, IndexedDB |
| Media | Camera, Audio, Canvas |
| Performance | Workers, Performance API |
| PWA | Service Workers, Notifications |

* * *

## If you want

I can:

* Explain **APIs used by React / Next.js**
    
* Tell **which APIs are asked in interviews**
    
* Explain **security & permissions model**
    
* Compare **Browser APIs vs Node.js APIs**
    

Just tell me 👍