import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AssetLoader from './AssetLoader';
import { darkHighlightLinkClassName } from '../sharedClasses';

const publicUrl = process.env.PUBLIC_URL || '';
const assetBase = `${publicUrl}/assets/creative%20assets-updated`;

const creativeSections = [
  {
    label: 'Homepage Hero - 250 years campaign',
    src: 'asset-1.png',
  },
  {
    label: 'Homepage Hero - 25 percent off campaign',
    src: 'asset-2.png',
  },
  {
    label: 'Homepage Hero Mobile',
    src: 'asset-3.png',
  },
  {
    label: 'Sale Graphics',
    src: 'asset-4.png',
  },
  {
    label: 'Homepage Hero - proven winners campaign',
    src: 'asset-5.png',
  },
  {
    label: 'Homepage Hero Mobile - proven winners campaign',
    src: 'asset-6.png',
  },
  {
    label: 'Email creative',
    src: 'asset-7.png',
  },
  {
    label: 'Social posts - product sale graphics',
    src: 'asset-8.png',
  },
  {
    label: 'Social posts - boxing campaign',
    src: 'asset-9.png',
  },
];

const firstSections = creativeSections.slice(0, 2);
const splitSections = creativeSections.slice(2, 4);
const remainingSections = creativeSections.slice(4);
const aboveFoldAssets = firstSections.map((section) => `${assetBase}/${section.src}`);

function CreativeImage({ section, lazy = true }) {
  return (
    <img
      src={`${assetBase}/${section.src}`}
      alt={section.label}
      loading={lazy ? 'lazy' : 'eager'}
      decoding="async"
      className="block h-auto w-full"
    />
  );
}

function CreativePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <AssetLoader assets={aboveFoldAssets} dark>
      <main className="CreativePage min-h-screen w-full bg-black px-[6%] pb-6 pt-[120px] font-DMSans text-white md:pl-[10%] md:pr-[6.666667%]">
        <nav className="mb-8 text-sm text-white/55" aria-label="Breadcrumb">
          <Link to={{ pathname: '/', hash: '#projects' }} className={darkHighlightLinkClassName}>
            Projects
          </Link>
          <span className="mx-2">/</span>
          <span>Creative - Asian World of Martial Arts</span>
        </nav>

        <header className="mb-10 grid gap-8 md:mb-12 md:grid-cols-[minmax(0,1fr)_360px] md:items-start">
          <h1 className="max-w-[720px] text-[28px] font-normal leading-[1.12] sm:text-[36px] md:text-[46px]">
            Creative for Asian World
            <br />
            of Martial Arts
          </h1>
          <p className="max-w-[360px] text-base leading-[1.6] text-white/85 md:justify-self-end md:pt-2">
            Here you will find samples of creative assets I&apos;ve worked on for AWMA.com
          </p>
        </header>

        <div className="space-y-4">
          {firstSections.map((section, index) => (
            <CreativeImage key={section.src} section={section} lazy={index > 0} />
          ))}

          <div className="grid gap-4 lg:grid-cols-2">
            {splitSections.map((section) => (
              <CreativeImage key={section.src} section={section} />
            ))}
          </div>

          {remainingSections.map((section) => (
            <CreativeImage key={section.src} section={section} />
          ))}
        </div>
      </main>
    </AssetLoader>
  );
}

export default CreativePage;
