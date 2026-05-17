import { mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs'

rmSync('dist', { recursive: true, force: true })
mkdirSync('dist/esm', { recursive: true })
mkdirSync('dist/cjs', { recursive: true })

const src = readFileSync('src/index.js', 'utf8')

const esm = src.replace(/module\.exports\s*=\s*\{\s*parse\s*\}/, 'export { parse }')
writeFileSync('dist/esm/index.js', esm)
writeFileSync('dist/esm/package.json', JSON.stringify({ type: 'module' }, null, 2))

writeFileSync('dist/cjs/index.js', src)
writeFileSync('dist/cjs/package.json', JSON.stringify({ type: 'commonjs' }, null, 2))
