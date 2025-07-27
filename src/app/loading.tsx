import { Film } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background animate-slide-out-left delay-500 duration-500 forwards">
      <div className="flex items-center gap-4">
        <Film className="h-12 w-12 animate-pulse text-primary" />
        <span className="text-2xl font-headline font-bold">CineStream</span>
      </div>
      <style>
        {`
          @keyframes slide-out-left {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-100%);
            }
          }
          .animate-slide-out-left {
            animation-name: slide-out-left;
            animation-fill-mode: forwards;
          }
        `}
      </style>
    </div>
  );
}
