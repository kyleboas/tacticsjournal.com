{% assign allTags = "" %}
{% assign allCategories = "" %}

{% for post in site.posts %}
  {% assign postTags = post.tags | join: "," %}
  {% assign postCategories = post.categories | join: "," %}

  {% assign allTags = allTags | append: postTags | append: "," %}
  {% assign allCategories = allCategories | append: postCategories | append: "," %}
{% endfor %}

let TagsCategories = [];

// Add tags to TagsCategories array
let tags = "{{ allTags | split: ',' | uniq | join: '","' }}";
TagsCategories.push(...tags.split(","));

// Add categories to TagsCategories array
let categories = "{{ allCategories | split: ',' | uniq | join: '","' }}";
TagsCategories.push(...categories.split(","));

// Remove duplicates from the TagsCategories array
TagsCategories = [...new Set(TagsCategories)];

console.log("TagsCategories:", TagsCategories);
console.log("Tags:", allTags);
console.log("Categories:", allCategories);
