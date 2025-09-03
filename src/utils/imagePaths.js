// Helper function to get correct image paths
export const getImagePath = (path) => {
  // Remove leading slash if present and add it back
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `/${cleanPath}`;
};

// Common image paths
export const IMAGES = {
  logo: '/assets/img/logo.svg',
  logoWhite: '/assets/img/logo-white.svg',
  
  // Service icons
  serviceIcons: {
    featured1: '/assets/img/icon/service_featured_1.svg',
    featured2: '/assets/img/icon/service_featured_2.svg',
    featured3: '/assets/img/icon/service_featured_3.svg',
    featured4: '/assets/img/icon/service_featured_4.svg',
    card1: '/assets/img/icon/service_card_1.svg',
    card2: '/assets/img/icon/service_card_2.svg',
    card3: '/assets/img/icon/service_card_3.svg',
    card4: '/assets/img/icon/service_card_4.svg',
    card5: '/assets/img/icon/service_card_5.svg',
    card6: '/assets/img/icon/service_card_6.svg',
  },
  
  // About images
  about: {
    main: '/assets/img/normal/about_1_1.png',
    shape: '/assets/img/normal/about_shape_1.png',
  },
  
  // Hero images
  hero: {
    bg1: '/assets/photos/highlights/8.jpg',
    bg2: '/assets/photos/highlights/2.jpg',
    bg3: '/assets/photos/highlights/3.jpg',
    bg4: '/assets/photos/highlights/5.jpg',
    bg5: '/assets/photos/highlights/6.jpg',
    shape2: '/assets/img/hero/hero_shape_2_2.png',
    shape3: '/assets/img/hero/hero_shape_2_3.png',
  },
  
  // Feature icons
  features: {
    icon1: '/assets/img/icon/about_feature_1_1.svg',
    icon2: '/assets/img/icon/about_feature_1_2.svg',
  },
  
  // Theme images
  theme: {
    titleShape: '/assets/img/theme-img/title_shape_1.svg',
  }
};