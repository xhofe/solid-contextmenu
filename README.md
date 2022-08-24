# solid-contextmenu

Inspired by [react-contexify](https://github.com/fkhadra/react-contexify) but for [Solidjs](https://solidjs.com).

## Installation

```bash
pnpm add solid-contextmenu
```

## Usage

```tsx
import { Menu, Item, useContextMenu } from "solid-contextmenu";
import "solid-contextmenu/dist/style.css";

const MENU_ID = "unique-id";
const App = () => {
  const { show } = useContextMenu({ id: MENU_ID, props: "lala" });
  return (
    <>
      <div
        onContextMenu={(e) => {
          show(e, { props: "here will cover" });
        }}
      >
        right click here
      </div>
      <Menu id={MENU_ID} animation="scale" theme="dark">
        <Item
          data="balabala"
          onClick={({ event, props, data }) => {
            console.log(event, props, data);
          }}
        >
          ⚡ Beautiful
        </Item>
        <Item>😊 Easy use</Item>
        <Item>💕 Built with heart</Item>
        <Item disabled>❌ Disabled</Item>
      </Menu>
    </>
  );
};
```
