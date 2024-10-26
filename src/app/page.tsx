import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex gap-2 flex-1 h-full">
      <div className="w-[var(--left-sidebar-width)]">
        <Sidebar />
      </div>
      <div className="flex-1 rounded-lg bg-[var(--gray-background)]">Content</div>
    </div>
  );
}
