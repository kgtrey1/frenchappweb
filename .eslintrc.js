module.exports = {
    root: true,
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.js'],
            rules: {
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',
                'no-undef': 'off',
                'object-curly-spacing': ['error', 'always'],
                'array-bracket-spacing': ['error', 'never'],
                'react/require-default-props': ['error'],
                'react/default-props-match-prop-types': ['error'],
                'react/sort-prop-types': ['error'],
                semi: ['error', 'never'],
            },
        },
    ],
}
