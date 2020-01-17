/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Progress Bars
5. Init Milestones

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
  initProgressBars()
  initMilestones()

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

	4. Init Progress Bars

	*/

  function initProgressBars () {
    if ($('.skill_bars').length) {
      const eles = $('.skill_bars')
      let gradNum = 0

      eles.each(function (i) {
        const ele = $(this)
	    		const elePerc = ele.data('perc')
	    		const eleName = '#' + ele.data('name')
	    		const eleColorStart = ele.data('color-start')
	    		const eleColorEnd = ele.data('color-end')
	    		const eleGradient = 'url(#gradient' + gradNum.toString() + ')'
	    		const linearGradient = '<defs><linearGradient id="gradient' + gradNum + '" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse"><stop offset="20%" stop-color="' + eleColorStart + '"/><stop offset="50%" stop-color="' + eleColorEnd + '"/></linearGradient></defs>'

	    		const statsScene = new ScrollMagic.Scene({
		    		triggerElement: this,
		    		triggerHook: 'onEnter',
		    		reverse: false
		    	})
		    	.on('start', function () {
		    		const pbar = new ProgressBar.Line(eleName,
		    		{
		    			strokeWidth: 1,
                easing: 'easeInOut',
                duration: 1400,
                color: eleGradient,
                trailColor: '#ffffff',
                trailWidth: 1,
                svgStyle: { width: '100%', height: '100%' },
                text: {
                  style: {
                    position: 'absolute',
                    right: '0',
                    top: '-20px',
                    padding: 0,
                    margin: 0,
                    transform: null
                  },
                  autoStyleContainer: false
                },
                step: (state, bar) => {
                  bar.setText(Math.round(bar.value() * 100) + ' %')
                }
		    		})
		    		pbar.animate(elePerc)
            pbar.svg.insertAdjacentHTML('afterBegin', linearGradient)
		    	})
		    	.addTo(ctrl)
		    	gradNum++
      })
    }
  }

  /*

	5. Initialize Milestones

	*/

  function initMilestones () {
    if ($('.milestone_counter').length) {
      const milestoneItems = $('.milestone_counter')

	    	milestoneItems.each(function (i) {
	    		const ele = $(this)
	    		const endValue = ele.data('end-value')
	    		const eleValue = ele.text()

	    		/* Use data-sign-before and data-sign-after to add signs
	    		infront or behind the counter number (+, k, etc) */
	    		let signBefore = ''
	    		let signAfter = ''

	    		if (ele.attr('data-sign-before')) {
	    			signBefore = ele.attr('data-sign-before')
	    		}

	    		if (ele.attr('data-sign-after')) {
	    			signAfter = ele.attr('data-sign-after')
	    		}

	    		const milestoneScene = new ScrollMagic.Scene({
		    		triggerElement: this,
		    		triggerHook: 'onEnter',
		    		reverse: false
		    	})
		    	.on('start', function () {
		    		const counter = { value: eleValue }
		    		const counterTween = TweenMax.to(counter, 4,
		    		{
		    			value: endValue,
		    			roundProps: 'value',
                ease: Circ.easeOut,
                onUpdate () {
                  document.getElementsByClassName('milestone_counter')[i].innerHTML = signBefore + counter.value + signAfter
                }
		    		})
		    	})
			    .addTo(ctrl)
	    	})
    }
  }
})
