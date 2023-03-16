import Menu from "/public/menu.svg";
import Discord from "/public/social/discord.svg";
import Github from "/public/social/github.svg";
import Twitter from "/public/social/twitter.svg";
import { useState, useEffect } from "react";
import Button from "./Button";

const NavMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header className="fixed top-0 z-10 w-full p-4 text-xl tracking-widest text-white rounded bg-blend-multiply backdrop-brightness-125 sm:block">
      <div className="flex justify-between w-full px-8 py-3 bg-black/40 rounded-xl">
        <span className="mt-1 text-5xl uppercase font-lords">
          R<span className="hidden lg:inline">ealms</span>
        </span>
        <nav
          className={`justify-center gap-4 lg:gap-8 my-auto text-base text-center flex lg:flex-row grow
            ${
              showMobileMenu
                ? "absolute top-16 mx-auto flex-col left-0 right-0 bg-black/90 py-6"
                : "hidden lg:flex"
            }
          `}
        >
          <a
            href="https://bibliothecadao.xyz/treasury"
            className={`hover:text-gray-400`}
          >
            The Treasury
          </a>
          <a
            href="https://snapshot.org/#/council.bibliotheca.eth"
            className={`hover:text-gray-400`}
          >
            Snapshot Voting
          </a>
          <a
            href="https://scroll.bibliothecadao.xyz/"
            className={`hover:text-gray-400`}
          >
            Master Scroll
          </a>
          <a
            href="https://staking.bibliothecadao.xyz/"
            className={`hover:text-gray-400`}
          >
            Staking
          </a>
        </nav>
        <div className="hidden mr-10 xl:mr-32 lg:flex">
          <a
            href="https://discord.gg/WpwYzsT8Jv"
            target="_blank"
            rel="noreferrer"
            className="self-center"
          >
            <Discord className="fill-current w-7 sm:mr-4" />
          </a>
          <a
            href="https://github.com/BibliothecaForAdventurers"
            target="_blank"
            rel="noreferrer"
            className="self-center"
          >
            <Github className="fill-current w-7 sm:mr-4" />
          </a>
          <a
            href="https://twitter.com/LootRealms"
            target="_blank"
            rel="noreferrer"
            className="self-center"
          >
            <Twitter className="w-6 fill-current sm:mr-4" />
          </a>
        </div>
        <div className="self-center">
          <Button href="https://atlas.bibliothecadao.xyz" target="_blank">
            Explore the Atlas
          </Button>
        </div>

        <Menu
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="justify-center my-auto lg:hidden"
        />
      </div>
    </header>
  );
};

export const WithNavMenu = ({ children, selector }: any) => {
  const [options, setOptions] = useState<any>([]);
  useEffect(() => {
    const navMenuSections = document.querySelectorAll(selector);
    const optionsFromSections = Array.from(navMenuSections).map((section) => {
      return {
        hash: section.id,
        title: section.dataset.navTitle,
      };
    });
    setOptions(optionsFromSections);
  }, [selector]);

  return <NavMenu />;
};
