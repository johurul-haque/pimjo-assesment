import { Dividend } from '@/components/layouts/dividend';
import { Featured } from '@/components/layouts/featured';
import { Performance } from '@/components/layouts/performance';

export default function Home() {
  return (
    <main>
      <Featured />
      <div className="mt-6 lg:grid grid-cols-5 gap-6 min-h-[776px] grid-rows-7 max-lg:space-y-6">
        <Performance />
        <Dividend />
      </div>
    </main>
  );
}
