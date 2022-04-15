import Link from "next/link";

export default function SimpleLink({href,icon,name}){
    return(
        <Link href={href}>
            <a className="font-bold my-3 flex items-center gap-2 text-gray-600 hover:text-gray-800 dark:text-slate-400 dark:hover:text-slate-200">{icon} {name}</a>
        </Link>
    );
}