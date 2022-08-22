import { createContext, useContext } from "solid-js";
import { MenuContextType } from "./types";

export const MenuContext = createContext<MenuContextType>();

export const useMenu = () => useContext(MenuContext)!;
