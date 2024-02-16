interface SectionTitleProps {
  text: string;
}

export default function SectionTitle({ text }: SectionTitleProps) {
  return (
    <div className="w-full py-20 ">
      <h2 className="text-center font-bold text-xl md600:text-3xl">{text}</h2>
    </div>
  );
}
