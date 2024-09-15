import { FC, PropsWithChildren } from "react";
import { Headline } from "./Headline";

export const Book: FC<
  PropsWithChildren<{ author: string; title: string; link: string }>
> = ({ author, title, link, children }) => {
  return (
    <div className="mb-4">
      <Headline>{author}</Headline>
      <h3 className="text-lg underline">
        <a href={link} target="_blank" rel="noopener">
          {title} (Amazon)
        </a>
      </h3>
      <p>{children}</p>
    </div>
  );
};
