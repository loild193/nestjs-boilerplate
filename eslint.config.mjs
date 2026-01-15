import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import tsEslintPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import noRelativeImportPathsPlugin from 'eslint-plugin-no-relative-import-paths'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
})

export default [
    ...compat.extends('plugin:@typescript-eslint/recommended', 'prettier'),
    {
        plugins: {
            '@typescript-eslint': tsEslintPlugin,
            'no-relative-import-paths': noRelativeImportPathsPlugin,
        },
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },
            parser: tsParser,
            ecmaVersion: 5,
            sourceType: 'module',
            parserOptions: {
                project: 'tsconfig.json',
                tsconfigRootDir: __dirname,
            },
        },
        rules: {
            '@typescript-eslint/no-empty-interface': 0,
            '@typescript-eslint/ban-types': 0,
            '@typescript-eslint/no-inferrable-types': 0,
            '@typescript-eslint/no-var-requires': 0,
            '@typescript-eslint/no-this-alias': 0,
            '@typescript-eslint/no-explicit-any': 1,
            '@typescript-eslint/no-empty-object-type': 0,
            '@typescript-eslint/no-unused-expressions': 0,
            '@typescript-eslint/no-require-imports': 0,
            '@typescript-eslint/no-unused-vars': 0,
            'no-extra-boolean-cast': 0,
            'no-prototype-builtins': 0,
            'no-useless-catch': 0,
            'no-useless-escape': 0,
            'prefer-const': 0,
            'no-relative-import-paths/no-relative-import-paths': [
                2,
                {
                    allowSameFolder: false,
                    rootDir: 'src',
                    prefix: '~',
                },
            ],
        },
    },
]
