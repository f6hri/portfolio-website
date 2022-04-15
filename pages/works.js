import Layout from "../components/Layout";
import Card from "../components/Card";
import WORKS from "../config/works";

export default function Works() {
  return (
    <Layout>
      <h3 className="text-2xl font-bold mb-3 ml-6 md:ml-0 underline dark:text-slate-100">Works</h3>
      <div className="flex gap-5 justify-center flex-wrap md:flex-nowrap">
        {WORKS.item.map((item, index) => (
          <Card key={index} link={item.link} image={item.image} title={item.title} desc={item.desc} />
        ))}
      </div>
    </Layout>
  );
}
