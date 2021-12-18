import React from "react";

import "./SideBar.css";

// const handleCLick = (name) => {
//   refs[name].current.scrollIntoView({
//     behavior: "smooth",
//     block: "center",
//   });
// };
function Item({ active }) {
  return <li className={`sidebar-item ${active ? "active" : ""}`} />;
}

export default function SideBar({ sections, refs }) {
  console.log(refs, sections);
  const id = sections.map((item) => {
    const { props } = item;
    return props;
    // const
  });
  const ids = id.map((item) => {
    const { id } = item;
    return id;
  });
  console.log(ids);
  const handleCLick = () => {
    refs[ids].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const items = sections.map((section) => (
    <Item
      key={section.props.id}
      active={section.props.active}
      onClick={handleCLick}
    ></Item>
  ));

  return (
    <nav className="sidebar-container">
      <ul className="sidebar-list">{items}</ul>
    </nav>
  );
}
