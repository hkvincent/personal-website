export default function PostSkeleton() {
  return (
    <div className="max-w-2xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded-md w-3/4" />
        </div>
        <div className="flex items-center space-x-4 animate-pulse">
          <div className="h-10 w-10 bg-gray-200 rounded-full" />
          <div>
            <div className="h-4 bg-gray-200 rounded-md w-32" />
            <div className="h-4 bg-gray-200 rounded-md w-24 mt-2" />
          </div>
        </div>
        <div className="space-y-4 animate-pulse">
          <div className="h-4 bg-gray-200 rounded-md" />
          <div className="h-4 bg-gray-200 rounded-md" />
          <div className="h-4 bg-gray-200 rounded-md" />
          <div className="h-4 bg-gray-200 rounded-md" />
          <div className="h-4 bg-gray-200 rounded-md" />
        </div>
      </div>
    </div>
  )
}