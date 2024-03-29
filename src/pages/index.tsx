// import { Button } from '@bibliotheca-dao/ui-lib';
import BibliothecaBook from "/public/bibliotheca-book.svg";
import Eternum from "/public/eternum-lockup.svg";

import LooksRare from "/public/social/looks-rare.svg";
import OpenSea from "/public/social/open-sea.svg";
import ReactFullpage from "@fullpage/react-fullpage";
import { useEffect } from "react";
import { EmailForm } from "../components/EmailForm";
import { FaqBlock } from "../components/Faqs";
import { FullPageSlide } from "../components/FullPageSlide";
import { MainFooter } from "../components/layout/MainFooter";
import { MainLayout } from "../components/layout/MainLayout";
import { WithNavMenu } from "../components/NavMenu";
import { PartnerBanner } from "../components/PartnerBanner";
import Tourus from "../components/Tourus";
import { ScrollSpy } from "../util/ScrollSpy";
import Button from "../components/Button";

function slides(fullpageApi: any) {
  return [
    {
      title: "",
      image: "warRoom",
      link: "https://atlas.bibliothecadao.xyz/",
      priority: true,
      imagePosition: "top",
      content: (
        <div className="flex flex-col justify-between h-full px-6 text-center">
          <div className="text-center mt-36 md:mt-28" data-content>
            <Eternum className="w-7/12 mx-auto fill-current lg:w-1/3" />
          </div>
          <div className="text-white " data-content>
            <p className="duration-700 delay-200 opacity-0 sm:text-5xl">
              Build Empires
            </p>
            <p className="pb-6 duration-700 delay-500 opacity-20 sm:text-3xl ">
              An eternal on-chain game running on StarkNet
            </p>
            <div className="flex justify-center space-x-2 duration-700 delay-700 opacity-0">
              <Button href="https://atlas.bibliothecadao.xyz" target="_blank">
                Explore the Atlas
              </Button>
              <Button onClick={() => fullpageApi.moveSectionDown()}>
                View More
              </Button>
            </div>
          </div>
        </div>
      ),
    },
    // {
    //   image: "eternity",
    //   priority: true,
    //   content: (
    //     <div
    //       className="flex flex-col justify-end h-full px-8 mx-auto sm:px-0 sm:w-1/2"
    //       data-content
    //     >
    //       <h2 className="mb-8 duration-700 opacity-0 delay-0">
    //         An Eternal World
    //       </h2>
    //       <p className="duration-700 delay-300 opacity-50 sm:text-3xl text-white/80">
    //         The Realms are your fantasy universe. <br /> Realms: ETERNUM is the
    //         first module in an infinitely expanding player-owned game world.
    //       </p>
    //     </div>
    //   ),
    // },
    // {
    //   image: "keyImage",
    //   link: "https://scroll.bibliothecadao.xyz/",
    //   content: (
    //     <div
    //       className="flex flex-col justify-end h-full px-8 mx-auto text-center sm:px-0 sm:w-1/2"
    //       data-content
    //     >
    //       {/* <h2 className="duration-700 opacity-0 delay-0">Introducing</h2> */}
    //       <div className="text-center duration-700 delay-150 " data-content>
    //         <Eternum className="w-1/2 mx-auto fill-current" />
    //       </div>
    //       <p className="duration-700 delay-300 opacity-0 sm:text-3xl text-white/80">
    //         A next generation MMO. <br /> Raise empires, raid resources, control
    //         relics. <br /> Maintain your cities and finesse <br />
    //         your forces, or fall into ruin.
    //       </p>
    //     </div>
    //   ),
    // },
    // {
    //   title: "Realm Staking",
    //   image: "riches",
    //   link: "https://staking.bibliothecadao.xyz/",
    //   content: (
    //     <div
    //       className="flex flex-col justify-end h-full px-8 mx-auto text-gray-900 sm:px-0 sm:w-1/2"
    //       data-content
    //     >
    //       <h2 className="mb-4 duration-700 opacity-0 delay-0">
    //         Play with Freedom
    //       </h2>
    //       <p className="duration-700 delay-300 opacity-0 sm:text-3xl text-black/80">
    //         Dominate the battlefield. Out-smart the market. Exercise diplomacy.
    //         Take down the powerful or prey on the weak? <br /> Your world, your
    //         choice.
    //       </p>
    //     </div>
    //   ),
    // },
    // {
    //   image: "createOrDestroy",
    //   link: "https://staking.bibliothecadao.xyz/",
    //   content: (
    //     <div
    //       className="flex flex-col justify-end h-full px-8 mx-auto sm:px-0 sm:w-1/2"
    //       data-content
    //     >
    //       <h2 className="mb-4 duration-700 opacity-0 delay-0">
    //         The Realms Resist
    //       </h2>
    //       <p className="duration-700 delay-300 opacity-0 sm:text-3xl text-white/80">
    //         It’s not just the other Lords you need to conquer: the Realms are
    //         home to powerful environmental entities seeking to drag your empire
    //         into decay.
    //       </p>
    //     </div>
    //   ),
    // },
    // {
    //   image: "sky",
    //   link: "https://staking.bibliothecadao.xyz/",
    //   imagePosition: "bottom",
    //   content: (
    //     <div
    //       className="flex flex-col justify-end h-full px-8 mx-auto text-gray-900 sm:px-0 sm:w-1/2"
    //       data-content
    //     >
    //       <h2 className="mb-4 duration-700 opacity-0 delay-0">
    //         Built on StarkNet
    //       </h2>
    //       <p className="duration-700 delay-300 opacity-0 sm:text-3xl text-black/80">
    //         Real-time, deeply strategic gameplay. On-chain and unstoppable.
    //         Eternal play is made possible by StarkNet and Ethereum.
    //       </p>
    //     </div>
    //   ),
    // },
    // {
    //   image: "siege",
    //   link: "https://staking.bibliothecadao.xyz/",
    //   content: (
    //     <div
    //       className="flex flex-col justify-end h-full px-8 mx-auto text-center sm:px-0 sm:w-1/2"
    //       data-content
    //     >
    //       <h2 className="mb-4 duration-700 opacity-0 delay-0">
    //         Your Sovereign Empire
    //       </h2>
    //       <span className="inline duration-700 delay-300 opacity-0 sm:text-3xl text-white/80">
    //         Each Realm is a unique and powerful state, capable of producing
    //         resources and raising armies. There are 8,000 Realms.
    //         <div className="flex justify-center mt-8">
    //           <a
    //             className="inline-block ml-4 mr-2 align-middle"
    //             href="https://opensea.io/collection/lootrealms"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <OpenSea className="w-12 fill-current hover:opacity-70" />
    //           </a>
    //           <a
    //             className="inline-block align-middle"
    //             href="https://looksrare.org/collections/0x7afe30cb3e53dba6801aa0ea647a0ecea7cbe18d"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <LooksRare className="w-12 fill-current hover:opacity-70" />
    //           </a>
    //         </div>
    //       </span>
    //     </div>
    //   ),
    // },
  ];
}

