import { parse } from '..'

describe('parse', () => {
  it('parses 2020-W30-2', () => {
    expect.assertions(1)
    expect(new Date(parse('2020-W30-2'))).toStrictEqual(
      new Date(Date.parse('2020-07-21'))
    )
  })
  it('parses 2020-W30-2', () => {
    expect.assertions(1)
    expect(new Date(parse('2020-W30-2'))).toStrictEqual(
      new Date(Date.parse('2020-07-21'))
    )
  })
  it('parses 1984-W09-3', () => {
    expect.assertions(1)
    expect(new Date(parse('1984-W09-3'))).toStrictEqual(
      new Date(Date.parse('1984-02-29'))
    )
  })
  it('parses 2004-W53-6', () => {
    expect.assertions(1)
    expect(new Date(parse('2004-W53-6'))).toStrictEqual(
      new Date(Date.parse('2005-01-01'))
    )
  })
  it('parses 2004-W53-7', () => {
    expect.assertions(1)
    expect(new Date(parse('2004-W53-7'))).toStrictEqual(
      new Date(Date.parse('2005-01-02'))
    )
  })
  it('parses 2005-W52-6', () => {
    expect.assertions(1)
    expect(new Date(parse('2005-W52-6'))).toStrictEqual(
      new Date(Date.parse('2005-12-31'))
    )
  })
  it('parses 2005-W52-7', () => {
    expect.assertions(1)
    expect(new Date(parse('2005-W52-7'))).toStrictEqual(
      new Date(Date.parse('2006-01-01'))
    )
  })
  it('parses 2006-W01-1', () => {
    expect.assertions(1)
    expect(new Date(parse('2006-W01-1'))).toStrictEqual(
      new Date(Date.parse('2006-01-02'))
    )
  })
  it('parses 2006-W52-7', () => {
    expect.assertions(1)
    expect(new Date(parse('2006-W52-7'))).toStrictEqual(
      new Date(Date.parse('2006-12-31'))
    )
  })
  it('parses 2007-W01-1', () => {
    expect.assertions(1)
    expect(new Date(parse('2007-W01-1'))).toStrictEqual(
      new Date(Date.parse('2007-01-01'))
    )
  })
  it('parses 2007-W52-7', () => {
    expect.assertions(1)
    expect(new Date(parse('2007-W52-7'))).toStrictEqual(
      new Date(Date.parse('2007-12-30'))
    )
  })
  it('parses 2008-W01-1', () => {
    expect.assertions(1)
    expect(new Date(parse('2008-W01-1'))).toStrictEqual(
      new Date(Date.parse('2007-12-31'))
    )
  })
  it('parses 2008-W01-2', () => {
    expect.assertions(1)
    expect(new Date(parse('2008-W01-2'))).toStrictEqual(
      new Date(Date.parse('2008-01-01'))
    )
  })
  it('parses 2008-W52-7', () => {
    expect.assertions(1)
    expect(new Date(parse('2008-W52-7'))).toStrictEqual(
      new Date(Date.parse('2008-12-28'))
    )
  })
  it('parses 2009-W01-1', () => {
    expect.assertions(1)
    expect(new Date(parse('2009-W01-1'))).toStrictEqual(
      new Date(Date.parse('2008-12-29'))
    )
  })
  it('parses 2009-W01-2', () => {
    expect.assertions(1)
    expect(new Date(parse('2009-W01-2'))).toStrictEqual(
      new Date(Date.parse('2008-12-30'))
    )
  })
  it('parses 2009-W01-3', () => {
    expect.assertions(1)
    expect(new Date(parse('2009-W01-3'))).toStrictEqual(
      new Date(Date.parse('2008-12-31'))
    )
  })
  it('parses 2009-W01-4', () => {
    expect.assertions(1)
    expect(new Date(parse('2009-W01-4'))).toStrictEqual(
      new Date(Date.parse('2009-01-01'))
    )
  })
  it('parses 2009-W53-4', () => {
    expect.assertions(1)
    expect(new Date(parse('2009-W53-4'))).toStrictEqual(
      new Date(Date.parse('2009-12-31'))
    )
  })
  it('parses 2009-W53-5', () => {
    expect.assertions(1)
    expect(new Date(parse('2009-W53-5'))).toStrictEqual(
      new Date(Date.parse('2010-01-01'))
    )
  })
  it('parses 2009-W53-6', () => {
    expect.assertions(1)
    expect(new Date(parse('2009-W53-6'))).toStrictEqual(
      new Date(Date.parse('2010-01-02'))
    )
  })
  it('parses 2009-W53-7', () => {
    expect.assertions(1)
    expect(new Date(parse('2009-W53-7'))).toStrictEqual(
      new Date(Date.parse('2010-01-03'))
    )
  })
})
