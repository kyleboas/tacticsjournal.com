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
              <div class="post-wrapper">
                <span class="post-title-archive">
                  <a href="{{ post.url }}">{{ post.title }}</a>
                </span>
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
  flex-direction: column; /* Stack items properly */
  font-size: 14px;
  font-family: ui-serif, serif;
  font-weight: normal;
  color: #000;
}

.post-wrapper {
  display: flex;
  width: 100%;
  align-items: flex-end; /* Ensures dots align with the last text line */
}

.post-title-archive {
  flex: 1;
  min-width: 70%;
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
  align-self: flex-end; /* Aligns dots with the bottom of the title */
}

.post-date-archive {
  white-space: nowrap;
}
</style>