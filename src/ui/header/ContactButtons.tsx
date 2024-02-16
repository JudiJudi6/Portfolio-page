import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ContactButtons() {
  return (
    <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 right-4 flex-col justify-center items-center gap-5">
      <Link
        to=""
        className="text-3xl text-white  p-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        to=""
        className="text-3xl text-white p-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
      >
        <FaGithub />
      </Link>
    </div>
  );
}
