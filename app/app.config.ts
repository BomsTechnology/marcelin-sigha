export default defineAppConfig({
  global: {
    picture: {
      dark: '/hero/profile.jpeg',
      light: '/hero/profile.jpeg',
      alt: 'My profile picture'
    },
    meetingLink: '#',
    email: 'marcsigha@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Marcelin Sigha • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/marcelin-sigha/',
      'target': '_blank',
      'aria-label': 'Marcelin S. on LinkedIn'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/bomstech',
      'target': '_blank',
      'aria-label': 'Marcelin S. on X'
    }, {
      'icon': 'i-simple-icons-instagram',
      'to': 'https://www.instagram.com/sigha_boms',
      'target': '_blank',
      'aria-label': 'Marcelin S. on Instagram'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/BomsTechnology',
      'target': '_blank',
      'aria-label': 'Marcelin S. on GitHub'
    }]
  }
})
