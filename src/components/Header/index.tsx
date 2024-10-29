import { Item } from "./Item";

const Header = () => (
  <div className="flex w-full fixed flex-row h-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 justify-between">
    <div className="flex w-fit h-full">
      <Item
        path="/"
        text="Home" />
      <Item
        path="/about/"
        text="About" />

      <Item
        path="/counter/"
        text="Counter" />

      <Item
        path="/portfolio/"
        text="Portfolio" />
    </div>
    <div className="flex w-fit h-full">
      <Item
        path="/sign-in/"
        text="Sign In" />
      <Item
        path="/sign-up/"
        text="Sign Up" />
    </div>
  </div>
)

export default Header;