import amazon from '@/assets/company-logo/amazon-alt.svg';
import apple from '@/assets/company-logo/apple.svg';
import paypal from '@/assets/company-logo/paypal.svg';
import tesla from '@/assets/company-logo/tesla.svg';
import { formatNumber } from '@/lib/format-number';
import { cn } from '@/lib/utils';
import { ArrowDown, ArrowUp } from 'lucide-react';
import Image from 'next/image';

const STOCK_DATA = [
  {
    name: 'AAPL',
    company: 'Apple, Inc',
    logo: apple,
    price: 1232,
    rise: 11.01,
  },
  {
    name: 'PYPL',
    company: 'Paypal, Inc',
    logo: paypal,
    price: 965,
    decrease: 9.05,
  },
  {
    name: 'TSLA',
    company: 'Tesla, Inc',
    logo: tesla,
    price: 1232,
    rise: 11.01,
  },
  {
    name: 'AMZN',
    company: 'Amazone.com, Inc',
    logo: amazon,
    price: 1232,
    rise: 11.01,
  },
];

export function Featured() {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-6">
      {STOCK_DATA.map((data, i) => (
        <article key={i} className="rounded-[16px] border p-6">
          <figure className="flex items-center">
            <Image
              src={data.logo}
              width={500}
              height={500}
              className="size-8 rounded-full object-cover mr-3"
              alt=""
            />

            <figcaption>
              <h3 className="font-semibold">{data.name}</h3>
              <p className="text-light-gray">{data.company}</p>
            </figcaption>
          </figure>

          <dl className="mt-6 flex justify-between">
            <dt className="text-lg font-semibold">
              ${formatNumber(data.price)}
            </dt>
            <dd className="sr-only">Stock price</dd>

            <dt
              className={cn(
                'rounded-full px-3 py-1 flex items-center gap-1 [&>svg]:size-5 font-medium',
                {
                  'text-[#027A48] bg-[#ECFDF3]': data.rise,
                  'text-[#B42318] bg-[#FEF3F2]': data.decrease,
                }
              )}
            >
              {data.rise ? <ArrowUp /> : <ArrowDown />}
              <span>{data.rise || data.decrease}%</span>
            </dt>
            <dd className="sr-only">
              Value {data.rise ? 'increased' : 'decreased'} by{' '}
              {data.rise || data.decrease}%
            </dd>
          </dl>
        </article>
      ))}
    </section>
  );
}
