import { appendFile, readdir } from 'node:fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  const files = await readdir(__dirname);

  for (const file of files) {
    const extension = file.split('.')[1];

    if (!['js', 'ts'].includes(extension)) {
      await appendFile(
        __dirname + '/index.ts',
        `export { default as ${toCamelCase(
          file.split('.')[0]
        )} } from './${file}'; \n`
      );
    }
  }
} catch (error) {
  console.error(error);
}

function toCamelCase(value: string) {
  return value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}
