import { Dividend } from '@/components/layouts/dividend';
import { Featured } from '@/components/layouts/featured';
import { Performance } from '@/components/layouts/performance';
import { TrendingStocks } from '@/components/layouts/trending-stocks';
import { WatchList } from '@/components/layouts/watchlist';

export default function Home() {
  return (
    <main className="max-w-[1800px] w-full mx-auto grid">
      <Featured />
      <div className="mt-6 lg:grid grid-cols-5 gap-6 min-h-[776px] grid-rows-5 max-lg:space-y-6 overflow-hidden">
        <Performance className="col-span-3 row-span-5" />
        <Dividend className="col-span-2 row-span-3" />

        <TrendingStocks className="col-span-3 row-span-2" />
        <WatchList className="col-start-4 col-end-6 row-start-4 row-end-8" />
      </div>
    </main>
  );
}
