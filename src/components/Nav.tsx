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
  { name: "Home", href: "MainPage", id: 1 },
  { name: "AI", href: "/AI", id: 2 },
  { name: "About us", href: "/About", id: 3 },
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
      >
        {name}
      </motion.a>
    ))}
  </div>
);

export default function Nav() {
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-[1000] bg-[#f7f7f7] flex items-center justify-between w-full px-16 pt-4 pb-4 font-medium max-md:px-8 md:ml-0 lg:ml-0">
      <div className="flex items-center gap-16">
        <h1 className="text-2xl font-bold tracking-wider text-[#3e60a3] transition duration-300 ease-in-out delay-150 font-nunito hover:-translate-y-1 hover:scale-110">
          <a href="/">InspireHub</a>
        </h1>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -15 }}
          transition={{ delay: 0.35 }}
          className="hidden text-[#121212] xl:flex xl:items-center font-roboto xl:justify-center xl:gap-12 xl:text-lg lg:flex lg:items-center lg:justify-center lg:gap-12 lg:text-md "
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
          className="fixed top-0 left-0 z-40 flex flex-col items-center justify-center w-full h-screen gap-24 text-2xl font-bold text-center bg-[#f7f7f7] "
        >
          <NavLinks
            className="flex flex-col gap-24 text-lg text-black max-md:gap-12"
            isMobile={true}
          />
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -75 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col w-64 gap-4"
          >
            <motion.a
              className="w-full py-1 text-white  bg-[#5f7fbf] roundedtransition-all duration-700 hover:bg-[#3e60a3] focus:outline-none shadow-md hover:shadow-xl
              disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              href="SignInPage"
            >
              Sign in
            </motion.a>
            <motion.a
              className="w-full h-10 tracking-wide text-indigo-500 transition ease-in-out border-2 border-indigo-500 rounded hover:bg-indigo-500 hover:text-white active:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 duration-750"
              href="SignUpPage"
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
        className="flex gap-3 max-xl:hidden max-lg:hidden lg:flex lg:items-center lg:justify-center lg:text-sm "
      >
        <a
          href="SignUpPage"
          className="middle none center rounded-lg bg-[#5f7fbf] border-2 border-[#5f7fbf]  py-2 px-4.5 lg:py-1.5 lg:px-3.5 text-md font-bold font-nunito  text-white 
           roundedtransition-all duration-700 hover:bg-[#3e60a3] focus:outline-none shadow-md hover:shadow-xl
           disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
          data-ripple-light="true"
        >
          Sign up
        </a>
        <a
          href="SignInPage"
          className="middle none center rounded-lg border-2 border-[#5f7fbf] py-2 px-5 lg:py-1.5 lg:px-4 text-md font-bold font-nunito cursor-pointer  text-[#5f7fbf]
           transition-all hover:opacity-75 focus:ring focus:ring-indigo-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-dark="true"
        >
          Sign in
        </a>
      </motion.div>

      {/* Hamburger Toggle */}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        onClick={() => setToggled((prevToggle) => !prevToggle)}
        className={`burger z-50 cursor-pointer space-y-1.5 xl:hidden lg:hidden
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
