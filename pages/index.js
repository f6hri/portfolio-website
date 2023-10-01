import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import SimpleLink from "../components/SimpleLink";
import NETWORKS from "../config/networks";
import WORKS from "../config/works";
import BLOG from "../config/blog";
import ABOUT from "../config/about";

export default function Index() {
  return (
    <main className="text-gray-800 dark:text-slate-100">
      <Layout>
        <div className="text-center">
          <Image
            src="/profile.jpg"
            className="rounded-full"
            alt="profile"
            width={250}
            height={250}
          />
          <h1 className="text-3xl mt-1 font-bold">Fahri Muhammet Demir</h1>
          <p className="text-gray-600 text-sm">Full-Stack Web Developer</p>
        </div>
        <div className="my-8 p-3 bg-gray-200 rounded-lg text-center dark:bg-gray-700">
          <p>
            Selam &#128075; Ben web siteleri geliştiriyorum.
          </p>
        </div>
        <div className="my-8">
          <h3 className="font-medium text-xl underline">About</h3>
          {ABOUT.map(
            (item, index)=>(
              <p key={index}>
                {item}
              </p>
            )
          )}
        </div>
        <div className="my-8">
          <h3 className="font-medium text-xl underline">Works</h3>
          <p className="dark:text-slate-300">{WORKS.intro}</p>
          <Button href="/works" name="My Works &#128640;" />
        </div>
        <div className="my-8">
          <h3 className="font-medium text-xl underline">Blog</h3>
          <p className="dark:text-slate-300">{BLOG.intro}</p>
          <Button href="/blog" name="My Posts &#128196;" />
        </div>
        <div className="my-8">
          <h3 className="font-medium text-xl underline">My Networks</h3>
          {NETWORKS.map((item, index) => (
            <SimpleLink key={index} href={item.href} icon={item.icon} name={item.name} />
          ))}
        </div>
      </Layout>
    </main>
  );
}
