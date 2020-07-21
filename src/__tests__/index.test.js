import { parse } from '..'

describe('parse', () => {
  it('parses 2004-W53-6', () => {
    expect.assertions(1)
    expect(parse('2004-W53-6')).toBe(Date.parse('2005-01-01'))
  })
  it('parses 2004-W53-7', () => {
    expect.assertions(1)
    expect(parse('2004-W53-7')).toBe(Date.parse('2005-01-02'))
  })
  it('parses 2005-W52-6', () => {
    expect.assertions(1)
    expect(parse('2005-W52-6')).toBe(Date.parse('2005-12-31'))
  })
  it('parses 2005-W52-7', () => {
    expect.assertions(1)
    expect(parse('2005-W52-7')).toBe(Date.parse('2006-01-01'))
  })
  it('parses 2006-W01-1', () => {
    expect.assertions(1)
    expect(parse('2006-W01-1')).toBe(Date.parse('2006-01-02'))
  })
  it('parses 2006-W52-7', () => {
    expect.assertions(1)
    expect(parse('2006-W52-7')).toBe(Date.parse('2006-12-31'))
  })
  it('parses 2007-W01-1', () => {
    expect.assertions(1)
    expect(parse('2007-W01-1')).toBe(Date.parse('2007-01-01'))
  })
  it('parses 2007-W52-7', () => {
    expect.assertions(1)
    expect(parse('2007-W52-7')).toBe(Date.parse('2007-12-30'))
  })
  it('parses 2008-W01-1', () => {
    expect.assertions(1)
    expect(parse('2008-W01-1')).toBe(Date.parse('2007-12-31'))
  })
  it('parses 2008-W01-2', () => {
    expect.assertions(1)
    expect(parse('2008-W01-2')).toBe(Date.parse('2008-01-01'))
  })
  it('parses 2008-W52-7', () => {
    expect.assertions(1)
    expect(parse('2008-W52-7')).toBe(Date.parse('2008-12-28'))
  })
  it('parses 2009-W01-1', () => {
    expect.assertions(1)
    expect(parse('2009-W01-1')).toBe(Date.parse('2008-12-29'))
  })
  it('parses 2009-W01-2', () => {
    expect.assertions(1)
    expect(parse('2009-W01-2')).toBe(Date.parse('2008-12-30'))
  })
  it('parses 2009-W01-3', () => {
    expect.assertions(1)
    expect(parse('2009-W01-3')).toBe(Date.parse('2008-12-31'))
  })
  it('parses 2009-W01-4', () => {
    expect.assertions(1)
    expect(parse('2009-W01-4')).toBe(Date.parse('2009-01-01'))
  })
  it('parses 2009-W53-4', () => {
    expect.assertions(1)
    expect(parse('2009-W53-4')).toBe(Date.parse('2009-12-31'))
  })
  it('parses 2009-W53-5', () => {
    expect.assertions(1)
    expect(parse('2009-W53-5')).toBe(Date.parse('2010-01-01'))
  })
  it('parses 2009-W53-6', () => {
    expect.assertions(1)
    expect(parse('2009-W53-6')).toBe(Date.parse('2010-01-02'))
  })
  it('parses 2009-W53-7', () => {
    expect.assertions(1)
    expect(parse('2009-W53-7')).toBe(Date.parse('2010-01-03'))
  })
})
