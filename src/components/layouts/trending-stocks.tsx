import { tesla } from '@/assets/company-logo';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { formatNumber } from '@/lib/format-number';
import { cn } from '@/lib/utils';
import { ArrowDown, ArrowUp } from 'lucide-react';
import Image from 'next/image';

export function TrendingStocks({ className }: { className?: string }) {
  return (
    <section className={cn('rounded-2xl border p-6', className)}>
      <Carousel
        opts={{
          align: 'start',
          slidesToScroll: 'auto',
        }}
        className="w-full"
      >
        <div className="flex justify-between gap-1.5 items-center mb-6">
          <h2 className="text-lg font-semibold mb-1">Trending Stocks</h2>

          <CarouselPrevious className="ml-auto" />
          <CarouselNext />
        </div>

        <CarouselContent className="-ml-2.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="pl-2.5 max-w-[270px]">
              <div className="bg-[#f2f4f7] rounded-2xl p-5 space-y-5">
                <div className="flex justify-between items-center">
                  <figure className="flex items-center">
                    <Image
                      src={tesla}
                      width={500}
                      height={500}
                      className="size-8 rounded-full object-cover mr-3"
                      alt=""
                    />

                    <figcaption>
                      <h3 className="font-semibold">{'TSLA'}</h3>
                      <div className="text-light-gray">{'Tesla, Inc'}</div>
                    </figcaption>
                  </figure>

                  <dl className="text-right">
                    <dt className="text-sm font-medium mb-1">
                      ${formatNumber(192.53)}
                    </dt>
                    <dd className="sr-only">Stock price</dd>

                    <dt
                      className={cn(
                        'rounded-full flex items-center justify-end gap-1 [&>svg]:size-4 font-medium',
                        {
                          'text-[#027A48]': true,
                          'text-[#B42318]': false,
                        }
                      )}
                    >
                      {true ? <ArrowUp /> : <ArrowDown />}
                      <span className="text-xs">{1.01}%</span>
                    </dt>

                    <dd className="sr-only">
                      Value {true ? 'increased' : 'decreased'} by {1.01}%
                    </dd>
                  </dl>
                </div>
                <hr />
                <div className="flex justify-between items-center text-sm font-medium">
                  <button className="bg-white border shadow-sm py-3 px-[18.5px] rounded-lg box-content">
                    Short Stock
                  </button>

                  <button className="text-white bg-accent rounded-lg py-3 px-[18.5px]">
                    Buy Stock
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
