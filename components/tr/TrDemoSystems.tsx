'use client'

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

/* ─── Inline mockup components ─── */

function InboxMockup() {
  const rows = [
    { channel: "Web", name: "Ahmet Y.", topic: "Fiyat teklifi", status: "Yeni", cls: "text-sky-300 bg-sky-300/10 border-sky-300/20" },
    { channel: "WA", name: "Fatma K.", topic: "Bilgi talebi", status: "İnceleniyor", cls: "text-violet-300 bg-violet-300/10 border-violet-300/20" },
    { channel: "E-p", name: "Murat D.", topic: "Görüşme talebi", status: "Teklif", cls: "text-amber-300 bg-amber-300/10 border-amber-300/20" },
    { channel: "IG", name: "Selin A.", topic: "Demo isteği", status: "Yeni", cls: "text-sky-300 bg-sky-300/10 border-sky-300/20" },
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-white/8 bg-white/[0.03]">
      <div className="border-b border-white/6 px-3 py-2">
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">Gelen Talepler</p>
      </div>
      <div className="divide-y divide-white/5">
        {rows.map((r) => (
          <div key={r.name} className="flex items-center gap-2.5 px-3 py-2">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/[0.05] text-[0.5rem] font-bold text-slate-400">{r.channel}</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[0.65rem] font-medium text-slate-200">{r.name} — {r.topic}</p>
            </div>
            <span className={`shrink-0 rounded-full border px-1.5 py-0.5 text-[0.52rem] font-semibold ${r.cls}`}>{r.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CrmMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/8 bg-white/[0.03]">
      <div className="flex items-center gap-2.5 border-b border-white/6 px-3 py-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[0.6rem] font-bold text-[var(--color-accent)]">AY</div>
        <div>
          <p className="text-[0.65rem] font-semibold text-white">Ahmet Yılmaz</p>
          <p className="text-[0.55rem] text-slate-500">Yılmaz Tekstil · Aktif müşteri</p>
        </div>
        <span className="ml-auto rounded-full border border-emerald-300/20 bg-emerald-300/10 px-1.5 py-0.5 text-[0.52rem] font-semibold text-emerald-300">Aktif</span>
      </div>
      <div className="space-y-1.5 p-3">
        <div className="rounded-lg bg-white/[0.04] px-2.5 py-2">
          <p className="text-[0.55rem] font-semibold uppercase tracking-wider text-slate-500">Son görüşme</p>
          <p className="mt-0.5 text-[0.62rem] text-slate-300">3 gün önce · Yeni teklif bekleniyor</p>
        </div>
        <div className="flex gap-1.5">
          <div className="flex flex-1 items-center gap-1.5 rounded-lg bg-amber-300/[0.07] px-2 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            <p className="text-[0.58rem] text-amber-200">Teklif hazırla</p>
          </div>
          <div className="flex flex-1 items-center gap-1.5 rounded-lg bg-emerald-300/[0.06] px-2 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            <p className="text-[0.58rem] text-emerald-200">Takip tamam</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PipelineMockup() {
  const cols = [
    { label: "Yeni", color: "text-sky-300", cards: ["Müşteri A", "Müşteri B"] },
    { label: "Teklif", color: "text-amber-300", cards: ["Müşteri C"] },
    { label: "Kazanıldı", color: "text-emerald-300", cards: ["Müşteri D"] },
  ];
  return (
    <div className="grid grid-cols-3 gap-2">
      {cols.map((col) => (
        <div key={col.label} className="rounded-xl border border-white/8 bg-white/[0.025] p-2">
          <p className={`mb-1.5 text-[0.58rem] font-semibold uppercase tracking-wider ${col.color}`}>{col.label}</p>
          <div className="space-y-1.5">
            {col.cards.map((c) => (
              <div key={c} className="rounded-lg border border-white/6 bg-white/[0.04] px-2 py-1.5">
                <p className="text-[0.6rem] text-slate-300">{c}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function DashboardMockup() {
  const metrics = [
    { label: "Bekleyen", value: "12", color: "text-amber-300" },
    { label: "Acil", value: "3", color: "text-rose-300" },
    { label: "Aktif", value: "28", color: "text-sky-300" },
    { label: "Tamam", value: "41", color: "text-emerald-300" },
  ];
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-4 gap-1.5">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-xl border border-white/6 bg-white/[0.03] p-2 text-center">
            <p className={`text-lg font-bold ${m.color}`}>{m.value}</p>
            <p className="text-[0.52rem] text-slate-500">{m.label}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-white/6 bg-white/[0.02] p-2.5 space-y-1.5">
        {["Görev #024 tamamlandı", "Yeni sipariş oluşturuldu", "Rapor güncellendi"].map((a) => (
          <div key={a} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[var(--color-accent)] opacity-70" />
            <p className="text-[0.58rem] text-slate-400">{a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PortalMockup() {
  const steps = [
    { label: "Analiz tamamlandı", done: true },
    { label: "Tasarım onaylandı", done: true },
    { label: "Geliştirme devam ediyor", done: false, active: true },
    { label: "Test ve teslim", done: false },
  ];
  return (
    <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3 space-y-3">
      <div>
        <p className="text-[0.6rem] font-semibold uppercase tracking-wider text-[var(--color-accent)]">Proje Durumu</p>
        <p className="mt-0.5 text-[0.65rem] font-medium text-slate-200">Müşteri Sistemi Kurulumu</p>
        <div className="mt-2 h-1.5 w-full rounded-full bg-white/[0.06]">
          <div className="h-1.5 w-[72%] rounded-full bg-[var(--color-accent)]" />
        </div>
        <p className="mt-1 text-[0.52rem] text-slate-500">%72 tamamlandı</p>
      </div>
      <div className="space-y-1.5">
        {steps.map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <span className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border text-[0.45rem] ${s.done ? "border-emerald-300/30 bg-emerald-300/15 text-emerald-300" : s.active ? "border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 text-[var(--color-accent)]" : "border-white/10 bg-white/5 text-slate-600"}`}>
              {s.done ? "✓" : s.active ? "●" : "○"}
            </span>
            <p className={`text-[0.58rem] ${s.done ? "text-emerald-200" : s.active ? "text-white" : "text-slate-500"}`}>{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Demo data ─── */

type Demo = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  sonuc: string;
  mockup: React.ReactNode;
  who: string[];
  outcomes: string[];
};

const demos: Demo[] = [
  {
    id: "talep",
    title: "Müşteri Talep Merkezi",
    description:
      "WhatsApp, telefon, e-posta, web formu ve diğer kanallardan gelen talepleri tek yerde toplamak için tasarlanmış örnek yapı.",
    bullets: [
      "Gelen talepler tek ekranda görünür",
      "Kim ilgileniyor netleşir",
      "Sonraki adım takip edilir",
    ],
    sonuc: "Dağınık talepler düzenli bir akışa dönüşür.",
    mockup: <InboxMockup />,
    who: ["KOBİ'ler", "Klinikler", "Hizmet işletmeleri", "Satış ekipleri olan firmalar"],
    outcomes: [
      "Dağınık taleplerin tek yerde toplanması",
      "Görev ve takip netliği",
      "Daha düzenli müşteri akışı",
    ],
  },
  {
    id: "crm",
    title: "Mini CRM",
    description:
      "Müşteri bilgileri, görüşmeler, notlar, durumlar ve takip görevlerini düzenli tutmak için hazırlanmış örnek müşteri yönetim yapısı.",
    bullets: [
      "Müşteri geçmişi görünür olur",
      "Takip görevleri kaybolmaz",
      "Ekip ortak bilgiyle çalışır",
    ],
    sonuc: "Müşteri ilişkileri hafızaya değil sisteme dayanır.",
    mockup: <CrmMockup />,
    who: ["Satış ekipleri", "Profesyonel hizmet firmaları", "Büyüyen yerel işletmeler"],
    outcomes: [
      "Müşteri geçmişine anlık erişim",
      "Görev ve takip düzeni",
      "Ekip içi bilgi paylaşımı",
    ],
  },
  {
    id: "pipeline",
    title: "Satış Pipeline Sistemi",
    description:
      "Yeni talep, görüşme, teklif, takip ve kapanış aşamalarını görünür hale getiren örnek satış akışı.",
    bullets: [
      "Hangi fırsat nerede netleşir",
      "Teklif süreci görünür olur",
      "Kapanışa yakın fırsatlar ayırt edilir",
    ],
    sonuc: "Satış süreci ölçülebilir ve yönetilebilir hale gelir.",
    mockup: <PipelineMockup />,
    who: ["Satış odaklı KOBİ'ler", "İhracatçı firmalar", "Hizmet sağlayıcıları"],
    outcomes: [
      "Hangi müşterinin nerede olduğunun netleşmesi",
      "Tahmin edilebilir satış süreci",
      "Teklif gecikme oranında düşüş",
    ],
  },
  {
    id: "dashboard",
    title: "Operasyon Dashboard'u",
    description:
      "Yönetimin günlük operasyonu, bekleyen işleri ve temel göstergeleri tek panelden görebilmesi için hazırlanmış örnek dashboard.",
    bullets: [
      "Bekleyen işler görünür olur",
      "Süreç takibi hızlanır",
      "Yönetim daha net karar alır",
    ],
    sonuc: "Operasyon sonradan değil, anlık olarak görülebilir.",
    mockup: <DashboardMockup />,
    who: ["Yönetim kadrolu KOBİ'ler", "Üretici firmalar", "Çok ekipli işletmeler"],
    outcomes: [
      "Anlık operasyon görünürlüğü",
      "Daha hızlı müdahale kapasitesi",
      "Ekip ve süreç yönetimi kolaylığı",
    ],
  },
  {
    id: "portal",
    title: "Müşteri Portalı",
    description:
      "Müşterilerin kendi süreç, belge veya proje durumlarını görebileceği örnek portal yapısı.",
    bullets: [
      "Müşteri süreci şeffaf izler",
      "Bilgilendirme yükü azalır",
      "Deneyim daha profesyonel hale gelir",
    ],
    sonuc: "Müşteri iletişimi daha düzenli ve güven verici olur.",
    mockup: <PortalMockup />,
    who: ["Danışmanlık firmaları", "Klinikler", "Proje bazlı çalışan işletmeler"],
    outcomes: [
      "Müşteri memnuniyetinde artış",
      "Ekip üzerindeki bilgilendirme yükünün azalması",
      "Daha şeffaf ve güven verici ilişki",
    ],
  },
];

/* ─── Modal ─── */

function DemoModal({ demo, onClose }: { demo: Demo; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[rgba(4,6,16,0.82)] backdrop-blur-sm" aria-hidden="true" />
      <div
        className="relative z-10 w-full max-w-xl overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(10,14,28,0.98)] shadow-[0_40px_120px_rgba(2,6,23,0.72)] backdrop-blur-md"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={demo.title}
      >
        {/* header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/6 px-6 py-5">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Örnek sistem
            </p>
            <h3 className="mt-1 text-lg font-bold text-white">{demo.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-colors hover:text-white"
            aria-label="Kapat"
          >
            ✕
          </button>
        </div>

        <div className="space-y-5 p-6">
          {/* mockup */}
          <div className="rounded-xl border border-white/6 bg-white/[0.02] p-3">
            {demo.mockup}
          </div>

          {/* description */}
          <p className="text-sm leading-7 text-slate-400">{demo.description}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Kimler için uygun?
              </p>
              <ul className="space-y-1.5">
                {demo.who.map((w) => (
                  <li key={w} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="h-1 w-1 rounded-full bg-[var(--color-accent)] opacity-70" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Ne sağlar?
              </p>
              <ul className="space-y-1.5">
                {demo.outcomes.map((o) => (
                  <li key={o} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="h-1 w-1 rounded-full bg-emerald-300 opacity-70" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-[rgba(125,211,252,0.14)] bg-[rgba(125,211,252,0.04)] px-4 py-3">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
              Sonuç
            </p>
            <p className="mt-1 text-sm font-medium text-white">{demo.sonuc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main component ─── */

export function TrDemoSystems() {
  const [activeDemo, setActiveDemo] = useState<Demo | null>(null);

  return (
    <>
      <SectionShell id="ornek-sistemler">
        <Reveal>
          <div className="mb-2 inline-flex rounded-full border border-white/8 bg-white/[0.03] px-4 py-2">
            <p className="text-xs font-semibold text-slate-400">
              Hazır paket değil, uyarlanabilir sistem örnekleri.
            </p>
          </div>
          <SectionHeading
            eyebrow="Örnek sistemler"
            title="Nasıl sistemler kurabildiğimizi görün."
            description="Aşağıdaki örnekler; işletmeler için kurulabilecek sistem türlerini göstermek için hazırlanmış demo yapılardır. Bunlar hazır şablon değil, gerçek iş akışlarına göre şekillenebilen sistem örnekleridir."
          />
          <p className="mt-4 text-xs text-slate-600">
            Gerçek ihtiyaçlara göre özelleştirilir. Her işletmenin sistemi kendi akışına göre şekillenir.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {demos.slice(0, 3).map((demo, i) => (
            <Reveal key={demo.id} delay={i * 60}>
              <DemoCard demo={demo} onOpen={() => setActiveDemo(demo)} />
            </Reveal>
          ))}
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {demos.slice(3).map((demo, i) => (
            <Reveal key={demo.id} delay={(i + 3) * 60}>
              <DemoCard demo={demo} onOpen={() => setActiveDemo(demo)} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={220}>
          <div className="mt-12 rounded-[24px] border border-[rgba(125,211,252,0.14)] bg-[rgba(125,211,252,0.04)] px-7 py-6">
            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="text-base font-semibold text-white sm:text-lg">
                  İşletmenize en uygun sistemin hangisi olduğunu birlikte belirleyelim.
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Her işletmenin problemi farklıdır. Kimi müşteri takibinde zorlanır, kimi teklif
                  sürecinde, kimi operasyon görünürlüğünde. Size uygun yapıyı birlikte netleştirebiliriz.
                </p>
              </div>
              <a
                href="#iletisim"
                className="inline-flex shrink-0 items-center justify-center rounded-full border border-[rgba(125,211,252,0.26)] bg-[rgba(125,211,252,0.08)] px-5 py-3 text-sm font-semibold text-[var(--color-accent)] transition-all hover:-translate-y-0.5 hover:bg-[rgba(125,211,252,0.14)]"
              >
                İşletmem için uygun sistemi konuşalım
              </a>
            </div>
          </div>
        </Reveal>
      </SectionShell>

      {activeDemo && (
        <DemoModal demo={activeDemo} onClose={() => setActiveDemo(null)} />
      )}
    </>
  );
}

function DemoCard({ demo, onOpen }: { demo: Demo; onOpen: () => void }) {
  return (
    <article className="surface flex h-full flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(2,6,23,0.44)]">
      {/* mockup preview */}
      <div className="mb-4 overflow-hidden rounded-xl border border-white/6 bg-white/[0.015] p-2.5">
        {demo.mockup}
      </div>

      <h3 className="text-sm font-semibold text-white">{demo.title}</h3>
      <p className="mt-1.5 text-xs leading-5 text-slate-500">{demo.description}</p>

      <ul className="mt-3 space-y-1.5">
        {demo.bullets.map((b) => (
          <li key={b} className="flex items-center gap-2 text-xs text-slate-400">
            <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)] opacity-70" />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-3.5 border-t border-white/6 pt-3.5">
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
          Sonuç
        </p>
        <p className="mt-1 text-xs leading-5 text-slate-300">{demo.sonuc}</p>
      </div>

      <button
        onClick={onOpen}
        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] transition-opacity hover:opacity-80"
      >
        Örneği İncele
        <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3" aria-hidden="true">
          <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </article>
  );
}
