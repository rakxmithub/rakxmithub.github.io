/**
 * Mani Tayefi — Portfolio
 * Premium interactions + configuration
 */

const CONFIG = {
  GITHUB_URL: "https://github.com/rakxmithub",
  LINKEDIN_URL: "https://www.linkedin.com/in/mani-tayefi-84b279437",
  EMAIL: "manitayefi123@gmail.com",
  WEB3FORMS_ACCESS_KEY: "ab7ba1a5-18d1-4bc1-9c34-cb67d1fb7bcb"
};

/* Year */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* LinkedIn */
function applyLinkedIn() {
  const url = CONFIG.LINKEDIN_URL;
  const placeholder = !url || url.includes("REPLACE_WITH");
  const ids = ["headerLinkedIn", "mobileLinkedIn", "contactLinkedIn", "footerLinkedIn", "heroLinkedIn"];
  const displayUrl = url ? url.replace(/^https?:\/\/(www\.)?/, "") : "";
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (placeholder) {
      // No LinkedIn URL configured yet — hide the link instead of showing
      // a dead "#" href or an alert() popup to visitors.
      el.style.display = "none";
      el.setAttribute("aria-hidden", "true");
    } else {
      el.href = url;
      el.style.display = "";
      el.removeAttribute("aria-hidden");
      if (id === "contactLinkedIn") {
        el.target = "_blank";
        el.rel = "noopener noreferrer";
      }
      const label = el.querySelector(".li-label");
      if (label) {
        label.textContent = displayUrl;
        // Prevent i18n from overwriting the real LinkedIn URL on language change
        label.removeAttribute("data-i18n");
      }
    }
  });
}
applyLinkedIn();
window.addEventListener("mt:langchange", applyLinkedIn);

/* Back to top */
(function () {
  const btn = document.getElementById("backTop");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    const show = window.scrollY > 560;
    btn.classList.toggle("visible", show);
    if (show) btn.removeAttribute("hidden");
    else btn.setAttribute("hidden", "");
  }, { passive: true });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

/* Header scroll */
const header = document.getElementById("header");
window.addEventListener(
  "scroll",
  () => header.classList.toggle("scrolled", window.scrollY > 20),
  { passive: true }
);

/* Mobile menu */
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const navDesktop = document.getElementById("nav");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  mobileMenu.classList.remove("open");
  mobileMenu.setAttribute("aria-hidden", "true");
  document.body.classList.remove("menu-open");
}

function openMenu() {
  menuToggle.setAttribute("aria-expanded", "true");
  mobileMenu.classList.add("open");
  mobileMenu.setAttribute("aria-hidden", "false");
  document.body.classList.add("menu-open");
}

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  if (open) closeMenu();
  else openMenu();
});

document.querySelectorAll(".mobile-nav a").forEach((a) => {
  a.addEventListener("click", closeMenu);
});

/* Scroll reveal */
const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revealObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

/* Cursor glow (desktop) */
const cursorGlow = document.querySelector(".cursor-glow");
if (window.matchMedia("(pointer:fine)").matches && cursorGlow) {
  window.addEventListener(
    "mousemove",
    (e) => {
      cursorGlow.style.left = e.clientX + "px";
      cursorGlow.style.top = e.clientY + "px";
    },
    { passive: true }
  );
}

/* Neural graph engine is initialized below */

/* Network canvas — premium AI ambient field */
const canvas = document.getElementById("network");
const ctx = canvas.getContext("2d");
let particles = [];
let pulses = [];
let W, H, dpr;
let netTime = 0;
const reduceNet = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function themeNetColors() {
  const light = document.documentElement.getAttribute("data-theme") === "light";
  return light
    ? { node: "15,159,79", link: "15,159,79", accent: "15,118,110", grid: "20,24,32", nodeA: 0.2, linkA: 0.07, gridA: 0.035 }
    : { node: "125,255,160", link: "125,255,160", accent: "94,234,212", grid: "125,255,160", nodeA: 0.28, linkA: 0.09, gridA: 0.035 };
}

function resizeNet() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const mobile = W < 700;
  const n = mobile ? 18 : (W < 1100 ? 36 : 52);
  particles = Array.from({ length: n }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    z: Math.random() * 0.6 + 0.4,
    vx: (Math.random() - 0.5) * 0.12,
    vy: (Math.random() - 0.5) * 0.12,
    r: Math.random() * 1.4 + 0.4
  }));
  pulses = Array.from({ length: mobile ? 2 : 5 }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: 0,
    max: 80 + Math.random() * 120,
    speed: 0.35 + Math.random() * 0.4
  }));
}
resizeNet();
window.addEventListener("resize", resizeNet);

function drawNet() {
  ctx.clearRect(0, 0, W, H);
  const C = themeNetColors();
  netTime += 0.004;

  if (W >= 700) {
    const step = 72;
    const ox = (netTime * 8) % step;
    const oy = (netTime * 5) % step;
    ctx.strokeStyle = "rgba(" + C.grid + "," + C.gridA + ")";
    ctx.lineWidth = 1;
    for (let x = -step + ox; x < W + step; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.stroke();
    }
    for (let y = -step + oy; y < H + step; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }
  }

  if (!reduceNet) {
    for (const p of particles) {
      p.x += p.vx * p.z;
      p.y += p.vy * p.z;
      if (p.x < -12 || p.x > W + 12) p.vx *= -1;
      if (p.y < -12 || p.y > H + 12) p.vy *= -1;
    }
    for (const u of pulses) {
      u.r += u.speed;
      if (u.r > u.max) {
        u.r = 0;
        u.x = Math.random() * W;
        u.y = Math.random() * H;
        u.max = 80 + Math.random() * 120;
      }
    }
  }

  for (const u of pulses) {
    const a = (1 - u.r / u.max) * 0.08;
    if (a <= 0) continue;
    ctx.beginPath();
    ctx.arc(u.x, u.y, u.r, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(" + C.node + "," + a + ")";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  const linkDist = W < 700 ? 100 : 140;
  for (let i = 0; i < particles.length; i++) {
    const a = particles[i];
    const pr = a.r * a.z;
    const g = ctx.createRadialGradient(a.x, a.y, 0, a.x, a.y, pr * 6);
    g.addColorStop(0, "rgba(" + C.node + "," + (C.nodeA * 0.35) + ")");
    g.addColorStop(1, "rgba(" + C.node + ",0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(a.x, a.y, pr * 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(a.x, a.y, pr, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(" + C.node + "," + C.nodeA + ")";
    ctx.fill();

    for (let j = i + 1; j < particles.length; j++) {
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const d = Math.hypot(dx, dy);
      if (d < linkDist) {
        const alpha = (1 - d / linkDist) * C.linkA * Math.min(a.z, b.z);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = "rgba(" + C.link + "," + alpha + ")";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(drawNet);
}
drawNet();

/* Active nav */
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav a");
const activeObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        navLinks.forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id)
        );
      }
    });
  },
  { rootMargin: "-40% 0px -50% 0px" }
);
sections.forEach((s) => activeObs.observe(s));

/* Carousel */
(function () {
  const track = document.getElementById("carouselTrack");
  const cards = document.querySelectorAll(".p-card");
  const prev = document.getElementById("prevBtn");
  const next = document.getElementById("nextBtn");
  const dots = document.querySelectorAll(".c-dot");
  const counter = document.getElementById("projectCounter");
  const fill = document.getElementById("cFill");
  const carousel = document.getElementById("carousel");
  if (!track || !cards.length) return;

  let cur = 0;
  const total = cards.length;
  let tx = 0;

  function go(i) {
    if (i < 0) i = total - 1;
    if (i >= total) i = 0;
    cur = i;
    track.style.transform = `translateX(-${cur * 100}%)`;
    dots.forEach((d, idx) => {
      d.classList.toggle("active", idx === cur);
      d.setAttribute("aria-selected", idx === cur ? "true" : "false");
    });
    if (counter) counter.textContent = String(cur + 1).padStart(2, "0") + " / " + String(total).padStart(2, "0");
    if (fill) fill.style.width = ((cur + 1) / total) * 100 + "%";
  }

  prev?.addEventListener("click", () => go(cur - 1));
  next?.addEventListener("click", () => go(cur + 1));
  dots.forEach((d) => d.addEventListener("click", () => go(+d.dataset.i)));

  document.addEventListener("keydown", (e) => {
    if (!carousel) return;
    const r = carousel.getBoundingClientRect();
    if (r.top >= window.innerHeight || r.bottom <= 0) return;
    if (e.key === "ArrowLeft") { e.preventDefault(); go(cur - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); go(cur + 1); }
  });

  carousel?.addEventListener("touchstart", (e) => { tx = e.changedTouches[0].screenX; }, { passive: true });
  carousel?.addEventListener("touchend", (e) => {
    const d = tx - e.changedTouches[0].screenX;
    if (Math.abs(d) > 48) go(d > 0 ? cur + 1 : cur - 1);
  }, { passive: true });

  go(0);
})();

