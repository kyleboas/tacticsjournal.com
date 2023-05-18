---
---

function autocompleteMatch(input) {
  if (input === '') {
    return [];
  }
  var reg = new RegExp(input);
  var matchingTerms = [];

  // Replace search_terms with your blog post tags and categories
  {% for post in site.posts %}
    {% for tag in post.tags %}
      if (tag.match(reg)) {
        matchingTerms.push(tag);
      }
    {% endfor %}

    {% for category in post.categories %}
      if (category.match(reg)) {
        matchingTerms.push(category);
      }
    {% endfor %}
  {% endfor %}

  return matchingTerms;
}
