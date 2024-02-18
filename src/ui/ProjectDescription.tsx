import React from "react";

interface ProjectDescriptionProps {
  type: "right" | "left";
  title: string;
  text: string;
  img: string;
}

export default function ProjectDescription({
  img,
  text,
  title,
  type,
}: ProjectDescriptionProps) {
  return <div>ProjectDescription</div>;
}
