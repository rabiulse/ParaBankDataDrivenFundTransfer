export class DateUtil {

    static today(): string {

        return new Date()

            .toISOString()

            .split('T')[0];

    }

    static currentTime(): string {

        return new Date()

            .toLocaleTimeString();

    }

    static timeStamp(): string {

        return new Date()

            .getTime()

            .toString();

    }

}