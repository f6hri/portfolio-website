import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav({ href, name }) {
  const route = useRouter();
  return (
    <Link href={href}>
      <a className={`${route.pathname === href && "text-gray-600 pointer-events-none cursor-default dark:text-gray-500"} hover:text-gray-600 dark:text-slate-200 dark:hover:text-slate-300`}>{name}</a>
    </Link>
  );
}
