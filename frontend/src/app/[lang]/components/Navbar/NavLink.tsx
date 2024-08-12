import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { NavLinkProps } from '../../interfaces/interfaces.navbar';

export default function NavLink({ url, text }: NavLinkProps) {
  const path = usePathname();
  console.log('----------------------');

  console.log(path);
  console.log(url);

  return (
    <li className="flex">
      <Link
        href={url}
        className={`flex items-center mx-4 -mb-1 ${
          path === '/en' + url ? 'border-b-2 border-black' : ''
        } hover:border-b-2 hover:border-blue-500 hover:text-blue-500`}
      >
        {text}
      </Link>
    </li>
  );
}
