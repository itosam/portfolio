import React from 'react';
import { Link } from 'react-router-dom';
import AssetLoader from './AssetLoader';
import { darkHighlightLinkClassName } from '../sharedClasses';

const publicUrl = process.env.PUBLIC_URL || '';
const frameBase = `${publicUrl}/assets/frames`;
const assetBase = `${publicUrl}/assets/creative%20assets`;
const creativeAssetAltText = {
  'asset_1.png': 'AWMA homepage hero graphic celebrating 250 years of American spirit',
  'asset_2.png': 'AWMA homepage hero graphic advertising 25 percent off sitewide',
  'asset_3-1.png': 'Mobile homepage hero for AWMA 250 years of American spirit campaign',
  'asset_3-2.png': 'Mobile homepage hero for AWMA 25 percent off sitewide campaign',
  'asset_4-1.png': 'AWMA sale graphic advertising 50 percent off retail through May 30',
  'asset_4-2.png': 'AWMA sale graphic featuring a martial artist and built for the dojo messaging',
  'asset_4-3.png': 'Narrow AWMA promotional sale graphic',
  'asset_5.png': 'AWMA homepage hero featuring a martial artist holding a sword with proven winners since 1972 messaging',
  'asset_6.png': 'Mobile AWMA homepage hero featuring proven winners since 1972 messaging',
  'asset_7-1.png': 'AWMA email design for spring training May savings',
  'asset_7-2.png': 'AWMA email design featuring product and promotional content blocks',
  'asset_7-3.png': 'AWMA email design for a wholesale account promotion',
  'asset_8-1.png': 'AWMA social post advertising 50 percent off sitewide with boxing gloves',
  'asset_8-2.png': 'AWMA social post featuring martial arts training equipment',
  'asset_8-3.png': 'AWMA social post featuring protective headgear and martial arts apparel',
  'asset_9-1.png': 'AWMA social post promoting 50 percent off retail orders with a boxer wearing red gloves',
  'asset_9-2.png': 'AWMA social post featuring a boxer wearing black gloves',
};

const framedSections = [
  {
    label: 'Homepage Hero',
    frame: 'bg1.png',
    assets: ['asset_1.png'],
    sectionClass: 'min-h-[52vw] max-h-[760px]',
    assetClass: 'w-[92%] max-w-[1100px] md:w-[84%]',
  },
  {
    label: 'Homepage Hero',
    frame: 'bg2.png',
    assets: ['asset_2.png'],
    sectionClass: 'min-h-[52vw] max-h-[760px]',
    assetClass: 'w-[92%] max-w-[1100px] md:w-[84%]',
  },
  {
    label: 'Homepage Hero Mobile',
    frame: 'bg3.png',
    assets: ['asset_3-1.png', 'asset_3-2.png'],
    sectionClass: 'min-h-[360px] md:min-h-[47vw]',
    innerClass: 'flex-row flex-wrap gap-4 md:gap-[7%]',
    assetClass: 'w-[42%] max-w-[165px] md:w-[40%] md:max-w-[220px]',
  },
  {
    label: 'Sale Graphics',
    frame: 'bg4.png',
    assets: ['asset_4-1.png', 'asset_4-2.png', { src: 'asset_4-3.png', className: 'hidden md:block' }],
    sectionClass: 'min-h-[620px] sm:min-h-[360px] md:min-h-[47vw]',
    innerClass: 'flex-col gap-5 sm:flex-row sm:gap-[4%] md:gap-[3%]',
    assetClass: 'w-[78%] max-w-[260px] sm:w-[30%] md:h-[58%] md:w-auto md:max-w-none',
  },
  {
    label: 'Homepage Hero',
    frame: 'bg5.png',
    assets: ['asset_5.png'],
    sectionClass: 'min-h-[52vw] max-h-[760px]',
    assetClass: 'w-[92%] max-w-[1100px] md:w-[84%]',
  },
  {
    label: 'Homepage Hero Mobile',
    frame: 'bg6.png',
    assets: ['asset_6.png'],
    sectionClass: 'min-h-[66vw] max-h-[820px]',
    assetClass: 'w-[58%] min-w-[170px] max-w-[340px] md:w-[30%]',
  },
  {
    label: 'Email',
    frame: 'bg7.png',
    assets: ['asset_7-1.png', 'asset_7-2.png', 'asset_7-3.png'],
    sectionClass: 'min-h-[980px] sm:min-h-[520px] md:min-h-[58vw] md:max-h-[850px]',
    innerClass: 'flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-5 md:flex-nowrap md:gap-[5%]',
    assetClass: 'w-[78%] max-w-[260px] sm:w-[30%] md:w-[26%] md:max-w-[300px]',
  },
  {
    label: 'Social Posts',
    frame: 'bg8.png',
    assets: ['asset_8-1.png', 'asset_8-2.png', 'asset_8-3.png'],
    sectionClass: 'min-h-[860px] sm:min-h-[420px] md:min-h-[52vw] md:max-h-[760px]',
    innerClass: 'flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-5 md:flex-nowrap md:gap-[4%]',
    assetClass: 'w-[78%] max-w-[300px] sm:w-[30%] md:w-[30%] md:max-w-[360px]',
  },
  {
    label: 'Social Posts',
    frame: 'bg9.png',
    assets: ['asset_9-1.png', 'asset_9-2.png'],
    sectionClass: 'min-h-[820px] sm:min-h-[480px] md:min-h-[58vw] md:max-h-[850px]',
    innerClass: 'flex-col gap-5 sm:flex-row sm:gap-[6%]',
    assetClass: 'w-[82%] max-w-[340px] sm:w-[42%] md:w-[38%] md:max-w-[440px]',
  },
];
const aboveFoldSections = framedSections.slice(0, 2);
const aboveFoldAssets = [
  ...aboveFoldSections.map((section) => `${frameBase}/${section.frame}`),
  ...aboveFoldSections.flatMap((section) =>
    section.assets.map((asset) => {
      const assetSrc = typeof asset === 'string' ? asset : asset.src;
      return `${assetBase}/${assetSrc}`;
    })
  ),
];

