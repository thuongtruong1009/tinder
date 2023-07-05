//so sánh 2 ngày theo phút
export const compareDateToMinutes = (date1: Date, date2: Date) => {
    return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear() &&
        date1.getHours() === date2.getHours() &&
        date1.getMinutes() === date2.getMinutes()
    );
};
export const formatDatetime = (date: Date) => {
    return `${date.getHours().toString().padStart(2, '0')}:${date
        .getMinutes()
        .toString()
        .padStart(2, '0')}, ${date.getDate()} tháng ${date.getMonth() + 1} năm ${date.getFullYear()}`;
};
