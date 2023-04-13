import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="py-4 text-center text-slate-300 border-2 border-gray-50">
      <Link href={"/user"}>Sidebar</Link>
    </div>
  );
}