function CreativeSection({ section, lazy = true }) {
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden bg-[#1b1b1b] bg-cover bg-center px-5 py-12 md:px-8 md:py-16 ${section.sectionClass}`}
      style={{ backgroundImage: `url("${frameBase}/${section.frame}")` }}
    >
      <p className="absolute left-4 top-4 text-[11px] uppercase tracking-wide text-white/35 md:left-5 md:top-5 md:text-xs">
        {section.label}
      </p>
      <div className={`flex h-full w-full items-center justify-center ${section.innerClass || 'gap-0'}`}>
        {section.assets.map((asset) => {
          const assetSrc = typeof asset === 'string' ? asset : asset.src;
          const assetClassName = typeof asset === 'string' ? '' : asset.className;

          return (
          <img
            key={assetSrc}
            src={`${assetBase}/${assetSrc}`}
            alt={creativeAssetAltText[assetSrc] || `${section.label} creative asset`}
            loading={lazy ? 'lazy' : 'eager'}
            decoding="async"
            className={`block shrink-0 object-contain shadow-[0_20px_50px_rgba(0,0,0,0.35)] ${section.assetClass} ${assetClassName}`}
          />
          );
        })}
      </div>
    </section>
  );
}

function CreativePage() {
  return (
    <AssetLoader assets={aboveFoldAssets} dark>
    <main className="CreativePage min-h-screen w-full bg-black pl-[10%] pr-[6.666667%] pb-6 pt-[120px] font-DMSans text-white">
      <nav className="mb-8 text-sm text-white/55" aria-label="Breadcrumb">
        <Link to="/projects" className={darkHighlightLinkClassName}>
          Projects
        </Link>
        <span className="mx-2">/</span>
        <span>Creative - Asian World of Martial Arts</span>
      </nav>

      <header className="mb-10 grid gap-5 md:mb-12 md:grid-cols-[minmax(0,1fr)_320px] md:items-start lg:grid-cols-[minmax(0,1fr)_380px]">
        <h1 className="max-w-[620px] text-[24px] font-normal leading-[1.12] md:text-[42px]">
          Creative for Asian World
          <br />
          of Martial Arts
        </h1>
        <p className="max-w-[360px] text-base leading-[1.6] text-white/80 md:justify-self-end md:pt-2">
          Here you will find samples of creative assets I have worked on for AWMA.com
        </p>
      </header>

      <div className="space-y-4">
        <CreativeSection section={framedSections[0]} lazy={false} />
        <CreativeSection section={framedSections[1]} lazy={false} />

        <div className="grid gap-4 lg:grid-cols-2">
          <CreativeSection section={framedSections[2]} />
          <CreativeSection section={framedSections[3]} />
        </div>

        {framedSections.slice(4).map((section) => (
          <CreativeSection key={`${section.label}-${section.frame}`} section={section} />
        ))}
      </div>
    </main>
    </AssetLoader>
  );
}

export default CreativePage;
