import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <main
        id="main"
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        {children}
      </main>
    </>
  );
}
