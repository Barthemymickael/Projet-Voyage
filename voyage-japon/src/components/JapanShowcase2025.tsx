"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import {
  Camera,
  Mountain,
  Sparkles,
  MapPin,
  Calendar,
  Plane,
  Train,
  Landmark,
  Sun,
  Moon,
  Stars,
} from "lucide-react";

/* ===== Leaflet (carte interactive) ===== */
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ====================================================================================
   Données (markers + programme du jour + cartes)
==================================================================================== */
type MarkerItem = {
  lat: number;
  lng: number;
  category: "city" | "monument" | "activity" | "feeling" | "book" | "temple" | string;
  emoji?: string;
  title?: string;
  desc?: string;
  slug?: string;
  day?: string;
};

const MARKERS: MarkerItem[] = [
  { lat: 35.6595, lng: 139.7005, category: "city",    emoji: "🏙️", title: "Jour 1 – Tokyo",            desc: "Rien à l’heure actuelle", slug: "jour-1-tokyo" },
  { lat: 35.7148, lng: 139.7967, category: "temple",  emoji: "⛩️", title: "Jour 2 – Asakusa",          desc: "Rien à l’heure actuelle", slug: "jour-2-asakusa" },
  { lat: 34.9671, lng: 135.7727, category: "temple",  emoji: "⛩️", title: "Jour 3 – Fushimi Inari",    desc: "Rien à l’heure actuelle", slug: "jour-3-fushimi-inari" },
  { lat: 35.0116, lng: 135.7681, category: "activity",emoji: "🎌", title: "Jour 4 – Cérémonie du thé", desc: "Rien à l’heure actuelle", slug: "jour-4-ceremonie-the" },
  { lat: 35.6895, lng: 139.6917, category: "feeling", emoji: "💭", title: "Jour 5 – Choc culturel",     desc: "Rien à l’heure actuelle", slug: "jour-5-choc-culturel" },
  { lat: 35.6762, lng: 139.6503, category: "sport",   emoji: "🏃", title: "Jour 6 – Marche à Tokyo",    desc: "Rien à l’heure actuelle", slug: "jour-6-marche-tokyo" },
  { lat: 35.0394, lng: 135.7292, category: "book",    emoji: "📚", title: "Jour 7 – L’Idiot — Dostoïevski", desc: "Résumé : ...", slug: "jour-7-l-idiot" },
];

type DayLog = { date: string; place?: string; done?: string[] };
const DAYLOG: DayLog[] = [
  { date: "2025-10-30", place: "Kyoto — Gion", done: ["Balade au quartier traditionnel", "Gyôza au marché de Nishiki"] },
  { date: "2025-10-31", place: "Shibuya, Tokyo", done: ["Passage à Shibuya Crossing", "Lecture : L'Idiot (2 chapitres)"] },
];

/* Jeu de cartes pour les scrollers (utilise les slug des markers) */
type MiniCard = {
  slug: string;
  title: string;
  text: string;
  img?: string;
  day?: string;
};
const CARDS: MiniCard[] = [
  { slug: "jour-1-tokyo", title: "Rien à l'heure actuelle", text: "Rien à l'heure actuelle", img: "/images/tokyo.png", day: "Jour 1" },
  { slug: "jour-3-fushimi-inari", title: "Rien à l'heure actuelle", text: "Rien à l'heure actuelle", img: "/images/fushimi.jpg", day: "Jour 1" },
  { slug: "jour-4-ceremonie-the", title: "Rien à l'heure actuelle", text: "Rien à l'heure actuelle", img: "/images/ceremonie.jpg", day: "Jour 1" },
  { slug: "jour-5-choc-culturel", title: "Rien à l'heure actuelle", text: "Rien à l'heure actuelle", img: "/images/ressenti.jpg", day: "Jour 1" },
  { slug: "jour-6-marche-tokyo", title: "Rien à l'heure actuelle", text: "Rien à l'heure actuelle", img: "/images/marche.jpg" },
  { slug: "jour-7-l-idiot", title: "L'Idiot — F. Dostoïevski (1869)", text: "La bonté peut-elle survivre ?", img: "/images/lidiot.jpg" },
];

/* ====================================================================================
   UI utilitaires & composants existants
==================================================================================== */

/** Barre de progression scroll */
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 h-[3px] z-[80] origin-left bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500"
      style={{ scaleX }}
    />
  );
}

