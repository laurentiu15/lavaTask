export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://gateway.lavanet.xyz/',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'lavaTask'
}