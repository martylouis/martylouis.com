import styled from '@emotion/styled';
import tw from 'twin.macro';

const MDXStyles = styled.div`
  ${tw`mt-16`}

  > * + * {
    ${tw`mt-8`}
  }

  p {
    ${tw`leading-relaxed`}
  }

  p > a {
    ${tw`font-semibold text-green-600 border-b-2 border-green-600`}
  }

  p > code {
    ${tw`px-1 text-pink-400 rounded`}
    font-size: 16px;
    background-color: hsl(229, 20%, 20%);
    border: solid 1px hsl(229, 20%, 25%);
  }

  blockquote {
    ${tw`py-4 font-serif lg:-ml-32`}

    p {
      ${tw`text-3xl font-extrabold leading-tight text-brand-purple-200`}
    }
  }

  ul,
  ol {
    ${tw`ml-4 list-outside`}
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  hr {
    ${tw`my-16 border-gray-700`}
  }

  h1,
  h2 {
    ${tw`pb-2 mt-16 -mb-8 font-serif text-4xl font-bold text-white`}
  }

  h3 {
    ${tw`mt-12 -mb-6 text-2xl font-bold text-gray-100`}
  }
  h4 {
    ${tw`text-lg`}
  }
  h5 {
    ${tw`text-lg`}
  }
  h6 {
    ${tw`text-sm`}
  }

  .palenight-theme {
    ${tw`text-sm rounded-sm lg:-mx-32`}
    max-width: 100vw;
    border: solid 1px hsl(229, 24%, 32%);

    code {
      font-family: 'Dank Mono', monospace;
    }
  }
`;

export default MDXStyles;
