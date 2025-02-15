---
layout: default
---

{% assign grouped_posts = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in grouped_posts %}
  <div class="archive-year">
    <div class="year-month-wrapper">
      <h2 class="year-archive">{{ year.name }}</h2>
      <h3 class="month-archive">{{ month.name }}</h3>
    </div>
    <div class="year-archive">
      {% assign month_posts = year.items | group_by_exp: "post", "post.date | date: '%B'" %}
      {% for month in month_posts %}
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

            {% assign title = post.title %}
            {% if title.size > 38 %}
              {% assign title = title | slice: 0, 35 | append: "..." %}
            {% endif %}

            <li>
              <div class="post-title-archive">
                <a href="{{ post.url }}">{{ title }}</a>
                <span class="dots-archive"></span>
              </div>
              <span class="post-date-archive">{{ day }}{{ suffix }}</span>
            </li>
          {% endfor %}
        </ul>
      {% endfor %}
    </div>
  </div>
{% endfor %}

<style>
/* Layout for the year and month on the same line */
.year-month-wrapper {
  display: flex;
  justify-content: space-between; /* Aligns year on the left, month on the right */
  align-items: center; /* Ensures proper vertical alignment */
  width: 100%;
  padding: 5px 0;
  border-bottom: 1px solid #ccc; /* Optional separator */
}

/* Styling for year */
.year-archive {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

/* Styling for month */
.month-archive {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

/* Styling for the post list */
.archive-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Each post entry */
.archive-list li {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-family: ui-serif, serif;
  font-weight: normal;
  color: #000;
}

/* Wrapper for post title and dots */
.post-title-archive {
  display: flex;
  flex-grow: 1; /* Ensures title & dots fill available space */
  align-items: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* Title styling */
.post-title-archive a {
  font-size: 14px;
  color: #000;
  text-decoration: none;
  flex-shrink: 0; /* Prevents text from shrinking */
}

/* Dots extending to end of title */
.dots-archive {
  flex-grow: 1; /* Makes dots fill remaining space */
  border-bottom: 1px dotted #999;
  margin-left: 10px;
  height: 1px;
}

/* Date stays aligned */
.post-date-archive {
  white-space: nowrap;
}
</style>