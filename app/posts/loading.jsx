export default function loading() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
            <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 rounded-full border-4 border-gray-400 border-t-transparent animate-spin" />
                <p className="text-gray-500 dark:text-gray-400 text-sm">Loading...</p>
            </div>
        </div>
    )
}