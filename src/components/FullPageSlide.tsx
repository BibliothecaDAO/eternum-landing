import Image from 'next/future/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface Props {
  image: string;
  content?: ReactNode;
  priority?: boolean;
}

export const FullPageSlide = ({ image, content, priority }: Props) => {
  const myLoader = ({
    src,
    width,
    quality,
  }: {
    src: any;
    width: any;
    quality?: any;
  }) => {
    if (width > 1280) {
      return `/_next/image?url=/realms-art/desktop/${src}-desktop.png&w=${width}&q=${
        quality || 75
      }`;
    } else if (width > 768) {
      return `/_next/image?url=/realms-art/tablet/${src}-tablet.png&w=${width}&q=${
        quality || 75
      }`;
    } else {
      return `/_next/image?url=/realms-art/mobile/${src}-mobile.png&w=${width}&q=${
        quality || 75
      }`;
    }
  };

  return (
    <div
      data-scrollspy-id={image}
      id={image}
      className="relative w-full h-screen section"
    >
      <Image
        alt=""
        loader={myLoader}
        src={image}
        className="object-cover w-full h-full"
        width="1920"
        height="900"
        sizes="100vw"
        priority={priority}
      />
      <div className="absolute top-0 w-full h-full sm:py-14">
        <div className="container h-full mx-auto ">{content}</div>
      </div>
    </div>
  );
};
