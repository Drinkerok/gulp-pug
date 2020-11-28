module.exports = {
  extends: ['htmlacademy/es6'],
  rules: {
    'comma-dangle': ['error', {
      'arrays': 'never',
      'objects': 'always',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never',
    }],
    'quotes': ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'radix': ['error', 'as-needed'],
  },
};
