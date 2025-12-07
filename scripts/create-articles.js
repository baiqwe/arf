const fs = require('fs');
const path = require('path');

const articles = [
    {
        slug: "adopt-me-fonts-naming-revolution",
        title: "Adopt Me Fonts Naming Revolution: How I Stand Out Using Custom Fonts",
        content: "Article 1 content here..."
    },
    // ... more articles
];

// Create directory and page.tsx for each article
articles.forEach(article => {
    const dirPath = path.join(__dirname, '..', 'src', 'app', 'blog', article.slug);

    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    // Create page.tsx
    const pageContent = `// Article: ${article.title}`;

    fs.writeFileSync(path.join(dirPath, 'page.tsx'), pageContent);

    console.log(`Created: ${article.slug}`);
});

console.log('All articles created!');
