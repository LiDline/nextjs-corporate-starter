import type { NavLinkProps } from '../../interfaces/interfaces.navbar';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileNavLink extends NavLinkProps {
  closeMenu: () => void;
}

export default function MobileNavLink({ url, text, closeMenu }: MobileNavLink) {
  const path = usePathname();
  const handleClick = () => {
    closeMenu();
  };

  return (
    <li className="flex">
      <Link
        href={url}
        onClick={handleClick}
        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-900 ${
          path === url && 'dark:text-violet-400 dark:border-violet-400'
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}
