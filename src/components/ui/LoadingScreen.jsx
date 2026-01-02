
// src/components/ui/LoadingScreen.jsx
export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
      {/* Outer spinning ring */}
      <div className="w-12 h-12 border-4 border-slate-100 border-t-indigo-600 rounded-full animate-spin"></div>
      
      {/* Subtle text below the spinner */}
      <p className="mt-4 text-sm font-bold text-slate-500 tracking-widest uppercase animate-pulse">
        Initializing...
      </p>
    </div>
  );
}
