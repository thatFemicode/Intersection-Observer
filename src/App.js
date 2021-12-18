import React, { createRef, useState, useEffect } from "react";

import Layout, { Section } from "./components/Layout";
import Panel from "./components/Panel";

function App() {
  // the active state is set to the first section by default
  const [active, setActive] = useState("one");

  const refs = [];

  // create and track refs for later use
  const newRef = () => {
    const ref = createRef();

    refs.push(ref);

    return ref;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          // if 90% of the section is visible
          if (entry.isIntersecting) {
            // update the active state to the visible section
            setActive(entry.target.id);
          }
        }
      },
      {
        // root property defaults to the browser viewport

        // intersection ratio (90% of section must be visibile)
        threshold: 0.9,
      }
    );

    refs.forEach((ref) =>
      // observe the refs that were applied to the sections
      observer.observe(ref.current)
    );
  });
  // console.log(refs);
  return (
    <Layout refs={refs}>
      <Section id="one" ref={newRef()} active={active === "one" ? true : false}>
        <Panel text="1" />
      </Section>
      <Section id="two" ref={newRef()} active={active === "two" ? true : false}>
        <Panel text="2" />
      </Section>
      <Section
        id="three"
        ref={newRef()}
        active={active === "three" ? true : false}
      >
        <Panel text="3" />
      </Section>
    </Layout>
  );
}

export default App;
