import React from "react";
import LinkItem from "../LinkItem";

export default function DeskNav() {
  return (
    <div className="flex justify-end items-center gap-4 p-6">
      <LinkItem title="Projects" />
      <LinkItem title="Skills" />
      <LinkItem title="Contact" />
    </div>
  );
}
