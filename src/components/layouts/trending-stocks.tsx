import { cn } from '@/lib/utils';

export function TrendingStocks({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        'rounded-2xl border p-6 flex flex-col',
        className
      )}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg font-semibold mb-1">Trending Stocks</h2>
      </div>
    </section>
  );
}
