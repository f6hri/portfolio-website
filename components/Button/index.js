import Link from "next/link";

export default function Button({ href,name }) {
  return (
    <Link href="/works">
      <button className="mt-2 py-2 px-3 text-slate-100 bg-gray-800 rounded-lg focus:ring text-center dark:bg-slate-300 dark:text-gray-800">
        {name}
      </button>
    </Link>
  );
}