/* Contact form */
(function () {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const hint = document.getElementById("formHint");
  const btn = document.getElementById("submitBtn");
  if (!form) return;

  const accessKey = (CONFIG.WEB3FORMS_ACCESS_KEY || "").trim();
  const endpoint = "https://api.web3forms.com/submit";
  const ready = Boolean(accessKey) && !accessKey.includes("REPLACE_WITH");

  if (hint) {
    if (ready) {
      hint.textContent = "Messages are delivered securely to " + CONFIG.EMAIL + ".";
    } else {
      hint.textContent = "Set CONFIG.WEB3FORMS_ACCESS_KEY in script.js to enable the contact form.";
    }
  }

  let successAudioCtx = null;

  function getSuccessAudioCtx() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!successAudioCtx || successAudioCtx.state === "closed") {
      successAudioCtx = new AC();
    }
    return successAudioCtx;
  }

  function unlockSuccessAudio() {
    const ctx = getSuccessAudioCtx();
    if (!ctx) return;
    if (ctx.state === "suspended") {
      ctx.resume().then(function () {
        console.log("[SUCCESS SOUND] AudioContext unlocked, state:", ctx.state);
      }).catch(function (err) {
        console.log("[SUCCESS SOUND] Audio playback blocked", err);
      });
    }
  }
  form.addEventListener("pointerdown", unlockSuccessAudio, { passive: true });
  form.addEventListener("keydown", unlockSuccessAudio, { passive: true });

  async function playSuccessSound() {
    console.log("[SUCCESS SOUND] triggered");
    try {
      const ctx = getSuccessAudioCtx();
      if (!ctx) {
        console.log("[SUCCESS SOUND] AudioContext unavailable");
        return;
      }
      if (ctx.state === "suspended") {
        try {
          await ctx.resume();
        } catch (err) {
          console.log("[SUCCESS SOUND] Audio playback blocked", err);
          return;
        }
      }
      console.log("[SUCCESS SOUND] AudioContext state:", ctx.state);
      if (ctx.state !== "running") return;

      const now = ctx.currentTime;
      const master = ctx.createGain();
      master.gain.value = 1;
      master.connect(ctx.destination);

      function playNote(freq, start, duration, peakGain, type) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type || "sine";
        osc.frequency.setValueAtTime(freq, now + start);
        const t0 = now + start;
        gain.gain.setValueAtTime(0.0001, t0);
        gain.gain.linearRampToValueAtTime(peakGain, t0 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
        osc.connect(gain);
        gain.connect(master);
        osc.start(t0);
        osc.stop(t0 + duration + 0.05);
      }

      playNote(659.25, 0.00, 0.22, 0.22, "sine");
      playNote(659.25, 0.00, 0.18, 0.08, "triangle");
      playNote(987.77, 0.16, 0.38, 0.28, "sine");
      playNote(987.77, 0.16, 0.30, 0.10, "triangle");
      playNote(1975.53, 0.18, 0.22, 0.04, "sine");
    } catch (err) {
      console.log("[SUCCESS SOUND] Audio playback blocked", err);
    }
  }

  function show(msg, type) {
    if (!status) return;
    status.hidden = false;
    status.textContent = msg;
    status.className = "form-status " + type;
  }

  function tr(key, fallback) {
    try {
      if (window.MT && typeof window.MT.t === "function") return window.MT.t(key);
    } catch (_) {}
    return fallback;
  }

  function showSuccessUI() {
    if (!status) return;
    status.hidden = false;
    status.className = "form-status success success-rich";
    status.innerHTML =
      '<span class="success-mark" aria-hidden="true">✓</span>' +
      '<strong class="success-title">' + tr("contact.successTitle", "MESSAGE SENT") + '</strong>' +
      '<span class="success-body">' + tr("contact.successBody", "Your message has been successfully sent.") + '</span>' +
      '<span class="success-check">' + tr("contact.successCheck", "TRANSMISSION COMPLETE") + '</span>';
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    unlockSuccessAudio();

    const name = form.name.value.trim();
    const fromEmail = form.email.value.trim();
    const message = form.message.value.trim();
    const topicEl = form.topic;
    const topic = topicEl ? topicEl.value.trim() : "";

    if (!name || !fromEmail || !message) {
      show(tr("contact.errFields", "Please fill in all fields."), "error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail)) {
      show(tr("contact.errEmail", "Please enter a valid email."), "error");
      return;
    }
    if (topicEl && !topic) {
      show(tr("contact.errTopic", "Please select a topic."), "error");
      return;
    }
    if (!ready) {
      show("Contact form is not configured (missing WEB3FORMS_ACCESS_KEY).", "error");
      return;
    }

    btn.disabled = true;
    btn.textContent = tr("contact.sending", "Sending…");

    const subjectLine = topic
      ? ("Portfolio — " + topic + " — Mani Tayefi")
      : "Portfolio contact — Mani Tayefi";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: subjectLine,
          from_name: name,
          name: name,
          email: fromEmail,
          message: topic ? ("[" + topic + "]\n\n" + message) : message,
          topic: topic || undefined
        })
      });

      let data = null;
      try {
        data = await res.json();
      } catch (_) {}

      const ok = res.ok && data && data.success === true;

      if (ok) {
        form.reset();
        showSuccessUI();
        playSuccessSound();
      } else {
        const detail =
          (data && (data.message || data.error)) ||
          tr("contact.errGeneric", "Something went wrong. Please try again later.");
        show(String(detail), "error");
      }
    } catch (err) {
      show(tr("contact.errNetwork", "Network error. Please try again later."), "error");
    } finally {
      btn.disabled = false;
      btn.textContent = tr("contact.send", "Send Message");
    }
  });
})();


/* ============================================================
   AI NEURAL COMMAND CENTER
   Interactive graph + knowledge panels + Web Audio + HUD
   ============================================================ */
