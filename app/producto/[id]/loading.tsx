export default function ProductoLoading() {
  return (
    <div className="min-h-screen py-16 px-6 max-w-5xl mx-auto">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2 mb-10">
        <div className="h-4 w-10 bg-monnama-surface rounded animate-pulse" />
        <div className="h-4 w-2 bg-monnama-surface rounded animate-pulse" />
        <div className="h-4 w-16 bg-monnama-surface rounded animate-pulse" />
        <div className="h-4 w-2 bg-monnama-surface rounded animate-pulse" />
        <div className="h-4 w-32 bg-monnama-surface rounded animate-pulse" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
        {/* Imagen skeleton */}
        <div className="aspect-square bg-monnama-surface rounded-2xl animate-pulse" />

        {/* Info skeleton */}
        <div className="flex flex-col justify-center gap-4">
          <div className="h-6 w-20 bg-monnama-surface rounded-full animate-pulse" />
          <div className="h-10 w-3/4 bg-monnama-surface rounded-xl animate-pulse" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-monnama-surface rounded animate-pulse" />
            <div className="h-4 w-full bg-monnama-surface rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-monnama-surface rounded animate-pulse" />
          </div>
          <div className="h-9 w-24 bg-monnama-surface rounded-xl animate-pulse" />
          <div className="h-14 w-full bg-monnama-surface rounded-xl animate-pulse mt-2" />
          <div className="h-14 w-full bg-monnama-surface rounded-xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}