function Home() {
  useEffect(() => {
    if (window.scrollTo) {
      window.scrollTo(0, 1);
    }
  });
  const onScrollUpdate = (entry: any, isInVewPort: any) => {
    const { target, boundingClientRect } = entry;
    const menuItem = document.querySelector(
      `[data-scrollspy-id="${target.id}"]`
    );
    if (entry.intersectionRatio >= 0.75) {
      menuItem?.classList.add("active");
    } else {
      if (menuItem?.classList.contains("active")) {
        menuItem?.classList.remove("active");
      }
    }
  };
  return (
    <MainLayout>
      <ReactFullpage
        // fullpage options
        licenseKey={"gplv3-license"}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <WithNavMenu />

              <ScrollSpy handleScroll={onScrollUpdate} />

              {slides(fullpageApi)
                .slice(0, 5)
                .map((slide) => {
                  return (
                    <FullPageSlide
                      key={slide.image}
                      image={slide.image}
                      priority={slide.priority}
                      content={slide.content}
                    />
                  );
                })}

              {slides(fullpageApi)
                .slice(5)
                .map((slide) => {
                  {
                    /* */
                  }
                  return (
                    <FullPageSlide
                      key={slide.image}
                      image={slide.image}
                      priority={slide.priority}
                      content={slide.content}
                    />
                  );
                })}
              <section className="w-full min-h-screen overflow-y-scroll section">
                <div className="fixed w-screen h-screen ">
                  <Tourus />
                </div>
                <div className="relative flex flex-col justify-center min-h-screen px-8 py-16 mx-auto sm:px-0 align-center">
                  <div className="container mx-auto text-center">
                    <div className="w-48 h-48 mx-auto mt-6">
                      <BibliothecaBook className="fill-current " />
                    </div>
                    <h2>
                      Bibliotheca DAO
                      <br /> Stewards of on-chain gaming
                    </h2>
                    <div className="mx-auto sm:w-1/2">
                      {" "}
                      <p className="pt-4 mb-4 sm:text-2xl">
                        Bibliotheca DAO is a pioneering web3 game studio <br />
                        building eternal games on StarkNet.
                      </p>
                      <Button href="https://bibliothecadao.xyz" target="_blank">
                        Visit Us{" "}
                      </Button>
                    </div>
                  </div>

                  <PartnerBanner />
                </div>
              </section>
              <div className="min-h-screen section">
                <div className="container relative px-8 py-5 mx-auto sm:w-1/2 sm:px-0 lg:w-1/2">
                  <FaqBlock />
                  <div className="mx-auto ">
                    <EmailForm />
                    <MainFooter />
                  </div>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </MainLayout>
  );
}

export default Home;
