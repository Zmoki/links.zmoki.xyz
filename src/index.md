---
layout: layouts/base.njk
---
# Zarema Khalilova

<p>Contemporary Artist ✨ Software Engineer ✨ Kabardian girl in Cyprus</p>

<p>Here are the profiles:</p>

<ul>
  {% for profile in profiles %}
    <li>
      <a href="{{ profile.URL }}">{{ profile.Platform }} {{ profile.Name }}</a>
    </li>
  {% endfor %}
</ul>
