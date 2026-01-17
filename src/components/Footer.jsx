export default function Footer() {
  return (
    <footer className="border-t border-[#333] bg-[#0a0a0a] p-2 text-[10px] md:text-xs text-gray-500 flex justify-between items-center select-none relative ">
      <div>STATUS: OPERATIONAL
      </div>
      <div className="flex gap-4">
        <span>CPU: 12%</span>
        <span>MEM: 32GB</span>
        <span>NET: 10Mbps</span>
      </div>

    </footer>
  );
}