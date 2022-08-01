const error = 2
const warn = 1
const off = 0

module.exports = {
    root: true,
    extends: ['@react-native-community', 'airbnb', 'airbnb-typescript' ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.js'],
            rules: {
                'array-bracket-spacing': ['error', 'never'],
                'react/require-default-props': ['error'],
                'react/default-props-match-prop-types': ['error'],
                'react/sort-prop-types': ['error'],
                'react/jsx-indent': ['error', 4],
                'react/jsx-indent-props': ['error', 4],
                '@typescript-eslint/indent': off,
                '@typescript-eslint/semi': [error, 'never'],
                '@typescript-eslint/lines-between-class-members': [
                    'error',
                    'always',
                    { exceptAfterSingleLine: true },
                ],
                'import/extensions': ['error', 'never'],
                'prefer-promise-reject-errors': off,
                '@typescript-eslint/no-empty-function': off,
                'max-len': ['error', 110],
                'react/function-component-definition': off,
                'react/jsx-props-no-spreading': off,
                'func-names': error,
                'no-console': ['error', { allow: ['warn', 'error'] }],
                'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
                'no-param-reassign': off,
                'react-hooks/exhaustive-deps': off,
                "no-use-before-define": "off",
                "@typescript-eslint/no-use-before-define": ["off"]
            },
            settings: {
                'import/resolver': {
                    'babel-module': {},
                },
            },
            globals: {
                JSX: true,
            },
            parserOptions: {
                project: './tsconfig.json'
            }
        },
    ],
}
