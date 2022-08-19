export const spliceText = (text: string, start: number) => {
    return text.length >= start ? text.slice(0, start) + '...' : text;
};
