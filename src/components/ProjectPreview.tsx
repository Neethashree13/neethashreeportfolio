import { Globe, Sparkles, Smartphone, Search, ArrowRight } from 'lucide-react';

interface ProjectPreviewProps {
  slug: string;
  name: string;
}

/**
 * Renders a neutral, branded placeholder visual for each project.
 * These are clearly labeled as project previews and are designed
 * to be easily replaced with real screenshots later.
 */
export default function ProjectPreview({ slug, name }: ProjectPreviewProps) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-ink-950">
      {/* Background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50" />
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          slug === 'cluevra'
            ? 'from-accent-900/20 via-ink-950 to-ink-950'
            : slug === 'comicverse-ai'
            ? 'from-purple-900/10 via-ink-950 to-ink-950'
            : 'from-blue-900/10 via-ink-950 to-ink-950'
        }`}
      />

      {/* Content per project */}
      <div className="relative flex h-full w-full items-center justify-center p-8">
        {slug === 'cluevra' && <CluevraPreview />}
        {slug === 'comicverse-ai' && <ComicVersePreview />}
        {slug === 'flashcart-ai' && <FlashCartPreview />}
      </div>

      {/* Label */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg border border-ink-700/60 bg-ink-950/80 px-3 py-1.5 backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
        <span className="font-mono text-xs text-ink-400">Project Preview — {name}</span>
      </div>
    </div>
  );
}

function CluevraPreview() {
  const mockResults = ['CLUE', 'LURE', 'CELL', 'RULE', 'CURE'];
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      {/* Search bar mock */}
      <div className="flex items-center gap-2 rounded-xl border border-ink-700 bg-ink-900/80 px-4 py-3">
        <Search className="h-4 w-4 text-accent-400" />
        <span className="font-mono text-sm text-ink-300">letters: c-l-u-e-v-r-a</span>
        <span className="ml-auto font-mono text-xs text-accent-400">168,551 words</span>
      </div>
      {/* Results mock */}
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
        {mockResults.map((word, i) => (
          <div
            key={word}
            className="flex flex-col items-center gap-1 rounded-lg border border-ink-800 bg-ink-900/60 px-2 py-3"
            style={{
              animation: `fadeInUp 0.4s ease-out ${i * 80}ms forwards`,
              opacity: 0,
            }}
          >
            <span className="font-display text-sm font-semibold text-ink-100">
              {word}
            </span>
            <span className="font-mono text-[10px] text-accent-400">
              {word.length} pts
            </span>
          </div>
        ))}
      </div>
      {/* Browser frame hint */}
      <div className="mt-2 flex items-center gap-2 rounded-lg border border-ink-800 bg-ink-900/40 px-3 py-2">
        <Globe className="h-3.5 w-3.5 text-ink-500" />
        <span className="font-mono text-xs text-ink-500">cluevra.com</span>
      </div>
    </div>
  );
}

function ComicVersePreview() {
  const panels = [
    { label: 'Scene 01', aspect: 'aspect-square' },
    { label: 'Scene 02', aspect: 'aspect-square' },
    { label: 'Scene 03', aspect: 'aspect-square' },
    { label: 'Scene 04', aspect: 'aspect-square' },
  ];
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center gap-2 rounded-xl border border-ink-700 bg-ink-900/80 px-4 py-3">
        <Sparkles className="h-4 w-4 text-accent-400" />
        <span className="font-mono text-sm text-ink-300">"A detective in a neon city..."</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {panels.map((panel, i) => (
          <div
            key={panel.label}
            className={`relative ${panel.aspect} overflow-hidden rounded-lg border border-ink-800 bg-gradient-to-br from-ink-800/40 to-ink-900/80`}
            style={{
              animation: `scaleIn 0.5s ease-out ${i * 100}ms forwards`,
              opacity: 0,
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
              <Sparkles className="h-5 w-5 text-accent-400/40" />
              <span className="font-mono text-[10px] text-ink-500">{panel.label}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-ink-800 bg-ink-900/40 px-3 py-2">
        <span className="font-mono text-xs text-ink-500">Story → Characters → Panels → Video</span>
        <ArrowRight className="h-3 w-3 text-accent-400 ml-auto" />
      </div>
    </div>
  );
}

function FlashCartPreview() {
  const screens = ['Home', 'Cart', 'AI', 'Track'];
  return (
    <div className="flex items-end justify-center gap-3">
      {screens.map((screen, i) => (
        <div
          key={screen}
          className="relative flex flex-col items-center"
          style={{
            animation: `fadeInUp 0.5s ease-out ${i * 100}ms forwards`,
            opacity: 0,
          }}
        >
          <div
            className={`relative w-16 overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/80 sm:w-18 ${
              i === 0 ? 'h-32 sm:h-36' : 'h-28 sm:h-32'
            }`}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-start gap-1 p-2 pt-3">
              <Smartphone className="h-4 w-4 text-accent-400/60" />
              <div className="h-1 w-8 rounded-full bg-ink-700" />
              <div className="h-1 w-6 rounded-full bg-ink-700/60" />
              {screen === 'AI' && (
                <Sparkles className="mt-1 h-3.5 w-3.5 text-accent-400/50" />
              )}
              {screen === 'Track' && (
                <div className="mt-1 flex flex-col items-center gap-0.5">
                  <div className="h-1 w-6 rounded-full bg-accent-500/40" />
                  <div className="h-1 w-6 rounded-full bg-ink-700" />
                  <div className="h-1 w-6 rounded-full bg-ink-700/60" />
                </div>
              )}
            </div>
          </div>
          <span className="mt-2 font-mono text-[10px] text-ink-500">{screen}</span>
        </div>
      ))}
    </div>
  );
}
