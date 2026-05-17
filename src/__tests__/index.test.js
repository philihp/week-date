const { describe, it } = require('node:test')
const assert = require('node:assert/strict')
const { parse } = require('..')

const equalDate = (input, expected) => {
  assert.deepEqual(new Date(parse(input)), new Date(Date.parse(expected)))
}

describe('parse', () => {
  describe('1 <= d <= days(y)', () => {
    it('parses 2008-W52-7', () => equalDate('2008-W52-7', '2008-12-28'))
    it('parses 2005-W52-7', () => equalDate('2005-W52-7', '2006-01-01'))
    it('parses 2020-W30-2', () => equalDate('2020-W30-2', '2020-07-21'))
    it('parses 1984-W09-3', () => equalDate('1984-W09-3', '1984-02-29'))
    it('parses 2005-W52-6', () => equalDate('2005-W52-6', '2005-12-31'))
    it('parses 2006-W01-1', () => equalDate('2006-W01-1', '2006-01-02'))
    it('parses 2006-W52-7', () => equalDate('2006-W52-7', '2006-12-31'))
    it('parses 2007-W52-7', () => equalDate('2007-W52-7', '2007-12-30'))
  })
  describe('d < 1', () => {
    it('parses 2007-W01-1', () => equalDate('2007-W01-1', '2007-01-01'))
    it('parses 2008-W01-1', () => equalDate('2008-W01-1', '2007-12-31'))
    it('parses 2008-W01-2', () => equalDate('2008-W01-2', '2008-01-01'))
  })
  describe('d >= days(y)', () => {
    it('parses 2009-W01-1', () => equalDate('2009-W01-1', '2008-12-29'))
    it('parses 2009-W01-2', () => equalDate('2009-W01-2', '2008-12-30'))
    it('parses 2009-W01-3', () => equalDate('2009-W01-3', '2008-12-31'))
    it('parses 2009-W01-4', () => equalDate('2009-W01-4', '2009-01-01'))
    it('parses 2009-W53-4', () => equalDate('2009-W53-4', '2009-12-31'))
    it('parses 2009-W53-5', () => equalDate('2009-W53-5', '2010-01-01'))
    it('parses 2009-W53-6', () => equalDate('2009-W53-6', '2010-01-02'))
    it('parses 2009-W53-7', () => equalDate('2009-W53-7', '2010-01-03'))
    it('parses 2004-W53-6', () => equalDate('2004-W53-6', '2005-01-01'))
    it('parses 2004-W53-7', () => equalDate('2004-W53-7', '2005-01-02'))
  })
})
