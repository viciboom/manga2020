const { resolve } = require;

const OFF = 0;
const ERROR = 2;

module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:eslint-comments/recommended',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    settings: {
        'import/resolver': {
            node: {
                // import 模块时，不写后缀将尝试导入的后缀，出现频率高的文件类型放前面
                extensions: ['.tsx', '.ts', '.js', '.json'],
            },
            typescript: {
                directory: [resolve('./src/tsconfig.json'), resolve('./scripts/tsconfig.json')],
            },
        },
    },
    rules: {
        'eslint-comments/disable-enable-pair': [ERROR, { allowWholeFile: true }],

        'import/extensions': [
            ERROR,
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
                json: 'never',
                js: 'never',
            },
        ],

        'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx'] }],
        'react/jsx-indent-props': [ERROR, 4],
        'react/jsx-indent': [ERROR, 4],

        'func-names': OFF,
        'lines-between-class-members': OFF,
        'max-classes-per-file': OFF,
        'no-console': OFF,
        'no-empty': OFF,
        'no-param-reassign': OFF,
        'no-plusplus': OFF,
        'no-underscore-dangle': OFF,
        'no-unused-expressions': OFF,
        'no-useless-constructor': OFF,
    },
    overrides: [
        {
            files: ['**/*.d.ts'],
            rules: {
                'import/no-duplicates': OFF,
            },
        },
        {
            files: ['scripts/**/*.ts'],
            rules: {
                'import/no-extraneous-dependencies': OFF,
            },
        },
    ],
};
