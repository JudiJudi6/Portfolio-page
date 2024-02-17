import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ContactButtons() {
  return (
    <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 right-4 flex-col justify-center items-center gap-5">
      <Link
        to="https://www.linkedin.com/in/%C5%82ukasz-michnik-98b8122ab/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-white  p-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        to="https://github.com/JudiJudi6"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-white p-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
      >
        <FaGithub />
      </Link>
    </div>
  );
}
