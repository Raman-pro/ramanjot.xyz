import { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Instagram, Loader2 } from 'lucide-react';

function App() {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const fullText = "portfolio.init()...";
  const subtitle = "Building something amazing. Check back soon!";

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [isLoading]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4" />
          <p className="text-cyan-400 font-mono text-lg">Initializing...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-4xl w-full">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-4 bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/20">
            <Terminal className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-mono font-semibold">ramanjot.xyz</span>
          </div>
        </div>

        <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-2xl border border-cyan-500/20 overflow-hidden">
          <div className="bg-slate-900/90 px-4 py-3 flex items-center gap-2 border-b border-cyan-500/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-4 text-slate-400 text-sm font-mono">terminal</span>
          </div>

          <div className="p-8 md:p-12">
            <div className="font-mono">
              <div className="flex items-center mb-2">
                <span className="text-cyan-400 mr-2">$</span>
                <span className="text-green-400">{text}</span>
                <span className={`inline-block w-2 h-5 bg-cyan-400 ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
              </div>

              {text.length === fullText.length && (
                <div className="mt-6 space-y-4 animate-fade-in">
                  <div className="text-slate-300 text-lg">{subtitle}</div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="text-yellow-400">⚠</span>
                    <span>Status: Under Construction</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="text-green-400">✓</span>
                    <span>Expected completion: Coming soon</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-6 font-mono text-sm">Connect with me</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Raman-pro"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:scale-105"
            >
              <Github className="w-8 h-8 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-slate-400 text-sm font-mono group-hover:text-cyan-400 transition-colors">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ramanjot-singh-53783226b/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:scale-105"
            >
              <Linkedin className="w-8 h-8 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-slate-400 text-sm font-mono group-hover:text-cyan-400 transition-colors">LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/ramanjots16/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:scale-105"
            >
              <Instagram className="w-8 h-8 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-slate-400 text-sm font-mono group-hover:text-cyan-400 transition-colors">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
