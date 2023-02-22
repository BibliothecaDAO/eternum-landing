import Briq from '/public/briq.svg';
import Cartridge from '/public/cartridge.svg';
import Matchbox from '/public/Matchbox.svg';
import Starkware from '/public/starkware.svg';
import Topology from '/public/topology.svg';
import Yagi from '/public/yagi.svg';

export const PartnerBanner = () => {
  const partners = [
    {
      icon: (
        <Starkware className="w-48 grayscale brightness-200 hover:grayscale-0" />
      ),
      url: 'https://starkware.co/starknet/',
    },
    {
      icon: (
        <Cartridge className="w-48 grayscale brightness-[0.4] hover:brightness-100 hover:grayscale-0" />
      ),
      url: 'https://cartridge.gg/',
    },
    {
      icon: <Yagi className="w-32 grayscale hover:grayscale-0" />,
      url: 'https://yagi.fi/',
    },
    {
      icon: <Briq className="w-28 grayscale hover:grayscale-0" />,
      url: 'https://briq.construction',
    },
    {
      icon: (
        <Topology className="w-48 grayscale brightness-[0.4] hover:brightness-100 hover:grayscale-0" />
      ),
      url: 'https://topology.gg/',
    },
    {
      icon: (
        <Matchbox className="w-12 grayscale brightness-[0.4] hover:brightness-100 hover:grayscale-0" />
      ),
      url: 'https://www.matchboxdao.com/',
    },
  ];
  return (
    <div className="container relative p-4 mx-auto my-10 border rounded border-white/30">
      <div className="flex flex-wrap justify-center text-center">
        <h4 className="self-center pt-4 ">We work with</h4>
        {partners.map((a, index) => {
          return (
            <div key={index} className="self-center p-4 px-6">
              {' '}
              <a href={a.url} target="_blank" rel="noreferrer">
                {a.icon}
              </a>{' '}
            </div>
          );
        })}
      </div>
    </div>
  );
};
