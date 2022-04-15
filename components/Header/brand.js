import Link from "next/link";

export default function Brand({ brand }) {
  return (
    <Link href="/">
      <a>
        <h3 className="font-bold text-lg dark:text-slate-100">{brand}</h3>
      </a>
    </Link>
  );
}
