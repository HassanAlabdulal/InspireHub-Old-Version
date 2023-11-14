import { motion } from "framer-motion";
import { useState } from "react";

const navMotion = {
  visible: {
    opacity: 1,

    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const itemMotionDesktop = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 1, x: 0 },
};

const navLinks = [
  { name: "Home", href: "/", id: 1 },
  { name: "Catalog", href: "/Catalog", id: 2 },
  { name: "AI", href: "/AI", id: 3 },
  { name: "About us", href: "/About", id: 4 },
];

const NavLinks = ({
  isMobile,
  className,
}: {
  isMobile: boolean;
  className: string;
}) => (
  <div className={className}>
    {navLinks.map(({ name, href, id }) => (
      <motion.a
        key={id}
        variants={isMobile ? itemMotion : itemMotionDesktop}
        href={href}
        // className="nav-link relative inline-block text-black no-underline hover:underline"
      >
        {name}
      </motion.a>
    ))}
  </div>
);

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  return (
    <nav className=" fixed w-full top-0  flex items-center justify-between mb-24 pb-4 pt-4 px-16 max-md:px-8 font-medium  md:ml-0 lg:ml-0 ">
      <div className="flex items-center gap-16">
        <h1 className="text-2xl text-[#f7f7f7] font-bold tracking-wider transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
          <a href="/">InspireHub</a>
        </h1>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -15 }}
          transition={{ delay: 0.35 }}
          className="hidden xl:flex xl:items-center text-[#f7f7f7] xl:justify-center xl:gap-12 xl:text-lg "
        >
          <NavLinks className="flex gap-12" isMobile={false} />
        </motion.div>
      </div>

      {/* Nav Items animating in  */}
      {toggled && (
        <motion.div
          variants={navMotion}
          animate="visible"
          initial="hidden"
          className="fixed left-0 top-0  z-40 flex h-screen
          w-full flex-col items-center justify-center  gap-24 bg-white text-2xl font-bold text-center"
        >
          <NavLinks
            className=" flex flex-col gap-24 text-lg max-md:gap-12 text-indigo-600 "
            isMobile={true}
          />
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -75 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col gap-4 w-64"
          >
            <motion.a
              className="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 w-full text-white rounded transition-all 1s py-1"
              href="/SignIn"
            >
              Sign in
            </motion.a>
            <motion.a
              className="border-2 border-indigo-500 hover:bg-indigo-500 hover:text-white active:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 w-full text-indigo-500 rounded transition ease-in-out duration-750 h-10 tracking-wide"
              href="/SignUp"
            >
              Sign up
            </motion.a>
          </motion.div>
        </motion.div>
      )}

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -15 }}
        transition={{ delay: 0.35 }}
        className="flex gap-3  max-xl:hidden"
      >
        {/* <a href="/SignIn">Sign in </a>
        <a href="/SignUp">Sign up</a> */}

        <button
          className="middle none center rounded-lg bg-[#f7f7f7] py-2 px-6 text-md font-bold  text-[#3b5382] shadow-md
           shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Sign up
        </button>
        <button
          className="middle none center rounded-lg border border-[#f7f7f7] py-2 px-5 text-md font-bold text-[#f7f7f7]
           transition-all hover:opacity-75 focus:ring focus:ring-indigo-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-dark="true"
        >
          Sign in
        </button>
      </motion.div>

      {/* Hamburger Toggle */}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        onClick={() => setToggled((prevToggle) => !prevToggle)}
        className={`burger z-50 cursor-pointer space-y-1.5 xl:hidden 
        `}
      >
        <motion.span
          animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
          className="line-1 block h-0.5 w-8 bg-black"
        ></motion.span>

        <motion.span
          animate={{ width: toggled ? 0 : 24 }}
          className="line-2 block h-0.5 w-6 bg-black"
        ></motion.span>
        <motion.span
          animate={{
            rotateZ: toggled ? -45 : 0,
            y: toggled ? -8 : 0,
            width: toggled ? 32 : 24,
          }}
          className="line-3 block h-0.5 w-4 bg-black"
        ></motion.span>
      </motion.div>
    </nav>
  );
}
