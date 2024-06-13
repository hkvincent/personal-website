import { DateTime, DateTimeFormatOptions } from "luxon";
import readingTime from "reading-time";


export const getReadingTime = (text: string) => {
    const minute = readingTime(text ?? "0", { wordsPerMinute: 100 }).minutes;
    // Floor to 1 decimal place
    const minutesRounded = Math.floor(minute);
    if (minutesRounded === 1 || minutesRounded === 0) {
        return `${minutesRounded} minute`;
    } else {
        return `${minutesRounded} minutes`;
    }
};


export const getRelativeDate = (date: string, locale?: string) => {
    return DateTime.fromISO(date).setLocale(locale ?? 'en-US').toRelative();
};



export const formatFullDate = (dateString) => {
    const options: DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
};


export const formatHalfDate = (dateString) => {
    const options: DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
};
