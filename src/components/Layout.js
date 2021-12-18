import React, { forwardRef } from "react";

import SideBar from "./SideBar";

const Section = forwardRef(({ id, children }, ref) => {
  return (
    <section ref={ref} id={id}>
      {children}
    </section>
  );
});

export { Section };

export default function Layout({ children, refs }) {
  // console.log(refs);
  return (
    <div>
      <SideBar sections={children} refs={refs} />
      <main>{children}</main>
    </div>
  );
}
