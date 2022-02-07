import tw from 'twin.macro';
import Image from 'next/image';

const MdxComponents: {} = {
  p: (props) => {
    if (props.children.type === 'img') {
      console.log(props.children);
      return (
        <Image
          src={props.children.props.src}
          alt={props.children.props.alt}
          layout="fill"
          objectFit="cover"
        />
      );
    }
    return (
      <p tw="my-4" {...props}>
        {props.children}
      </p>
    );
  },
  // p: (props) => {
  //   const child = props.children;
  //   const hasImg = child.type === 'image';
  //   console.log(child);
  //   return hasImg ? (
  //     <Image src={props.src} alt={props.alt} layout="fill" {...props.props} />
  //   ) : (
  //     <p tw="my-4" {...props}>
  //       {props.children}
  //     </p>
  //   );
  // },
};

export default MdxComponents;
