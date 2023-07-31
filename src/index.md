---
layout: layouts/base.njk
---
# Zarema Khalilova

Here are my profiles:

<ul>
  {% for profile in profiles %}
    <li>
      <a href="{{ profile.URL }}">{{ profile.Platform }} {{ profile.Name }}</a>
    </li>
  {% endfor %}
</ul>
