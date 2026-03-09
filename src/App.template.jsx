%%RAW_DATA%%

// RAW: [year, dateStr, n1, n2, n3, n4, n5]
// JACKPOTS: [year, dateStr, winnerCount, n1, n2, n3, n4, n5]
const JACKPOTS = [[2025,"2025.10.04.",1,7,8,39,41,49],[2025,"2025.07.26.",1,2,17,27,29,55],[2025,"2025.03.08.",1,8,11,22,53,64],[2024,"2024.10.19.",1,3,10,12,13,33],[2024,"2024.03.02.",1,41,45,46,53,64],[2024,"2024.02.24.",1,4,15,47,59,83],[2023,"2023.07.29.",1,10,22,23,50,61],[2023,"2023.07.08.",1,4,17,55,67,89],[2023,"2023.04.29.",2,7,13,28,47,58],[2022,"2022.10.22.",2,4,8,12,40,44],[2022,"2022.07.30.",1,12,19,20,34,36],[2022,"2022.07.09.",1,11,35,44,47,77],[2022,"2022.07.02.",1,1,36,42,57,79],[2022,"2022.06.18.",1,12,22,26,27,31],[2022,"2022.04.02.",2,4,8,10,55,66],[2022,"2022.03.12.",1,4,11,14,40,44],[2022,"2022.01.15.",1,21,49,53,59,79],[2021,"2021.08.07.",1,10,37,42,56,74],[2021,"2021.06.05.",1,9,32,47,72,81],[2021,"2021.04.03.",1,6,32,39,44,76],[2020,"2020.12.19.",1,2,19,27,29,86],[2020,"2020.07.18.",1,12,32,48,75,88],[2020,"2020.05.09.",1,30,57,58,61,86],[2020,"2020.04.25.",1,34,45,66,84,87],[2020,"2020.03.28.",1,20,33,39,50,64],[2019,"2019.06.29.",1,4,10,24,55,77],[2019,"2019.04.20.",1,14,21,53,60,90],[2018,"2018.09.22.",1,38,43,48,53,69],[2018,"2018.06.02.",1,10,13,26,64,67],[2018,"2018.02.24.",1,9,11,32,40,55],[2017,"2017.12.30.",1,1,8,17,50,77],[2017,"2017.11.18.",1,1,16,47,61,75],[2017,"2017.08.26.",1,34,36,59,69,90],[2017,"2017.03.11.",1,1,4,40,49,67],[2016,"2016.11.26.",1,33,43,58,60,77],[2016,"2016.09.24.",1,8,29,59,77,89],[2016,"2016.08.13.",1,13,14,21,34,84],[2016,"2016.07.02.",3,1,9,11,19,41],[2016,"2016.04.16.",1,8,33,57,62,66],[2016,"2016.02.20.",1,24,43,44,48,58],[2016,"2016.01.23.",1,11,27,55,68,80],[2015,"2015.10.17.",1,2,5,17,24,72],[2015,"2015.06.20.",2,27,29,47,59,89],[2015,"2015.05.30.",1,18,55,56,83,90],[2014,"2014.09.06.",1,3,16,27,45,81],[2014,"2014.08.09.",1,20,28,47,51,71],[2014,"2014.08.02.",1,23,60,76,84,86],[2014,"2014.07.19.",1,13,21,44,47,52],[2014,"2014.03.15.",1,5,10,54,59,80],[2013,"2013.09.21.",1,17,21,70,77,83],[2013,"2013.03.23.",1,1,15,45,68,70],[2013,"2013.01.05.",1,28,47,58,72,75],[2012,"2012.09.29.",1,2,12,29,68,86],[2012,"2012.08.04.",1,16,22,28,40,54],[2012,"2012.06.16.",2,19,26,53,60,89],[2011,"2011.11.19.",1,4,34,48,66,83],[2011,"2011.07.16.",1,4,20,43,52,85],[2011,"2011.06.11.",1,11,42,45,63,76],[2011,"2011.02.12.",1,5,15,36,73,75],[2010,"2011.01.01.",1,4,8,31,81,83],[2010,"2010.10.30.",1,6,28,38,49,69],[2010,"2010.10.23.",1,12,23,30,33,61],[2010,"2010.08.21.",1,13,19,26,53,73],[2010,"2010.08.07.",1,2,9,11,37,46],[2010,"2010.07.10.",1,3,53,73,76,89],[2010,"2010.07.03.",1,14,17,21,28,50],[2009,"2009.12.12.",1,3,25,48,55,80],[2009,"2009.11.28.",3,15,19,45,63,68],[2009,"2009.11.14.",1,55,61,63,86,90],[2009,"2009.10.17.",1,4,27,29,62,72],[2009,"2009.10.10.",1,15,28,51,52,73],[2009,"2009.05.09.",1,27,33,38,71,81],[2009,"2009.02.07.",1,18,22,29,47,51],[2008,"2008.11.29.",1,10,13,28,52,65],[2008,"2008.11.15.",1,9,13,29,33,64],[2008,"2008.11.01.",1,2,9,39,69,75],[2008,"2008.05.10.",1,4,44,47,63,89],[2008,"2008.03.22.",1,9,29,57,69,74],[2008,"2008.03.15.",2,10,34,42,66,85],[2008,"2008.02.23.",1,12,27,44,52,57],[2008,"2008.01.19.",1,5,24,59,62,86],[2007,"2007.08.11.",1,1,3,47,76,78],[2007,"2007.05.12.",1,52,54,72,77,83],[2007,"2007.05.05.",1,9,14,21,55,77],[2007,"2007.03.31.",1,7,49,63,64,72],[2006,"2006.11.25.",2,5,13,21,27,81],[2006,"2006.11.05.",1,15,17,37,48,57],[2006,"2006.07.15.",1,2,15,29,73,75],[2006,"2006.07.08.",2,4,17,19,53,61],[2006,"2006.03.04.",1,44,71,73,76,84],[2005,"2005.12.25.",2,6,19,31,72,81],[2005,"2005.11.05.",1,15,22,28,41,57],[2005,"2005.06.25.",1,7,24,36,57,70],[2005,"2005.06.18.",1,18,35,56,88,90],[2005,"2005.01.29.",1,2,8,37,38,54],[2004,"",1,1,27,29,74,78],[2004,"",1,2,5,17,36,73],[2004,"",4,10,21,49,56,67],[2004,"",1,24,38,45,48,89],[2004,"",1,22,36,40,55,61],[2004,"",1,20,33,51,76,79],[2004,"",2,11,20,27,32,55],[2003,"",1,4,15,46,49,59],[2003,"",1,13,33,73,77,78],[2003,"",1,21,29,37,48,68],[2002,"",1,3,17,20,37,40],[2002,"",1,3,25,51,80,86],[2002,"",1,15,37,39,80,81],[2002,"",2,27,35,39,68,71],[2001,"",1,8,23,25,54,79],[2001,"",1,3,15,39,67,76],[2001,"",1,13,45,48,54,90],[2001,"",1,5,12,15,17,69],[2001,"",1,12,38,62,64,71],[2000,"",1,46,47,70,77,79],[2000,"",1,5,16,26,50,73],[2000,"",1,15,48,65,67,81],[2000,"",1,13,31,43,53,60],[2000,"",1,11,16,34,42,59],[2000,"",1,17,21,32,63,73],[1999,"",1,22,25,48,70,73],[1999,"",1,9,20,22,27,37],[1999,"",1,3,19,28,57,64],[1998,"",2,5,9,22,25,31],[1998,"",1,5,23,37,45,86],[1998,"",2,17,20,25,62,79],[1998,"",1,8,13,18,54,74],[1998,"",1,3,13,30,45,49],[1998,"",1,1,14,46,59,64]];

