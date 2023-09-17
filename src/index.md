---
layout: layouts/base.njk
---
<style>
  .links {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    gap: 1em;
  }
  .links__item {
    padding: 0.5em 0;
  }
</style>
# Zarema Khalilova

Contemporary Artist ✨ Woman in Tech & Web3 ✨ Kabardian in Cyprus

---

Here are the profiles:

<ul class="links">
  {% for profile in profiles %}<li class="links__item"><a rel="me" href="{{ profile.URL }}">{{ profile.Platform }}</a></li>{% endfor %}
</ul>

Message me

<ul class="links">
  {% for contact in contacts %}<li class="links__item"><a rel="me" href="{{ contact.url }}">{{ contact.name }}</a></li>{% endfor %}
</ul>
