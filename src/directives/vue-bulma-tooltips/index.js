// import 'bulma'
// import 'bulma-tooltip'

// https://github.com/2mod/vue-bulma-tooltips
export default {

  // directive name
  name: 'ttip',

  // Vue directive definition
  directive: {
    // https://vuejs.org/v2/guide/custom-directive.html

    inserted: function (el, binding) {
      // https://wikiki.github.io/elements/tooltip/

      // set standard classes
      el.classList.add('tooltip')

      // set modifier classes
      for (let mod in binding.modifiers) {
        el.classList.add('is-tooltip-' + mod)
      }

      // set tooltip data
      el.setAttribute('data-tooltip', binding.value)

      return true
    }

  },

  // initialize the directive on the Vue constructor
  init (vc) {
    vc.directive(this.name, this.directive)
  },

  // for reference purposes
  modifiers: {
    // is-tooltip-*
    left: false,
    right: false,
    top: false,
    bottom: false,
    multiline: false,
    active: false,
    primary: false,
    info: false,
    success: false,
    warning: false,
    danger: false
  } // note! currently only functionality is in unit test

}
