# solid-contextmenu

Inspired by [react-contexify](https://github.com/fkhadra/react-contexify) but for [Solidjs](https://solidjs.com).

[![release](https://github.com/Xhofe/solid-contextmenu/actions/workflows/release.yml/badge.svg)](https://github.com/Xhofe/solid-contextmenu/actions/workflows/release.yml) [![npm](https://img.shields.io/npm/dm/solid-contextmenu.svg)](https://www.npmjs.com/package/solid-contextmenu) [![npm](https://img.shields.io/npm/v/solid-contextmenu.svg)](https://www.npmjs.com/package/solid-contextmenu) [![license](https://img.shields.io/github/license/Xhofe/solid-contextmenu.svg)](https://github.com/Xhofe/solid-contextmenu/blob/main/LICENSE)

## Installation

```bash
pnpm add solid-contextmenu
```

## Demo
<https://xhofe.github.io/solid-contextmenu>

## Usage

```tsx
import { Component, createSignal, For } from "solid-js";
import { Menu, useContextMenu, Item, Separator, Submenu } from ".";

const MENU_ID = 1;
const App: Component = () => {
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
```
