// Mobile nav toggle
document.querySelector('.nav__toggle').addEventListener('click', function () {
  document.querySelector('.nav__links').classList.toggle('open');
});

// Filter functionality for Our Dogs page
var coatFilters = document.getElementById('coat-filters');
if (coatFilters) {
  coatFilters.addEventListener('click', function (e) {
    var btn = e.target.closest('.filter');
    if (!btn) return;
    coatFilters.querySelectorAll('.filter').forEach(function (f) { f.classList.remove('active'); });
    btn.classList.add('active');
    var filter = btn.getAttribute('data-filter');
    document.querySelectorAll('#dogs-grid .card').forEach(function (card) {
      if (filter === 'all' || card.getAttribute('data-coat') === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

// Filter functionality for News page
var newsFilters = document.getElementById('news-filters');
if (newsFilters) {
  newsFilters.addEventListener('click', function (e) {
    var btn = e.target.closest('.filter');
    if (!btn) return;
    newsFilters.querySelectorAll('.filter').forEach(function (f) { f.classList.remove('active'); });
    btn.classList.add('active');
    var filter = btn.getAttribute('data-filter');
    document.querySelectorAll('#news-timeline .news-entry').forEach(function (entry) {
      if (filter === 'all' || entry.getAttribute('data-category') === filter) {
        entry.style.display = '';
      } else {
        entry.style.display = 'none';
      }
    });
  });
}
