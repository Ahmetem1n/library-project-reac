import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Dropdown, Menu } from "semantic-ui-react";

export default function Grid1() {
  return (
    <div>
      <Menu vertical>
        <Menu.Item>MENÜLER</Menu.Item>

        <Dropdown item text="Kitap kategorileri" as={NavLink} to="/book_category"></Dropdown>
        <Dropdown item text="Öğrenciler" as={NavLink} to="/student"></Dropdown>
        <Dropdown item text="Kitaplar" as={NavLink} to="/book"></Dropdown>
        <Dropdown item text="Kitap işlemleri" as={NavLink} to="/taking_book"></Dropdown>
        <Button as={NavLink} to="/" color="brown">
          Anasayfa
      </Button>
      </Menu>
    </div>
  );
}
