const prod = process.env.NODE_ENV === 'production';

module.exports = function(api) {
  api.cache.forever();
  return {
    plugins: ['emotion'],
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: process.env.BABEL_ENV === 'esm' ? false : 'commonjs',
        },
      ],
      '@babel/preset-react',
      prod && ['minify', { flipComparisons: false }],
    ].filter(Boolean),
  }
};
