import Image from 'next/image';
import ChatBubble from '@components/chat-bubble';
import Emoji from '@components/emoji';
import { hero } from '@data/home';
import { H1 } from '@components/typography';

export const Hero = ({ ...otherProps }) => {
  const { greeting, heading, subheading, photo } = hero;
  return (
    <section id="hero" {...otherProps}>
      <div className="container pt-8 pb-16 md:pt-16 md:text-center ">
        <H1>{heading}</H1>
        <div className="flex mt-8 mb-4 md:justify-center">
          <div className="relative">
            <Image
              className="w-full border-2 border-gray-200 rounded-full"
              src={photo.link}
              alt={photo.title}
              width="100"
              height="100"
            />
            <div className="absolute flex -ml-2 bottom-10 left-full">
              <ChatBubble>
                {greeting.text}{' '}
                <Emoji
                  type={greeting.emoji.type}
                  ariaLabel={greeting.emoji.label}
                />{' '}
              </ChatBubble>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mt-4 text-xl leading-snug text-gray-700 sm:mx-auto sm:text-2xl sm:tracking-snug">
          <p className="pb-8">{subheading}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
