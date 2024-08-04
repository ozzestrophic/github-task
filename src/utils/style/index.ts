type Colors = {
  primary_background: string;
  secondary_background: string;
  secondary_border: string;
  primary_text: string;
  secondary_text: string;
  tertiary_text: string;
  accent_color: string;
  accent_color_faded: string;
};

const COLORS_LIGHT: Colors = {
  primary_background: '#FFFFFF',
  secondary_background: '#FAFCFE',
  secondary_border: '#FFFFFF',
  primary_text: '#2B1190',
  secondary_text: '#000000',
  tertiary_text: '#7B848D',
  accent_color: '#68DDBA',
  accent_color_faded: 'rgba(104,221,186,0.25)',
};
const COLORS_DARK: Colors = {
  primary_background: '#000000',
  secondary_background: '#161B21',
  secondary_border: 'rgba(204,212,221,0.2)',
  primary_text: '#FFFFFF',
  secondary_text: '#FFFFFF',
  tertiary_text: '#CCD4DD',
  accent_color: '#68DDBA',
  accent_color_faded: 'rgba(104,221,186,0.25)',
};

export const COLORS = {
  light: COLORS_LIGHT,
  dark: COLORS_DARK,
};
