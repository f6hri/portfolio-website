import Card from "../components/Card";
import Layout from "../components/Layout";
import BLOG from "../config/blog";

export default function Blog() {
  return (
    <Layout>
      <h3 className="text-2xl font-bold mb-3 ml-6 md:ml-0 underline dark:text-slate-100">Blog</h3>
      <div className="flex gap-5 justify-center flex-wrap md:flex-nowrap">
        {BLOG.item.map((item, index) => (
          <Card key={index} link={item.link} image={item.image} title={item.title} desc={item.desc} />
        ))}
      </div>
    </Layout>
  );
}
