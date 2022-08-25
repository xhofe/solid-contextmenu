import { Component, createSignal, For } from "solid-js";
import { Menu, useContextMenu, Item, Separator, animation, Submenu } from ".";

const MENU_ID = 1;

const App: Component = () => {
  const [_animation, setAnimation] = createSignal(animation.scale);
  const [_theme, setTheme] = createSignal<"light" | "dark">("light");

  const { show } = useContextMenu({ id: MENU_ID, props: "lala" });
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        "flex-direction": "column",
        "justify-content": "center",
        "align-items": "center",
        gap: "0.5rem",
      }}
      onContextMenu={(e) => {
        show(e, { props: 1 });
      }}
    >
      <h4>right click</h4>
      <select
        onChange={(e) => {
          setAnimation(e.currentTarget.value);
        }}
      >
        <For
          each={[
            animation.scale,
            animation.fade,
            animation.flip,
            animation.slide,
          ]}
        >
          {(item) => {
            return <option value={item}>{item}</option>;
          }}
        </For>
      </select>
      <select
        onChange={(e) => {
          setTheme(e.currentTarget.value as any);
        }}
      >
        <For each={["light", "dark"]}>
          {(item) => {
            return <option value={item}>{item}</option>;
          }}
        </For>
      </select>
      <Menu id={MENU_ID} animation={_animation()} theme={_theme()}>
        <Item>⚡ Beautiful</Item>
        <Item>😊 Easy use</Item>
        <Separator />
        <Item>💕 Built with heart</Item>
        <Submenu label="▶️ submenu">
          <Item>👋 Hello</Item>
          <Item>😀 Hello</Item>
          <Item>🤝 你好</Item>
        </Submenu>
        <Item disabled>❌ Disabled</Item>
      </Menu>
    </div>
  );
};

export default App;
