import logo from '@/assets/logo.svg';
import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src={logo}
      className="max-w-[9rem]"
      width={600}
      height={600}
      alt="TailAdmin logo"
      role="presentation"
      quality={100}
    />
  );
}
