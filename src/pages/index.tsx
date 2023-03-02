import * as React from 'react';

import { Header } from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import { Resume } from '@/components/layout/Resume';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

import Construction from '~/svg/construction.svg';
import Fountain from '~/svg/fountain.svg';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <div className='fixed inset-0 flex justify-center'>
        <div className='flex w-full'>
          <div className='w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20' />
        </div>
      </div>
      <div className='relative'>
        <Header />
        <main>
          {' '}
          <section className='bg-white'>
            <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
              <p className='mt-10 text-sm text-gray-800'>
                Since I was a child, I have had a lifelong passion for computer
                technologies, particularly in the realm of video games. I have
                honed my skills in design, visual, audio, and logical reasoning
                to be able to create a seamless and enjoyable user experience. I
                have a good amount of work experience in Unity C# development,
                including AR/VR applications, as well as experience in web
                development with JavaScript and cloud computing. My adaptability
                and ability to quickly learn and understand new concepts and
                technologies have allowed me to successfully contribute to
                professional, high-quality projects which run live and make
                people lots of money. Some of my proudest achievementa including
                winning a prize for the creation of a location based video game,
                and speaking at an international scientific conference.
              </p>
              <p className='mt-2 text-sm text-gray-700'></p>

              <Fountain className='mb-5 text-8xl' />
              <Resume />
              <div className='svg-container'>
                <Construction className='text-9xl' />
              </div>

              <footer className='absolute bottom-2 items-center justify-center text-center text-gray-700'>
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
                <br />© {new Date().getFullYear()} By{' '}
                <UnderlineLink href='https://github.com/p-v-z'>
                  Petrie van Zyl
                </UnderlineLink>
              </footer>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
