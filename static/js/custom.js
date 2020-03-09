/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Loaders

******************************/

$(document).ready(function () {
  'use strict'

  /*

	1. Vars and Inits

	*/

  const header = $('.header')
  const menu = $('.menu')
  const burger = $('.hamburger')
  let menuActive = false
  const ctrl = new ScrollMagic.Controller()

  setHeader()

  $(window).on('resize', function () {
    setHeader()

    if (window.innerWidth > 1280) {
      if (menuActive) {
        closeMenu()
      }
    }
    // setTimeout(function () {
    //   jQuery('.main_content_scroll').mCustomScrollbar('update')
    // }, 375)
  })

  $(document).on('scroll', function () {
    setHeader()
  })

  initMenu()
  initLoaders()

  /*

	2. Set Header

	*/

  function setHeader () {
    if ($(window).scrollTop() > 91) {
      header.addClass('scrolled')
    } else {
      header.removeClass('scrolled')
    }
  }

  /*

	3. Init Menu

	*/

  function initMenu () {
    if ($('.hamburger').length && $('.menu').length) {
      const hamb = $('.hamburger')

      hamb.on('click', function () {
        if (!menuActive) {
          openMenu()
        } else {
          closeMenu()
        }
      })
    }
  }

  function openMenu () {
    menu.addClass('active')
    menuActive = true
  }

  function closeMenu () {
    menu.removeClass('active')
    menuActive = false
  }

  /*

	4. Init Loaders

	*/

  function initLoaders () {
    if ($('.loader').length) {
      const loaders = $('.loader')

      loaders.each(function () {
        const loader = this
        const endValue = $(loader).data('perc')

        const loaderScene = new ScrollMagic.Scene({
		    		triggerElement: this,
		    		triggerHook: 'onEnter',
		    		reverse: false
		    	})
		    	.on('start', function () {
		    		const circlecl = new ProgressBar.Circle(loader,
              {
                color: '#8583e1',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 1,
                trailWidth: 20,
                trailColor: '#e5e6e8',
                easing: 'easeInOut',
                duration: 1400,
                text:
						{
						  autoStyleContainer: false
						},
                from: { color: '#8583e1', width: 1 },
                to: { color: '#8583e1', width: 1 },
                // Set default step function for all animate calls
                step (state, circle) {
                  circle.path.setAttribute('stroke', state.color)
                  circle.path.setAttribute('stroke-width', state.width)

                  const value = Math.round(circle.value() * 100)
                  if (value === 0) {
                    circle.setText('0%')
                  } else {
                    circle.setText(value + '%')
                  }
                }
              })
            circlecl.text.style.fontFamily = '"Montserrat", sans-serif'
            circlecl.text.style.fontSize = '44px'
            circlecl.text.style.fontWeight = '700'
            circlecl.text.style.top = '50% !important'
            circlecl.text.style.color = '#100f3a'
            circlecl.animate(endValue) // Number from 0.0 to 1.0
		    	})
			    .addTo(ctrl)
      })
    }
  }
})
