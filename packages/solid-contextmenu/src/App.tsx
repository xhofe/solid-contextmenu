import { Component } from "solid-js";
import { Menu, useContextMenu, Item } from ".";

const App: Component = () => {
  const { show } = useContextMenu({ id: "1", props: "lala" });
  return (
    <div
      style={{ height: "100vh" }}
      onContextMenu={(e) => {
        show(e, { props: 1 });
      }}
    >
      right click
      <Menu id="1" animation="scale" theme="dark">
        <Item>⚡ Beautiful</Item>
        <Item>😊 Easy use</Item>
        <Item>💕 Built with heart</Item>
      </Menu>
    </div>
  );
};

export default App;
