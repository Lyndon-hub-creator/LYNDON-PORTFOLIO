export type GalleryItemType = 'image' | 'video';

export interface GalleryItem {
  type: GalleryItemType;
  src: string;
  poster?: string;
  caption: string;
}

export interface WorkCategory {
  title: string;
  desc: string;
  cover: string;
  tags: string[];
  mediaType: 'image' | 'video';
  ratio: 'portrait' | 'square';
  gallery: GalleryItem[];
}

export const categories: WorkCategory[] = [
  {
    title: 'Web Design',
    desc: 'Custom websites and landing pages designed to look sharp on every screen — from portfolio sites to small-business storefronts.',
    cover:
      'https://images.pexels.com/photos/221043/pexels-photo-221043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['UI/UX', 'Landing Pages', 'Responsive'],
    mediaType: 'image',
    ratio: 'portrait',
    gallery: [
      {
        type: 'image',
        src: 'screencapture-kaleaheightscebubylyndonopalla-bolt-host-2026-08-26-00_22_26.png',
        caption: 'Kalea Heights Landing Page',
      },
      {
        type: 'image',
        src: 'screencapture-modern-single-page-r-oddi-bolt-host-2026-08-26-05_07_58.png',
        caption: 'Verdon Parc Landing Page ',
      },
    ],
  },
  {
    title: 'Social Media Management',
    desc: 'Full-feed management — content planning, post design, captions, and scheduling so your brand stays active and on-message.',
    cover:
      'https://images.pexels.com/photos/4549408/pexels-photo-4549408.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Content Calendars', 'Branding', 'Engagement'],
    mediaType: 'image',
    ratio: 'square',
    gallery: [
      {
        type: 'image',
        src: 'Screenshot_(4).png',
        caption: 'Realstate Page',
      },
      {
        type: 'image',
        src: 'Screenshot_2026-08-26_010405.png',
        caption: 'Reimagined Studio Page',
      },
      {
        type: 'image',
        src: 'Screenshot_2026-08-26_045013.png',
        caption: 'Result of ads',
      },
    ],
  },
  {
    title: 'Short-Form Video',
    desc: 'Reels, TikToks, and Shorts edited to hook in the first second — fast cuts, clean captions, and pacing built for retention.',
    cover:
      'https://images.pexels.com/photos/695730/pexels-photo-695730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Reels', 'TikTok', 'Shorts'],
    mediaType: 'video',
    ratio: 'portrait',
    gallery: [
      {
        type: 'video',
        src: 'https://www.pexels.com/download/video/39202979/',
        poster:
          'https://images.pexels.com/photos/6621440/pexels-photo-6621440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        caption: 'Realstate Video',
      },
      {
        type: 'video',
        src: 'https://www.pexels.com/download/video/39203050/',
        poster:
          'https://images.pexels.com/photos/4966483/pexels-photo-4966483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        caption: 'Realstate Video',
      },
    ],
  },
];
