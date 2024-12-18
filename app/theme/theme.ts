/**
 * Themes allow you to change the colors of various components provided by React Navigation. You can use themes to:
 * Customize the colors match your brand
 * Provide light and dark themes based on the time of the day or user preference
 */
import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {colors} from 'theme/colors';
import {ExtendedTheme} from 'theme/theme.types';
import {settings} from 'settings';
import {theme1, theme2, theme3} from 'theme/themes';

export type Colors = typeof lightThemeColors;
export type ThemeList = keyof typeof theme;

/**
 * Selected theme from settings file
 */
const selectedTheme = settings.theme;

/**
 * Define list of available theme
 * To add custom theme navigate to ./themes and export custom theme
 * Define custom theme below and update value as custom theme name in settings.ts
 */
const theme = {
  theme1,
  theme2,
  theme3,
};

const commonColors = {
  common: {
    success: colors.success,
    danger: colors.danger,
    warning: colors.warning,
    info: colors.info,
    spinner: 'rgba(0, 0, 0, 0.5)',
  },
  light: {},
  dark: {},
};

/**
 * Light theme colors
 */
const lightThemeColors = {
  ...DefaultTheme.colors,
  ...colors,
  ...commonColors.common,
  ...commonColors.light,
  ...theme[selectedTheme].light,
};

/**
 * Dark theme colors
 */
const darkThemeColors = {
  ...DarkTheme.colors,
  ...colors,
  ...commonColors.common,
  ...commonColors.dark,
  ...theme[selectedTheme].dark,
};

/** Light mode theme and colors */
export const lightTheme: ExtendedTheme = {
  ...DefaultTheme,
  dark: false,
  colors: lightThemeColors,
};

/** Dark mode theme and colors */
export const darkTheme: ExtendedTheme = {
  ...DarkTheme,
  dark: true,
  colors: darkThemeColors,
};