/** Halo suiveur du curseur */
function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = glowRef.current;
      if (!el) return;
      const x = e.clientX - el.offsetWidth / 2;
      const y = e.clientY - el.offsetHeight / 2;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[30] h-64 w-64 rounded-full opacity-40 mix-blend-screen blur-3xl"
      style={{
        background: "radial-gradient(closest-side, rgba(236,72,153,0.35), rgba(99,102,241,0.2), transparent)",
      }}
    />
  );
}

/** Bouton magnétique */
function MagneticButton({ children, className = "", as = Button, disabled = false, ...props }: any) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const dampX = useSpring(x, { stiffness: 150, damping: 12 });
  const dampY = useSpring(y, { stiffness: 150, damping: 12 });

  function handleMove(e: React.MouseEvent) {
    if (disabled) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.15);
    y.set(relY * 0.15);
  }
  function handleLeave() {
    if (disabled) return;
    x.set(0);
    y.set(0);
  }

  const Comp = as;
  return (
    <motion.div
      style={{ x: dampX, y: dampY }}
      onMouseMove={disabled ? undefined : handleMove}
      onMouseLeave={disabled ? undefined : handleLeave}
      // si tu veux bloquer TOUT interaction souris, décommente:
      // className={disabled ? "pointer-events-none" : undefined}
    >
      <Comp
        ref={ref}
        disabled={disabled}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        className={`${className} ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
        {...props}
      >
        {children}
      </Comp>
    </motion.div>
  );
}

/** Card avec tilt 3D */
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const dRx = useSpring(rx, { stiffness: 150, damping: 12 });
  const dRy = useSpring(ry, { stiffness: 150, damping: 12 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rx.set(py * -10);
    ry.set(px * 10);
  }
  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: dRx, rotateY: dRy, transformStyle: "preserve-3d" }}
      className={"[perspective:1000px] " + className}
    >
      {children}
    </motion.div>
  );
}

/** Sakura en fond */
function SakuraBackground() {
  const petals = Array.from({ length: 24 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((_, i) => (
        <span
          key={i}
          className="absolute top-[-10%] text-3xl opacity-40 animate-[fall_10s_linear_infinite]"
          style={{ left: `${(i * 37) % 100}%`, animationDelay: `${i * 300}ms` }}
        >
          🌸
        </span>
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10%) rotate(0deg); }
          50% { transform: translateY(50vh) rotate(120deg); }
          100% { transform: translateY(120vh) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

/** Wrapper de section */
function Section({ id, title, kicker, children, className = "" }: any) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "-20% 0px -40% 0px", once: false });
  return (
    <section id={id} ref={ref} className={`relative py-24 sm:py-28 ${className}`}>
      <div className="container mx-auto max-w-6xl px-6">
        {kicker && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-2 text-sm tracking-widest text-pink-500"
          >
            {kicker}
          </motion.p>
        )}
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-10 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl"
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
}

/** Palette de commande ⌘K / Ctrl+K */
function QuickActions({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const links = [
    { id: "hero", label: "Aller au début (Hero)" },
    { id: "parcours", label: "Parcours & moments forts" },
    { id: "timeline", label: "Chronologie (scroll story)" },
    { id: "galerie", label: "Galerie vivante" },
    { id: "journal", label: "Carnet de bord" },
    { id: "map", label: "Carte interactive" },
    { id: "cards", label: "Villes / Monuments / Activités" },
    { id: "contact", label: "Contact & réseaux" },
  ];

  function go(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  }

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen as any}>
        {/* input blanc + placeholder blanc atténué */}
        <CommandInput
          className="text-white placeholder:text-white/60"
          placeholder="Naviguer… (ex: galerie)"
        />

        {/* tout le contenu en blanc */}
        <CommandList className="text-white">
          <CommandEmpty className="text-white/80">Aucun résultat.</CommandEmpty>

          {/* heading passé en ReactNode pour le styler en blanc */}
          <CommandGroup heading={<span className="text-white/90">Sections</span>}>
            {links.map((l) => (
              <CommandItem
                key={l.id}
                value={l.label}
                onSelect={() => go(l.id)}
                // états visuels lisibles
                className="text-white data-[selected=true]:bg-white/10 data-[selected=true]:text-white aria-selected:bg-white/10"
              >
                {l.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>

      {/* Overrides ciblés pour la palette (cmdk) */}
      <style jsx global>{`
        /* Forcer le texte en blanc à l'intérieur du dialog de commande */
        .cmdk-root,
        .cmdk-input,
        .cmdk-item,
        .cmdk-group-heading {
          color: #fff !important;
        }
        .cmdk-input::placeholder {
          color: rgba(255, 255, 255, 0.6) !important;
        }
        /* Surbrillance + focus visibles sur fond sombre */
        .cmdk-item[aria-selected="true"] {
          background: rgba(255, 255, 255, 0.10) !important;
        }
        .cmdk-item:focus-visible {
          outline: 2px solid rgba(255, 255, 255, 0.35);
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
}

/* ====================================================================================
   Mini-cards scrollers + modal (fly card)
==================================================================================== */
function ScrollRow({
  title,
  items,
  onOpen,
}: {
  title: string;
  items: MiniCard[];
  onOpen: (card: MiniCard) => void;
}) {
  return (
    <div className="mb-10">
      <h3 className="mb-4 inline-flex items-center gap-3 text-xl font-semibold">
        <span className="inline-block h-7 w-2 rounded-full bg-gradient-to-b from-pink-500 to-orange-400 shadow-[0_6px_18px_rgba(255,85,85,.35)]" />
        {title}
      </h3>
      <div className="grid auto-cols-[minmax(220px,280px)] grid-flow-col gap-4 overflow-x-auto px-1 pb-3 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] snap-x snap-mandatory">
        {/* hide scrollbar webkit */}
        <style>{`.grid::-webkit-scrollbar{display:none}`}</style>
        {items.map((it) => (
          <article
            key={it.slug}
            role="button"
            tabIndex={0}
            onClick={() => onOpen(it)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? onOpen(it) : null)}
            className="snap-start overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/60 to-white/40 shadow-xl ring-1 ring-black/5 backdrop-blur transition hover:-translate-y-1 hover:border-pink-500/40 dark:from-neutral-900/60 dark:to-neutral-900/40"
          >
            <div className="aspect-[16/10] w-full bg-neutral-900">
              {it.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={it.img} alt={it.title} className="h-full w-full object-cover" onError={(e) => ((e.currentTarget.src = makePlaceholder()), (e.currentTarget.onerror = null))} />
              ) : (
                <div className="grid h-full place-items-center text-neutral-400">—</div>
              )}
            </div>
            <div className="p-4">
              {it.day && <div className="inline-flex rounded-full border border-white/20 bg-black/20 px-2 py-0.5 text-xs backdrop-blur">{it.day}</div>}
              <h4 className="mt-2 text-base font-semibold">{it.title}</h4>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{it.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function makePlaceholder() {
  const ph = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 100'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#1b1b1b'/><stop offset='1' stop-color='#111111'/></linearGradient></defs><rect width='160' height='100' fill='url(#g)'/><g fill='#ff5555' opacity='0.85'><circle cx='24' cy='24' r='6'/><circle cx='48' cy='24' r='6'/><circle cx='72' cy='24' r='6'/></g><text x='50%' y='56%' dominant-baseline='middle' text-anchor='middle' font-family='-apple-system,Segoe UI,Roboto,Arial' font-size='10' fill='#b7b7b7'>aperçu indisponible</text></svg>`
  );
  return `data:image/svg+xml;charset=utf-8,${ph}`;
}

/** Modal avec trap focus + retour du focus */
function FlyCardModal({ card, onClose }: { card: MiniCard | null; onClose: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!card) return;
    // mémorise l'élément actif
    lastActiveRef.current = document.activeElement as HTMLElement | null;

    const root = contentRef.current;
    const selector =
      'a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])';
    const focusables = root?.querySelectorAll<HTMLElement>(selector);
    const first = focusables?.[0];
    const last = focusables?.[focusables.length - 1];

    // focus initial
    first?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !focusables?.length) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      // restitue le focus
      lastActiveRef.current?.focus?.();
    };
  }, [card, onClose]);

  return (
    <AnimatePresence>
      {card && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            ref={contentRef}
            layout
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 20, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 10, scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative w-[min(92vw,900px)] max-h-[85vh] overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 shadow-[0_24px_60px_rgba(0,0,0,.55)]"
          >
            {/* header image */}
            <div className="aspect-[16/9] w-full bg-neutral-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={card.img ?? makePlaceholder()} alt={card.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              {card.day && <div className="text-xs text-neutral-400">{card.day}</div>}
              <h3 className="mt-1 text-2xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-neutral-300 whitespace-pre-wrap">{card.text}</p>
              <div className="mt-6">
                <button
                  onClick={onClose}
                  className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
                >
                  Fermer
                </button>
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute right-4 top-4 inline-grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur"
              aria-label="Fermer"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ====================================================================================
   Carte Leaflet avec filtres (Villes / Monuments / Activités)
==================================================================================== */
const CATS = {
  city: { label: "Villes", emoji: "🏙️" },
  monument: { label: "Monuments", emoji: "🏛️" },
  activity: { label: "Activités", emoji: "🎌" },
} as const;
type VisibleCat = keyof typeof CATS;

/** Hook carte avec callback d’ouverture de carte (slug) */
function useLeafletMap(
  ref: React.RefObject<HTMLDivElement>,
  items: MarkerItem[],
  activeCat: VisibleCat,
  onOpenCard: (slug: string) => void
) {
  const mapRef = useRef<L.Map | null>(null);
  const layersRef = useRef<Record<VisibleCat, L.LayerGroup>>({
    city: L.layerGroup(),
    monument: L.layerGroup(),
    activity: L.layerGroup(),
  });

  // init once
  useEffect(() => {
    const el = ref.current;
    if (!el || mapRef.current) return;

    // Map
    const map = L.map(el, { zoomControl: true }).setView([36.2048, 138.2529], 5);
    mapRef.current = map;

    // Tiles (OSM) + fallback dark Carto en cas d'erreur de tuile
    const osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 20,
      attribution: "© OpenStreetMap contributors",
      crossOrigin: true,
    }).addTo(map);

    const FALLBACK_TMPL = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
    osm.on("tileerror", (e: any) => {
      const dpr = window.devicePixelRatio > 1 ? "@2x" : "";
      const url = FALLBACK_TMPL.replace("{s}", "a")
        .replace("{z}", e.coords.z)
        .replace("{x}", e.coords.x)
        .replace("{y}", e.coords.y)
        .replace("{r}", dpr);
      e.tile.src = url;
    });

    // Pane pour émojis
    const emojiPane = map.createPane("emojiPane");
    emojiPane.style.zIndex = "650";

    // Markers -> layers
    const groups = layersRef.current;
    const bounds = L.latLngBounds([]);
    items.forEach((it) => {
      const raw = it.category || "city";
      const cat: VisibleCat =
        raw === "temple"
          ? "monument"
          : (["city", "monument", "activity"].includes(raw) ? (raw as VisibleCat) : "city");

      const marker = L.marker([it.lat, it.lng], {
        icon: L.divIcon({
          className: "emoji-icon",
          html: `<div class="grid place-items-center w-[38px] h-[38px] rounded-full text-[18px] select-none" style="background: radial-gradient(circle at 30% 30%,#2a2a2a,#141414); border:2px solid rgba(255,255,255,.2); box-shadow:0 6px 16px rgba(0,0,0,.5),0 0 0 2px rgba(255,85,85,.15); color:#fff;">${it.emoji || "📍"}</div>`,
          iconSize: [38, 44],
          iconAnchor: [19, 40],
          popupAnchor: [0, -32],
        }),
        pane: "emojiPane",
      });

      // contenu popup: bouton "Voir la carte →" qui ouvre la modal liée au slug
      const popupEl = document.createElement("div");
      popupEl.innerHTML = `
        <div style="font-weight:600;margin-bottom:4px">${(it.emoji || "📍") + " "}${escapeHtml(it.title ?? "—")}</div>
        <div style="color:#bbb">${escapeHtml(it.desc ?? "—")}</div>
        ${
          it.slug
            ? `<button data-slug="${it.slug}" style="margin-top:8px;padding:6px 10px;border-radius:8px;border:1px solid rgba(255,255,255,.14);background:#222;color:#fff;cursor:pointer">Voir la carte →</button>`
            : ""
        }
      `;
      marker.bindPopup(popupEl);
      popupEl.querySelector<HTMLButtonElement>("button")?.addEventListener("click", () => {
        if (it.slug) onOpenCard(it.slug);
      });

      groups[cat].addLayer(marker);
      bounds.extend([it.lat, it.lng]);
    });

    // Ajoute le layer actif et fit initial
    groups[activeCat].addTo(map);
    if (bounds.isValid()) map.fitBounds(bounds.pad(0.2));

    return () => {
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, items]); // init uniquement

  // toggle layers + fitBounds à chaque changement de catégorie
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const groups = layersRef.current;

    // remove all
    (Object.keys(groups) as VisibleCat[]).forEach((k) => {
      if (map.hasLayer(groups[k])) map.removeLayer(groups[k]);
    });

    // add active
    groups[activeCat].addTo(map);

    // fit bounds sur les markers de la catégorie
    const b = L.latLngBounds([]);
    groups[activeCat].eachLayer((l: any) => {
      if (l.getLatLng) b.extend(l.getLatLng());
    });
    if (b.isValid()) map.fitBounds(b.pad(0.2));
  }, [activeCat]);
}

function escapeHtml(str = "") {
  return String(str).replace(/[&<>"]/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[s] as string));
}

/* ====================================================================================
   Composant principal
==================================================================================== */
export default function JapanShowcase2025() {
  const [dark, setDark] = useState(true);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [images, setImages] = useState<string[]>(() => []);

  const [activeCard, setActiveCard] = useState<MiniCard | null>(null);

  // Carte Leaflet
  const [activeCat, setActiveCat] = useState<VisibleCat>("city");
  const mapDivRef = useRef<HTMLDivElement>(null);

  useLeafletMap(mapDivRef, MARKERS, activeCat, (slug) => {
    const card = CARDS.find((c) => c.slug === slug) || null;
    if (card) setActiveCard(card);
  });

  // ⌘K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((v) => !v);
      }
      if (e.key === "Escape") setActiveCard(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Hero parallax
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 0.5], [0, -120]);
  const blurAmount = useTransform(scrollYProgress, [0, 0.3], [0, 6]);
  const blurFilter = useTransform(blurAmount, (b) => `blur(${b}px)`);

  // Galerie drag/drop
  function onDropFiles(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files || []).filter((f) => f.type.startsWith("image/"));
    const urls = files.map((f) => URL.createObjectURL(f));
    setImages((prev) => [...urls, ...prev]);
  }
  function onPickFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []).filter((f) => f.type.startsWith("image/"));
    const urls = files.map((f) => URL.createObjectURL(f));
    setImages((prev) => [...urls, ...prev]);
  }

  // Thème
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Galerie base
  const baseGallery = useMemo(
    () => ["🗼 Tokyo", "⛩️ Kyoto", "🗻 Fuji", "🏯 Osaka", "🌸 Nara", "♨️ Hakone", "🎎 Nikko", "🌊 Kamakura"],
    []
  );

  // Programme du jour
  const today = useMemo(() => {
    try {
      const iso = new Date().toLocaleDateString("en-CA", { timeZone: "Europe/Paris" });
      const entry = DAYLOG.find((d) => d.date === iso);
      const previous = DAYLOG.filter((d) => d.date < iso).sort((a, b) => (a.date > b.date ? -1 : 1));
      return { iso, entry, previous };
    } catch {
      return { iso: "", entry: undefined, previous: [] as DayLog[] };
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-white to-neutral-100 text-neutral-900 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 dark:text-neutral-100">
      <ScrollProgressBar />
      <CursorGlow />
      <SakuraBackground />
      <QuickActions open={cmdOpen} setOpen={setCmdOpen} />

      <header className="sticky top-0 z-[70] border-b border-white/20 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:border-white/5 dark:supports-[backdrop-filter]:bg-neutral-900/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇯🇵</span>
            <span className="font-semibold tracking-tight">Voyage au Japon — 2025</span>
            <Badge className="ml-3" variant="secondary">
              Mickaël
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" title="Palette de commande (⌘K)" onClick={() => setCmdOpen(true)}>
              <Sparkles className="h-5 w-5" />
            </Button>
            <Button variant="ghost" onClick={() => setDark((v) => !v)} title="Basculer le thème">
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <MagneticButton
              as={Button}
              className="hidden sm:inline-flex bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500"
            >
              Mon voyage en Corée du Sud
            </MagneticButton>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(236,72,153,0.25),transparent_60%),radial-gradient(40%_60%_at_100%_0%,rgba(99,102,241,0.18),transparent_60%)]" />
        <div className="container relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-28 sm:py-36 md:grid-cols-2">
          <motion.div style={{ y: yHero, filter: blurFilter }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/60 px-3 py-1 text-xs backdrop-blur dark:bg-neutral-900/60">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Page vitrine de mon voyage réalisé avec Next.js et Tailwindcss</span>
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-br from-pink-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                Japon
              </span>{" "}
              2025/2026
            </h1>
            <p className="mt-4 max-w-xl text-base/7 text-neutral-600 dark:text-neutral-300">
              Une vitrine animée de mon périple : Mon PolarStep version plus personnelle
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <MagneticButton as={Button} className="bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100">
                <Plane className="mr-2 h-4 w-4" /> Itinéraire
              </MagneticButton>
              <Button variant="outline" className="backdrop-blur">
                <Camera className="mr-2 h-4 w-4" /> Voir la galerie
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
              <Stars className="h-4 w-4" />
              <span>Mon voyage pendant 6 mois, un mélange de Lock In et de flanerie</span>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl ring-1 ring-black/5 backdrop-blur dark:bg-white/5"
            >
              <div className="absolute inset-0">
                <motion.div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-pink-500/30 blur-3xl" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 8 }} />
                <motion.div className="absolute -bottom-8 -right-8 h-56 w-56 rounded-full bg-indigo-500/30 blur-3xl" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 7 }} />
              </div>
              <div className="relative flex h-full flex-col items-center justify-center gap-5">
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="rounded-2xl bg-white/60 px-4 py-2 text-sm backdrop-blur dark:bg-neutral-900/60">
                  <span className="mr-2">🗻</span> Fuji au lever du soleil
                </motion.div>
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35 }} className="rounded-2xl bg-white/60 px-4 py-2 text-sm backdrop-blur dark:bg-neutral-900/60">
                  <span className="mr-2">⛩️</span> Torii de Fushimi Inari
                </motion.div>
                <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="rounded-2xl bg-white/60 px-4 py-2 text-sm backdrop-blur dark:bg-neutral-900/60">
                  <span className="mr-2">🌸</span> Hanami au parc d'Ueno
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parcours 
      <Section id="parcours" kicker="Itinéraire" title="Moments forts & sensations">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            { icon: <Landmark className="h-5 w-5" />, title: "Kyoto — sanctuaires", text: "Des milliers de torii, la quiétude du matin." },
            { icon: <Mountain className="h-5 w-5" />, title: "Fuji — ascension", text: "Nuages, vent, et l'horizon en récompense." },
            { icon: <Train className="h-5 w-5" />, title: "Shinkansen", text: "Vitesse, ponctualité, lignes qui filent." },
            { icon: <Camera className="h-5 w-5" />, title: "Tokyo — nuits", text: "Néons, izakayas, ruelles électriques." },
            { icon: <MapPin className="h-5 w-5" />, title: "Nara — nature", text: "Cerfs en liberté, temples millénaires." },
            { icon: <Calendar className="h-5 w-5" />, title: "Hakone — onsen", text: "L'eau chaude, la vapeur et le calme." },
          ].map((c, i) => (
            <TiltCard key={i}>
              <Card className="group h-full border-white/20 bg-white/60 backdrop-blur transition hover:border-pink-500/40 hover:shadow-xl dark:bg-neutral-900/60">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-gradient-to-br from-pink-500/20 to-indigo-500/20">
                      {c.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{c.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{c.text}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary">Photo</Badge>
                    <Badge variant="secondary">Story</Badge>
                    <Badge variant="secondary">Map</Badge>
                  </div>
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>
      </Section> */}

      {/* Chronologie */}
      <Section id="timeline" kicker="Récit" title="Chronologie immersive">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="sticky top-24 rounded-2xl border border-white/20 bg-white/50 p-6 backdrop-blur dark:bg-neutral-900/50">
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Une narration scrollée : au fil de la page, les étapes s’animent et dévoilent photos, notes et sensations. Idéal pour raconter un voyage en 2025.
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                <li>• Cherbourg-En-Cotentin — Le départ</li>
                <li>• Aéroport de Paris-Charles de Gaulle — 1er avion</li>
                <li>• Aéroport international de Pékin-Daxing — 2ème avion</li>
                <li>• Aéroport international de Tokyo-Haneda — Bus jusqu'a l'hostel</li>
                <li>• Hostel : — Arrivée</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-3 space-y-10">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl border border-white/20 bg-white/60 p-6 backdrop-blur dark:bg-neutral-900/60"
              >
                <div className="mb-3 flex items-center gap-3 text-sm text-neutral-500">
                  <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500" />
                  Étape {i + 1}
                </div>
                <h3 className="text-xl font-semibold">
                  {["Départ de Cherbourg-En-Cotentin", "Aéroport de Paris-Charles de Gaulle", "Aéroport international de Pékin-Daxing", "Aéroport international de Tokyo-Haneda", "Arrivée à l'hostel"][i]}
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                  {[
                    "Train direction Paris : 3h30",
                    "Avion direction Pékin",
                    "Avion direction Tokyo",
                    "Arrivée à l'Aéroport international de Tokyo-Haneda, direction l'hostel",
                    "Avec un total de xxhxx de trajet porte à porte",
                  ][i]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Galerie */}
      <Section id="galerie" kicker="Images" title="Galerie vivante (drag & drop tes photos)">
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDropFiles}
          className="rounded-2xl border border-dashed border-white/30 bg-white/40 p-4 text-center backdrop-blur dark:bg-neutral-900/40"
        >
          <input id="filepick" type="file" accept="image/*" multiple className="hidden" onChange={onPickFiles} />
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Glisse-dépose des images ici ou{" "}
            <button onClick={() => document.getElementById("filepick")?.click()} className="underline">
              sélectionne des fichiers
            </button>.
          </p>
        </div>

        <div className="mt-6 [column-fill:balance] columns-1 gap-4 sm:columns-2 lg:columns-3">
          {(images.length ? images : baseGallery).map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="mb-4 break-inside-avoid rounded-2xl border border-white/20 bg-white/60 p-3 backdrop-blur dark:bg-neutral-900/60"
            >
              {typeof src === "string" && src.startsWith("blob:") ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src} alt="Photo du voyage" className="h-auto w-full rounded-xl object-cover" />
              ) : (
                <div className="grid h-48 place-items-center rounded-xl bg-gradient-to-br from-pink-500/10 to-indigo-500/10 text-5xl">
                  {src as string}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Carnet de bord */}
      <Section id="journal" kicker="Notes" title="Carnet de bord">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((n) => (
            <TiltCard key={n}>
              <Card className="border-white/20 bg-white/60 backdrop-blur transition hover:border-indigo-500/40 dark:bg-neutral-900/60">
                <CardContent className="p-6">
                  <div className="text-sm text-neutral-500">Jour {n}</div>
                  <h3 className="mt-1 text-xl font-semibold">Titre de la note {n}</h3>
                  <p className="mt-2 line-clamp-3 text-neutral-600 dark:text-neutral-300">
                    Un paragraphe court sur l’instant vécu : odeurs, sons, textures, un détail qui change tout et qui reste en tête bien après…
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-sm">
                    <Badge variant="secondary">Tokyo</Badge>
                    <Badge variant="secondary">Emotion</Badge>
                  </div>
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* Carte Leaflet avec filtres */}
      <Section id="map" kicker="Explorer" title="Carte interactive">
        <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/50 p-6 backdrop-blur dark:bg-neutral-900/50">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_50%,rgba(236,72,153,0.08),transparent)]" />
          <div className="relative">
            <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
              {(Object.keys(CATS) as VisibleCat[]).map((k) => (
                <button
                  key={k}
                  onClick={() => setActiveCat(k)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm transition ${
                    activeCat === k
                      ? "border-pink-500/50 bg-pink-500/10"
                      : "border-white/20 bg-white/10 hover:bg-white/20"
                  }`}
                >
                  <span>{CATS[k].emoji}</span>
                  {CATS[k].label}
                </button>
              ))}
            </div>
            <div ref={mapDivRef} className="h-[420px] w-full rounded-2xl border border-dashed border-white/20" />
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/20 py-10 text-center text-sm text-neutral-500">
        <div className="container mx-auto max-w-6xl px-6">
          <p>© {new Date().getFullYear()} — Voyage au Japon</p>
          <p className="mt-2">
            Appuie sur <kbd className="rounded bg-white/10 px-1">⌘K</kbd> pour naviguer.
          </p>
        </div>
      </footer>

      {/* Modal fly card */}
      <FlyCardModal card={activeCard} onClose={() => setActiveCard(null)} />
    </div>
  );
}