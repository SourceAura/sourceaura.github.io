export function getFirstImage(content) {
    // Match both Markdown and HTML image syntax
    const markdownRegex = /!\[(?:.*?)\]\((.*?)\)/;
    const htmlRegex = /<img.*?src=["'](.*?)["']/;

    let match;
    let imageUrl;

    // Try to match Markdown syntax first
    match = content.match(markdownRegex);
    if (match && match[1]) {
        imageUrl = match[1];
    } else {
        // If no Markdown image found, try HTML syntax
        match = content.match(htmlRegex);
        if (match && match[1]) {
            imageUrl = match[1];
        }
    }

    if (imageUrl) {
        // Check if it's a relative URL
        if (imageUrl.startsWith('./') || imageUrl.startsWith('../') || !imageUrl.startsWith('http')) {
            // Handle relative URL (you might need to prepend a base path)
            return `/content${imageUrl}`;
        } else {
            return imageUrl;
        }
    }

    // If no image found, return null or a default image URL
    return null; // or return '/path/to/default/image.jpg';
}

export function getReadingTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
}
