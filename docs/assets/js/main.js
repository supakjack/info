/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

;(function ($) {
  var $window = $(window),
    $body = $('body'),
    $wrapper = $('#page-wrapper'),
    $banner = $('#banner'),
    $header = $('#header')

  // Breakpoints.
  breakpoints({
    xlarge: ['1281px', '1680px'],
    large: ['981px', '1280px'],
    medium: ['737px', '980px'],
    small: ['481px', '736px'],
    xsmall: [null, '480px']
  })

  // Play initial animations on page load.
  $window.on('load', function () {
    window.setTimeout(function () {
      $body.removeClass('is-preload')
    }, 100)
  })

  // Mobile?
  if (browser.mobile) $body.addClass('is-mobile')
  else {
    breakpoints.on('>medium', function () {
      $body.removeClass('is-mobile')
    })

    breakpoints.on('<=medium', function () {
      $body.addClass('is-mobile')
    })
  }

  // Scrolly.
  $('.scrolly').scrolly({
    speed: 1500,
    offset: $header.outerHeight()
  })

  // Menu.
  $('#menu')
    .append('<a href="#menu" class="close"></a>')
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: 'right',
      target: $body,
      visibleClass: 'is-menu-visible'
    })

  // Header.
  if ($banner.length > 0 && $header.hasClass('alt')) {
    $window.on('resize', function () {
      $window.trigger('scroll')
    })

    $banner.scrollex({
      bottom: $header.outerHeight() + 1,
      terminate: function () {
        $header.removeClass('alt')
      },
      enter: function () {
        $header.addClass('alt')
      },
      leave: function () {
        $header.removeClass('alt')
      }
    })
  }
})(jQuery)

// tyeping
const typedTextSpan = document.querySelector('.typed-text')
const cursorSpan = document.querySelector('.cursor')

const textArray = [
  'อยากทำเว็บไซต์',
  'ปรึกษาโปรเจค',
  'พัฒนาระบบ',
  'เรียนเขียนโปรแกรม'
]
const typingDelay = 200
const erasingDelay = 100
const newTextDelay = 750 // Delay between current and next text
let textArrayIndex = 0
let charIndex = 0

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing')
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex)
    charIndex++
    setTimeout(type, typingDelay)
  } else {
    cursorSpan.classList.remove('typing')
    setTimeout(erase, newTextDelay)
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing')
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    )
    charIndex--
    setTimeout(erase, erasingDelay)
  } else {
    cursorSpan.classList.remove('typing')
    textArrayIndex++
    if (textArrayIndex >= textArray.length) textArrayIndex = 0
    setTimeout(type, typingDelay + 1100)
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250)
})
