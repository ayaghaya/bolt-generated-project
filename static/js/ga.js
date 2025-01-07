const analyticsId = 'RPA_GA_ID';
!(function(a, e, t, c, n, o, s) {
    (a.GoogleAnalyticsObject = n),
        (a.ga =
            a.ga ||
            function() {
                (a.ga.q = a.ga.q || []).push(arguments);
            }),
        (a.ga.l = +new Date()),
        (o = e.createElement(t)),
        (s = e.getElementsByTagName(t)[0]),
        (o.async = 1),
        (o.src = c),
        s.parentNode.insertBefore(o, s);
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga'),
    ga('create', analyticsId, 'auto'),
    ga('set', 'checkProtocolTask', function() {}),
    ga('require', 'displayfeatures');
