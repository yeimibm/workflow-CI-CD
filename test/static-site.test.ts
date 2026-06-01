import { describe, expect, it } from 'vitest'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')

async function readProjectFile(path: string) {
  return readFile(resolve(root, path), 'utf8')
}

describe('static web app', () => {
  it('has the required HTML, CSS and JavaScript files', async () => {
    await expect(readProjectFile('src/index.html')).resolves.toContain('<!doctype html>')
    await expect(readProjectFile('src/styles.css')).resolves.toContain('.hero')
    await expect(readProjectFile('src/script.js')).resolves.toContain('deploy-status')
  })

  it('documents the CI/CD flow on the home page', async () => {
    const html = await readProjectFile('src/index.html')

    expect(html).toContain('Push a GitHub')
    expect(html).toContain('Validacion')
    expect(html).toContain('Construccion')
    expect(html).toContain('Despliegue')
    expect(html).toContain('/var/www/html')
  })
})
