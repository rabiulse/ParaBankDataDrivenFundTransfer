import { defineConfig, devices } from '@playwright/test';
import { ENV } from './config/env';

export default defineConfig({

    testDir: './tests',

    timeout: ENV.TIMEOUT,

    expect: {

        timeout: ENV.EXPECT_TIMEOUT

    },

    retries: ENV.RETRIES,

    fullyParallel: true,

    workers: ENV.WORKERS,

    reporter: [

        ['html'],

        ['list']

    ],

    use: {

        baseURL: ENV.BASE_URL,

        headless: ENV.HEADLESS,

        screenshot: 'only-on-failure',

        trace: 'on',

        video: 'retain-on-failure'

    },

    projects: [

        {
            name: 'setup',

            testMatch: /auth\.setup\.ts/
        },

        {
            name: 'chromium',

            use: {

                ...devices['Desktop Chrome'],

                storageState: 'auth/storageState.json'

            },

            dependencies: ['setup']
        },
/** 
        {
            name: 'firefox',

            use: {

                ...devices['Desktop Firefox'],

                storageState: 'auth/storageState.json'

            },

            dependencies: ['setup']
        },*/
/** 
        {
            name: 'webkit',

            use: {

                ...devices['Desktop Safari'],

                storageState: 'auth/storageState.json'

            },

            dependencies: ['setup']
        }*/

    ]

});