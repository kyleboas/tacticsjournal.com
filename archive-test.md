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
            {% assign day = post.date | date: '%-d' %}
            {% assign last_digit = day | slice: -1 %}
            {% assign suffix = 'th' %}
            
            {% if day != '11' and day != '12' and day != '13' %}
              {% if last_digit == '1' %}
                {% assign suffix = 'st' %}
              {% elsif last_digit == '2' %}
                {% assign suffix = 'nd' %}
              {% elsif last_digit == '3' %}
                {% assign suffix = 'rd' %}
              {% endif %}
            {% endif %}

            <li>
                <span class="post-title-archive">
                  {% assign title = post.title %}
{% if title.size > 35 %}
  {% assign title = title | slice: 0, 37 | append: "..." %}
{% endif %}
<a href="{{ post.url }}">{{ title }}</a>
                <span class="dots-archive"></span>
                <span class="post-date-archive">{{ day }}{{ suffix }}</span>
                </span>
            </li>
          {% endfor %}
        </ul>
      {% endfor %}
    </div>
  </div>
{% endfor %}

<style>
.archive-year {
}

.year-archive {
  max-width: 100%;
  font-weight: bold;
  text-align: left;
  margin: 0;
  padding-top: 10px;
}

.month-archive {
  text-align: right;
  font-size: 14px;
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
  flex-direction: column;
  font-size: 14px;
  font-family: ui-serif, serif;
  font-weight: normal;
  color: #000;
}

.post-wrapper {
  display: flex;
  width: 100%;
  align-items: flex-end;
}

.post-title-archive {
  display: flex; 
  word-wrap: break-word;
  overflow-wrap: break-word; 
}

.post-title-archive a {
  font-size: 14px;
  color: #000;
  text-decoration: none;
}

.dots-archive {
  flex-grow: 1;
  border-bottom: 1px dotted #999;
  margin-left: 10px;
  margin-bottom: 6px;
  align-self: flex-end;
}

.post-date-archive {
  white-space: nowrap;
}
</style>