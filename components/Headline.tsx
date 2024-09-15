import { FC, PropsWithChildren } from "react";
import { Work_Sans } from "next/font/google";

const displayFont = Work_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export const Headline: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h2 className={`text-xl font-bold mb-2 ${displayFont.className}`}>
      {children}
    </h2>
  );
};
