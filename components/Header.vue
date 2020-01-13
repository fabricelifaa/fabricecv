<template>
  <header class="header">
    <div
      class="header_content d-flex flex-row align-items-center justify-content-start"
    >
      <div class="logo">
        Smith<span>.</span>CV
      </div>
      <div
        class="main_nav d-flex flex-row align-items-end justify-content-start"
      >
        <ul class="d-flex flex-row align-items-center justify-content-start">
          <li class="active">
            <nuxt-link to="/">
              About
            </nuxt-link>
          </li>
          <li><a href="skills.html">Skills</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="experience.html">Experience</a></li>
          <li><a href="education.html">Education</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="testimonials.html">Testimonials</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <div class="header_button ml-auto">
          <a href="#">Available for freelance work</a>
          <div
            class="d-flex flex-column align-items-center justify-content-center"
          >
            <img src="~assets/images/download.png" alt="">
          </div>
        </div>
      </div>
      <!-- Menu -->
      <div class="menu">
        <div
          class="menu_content d-flex flex-row align-items-start justify-content-end"
        >
          <div class="hamburger ml-auto">
            menu
          </div>
          <div class="menu_nav text-right">
            <ul>
              <li>
                <nuxt-link to="/">
                  About
                </nuxt-link>
              </li>
              <li><a href="skills.html">Skills</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="experience.html">Experience</a></li>
              <li><a href="education.html">Education</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="testimonials.html">Testimonials</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
