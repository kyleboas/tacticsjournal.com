---
layout: default
---

{% assign grouped_posts = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in grouped_posts %}
  <div class="archive-year">
    {% assign first_month_displayed = false %}
    {% assign month_posts = year.items | group_by_exp: "post", "post.date | date: '%B'" %}
    
    {% for month in month_posts %}
      <div class="year-month">
        {% if first_month_displayed == false %}
          <h3 class="year">{{ year.name }}</h3>
          {% assign first_month_displayed = true %}
        {% else %}
          <h3 class="year-placeholder"></h3>
        {% endif %}
        <h3 class="month">{{ month.name }}</h3>
      </div>

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
            <div class="post-title-archive">
              <a href="{{ post.url }}">{{ post.title }}</a>
              <span class="dots-archive"></span>
            </div>
            <span class="post-date-archive">{{ day }}{{ suffix }}</span>
          </li>
        {% endfor %}
      </ul>
    {% endfor %}
  </div>
{% endfor %}

<style>
.year-month {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
}

.year {
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  margin: 0;
  
  padding-top: 10px;
}

.year-placeholder {
  visibility: hidden;
}

.month {
  text-align: right;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
}

.archive-list {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 40px;
}

.archive-list li {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-family: ui-serif, serif;
  font-weight: normal;
  color: #000;
  align-items: center;
}

.post-title-archive {
  display: flex;
  flex: 10%;
  min-width: 0;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.post-title-archive a {
  font-size: 14px;
  color: #000;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.dots-archive {
  flex-grow: 1;
  border-bottom: 1px dotted #999;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 6px;
  align-self: flex-end;
}

.post-date-archive {
  white-space: nowrap;
}
</style>