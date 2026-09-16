import React from 'react';

// Sample data for the cards
const features = [
  {
    id: 1,
    tag: 'Performance',
    title: 'Lightning-Fast Builds',
    description:
      'Optimized with modern bundling pipelines to ensure minimal overhead and instant page reloads.',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  {
    id: 2,
    tag: 'Security',
    title: 'Enterprise Encryption',
    description:
      'Built-in end-to-end security layers that keep your user data safe and compliant with privacy standards.',
    imageUrl:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  {
    id: 3,
    tag: 'Scalability',
    title: 'Zero-Config Deployments',
    description:
      'Scale horizontally across global edge regions automatically without touching server configurations.',
    imageUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
];

// Single Card Component
function Card({ item }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/10">
      {/* Card Image */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-800">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-4 top-4">
          <span className="inline-block rounded-md bg-slate-900/80 px-2.5 py-1 text-xs font-medium text-indigo-400 backdrop-blur">
            {item.tag}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            {item.description}
          </p>
        </div>

        {/* Card Footer / Link */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <a
            href={item.link}
            className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Learn more
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

// Section with Grid
export default function FeatureCards() {
  return (
    <section className="bg-slate-950 py-20 px-6 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Engineered from the ground up for developer productivity and seamless user experiences.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}