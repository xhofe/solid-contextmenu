/*
 * css classes mapping
 * */
export const enum STYLE {
  menu = "solid-contextmenu",
  submenu = "solid-contextmenu solid-contextmenu__submenu",
  submenuArrow = "solid-contextmenu__submenu-arrow",
  submenuOpen = "solid-contextmenu__submenu--is-open",
  separator = "solid-contextmenu__separator",
  item = "solid-contextmenu__item",
  itemDisabled = "solid-contextmenu__item--disabled",
  itemContent = "solid-contextmenu__item__content",
  theme = "solid-contextmenu__theme--",
  animationWillEnter = "solid-contextmenu__will-enter--",
  animationWillLeave = "solid-contextmenu__will-leave--",
}

export const enum EVENT {
  HIDE_ALL,
}

export const theme = {
  light: "light",
  dark: "dark",
};

export const animation = {
  fade: "fade",
  flip: "flip",
  scale: "scale",
  slide: "slide",
};
