import Image from "next/image";
import Link from "next/link";

export default function Card({ link, image, title, desc }) {
  return (
    <Link href={link}>
      <div className="w-10/12 md:w-6/12 cursor-pointer">
        <Image
          className="rounded-xl"
          src={image}
          width={250}
          height={150}
          layout="responsive"
          alt={title}
        />
        <h3 className="text-lg font-bold px-1 dark:text-slate-100">{title}</h3>
        <p className="font-medium text-sm text-gray-500 px-1 dark:text-gray-400">{desc}</p>
      </div>
    </Link>
  );
}
