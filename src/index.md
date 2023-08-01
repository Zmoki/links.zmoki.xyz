---
layout: layouts/base.njk
---
# Zarema Khalilova

<p>Contemporary Artist ✨ Software Engineer ✨ Kabardian girl in Cyprus</p>

<p>Here are the profiles:</p>

<ul>
  {% for profile in profiles %}
    <li>
      <a href="{{ profile.URL }}">{{ profile.Platform }}</a>
    </li>
  {% endfor %}
</ul>

<footer>
  <p><small><a href="https://github.com/Zmoki/links.zmoki.xyz">Source code on GitHub</a></small></p>
  <p><small>Copyright © 2023 Zarema Khalilova</small></p>
</footer>
