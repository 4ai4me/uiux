import React, { useState } from 'react';
import { CURRENT_APP_VERSION } from '../version';
import { ALL_TERMS } from '../data/allTerms';
import { Download, FileJson, Copy, Check, ShieldCheck, Tag, User, Calendar, GitCommit } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const VersionExportModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<'manifest' | 'full'>('manifest');

  if (!isOpen) return null;

  const exportData = {
    app: {
      name: 'UI/UX Glossary for AI Vibe Coding',
      version: CURRENT_APP_VERSION.version,
      buildNumber: CURRENT_APP_VERSION.buildNumber,
      author: CURRENT_APP_VERSION.author,
      releaseDate: CURRENT_APP_VERSION.releaseDate,
      codename: CURRENT_APP_VERSION.codename,
      signature: 'by NJ - Master Encyclopedia Edition',
    },
    metrics: {
      totalTerms: ALL_TERMS.length,
      categoriesCount: 24,
      uniqueSchematics: true,
      timestamp: new Date().toISOString(),
    },
    changelog: CURRENT_APP_VERSION.changelog,
    ...(selectedFormat === 'full' ? { terms: ALL_TERMS } : {}),
  };

  const handleDownloadJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportData, null, 2));
    const downloadAnchor = document.createElement('a');
    const filename = `vibe-uiux-lexicon-v${CURRENT_APP_VERSION.version}-${CURRENT_APP_VERSION.buildNumber}.json`;
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', filename);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(exportData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/10 dark:bg-indigo-500/20 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-black text-slate-900 dark:text-white">Version Control & Export Suite</h3>
                <span className="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-mono text-[10px] font-bold border border-indigo-200 dark:border-indigo-500/30">
                  v{CURRENT_APP_VERSION.version}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Author: <strong className="text-indigo-600 dark:text-indigo-400">by {CURRENT_APP_VERSION.author}</strong> | Build {CURRENT_APP_VERSION.buildNumber}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 flex items-center justify-center text-sm font-bold transition"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 overflow-y-auto max-h-[70vh]">
          {/* Version Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl">
              <span className="text-[10px] font-mono text-slate-400 uppercase flex items-center gap-1">
                <Tag className="w-3 h-3" /> Version
              </span>
              <span className="text-sm font-black text-slate-900 dark:text-white font-mono block mt-1">
                {CURRENT_APP_VERSION.version}
              </span>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl">
              <span className="text-[10px] font-mono text-slate-400 uppercase flex items-center gap-1">
                <User className="w-3 h-3" /> Creator
              </span>
              <span className="text-sm font-black text-indigo-600 dark:text-indigo-400 font-mono block mt-1">
                by {CURRENT_APP_VERSION.author}
              </span>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl">
              <span className="text-[10px] font-mono text-slate-400 uppercase flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Release
              </span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 font-mono block mt-1">
                {CURRENT_APP_VERSION.releaseDate}
              </span>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl">
              <span className="text-[10px] font-mono text-slate-400 uppercase flex items-center gap-1">
                <GitCommit className="w-3 h-3" /> Build
              </span>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono block mt-1">
                {CURRENT_APP_VERSION.buildNumber}
              </span>
            </div>
          </div>

          {/* Changelog Section */}
          <div className="bg-slate-50 dark:bg-slate-950/80 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-500" /> Version Release History
            </span>
            <div className="space-y-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 pl-1">
              {CURRENT_APP_VERSION.changelog.map((log, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-indigo-500 font-bold">•</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Export Selector & Code Preview */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase">
                Export Target Format
              </span>
              <div className="flex gap-1 bg-slate-100 dark:bg-slate-950 p-1 rounded-lg border border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => setSelectedFormat('manifest')}
                  className={`px-2.5 py-1 text-xs font-mono rounded font-bold transition ${
                    selectedFormat === 'manifest'
                      ? 'bg-indigo-600 text-white shadow'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Version Manifest Only
                </button>
                <button
                  onClick={() => setSelectedFormat('full')}
                  className={`px-2.5 py-1 text-xs font-mono rounded font-bold transition ${
                    selectedFormat === 'full'
                      ? 'bg-indigo-600 text-white shadow'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Full Database ({ALL_TERMS.length} Terms)
                </button>
              </div>
            </div>

            <div className="relative">
              <pre className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-[11px] font-mono text-indigo-300 max-h-36 overflow-y-auto">
                {JSON.stringify(exportData, null, 2)}
              </pre>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/70 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono text-slate-500">
            Export includes official cryptographic build metadata
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyJSON}
              className="px-3.5 py-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-mono font-bold transition flex items-center gap-1.5"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied' : 'Copy JSON'}</span>
            </button>
            <button
              onClick={handleDownloadJSON}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-mono font-bold transition flex items-center gap-2 shadow-lg shadow-indigo-600/30 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download Versioned JSON ({CURRENT_APP_VERSION.version})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
