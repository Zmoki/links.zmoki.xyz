---
layout: layouts/base.njk
---
<style>
  .profiles {
    list-style: none;
    padding: 0;
    columns: 2;
  }
  .profiles-item {
    padding: 0.5em 0;
  }
</style>
# Zarema Khalilova

Contemporary Artist ✨ Software Engineer ✨ Kabardian girl in Cyprus

---

Here are the profiles:

<ul class="profiles">
  {% for profile in profiles %}<li class="profiles-item"><a rel="me" href="{{ profile.URL }}">{{ profile.Platform }}</a></li>{% endfor %}
</ul>
