import React, { useState, useEffect, useRef } from 'react';
import {
  Shield,
  Heart,
  Zap,
  Crosshair,
  Compass,
  MessageSquare,
  ListTodo,
  Sparkles,
  Volume2,
  RefreshCw,
  Trophy,
  Award,
  AlertTriangle,
  Coins,
  Gem,
  CheckCircle2,
  Globe,
  Tag,
  ShieldCheck,
  ChevronRight,
  Play,
  Pause,
} from 'lucide-react';

// =================================================================
// 665. Dynamic Health / Resource Gauge (HP / MP / Shield)
// =================================================================
export const LiveGameHealthBarLab: React.FC = () => {
  const [maxHp] = useState(2000);
  const [hp, setHp] = useState(1650);
  const [lagHp, setLagHp] = useState(1650);
  const [shield, setShield] = useState(400);
  const [isHit, setIsHit] = useState(false);

  useEffect(() => {
    if (lagHp > hp) {
      const timer = setTimeout(() => {
        setLagHp(hp);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setLagHp(hp);
    }
  }, [hp, lagHp]);

  const takeDamage = (amount: number) => {
    setIsHit(true);
    setTimeout(() => setIsHit(false), 200);

    if (shield > 0) {
      const remainingShield = Math.max(0, shield - amount);
      const overflowDamage = Math.max(0, amount - shield);
      setShield(remainingShield);
      if (overflowDamage > 0) {
        setHp((prev) => Math.max(0, prev - overflowDamage));
      }
    } else {
      setHp((prev) => Math.max(0, prev - amount));
    }
  };

  const heal = (amount: number) => {
    setHp((prev) => Math.min(maxHp, prev + amount));
  };

  const addShield = (amount: number) => {
    setShield((prev) => Math.min(800, prev + amount));
  };

  const hpPercent = (hp / maxHp) * 100;
  const lagPercent = (lagHp / maxHp) * 100;
  const shieldPercent = (shield / maxHp) * 100;

  return (
    <div className="w-full max-w-xl mx-auto p-5 bg-slate-950 border-2 border-slate-800 rounded-2xl font-mono text-xs flex flex-col gap-4 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
          <span className="font-bold text-white text-sm">Player Vitality HUD</span>
        </div>
        <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
          Damage Lag & Shield Sync
        </span>
      </div>

      {/* Main Gauge Area */}
      <div className={`p-4 bg-slate-900/90 rounded-xl border transition-colors ${isHit ? 'border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.3)]' : 'border-slate-800'}`}>
        <div className="flex justify-between items-center text-[11px] mb-1.5 font-bold">
          <div className="flex items-center gap-2">
            <span className="text-rose-400">HP {hp} / {maxHp}</span>
            {shield > 0 && <span className="text-cyan-400 font-bold">(+🛡️ {shield})</span>}
          </div>
          <span className="text-slate-400">{Math.round(hpPercent)}%</span>
        </div>

        {/* 2-Layer Health Bar with Damage Lag */}
        <div className="relative w-full h-6 bg-slate-950 rounded-lg overflow-hidden border border-slate-700/80">
          {/* Damage Lag Shadow (Yellowish-White) */}
          <div
            className="absolute top-0 left-0 h-full bg-amber-400/80 transition-all duration-700 ease-out"
            style={{ width: `${lagPercent}%` }}
          />
          {/* Actual Current HP Bar (Red Gradient) */}
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-rose-600 to-rose-500 transition-all duration-150 ease-out"
            style={{ width: `${hpPercent}%` }}
          />
          {/* Shield Overlay Bar (Cyan Translucent) */}
          {shield > 0 && (
            <div
              className="absolute top-0 left-0 h-full bg-cyan-400/40 border-r-2 border-cyan-300 transition-all duration-200"
              style={{ width: `${shieldPercent}%` }}
            />
          )}
          {/* Grid Ticks */}
          <div className="absolute inset-0 grid grid-cols-10 pointer-events-none opacity-20">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="border-r border-white h-full" />
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => takeDamage(350)}
          className="px-3 py-2 bg-rose-600/20 hover:bg-rose-600/30 text-rose-400 border border-rose-500/40 rounded-xl font-bold transition flex items-center justify-center gap-1 active:scale-95"
        >
          <span>💥 Take Damage (-350)</span>
        </button>
        <button
          onClick={() => heal(250)}
          className="px-3 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 rounded-xl font-bold transition flex items-center justify-center gap-1 active:scale-95"
        >
          <span>💚 Heal (+250)</span>
        </button>
        <button
          onClick={() => addShield(200)}
          className="px-3 py-2 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-400 border border-cyan-500/40 rounded-xl font-bold transition flex items-center justify-center gap-1 active:scale-95"
        >
          <span>🛡️ Shield (+200)</span>
        </button>
      </div>
    </div>
  );
};

// =================================================================
// 666. Radial Skill Cooldown Indicator (Radial Sweep)
// =================================================================
export const LiveRadialCooldownLab: React.FC = () => {
  const [cooldown, setCooldown] = useState(0);
  const [isReadyFlash, setIsReadyFlash] = useState(false);
  const maxCooldown = 3.5;

  const triggerSkill = () => {
    if (cooldown > 0) return;
    setCooldown(maxCooldown);
  };

  useEffect(() => {
    if (cooldown <= 0) return;
    const interval = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 0.1) {
          setIsReadyFlash(true);
          setTimeout(() => setIsReadyFlash(false), 300);
          return 0;
        }
        return Math.max(0, +(prev - 0.1).toFixed(1));
      });
    }, 100);
    return () => clearInterval(interval);
  }, [cooldown]);

  const progress = cooldown > 0 ? (cooldown / maxCooldown) * 360 : 0;

  return (
    <div className="w-full max-w-sm mx-auto p-5 bg-slate-950 border-2 border-slate-800 rounded-2xl font-mono text-xs flex flex-col items-center gap-4 shadow-xl">
      <div className="w-full flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-white">Radial Skill Cooldown</span>
        <span className="text-[10px] text-amber-400">Slot [Q]</span>
      </div>

      {/* Radial Slot Button */}
      <button
        onClick={triggerSkill}
        disabled={cooldown > 0}
        className={`relative w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all flex items-center justify-center select-none ${
          isReadyFlash
            ? 'bg-white border-white scale-105 shadow-[0_0_25px_rgba(255,255,255,0.8)]'
            : cooldown > 0
            ? 'border-indigo-500/50 bg-slate-900 cursor-not-allowed'
            : 'border-indigo-400 bg-indigo-950/80 hover:border-indigo-300 hover:scale-105 cursor-pointer shadow-lg shadow-indigo-600/20'
        }`}
      >
        {/* Skill Icon */}
        <Zap className="w-10 h-10 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />

        {/* Radial Dark Mask */}
        {cooldown > 0 && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `conic-gradient(rgba(15,23,42,0.88) ${progress}deg, transparent 0deg)`,
            }}
          />
        )}

        {/* Countdown Number */}
        {cooldown > 0 && (
          <span className="absolute inset-0 flex items-center justify-center font-black text-xl text-white drop-shadow-md">
            {cooldown.toFixed(1)}s
          </span>
        )}

        {/* Hotkey Tag */}
        <span className="absolute bottom-1 right-1.5 text-[9px] font-bold bg-slate-900/90 text-slate-300 px-1 rounded border border-slate-700">
          Q
        </span>
      </button>

      <p className="text-slate-400 text-center text-[11px]">
        {cooldown > 0 ? 'Cooldown in progress...' : 'Click skill or press trigger to cast!'}
      </p>

      <button
        onClick={triggerSkill}
        disabled={cooldown > 0}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold rounded-xl transition shadow-md shadow-indigo-600/20"
      >
        Cast Flame Strike (3.5s)
      </button>
    </div>
  );
};

