import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function ItemMenu({ item }) {
  let activeStyle = { color: "#25d5e4" };

  return (
    <li className="menu">
      <div className="dropdown-toggle" aria-expanded="false">
        <NavLink
          to={item.url}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <FontAwesomeIcon icon={item.icon} />
          <span>{item.title}</span>
        </NavLink>
      </div>
    </li>
  );
}

export default ItemMenu;
