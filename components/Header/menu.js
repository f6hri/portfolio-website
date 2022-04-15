import { useState } from "react";
import MenuItem from "./menuItem";
import { FiMenu } from "react-icons/fi";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Menu({ routes }) {
  const [menu, isMenu] = useState("hidden");
  const route = useRouter();
  useEffect(()=>{
    isMenu("hidden");
  },[route])
  const clickMenu = () => {
    menu === "hidden" ? isMenu("flex") : isMenu("hidden");
  };
  return (
    <div className="block relative md:hidden">
      <button
        className="p-3 rounded-lg bg-gray-800 text-white focus:ring dark:bg-slate-100 dark:text-gray-800"
        onClick={()=>clickMenu()}
      >
        <FiMenu />
      </button>
      <div
        className={
          menu +
          " flex-col gap-2 mt-1 bg-gray-900 text-white dark:bg-slate-100 dark:text-gray-800 p-3 px-5 absolute right-[1px] rounded-lg z-10"
        }
      >
        {routes.map((item, index) => (
          <MenuItem key={index} href={item.href} name={item.name} />
        ))}
      </div>
    </div>
  );
}
