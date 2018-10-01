import Typography from 'typography';
import Lincoln from 'typography-theme-lincoln';
Lincoln.baseFontSize = '18px';

Lincoln.overrideThemeStyles = () => ({
 'a.gatsby-resp-image-link': {
  boxShadow: 'none',
 },
});

const typography = new Typography(Lincoln);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
 typography.injectStyles();
}

const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };
