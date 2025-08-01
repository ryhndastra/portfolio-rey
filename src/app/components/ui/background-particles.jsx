export default function BackgroundParticles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-1/4 left-1/4 animate-ping opacity-20"></div>
      <div className="absolute w-1 h-1 bg-purple-400 rounded-full top-3/4 right-1/4 animate-pulse opacity-30"></div>
      <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-25"></div>
      <div className="absolute w-1 h-1 delay-1000 bg-green-400 rounded-full top-1/3 right-1/3 animate-ping opacity-20"></div>
      <div className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-25 bottom-1/4 left-1/2 animate-pulse delay-2000"></div>
    </div>
  );
}
