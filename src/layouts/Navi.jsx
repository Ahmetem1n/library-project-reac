import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu>
      <Menu.Menu>
        <Dropdown item text="Anasayfa" as={NavLink} to="/"></Dropdown>
        <Dropdown item text="Kitap kategorileri" as={NavLink} to="/book_category"></Dropdown>
        <Dropdown item text="Öğrenciler" as={NavLink} to="/student"></Dropdown>
        <Dropdown item text="Kitaplar" as={NavLink} to="/book"></Dropdown>
        <Dropdown item text="Kitap işlemleri" as={NavLink} to="/taking_book"></Dropdown>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
