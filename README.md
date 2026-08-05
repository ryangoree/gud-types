# TypeScript Boilerplate

Publish-ready TypeScript library setup with tests, docs, builds, and CI/CD.

## Tech stack

- [Bun](https://bun.sh) — dependency management and scripts
- [TypeScript](https://www.typescriptlang.org) — strict configuration
- [Vitest](https://vitest.dev) — testing and coverage
- [Biome](https://biomejs.dev) — formatting and linting
- [publint](https://publint.dev) — package readiness checks
- [tsdown](https://tsdown.dev) — ESM + CJS bundles with types and sourcemaps
- [TypeDoc](https://typedoc.org) — docs generation to `docs/`
- [Changesets](https://github.com/changesets/changesets) — versioning and release management

## Project layout

```sh
.changeset
└── config.json           # Release config
.github
└── workflows             # GitHub Actions workflows
.vscode
└── settings.json         # Project specific VS Code settings
src
├── exports               # Public API (configured in `tsdown.config.ts` & `package.json`)
└── ...                   # Source files
.gitignore
.prettierrc.cjs           # Formatting config for languages not supported by Biome
biome.json                # Formatting & linting config
bun.lock                  # Dependency lockfile
LICENSE
package.json              # Project manifest
README.md
tsconfig.json             # TypeScript config
tsdown.config.ts            # Build config
typedoc.json              # Docs generation config
vitest.config.ts          # Testing config
```

## Local development

Install dependencies:

```sh
bun install
```

Common scripts:

```sh
# Typecheck + Biome (formatting/linting)
bun run check

# Auto-fix formatting/lint issues
bun run fix

# Tests
bun run test
bun run test:watch
bun run test:coverage

# Build library
bun run build
bun run build:watch

# Generate docs (outputs to ./docs)
bun run build:docs
bun run preview:docs

# Validate package exports/metadata
bun run check:package
```

## Configuring exports

The public API is defined by the files in [`src/exports`](./src/exports), the build `entry` list in
[`tsdown.config.ts`](./tsdown.config.ts), and the `"exports"` map in
[`package.json`](./package.json).

### How export paths affect library usage

Each file you list as an entry point becomes a subpath import for consumers:

```ts
import { something } from "your-package"; // from src/exports/index.ts (".")
import { helper } from "your-package/testing"; // from src/exports/testing.ts ("./testing")
```

Adding `src/exports/foo.ts` lets consumers `import { x } from "your-package/foo"` once you update
the build + manifest. Only the paths declared in `package.json#exports` are accessible, everything
else remains internal.

### Steps to add a new export

1. Create the file in [`src/exports`](./src/exports), e.g. `src/exports/foo.ts`.
2. Add it to the `entry` array in [`tsdown.config.ts`](./tsdown.config.ts):
   ```ts
   entry: [
     "src/exports/index.ts",
     "src/exports/testing.ts",
     "src/exports/foo.ts", // new
   ],
   ```
3. Add a subpath in `package.json#exports` matching the filename (no extension):
   ```jsonc
   "exports": {
     // Existing exports...
     "./foo": {
       "require": {
         "types": "./dist/foo.d.cts",
         "default": "./dist/foo.cjs"
       },
       "import": {
         "types": "./dist/foo.d.ts",
         "default": "./dist/foo.js"
       }
     },
     "./package.json": "./package.json"
   }
   ```
4. Update the `package.json#typesVersions` mapping so TypeScript / older tooling can resolve
   declaration files for the new subpath:
   ```jsonc
   "typesVersions": {
     "*": {
       // Existing mappings...
       "foo": ["./dist/foo.d.ts"] // new
     }
   }
   ```
5. Run `bun run build` to verify.

### Removing an export

Reverse the steps: delete the subpath from `package.json#exports` and `package.json#typesVersions`,
remove the file from the `entry` array in [`tsdown.config.ts`](./tsdown.config.ts), delete the file
under [`src/exports`](./src/exports), and clean the dist (`bun run build`).

### Notes

- Keep filenames simple; subpath = filename (no `.ts`).
- The root export (`"."`) is conventionally [`src/exports/index.ts`](src/exports/index.ts).
- Changing export structure is a breaking change. Bump the major version if removing or renaming
  public paths in a published package.

## Automation

### Repo setup

1. Actions PR permissions: **Settings** → **Actions** → **General** → **Workflow permissions** →
   enable **Allow GitHub Actions to create and approve pull requests**.
2. Docs deployment: **Settings** → **Pages** → **Build and deployment** → **Source** = **GitHub
   Actions**.
3. Publish token: **Settings** → **Secrets and variables** → **Actions** → **New repository
   secret**:
   - **Name**: `NPM_TOKEN`
   - **Secret**: [npm automation/access
     token](https://docs.npmjs.com/creating-and-viewing-access-tokens) with publish rights.

### Workflows

- PR checks: [`.github/workflows/pull-request.yml`](./.github/workflows/pull-request.yml)
- Docs deploy: [`.github/workflows/docs-pages.yml`](./.github/workflows/docs-pages.yml)
- Release & publish: [`.github/workflows/release.yml`](./.github/workflows/release.yml)

### Releases

1. Run `bunx changeset`.
2. Commit & push (version PR will open or update).
3. Merge version PR to publish to npm + create tags (requires `NPM_TOKEN`).

### Docs

- Generated with TypeDoc to `./docs`.
- Published to GitHub Pages via docs-pages workflow.

## License

This boilerplate uses the Apache-2.0 license by default, but the boilerplate itself is provided
without restrictions. You can change the license in [`LICENSE`](./LICENSE) and
[`package.json`](./package.json) as needed.
