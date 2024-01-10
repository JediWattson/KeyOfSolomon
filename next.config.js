module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(wgsl|glsl|vs|fs)$/,
      loader: 'ts-shader-loader'
    })
    return config
  },
  images: {
    remotePatterns: [
      {
        hostname: "images-assets.nasa.gov",
      },
    ],
  },
};
