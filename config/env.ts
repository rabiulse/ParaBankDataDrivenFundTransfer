import dotenv from 'dotenv';

dotenv.config();

export const ENV = {

    BASE_URL: process.env.BASE_URL!,

    USERNAME: process.env.USERNAMEONE!,

    PASSWORD: process.env.PASSWORD!,

    HEADLESS: process.env.HEADLESS === 'true',

    TIMEOUT: Number(process.env.TIMEOUT),

    EXPECT_TIMEOUT: Number(process.env.EXPECT_TIMEOUT),

    RETRIES: Number(process.env.RETRIES),

    WORKERS: Number(process.env.WORKERS)

};