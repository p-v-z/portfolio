import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Fountain from '~/svg/fountain.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <p className='mt-2 text-sm text-gray-800'>
              Since I was a child, I have had a lifelong passion for computer
              technologies, particularly in the realm of video games. I have
              honed my skills in design, visual, audio, and logical reasoning to
              be able to create a seamless and enjoyable user experience. I have
              a good amount of work experience in Unity C# development,
              including AR/VR applications, as well as experience in web
              development with JavaScript and cloud computing. My adaptability
              and ability to quickly learn and understand new concepts and
              technologies have allowed me to successfully contribute to
              professional, high-quality projects which run live and make people
              lots of money. Some of my proudest achievementa including winning
              a prize for the creation of a location based video game, and
              speaking at an international scientific conference.
            </p>
            <p className='mt-2 text-sm text-gray-700'></p>

            <Fountain className='text-9xl' />

            <div className='layout mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8'>
              <div className='mx-auto max-w-3xl'>
                <ButtonLink
                  className='mt-6 flex-auto'
                  href='/components'
                  variant='light'
                >
                  See all components
                </ButtonLink>
                <br />
                <ArrowLink
                  className='mt-5 flex-auto'
                  href='https://github.com/p-v-z/portfolio'
                >
                  See the repository
                </ArrowLink>
                <br />
              </div>
            </div>

            <footer className='absolute bottom-2 items-center justify-center text-center text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://github.com/p-v-z'>
                Petrie van Zyl
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