(function initNeuralCommandCenter() {
  const canvas = document.getElementById("neuralCanvas");
  const wrap = document.getElementById("neuralWrap");
  if (!canvas || !wrap) return;

  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isFine = window.matchMedia("(pointer:fine)").matches;

  // DOM
  const coreLabel = document.getElementById("coreLabel");
  if (coreLabel) coreLabel.textContent = "AI ENGINEER";
  const hint = document.getElementById("neuralHint");
  const hudStatus = document.getElementById("hudStatus");
  const hudActive = document.getElementById("hudActive");
  const soundToggle = document.getElementById("soundToggle");
  const panel = document.getElementById("aiPanel");
  const panelClose = document.getElementById("panelClose");
  const panelIcon = document.getElementById("panelIcon");
  const panelTitle = document.getElementById("panelTitle");
  const panelSub = document.getElementById("panelSub");
  const panelDesc = document.getElementById("panelDesc");
  const panelList = document.getElementById("panelList");
  const panelProject = document.getElementById("panelProject");
  const panelProjectName = document.getElementById("panelProjectName");
  const panelProjectLink = document.getElementById("panelProjectLink");

  // Knowledge base — real technologies only
  const KNOWLEDGE = {
    RAG: {
      icon: "◈",
      title: "RAG",
      sub: "Retrieval-Augmented Generation",
      desc: "RAG combines information retrieval with language generation, allowing AI systems to retrieve relevant knowledge before generating responses.",
      items: ["Document Ingestion", "Chunking", "Embeddings", "Vector Search", "BM25", "Hybrid Retrieval", "Reranking", "Query Rewriting", "LLM Response"],
      project: { name: "Modular RAG AI Assistant", url: "https://github.com/rakxmithub/project-RAG" },
      pipeline: ["RAG", "EMBEDDINGS", "VECTOR SEARCH", "BM25", "RERANKING", "LLM"]
    },
    LLM: {
      icon: "⌬",
      title: "LLM",
      sub: "Large Language Models",
      desc: "Large language models power generation, reasoning, and structured output in AI applications. They form the generation layer after retrieval and context assembly.",
      items: ["Prompt Engineering", "Context Management", "Response Generation", "Model Integration"],
      project: null,
      pipeline: ["LLM"]
    },
    EMBEDDINGS: {
      icon: "◎",
      title: "Embeddings",
      sub: "Semantic Vector Representations",
      desc: "Embeddings convert text into dense vectors that capture semantic meaning, enabling similarity search and retrieval over document collections.",
      items: ["Semantic Representation", "Vectorization", "Similarity Search", "Retrieval"],
      project: { name: "Modular RAG AI Assistant", url: "https://github.com/rakxmithub/project-RAG" },
      pipeline: ["EMBEDDINGS", "VECTOR SEARCH"]
    },
    "VECTOR SEARCH": {
      icon: "⬡",
      title: "Vector Search",
      sub: "Semantic Retrieval",
      desc: "Vector search retrieves documents by semantic similarity in embedding space, forming the backbone of modern retrieval systems.",
      items: ["ChromaDB", "Similarity Search", "Semantic Retrieval"],
      project: { name: "Modular RAG AI Assistant", url: "https://github.com/rakxmithub/project-RAG" },
      pipeline: ["VECTOR SEARCH", "RERANKING"]
    },
    RERANKING: {
      icon: "⟐",
      title: "Reranking",
      sub: "Result Refinement",
      desc: "Reranking rescores and reorders retrieved candidates to improve relevance before context is passed to the language model.",
      items: ["Candidate Scoring", "Relevance Ordering", "Hybrid Signals"],
      project: { name: "Modular RAG AI Assistant", url: "https://github.com/rakxmithub/project-RAG" },
      pipeline: ["RERANKING", "LLM"]
    },
    PYTHON: {
      icon: "⚙",
      title: "Python",
      sub: "Primary Engineering Language",
      desc: "Python is the primary language across my AI and engineering projects — from retrieval pipelines to network diagnostics and data tools.",
      items: ["AI Engineering", "Backend Logic", "Automation", "APIs", "Data Processing"],
      project: { name: "NetX + RAG projects", url: "https://github.com/rakxmithub" },
      pipeline: ["PYTHON"]
    },
    LANGCHAIN: {
      icon: "⛓",
      title: "LangChain",
      sub: "LLM Application Framework",
      desc: "LangChain provides modular building blocks for LLM and RAG pipelines — chains, retrievers, memory, and model integration.",
      items: ["Chains", "Retrievers", "Memory", "LLM Integration", "Query Processing"],
      project: { name: "Modular RAG AI Assistant", url: "https://github.com/rakxmithub/project-RAG" },
      pipeline: ["LANGCHAIN", "RAG", "LLM"]
    },
    CHROMADB: {
      icon: "⬢",
      title: "ChromaDB",
      sub: "Vector Database",
      desc: "ChromaDB stores and queries embeddings for semantic retrieval, enabling persistent vector search in RAG systems.",
      items: ["Embedding Storage", "Similarity Query", "Persistent Index"],
      project: { name: "Modular RAG AI Assistant", url: "https://github.com/rakxmithub/project-RAG" },
      pipeline: ["CHROMADB", "VECTOR SEARCH"]
    },
    BM25: {
      icon: "▣",
      title: "BM25",
      sub: "Keyword Retrieval",
      desc: "BM25 is a classical ranking function used for keyword-based retrieval and as a component of hybrid search alongside dense vectors.",
      items: ["Keyword Matching", "Hybrid Search", "Lexical Signals"],
      project: { name: "Modular RAG AI Assistant", url: "https://github.com/rakxmithub/project-RAG" },
      pipeline: ["BM25", "RERANKING"]
    },
    "AI SYSTEMS": {
      icon: "⬡",
      title: "AI Systems",
      sub: "End-to-End Pipelines",
      desc: "Modular AI pipelines connect retrieval, processing, reasoning, and generation into maintainable software systems.",
      items: ["Architecture", "Orchestration", "Evaluation", "Deployment"],
      project: { name: "Modular RAG AI Assistant", url: "https://github.com/rakxmithub/project-RAG" },
      pipeline: ["AI SYSTEMS", "RAG", "LLM"]
    }
  };

  // State
  let W = 0, H = 0, dpr = 1, cx = 0, cy = 0;
  let nodes = [];
  let edges = [];
  let packets = [];
  let time = 0;
  let mouseX = 0, mouseY = 0, hasMouse = false;
  let hoverNode = null;
  let selectedKey = null;
  let expanded = false;
  let expanding = false;
  let expandT = 0;
  let visible = true;
  let soundOn = false;
  let audioCtx = null;
  let focusedNodeIdx = -1;

  function graphTheme() {
    const light = document.documentElement.getAttribute("data-theme") === "light";
    if (light) {
      return {
        accent: "15, 159, 79",
        accent2: "15, 118, 110",
        line: "70, 80, 95",
        lineActive: "15, 159, 79",
        nodeFill: "255, 255, 255",
        nodeBorder: "120, 130, 145",
        nodeText: "25, 30, 40",
        coreOuter: "15, 159, 79",
        glow: "15, 159, 79",
        packet: "15, 159, 79",
        light: true
      };
    }
    return {
      accent: "125, 255, 160",
      accent2: "94, 234, 212",
      line: "125, 255, 160",
      lineActive: "125, 255, 160",
      nodeFill: "16, 28, 24",
      nodeBorder: "125, 255, 160",
      nodeText: "238, 241, 244",
      coreOuter: "125, 255, 160",
      glow: "125, 255, 160",
      packet: "125, 255, 160",
      light: false
    };
  }
  const C = {
    get cyan() { return graphTheme().accent; },
    get green() { return graphTheme().accent; },
    get violet() { return graphTheme().accent2; },
    get white() { return graphTheme().nodeText; }
  };

  // ---- Audio (Web Audio API, no autoplay) ----
  function ensureAudio() {
    if (!audioCtx) {
      try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (_) {}
    }
    if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
  }

  function beep(freq, dur, type, vol) {
    if (!soundOn || !audioCtx) return;
    try {
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = type || "sine";
      o.frequency.value = freq;
      g.gain.value = vol || 0.03;
      g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
      o.connect(g);
      g.connect(audioCtx.destination);
      o.start();
      o.stop(audioCtx.currentTime + dur);
    } catch (_) {}
  }

  function sfx(kind) {
    if (!soundOn) return;
    ensureAudio();
    if (kind === "core") { beep(180, 0.15, "sine", 0.04); setTimeout(() => beep(320, 0.12, "sine", 0.03), 80); }
    else if (kind === "hover") beep(800, 0.04, "sine", 0.015);
    else if (kind === "click") { beep(440, 0.08, "triangle", 0.03); setTimeout(() => beep(660, 0.06, "sine", 0.02), 50); }
    else if (kind === "expand") { beep(120, 0.2, "sine", 0.035); setTimeout(() => beep(240, 0.15, "sine", 0.025), 100); }
    else if (kind === "panel") beep(520, 0.1, "sine", 0.025);
  }

  soundToggle?.addEventListener("click", (e) => {
    e.stopPropagation();
    soundOn = !soundOn;
    soundToggle.classList.toggle("on", soundOn);
    soundToggle.setAttribute("aria-label", soundOn ? "Mute sound" : "Enable sound");
    if (soundOn) { ensureAudio(); sfx("click"); }
  });

  // ---- Graph geometry ----
  function isMobile() { return window.innerWidth < 720; }

  function resize() {
    const rect = wrap.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = Math.max(200, Math.floor(rect.width));
    H = Math.max(200, Math.floor(rect.height));
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cx = W / 2;
    cy = H / 2;
    buildGraph();
  }

  function buildGraph() {
    nodes = [];
    edges = [];
    packets = [];
    const mobile = isMobile();
    const scale = Math.min(W, H) / 440;

    // Core
    nodes.push({
      id: 0, key: "CORE", x: cx, y: cy, ox: cx, oy: cy,
      layer: 0, radius: 6 * scale, energy: 1, label: null,
      isCore: true, appear: 1, angle: 0, r: 0
    });

    // Hierarchical architecture layout
    const groups = mobile
      ? [
          { keys: ["RAG", "EMBEDDINGS", "RERANKING"], angle: Math.PI * 1.05, r: 105 },
          { keys: ["LLM", "LANGCHAIN"], angle: -0.35, r: 100 },
          { keys: ["PYTHON", "AI SYSTEMS"], angle: 0.55, r: 100 }
        ]
      : [
          { keys: ["RAG", "EMBEDDINGS", "VECTOR SEARCH", "RERANKING", "CHROMADB", "BM25"], angle: Math.PI * 1.05, r: 125 },
          { keys: ["LLM"], angle: -0.45, r: 118 },
          { keys: ["LANGCHAIN", "PYTHON", "AI SYSTEMS"], angle: 0.5, r: 122 }
        ];

    groups.forEach((g) => {
      const n = g.keys.length;
      g.keys.forEach((key, i) => {
        const spread = n === 1 ? 0 : (i - (n - 1) / 2) * (mobile ? 0.42 : 0.32);
        const a = g.angle + spread;
        const rr = g.r * scale;
        const x = cx + Math.cos(a) * rr;
        const y = cy + Math.sin(a) * rr;
        const id = nodes.length;
        nodes.push({
          id, key, x, y, ox: x, oy: y,
          layer: 1, radius: (mobile ? 5 : 5.5) * scale,
          energy: 0.25, label: key, isCore: false,
          appear: 0, angle: a, r: rr
        });
        const hub = i === 0 || key === "LLM" || key === "RAG";
        edges.push({ from: 0, to: id, strength: hub ? 0.75 : 0.35, active: 0 });
      });
    });

    function linkKeys(a, b, s) {
      const na = nodes.find((n) => n.key === a);
      const nb = nodes.find((n) => n.key === b);
      if (na && nb) edges.push({ from: na.id, to: nb.id, strength: s || 0.5, active: 0 });
    }
    linkKeys("RAG", "EMBEDDINGS", 0.85);
    linkKeys("EMBEDDINGS", "VECTOR SEARCH", 0.85);
    linkKeys("VECTOR SEARCH", "RERANKING", 0.8);
    linkKeys("CHROMADB", "VECTOR SEARCH", 0.7);
    linkKeys("BM25", "RERANKING", 0.65);
    linkKeys("RERANKING", "LLM", 0.85);
    linkKeys("RAG", "LLM", 0.55);
    linkKeys("LANGCHAIN", "RAG", 0.7);
    linkKeys("LANGCHAIN", "LLM", 0.65);
    linkKeys("PYTHON", "RAG", 0.5);
    linkKeys("PYTHON", "LANGCHAIN", 0.45);
    linkKeys("AI SYSTEMS", "RAG", 0.5);
    linkKeys("AI SYSTEMS", "LLM", 0.5);
  }

  function spawnPacket(ei, dir) {
    packets.push({
      edge: ei,
      t: dir > 0 ? 0 : 1,
      speed: dir * (0.012 + Math.random() * 0.01),
      size: 1.8
    });
  }

  function setHud(status, active) {
    if (hudStatus) hudStatus.textContent = status;
    if (hudActive) hudActive.textContent = active || "NONE";
  }

  const backdrop = document.getElementById("panelBackdrop");

  function resolveKnowledge(key) {
    let loc = null;
    try {
      if (window.MT && typeof window.MT.getAIContent === "function") {
        loc = window.MT.getAIContent(key);
      }
    } catch (_) {}
    const base = KNOWLEDGE[key] || {};
    if (!loc && !base.title) return null;
    return {
      icon: (loc && loc.icon) || base.icon || "◈",
      title: (loc && loc.title) || base.title || key,
      sub: (loc && loc.sub) || base.sub || "",
      desc: (loc && loc.desc) || base.desc || "",
      how: (loc && loc.how) || null,
      pipelineText: (loc && loc.pipeline) || null,
      items: (loc && loc.items) || base.items || [],
      workLabel: (loc && loc.workLabel) || null,
      project: base.project || null,
      pipeKeys: base.pipeline || [key]
    };
  }

  function openPanel(key, opts) {
    const k = resolveKnowledge(key);
    if (!k || !panel) return;
    const silent = opts && opts.silent;
    selectedKey = key;
    panelIcon.textContent = k.icon;
    panelTitle.textContent = k.title;
    panelSub.textContent = k.sub;

    if (k.how && k.pipelineText) {
      panelDesc.style.whiteSpace = "pre-line";
      panelDesc.textContent = k.desc + "\n\n" + k.how + "\n" + k.pipelineText;
    } else {
      panelDesc.style.whiteSpace = "";
      panelDesc.textContent = k.desc;
    }

    const sectionH4 = panel.querySelector(".ai-panel-section h4");
    if (sectionH4 && k.workLabel) sectionH4.textContent = k.workLabel;

    panelList.innerHTML = "";
    k.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      panelList.appendChild(li);
    });
    if (k.project) {
      panelProject.hidden = false;
      panelProjectName.textContent = k.project.name;
      panelProjectLink.href = k.project.url;
    } else {
      panelProject.hidden = true;
    }
    panel.hidden = false;
    panel.setAttribute("aria-hidden", "false");
    if (backdrop) {
      backdrop.hidden = false;
      requestAnimationFrame(() => backdrop.classList.add("open"));
    }
    wrap.classList.add("panel-open");
    requestAnimationFrame(() => panel.classList.add("open"));
    setHud("MODULE ACTIVE", key);
    if (!silent) sfx("panel");
    activatePipeline(k.pipeKeys || [key]);
    if (!silent) setTimeout(() => panelClose && panelClose.focus(), 100);
  }

  window.addEventListener("mt:langchange", function () {
    if (selectedKey) openPanel(selectedKey, { silent: true });
  });

  function closePanel() {
    selectedKey = null;
    panel?.classList.remove("open");
    backdrop?.classList.remove("open");
    wrap.classList.remove("panel-open");
    setTimeout(() => {
      if (panel && !panel.classList.contains("open")) {
        panel.hidden = true;
        panel.setAttribute("aria-hidden", "true");
      }
      if (backdrop) backdrop.hidden = true;
    }, 320);
    setHud(expanded ? "NEURAL GRAPH READY" : "READY", "NONE");
    edges.forEach((e) => { e.active = 0; });
    nodes.forEach((n) => { if (!n.isCore) n.energy = 0.25; });
    canvas.focus();
  }

  function activatePipeline(keys) {
    edges.forEach((e) => { e.active = 0; });
    const ids = keys.map((k) => nodes.find((n) => n.key === k)?.id).filter((id) => id != null);
    ids.forEach((id) => {
      if (nodes[id]) nodes[id].energy = 1.2;
    });
    // Light edges between consecutive pipeline nodes + core links
    for (let i = 0; i < ids.length; i++) {
      edges.forEach((e, ei) => {
        if ((e.from === ids[i] || e.to === ids[i]) &&
            (ids.includes(e.from) && ids.includes(e.to) || e.from === 0 || e.to === 0)) {
          e.active = 1;
          spawnPacket(ei, 1);
        }
      });
    }
  }

  function expandGraph() {
    if (expanded || expanding) return;
    expanding = true;
    expandT = 0;
    setHud("PROCESSING...", "—");
    sfx("expand");
    if (hint) hint.classList.add("hidden");
    if (coreLabel) coreLabel.style.transform = "scale(1.08)";

    // Stagger appear
    nodes.forEach((n, i) => {
      if (n.isCore) return;
      n.appear = 0;
      setTimeout(() => {
        n.appear = 0.01;
      }, 120 + i * 70);
    });

    setTimeout(() => {
      expanded = true;
      expanding = false;
      setHud("NEURAL GRAPH READY", "SELECT");
      if (coreLabel) coreLabel.style.transform = "";
      // Initial activity
      edges.filter((e) => e.from === 0).forEach((e, i) => {
        setTimeout(() => {
          e.active = 0.8;
          spawnPacket(edges.indexOf(e), 1);
        }, i * 80);
      });
    }, 120 + nodes.length * 70 + 200);
  }

  // ---- Interaction ----
  function hitTest(mx, my) {
    const scale = Math.min(W, H) / 440;
    const coreHit = isMobile() ? 44 * scale : 36 * scale;
    const nodeHit = isMobile() ? 28 : 22;
    const core = nodes[0];
    if (Math.hypot(mx - core.x, my - core.y) < coreHit) return core;
    if (!expanded) return null;
    let best = null;
    let bestD = nodeHit;
    for (let i = 1; i < nodes.length; i++) {
      const n = nodes[i];
      if (n.appear < 0.5) continue;
      const d = Math.hypot(mx - n.x, my - n.y);
      if (d < bestD + n.radius) {
        bestD = d;
        best = n;
      }
    }
    return best;
  }

  function onPointer(x, y, isClick) {
    const n = hitTest(x, y);
    if (isClick) {
      if (n && n.isCore) {
        sfx("core");
        if (!expanded) expandGraph();
        else closePanel();
        return;
      }
      if (n && n.key && n.key !== "CORE") {
        sfx("click");
        openPanel(n.key);
        return;
      }
      if (expanded) closePanel();
    } else {
      if (n !== hoverNode) {
        hoverNode = n;
        if (n && !n.isCore && n.appear > 0.5) sfx("hover");
      }
    }
  }

  canvas.addEventListener("click", (e) => {
    const r = canvas.getBoundingClientRect();
    onPointer(e.clientX - r.left, e.clientY - r.top, true);
  });
  canvas.addEventListener("mousemove", (e) => {
    const r = canvas.getBoundingClientRect();
    mouseX = e.clientX - r.left;
    mouseY = e.clientY - r.top;
    hasMouse = true;
    onPointer(mouseX, mouseY, false);
  });
  canvas.addEventListener("mouseleave", () => {
    hasMouse = false;
    hoverNode = null;
  });
  // Touch
  canvas.addEventListener("touchend", (e) => {
    const t = e.changedTouches[0];
    const r = canvas.getBoundingClientRect();
    onPointer(t.clientX - r.left, t.clientY - r.top, true);
  }, { passive: true });

  panelClose?.addEventListener("click", closePanel);
  document.getElementById("panelBackdrop")?.addEventListener("click", closePanel);

  // Keyboard
  canvas.setAttribute("tabindex", "0");
  canvas.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!expanded) {
        expandGraph();
        sfx("core");
      } else if (focusedNodeIdx > 0 && nodes[focusedNodeIdx]) {
        const n = nodes[focusedNodeIdx];
        if (n.key && n.key !== "CORE") openPanel(n.key);
      }
    }
    if (e.key === "Escape") closePanel();
    if (expanded && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
      e.preventDefault();
      const dir = e.key === "ArrowRight" ? 1 : -1;
      const selectable = nodes.filter((n) => !n.isCore && n.appear > 0.5);
      if (!selectable.length) return;
      let idx = selectable.findIndex((n) => n.id === focusedNodeIdx);
      idx = (idx + dir + selectable.length) % selectable.length;
      focusedNodeIdx = selectable[idx].id;
      hoverNode = nodes[focusedNodeIdx];
    }
  });

  // ---- Update / Draw ----
  function update(dt) {
    time += dt;
    const scale = Math.min(W, H) / 440;

    // Core pulse
    nodes[0].energy = 0.85 + Math.sin(time * 2.2) * 0.15;

    // Expand animation
    if (expanding || expanded) {
      nodes.forEach((n) => {
        if (n.isCore) return;
        if (n.appear > 0 && n.appear < 1) n.appear = Math.min(1, n.appear + dt * 2.5);
      });
    }

    nodes.forEach((n) => {
      if (n.isCore) {
        if (hasMouse && isFine) {
          const mx = (mouseX - cx) / W;
          const my = (mouseY - cy) / H;
          n.x = cx + mx * 5;
          n.y = cy + my * 5;
        } else {
          n.x += (cx - n.x) * 0.1;
          n.y += (cy - n.y) * 0.1;
        }
        return;
      }
      // Drift
      if (n.angle !== undefined) {
        n.angle += 0.00012 * (n.id % 2 === 0 ? 1 : -1);
        const br = Math.sin(time * 0.7 + n.id) * 2 * scale;
        n.ox = cx + Math.cos(n.angle) * (n.r + br);
        n.oy = cy + Math.sin(n.angle) * (n.r + br);
      }
      if (hasMouse && isFine) {
        const depth = 0.4;
        n.x = n.ox + ((mouseX - cx) / W) * depth * 14;
        n.y = n.oy + ((mouseY - cy) / H) * depth * 14;
      } else {
        n.x += (n.ox - n.x) * 0.08;
        n.y += (n.oy - n.y) * 0.08;
      }
      // Energy decay
      if (n.key !== selectedKey) {
        n.energy += (0.25 - n.energy) * 0.03;
      }
    });

    edges.forEach((e) => { e.active *= 0.97; });

    for (let i = packets.length - 1; i >= 0; i--) {
      const p = packets[i];
      p.t += p.speed;
      if (p.t < 0 || p.t > 1) {
        const e = edges[p.edge];
        if (e) {
          const dest = p.speed > 0 ? e.to : e.from;
          if (nodes[dest]) nodes[dest].energy = Math.min(1.5, nodes[dest].energy + 0.4);
        }
        packets.splice(i, 1);
      }
    }

    // Idle activity when expanded
    if (expanded && !selectedKey && !reduceMotion && Math.random() < 0.008) {
      const ei = Math.floor(Math.random() * edges.length);
      edges[ei].active = 0.7;
      spawnPacket(ei, Math.random() < 0.5 ? 1 : -1);
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const scale = Math.min(W, H) / 440;

    // Orbital rings
    for (let i = 0; i < 3; i++) {
      const rr = (48 + i * 48) * scale;
      ctx.beginPath();
      ctx.arc(cx, cy, rr, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${C.cyan}, ${0.04 + i * 0.02})`;
      ctx.lineWidth = 1;
      ctx.setLineDash(i === 1 ? [3, 7] : []);
      ctx.stroke();
      ctx.setLineDash([]);
    }
    // Partial arc
    ctx.beginPath();
    ctx.arc(cx, cy, 160 * scale, time * 0.12, time * 0.12 + 1.1);
    ctx.strokeStyle = `rgba(${C.violet}, 0.14)`;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    const T = graphTheme();

    edges.forEach((e) => {
      const a = nodes[e.from];
      const b = nodes[e.to];
      if (!a || !b) return;
      const ap = a.isCore ? 1 : a.appear;
      const bp = b.isCore ? 1 : b.appear;
      if (ap < 0.1 || bp < 0.1) return;
      const base = T.light ? 0.24 : 0.06;
      const alpha = (base + e.strength * (T.light ? 0.2 : 0.08) + e.active * 0.45) * Math.min(ap, bp);
      const col = e.active > 0.2 ? T.lineActive : T.line;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = "rgba(" + col + "," + alpha + ")";
      ctx.lineWidth = (T.light ? 1.25 : 0.9) + e.active * 1.6;
      ctx.stroke();
    });

    packets.forEach((p) => {
      const e = edges[p.edge];
      if (!e) return;
      const a = nodes[e.from];
      const b = nodes[e.to];
      if (!a || !b) return;
      const x = a.x + (b.x - a.x) * p.t;
      const y = a.y + (b.y - a.y) * p.t;
      ctx.beginPath();
      ctx.arc(x, y, p.size * scale * (T.light ? 1.15 : 1), 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + T.packet + ",0.95)";
      ctx.shadowColor = "rgba(" + T.packet + "," + (T.light ? 0.3 : 0.7) + ")";
      ctx.shadowBlur = T.light ? 4 : 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    nodes.forEach((n) => {
      if (n.isCore) return;
      if (n.appear <= 0) return;
      const ap = n.appear;
      const energy = n.energy;
      const isHover = hoverNode && hoverNode.id === n.id;
      const isSel = selectedKey === n.key;
      const isFocus = focusedNodeIdx === n.id;
      const r = n.radius * (isHover || isSel ? 1.55 : 1) * ap;

      if (isHover || isSel || energy > 0.5) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 2.4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + T.glow + "," + ((T.light ? 0.12 : 0.1) * ap) + ")";
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      if (T.light) {
        ctx.fillStyle = isSel ? "rgba(232, 250, 240," + ap + ")" : "rgba(" + T.nodeFill + "," + ap + ")";
        ctx.fill();
        ctx.strokeStyle = (isSel || isHover)
          ? "rgba(" + T.accent + "," + ap + ")"
          : "rgba(" + T.nodeBorder + "," + (0.9 * ap) + ")";
        ctx.lineWidth = isSel ? 2.2 : (isFocus ? 1.6 : 1.2);
        ctx.stroke();
      } else {
        ctx.fillStyle = "rgba(" + T.accent + "," + ((0.4 + energy * 0.35) * ap) + ")";
        ctx.fill();
        ctx.strokeStyle = "rgba(" + T.accent + "," + ((0.4 + energy * 0.4) * ap) + ")";
        ctx.lineWidth = isFocus || isSel ? 2 : 1;
        ctx.stroke();
      }

      if (n.label && ap > 0.55) {
        const fs = Math.max(9, Math.round(10 * scale));
        ctx.font = "600 " + fs + "px Manrope, system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
        const ty = n.y - r - 6 * scale;
        if (T.light) {
          const tw = ctx.measureText(n.label).width;
          ctx.fillStyle = "rgba(255,255,255," + (0.94 * ap) + ")";
          ctx.fillRect(n.x - tw / 2 - 4, ty - fs - 2, tw + 8, fs + 5);
          ctx.fillStyle = (isSel || isHover)
            ? "rgba(" + T.accent + "," + ap + ")"
            : "rgba(" + T.nodeText + "," + (0.92 * ap) + ")";
        } else {
          ctx.fillStyle = "rgba(" + T.nodeText + "," + ((isHover || isSel ? 0.95 : 0.55 + energy * 0.3) * ap) + ")";
        }
        ctx.fillText(n.label, n.x, ty);
      }
    });

    const core = nodes[0];
    const pulse = core.energy;
    const coreR = 32 * scale * (0.95 + pulse * 0.06);
    const hoverCore = hoverNode && hoverNode.isCore;

    const grd = ctx.createRadialGradient(core.x, core.y, 0, core.x, core.y, coreR * 2.8);
    grd.addColorStop(0, "rgba(" + T.glow + "," + ((T.light ? 0.12 : 0.22) * pulse) + ")");
    grd.addColorStop(0.55, "rgba(" + T.glow + "," + ((T.light ? 0.04 : 0.06) * pulse) + ")");
    grd.addColorStop(1, "rgba(" + T.glow + ",0)");
    ctx.beginPath();
    ctx.arc(core.x, core.y, coreR * 2.8, 0, Math.PI * 2);
    ctx.fillStyle = grd;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(core.x, core.y, coreR * (hoverCore ? 1.06 : 1), 0, Math.PI * 2);
    if (T.light) {
      ctx.fillStyle = "rgba(255,255,255,0.98)";
      ctx.fill();
      ctx.strokeStyle = "rgba(" + T.coreOuter + "," + (0.9 + pulse * 0.1) + ")";
      ctx.lineWidth = 2.5;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(core.x, core.y, coreR * 1.22, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(" + T.coreOuter + ",0.22)";
      ctx.lineWidth = 1;
      ctx.stroke();
    } else {
      const cg = ctx.createRadialGradient(core.x - coreR * 0.2, core.y - coreR * 0.2, 0, core.x, core.y, coreR);
      cg.addColorStop(0, "rgba(180,255,200," + (0.45 * pulse) + ")");
      cg.addColorStop(0.5, "rgba(" + T.accent + "," + (0.25 * pulse) + ")");
      cg.addColorStop(1, "rgba(6,12,14,0.95)");
      ctx.fillStyle = cg;
      ctx.fill();
      ctx.strokeStyle = "rgba(" + T.accent + "," + (0.55 + pulse * 0.25) + ")";
      ctx.lineWidth = 1.6;
      ctx.stroke();
    }
  }

  let last = performance.now();
  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (visible && !reduceMotion) update(dt);
    else if (visible) {
      // static redraw for reduced motion
    }
    if (visible) draw();
    requestAnimationFrame(frame);
  }

  const io = new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
  }, { threshold: 0.05 });
  io.observe(wrap);

  // Redraw when theme toggles
  const themeObs = new MutationObserver(() => { if (visible) draw(); });
  themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });


  window.addEventListener("resize", resize);
  resize();
  requestAnimationFrame(frame);

  // Hint after short delay
  setTimeout(() => {
    if (hint && !expanded) {
    try { hint.textContent = (window.MT && window.MT.t) ? window.MT.t("ai.hint") : "CLICK CORE TO ACTIVATE"; } catch(_) { hint.textContent = "CLICK CORE TO ACTIVATE"; }
  }
  }, 2000);
})();


/* Premium portrait parallax (subtle, desktop only) */
(function () {
  const frame = document.querySelector(".portrait-frame");
  if (!frame || !window.matchMedia("(pointer:fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const max = 6;
  let raf = 0;
  let tx = 0, ty = 0, cx = 0, cy = 0;
  window.addEventListener("mousemove", (e) => {
    const r = frame.getBoundingClientRect();
    const px = (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2);
    const py = (e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2);
    tx = Math.max(-1, Math.min(1, px)) * max;
    ty = Math.max(-1, Math.min(1, py)) * (max * 0.6);
  }, { passive: true });
  function tick() {
    cx += (tx - cx) * 0.06;
    cy += (ty - cy) * 0.06;
    frame.style.transform = "perspective(900px) rotateY(" + (-5 + cx) + "deg) rotateX(" + (3 - cy) + "deg)";
    raf = requestAnimationFrame(tick);
  }
  tick();
  frame.addEventListener("mouseleave", () => { tx = 0; ty = 0; });
})();


/* Hero scroll explore */
(function () {
  const btn = document.getElementById("scrollExplore");
  if (!btn) return;
  btn.addEventListener("click", function () {
    // Next primary content section after Hero
    const target = document.getElementById("projects") || document.getElementById("about");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
})();


/* ========== Pixel AI Cat (fully isolated) ========== */
(function () {
  "use strict";
  try {
    var root = document.getElementById("pixelCatRoot");
    var canvas = document.getElementById("pixelCatCanvas");
    var bubble = document.getElementById("pixelCatBubble");
    if (!root || !canvas) return;

    var reduced = false;
    try {
      reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (_) {}

    var ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;

    // Logical pixel size (16x16 sprite @ 4x = 64px)
    var S = 16;
    var SCALE = 4;
    canvas.width = S * SCALE;
    canvas.height = S * SCALE;

    // Walk bounds relative to root (px)
    var walkMin = 0;
    var walkMax = 76; // keeps cat inside the small floor area
    try {
      if (window.matchMedia("(max-width: 600px)").matches) walkMax = 52;
    } catch (_) {}

    // Original site-matching palette
    var C = {
      body: "#c8c4bc",
      bodyDark: "#9a958c",
      bodyLight: "#ddd9d2",
      outline: "#2a2a2e",
      eye: "#1a1a1e",
      eyeWhite: "#f2f2f0",
      eyeShine: "#ffffff",
      nose: "#e89a9a",
      earInner: "#e8b0b0",
      blush: "#e8a0a8",
      accent: "#b4ff50",
      lime: "#b4ff50",
      tear: "#7ec8ff",
      mouth: "#5a4a4a",
      bow: "#e89a9a"
    };

    // State machine
    var state = "IDLE";
    var facing = 1; // 1 right, -1 left
    var x = 20;
    var y = 0;
    var vx = 0;
    var frame = 0;
    var animT = 0;
    var stateT = 0;
    var stateDur = 3 + Math.random() * 4;
    var blinkT = 0;
    var blinkDur = 2.5 + Math.random() * 3;
    var blinking = false;
    var blinkPhase = 0;
    var earPhase = 0;
    var tailPhase = 0;
    var breathPhase = 0;
    var headTilt = 0;
    var lookDir = 0; // -1 left, 0 center, 1 right
    var talkMsg = "";
    var talkT = 0;
    var cryTears = 0;
    var hoverLook = 0;
    var clickReactT = 0;
    var petT = 0;
    var petting = false;
    var hearts = [];
    var lastTs = 0;
    var running = true;
    var catLang = "en";

    // Messages match site languages — varied funny jokes
    var MESSAGES_BY_LANG = {
      en: [
        "Meow.exe loaded 🐱",
        "404: snacks not found",
        "Compiling purrs...",
        "I dream in tokens",
        "Have you tried turning me off?",
        "90% fluff, 10% bugs",
        "git commit -m 'napped'",
        "My bed is a cardboard box",
        "Running on catnip GPU",
        "I debug with my paws",
        "Pull request: open tuna",
        "NullPointerException: love",
        "Stack overflow of cuddles",
        "I speak fluent meow++",
        "Out of memory: need snacks",
        "I'm not lazy, I'm idle-optimized",
        "Error 418: I'm a teapot cat",
        "Ship it... after nap.",
        "Cache miss: where's the laser?",
        "sudo feed me",
        "Keyboard is warm. Mine.",
        "This meeting could've been a meow",
        "I passed the Turing test (meow)",
        "Quantum: asleep AND hungry",
        "Binary: 0=no pet, 1=pet now",
        "Day 47: humans still weird",
        "If I fits, I sits.",
        "Judging your code... and your life",
        "Zoom call face = my resting face",
        "I invented the slow blink protocol",
        "Your playlist needs more meows",
        "Plot twist: I ate the homework",
        "Boss fight: empty food bowl",
        "Achievement unlocked: knocked a cup",
        "Loading personality... done. Chaotic.",
        "I don't chase lasers. Lasers chase me.",
        "Mood: mysterious loaf",
        "Side quest: find the warmest laptop",
        "NPC dialogue: meow. meow? MEOW!",
        "Season finale: I woke up at 3am",
        "Pro tip: never trust a quiet cat",
        "I'm basically a furry debugger",
        "Changelog: v1.0 — still cute",
        "Warning: extreme softness ahead",
        "Connection lost... napping",
        "I rate this day 11/10 pets",
        "Secret skill: ignoring you stylishly",
        "Today's forecast: 100% chance of meow"
      ],
      de: [
        "Miau.exe geladen 🐱",
        "404: Snacks nicht gefunden",
        "Schnurren wird kompiliert...",
        "Ich träume in Tokens",
        "Schon mal aus- und angeschaltet?",
        "90% Fluff, 10% Bugs",
        "git commit -m 'genickt'",
        "Mein Bett ist ein Karton",
        "Läuft auf Catnip-GPU",
        "Ich debugge mit Pfoten",
        "Pull Request: Thunfisch öffnen",
        "NullPointerException: Liebe",
        "Stack Overflow an Kuscheln",
        "Ich spreche fließend Miau++",
        "Out of Memory: brauche Snacks",
        "Nicht faul, idle-optimiert",
        "Fehler 418: Teekanne-Katze",
        "Ship it... nach dem Nickerchen.",
        "Cache miss: wo ist der Laser?",
        "sudo fütter mich",
        "Tastatur ist warm. Meins.",
        "Meeting hätte ein Miau sein können",
        "Turing-Test bestanden (miau)",
        "Quanten: schlafend UND hungrig",
        "Binär: 0=kein Streicheln, 1=jetzt",
        "Tag 47: Menschen sind seltsam",
        "If I fits, I sits.",
        "Beurteile deinen Code... und dein Leben",
        "Zoom-Gesicht = mein Normalgesicht",
        "Ich erfand das Langsam-Blinzel-Protokoll",
        "Deine Playlist braucht mehr Miaus",
        "Plot twist: Ich aß die Hausaufgaben",
        "Boss-Kampf: leerer Napf",
        "Achievement: Tasse umgestoßen",
        "Persönlichkeit laden... chaotisch.",
        "Ich jage keine Laser. Laser jagen mich.",
        "Stimmung: mysteriöser Laib",
        "Nebenquest: wärmster Laptop",
        "NPC-Dialog: miau. miau? MIAU!",
        "Staffelende: 3 Uhr nachts wach",
        "Profi-Tipp: stillen Katzen nicht trauen",
        "Ich bin ein pelziger Debugger",
        "Changelog: v1.0 — immer noch süß",
        "Warnung: extreme Weichheit",
        "Verbindung verloren... Nickerchen",
        "Tag bewertet: 11/10 Streicheleinheiten",
        "Geheimskill: stilvoll ignorieren",
        "Wetter: 100% Chance auf Miau"
      ],
      ar: [
        "تم تحميل مياو.exe 🐱",
        "404: لم يُعثر على وجبات",
        "جارٍ تجميع الخرخرة...",
        "أحلم بالتوكنات",
        "هل جربت إطفائي وتشغيلي؟",
        "90٪ زغب، 10٪ أخطاء",
        "git commit -m 'نمت'",
        "سريري صندوق كرتون",
        "أعمل على GPU النعناع",
        "أصلح الأخطاء بمخالبي",
        "طلب سحب: افتح التونة",
        "NullPointerException: حب",
        "فيضان عناق في المكدس",
        "أتحدث مياو++ بطلاقة",
        "نفدت الذاكرة: أحتاج وجبات",
        "لست كسولاً، محسّن للخمول",
        "خطأ 418: قطة إبريق شاي",
        "انشره... بعد القيلولة.",
        "خطأ كاش: أين الليزر؟",
        "sudo أطعميني",
        "لوحة المفاتيح دافئة. ملكي.",
        "هذا الاجتماع كان يمكن أن يكون مياو",
        "نجحت في اختبار تورينغ (مياو)",
        "كمية: نائمة وجائعة معاً",
        "ثنائي: 0=لا مداعبة، 1=الآن",
        "اليوم 47: البشر غريبون",
        "إذا ناسبني الحجم، أجلس.",
        "أحكم على كودك... وحياتك",
        "وجه الزوم = وجهي الطبيعي",
        "اخترعت بروتوكول الرمش البطيء",
        "قائمتك تحتاج مزيداً من المياو",
        "مفاجأة: أكلت الواجب",
        "معركة الزعيم: وعاء فارغ",
        "إنجاز: أسقطت كوباً",
        "تحميل الشخصية... فوضوية.",
        "لا أطارد الليزر. الليزر يطاردني.",
        "المزاج: رغيف غامض",
        "مهمة جانبية: أدفأ لابتوب",
        "حوار NPC: مياو. مياو؟ مياو!",
        "نهاية الموسم: استيقظت الساعة 3",
        "نصيحة: لا تثق بقطة هادئة",
        "أنا مصحح أخطاء فروي",
        "سجل التغييرات: v1.0 — ما زلت لطيفاً",
        "تحذير: نعومة شديدة قادمة",
        "انقطع الاتصال... قيلولة",
        "تقييمي لليوم: 11/10 مداعبات",
        "مهارة سرية: تجاهلك بأناقة",
        "الطقس: 100٪ احتمال مياو"
      ],
      fr: [
        "Miaou.exe chargé 🐱",
        "404: snacks introuvables",
        "Compilation des ronrons...",
        "Je rêve en tokens",
        "Tu as essayé de m'éteindre ?",
        "90% fluff, 10% bugs",
        "git commit -m 'sieste'",
        "Mon lit est une boîte en carton",
        "Tourne sur GPU cataire",
        "Je débug avec mes pattes",
        "Pull request: ouvrir le thon",
        "NullPointerException: amour",
        "Stack overflow de câlins",
        "Je parle couramment miaou++",
        "Out of memory: besoin de snacks",
        "Pas paresseux, idle-optimisé",
        "Erreur 418: chat-théière",
        "Ship it... après la sieste.",
        "Cache miss: où est le laser ?",
        "sudo nourris-moi",
        "Le clavier est chaud. À moi.",
        "Cette réunion aurait pu être un miaou",
        "Test de Turing réussi (miaou)",
        "Quantique: endormi ET affamé",
        "Binaire: 0=pas de câlin, 1=maintenant",
        "Jour 47: les humains sont bizarres",
        "If I fits, I sits.",
        "Je juge ton code... et ta vie",
        "Visage Zoom = mon visage normal",
        "J'ai inventé le protocole clignement lent",
        "Ta playlist a besoin de plus de miaous",
        "Plot twist: j'ai mangé les devoirs",
        "Boss fight: gamelle vide",
        "Succès: gobelet renversé",
        "Chargement personnalité... chaotique.",
        "Je ne chasse pas les lasers. Ils me chassent.",
        "Humeur: pain de chat mystérieux",
        "Quête secondaire: laptop le plus chaud",
        "Dialogue PNJ: miaou. miaou? MIAOU!",
        "Finale: réveillé à 3h du mat",
        "Conseil pro: ne jamais faire confiance à un chat silencieux",
        "Je suis un debugger tout doux",
        "Changelog: v1.0 — toujours mignon",
        "Attention: douceur extrême",
        "Connexion perdue... sieste",
        "Note du jour: 11/10 câlins",
        "Compétence secrète: t'ignorer avec style",
        "Météo: 100% de chance de miaou"
      ]
    };

    // Extra lines when being petted
    var PET_MESSAGES_BY_LANG = {
      en: [
        "Purrrr... more please 💕",
        "Right there— yes!",
        "You found the sweet spot",
        "Soft paws activated",
        "Don't stop, human",
        "Affection level: MAX",
        "I accept payment in pets",
        "This is better than tuna",
        "Keep going, engineer",
        "Heart.exe overflowing"
      ],
      de: [
        "Schnurrrr... mehr bitte 💕",
        "Genau da— ja!",
        "Du hast die süße Stelle gefunden",
        "Weiche Pfoten aktiviert",
        "Nicht aufhören, Mensch",
        "Zuneigung: MAX",
        "Ich akzeptiere Streicheleinheiten",
        "Besser als Thunfisch",
        "Weiter so, Engineer",
        "Heart.exe überläuft"
      ],
      ar: [
        "خرخرة... المزيد من فضلك 💕",
        "هنا— نعم!",
        "وجدت النقطة الحلوة",
        "تم تفعيل المخالب الناعمة",
        "لا تتوقف أيها الإنسان",
        "مستوى الحنان: أقصى",
        "أقبل الدفع بالمداعبات",
        "أفضل من التونة",
        "استمر أيها المهندس",
        "Heart.exe يمتلئ"
      ],
      fr: [
        "Ronron... encore s'il te plaît 💕",
        "Juste là— oui !",
        "Tu as trouvé le bon endroit",
        "Pattes douces activées",
        "N'arrête pas, humain",
        "Niveau d'affection: MAX",
        "Je m'accepte en câlins",
        "Mieux que le thon",
        "Continue, ingénieur",
        "Heart.exe déborde"
      ]
    };

    function syncLang() {
      try {
        if (window.MT && typeof window.MT.getLang === "function") {
          catLang = window.MT.getLang() || "en";
        } else {
          catLang = document.documentElement.lang || "en";
        }
      } catch (_) {
        catLang = "en";
      }
      if (!MESSAGES_BY_LANG[catLang]) catLang = "en";
    }

    function getMessages() {
      syncLang();
      return MESSAGES_BY_LANG[catLang];
    }

    function getPetMessages() {
      syncLang();
      return PET_MESSAGES_BY_LANG[catLang] || PET_MESSAGES_BY_LANG.en;
    }

    try {
      window.addEventListener("mt:langchange", function (e) {
        try {
          if (e && e.detail && e.detail.lang) catLang = e.detail.lang;
        } catch (_) {}
      });
    } catch (_) {}

    function setState(s, dur) {
      state = s;
      stateT = 0;
      stateDur = dur != null ? dur : (2 + Math.random() * 3.5);
      if (s === "WALK") {
        facing = Math.random() < 0.5 ? -1 : 1;
        vx = facing * (18 + Math.random() * 12);
      } else {
        vx = 0;
      }
      if (s === "TALK") {
        var msgs = getMessages();
        talkMsg = msgs[(Math.random() * msgs.length) | 0];
        talkT = 0;
        if (bubble) {
          bubble.textContent = talkMsg;
          bubble.hidden = false;
          bubble.classList.add("is-visible");
          // RTL for Arabic
          try {
            bubble.style.direction = (catLang === "ar") ? "rtl" : "ltr";
          } catch (_) {}
        }
      } else if (bubble) {
        bubble.classList.remove("is-visible");
        setTimeout(function () {
          try { if (state !== "TALK") bubble.hidden = true; } catch (_) {}
        }, 200);
      }
      if (s === "CRY") cryTears = 0;
    }

    function pickNextState() {
      if (reduced) {
        setState("IDLE", 999);
        return;
      }
      var r = Math.random();
      if (r < 0.22) setState("IDLE", 2 + Math.random() * 3);
      else if (r < 0.38) setState("WALK", 1.4 + Math.random() * 2);
      else if (r < 0.48) setState("SIT", 1.8 + Math.random() * 2);
      else if (r < 0.56) setState("LOOK", 1.2 + Math.random() * 1.5);
      else if (r < 0.62) setState("SLEEP", 3 + Math.random() * 3.5);
      else if (r < 0.88) setState("TALK", 2.6 + Math.random() * 1.6);
      else if (r < 0.95) setState("HAPPY", 1.2 + Math.random());
      else if (r < 0.98) setState("SAD", 1.5 + Math.random());
      else setState("CRY", 2.2 + Math.random());
    }

    // Pixel helpers
    function px(ix, iy, col) {
      ctx.fillStyle = col;
      ctx.fillRect(ix * SCALE, iy * SCALE, SCALE, SCALE);
    }

    function drawCat(opts) {
      opts = opts || {};
      var sit = !!opts.sit;
      var sleep = !!opts.sleep;
      var happy = !!opts.happy;
      var sad = !!opts.sad;
      var cry = !!opts.cry;
      var talk = !!opts.talk;
      var walkFrame = opts.walkFrame | 0;
      var blink = !!opts.blink;
      var earOff = opts.earOff || 0;
      var tailOff = opts.tailOff || 0;
      var breath = opts.breath || 0;
      var head = opts.head || 0;
      var look = opts.look || 0;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      if (facing < 0) {
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
      }

      var by = 9 + (sit || sleep ? 1 : 0) - (breath | 0);

      // Tail
      var tc = tailOff;
      if (sit || sleep) {
        px(1, by + 1, C.outline);
        px(1, by, C.body);
        px(2, by - 1 + tc, C.body);
        px(2, by - 2 + tc, C.outline);
      } else {
        px(1, by + 1, C.outline);
        px(1, by, C.body);
        px(0, by - 1 + tc, C.body);
        px(0, by - 2 + tc, C.outline);
      }

      // Body + legs
      if (sit || sleep) {
        for (var i = 3; i <= 11; i++) px(i, by + 3, C.outline);
        for (var i = 3; i <= 11; i++) px(i, by + 2, C.body);
        for (var i = 4; i <= 10; i++) px(i, by + 1, C.body);
        for (var i = 4; i <= 10; i++) px(i, by, C.body);
        px(3, by + 1, C.outline);
        px(11, by + 1, C.outline);
        px(5, by + 4, C.body);
        px(9, by + 4, C.body);
      } else {
        var leg = walkFrame % 2;
        px(4, by + 4, C.outline);
        px(4, by + 3, leg ? C.bodyDark : C.body);
        px(10, by + 4, C.outline);
        px(10, by + 3, leg ? C.body : C.bodyDark);
        for (var i = 3; i <= 11; i++) px(i, by + 2, C.outline);
        for (var i = 3; i <= 11; i++) px(i, by + 1, C.body);
        for (var i = 4; i <= 10; i++) px(i, by, C.body);
        px(3, by, C.outline);
        px(11, by, C.outline);
      }

      // Chest
      for (var i = 4; i <= 10; i++) px(i, by - 1, C.body);
      px(4, by - 1, C.outline);
      px(10, by - 1, C.outline);

      // Head
      var hy = by - 5 + head;
      var eL = hy - 1 + (earOff > 0 ? 1 : 0) + ((sad || cry) ? 1 : 0);
      var eR = hy - 1 + (earOff < 0 ? 1 : 0) + ((sad || cry) ? 1 : 0);

      // Ears
      px(5, eL - 1, C.outline);
      px(5, eL, C.body);
      px(6, eL - 1, C.body);
      px(6, eL, C.earInner);
      px(10, eR - 1, C.outline);
      px(10, eR, C.body);
      px(9, eR - 1, C.body);
      px(9, eR, C.earInner);

      // Head fill
      for (var i = 5; i <= 10; i++) px(i, hy, C.body);
      for (var i = 4; i <= 11; i++) px(i, hy + 1, C.body);
      for (var i = 4; i <= 11; i++) px(i, hy + 2, C.body);
      for (var i = 5; i <= 10; i++) px(i, hy + 3, C.body);
      px(4, hy, C.outline); px(11, hy, C.outline);
      px(4, hy + 1, C.outline); px(11, hy + 1, C.outline);
      px(4, hy + 2, C.outline); px(11, hy + 2, C.outline);
      px(5, hy + 3, C.outline); px(10, hy + 3, C.outline);
      for (var i = 5; i <= 10; i++) px(i, hy - 1, C.outline);

      // Eyes
      var ey = hy + 1;
      var lx = 6 + (look > 0 ? 1 : look < 0 ? -1 : 0);
      var rx = 9 + (look > 0 ? 1 : look < 0 ? -1 : 0);
      if (sleep || (blink && !happy)) {
        px(lx, ey, C.outline);
        px(rx, ey, C.outline);
      } else if (happy) {
        px(lx, ey, C.outline);
        px(lx - 1, ey + 1, C.outline);
        px(lx + 1, ey + 1, C.outline);
        px(rx, ey, C.outline);
        px(rx - 1, ey + 1, C.outline);
        px(rx + 1, ey + 1, C.outline);
      } else {
        px(lx, ey, C.eyeWhite);
        px(rx, ey, C.eyeWhite);
        px(lx, ey, C.eye);
        px(rx, ey, C.eye);
      }

      // Nose
      px(7, hy + 2, C.nose);
      px(8, hy + 2, C.nose);

      // Mouth
      if (talk) {
        px(7, hy + 3, C.mouth);
        px(8, hy + 3, C.mouth);
      } else if (sad || cry) {
        px(6, hy + 3, C.mouth);
        px(7, hy + 3, C.mouth);
        px(9, hy + 3, C.mouth);
      } else if (happy) {
        px(6, hy + 3, C.mouth);
        px(7, hy + 3, C.mouth);
        px(8, hy + 3, C.mouth);
        px(9, hy + 3, C.mouth);
      } else {
        px(7, hy + 3, C.outline);
        px(8, hy + 3, C.outline);
      }

      // Tears
      if (cry && cryTears > 0.3) {
        px(6, hy + 2, C.tear);
        if (cryTears > 0.7) px(6, hy + 3, C.tear);
        px(9, hy + 2, C.tear);
        if (cryTears > 0.7) px(9, hy + 3, C.tear);
      }

      // Sleep Z
      if (sleep) {
        var z = ((animT * 1.5) | 0) % 3;
        px(12, hy - 1 - z, C.lime);
        if (z > 0) px(13, hy - 2 - z, C.lime);
      }

      // Floating hearts while petting / happy
      for (var hi = 0; hi < hearts.length; hi++) {
        var h = hearts[hi];
        var hx = Math.round(h.x);
        var hy2 = Math.round(h.y);
        if (h.life > 0.15) {
          px(hx, hy2, C.nose);
          px(hx - 1, hy2 - 1, C.nose);
          px(hx + 1, hy2 - 1, C.nose);
        }
      }

      ctx.restore();
    }

    function update(dt) {
      animT += dt;
      stateT += dt;
      breathPhase += dt * 1.6;
      earPhase += dt * 2.2;
      tailPhase += dt * 2.8;
      blinkT += dt;

      if (clickReactT > 0) {
        clickReactT -= dt;
      }
      if (petting) {
        petT += dt;
        if (petT > 0.25 && ((petT * 8) | 0) !== (((petT - dt) * 8) | 0)) {
          spawnHeart();
        }
      }
      // hearts physics
      for (var hi = hearts.length - 1; hi >= 0; hi--) {
        var h = hearts[hi];
        h.life -= dt;
        h.y += h.vy * dt;
        h.x += Math.sin(animT * 6 + hi) * 4 * dt;
        if (h.life <= 0) hearts.splice(hi, 1);
      }

      // Blink
      if (!reduced && state !== "SLEEP") {
        if (!blinking && blinkT >= blinkDur) {
          blinking = true;
          blinkPhase = 0;
        }
        if (blinking) {
          blinkPhase += dt;
          if (blinkPhase > 0.18) {
            blinking = false;
            blinkT = 0;
            blinkDur = 2.2 + Math.random() * 4;
          }
        }
      }

      // Hover look toward cursor (subtle)
      if (hoverLook !== 0 && state !== "SLEEP" && state !== "WALK") {
        lookDir = hoverLook;
      } else if (state === "LOOK") {
        lookDir = Math.sin(animT * 1.4) > 0 ? 1 : -1;
      } else {
        lookDir = 0;
      }

      // Movement
      if (state === "WALK" && !reduced) {
        x += vx * dt;
        if (x <= walkMin) {
          x = walkMin;
          facing = 1;
          vx = Math.abs(vx);
        } else if (x >= walkMax) {
          x = walkMax;
          facing = -1;
          vx = -Math.abs(vx);
        }
      }

      if (state === "TALK") {
        talkT += dt;
        if (talkT > stateDur) {
          if (bubble) {
            bubble.classList.remove("is-visible");
            setTimeout(function () { try { bubble.hidden = true; } catch (_) {} }, 180);
          }
        }
      }
      if (state === "CRY") {
        cryTears = Math.min(1, stateT / 0.8);
      }

      if (stateT >= stateDur) {
        pickNextState();
      }

      // Position canvas
      canvas.style.left = Math.round(x) + "px";
      if (bubble) {
        bubble.style.left = Math.round(x + 8) + "px";
      }
    }

    function render() {
      var breath = Math.sin(breathPhase) > 0.55 ? 1 : 0;
      var earOff = 0;
      if (state === "IDLE" || state === "LOOK") {
        earOff = Math.sin(earPhase) > 0.7 ? 1 : Math.sin(earPhase) < -0.7 ? -1 : 0;
      }
      if (clickReactT > 0) earOff = 1;
      var tailOff = Math.sin(tailPhase) > 0 ? 1 : 0;
      var head = 0;
      if (state === "LOOK") head = Math.sin(animT * 1.1) > 0.5 ? -1 : 0;
      if (state === "SAD" || state === "CRY") head = 1;

      var walkFrame = 0;
      if (state === "WALK") walkFrame = ((animT * 6) | 0) % 2;

      drawCat({
        sit: state === "SIT" || state === "SLEEP",
        sleep: state === "SLEEP",
        happy: state === "HAPPY" || clickReactT > 0.6,
        sad: state === "SAD",
        cry: state === "CRY",
        talk: state === "TALK" && ((animT * 8) | 0) % 2 === 0,
        walkFrame: walkFrame,
        blink: blinking,
        earOff: earOff,
        tailOff: tailOff,
        breath: state === "SLEEP" ? 0 : breath,
        head: head,
        look: lookDir
      });
    }

    function loop(ts) {
      if (!running) return;
      if (!lastTs) lastTs = ts;
      var dt = Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;
      try {
        update(dt);
        render();
      } catch (_) {}
      requestAnimationFrame(loop);
    }

    // Interactions — pet, click, talk
    var clickCount = 0;
    var lastClickTs = 0;

    function forceTalk(usePet) {
      var msgs = usePet ? getPetMessages() : getMessages();
      talkMsg = msgs[(Math.random() * msgs.length) | 0];
      state = "TALK";
      stateT = 0;
      stateDur = usePet ? 2.0 : 2.6;
      talkT = 0;
      if (bubble) {
        bubble.textContent = talkMsg;
        bubble.hidden = false;
        bubble.classList.add("is-visible");
        try {
          bubble.style.direction = (catLang === "ar") ? "rtl" : "ltr";
        } catch (_) {}
      }
    }

    function spawnHeart() {
      hearts.push({
        x: 6 + Math.random() * 6,
        y: 4 + Math.random() * 3,
        life: 0.8 + Math.random() * 0.5,
        max: 1.2,
        vy: -8 - Math.random() * 6
      });
      if (hearts.length > 8) hearts.shift();
    }

    // Hold / drag on cat = petting
    canvas.addEventListener("mousedown", function (e) {
      e.preventDefault();
      e.stopPropagation();
      try {
        petting = true;
        petT = 0;
        clickReactT = 1.5;
        setState("HAPPY", 2);
        spawnHeart();
      } catch (_) {}
    });
    window.addEventListener("mouseup", function () {
      try {
        if (petting) {
          petting = false;
          if (petT > 0.35) forceTalk(true);
        }
      } catch (_) {}
    });
    canvas.addEventListener("mousemove", function (e) {
      try {
        if (petting) {
          clickReactT = 1.2;
          if (Math.random() < 0.15) spawnHeart();
          if (state !== "HAPPY" && state !== "TALK") setState("HAPPY", 1.5);
        }
      } catch (_) {}
    });
    canvas.addEventListener("touchstart", function (e) {
      e.stopPropagation();
      try {
        petting = true;
        petT = 0;
        clickReactT = 1.5;
        setState("HAPPY", 2);
        spawnHeart();
      } catch (_) {}
    }, { passive: true });
    canvas.addEventListener("touchend", function () {
      try {
        if (petting) {
          petting = false;
          if (petT > 0.35) forceTalk(true);
        }
      } catch (_) {}
    });

    canvas.addEventListener("click", function (e) {
      e.stopPropagation();
      try {
        var now = Date.now();
        if (now - lastClickTs < 400) clickCount++;
        else clickCount = 1;
        lastClickTs = now;
        clickReactT = 1.4;
        spawnHeart();

        if (clickCount >= 3) {
          clickCount = 0;
          forceTalk(false);
          clickReactT = 2;
        } else if (clickCount === 2) {
          forceTalk(false);
        } else {
          setState("HAPPY", 0.9);
          setTimeout(function () {
            try {
              if (state === "HAPPY" || state === "IDLE") forceTalk(false);
            } catch (_) {}
          }, 450);
        }
      } catch (_) {}
    });

    canvas.addEventListener("mouseenter", function () {
      try {
        hoverLook = facing;
        if (!reduced && state === "IDLE" && Math.random() < 0.3) {
          forceTalk(false);
        }
      } catch (_) {}
    });
    canvas.addEventListener("mouseleave", function () {
      try {
        hoverLook = 0;
        if (petting) {
          petting = false;
          if (petT > 0.35) forceTalk(true);
        }
      } catch (_) {}
    });

    // Track cursor for subtle eye look when near
    window.addEventListener("mousemove", function (e) {
      try {
        if (reduced) return;
        var r = canvas.getBoundingClientRect();
        var cx = r.left + r.width / 2;
        var cy = r.top + r.height / 2;
        var dx = e.clientX - cx;
        var dy = e.clientY - cy;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          hoverLook = dx > 8 ? 1 : dx < -8 ? -1 : 0;
        } else if (dist > 160) {
          hoverLook = 0;
        }
      } catch (_) {}
    }, { passive: true });

    // Init
    if (reduced) {
      setState("IDLE", 9999);
    } else {
      setState("IDLE", 2 + Math.random() * 2);
    }
    render();
    requestAnimationFrame(loop);

    // Safety: never let errors kill the page
  } catch (err) {
    try {
      var r = document.getElementById("pixelCatRoot");
      if (r) r.style.display = "none";
    } catch (_) {}
  }
})();
