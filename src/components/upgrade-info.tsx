import Link from 'next/link';

export function UpgradeInfo() {
  return (
    <div className="bg-[#F9FAFB] rounded-[16px] text-center px-4 py-5 mt-auto">
      <h3 className="font-semibold mb-1">TailAdmin Pro</h3>

      <p className="text-light-gray">
        Get all dashboard and 300+ essential UI elements
      </p>

      <Link
        href={'/'}
        className="py-2 rounded-md bg-accent text-white block mt-2.5"
      >
        Upgrade Plan
      </Link>
    </div>
  );
}
