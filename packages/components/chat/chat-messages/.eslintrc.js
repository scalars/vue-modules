module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        '@typescript-eslint/indent': [ 'error', 4, {
            'FunctionDeclaration': { 'parameters': 'first' },
            'FunctionExpression': { 'parameters': 'first' }
        } ],
        'quotes': [ 'error', 'single', {
            'allowTemplateLiterals': true
        } ],
        'indent': [ 'error', 4 ],
        'vue/html-indent': [ 'error', 4 ],
        'semi': [ 'error', 'never' ],
        'camelcase': 'off',
        'array-bracket-spacing': [ 'error', 'always' ],
        'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
        'object-curly-spacing': [ 'error', 'always' ],
        'block-spacing': [ 'error', 'always' ],
        'space-in-parens': [ 'error', 'always' ],
        'space-infix-ops': [ 'error', { 'int32Hint': true } ],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        '@typescript-eslint/ban-ts-ignore': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    }
}
