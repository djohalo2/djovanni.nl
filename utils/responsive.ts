export const DESKTOP_BREAKPOINT = 1000;
export const TABLET_BREAKPOINT = 768;
export const MOBILE_BREAKPOINT = 480;

import { createMedia } from '@artsy/fresnel';

const AppMedia = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: TABLET_BREAKPOINT,
    lg: DESKTOP_BREAKPOINT
  }
});

// Generate CSS to be injected into the head
export const mediaStyle = AppMedia.createMediaStyle();
export const { Media, MediaContextProvider } = AppMedia;
