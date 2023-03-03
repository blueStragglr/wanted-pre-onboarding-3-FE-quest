/* eslint-disable import/no-extraneous-dependencies */
// @ts-ignore
import CracoAlias from 'craco-alias'

const cracoConfig = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: 'tsconfig.json',
      },
    },
  ],
}

export default cracoConfig
