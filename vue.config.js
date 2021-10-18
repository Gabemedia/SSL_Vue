module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      title: "Secret Swingerlust",
    },
  },
};

module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Secret Swingerlust";
      return args;
    });
  },
};
