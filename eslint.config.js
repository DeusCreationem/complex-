
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import reactPlugin from 'eslint-plugin-react'
import { defineConfig } from 'eslint/use-at-your-own-risk'

export default defineConfig([
    {
        ignores: ['dist', 'node_modules']
    },
    {
        files: ['**/*.{js,jsx}'],
        plugins: {
            'react': reactPlugin,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2021
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        settings: {
            react: {
                version: 'detect'
            }
        },
        rules: {
            // Правила из первого конфига
            'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
            
            // Правила из второго конфига
            'react/react-in-jsx-scope': 'off',
            'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
            'import/prefer-default-export': 'off',
            'react/prop-types': 'off',
            'jsx-a11y/click-events-have-key-events': 'off',
            'jsx-a11y/no-static-element-interactions': 'off',
            
            // Дополнительные рекомендуемые правила
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn'
        }
    }
])
