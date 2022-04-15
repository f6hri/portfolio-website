import Nav from "./nav";

export default function Navs({ routes }) {
  return (
    <nav className="hidden md:flex gap-5 items-center">
      {routes.map((item, index) => (
        <Nav key={index} href={item.href} name={item.name} />
      ))}
    </nav>
  );
}
