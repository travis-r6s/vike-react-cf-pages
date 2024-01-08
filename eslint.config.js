import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  react: true,
  rules: {
    'react/prop-types': 'off',
    'curly': ['error', 'multi-line'],
  },
})
