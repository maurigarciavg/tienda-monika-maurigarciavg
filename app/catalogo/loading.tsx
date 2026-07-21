export default function CatalogoLoading() {
  return (
    <div className="min-h-screen py-16 px-6 max-w-6xl mx-auto">
      {/* Header skeleton */}
      <div className="mb-12">
        <div className="h-12 w-48 bg-monnama-surface rounded-xl animate-pulse mb-3" />
        <div className="h-5 w-80 bg-monnama-surface rounded-lg animate-pulse" />
      </div>

      {/* Filters skeleton */}
      <div className="flex gap-3 mb-10 flex-wrap">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-9 w-24 bg-monnama-surface rounded-full animate-pulse"
          />
        ))}
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl overflow-hidden">
            <div className="aspect-square bg-monnama-surface animate-pulse" />
            <div className="p-5 space-y-2">
              <div className="h-5 w-3/4 bg-monnama-surface rounded animate-pulse" />
              <div className="h-5 w-1/4 bg-monnama-surface rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
