// https://vuejs.org/v2/guide/unit-testing.html
// https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha

// test utilities
import { expect } from 'chai'
// import { shallow } from '@vue/test-utils'

// definitions
export function runMinimalTests (description, vBTT) {
  // test data
  const testData = {
    value: 'test',
    elem: undefined
  }

  // tests
  describe(description, () => {
    it('Init. function exported', () => {
      expect(vBTT).to.have.a.property('init')
      expect(vBTT.init).to.be.a('function')
    })

    it('Directive name equals "ttip"', () => {
      vBTT.init({
        directive (name, def) {
          expect(name).to.equal('ttip')
        }
      })
    })

    it('Vue directive definition is nominal', () => {
      vBTT.init({
        directive (name, def) {
          expect(def).to.be.a('object')
          expect(def).to.have.property('inserted')
        }
      })
    })

    it('Dummy test element initialized', () => {
      testData.elem = document.createElement('button')
      expect(typeof (testData.elem)).to.equal('object')
    })

    it('Directive call simulated', () => {
      vBTT.init({
        directive (name, def) {
          expect(
            // replicate:
            // <elem v-ttip.[all]="testData.value">
            // where [all] stands for all defined modifiers
            def.inserted(
              testData.elem,
              {
                value: testData.value,
                modifiers: vBTT.modifiers
              }
            )

          ).to.equal(true)
        }
      })
    })

    it('CSS classes where applied corectly', () => {
      const classes = [...testData.elem.classList]
      // standard classes
      expect(classes).to.contain('tooltip')
      // modifier classes
      for (let modifier in vBTT.modifiers) {
        expect(classes).to.contain('is-tooltip-' + modifier)
      }
    })

    it('Element data attribute was typed and set corectly', () => {
      const attrTTip = testData.elem.getAttribute('data-tooltip')
      expect(attrTTip).to.be.a(typeof (testData.value))
      expect(attrTTip).to.equal(testData.value)
    })
  })
}
