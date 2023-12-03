module.exports = {
  "main": {
    input: './src/shared/api/schema.yml',
    output: {
      target: './src/shared/api/generated.ts',
      prettier: true,
      override: {
        mutator: {
          path: './src/shared/api/api-instance.ts',
          name: 'createInstance'
        }
      }
    },
  },
};
