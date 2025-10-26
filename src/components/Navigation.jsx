import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsClipboardCheck, BsTelephone } from "react-icons/bs";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <nav className="fixed z-40 w-full bottom-2 lg:bottom-8 px-2">
      <div className="container mx-auto">
        <div className="relative group">
          <div className="absolute -inset-0.5 opacity-75 max-w-[460px] w-full h-24 mx-auto px-5 rounded-full"></div>
          <div className="relative">
            <div className="w-full h-24 bg-primary backdrop-blur-2xl rounded-3xl max-w-[460px] mx-auto px-5 flex items-center justify-between text-2xl text-white border border-accent/20">
              <Link
                to="hero"
                activeClass="active"
                activeStyle={{ color: "#ffbf00" }}
                smooth={true}
                duration={0}
                spy={true}
                offset={-200}
                className="cursor-pointer w-[60px] h-[60px] flex items-center text-4xl justify-center hover:text-accent"
              >
                <BiHomeAlt />
              </Link>
              <Link
                to="about"
                activeClass="active"
                activeStyle={{ color: "#ffbf00" }}
                smooth={true}
                duration={0}
                spy={true}
                className="cursor-pointer w-[60px] h-[60px] flex items-center text-4xl justify-center hover:text-accent"
              >
                <BiUser />
              </Link>
              <Link
                to="work"
                activeClass="active"
                activeStyle={{ color: "#ffbf00" }}
                smooth={true}
                duration={0}
                spy={true}
                className="cursor-pointer w-[60px] h-[60px] flex items-center text-4xl justify-center hover:text-accent"
              >
                <BsBriefcase />
              </Link>
              <Link
                to="beyond_work"
                activeClass="active"
                activeStyle={{ color: "#ffbf00" }}
                smooth={true}
                duration={0}
                spy={true}
                className="cursor-pointer w-[60px] h-[60px] flex items-center text-4xl justify-center hover:text-accent"
              >
                <BsClipboardCheck />
              </Link>
              <Link
                to="contact"
                activeClass="active"
                activeStyle={{ color: "#ffbf00" }}
                smooth={true}
                duration={0}
                spy={true}
                className="cursor-pointer w-[60px] h-[60px] flex items-center text-4xl justify-center hover:text-accent"
              >
                <BsTelephone />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
