%%RAW_DATA%%

%%RAW_DATA_HATOS%%

// RAW:        [year, dateStr, n1, n2, n3, n4, n5]
// RAW_HATOS:  [year, dateStr, n1, n2, n3, n4, n5, n6]
// JACKPOTS:       [year, dateStr, winnerCount, n1, n2, n3, n4, n5]
// JACKPOTS_HATOS: [year, dateStr, winnerCount, n1, n2, n3, n4, n5, n6]
const JACKPOTS = [];
const JACKPOTS_HATOS = [];

function getFrequencyMap(data, numCount, maxNum) {
  const freq = {};
  for (let i = 1; i <= maxNum; i++) freq[i] = 0;
  data.forEach(r => {
    for (let j = 2; j < 2 + numCount; j++) freq[r[j]]++;
  });
  return freq;
}

function monoColor(t, dark) {
  if (dark) {
    const l = Math.round(12 + t * 88);
    return `hsl(0,0%,${l}%)`;
  } else {
    const l = Math.round(92 - t * 80);
    return `hsl(0,0%,${l}%)`;
  }
}

function labelColor(t, dark) {
  if (dark) return t > 0.52 ? "rgba(0,0,0,0.9)" : "rgba(255,255,255,0.85)";
  return t > 0.52 ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.75)";
}

