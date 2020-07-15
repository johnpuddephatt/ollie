module.exports = function(eleventyConfig) {

  // Copy files
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/assets');
  // eleventyConfig.addPassthroughCopy({ "./src/favicons/**/*": "./" });

  // Videos
  eleventyConfig.addCollection('videos', collection => {
    return collection.getFilteredByGlob('./src/videos/*.md');
  });

  // Categories
  eleventyConfig.addCollection('categories', collection => {
    return collection.getFilteredByGlob('./src/categories/*.md')
      .sort((a, b) => a.data.order - b.data.order);
  });

  eleventyConfig.addFilter('categoryFilter', function(collection, category) {
    if (!category) return collection;
      const filtered = collection.filter(item => item.data.category == category)
      return filtered;
  });

  return {
    dir: {
      input: "./src",
      output: "./dist",
      data: `./_data/`,
      includes: `./_includes/`,
    }
  };
};
