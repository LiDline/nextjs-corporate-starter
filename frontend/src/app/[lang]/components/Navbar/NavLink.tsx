import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { NavLinkProps } from '../../interfaces/interfaces.navbar';
import { classNameForNavLink } from './customClassName';

export default function NavLink({ url, text }: NavLinkProps) {
  const path = usePathname();

  return (
    <li className="flex">
      <Link
        href={url}
        className={`${classNameForNavLink} ${
          path === '/en' + url ? 'border-b-2 border-black' : ''
        } hover:border-b-2 hover:border-blue-500 hover:text-blue-500`}
      >
        {text}
      </Link>
    </li>
  );
}
