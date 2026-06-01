export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Leaking Secrets<br />Into AI Prompts
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Prompt Context Leak Scanner detects API keys, passwords, and PII in your prompts before they reach ChatGPT, Claude, or any AI service — in real time.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Scanning — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Demo box */}
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#8b949e] mb-3 uppercase tracking-widest font-semibold">Live Scanner Preview</p>
          <div className="font-mono text-sm text-[#c9d1d9] bg-[#0d1117] rounded-lg p-4 leading-relaxed">
            <span className="text-[#8b949e]">Prompt: </span>
            <span>"Summarize this report. DB_PASSWORD=</span>
            <span className="bg-red-900 text-red-300 px-1 rounded">s3cr3t123</span>
            <span>"</span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
            <span className="text-red-400 text-sm font-medium">2 issues detected: ENV secret, hardcoded password</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Real-time prompt scanning',
              'API key & secret detection',
              'PII detection (emails, SSNs, cards)',
              'Browser extension for ChatGPT & Claude',
              'Scan history dashboard',
              'Team management (up to 10 seats)',
              'Slack & webhook alerts',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the scanner detect secrets?</h3>
            <p className="text-[#8b949e] text-sm">We use a combination of high-accuracy regex patterns (for API keys, tokens, passwords) and lightweight ML classifiers to catch PII like emails, phone numbers, and credit card numbers before your prompt leaves the browser.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Does my prompt data get stored on your servers?</h3>
            <p className="text-[#8b949e] text-sm">No. Scanning runs locally in your browser via the extension. Only anonymized scan metadata (issue type, severity) is sent to your dashboard — never the prompt content itself.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which AI tools does the browser extension support?</h3>
            <p className="text-[#8b949e] text-sm">The extension currently supports ChatGPT, Claude, Gemini, and Perplexity. Any text input on those sites is scanned automatically. Custom integrations are available via our REST API.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Prompt Context Leak Scanner. All rights reserved.
      </footer>
    </main>
  )
}
