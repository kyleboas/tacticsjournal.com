---
layout: default
---

{% assign grouped_posts = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% assign years = grouped_posts | map: "name" %}

{% for year in grouped_posts %}
  <div class="archive-year" data-year="{{ year.name }}" {% unless forloop.first %}style="display: none;"{% endunless %}>
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

<div class="year-nav">
  {% for year in years %}
    {% unless forloop.first %}
    {% endunless %}
    <a href="#" class="year-link" data-year="{{ year }}">{{ year }}</a>
  {% endfor %}
</div>

<style>
.year-nav {
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
}

.year-link {
  color: #333;
  text-decoration: none;
  font-weight: bold;
  margin: 0 5px;
  cursor: pointer;
}

.year-link:hover {
  text-decoration: underline;
}

.year-separator {
  margin: 0 5px;
  color: #999;
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

<script>
document.addEventListener("DOMContentLoaded", function() {
  const yearLinks = document.querySelectorAll(".year-link");
  const years = document.querySelectorAll(".archive-year");

  function updateYearNavigation(activeYear) {
    const navContainer = document.querySelector(".year-nav");
    
    // Regenerate year navigation excluding the active year
    let newNavHtml = "";
    const allYears = [...yearLinks].map(link => link.dataset.year);
    
    allYears.forEach((year, index) => {
      if (year !== activeYear) {
        if (newNavHtml !== "") {
          newNavHtml += ' <span class="year-separator">|</span> ';
        }
        newNavHtml += `<a href="#" class="year-link" data-year="${year}">${year}</a>`;
      }
    });

    navContainer.innerHTML = newNavHtml;

    // Reattach event listeners to the new links
    document.querySelectorAll(".year-link").forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        showYear(this.getAttribute("data-year"));
      });
    });
  }

  function showYear(selectedYear) {
    // Hide all years
    years.forEach(year => {
      year.style.display = "none";
    });

    // Show the selected year
    document.querySelector(`.archive-year[data-year='${selectedYear}']`).style.display = "block";

    // Update the navigation links
    updateYearNavigation(selectedYear);
  }

  // Set initial navigation state
  if (yearLinks.length > 0) {
    const initialYear = yearLinks[0].getAttribute("data-year");
    updateYearNavigation(initialYear);
  }
});
</script>