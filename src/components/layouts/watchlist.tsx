import apple from '@/assets/company-logo/apple.svg';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { formatNumber } from '@/lib/format-number';
import { cn } from '@/lib/utils';
import { ArrowDown, ArrowUp, EllipsisVertical } from 'lucide-react';
import Image from 'next/image';

export function WatchList({ className }: { className?: string }) {
  const data = getData();

  return (
    <section className={cn('rounded-2xl border', className)}>
      <div className="flex justify-between items-center p-6">
        <h2 className="text-lg font-semibold mb-1">My Watchlist</h2>

        <button>
          <span className="sr-only">More</span>
          <EllipsisVertical className="text-light-gray" />
        </button>
      </div>

      <ScrollArea className="h-[400px] px-6 mb-6">
        <ol className="divide-y">
          {[...getData(), ...getData()].map((val, i) => (
            <li
              className={cn('flex justify-between py-4', i === 0 && 'pt-0')}
              key={i}
            >
              <figure className="flex items-center gap-2">
                <Image
                  src={val.img}
                  className="object-cover rounded-full size-9"
                  width={200}
                  height={200}
                  alt=""
                />

                <figcaption>
                  <h3 className="font-medium uppercase">{val.name}</h3>
                  <div className="text-xs text-light-gray">{val.company}</div>
                </figcaption>
              </figure>

              <dl className="text-right">
                <dt className="text-sm font-medium mb-1">
                  ${formatNumber(val.amount)}
                </dt>
                <dd className="sr-only">Stock price</dd>

                <dt
                  className={cn(
                    'rounded-full flex items-center justify-end gap-1 [&>svg]:size-4 font-medium',
                    {
                      'text-[#027A48]': val.increase,
                      'text-[#B42318]': val.decrease,
                    }
                  )}
                >
                  {val.increase ? <ArrowUp /> : <ArrowDown />}
                  <span className="text-xs">
                    {val.increase || val.decrease}%
                  </span>
                </dt>
                <dd className="sr-only">
                  Value {val.increase ? 'increased' : 'decreased'} by{' '}
                  {val.increase || val.decrease}%
                </dd>
              </dl>
            </li>
          ))}
        </ol>
        <ScrollBar />
      </ScrollArea>
    </section>
  );
}

function getData() {
  return [
    {
      name: 'AAPL',
      img: apple,
      company: 'Apple, Inc',
      amount: 4008.65,
      increase: 11.01,
    },
    {
      name: 'SPOT',
      img: null,
      company: 'Spotify.com',
      amount: 11689,
      increase: 9.48,
    },
    {
      name: 'ABNB',
      img: null,
      company: 'Airbnb, Inc',
      amount: 32227,
      decrease: 0.29,
    },
    {
      name: 'ENVT',
      img: null,
      company: 'Envato, Inc',
      amount: 13895,
      increase: 3.79,
    },
    {
      name: 'QIWI',
      img: null,
      company: 'qiwi.com, Inc',
      amount: 4008.65,
      increase: 4.52,
    },
  ];
}
