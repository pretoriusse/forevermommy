window.addEventListener('DOMContentLoaded', function () {
    resizeHeroBanner();
    window.addEventListener('resize', resizeHeroBanner);
});

function resizeHeroBanner() {
    var contentWrapperInnerPaddingTop = parseFloat(getElementsComputedStyleProperty('.content-wrapper .content-inner > div', 'padding-top'));
    var headerHeight = parseFloat(getElementsComputedStyleProperty('.dynamicheadercontainer', 'height'));
    var heroInnerConentHeight = parseFloat(getElementsComputedStyleProperty('.hero-section.banner .hero-content-height .hero-content-inner-height', 'height'));
    var heroInnerConentHeight1 = parseFloat(getElementsComputedStyleProperty('.hero-section.hero-layout3 .hero-content-height .hero-content-inner-height', 'height'));
    var heroInnerConentHeight2 = parseFloat(getElementsComputedStyleProperty('.hero-section.hero-layout4 .hero-content-height .hero-content-inner-height', 'height'));
    if (Number.isNaN(headerHeight)) {
        headerHeight = 200;
    }

    document.querySelectorAll('.hero-section.banner .hero-content-height').forEach(function (elm) {
        elm.style.height = window.innerHeight - contentWrapperInnerPaddingTop - headerHeight + 'px';
        elm.style.minHeight = heroInnerConentHeight + 'px';
    });

    
    document.querySelectorAll('.hero-section.hero-layout3 .hero-content-height').forEach(function (elm) {
        if (window.innerWidth > 768) {
            elm.style.height = window.innerHeight - contentWrapperInnerPaddingTop - headerHeight + 'px';
            elm.style.minHeight = heroInnerConentHeight1 + 'px';
        }
        else {
            elm.style.height = null;
            elm.style.minHeight = null;
        }
    });

    document.querySelectorAll('.hero-section.hero-layout4 .hero-content-height').forEach(function (elm) {
        if (window.innerWidth > 768) {
            elm.style.height = window.innerHeight - contentWrapperInnerPaddingTop - headerHeight + 'px';
            elm.style.minHeight = heroInnerConentHeight2 + 'px';
        }
        else {
            elm.style.height = null;
            elm.style.minHeight = null;
        }
    });
}

function getElementsComputedStyleProperty(selector, propertyName) {
    var element = document.querySelector(selector);
    return element ? window.getComputedStyle(element).getPropertyValue(propertyName) : null;
}