function getFrequencyMap(data) {
  const freq = {};
  for (let i = 1; i <= 90; i++) freq[i] = 0;
  data.forEach(([,, a, b, c, d, e]) => { freq[a]++; freq[b]++; freq[c]++; freq[d]++; freq[e]++; });
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

const TOTAL = RAW.length; // total draws available

const PRESETS = [
  { label: "5 húzás",   count: 5 },
  { label: "10 húzás",  count: 10 },
  { label: "26 húzás",  count: 26 },
  { label: "52 húzás",  count: 52 },
  { label: "5 év",      count: 5*52 },
  { label: "10 év",     count: 10*52 },
  { label: "Összes",    count: TOTAL },
];

export default function App() {
  const [dark, setDark] = useState(true);
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);
  // drawCount: how many of the most recent draws to include (1 = latest only)
  const [drawCount, setDrawCount] = useState(TOTAL);

  const filtered = useMemo(() => RAW.slice(0, drawCount), [drawCount]);

  const freq = useMemo(() => getFrequencyMap(filtered), [filtered]);
  const vals = Object.values(freq);
  const min = Math.min(...vals), max = Math.max(...vals);
  const norm = n => max === min ? 0.5 : (freq[n] - min) / (max - min);

  const hotNums = useMemo(() =>
    Object.entries(freq).sort((a,b) => +b[1] - +a[1]).slice(0,5).map(([n]) => +n), [freq]);
  const coldNums = useMemo(() =>
    Object.entries(freq).sort((a,b) => +a[1] - +b[1]).slice(0,5).map(([n]) => +n), [freq]);

  const active = selected ?? hovered;
  const activeDraws = useMemo(() =>
    active ? filtered.filter(r => r[2]===active||r[3]===active||r[4]===active||r[5]===active||r[6]===active) : [],
    [active, filtered]
  );

  // Jackpots filtered to same time window
  const firstYear = filtered.length ? filtered[filtered.length - 1][0] : 1998;
  const lastYear  = filtered.length ? filtered[0][0] : 2026;
  const visibleJackpots = useMemo(() => {
    if (!filtered.length) return [];
    // Use the actual date range from filtered draws
    const firstDate = filtered[filtered.length - 1][1] || String(filtered[filtered.length-1][0]);
    return JACKPOTS.filter(j => {
      // Check if this jackpot draw appears in filtered RAW
      return filtered.some(r => r[2]===j[3] && r[3]===j[4] && r[4]===j[5] && r[5]===j[6] && r[6]===j[7]);
    });
  }, [filtered]);

  // Top 5 most frequent numbers among jackpot draws in window
  const jackpotTopNums = useMemo(() => {
    const jFreq = {};
    for (let i = 1; i <= 90; i++) jFreq[i] = 0;
    visibleJackpots.forEach(([,, , a, b, c, d, e]) => { jFreq[a]++; jFreq[b]++; jFreq[c]++; jFreq[d]++; jFreq[e]++; });
    return Object.entries(jFreq).sort((a,b) => +b[1] - +a[1]).slice(0,5).map(([n,cnt]) => ({n:+n, cnt}));
  }, [visibleJackpots]);

  // Range label
  const rangeLabel = useMemo(() => {
    if (!filtered.length) return "";
    const newest = filtered[0];
    const oldest = filtered[filtered.length - 1];
    const newestDate = newest[1] ? newest[1].replace(/\.$/, "") : String(newest[0]);
    const oldestDate = oldest[1] ? oldest[1].replace(/\.$/, "") : String(oldest[0]);
    if (filtered.length === TOTAL) return `Összes adat (${oldest[0]}–${newest[0]})`;
    return `${oldestDate} – ${newestDate}`;
  }, [filtered]);

  const bg        = dark ? "#0d0d0d" : "#f7f7f7";
  const bgCard    = dark ? "#161616" : "#ffffff";
  const border    = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.09)";
  const textMain  = dark ? "#e8e8e8" : "#111111";
  const textMuted = dark ? "#888888" : "#666666";
  const textStat  = dark ? "#bbbbbb" : "#333333";
  const textFaint = dark ? "#333333" : "#cccccc";
  const accent    = dark ? "#ffffff"  : "#000000";
  const sans      = "'Inter','Helvetica Neue',Arial,sans-serif";

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

        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:"44px" }}>
          <h1 style={{ fontSize:"clamp(28px,5vw,44px)", fontWeight:600, margin:"0 0 6px", lineHeight:1.1, letterSpacing:"-0.03em", color:textMain }}>
            Ötöslottó Hőtérkép
          </h1>
          <div style={{ fontSize:"13px", color:textMuted, fontWeight:400 }}>
            {filtered.length} húzás · {rangeLabel}
          </div>
        </div>


        {/* Latest Draw */}
        {(() => {
          const latest = RAW[0];
          const [,dateStr,n1,n2,n3,n4,n5] = latest;
          const latestNums = [n1,n2,n3,n4,n5];
          const lastJP = JACKPOTS[0];
          const isWin = JACKPOTS.some(j => j[3]===n1&&j[4]===n2&&j[5]===n3&&j[6]===n4&&j[7]===n5);
          const drawsSinceJP = RAW.findIndex(r => r[2]===lastJP[3]&&r[3]===lastJP[4]&&r[4]===lastJP[5]&&r[5]===lastJP[6]&&r[6]===lastJP[7]);
          const totalWinners = JACKPOTS.reduce((s,j) => s+j[2], 0);
          const dateDisplay = dateStr ? dateStr.replace(/\.$/,"") : String(latest[0]);
          return (
            <div style={{ background:bgCard, border:`1px solid ${border}`, borderRadius:"14px", padding:"20px 24px", marginBottom:"16px" }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"16px" }}>
                <div style={{ fontSize:"10px", fontWeight:500, letterSpacing:"0.12em", textTransform:"uppercase", color:textMuted }}>Legutóbbi húzás</div>
                <div style={{ fontSize:"11px", color:textMuted }}>{dateDisplay}</div>
              </div>
              <div style={{ display:"flex", gap:"10px", justifyContent:"center", marginBottom:"18px", flexWrap:"wrap" }}>
                {latestNums.map(n => {
                  const t = norm(n);
                  return (
                    <div key={n} style={{ width:"48px", height:"48px", borderRadius:"50%", background:monoColor(t,dark), display:"flex", alignItems:"center", justifyContent:"center", fontSize:"15px", fontWeight:600, color:labelColor(t,dark), boxShadow:"0 2px 10px rgba(0,0,0,0.25)", fontVariantNumeric:"tabular-nums" }}>{n}</div>
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
                    ✗ Nem volt ötöslottó-nyertes
                  </div>
                )}
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"10px" }}>
                {[
                  { label:"Húzás nyertes nélkül", value: isWin ? "Ez volt az!" : `${drawsSinceJP}` },
                  { label:"Utolsó főnyertes", value: lastJP[1] ? lastJP[1].replace(/\.$/, "") : String(lastJP[0]) },
                  { label:"Összes főnyertes", value: `${totalWinners} fő` },
                ].map(({label,value}) => (
                  <div key={label} style={{ background:dark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.03)", borderRadius:"10px", padding:"12px 10px", textAlign:"center" }}>
                    <div style={{ fontSize:"9px", fontWeight:500, letterSpacing:"0.10em", textTransform:"uppercase", color:textMuted, marginBottom:"6px" }}>{label}</div>
                    <div style={{ fontSize:"16px", fontWeight:600, color:textStat, fontVariantNumeric:"tabular-nums" }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Draw count slider */}
        <div style={{ background:bgCard, border:`1px solid ${border}`, borderRadius:"14px", padding:"20px 24px", marginBottom:"16px" }}>
          <div style={{ fontSize:"10px", fontWeight:500, letterSpacing:"0.12em", textTransform:"uppercase", color:textMuted, marginBottom:"16px" }}>
            Időszak
          </div>
          {/* Preset chips */}
          <div style={{ display:"flex", gap:"6px", flexWrap:"wrap", marginBottom:"16px" }}>
            {PRESETS.map(p => (
              <button key={p.label} onClick={() => setDrawCount(Math.min(p.count, TOTAL))}
                style={{
                  padding:"5px 12px", borderRadius:"20px", border:`1px solid ${border}`,
                  background: drawCount === Math.min(p.count, TOTAL) ? accent : "transparent",
                  color: drawCount === Math.min(p.count, TOTAL) ? (dark ? "#000" : "#fff") : textMuted,
                  fontSize:"11px", fontWeight:500, cursor:"pointer", fontFamily:sans,
                  transition:"all 0.15s",
                }}>
                {p.label}
              </button>
            ))}
          </div>
          {/* Slider */}
          <div style={{ display:"flex", alignItems:"center", gap:"14px" }}>
            <span style={{ fontSize:"11px", color:textMuted, fontWeight:400, whiteSpace:"nowrap" }}>5</span>
            <input type="range" min={5} max={TOTAL} value={drawCount}
              onChange={e => setDrawCount(+e.target.value)} />
            <span style={{ fontSize:"11px", color:textMuted, fontWeight:400, whiteSpace:"nowrap" }}>{TOTAL}</span>
            <span style={{ fontSize:"13px", fontWeight:600, color:textMain, fontVariantNumeric:"tabular-nums", whiteSpace:"nowrap", minWidth:"80px", textAlign:"right" }}>
              {drawCount === TOTAL ? "Összes" : `${drawCount} húzás`}
            </span>
          </div>
        </div>

        {/* Heatmap */}
        <div style={{ background:bgCard, border:`1px solid ${border}`, borderRadius:"14px", padding:"24px 20px 20px", marginBottom:"16px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(10,1fr)", gap:"5px" }}>
            {Array.from({length:90},(_,i)=>i+1).map(num => {
              const t = norm(num);
              const isActive = active === num;
              const inDraw = selected && activeDraws.some(r => r[2]===num||r[3]===num||r[4]===num||r[5]===num||r[6]===num) && num !== selected;
              return (
                <div key={num}
                  onMouseEnter={() => setHovered(num)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(selected===num ? null : num)}
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
                      ? `0 0 0 1.5px ${dark?"rgba(255,255,255,0.4)":"rgba(0,0,0,0.35)"}`
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
                <div style={{ width:"50px", height:"50px", borderRadius:"50%", flexShrink:0, background:monoColor(t,dark), display:"flex", alignItems:"center", justifyContent:"center", fontSize:"17px", fontWeight:600, fontVariantNumeric:"tabular-nums", color:labelColor(t,dark), boxShadow:"0 3px 12px rgba(0,0,0,0.25)" }}>{active}</div>
                <div>
                  <div style={{ fontSize:"26px", fontWeight:600, lineHeight:1, letterSpacing:"-0.03em", fontVariantNumeric:"tabular-nums" }}>
                    {freq[active]}<span style={{ fontSize:"13px", fontWeight:400, color:textMuted, marginLeft:"6px" }}>alkalommal</span>
                  </div>
                  <div style={{ fontSize:"12px", color:textMuted, marginTop:"4px" }}>
                    {filtered.length} húzásból · {((freq[active]/filtered.length)*100).toFixed(1)}% találati arány
                  </div>
                </div>
              </div>
              <div style={{ display:"flex", gap:"6px", flexWrap:"wrap" }}>
                {activeDraws.slice(-10).map((r, i) => {
                  const [yr, ds, ...nums] = r;
                  const dateLabel = ds ? ds.replace(/\.$/, "") : String(yr);
                  return (
                    <div key={i} style={{ background: dark?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.04)", border:`1px solid ${border}`, borderRadius:"6px", padding:"4px 9px", fontSize:"10px", color:textMuted, fontVariantNumeric:"tabular-nums" }}>
                      {dateLabel} · {nums.map(n => <span key={n} style={{ color: n===active ? textMain : textFaint, fontWeight: n===active ? 600 : 400 }}>{n} </span>)}
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
          {[{label:"Legtöbbször kihúzott", nums:hotNums, sym:"↑"},{label:"Legritkábban kihúzott", nums:coldNums, sym:"↓"}].map(({label,nums,sym}) => (
            <div key={label} style={{ background:bgCard, border:`1px solid ${border}`, borderRadius:"14px", padding:"18px 20px" }}>
              <div style={{ fontSize:"10px", fontWeight:500, letterSpacing:"0.12em", color:textMuted, marginBottom:"14px", textTransform:"uppercase" }}>
                {sym} {label}
              </div>
              <div style={{ display:"flex", gap:"10px", flexWrap:"wrap" }}>
                {nums.map(n => {
                  const t = norm(n);
                  return (
                    <div key={n} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"5px" }}>
                      <div style={{ width:"34px", height:"34px", borderRadius:"50%", background:monoColor(t,dark), display:"flex", alignItems:"center", justifyContent:"center", fontSize:"11px", fontWeight:600, fontVariantNumeric:"tabular-nums", color:labelColor(t,dark), boxShadow:"0 1px 6px rgba(0,0,0,0.2)" }}>{n}</div>
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
            🏆 Ötösök — mind az 5 számot eltalálták
            <span style={{ marginLeft:"10px", color:textStat, fontVariantNumeric:"tabular-nums" }}>
              ({visibleJackpots.length} alkalom a kiválasztott időszakban)
            </span>
          </div>

          {/* Top 5 jackpot numbers */}
          {visibleJackpots.length > 0 && (
            <div style={{ display:"flex", alignItems:"center", gap:"12px", flexWrap:"wrap", marginBottom:"18px", paddingBottom:"16px", borderBottom:`1px solid ${border}` }}>
              <span style={{ fontSize:"11px", color:textMuted, fontWeight:500, letterSpacing:"0.08em", whiteSpace:"nowrap" }}>Leggyakoribb ötösökben:</span>
              <div style={{ display:"flex", gap:"8px", flexWrap:"wrap" }}>
                {jackpotTopNums.map(({n, cnt}) => {
                  const t = norm(n);
                  return (
                    <div key={n} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"4px" }}>
                      <div style={{ width:"32px", height:"32px", borderRadius:"50%", background:monoColor(t,dark), display:"flex", alignItems:"center", justifyContent:"center", fontSize:"11px", fontWeight:600, fontVariantNumeric:"tabular-nums", color:labelColor(t,dark), boxShadow:"0 1px 6px rgba(0,0,0,0.15)" }}>{n}</div>
                      <span style={{ fontSize:"10px", color:textStat, fontWeight:500, fontVariantNumeric:"tabular-nums" }}>{cnt}×</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {visibleJackpots.length === 0 ? (
            <div style={{ fontSize:"12px", color:textFaint, textAlign:"center", padding:"16px 0" }}>
              Ebben az időszakban nem volt ötös találat.
            </div>
          ) : (
            <div style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
              {visibleJackpots.map((j, i) => {
                const [yr, ds, winners, ...nums] = j;
                const dateLabel = ds ? ds.replace(/\.$/, "") : String(yr);
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
