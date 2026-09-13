import React from 'react'

const HomeBaner = () => {
  return (
    <div><section className="relative overflow-hidden bg-slate-900 py-24 sm:py-32 text-white">
      {/* Background glow effects */}
      <div 
        aria-hidden="true" 
        className="absolute -top-40 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-80"
      >
        <div 
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }} 
          className="aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-indigo-500 to-emerald-400 opacity-20"
        />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-3.5 py-1 text-sm text-slate-300 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          v2.0 is now live
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-balance">
          Build faster with modern tools designed for scale
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto text-balance">
          Everything you need to ship production-ready web apps in minutes. Reliable, flexible, and completely customizable to your stack.
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex items-center justify-center gap-x-4">
          <a
            href="#get-started"
            className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
          <a
            href="#demo"
            className="rounded-lg border border-slate-700 bg-slate-800/40 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800 transition-colors"
          >
            Live demo <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section></div>
  )
}

export default HomeBaner