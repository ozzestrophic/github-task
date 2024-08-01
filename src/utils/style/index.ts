type Colors = {
  primary_background: string;
  primary_text: string;
  secondary_text: string;
  darker_text: string;
};

const COLORS_LIGHT: Colors = {
  primary_background: '#212427',
  primary_text: '#F5F5F5',
  secondary_text: '#F5F5F5',
  darker_text: '#F5F5F5',
};
const COLORS_DARK: Colors = {
  primary_background: '#F5F5F5',
  primary_text: '#212427',
  secondary_text: '#212427',
  darker_text: '#212427',
};

export const COLORS = {
  light: COLORS_LIGHT,
  dark: COLORS_DARK,
};
