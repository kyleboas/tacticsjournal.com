---
layout: default
---

{% assign grouped_posts = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in grouped_posts %}
  <div class="archive-year">
    <h2 class="year-archive">{{ year.name }}</h2>
    <div class="year-archive">
      {% assign month_posts = year.items | group_by_exp: "post", "post.date | date: '%B'" %}
      {% for month in month_posts %}
        <h3 class="month-archive">{{ month.name }}</h3>
        <ul class="archive-list">
          {% for post in month.items %}
            <li>
              <span class="post-title-archive"><a href="{{ post.url }}">{{ post.title }}</a></span>
              <span class="dots-archive"></span>
              <span class="post-date-archive">{{ post.date | date: '%-d' }}{{ post.date | date: '%-d' | append: 'th' }}</span>
            </li>
          {% endfor %}
        </ul>
      {% endfor %}
    </div>
  </div>
{% endfor %} 

<style>
.archive-year {
  display: flex;
  align-items: flex-start;
}

.year-archive {
  width: 20%;
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  margin: 0;
  padding-top: 10px;
}

.month-archive {
  text-align: right;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.archive-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.archive-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding: 5px 0;
}

.post-title-archive {
  white-space: nowrap;
}

.dots-archive {
  flex-grow: 1;
  border-bottom: 1px dotted #999;
  margin: 0 10px;
  margin-bottom: 2px;
}

.post-date {
  white-space: nowrap;
}
</style>