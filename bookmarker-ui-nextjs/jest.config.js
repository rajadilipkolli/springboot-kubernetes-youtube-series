// jest.config.js
module.exports = {
    setupFilesAfterEnv: ['<rootDir>/components/__tests__/setupTests.js'],
    testMatch: ['<rootDir>/components/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/components/**/*.{spec,test}.{js,jsx,ts,tsx}'],
    testEnvironment: 'jsdom'
};
