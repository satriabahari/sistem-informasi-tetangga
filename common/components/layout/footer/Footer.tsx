import React from "react";
import Logo from "../../elements/Logo";
import MenuItemList from "../header/MenuItemList";
import Copyright from "./Copyright";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col justify-center px-16 py-2 dark:bg-neutral-900 bg-neutral-200">
      {/* <div className="flex justify-between py-12">
        <div className="flex flex-col items-start gap-8">
          <Logo />
          <MenuItemList />
        </div>
        <div className="flex flex-col gap-4">
          <h5>Join our newsletter</h5>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Email"
              className="bg-neutral-700"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>

      <hr className="border-t dark:border-neutral-700" /> */}

      <Copyright />
    </footer>
  );
};

export default Footer;
