export function getFirstImage(content) {
    const match = content.match(/!\[.*?\]\((.*?)\)/);
    return match ? match[1] : null;
}

export function getReadingTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
}