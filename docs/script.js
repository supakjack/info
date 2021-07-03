$('.click_to_contact').click(function (e) {
  e.preventDefault()
  var url =
    'https://www.facebook.com/%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B8%8A%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%88%E0%B9%84%E0%B8%AD%E0%B9%82%E0%B8%9F%E0%B8%99-%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%96%E0%B8%B9%E0%B8%81-1606080176293084'
  window.open(url, '_blank').focus()
})

// tyeping
const typedTextSpan = document.querySelector('.typed-text')
const cursorSpan = document.querySelector('.cursor')

const textArray = [
  'อยากทำเว็บไซต์',
  'ปรึกษาโปรเจค',
  'พัฒนาระบบ',
  'อยากเรียนเขียนโปรแกรม'
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
