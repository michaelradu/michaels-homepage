module.exports = {
  reactStrictMode: true,
  swcMinify: true,
 // Add your Next.js config here
 webpack: (config) => {
  config.module.rules.push({
    test: /\.(glb)$/i,
    use: {
      loader: 'file-loader',
      options: {
        publicPath: '/_next/static/files',
        outputPath: 'static/files',
        name: '[name].[ext]',
      },
    },
  });

  return config;
},
}
