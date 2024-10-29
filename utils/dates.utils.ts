import moment from "moment";

export const getTimeDifference = (start:moment.Moment, end:moment.Moment) => {
    const yearsDiff = end.diff(start, 'years');
    if (yearsDiff > 0) return `${yearsDiff} ${yearsDiff === 1 ? 'year' : 'years'}`;

    const monthsDiff = end.diff(start, 'months');
    if (monthsDiff > 0) return `${monthsDiff + 1} ${monthsDiff === 1 ? 'month' : 'months'}`;

    const daysDiff = end.diff(start, 'days');
    return `${daysDiff} ${daysDiff === 1 ? 'day' : 'days'}`;
};