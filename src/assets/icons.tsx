import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export function SquaresIcon(props: IconProps) {
  return (
    <svg width={30} height={30} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 3.25A2.25 2.25 0 003.25 5.5V9a2.25 2.25 0 002.25 2.25H9A2.25 2.25 0 0011.25 9V5.5A2.25 2.25 0 009 3.25H5.5zM4.75 5.5a.75.75 0 01.75-.75H9a.75.75 0 01.75.75V9a.75.75 0 01-.75.75H5.5A.75.75 0 014.75 9V5.5zm.75 7.25A2.25 2.25 0 003.25 15v3.5a2.25 2.25 0 002.25 2.25H9a2.25 2.25 0 002.25-2.25V15A2.25 2.25 0 009 12.75H5.5zM4.75 15a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v3.5a.75.75 0 01-.75.75H5.5a.75.75 0 01-.75-.75V15zm8-9.5A2.25 2.25 0 0115 3.25h3.5a2.25 2.25 0 012.25 2.25V9a2.25 2.25 0 01-2.25 2.25H15A2.25 2.25 0 0112.75 9V5.5zM15 4.75a.75.75 0 00-.75.75V9c0 .414.336.75.75.75h3.5a.75.75 0 00.75-.75V5.5a.75.75 0 00-.75-.75H15zm0 8A2.25 2.25 0 0012.75 15v3.5A2.25 2.25 0 0015 20.75h3.5a2.25 2.25 0 002.25-2.25V15a2.25 2.25 0 00-2.25-2.25H15zM14.25 15a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v3.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V15z"
        fill="#667085"
      />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg width={16} height={12} viewBox="0 0 16 12" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.583 1a.75.75 0 01.75-.75h13.334a.75.75 0 010 1.5H1.333A.75.75 0 01.583 1zm0 10a.75.75 0 01.75-.75h13.334a.75.75 0 010 1.5H1.333a.75.75 0 01-.75-.75zm.75-5.75a.75.75 0 000 1.5H8a.75.75 0 000-1.5H1.333z"
        fill="#667085"
      />
    </svg>
  );
}

export function Notification(props: IconProps) {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.75 2.292a.75.75 0 00-1.5 0v.544a6.376 6.376 0 00-5.625 6.331v5.292h-.292a.75.75 0 000 1.5h13.334a.75.75 0 000-1.5h-.292V9.167a6.376 6.376 0 00-5.625-6.331v-.544zm4.125 12.167V9.167a4.875 4.875 0 10-9.75 0v5.292h9.75zM8 17.709c0 .414.336.75.75.75h2.5a.75.75 0 000-1.5h-2.5a.75.75 0 00-.75.75z"
        fill="#667085"
      />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M6.247 7.085a6.668 6.668 0 0011.207 4.885A7.708 7.708 0 118.03 2.546a6.645 6.645 0 00-1.783 4.539z"
        stroke="#667085"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
