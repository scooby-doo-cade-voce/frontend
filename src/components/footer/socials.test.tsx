import { socials } from './socials'

describe('socials', () => {
  it('should have at least one social link', () => {
    expect(socials.length).toBeGreaterThan(0)
  })

  it('should have valid href values', () => {
    socials.forEach((social) => {
      expect(social.href).toMatch(/^https?:\/\/[^\s/$.?#].[^\s]*$/)
    })
  })

  it('should have valid icon components', () => {
    socials.forEach((social) => {
      expect(social.icon).toBeDefined()
      expect(typeof social.icon).toBe('object')
    })
  })
})
