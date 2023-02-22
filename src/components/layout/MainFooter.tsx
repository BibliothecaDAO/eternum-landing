// import Heart from '/public/heart.svg';
import Discord from '/public/social/discord.svg';
import Github from '/public/social/github.svg';
import Twitter from '/public/social/twitter.svg';


export const MainFooter = () => {
  return (
    <div className="flex flex-col mx-auto">
      <div className="flex pt-4 pb-16 mx-auto">
        <a
          href="https://discord.gg/WpwYzsT8Jv"
          target="_blank"
          rel="noreferrer"
          className="self-center"
        >
          <Discord className="fill-current w-7 hover:animate-bounce sm:mr-4" />
        </a>
        <a
          href="https://github.com/BibliothecaForAdventurers"
          target="_blank"
          rel="noreferrer"
          className="self-center"
        >
          <Github className="fill-current w-7 hover:animate-bounce sm:mr-4" />
        </a>
        <a
          href="https://twitter.com/LootRealms"
          target="_blank"
          rel="noreferrer"
          className="self-center"
        >
          <Twitter className="w-6 fill-current hover:animate-bounce sm:mr-4" />
        </a>
      </div>

      <div className="flex pb-4 mx-auto text-body">
        {/* Made with <Heart className="h-6 px-2 fill-current" /> by{' '} */}
        <a
          href="https://bibliothecadao.xyz"
          target="_blank"
          rel="noreferrer"
          className="ml-2"
        >
          {'  '}Bibliotheca DAO
        </a>
      </div>
    </div>
  );
};
