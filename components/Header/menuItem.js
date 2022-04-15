import Link from "next/link";
import {useRouter} from "next/router";

export default function MenuItem({ href, name }) {
  const route = useRouter();
  return (
    <Link href={href} passHref>
      <a className={`${route.pathname === href && "text-gray-600 pointer-events-none cursor-default dark:text-slate-400"} hover:text-gray-300 dark:hover:text-gray-600 px-5 p-1`}>{name}</a>
    </Link>
  );
}