export default function App() {
  const [dark, setDark] = useState(true);
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);
  const [activeGame, setActiveGame] = useState("otos");
  const [drawCountOtos, setDrawCountOtos] = useState(RAW.length);
  const [drawCountHatos, setDrawCountHatos] = useState(RAW_HATOS.length);

  const isOtos    = activeGame === "otos";
  const gameRAW   = isOtos ? RAW : RAW_HATOS;
  const gameJPs   = isOtos ? JACKPOTS : JACKPOTS_HATOS;
  const gameMax   = isOtos ? 90 : 45;
  const gameNums  = isOtos ? 5 : 6;
  const gameTotal = gameRAW.length;
  const gameTitle = isOtos ? "Ötöslottó Hőtérkép" : "Hatoslottó Hőtérkép";
  const gameCols  = isOtos ? 10 : 9;
  const drawCount    = isOtos ? drawCountOtos : drawCountHatos;
  const setDrawCount = isOtos ? setDrawCountOtos : setDrawCountHatos;

  const switchGame = (id) => {
    setActiveGame(id);
    setHovered(null);
    setSelected(null);
  };

  const PRESETS = [
    { label: "10 húzás", count: 10 },
    { label: "26 húzás", count: 26 },
    { label: "52 húzás", count: 52 },
    { label: isOtos ? "5 év"  : "1 év",  count: isOtos ? 260  : 104  },
    { label: isOtos ? "10 év" : "2 év",  count: isOtos ? 520  : 208  },
    { label: "Összes",   count: gameTotal },
  ];

  const filtered = useMemo(() => gameRAW.slice(0, drawCount), [gameRAW, drawCount]);

  const freq = useMemo(() => getFrequencyMap(filtered, gameNums, gameMax), [filtered, gameNums, gameMax]);
  const vals = Object.values(freq);
  const min  = Math.min(...vals), max = Math.max(...vals);
  const norm = n => max === min ? 0.5 : (freq[n] - min) / (max - min);

  const hotNums = useMemo(() =>
    Object.entries(freq).sort((a, b) => +b[1] - +a[1]).slice(0, gameNums).map(([n]) => +n),
    [freq, gameNums]);
  const coldNums = useMemo(() =>
    Object.entries(freq).sort((a, b) => +a[1] - +b[1]).slice(0, gameNums).map(([n]) => +n),
    [freq, gameNums]);

  const active = selected ?? hovered;
  const activeDraws = useMemo(() =>
    active ? filtered.filter(r => r.slice(2, 2 + gameNums).includes(active)) : [],
    [active, filtered, gameNums]);

  const visibleJackpots = useMemo(() => {
    if (!filtered.length) return [];
    return gameJPs.filter(j =>
      filtered.some(r => r.slice(2, 2 + gameNums).every((n, i) => n === j[3 + i]))
    );
  }, [filtered, gameJPs, gameNums]);

  const jackpotTopNums = useMemo(() => {
    const jFreq = {};
    for (let i = 1; i <= gameMax; i++) jFreq[i] = 0;
    visibleJackpots.forEach(j => {
      j.slice(3, 3 + gameNums).forEach(n => jFreq[n]++);
    });
    return Object.entries(jFreq).sort((a, b) => +b[1] - +a[1]).slice(0, gameNums).map(([n, cnt]) => ({ n: +n, cnt }));
  }, [visibleJackpots, gameMax, gameNums]);

  const rangeLabel = useMemo(() => {
    if (!filtered.length) return "";
    const newest = filtered[0];
    const oldest = filtered[filtered.length - 1];
    const newestDate = newest[1] ? newest[1].replace(/\.$/, "") : String(newest[0]);
    const oldestDate = oldest[1] ? oldest[1].replace(/\.$/, "") : String(oldest[0]);
    if (filtered.length === gameTotal) return `Összes adat (${oldest[0]}–${newest[0]})`;
    return `${oldestDate} – ${newestDate}`;
  }, [filtered, gameTotal]);

  const bg        = dark ? "#0d0d0d" : "#f7f7f7";
  const bgCard    = dark ? "#161616" : "#ffffff";
  const border    = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.09)";
  const textMain  = dark ? "#e8e8e8" : "#111111";
  const textMuted = dark ? "#888888" : "#666666";
  const textStat  = dark ? "#bbbbbb" : "#333333";
  const textFaint = dark ? "#333333" : "#cccccc";
  const accent    = dark ? "#ffffff"  : "#000000";
  const sans      = "'Inter','Helvetica Neue',Arial,sans-serif";

  const fmtDate = r => r[1] ? r[1].replace(/\.$/, "") : String(r[0]) + ". (nincs pontos dátum)";

  return (
    <div style={{ minHeight:"100vh", background:bg, color:textMain, fontFamily:sans, transition:"background 0.35s,color 0.35s", WebkitFontSmoothing:"antialiased" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <style>{`
        html,body{margin:0;padding:0;}
        input[type=range]{-webkit-appearance:none;appearance:none;outline:none;background:transparent;width:100%;cursor:pointer;}
        input[type=range]::-webkit-slider-runnable-track{height:2px;border-radius:1px;background:${dark?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.12)"};}
        input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:${accent};margin-top:-6px;cursor:pointer;}
        input[type=range]::-moz-range-track{height:2px;border-radius:1px;background:${dark?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.12)"};}
        input[type=range]::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:${accent};border:none;cursor:pointer;}
      `}</style>

      <div style={{ maxWidth:"920px", margin:"0 auto", padding:"16px 16px 72px" }}>

        {/* Mode toggle */}
        <div style={{ display:"flex", justifyContent:"flex-end", marginBottom:"20px" }}>
          <button onClick={() => setDark(!dark)} aria-label="Toggle mode" style={{
            width:"44px", height:"24px", borderRadius:"12px",
            border:`1px solid ${border}`,
            background: dark ? "#222" : "#ddd",
            cursor:"pointer", padding:0, display:"flex", alignItems:"center", transition:"background 0.3s",
          }}>
            <div style={{
              width:"18px", height:"18px", borderRadius:"50%",
              background: dark ? "#fff" : "#333",
              transform: dark ? "translateX(3px)" : "translateX(22px)",
              transition:"transform 0.3s,background 0.3s",
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:"9px", lineHeight:1,
            }}>{dark ? "☽" : "○"}</div>
          </button>
        </div>

        {/* Tab switcher */}
        <div style={{ display:"flex", gap:"8px", justifyContent:"center", marginBottom:"28px" }}>
          {[
            { id:"otos",  label:"Ötöslottó (5/90)" },
            { id:"hatos", label:"Hatoslottó (6/45)" },
          ].map(tab => (
            <button key={tab.id} onClick={() => switchGame(tab.id)} style={{
              padding:"8px 20px", borderRadius:"22px",
              border:`1px solid ${activeGame === tab.id ? accent : border}`,
              background: activeGame === tab.id ? accent : "transparent",
              color: activeGame === tab.id ? (dark ? "#000" : "#fff") : textMuted,
              fontSize:"13px", fontWeight:500, cursor:"pointer", fontFamily:sans,
              transition:"all 0.2s",
            }}>{tab.label}</button>
          ))}
        </div>

        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:"44px" }}>
          <h1 style={{ fontSize:"clamp(28px,5vw,44px)", fontWeight:600, margin:"0 0 6px", lineHeight:1.1, letterSpacing:"-0.03em", color:textMain }}>
            {gameTitle}
          </h1>
          <div style={{ fontSize:"13px", color:textMuted, fontWeight:400 }}>
            {filtered.length} húzás · {rangeLabel}
          </div>
        </div>

        {/* Latest Draw */}
        {(() => {
          const latest = gameRAW[0];
          if (!latest) return null;
          const latestNums = latest.slice(2, 2 + gameNums);
          const lastJP = gameJPs[0];
          const isWin = lastJP && latestNums.every((n, i) => n === lastJP[3 + i]);
          const drawsSinceJP = lastJP
            ? gameRAW.findIndex(r => r.slice(2, 2 + gameNums).every((n, i) => n === lastJP[3 + i]))
            : -1;
          const latestSet = new Set(latestNums);

          const numRow = r => (
            <div style={{ display:"flex", gap:"3px", justifyContent:"center", flexWrap:"wrap", marginTop:"7px" }}>
              {r.slice(2, 2 + gameNums).map(n => {
                const hit = latestSet.has(n);
                return (
                  <span key={n} style={{
                    fontSize:"11px", fontWeight: hit ? 700 : 400,
                    color: hit ? (dark ? "#fff" : "#111") : textFaint,
                    background: hit ? (dark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)") : "transparent",
                    borderRadius:"4px", padding:"1px 5px",
                    fontVariantNumeric:"tabular-nums",
                  }}>{n}</span>
                );
              })}
            </div>
          );

          const past = gameRAW.slice(1);
          const exactMatch = past.find(r => r.slice(2, 2 + gameNums).every(n => latestSet.has(n)));
          let bestDraw = null, bestCount = 0;
          if (!exactMatch) {
            past.forEach(r => {
              const c = r.slice(2, 2 + gameNums).filter(n => latestSet.has(n)).length;
              if (c > bestCount) { bestCount = c; bestDraw = r; }
            });
          }

          return (
            <div style={{ background:bgCard, border:`1px solid ${border}`, borderRadius:"14px", padding:"20px 24px", marginBottom:"16px" }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"16px" }}>
                <div style={{ fontSize:"10px", fontWeight:500, letterSpacing:"0.12em", textTransform:"uppercase", color:textMuted }}>Legutóbbi húzás</div>
                <div style={{ fontSize:"11px", color:textMuted }}>{fmtDate(latest)}</div>
              </div>
              <div style={{ display:"flex", gap:"10px", justifyContent:"center", marginBottom:"18px", flexWrap:"wrap" }}>
                {latestNums.map(n => {
                  const t = norm(n);
                  return (
                    <div key={n} style={{ width:"48px", height:"48px", borderRadius:"50%", background:monoColor(t, dark), display:"flex", alignItems:"center", justifyContent:"center", fontSize:"15px", fontWeight:600, color:labelColor(t, dark), boxShadow:"0 2px 10px rgba(0,0,0,0.25)", fontVariantNumeric:"tabular-nums" }}>{n}</div>
                  );
                })}
              </div>
              <div style={{ textAlign:"center", marginBottom:"18px" }}>
                {isWin ? (
                  <div style={{ display:"inline-flex", alignItems:"center", gap:"6px", background:dark?"rgba(255,215,0,0.12)":"rgba(200,150,0,0.12)", border:`1px solid ${dark?"rgba(255,215,0,0.35)":"rgba(180,130,0,0.35)"}`, borderRadius:"20px", padding:"6px 14px", fontSize:"12px", fontWeight:500, color:dark?"#ffd700":"#8a6000" }}>
                    🏆 {lastJP[2]} főnyeremény-nyertes ezen a húzáson!
                  </div>
                ) : (
                  <div style={{ display:"inline-flex", alignItems:"center", gap:"6px", background:dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)", border:`1px solid ${border}`, borderRadius:"20px", padding:"6px 14px", fontSize:"12px", fontWeight:500, color:textMuted }}>
                    ✗ Nincs telitalálatos szelvény
                  </div>
                )}
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"10px" }}>
                {[
                  { label:"Húzás nyertes nélkül", value: isWin ? "Ez volt az!" : String(drawsSinceJP >= 0 ? drawsSinceJP : "–") },
                  { label:"Utolsó telitalálat",   value: lastJP ? (lastJP[1] ? lastJP[1].replace(/\.$/, "") : String(lastJP[0])) : "–" },
                ].map(({label, value}) => (
                  <div key={label} style={{ background:dark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.03)", borderRadius:"10px", padding:"12px 10px", textAlign:"center" }}>
                    <div style={{ fontSize:"9px", fontWeight:500, letterSpacing:"0.10em", textTransform:"uppercase", color:textMuted, marginBottom:"6px" }}>{label}</div>
                    <div style={{ fontSize:"16px", fontWeight:600, color:textStat, fontVariantNumeric:"tabular-nums" }}>{value}</div>
                  </div>
                ))}
                {exactMatch ? (
                  <div style={{ background:dark?"rgba(255,215,0,0.08)":"rgba(200,150,0,0.08)", border:`1px solid ${dark?"rgba(255,215,0,0.25)":"rgba(180,130,0,0.25)"}`, borderRadius:"10px", padding:"12px 10px", textAlign:"center" }}>
                    <div style={{ fontSize:"9px", fontWeight:500, letterSpacing:"0.10em", textTransform:"uppercase", color:textMuted, marginBottom:"4px" }}>Volt már ilyen!</div>
                    <div style={{ fontSize:"12px", fontWeight:600, color:dark?"#ffd700":"#8a6000", fontVariantNumeric:"tabular-nums" }}>{fmtDate(exactMatch)}</div>
                    {numRow(exactMatch)}
                  </div>
                ) : (
                  <div style={{ background:dark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.03)", borderRadius:"10px", padding:"12px 10px", textAlign:"center" }}>
                    <div style={{ fontSize:"9px", fontWeight:500, letterSpacing:"0.10em", textTransform:"uppercase", color:textMuted, marginBottom:"4px" }}>Legjobb egyezés</div>
                    <div style={{ fontSize:"15px", fontWeight:600, color:textStat, fontVariantNumeric:"tabular-nums" }}>{bestCount} / {gameNums}</div>
                    <div style={{ fontSize:"10px", color:textMuted, marginTop:"2px" }}>{bestDraw ? fmtDate(bestDraw) : "–"}</div>
                    {bestDraw && numRow(bestDraw)}
                  </div>
                )}
              </div>
            </div>
          );
        })()}

        {/* Draw count slider */}
        <div style={{ background:bgCard, border:`1px solid ${border}`, borderRadius:"14px", padding:"20px 24px", marginBottom:"16px" }}>
          <div style={{ fontSize:"10px", fontWeight:500, letterSpacing:"0.12em", textTransform:"uppercase", color:textMuted, marginBottom:"16px" }}>
            Időszak
          </div>
          <div style={{ display:"flex", gap:"6px", flexWrap:"wrap", marginBottom:"16px" }}>
            {PRESETS.map(p => {
              const cnt = Math.min(p.count, gameTotal);
              return (
                <button key={p.label} onClick={() => setDrawCount(cnt)} style={{
                  padding:"5px 12px", borderRadius:"20px", border:`1px solid ${border}`,
                  background: drawCount === cnt ? accent : "transparent",
                  color: drawCount === cnt ? (dark ? "#000" : "#fff") : textMuted,
                  fontSize:"11px", fontWeight:500, cursor:"pointer", fontFamily:sans,
                  transition:"all 0.15s",
                }}>
                  {p.label}
                </button>
              );
            })}
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:"14px" }}>
            <span style={{ fontSize:"11px", color:textMuted, fontWeight:400, whiteSpace:"nowrap" }}>5</span>
            <input type="range" min={5} max={gameTotal} value={drawCount}
              onChange={e => setDrawCount(+e.target.value)} />
            <span style={{ fontSize:"11px", color:textMuted, fontWeight:400, whiteSpace:"nowrap" }}>{gameTotal}</span>
            <span style={{ fontSize:"13px", fontWeight:600, color:textMain, fontVariantNumeric:"tabular-nums", whiteSpace:"nowrap", minWidth:"80px", textAlign:"right" }}>
              {drawCount === gameTotal ? "Összes" : `${drawCount} húzás`}
            </span>
          </div>
        </div>

        {/* Heatmap */}
        <div style={{ background:bgCard, border:`1px solid ${border}`, borderRadius:"14px", padding:"24px 20px 20px", marginBottom:"16px" }}>
          <div style={{ display:"grid", gridTemplateColumns:`repeat(${gameCols},1fr)`, gap:"5px" }}>
            {Array.from({ length: gameMax }, (_, i) => i + 1).map(num => {
              const t = norm(num);
              const isActive = active === num;
              const inDraw = selected && activeDraws.some(r => r.slice(2, 2 + gameNums).includes(num)) && num !== selected;
              return (
                <div key={num}
                  onMouseEnter={() => setHovered(num)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(selected === num ? null : num)}
                  style={{
                    aspectRatio:"1", borderRadius:"50%",
                    background: monoColor(t, dark),
                    display:"flex", alignItems:"center", justifyContent:"center",
                    fontSize:"clamp(8px,1.3vw,11.5px)", fontWeight: t > 0.6 ? 600 : 400,
                    fontVariantNumeric:"tabular-nums",
                    color: labelColor(t, dark),
                    cursor:"pointer",
                    transition:"transform 0.12s, box-shadow 0.12s",
                    transform: isActive ? "scale(1.22)" : "scale(1)",
                    boxShadow: isActive
                      ? `0 0 0 2px ${accent},0 4px 14px rgba(0,0,0,0.35)`
                      : inDraw
                      ? `0 0 0 1.5px ${dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)"}`
                      : "none",
                    letterSpacing:"-0.02em", position:"relative", zIndex: isActive ? 2 : 1,
                  }}>{num}</div>
              );
            })}
          </div>
          <div style={{ marginTop:"18px", display:"flex", alignItems:"center", gap:"12px" }}>
            <span style={{ fontSize:"9px", fontWeight:500, color:textMuted, letterSpacing:"0.14em", textTransform:"uppercase" }}>Ritka</span>
            <div style={{ flex:1, height:"3px", borderRadius:"2px", background: dark
              ? "linear-gradient(to right,hsl(0,0%,12%),hsl(0,0%,50%),hsl(0,0%,100%))"
              : "linear-gradient(to right,hsl(0,0%,92%),hsl(0,0%,50%),hsl(0,0%,12%))"
            }} />
            <span style={{ fontSize:"9px", fontWeight:500, color:textMuted, letterSpacing:"0.14em", textTransform:"uppercase" }}>Gyakori</span>
          </div>
        </div>

        {/* Detail */}
        <div style={{ background:bgCard, border:`1px solid ${border}`, borderRadius:"14px", padding:"20px 24px", minHeight:"78px", transition:"opacity 0.2s", opacity: active ? 1 : 0.3, marginBottom:"12px" }}>
          {active ? (() => {
            const t = norm(active);
            return (<>
              <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"14px" }}>
                <div style={{ width:"50px", height:"50px", borderRadius:"50%", flexShrink:0, background:monoColor(t, dark), display:"flex", alignItems:"center", justifyContent:"center", fontSize:"17px", fontWeight:600, fontVariantNumeric:"tabular-nums", color:labelColor(t, dark), boxShadow:"0 3px 12px rgba(0,0,0,0.25)" }}>{active}</div>
                <div>
                  <div style={{ fontSize:"26px", fontWeight:600, lineHeight:1, letterSpacing:"-0.03em", fontVariantNumeric:"tabular-nums" }}>
                    {freq[active]}<span style={{ fontSize:"13px", fontWeight:400, color:textMuted, marginLeft:"6px" }}>alkalommal</span>
                  </div>
                  <div style={{ fontSize:"12px", color:textMuted, marginTop:"4px" }}>
                    {filtered.length} húzásból · {((freq[active] / filtered.length) * 100).toFixed(1)}% találati arány
                  </div>
                </div>
              </div>
              <div style={{ display:"flex", gap:"6px", flexWrap:"wrap" }}>
                {activeDraws.slice(-10).map((r, i) => {
                  const [yr, ds, ...allNums] = r;
                  const dateLabel = ds ? ds.replace(/\.$/, "") : String(yr);
                  const nums = allNums.slice(0, gameNums);
                  return (
                    <div key={i} style={{ background: dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", border:`1px solid ${border}`, borderRadius:"6px", padding:"4px 9px", fontSize:"10px", color:textMuted, fontVariantNumeric:"tabular-nums" }}>
                      {dateLabel} · {nums.map(n => <span key={n} style={{ color: n === active ? textMain : textFaint, fontWeight: n === active ? 600 : 400 }}>{n} </span>)}
                    </div>
                  );
                })}
              </div>
            </>);
          })() : (
            <div style={{ color:textMuted, fontSize:"12px", textAlign:"center", paddingTop:"12px" }}>
              Vidd az egeret egy számra · Kattintás a rögzítéshez
            </div>
          )}
        </div>

        {/* Hot / Cold */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px", marginBottom:"12px" }}>
          {[{ label:"Legtöbbször kihúzott", nums:hotNums, sym:"↑" }, { label:"Legritkábban kihúzott", nums:coldNums, sym:"↓" }].map(({ label, nums, sym }) => (
            <div key={label} style={{ background:bgCard, border:`1px solid ${border}`, borderRadius:"14px", padding:"18px 20px" }}>
              <div style={{ fontSize:"10px", fontWeight:500, letterSpacing:"0.12em", color:textMuted, marginBottom:"14px", textTransform:"uppercase" }}>
                {sym} {label}
              </div>
              <div style={{ display:"flex", gap:"10px", flexWrap:"wrap" }}>
                {nums.map(n => {
                  const t = norm(n);
                  return (
                    <div key={n} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"5px" }}>
                      <div style={{ width:"34px", height:"34px", borderRadius:"50%", background:monoColor(t, dark), display:"flex", alignItems:"center", justifyContent:"center", fontSize:"11px", fontWeight:600, fontVariantNumeric:"tabular-nums", color:labelColor(t, dark), boxShadow:"0 1px 6px rgba(0,0,0,0.2)" }}>{n}</div>
                      <span style={{ fontSize:"11px", color:textStat, fontWeight:500, fontVariantNumeric:"tabular-nums" }}>{freq[n]}×</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Jackpots section */}
        <div style={{ background:bgCard, border:`1px solid ${border}`, borderRadius:"14px", padding:"20px 24px", marginBottom:"12px" }}>
          <div style={{ fontSize:"10px", fontWeight:500, letterSpacing:"0.12em", textTransform:"uppercase", color:textMuted, marginBottom: visibleJackpots.length > 0 ? "14px" : "16px" }}>
            🏆 {isOtos ? "Ötösök — mind az 5 számot eltalálták" : "Hatosok — mind a 6 számot eltalálták"}
            <span style={{ marginLeft:"10px", color:textStat, fontVariantNumeric:"tabular-nums" }}>
              ({visibleJackpots.length} alkalom a kiválasztott időszakban)
            </span>
          </div>

          {visibleJackpots.length > 0 && (
            <div style={{ display:"flex", alignItems:"center", gap:"12px", flexWrap:"wrap", marginBottom:"18px", paddingBottom:"16px", borderBottom:`1px solid ${border}` }}>
              <span style={{ fontSize:"11px", color:textMuted, fontWeight:500, letterSpacing:"0.08em", whiteSpace:"nowrap" }}>
                {isOtos ? "Leggyakoribb ötösökben:" : "Leggyakoribb hatosokban:"}
              </span>
              <div style={{ display:"flex", gap:"8px", flexWrap:"wrap" }}>
                {jackpotTopNums.map(({ n, cnt }) => {
                  const t = norm(n);
                  return (
                    <div key={n} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"4px" }}>
                      <div style={{ width:"32px", height:"32px", borderRadius:"50%", background:monoColor(t, dark), display:"flex", alignItems:"center", justifyContent:"center", fontSize:"11px", fontWeight:600, fontVariantNumeric:"tabular-nums", color:labelColor(t, dark), boxShadow:"0 1px 6px rgba(0,0,0,0.15)" }}>{n}</div>
                      <span style={{ fontSize:"10px", color:textStat, fontWeight:500, fontVariantNumeric:"tabular-nums" }}>{cnt}×</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {visibleJackpots.length === 0 ? (
            <div style={{ fontSize:"12px", color:textFaint, textAlign:"center", padding:"16px 0" }}>
              Ebben az időszakban nem volt telitalálat.
            </div>
          ) : (
            <div style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
              {visibleJackpots.map((j, i) => {
                const [yr, ds, winners] = j;
                const dateLabel = ds ? ds.replace(/\.$/, "") : String(yr);
                const nums = j.slice(3, 3 + gameNums);
                return (
                  <div key={i} style={{
                    display:"flex", alignItems:"center", gap:"14px",
                    padding:"10px 14px", borderRadius:"10px",
                    background: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.025)",
                    border:`1px solid ${border}`,
                    flexWrap:"wrap",
                  }}>
                    <span style={{ fontSize:"12px", color:textMuted, fontVariantNumeric:"tabular-nums", minWidth:"82px", flexShrink:0 }}>{dateLabel}</span>
                    <div style={{ display:"flex", gap:"5px" }}>
                      {nums.map(n => {
                        const t = norm(n);
                        return (
                          <div key={n} style={{
                            width:"28px", height:"28px", borderRadius:"50%",
                            background: monoColor(t, dark),
                            display:"flex", alignItems:"center", justifyContent:"center",
                            fontSize:"10px", fontWeight:600, fontVariantNumeric:"tabular-nums",
                            color: labelColor(t, dark),
                            flexShrink:0,
                          }}>{n}</div>
                        );
                      })}
                    </div>
                    {winners > 1 && (
                      <span style={{ fontSize:"11px", color:textMuted, marginLeft:"auto" }}>
                        {winners} nyertes
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div style={{ textAlign:"center", marginTop:"28px", fontSize:"10px", color:textFaint, fontWeight:400, letterSpacing:"0.14em", textTransform:"uppercase" }}>
          Valós adatok 1998–2026 · Szerencsejátékkal felelősséggel
        </div>
      </div>
    </div>
  );
}
