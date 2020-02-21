export const state = () => ({
  menus: [
    {
      name: 'About',
      key: '/'
    },
    {
      name: 'Skills',
      key: '/skills'
    },
    {
      name: 'Experience',
      key: '/experience'
    },
    {
      name: 'Education',
      key: '/education'
    },
    {
      name: 'Portofolio',
      key: '/portofolio'
    },
    {
      name: 'Contact',
      key: '/contact'
    }
  ],
  activeMenu: ''
})

export const mutations = {
  add (state, text) {
    state.menus.push({
      text,
      done: false
    })
  },
  remove (state, { menu }) {
    state.menus.splice(state.menus.indexOf(menu), 1)
  },
  toggle (state, menu) {
    menu.done = !menu.done
  },
  setActive (state, menu) {
    state.activeMenu = menu
  }
}
