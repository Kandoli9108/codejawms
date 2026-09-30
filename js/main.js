(function () {
    var menu = document.getElementById('menu');
    var burger = document.getElementById('burger');
    var close = document.getElementById('close');

    function toggleMenu(open) {
        menu.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', open);
        document.body.style.overflow = open ? 'hidden' : '';
    }

    // Menu mobile
    if (burger) {
        burger.onclick = function () {
            toggleMenu(true);
        };

        close.onclick = function () {
            toggleMenu(false);
        };

        menu.querySelectorAll('a').forEach(function (link) {
            link.onclick = function () {
                toggleMenu(false);
            };
        });

        document.onkeydown = function (event) {
            if (event.key === 'Escape') {
                toggleMenu(false);
            }
        };
    }

    // Filter
    var filters = document.querySelectorAll('[data-filter]');

    filters.forEach(function (filter) {
        filter.onclick = function () {
            filters.forEach(function (item) {
                item.classList.remove('active');
                item.setAttribute('aria-pressed', 'false');
            });

            filter.classList.add('active');
            filter.setAttribute('aria-pressed', 'true');

            var category = filter.dataset.filter;

            document.querySelectorAll('[data-cat]').forEach(function (card) {
                card.hidden = !(
                    category === 'all' ||
                    card.dataset.cat === category
                );
            });
        };
    });

    // Contact form
    var form = document.getElementById('contactForm');

    if (form) {
        form.onsubmit = function (event) {
            event.preventDefault();

            if (!form.checkValidity()) {
                form.classList.add('was-validated');
                return;
            }

            form.reset();
            document.getElementById('sent').hidden = false;
        };
    }
})();

