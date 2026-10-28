export function getFirstImage(content) {
    // Match both Markdown and HTML image syntax
    const markdownRegex = /!\[(?:.*?)\]\((.*?)\)/;
    const htmlRegex = /<img.*?src=["'](.*?)["']/;

    let match;
    let imageUrl;

    match = content.match(markdownRegex);
    if (match && match[1]) {
        imageUrl = match[1];
    } else {
        match = content.match(htmlRegex);
        if (match && match[1]) {
            imageUrl = match[1];
        }
    }

    if (imageUrl) {
        if (imageUrl.startsWith('./') || imageUrl.startsWith('../') || !imageUrl.startsWith('http')) {
            // Handle relative URL (a base path may need to be prepended)
            return `/content${imageUrl}`;
        } else {
            return imageUrl;
        }
    }

    // No image found: return null or a default image URL
    return null; // or return '/path/to/default/image.jpg';
}

export function getReadingTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
}
