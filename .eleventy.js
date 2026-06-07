module.exports = function (eleventyConfig) {
  // 静的ファイルをそのままコピー
  eleventyConfig.addPassthroughCopy("public");

  // 記事を日付の新しい順に並べる
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
  });

  // 日付フォーマット（日本語表示）
  eleventyConfig.addFilter("dateJP", function (date) {
    return new Date(date).toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
