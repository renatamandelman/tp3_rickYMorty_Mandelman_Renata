import Image from "next/image";
import Link from "next/link";
import React from "react";

const EpisodeItem = ({ id, episode }) => {
  return (
    <Link href={`${episode.url}`}>
    <article className="flex bg-[#365829] p-3 rounded-xl gap-3 items-center h-[80px]  border-[#c7fa6c] border-1">
      <h1>{episode.episode} </h1>
      <div>
        <h2 className="text-[16px]">{episode.name}</h2>
        <p className="text-sm text-[#c7fa6c]">{episode.air_date} </p>
      </div>
    </article>
    </Link>
  );
};

export default EpisodeItem;
