/*
  Spectral by HTML5 UP
  html5up.net | @ajlkn
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

; (function ($) {
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

// i18n setting
function findGetParameter(parameterName) {
  var result = null,
    tmp = []
  location.search
    .substr(1)
    .split('&')
    .forEach(function (item) {
      tmp = item.split('=')
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1])
    })
  return result
}

function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i')
  var separator = uri.indexOf('?') !== -1 ? '&' : '?'
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + '=' + value + '$2')
  } else {
    return uri + separator + key + '=' + value
  }
}

function setQueryStringParameter(name, value) {
  const params = new URLSearchParams(window.location.search)
  params.set(name, value)
  window.history.replaceState(
    {},
    '',
    decodeURIComponent(`${window.location.pathname}?${params}`)
  )
}

function renderLang() {
  document.getElementById('banner01').innerHTML = i18next.t('banner01')
  document.getElementById('banner02').innerHTML = i18next.t('banner02')
  document.getElementById('banner03').innerHTML = i18next.t('banner03')
  document.getElementById('banner04').innerHTML = i18next.t('banner04')
  document.getElementById('one01').innerHTML = i18next.t('one01')
  document.getElementById('one02').innerHTML = i18next.t('one02')
  document.getElementById('two01').innerHTML = i18next.t('two01')
  document.getElementById('two02').innerHTML = i18next.t('two02')
  document.getElementById('two03').innerHTML = i18next.t('two03')
  document.getElementById('two04').innerHTML = i18next.t('two04')
  document.getElementById('two05').innerHTML = i18next.t('two05')
  document.getElementById('two06').innerHTML = i18next.t('two06')
  document.getElementById('menu01').innerHTML = i18next.t('menu01')
}

i18next
  .init({
    lng: ['th', 'en'], // if you're using a language detector, do not define the lng option
    debug: true,
    resources: {
      en: {
        translation: {
          menu01: 'MENU',
          banner01: 'If you are having problems and need help...',
          banner02: 'I am happy to advise and teach you.',
          banner03: 'Contact/Ask',
          banner04: 'Learn more',
          one01: `Teaching, consulting, program development, web sites and projects <br />
          Web APPLICATION, Web API and IoT etc.`,
          one02: `Focus on Open Source tools such as Vue.js, Codeigniter, Node.JS,
          Bootstrap and etc.`,
          two01: 'teaching and consulting',
          two02: `Teaching and consulting services for people interested in studying and students
          Students who have problems with their studies or projects`,
          two03: `System and website development<br />`,
          two04: `Ready to develop and find solutions to deploy
          For you whether it's a website using Github Page service or hosting service.
          and the right VPS for the job`,
          two05: 'Write programs and fix bugs',
          two06: `Programming service in console application format
          and fix bugs according to functionality`
        }
      },
      th: {
        translation: {
          menu01: 'เมนู',
          banner01: 'หากคุณกำลังมีปัญหา และต้องการความช่วยเหลือ...',
          banner02: 'ผมยินดีให้คำปรึกษาและสอนคุณ',
          banner03: 'ติดต่อ/สอบถาม',
          banner04: 'เรียนรู้เพิ่มเติม',
          one01: `บริการสอน ปรึกษา พัฒนาโปรแกรม เว็บไชต์และโปรเจค <br />
          Web APPLICATION, Web API และ IoT เป็นต้น`,
          one02: `เน้นใช้เครื่องมือ Open Source เช่น Vue.js, Codeigniter, Node.JS,
          Bootstrap และ ฯลฯ`,
          two01: 'สอนและให้คำปรึกษา',
          two02: `บริการสอนและให้คำปรึกษาบุคคลทั่วไปที่สนใจศึกษา และนักเรียน นิสิต
          นักศึกษาที่มีปัญหากับการเรียนหรือโปรเจค`,
          two03: `พัฒนาระบบและเว็บไซต์<br />`,
          two04: `พร้อมพัฒนาและหา Solution ในการ Deploy
          ให้คุณไม่ว่าจะเป็นเว็บไซต์ที่ใช้บริการ Github Page หรือบริการ Host
          และ VPS ที่เหมาะสมกับงาน`,
          two05: 'เขียนโปรแกรมและแก้บัค',
          two06: `บริการเขียนโปรแกรมในรูปแบบ Console Application
          และแก้บัคตามฟังก์ชั่นการทำงาน`
        }
      }
    }
  })
  .then(function (t) {
    if (findGetParameter('lang')) {
      switch (findGetParameter('lang')) {
        case 'th':
          i18next.changeLanguage('th')
          i18next.languages
          $('.th-lang').css('text-decoration', 'underline')
          break
        case 'en':
          i18next.changeLanguage('en')
          i18next.languages
          $('.en-lang').css('text-decoration', 'underline')
          break
      }
    } else {
      setQueryStringParameter('lang', 'th')
      $('.th-lang').css('text-decoration', 'underline')
    }
    renderLang()
  })

$('.lang-bar').click(function (e) {
  e.preventDefault()
  const lang = $(e.currentTarget).text()
  if (lang == 'ไทย') {
    i18next.changeLanguage('th')
    i18next.languages
    window.location.href = updateQueryStringParameter(
      window.location.href,
      'lang',
      'th'
    )
  } else {
    i18next.changeLanguage('en')
    i18next.languages
    window.location.href = updateQueryStringParameter(
      window.location.href,
      'lang',
      'en'
    )
  }
  renderLang()
})

// tyeping
const typedTextSpan = document.querySelector('.typed-text')
const cursorSpan = document.querySelector('.cursor')

const textArray =
  findGetParameter('lang') == 'en'
    ?
    [
      'Make a website',
      'Project Consulting',
      'System development',
      'Programming'
    ] : ['อยากทำเว็บไซต์', 'ปรึกษาโปรเจค', 'พัฒนาระบบ', 'เรียนเขียนโปรแกรม']
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
