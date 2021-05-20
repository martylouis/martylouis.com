import Link from 'next/link';
import SEO from '../components/SEO';
import MartyLouisLogo from '@components/MartyLouisLogo';
import Box from '@components/Box';

const Page = ({ children }) => {
  return (
    <>
      <SEO />
      <Box
        css={{
          maxWidth: '54ch',
          mx: '4vw',

          '@sm': {
            mx: '8vw',
          },
          display: 'flex',
          flexFlow: 'column',
          h: '100vh',
        }}
      >
        <Box css={{ flexGrow: 1, flexShrink: 0 }}>
          {/* Header */}
          <Box
            as="header"
            css={{
              top: '0',
              py: '2vh',
              my: '2vh',
              '@sm': {
                py: '4vh',
                my: '4vh',
              },
            }}
          >
            <Link href="/" passHref>
              <Box
                as="a"
                css={{
                  maxWidth: '48px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <MartyLouisLogo css={{ flexShrink: '0' }} />
                <Box as="span" css={{ ml: '1rem' }}>
                  martylouis.com
                </Box>
              </Box>
            </Link>
            {/* PageHeaderNav */}
          </Box>
          <main>{children}</main>
        </Box>
        {/* Footer */}
        <Box
          as="footer"
          css={{
            mb: '4vh',
            '@sm': {
              mb: '8vh',
            },
          }}
        >
          <p>&copy; {new Date().getFullYear()} Marty Louis Co</p>
        </Box>
      </Box>
    </>
  );
};

export default Page;
