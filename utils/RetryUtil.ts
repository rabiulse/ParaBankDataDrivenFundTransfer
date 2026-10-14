export class RetryUtil {

    static async execute<T>(
        operation: () => Promise<T>,
        retries = 3
    ): Promise<T> {

        let lastError;

        for (let i = 1; i <= retries; i++) {

            try {

                return await operation();

            }

            catch (error) {

                lastError = error;

            }

        }

        throw lastError;

    }

}