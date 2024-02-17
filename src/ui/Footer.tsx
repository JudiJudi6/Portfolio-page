import LinkItem from "./LinkItem";

export default function Footer() {
  return (
    <div className="h-[30vh] bg-bg mt-20 flex justify-center items-center flex-col gap-5">
      <div className="flex gap-4">
        <LinkItem
          title="Github"
          to="https://github.com/JudiJudi6"
          type="link"
        />
        <LinkItem
          type="link"
          title="Linkedin"
          to="https://www.linkedin.com/in/%C5%82ukasz-michnik-98b8122ab/"
        />
      </div>
      <p className="italic text-xs text-white opacity-60 text-center">
        {new Date().getFullYear()} Łukasz Michnik - Email - 7lukasz8@gmail.com
      </p>
    </div>
  );
}
