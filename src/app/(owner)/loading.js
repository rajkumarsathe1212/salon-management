
// src/app/(owner)/owner/loading.js
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      <p className="mt-4 text-gray-500 font-medium">Loading Content...</p>
    </div>
  );
}
