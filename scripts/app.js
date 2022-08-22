const section1 = document.getElementById('section1')

const section2 = document.getElementById('section2')

const lightBirds = document.querySelectorAll('.light-bird')
const darkbirds = document.querySelectorAll('.dark-bird')

const textSection = document.querySelector('#text-section')
const ctaSection = document.querySelector('#cta-section')

const KnowMoreBtn = document.getElementById('main-cta')

window.addEventListener('scroll', (e) => {
  e.preventDefault()
  // section1.style.position = 'fixed'

  //
  if (this.window.scrollY > 0) {
    //console.log(this.window.scrollY)

    if (section2.getBoundingClientRect().y < 450) {
      //console.log(section2.getBoundingClientRect().y)
    }

    lightBirds.forEach(function (bird) {
      bird.style.transform = `translateX(-${this.window.scrollY * 0.05}px)`

      darkbirds.forEach(function (bird) {
        bird.style.transform = `translateX(-${this.window.scrollY * 0.1}px)`
      })

      section1.style.transform = `translateY(-${this.window.scrollY * 0.1}px)`

      textSection.style.transform = `translateX(-${this.window.scrollY * 1}px)`

      ctaSection.style.transform = `translateX(${this.window.scrollY * 1}px)`
    })
  }
})