// =================================================================
// 667. Floating Combat Text / Damage Numbers
// =================================================================
interface DamageParticle {
  id: number;
  val: number;
  isCrit: boolean;
  x: number;
  y: number;
}

export const LiveFloatingDamageLab: React.FC = () => {
  const [particles, setParticles] = useState<DamageParticle[]>([]);
  const [dummyHealth, setDummyHealth] = useState(100);

  const spawnHit = (crit: boolean) => {
    const val = crit ? Math.floor(Math.random() * 400 + 600) : Math.floor(Math.random() * 150 + 100);
    const newParticle: DamageParticle = {
      id: Date.now() + Math.random(),
      val,
      isCrit: crit,
      x: Math.random() * 40 - 20,
      y: Math.random() * 20 - 10,
    };

    setParticles((prev) => [...prev, newParticle]);
    setDummyHealth((h) => (h <= 10 ? 100 : Math.max(0, h - (crit ? 25 : 10))));

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto p-5 bg-slate-950 border-2 border-slate-800 rounded-2xl font-mono text-xs flex flex-col gap-4 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-white">Floating Combat Text</span>
        <span className="text-[10px] text-rose-400">Target Dummy</span>
      </div>

      {/* Target Arena */}
      <div
        onClick={() => spawnHit(Math.random() > 0.6)}
        className="relative h-44 bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center justify-center cursor-crosshair overflow-hidden select-none hover:border-slate-700"
      >
        <span className="text-5xl transition-transform active:scale-90">👾</span>
        <span className="text-[10px] text-slate-400 mt-2 font-bold">Dummy HP: {dummyHealth}%</span>
        <div className="w-28 h-1.5 bg-slate-950 rounded-full mt-1 overflow-hidden border border-slate-700">
          <div className="h-full bg-rose-500 transition-all duration-150" style={{ width: `${dummyHealth}%` }} />
        </div>

        {/* Floating Numbers */}
        {particles.map((p) => (
          <div
            key={p.id}
            className={`absolute pointer-events-none font-black animate-in fade-in zoom-in slide-in-from-bottom-6 duration-700 ${
              p.isCrit
                ? 'text-rose-500 text-2xl drop-shadow-[0_0_12px_rgba(244,63,94,0.9)]'
                : 'text-amber-300 text-base drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]'
            }`}
            style={{
              transform: `translate(${p.x}px, ${p.y - 40}px)`,
            }}
          >
            {p.isCrit ? `💥 CRIT !${p.val}` : p.val}
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => spawnHit(false)}
          className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl border border-slate-700 transition"
        >
          Normal Attack
        </button>
        <button
          onClick={() => spawnHit(true)}
          className="flex-1 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl transition shadow-md shadow-rose-600/30"
        >
          Critical Strike
        </button>
      </div>
    </div>
  );
};

// =================================================================
// 668. Game Minimap & Radar Overlay
// =================================================================
export const LiveGameMinimapLab: React.FC = () => {
  const [angle, setAngle] = useState(45);
  const [zoom, setZoom] = useState(1);

  return (
    <div className="w-full max-w-sm mx-auto p-5 bg-slate-950 border-2 border-slate-800 rounded-2xl font-mono text-xs flex flex-col items-center gap-4 shadow-xl">
      <div className="w-full flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-white flex items-center gap-1.5">
          <Compass className="w-4 h-4 text-cyan-400" />
          Minimap Radar HUD
        </span>
        <span className="text-[10px] text-cyan-400 font-bold">GRID 24-B</span>
      </div>

      {/* Circular Radar HUD */}
      <div className="relative w-44 h-44 rounded-full bg-slate-900 border-4 border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.2)] overflow-hidden flex items-center justify-center">
        {/* Radar Rings & Crosshairs */}
        <div className="absolute inset-0 border border-cyan-500/20 rounded-full scale-75" />
        <div className="absolute inset-0 border border-cyan-500/20 rounded-full scale-50" />
        <div className="absolute w-full h-[1px] bg-cyan-500/20" />
        <div className="absolute h-full w-[1px] bg-cyan-500/20" />

        {/* FOV Cone (Field of View) */}
        <div
          className="absolute w-32 h-32 pointer-events-none transition-transform duration-75"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <div
            className="w-full h-full"
            style={{
              background: 'conic-gradient(from -30deg at 50% 50%, rgba(6,182,212,0.4) 0deg, rgba(6,182,212,0.4) 60deg, transparent 60deg)',
            }}
          />
        </div>

        {/* Central Player Arrow */}
        <div
          className="relative z-10 w-3 h-3 bg-cyan-400 border border-white rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(6,182,212,1)]"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[6px] border-b-white -mt-1" />
        </div>

        {/* Enemies (Red Blips) */}
        <div className="absolute top-8 left-10 w-2 h-2 rounded-full bg-rose-500 animate-ping" />
        <div className="absolute top-8 left-10 w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,1)]" />

        <div className="absolute bottom-12 right-8 w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,1)]" />

        {/* Quest Star (Gold) */}
        <div className="absolute top-6 right-12 text-[10px] text-amber-400 font-bold animate-bounce">
          ★
        </div>
      </div>

      {/* Rotation Slider */}
      <div className="w-full flex flex-col gap-1">
        <div className="flex justify-between text-[11px] text-slate-400">
          <span>Heading: {angle}°</span>
          <span>Zoom: {zoom}x</span>
        </div>
        <input
          type="range"
          min="0"
          max="360"
          value={angle}
          onChange={(e) => setAngle(+e.target.value)}
          className="w-full accent-cyan-500"
        />
      </div>
    </div>
  );
};

// =================================================================
// 669. Dialogue Box & Visual Novel Window
// =================================================================
export const LiveDialogueBoxLab: React.FC = () => {
  const dialogues = [
    { speaker: 'Commander Elena', text: '경계 레이더에 비정상 신호가 감지되었습니다. 즉시 방어 태세를 갖추십시오.' },
    { speaker: 'Tactical AI', text: '외곽 방벽 3번 게이트가 파손되었습니다. 적 크리처 무리가 진입 중입니다.' },
    { speaker: 'Commander Elena', text: '모든 요원은 무기를 장전하고 지정된 방어 구역으로 이동하십시오!' },
  ];

  const [idx, setIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setDisplayText('');
    let charIdx = 0;
    const currentFullText = dialogues[idx].text;
    const interval = setInterval(() => {
      if (charIdx < currentFullText.length) {
        setDisplayText(currentFullText.slice(0, charIdx + 1));
        charIdx++;
      } else {
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [idx]);

  const handleNext = () => {
    setIdx((prev) => (prev + 1) % dialogues.length);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-5 bg-slate-950 border-2 border-slate-800 rounded-2xl font-mono text-xs flex flex-col gap-3 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-white flex items-center gap-1.5">
          <MessageSquare className="w-4 h-4 text-indigo-400" />
          RPG Dialogue Window
        </span>
        <span className="text-[10px] text-slate-400">Line {idx + 1} / {dialogues.length}</span>
      </div>

      {/* Main Dialogue Frame */}
      <div className="p-4 bg-slate-900 border-2 border-indigo-500/40 rounded-xl flex gap-4 items-start relative min-h-[110px]">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-xl bg-slate-800 border-2 border-indigo-400 flex items-center justify-center text-2xl shrink-0 shadow-md">
          {idx === 1 ? '🤖' : '👩‍✈️'}
        </div>

        {/* Text Area */}
        <div className="flex-1 flex flex-col gap-1.5">
          {/* Nameplate */}
          <span className="text-indigo-400 font-black text-xs tracking-wide">
            {dialogues[idx].speaker}
          </span>
          <p className="text-slate-200 text-sm leading-relaxed font-sans">
            {displayText}
          </p>
        </div>

        {/* Next Pulse Button */}
        <button
          onClick={handleNext}
          className="absolute bottom-2 right-3 text-indigo-400 hover:text-white font-bold text-xs flex items-center gap-1 animate-pulse"
        >
          <span>NEXT</span>
          <span>▼</span>
        </button>
      </div>

      <div className="flex justify-end gap-2">
        <button
          onClick={handleNext}
          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition"
        >
          Next Dialogue
        </button>
      </div>
    </div>
  );
};

// =================================================================
// 670. Branching Choice Dialogue Selector
// =================================================================
export const LiveBranchingChoiceLab: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(100);

  useEffect(() => {
    if (selected !== null) return;
    const interval = setInterval(() => {
      setTimeLeft((t) => (t <= 0 ? 0 : t - 1));
    }, 100);
    return () => clearInterval(interval);
  }, [selected]);

  const choices = [
    { id: 1, title: '정면 돌파를 감행한다', badge: '전투 위협 High', color: 'border-rose-500/60 hover:bg-rose-950/40' },
    { id: 2, title: '보안 시스템을 해킹하여 문을 연다', badge: '지능 요구 Int: 14', color: 'border-cyan-500/60 hover:bg-cyan-950/40' },
    { id: 3, title: '환기구로 우회하여 스텔스 침투한다', badge: '민첩 요구 Dex: 12', color: 'border-emerald-500/60 hover:bg-emerald-950/40' },
  ];

  return (
    <div className="w-full max-w-md mx-auto p-5 bg-slate-950 border-2 border-slate-800 rounded-2xl font-mono text-xs flex flex-col gap-3.5 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-white">Timed Branching Choice</span>
        <span className="text-[10px] text-amber-400 font-bold">Time: {(timeLeft / 10).toFixed(1)}s</span>
      </div>

      {/* Timeout Progress Bar */}
      <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
        <div
          className={`h-full transition-all duration-100 ${timeLeft < 30 ? 'bg-rose-500' : 'bg-amber-400'}`}
          style={{ width: `${timeLeft}%` }}
        />
      </div>

      {/* Choice List */}
      <div className="flex flex-col gap-2">
        {choices.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelected(c.id)}
            className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${c.color} ${
              selected === c.id ? 'bg-indigo-600 text-white border-indigo-400 shadow-md' : 'bg-slate-900 text-slate-200'
            }`}
          >
            <span className="font-bold text-xs">{c.title}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-950/60 border border-slate-700 text-slate-300">
              {c.badge}
            </span>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div className="p-3 bg-indigo-950/60 border border-indigo-500/40 rounded-xl text-center text-indigo-300 font-bold">
          선택 완료: 경로 #{selected}로 스토리가 진행됩니다.
        </div>
      )}
    </div>
  );
};

// =================================================================
// 671. Quest Tracker & Objective HUD
// =================================================================
export const LiveQuestTrackerLab: React.FC = () => {
  const [count, setCount] = useState(3);
  const maxCount = 5;

  return (
    <div className="w-full max-w-sm mx-auto p-5 bg-slate-950 border-2 border-slate-800 rounded-2xl font-mono text-xs flex flex-col gap-3 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-white flex items-center gap-1.5">
          <ListTodo className="w-4 h-4 text-amber-400" />
          Active Quest Tracker
        </span>
        <span className="text-[10px] text-amber-400 font-bold">MAIN QUEST</span>
      </div>

      {/* Quest Card */}
      <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-white font-bold text-xs">고대 유적의 동력원 확보</span>
          <span className="text-[10px] text-slate-400">🚩 140m NW</span>
        </div>

        {/* Objective 1 */}
        <div className="flex items-center justify-between text-[11px] p-2 bg-slate-950/80 rounded-lg border border-slate-800">
          <div className="flex items-center gap-2">
            <span className={count >= maxCount ? 'text-emerald-400' : 'text-slate-400'}>
              {count >= maxCount ? '✓' : '○'}
            </span>
            <span className={count >= maxCount ? 'line-through text-slate-500' : 'text-slate-200'}>
              에너지 코어 수집
            </span>
          </div>
          <span className="font-bold text-amber-400">{count} / {maxCount}</span>
        </div>

        {/* Objective 2 (Completed) */}
        <div className="flex items-center justify-between text-[11px] p-2 bg-slate-950/80 rounded-lg border border-slate-800 opacity-60">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span className="line-through text-slate-400">경계병 드론 무력화</span>
          </div>
          <span className="font-bold text-emerald-400">2 / 2</span>
        </div>
      </div>

      {/* Action Simulation */}
      <div className="flex gap-2">
        <button
          onClick={() => setCount((c) => Math.max(0, c - 1))}
          className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-lg"
        >
          - 수량 감소
        </button>
        <button
          onClick={() => setCount((c) => Math.min(maxCount, c + 1))}
          className="flex-1 py-1.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg"
        >
          + 코어 수집 (+1)
        </button>
      </div>
    </div>
  );
};

// =================================================================
// 672. Dynamic Crosshair & Weapon Reticle
// =================================================================
export const LiveCrosshairLab: React.FC = () => {
  const [spread, setSpread] = useState(12);
  const [hitmarker, setHitmarker] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const fire = () => {
    setSpread(28);
    setHitmarker(true);
    setTimeout(() => setSpread(12), 200);
    setTimeout(() => setHitmarker(false), 150);
  };

  return (
    <div className="w-full max-w-sm mx-auto p-5 bg-slate-950 border-2 border-slate-800 rounded-2xl font-mono text-xs flex flex-col items-center gap-4 shadow-xl">
      <div className="w-full flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-white flex items-center gap-1.5">
          <Crosshair className="w-4 h-4 text-emerald-400" />
          Weapon Crosshair HUD
        </span>
        <button
          onClick={() => setIsLocked(!isLocked)}
          className={`text-[10px] px-2 py-0.5 rounded font-bold border transition ${
            isLocked ? 'bg-rose-500 text-white border-rose-400' : 'bg-slate-900 text-slate-400 border-slate-800'
          }`}
        >
          {isLocked ? 'LOCK-ON ACTIVE' : 'TARGET ACQUIRE'}
        </button>
      </div>

      {/* Target Canvas */}
      <div
        onClick={fire}
        className="relative w-48 h-48 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center cursor-crosshair overflow-hidden select-none hover:border-slate-700"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10 pointer-events-none">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="border border-white" />
          ))}
        </div>

        {/* Lock-on Circle */}
        {isLocked && (
          <div className="absolute w-28 h-28 rounded-full border-2 border-dashed border-rose-500/80 animate-spin" />
        )}

        {/* Central Dot */}
        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full z-10 shadow-[0_0_6px_rgba(52,211,153,1)]" />

        {/* 4 Reticle Bars */}
        <div
          className="absolute w-1 h-3 bg-emerald-400 transition-all duration-75"
          style={{ transform: `translateY(-${spread}px)` }}
        />
        <div
          className="absolute w-1 h-3 bg-emerald-400 transition-all duration-75"
          style={{ transform: `translateY(${spread}px)` }}
        />
        <div
          className="absolute h-1 w-3 bg-emerald-400 transition-all duration-75"
          style={{ transform: `translateX(-${spread}px)` }}
        />
        <div
          className="absolute h-1 w-3 bg-emerald-400 transition-all duration-75"
          style={{ transform: `translateX(${spread}px)` }}
        />

        {/* X Hitmarker */}
        {hitmarker && (
          <div className="absolute font-black text-rose-500 text-2xl animate-ping pointer-events-none">
            ✕
          </div>
        )}
      </div>

      <button
        onClick={fire}
        className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition shadow-md shadow-emerald-600/30"
      >
        FIRE WEAPON (Space / Click)
      </button>
    </div>
  );
};

// =================================================================
// 673. On-Screen Virtual Joystick & Touch D-Pad
// =================================================================
export const LiveVirtualJoystickLab: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const dx = e.clientX - rect.left - centerX;
    const dy = e.clientY - rect.top - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxRadius = 45;

    if (dist <= maxRadius) {
      setPos({ x: dx, y: dy });
    } else {
      const angle = Math.atan2(dy, dx);
      setPos({ x: Math.cos(angle) * maxRadius, y: Math.sin(angle) * maxRadius });
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setPos({ x: 0, y: 0 });
  };

  return (
    <div className="w-full max-w-sm mx-auto p-5 bg-slate-950 border-2 border-slate-800 rounded-2xl font-mono text-xs flex flex-col items-center gap-3.5 shadow-xl">
      <div className="w-full flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-white">Virtual Touch Joystick</span>
        <span className="text-[10px] text-indigo-400 font-bold">
          X: {pos.x.toFixed(0)}, Y: {pos.y.toFixed(0)}
        </span>
      </div>

      {/* Joystick Base */}
      <div
        ref={containerRef}
        onPointerDown={(e) => {
          setIsDragging(true);
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="relative w-36 h-36 rounded-full bg-slate-900 border-4 border-indigo-500/40 flex items-center justify-center cursor-grab active:cursor-grabbing select-none shadow-inner"
      >
        <div className="absolute inset-0 border border-slate-800 rounded-full scale-75" />

        {/* Thumb Knob */}
        <div
          className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 border-2 border-white/80 shadow-lg flex items-center justify-center pointer-events-none transition-transform duration-75"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px)`,
          }}
        >
          <div className="w-3 h-3 rounded-full bg-white/40" />
        </div>
      </div>

      <p className="text-[11px] text-slate-400 text-center">
        엄지손가락 또는 마우스로 조이스틱 노브를 드래그하세요.
      </p>
    </div>
  );
};

// =================================================================
// 674. Action Key Glyph Indicator
// =================================================================
export const LiveKeyGlyphLab: React.FC = () => {
  const [device, setDevice] = useState<'keyboard' | 'xbox' | 'ps'>('keyboard');

  return (
    <div className="w-full max-w-sm mx-auto p-5 bg-slate-950 border-2 border-slate-800 rounded-2xl font-mono text-xs flex flex-col gap-4 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-white">Action Key Glyph Guide</span>
        {/* Device Switcher */}
        <div className="flex rounded-lg bg-slate-900 p-0.5 border border-slate-800">
          <button
            onClick={() => setDevice('keyboard')}
            className={`px-2 py-0.5 rounded text-[10px] font-bold ${device === 'keyboard' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
          >
            PC
          </button>
          <button
            onClick={() => setDevice('xbox')}
            className={`px-2 py-0.5 rounded text-[10px] font-bold ${device === 'xbox' ? 'bg-emerald-600 text-white' : 'text-slate-400'}`}
          >
            Xbox
          </button>
          <button
            onClick={() => setDevice('ps')}
            className={`px-2 py-0.5 rounded text-[10px] font-bold ${device === 'ps' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
          >
            PS5
          </button>
        </div>
      </div>

      {/* Dynamic Key Action Prompts */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between p-2.5 bg-slate-900 rounded-xl border border-slate-800">
          <span className="text-slate-300 font-bold">점프 / 상승 (Jump)</span>
          {device === 'keyboard' && (
            <kbd className="px-2.5 py-1 bg-slate-800 border border-slate-600 text-white rounded font-mono font-bold text-xs shadow">
              Space
            </kbd>
          )}
          {device === 'xbox' && (
            <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center border border-emerald-400 shadow">
              A
            </span>
          )}
          {device === 'ps' && (
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-black flex items-center justify-center border border-blue-400 shadow">
              ✕
            </span>
          )}
        </div>

        <div className="flex items-center justify-between p-2.5 bg-slate-900 rounded-xl border border-slate-800">
          <span className="text-slate-300 font-bold">상호작용 / 문 열기 (Interact)</span>
          {device === 'keyboard' && (
            <kbd className="px-2 py-1 bg-slate-800 border border-slate-600 text-white rounded font-mono font-bold text-xs shadow">
              E
            </kbd>
          )}
          {device === 'xbox' && (
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-black flex items-center justify-center border border-blue-400 shadow">
              X
            </span>
          )}
          {device === 'ps' && (
            <span className="w-6 h-6 rounded-full bg-pink-600 text-white font-black flex items-center justify-center border border-pink-400 shadow">
              □
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// =================================================================
// 675. Key Remapping Matrix
// =================================================================
export const LiveKeyRemappingLab: React.FC = () => {
  const [bindings, setBindings] = useState<{ [action: string]: string }>({
    'Move Forward': 'W',
    'Move Backward': 'S',
    'Jump': 'Space',
    'Primary Attack': 'L-Click',
  });
  const [activeAction, setActiveAction] = useState<string | null>(null);

  useEffect(() => {
    if (!activeAction) return;
    const handleKey = (e: KeyboardEvent) => {
      e.preventDefault();
      const newKey = e.code === 'Space' ? 'Space' : e.key.toUpperCase();
      setBindings((prev) => ({ ...prev, [activeAction]: newKey }));
      setActiveAction(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeAction]);

  return (
    <div className="w-full max-w-sm mx-auto p-5 bg-slate-950 border-2 border-slate-800 rounded-2xl font-mono text-xs flex flex-col gap-3 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-white">Key Remapping Table</span>
        <button
          onClick={() =>
            setBindings({
              'Move Forward': 'W',
              'Move Backward': 'S',
              'Jump': 'Space',
              'Primary Attack': 'L-Click',
            })
          }
          className="text-[10px] text-slate-400 hover:text-white underline"
        >
          Reset
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {Object.entries(bindings).map(([action, key]) => (
          <div key={action} className="flex items-center justify-between p-2 bg-slate-900 rounded-xl border border-slate-800">
            <span className="text-slate-300 font-bold">{action}</span>
            <button
              onClick={() => setActiveAction(action)}
              className={`px-3 py-1 rounded-lg border font-bold text-xs transition ${
                activeAction === action
                  ? 'bg-amber-500 text-slate-950 border-amber-400 animate-pulse'
                  : 'bg-slate-800 text-white border-slate-700 hover:border-indigo-400'
              }`}
            >
              {activeAction === action ? 'Press key...' : key}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// =================================================================
// 676. Game Title Screen Menu Stack
// =================================================================
export const LiveTitleScreenMenuLab: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const menus = ['START ADVENTURE', 'CONTINUE GAME', 'OPTIONS & SOUND', 'CREDITS'];

  return (
    <div className="w-full max-w-sm mx-auto p-6 bg-slate-950 border-2 border-slate-800 rounded-2xl font-mono text-xs flex flex-col items-center gap-5 shadow-2xl relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 w-full h-24 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Game Logo */}
      <div className="text-center z-10">
        <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 tracking-wider">
          NEON STRIKE
        </h3>
        <span className="text-[9px] text-slate-500 font-bold tracking-widest">CHAPTER II : RESURGENCE</span>
      </div>

      {/* Menu Stack */}
      <div className="w-full flex flex-col gap-2 z-10">
        {menus.map((m) => (
          <button
            key={m}
            onMouseEnter={() => setHovered(m)}
            onMouseLeave={() => setHovered(null)}
            className="w-full py-2.5 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-indigo-600 hover:border-indigo-400 text-slate-300 hover:text-white font-black text-xs transition-all shadow-sm flex items-center justify-center gap-2 group"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
            <span>{m}</span>
          </button>
        ))}
      </div>

      <span className="text-[10px] text-slate-500 font-mono">v1.4.0 Build 2026.10</span>
    </div>
  );
};

// =================================================================
// 677. Game Pause Modal Overlay
// =================================================================
export const LiveGamePauseModalLab: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [bgm, setBgm] = useState(70);

  return (
    <div className="w-full max-w-sm mx-auto p-5 bg-slate-950 border-2 border-slate-800 rounded-2xl font-mono text-xs flex flex-col gap-3 relative overflow-hidden shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-white">Pause Modal Overlay</span>
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="px-2.5 py-1 bg-indigo-600 text-white font-bold rounded-lg text-[10px]"
        >
          {isPaused ? 'Resume Game' : 'Simulate Pause (Esc)'}
        </button>
      </div>

      {/* Simulated Game Loop Canvas */}
      <div className="relative h-44 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center gap-1 text-slate-500">
          <span className="text-3xl animate-bounce">🏃</span>
          <span className="text-[10px]">Game World Simulation Active</span>
        </div>

        {/* Dimmed Pause Overlay Modal */}
        {isPaused && (
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center p-4 z-20 animate-in fade-in">
            <h4 className="font-black text-white text-base mb-3 tracking-wider">GAME PAUSED</h4>
            <div className="w-full flex flex-col gap-2 text-center">
              <button
                onClick={() => setIsPaused(false)}
                className="py-1.5 bg-indigo-600 text-white font-bold rounded-lg text-xs"
              >
                Resume
              </button>
              <div className="flex items-center justify-between text-[10px] text-slate-400 px-1 mt-1">
                <span>BGM Volume: {bgm}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={bgm}
                onChange={(e) => setBgm(+e.target.value)}
                className="accent-indigo-500"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// =================================================================
// 678. Victory & Defeat Result Screen
// =================================================================
export const LiveGameResultScreenLab: React.FC = () => {
  const [score, setScore] = useState(0);
  const targetScore = 184500;

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 6150;
      if (current >= targetScore) {
        setScore(targetScore);
        clearInterval(interval);
      } else {
        setScore(current);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto p-5 bg-slate-950 border-2 border-slate-800 rounded-2xl font-mono text-xs flex flex-col items-center gap-4 shadow-2xl relative overflow-hidden">
      <div className="w-full text-center border-b border-slate-800 pb-2">
        <h4 className="text-amber-400 font-black text-base tracking-widest animate-bounce">
          🏆 STAGE CLEAR !
        </h4>
      </div>

      {/* S-Rank Stamp */}
      <div className="relative w-20 h-20 rounded-full border-4 border-amber-400 flex items-center justify-center bg-amber-400/10 shadow-[0_0_20px_rgba(251,191,36,0.4)]">
        <span className="font-black text-4xl text-amber-400">S</span>
      </div>

      {/* Score Counter */}
      <div className="flex flex-col items-center">
        <span className="text-[10px] text-slate-400 uppercase font-bold">Total Score</span>
        <span className="text-2xl font-black text-white tracking-wider">
          {score.toLocaleString()} PTS
        </span>
      </div>

      {/* Stars */}
      <div className="flex gap-2 text-xl text-amber-400">
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>

      <button
        onClick={() => setScore(0)}
        className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition"
      >
        Play Next Level ➔
      </button>
    </div>
  );
};

// =================================================================
// 679. Level Transition & Tip Loading Bar
// =================================================================
export const LiveTipLoadingBarLab: React.FC = () => {
  const [progress, setProgress] = useState(35);
  const tips = [
    '💡 TIP: 적이 붉은색으로 점멸할 때 반격을 가하면 그로기 상태가 됩니다.',
    '💡 TIP: 쉬프트 키를 누른 채 이동하면 부스트 대시가 발동됩니다.',
    '💡 TIP: 에너지가 부족할 때는 방패를 내리고 호흡을 가다듬으십시오.',
  ];
  const [tipIdx, setTipIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 5));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto p-5 bg-slate-950 border-2 border-slate-800 rounded-2xl font-mono text-xs flex flex-col gap-4 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-white">Level Loading Screen</span>
        <span className="text-[10px] text-cyan-400 font-bold">{progress}%</span>
      </div>

      {/* Rotating Tip */}
      <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl min-h-[50px] flex items-center justify-between">
        <p className="text-slate-300 text-xs font-sans">{tips[tipIdx]}</p>
        <button
          onClick={() => setTipIdx((i) => (i + 1) % tips.length)}
          className="text-slate-500 hover:text-white ml-2 text-sm"
        >
          ➔
        </button>
      </div>

      {/* Loading Bar */}
      <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-0.5">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

// =================================================================
// 680. Inventory Slot Grid & Item Tooltip
// =================================================================
export const LiveInventoryGridLab: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<{ name: string; rarity: string; stat: string } | null>(null);

  const items = [
    { name: 'Plasma Katana', rarity: 'mythic', icon: '⚔️', stat: 'ATK +125 (▲+35)' },
    { name: 'Aegis Shield', rarity: 'epic', icon: '🛡️', stat: 'DEF +80 (▲+15)' },
    { name: 'Nano Potion x5', rarity: 'rare', icon: '🧪', stat: 'Restore +500 HP' },
    { name: 'Cyber Boots', rarity: 'common', icon: '👢', stat: 'SPD +10%' },
  ];

  return (
    <div className="w-full max-w-sm mx-auto p-5 bg-slate-950 border-2 border-slate-800 rounded-2xl font-mono text-xs flex flex-col gap-4 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-white">Equipment Inventory Grid</span>
        <span className="text-[10px] text-slate-400">4 / 16 Slots</span>
      </div>

      {/* 4x4 Slot Matrix */}
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 16 }).map((_, i) => {
          const item = items[i];
          return (
            <div
              key={i}
              onMouseEnter={() => item && setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`h-14 rounded-xl border flex items-center justify-center text-xl transition-transform active:scale-95 cursor-pointer ${
                item
                  ? item.rarity === 'mythic'
                    ? 'border-amber-400 bg-amber-950/40 shadow-[0_0_10px_rgba(251,191,36,0.2)]'
                    : item.rarity === 'epic'
                    ? 'border-purple-500 bg-purple-950/40'
                    : 'border-cyan-500 bg-cyan-950/40'
                  : 'border-slate-800 bg-slate-900/60'
              }`}
            >
              {item?.icon}
            </div>
          );
        })}
      </div>

      {/* Item Tooltip Inspector */}
      {hoveredItem ? (
        <div className="p-3 bg-slate-900 border border-slate-700 rounded-xl flex flex-col gap-1">
          <div className="flex justify-between items-center font-bold">
            <span className="text-white text-xs">{hoveredItem.name}</span>
            <span className="text-[10px] text-amber-400 uppercase font-black">{hoveredItem.rarity}</span>
          </div>
          <span className="text-emerald-400 text-[11px] font-bold">{hoveredItem.stat}</span>
        </div>
      ) : (
        <div className="p-3 bg-slate-900/50 border border-dashed border-slate-800 rounded-xl text-center text-slate-500 text-[11px]">
          아이템 슬롯에 마우스를 올려 세부 능력치를 확인하세요.
        </div>
      )}
    </div>
  );
};

// =================================================================
// 681. Currency & Resource Ledger HUD
// =================================================================
export const LiveCurrencyLedgerLab: React.FC = () => {
  const [gold, setGold] = useState(1250);
  const [gems, setGems] = useState(45);
  const [delta, setDelta] = useState<string | null>(null);

  const addGold = (amount: number) => {
    setGold((g) => g + amount);
    setDelta(`+${amount} Gold`);
    setTimeout(() => setDelta(null), 1000);
  };

  return (
    <div className="w-full max-w-sm mx-auto p-5 bg-slate-950 border-2 border-slate-800 rounded-2xl font-mono text-xs flex flex-col gap-4 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-white">Currency Ledger HUD</span>
        {delta && <span className="text-emerald-400 font-bold animate-bounce">{delta}</span>}
      </div>

      {/* Currency Strip */}
      <div className="flex items-center justify-around p-3 bg-slate-900 rounded-xl border border-slate-800">
        <div className="flex items-center gap-2">
          <Coins className="w-5 h-5 text-amber-400" />
          <span className="font-black text-white text-sm">{gold.toLocaleString()}</span>
        </div>
        <div className="w-[1px] h-6 bg-slate-800" />
        <div className="flex items-center gap-2">
          <Gem className="w-5 h-5 text-cyan-400" />
          <span className="font-black text-white text-sm">{gems}</span>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => addGold(200)}
          className="flex-1 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl transition"
        >
          +200 Gold
        </button>
        <button
          onClick={() => {
            setGems((g) => g + 5);
            setDelta('+5 Gems');
            setTimeout(() => setDelta(null), 1000);
          }}
          className="flex-1 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition"
        >
          +5 Gems
        </button>
      </div>
    </div>
  );
};

// =================================================================
// 682. Localization Length Budget Gauge (70% Max-Length Rule)
// =================================================================
export const LiveL10nLengthGaugeLab: React.FC = () => {
  const [text, setText] = useState('시작하기');
  const maxLen = 20;
  const currentLen = text.length;
  const ratio = (currentLen / maxLen) * 100;
  const isOverBudget = ratio > 70;
  const isOverflow = ratio > 100;

  return (
    <div className="w-full max-w-md mx-auto p-5 bg-slate-950 border-2 border-slate-800 rounded-2xl font-mono text-xs flex flex-col gap-3.5 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-white flex items-center gap-1.5">
          <Globe className="w-4 h-4 text-indigo-400" />
          L10n 70% Length Budget
        </span>
        <span className={`text-[10px] font-bold ${isOverflow ? 'text-rose-400' : isOverBudget ? 'text-amber-400' : 'text-emerald-400'}`}>
          {currentLen} / {maxLen} ({Math.round(ratio)}%)
        </span>
      </div>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white font-bold text-xs"
        placeholder="Enter UI String..."
      />

      {/* Length Budget Bar */}
      <div className="relative w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
        <div
          className={`h-full transition-all duration-150 ${isOverflow ? 'bg-rose-500' : isOverBudget ? 'bg-amber-400' : 'bg-emerald-500'}`}
          style={{ width: `${Math.min(100, ratio)}%` }}
        />
        {/* 70% Threshold Line */}
        <div className="absolute top-0 bottom-0 left-[70%] w-[2px] bg-red-400/80 pointer-events-none" />
      </div>

      {/* Preset Buttons */}
      <div className="flex gap-1.5 text-[10px]">
        <button
          onClick={() => setText('시작하기')}
          className="px-2 py-1 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded border border-slate-800"
        >
          KO (4)
        </button>
        <button
          onClick={() => setText('Start Adventure')}
          className="px-2 py-1 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded border border-slate-800"
        >
          EN (15)
        </button>
        <button
          onClick={() => setText('Abenteuer beginnen')}
          className="px-2 py-1 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded border border-slate-800"
        >
          DE (18 ⚠️)
        </button>
      </div>

      {isOverBudget && (
        <div className="p-2.5 bg-amber-950/40 border border-amber-500/40 rounded-xl text-[11px] text-amber-300">
          ⚠️ 70% 예산 초과! 번역 팽창(영어/독일어) 시 버튼 텍스트가 잘릴 위험이 있습니다.
        </div>
      )}
    </div>
  );
};

// =================================================================
// 683. Placeholder Token Protector
// =================================================================
export const LivePlaceholderProtectorLab: React.FC = () => {
  const [playerName, setPlayerName] = useState('Alex');
  const [count, setCount] = useState(5);

  return (
    <div className="w-full max-w-md mx-auto p-5 bg-slate-950 border-2 border-slate-800 rounded-2xl font-mono text-xs flex flex-col gap-3.5 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-white flex items-center gap-1.5">
          <Tag className="w-4 h-4 text-cyan-400" />
          Placeholder Token Protector
        </span>
        <span className="text-[10px] text-cyan-400 font-bold">Atomic Token</span>
      </div>

      {/* Protected Token Template Box */}
      <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex flex-wrap items-center gap-1.5 text-xs text-slate-200">
        <span>환영합니다</span>
        <span className="px-2 py-0.5 bg-cyan-950 border border-cyan-400 text-cyan-300 font-bold rounded-md shadow-xs">
          {'{player_name}'}
        </span>
        <span>님, 남은 퀘스트는</span>
        <span className="px-2 py-0.5 bg-cyan-950 border border-cyan-400 text-cyan-300 font-bold rounded-md shadow-xs">
          {'{count}'}
        </span>
        <span>개입니다.</span>
      </div>

      {/* Simulated Live Output */}
      <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex flex-col gap-1.5">
        <span className="text-[10px] text-slate-500 uppercase font-bold">Runtime Replacement Preview</span>
        <p className="text-white font-sans text-sm">
          환영합니다 <strong className="text-cyan-400">{playerName}</strong>님, 남은 퀘스트는 <strong className="text-amber-400">{count}</strong>개입니다.
        </p>
      </div>

      {/* Interactive Controls */}
      <div className="flex gap-2">
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Player Name"
          className="flex-1 p-2 bg-slate-900 border border-slate-700 rounded-lg text-white"
        />
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
          className="w-20 p-2 bg-slate-900 border border-slate-700 rounded-lg text-white"
        />
      </div>
    </div>
  );
};

// =================================================================
// 684. Gentle Words Real-time Safety Filter
// =================================================================
export const LiveGentleWordsFilterLab: React.FC = () => {
  const [chat, setChat] = useState('');
  const badWords = ['바보', '멍청이', 'trash', 'noob', 'idiot'];

  const containsBad = badWords.some((w) => chat.toLowerCase().includes(w));

  const getFilteredText = () => {
    let result = chat;
    badWords.forEach((w) => {
      const reg = new RegExp(w, 'gi');
      result = result.replace(reg, '***');
    });
    return result;
  };

  return (
    <div className="w-full max-w-md mx-auto p-5 bg-slate-950 border-2 border-slate-800 rounded-2xl font-mono text-xs flex flex-col gap-3.5 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-white flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          Gentle Words Safety Filter
        </span>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
          containsBad ? 'bg-rose-950 text-rose-300 border-rose-500/40' : 'bg-emerald-950 text-emerald-300 border-emerald-500/40'
        }`}>
          {containsBad ? '⚠️ 비속어 감지됨' : '🛡️ 클린 상태'}
        </span>
      </div>

      <input
        type="text"
        value={chat}
        onChange={(e) => setChat(e.target.value)}
        placeholder="채팅 메시지를 입력하세요 (예: 바보, trash 테스트)"
        className={`w-full p-2.5 bg-slate-900 border rounded-xl text-white font-bold text-xs transition-colors ${
          containsBad ? 'border-rose-500' : 'border-slate-700'
        }`}
      />

      {/* Filtered Result */}
      <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl flex flex-col gap-1">
        <span className="text-[10px] text-slate-500 uppercase font-bold">Real-time Masked Output</span>
        <p className="text-slate-200 text-sm font-sans">{getFilteredText() || '(채팅 미리보기)'}</p>
      </div>

      <div className="flex gap-1.5 text-[10px]">
        <button
          onClick={() => setChat('오늘 레이드 정말 수고하셨습니다!')}
          className="px-2 py-1 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded border border-slate-800"
        >
          클린 텍스트 예시
        </button>
        <button
          onClick={() => setChat('이런 바보 같은 팀원 때문에 졌네 noob')}
          className="px-2 py-1 bg-slate-900 hover:bg-slate-800 text-rose-300 rounded border border-slate-800"
        >
          비속어 감지 테스트
        </button>
      </div>
    </div>
  );
};
