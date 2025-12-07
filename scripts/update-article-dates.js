const fs = require('fs');
const path = require('path');

// Generate random dates in the past 20 days
function getRandomDate(daysAgo) {
    const today = new Date('2025-12-07');
    const date = new Date(today);
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString().split('T')[0]; // YYYY-MM-DD format
}

// Shuffle array to randomize date assignment
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Generate 17 unique random dates (one for each article)
const daysAgoArray = Array.from({ length: 20 }, (_, i) => i); // 0-19 days ago
const shuffledDays = shuffleArray(daysAgoArray).slice(0, 17); // Take first 17

const articles = [
    { slug: 'adopt-me-fonts-naming-revolution', days: shuffledDays[0] },
    { slug: 'adopt-me-neon-pet-creation-guide', days: shuffledDays[1] },
    { slug: 'adopt-me-trading-scams-prevention', days: shuffledDays[2] },
    { slug: 'adopt-me-name-aesthetics-trading', days: shuffledDays[3] },
    { slug: 'adopt-me-mega-neon-creation-guide', days: shuffledDays[4] },
    { slug: 'adopt-me-lifestyle-fashion-guide', days: shuffledDays[5] },
    { slug: 'adopt-me-egg-hatching-probability', days: shuffledDays[6] },
    { slug: 'adopt-me-pet-naming-marketing', days: shuffledDays[7] },
    { slug: 'adopt-me-neon-cave-secrets', days: shuffledDays[8] },
    { slug: 'adopt-me-house-building-efficiency', days: shuffledDays[9] },
    { slug: 'adopt-me-retired-items-collection', days: shuffledDays[10] },
    { slug: 'adopt-me-font-design-readability', days: shuffledDays[11] },
    { slug: 'adopt-me-gold-farming-automation', days: shuffledDays[12] },
    { slug: 'adopt-me-trading-psychology', days: shuffledDays[13] },
    { slug: 'adopt-me-asset-management-guide', days: shuffledDays[14] },
    { slug: 'best-adopt-me-pet-names-2024', days: shuffledDays[15] },
    { slug: 'how-to-prevent-name-filtering-roblox', days: shuffledDays[16] },
];

// Sort by date (newest first) for blog list
const articlesWithDates = articles.map(a => ({
    ...a,
    date: getRandomDate(a.days)
})).sort((a, b) => new Date(b.date) - new Date(a.date));

console.log('\n📅 Article dates assigned:\n');
articlesWithDates.forEach(article => {
    console.log(`${article.date} - ${article.slug}`);
});

// Update each article's page.tsx file
articlesWithDates.forEach(article => {
    const articlePath = path.join(__dirname, '..', 'src', 'app', 'blog', article.slug, 'page.tsx');

    if (fs.existsSync(articlePath)) {
        let content = fs.readFileSync(articlePath, 'utf8');

        // Create proper date object for the article
        const articleDate = new Date(article.date + 'T12:00:00Z');

        // Replace dateTime attribute
        content = content.replace(
            /dateTime="[^"]*"/,
            `dateTime="${articleDate.toISOString()}"`
        );

        // Replace displayed date
        const displayDate = articleDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        content = content.replace(
            /<time[^>]*>([^<]*)<\/time>/,
            `<time dateTime="${articleDate.toISOString()}">${displayDate}</time>`
        );

        fs.writeFileSync(articlePath, content);
        console.log(`✅ Updated: ${article.slug}`);
    }
});

// Output the updated blog list data for manual update
console.log('\n\n📋 Updated blog post data for blog/page.tsx:\n');
console.log('Copy this into src/app/blog/page.tsx:\n');

// This will be used to update the blog list
const blogListData = articlesWithDates.map(article => {
    // Get article title and excerpt (you'll need to define these)
    const titles = {
        'adopt-me-fonts-naming-revolution': {
            title: 'Adopt Me Fonts Naming Revolution: How I Stand Out Using Custom Fonts',
            excerpt: 'Discover how using special Adopt Me fonts and Unicode characters transformed my in-game presence. Learn the tricks to make your name and pets\' names truly stand out.',
            readTime: '10 min read'
        },
        'adopt-me-neon-pet-creation-guide': {
            title: 'Adopt Me Neon Pet Creation: Complete Guide to Making Your First Neon',
            excerpt: 'Master the art of creating Neon Pets in Adopt Me. Learn the four-pet grinding process, efficient task completion, and Neon Cave secrets.',
            readTime: '11 min read'
        },
        'adopt-me-trading-scams-prevention': {
            title: 'Adopt Me Trading Scams: How to Spot Value Traps and Stay Safe',
            excerpt: 'Protect your rare pets from scammers. Learn the unwritten trading rules, value assessment techniques, and how to avoid instant-swap scams.',
            readTime: '10 min read'
        },
        'adopt-me-name-aesthetics-trading': {
            title: 'Adopt Me Name Aesthetics: How Professional Names Boost Trading Success',
            excerpt: 'Transform your Adopt Me trading experience with a professional name. Learn how name psychology impacts trust and trade success rates.',
            readTime: '9 min read'
        },
        'adopt-me-mega-neon-creation-guide': {
            title: 'Adopt Me Mega Neon Pets: The Ultimate 16-Pet Grinding Challenge',
            excerpt: 'Achieve your Mega Neon dream with this comprehensive guide. Learn efficient multi-pet management and the secrets to rainbow-glowing pets.',
            readTime: '11 min read'
        },
        'adopt-me-lifestyle-fashion-guide': {
            title: 'Adopt Me Fashion and Lifestyle: Matching Your Style with Your Pets',
            excerpt: 'Express yourself in Adopt Me with coordinated outfits and vehicles. Learn how to create themed looks that match your legendary pets.',
            readTime: '9 min read'
        },
        'adopt-me-egg-hatching-probability': {
            title: 'Adopt Me Egg Hatching: Mathematical Approach to Getting Rare Pets',
            excerpt: 'Apply statistical methods to improve your hatching odds. Learn the science behind egg probabilities and efficient bulk hatching strategies.',
            readTime: '10 min read'
        },
        'adopt-me-pet-naming-marketing': {
            title: 'Adopt Me Pet Naming for Trading: Emotional Marketing Strategies',
            excerpt: 'Increase your pets\' trading value with strategic naming. Discover how creative, story-driven names can boost offers significantly.',
            readTime: '9 min read'
        },
        'adopt-me-neon-cave-secrets': {
            title: 'Adopt Me Neon Cave Tips: Fast Merging Techniques and Glitch Spots',
            excerpt: 'Master the Neon Cave with veteran player techniques. Learn precise positioning, quick merge sequences, and efficiency hacks.',
            readTime: '9 min read'
        },
        'adopt-me-house-building-efficiency': {
            title: 'Adopt Me House Building: Optimize Your Virtual Real Estate for Success',
            excerpt: 'Transform your house into an efficiency powerhouse. Learn how to design pet-raising stations and premium trading rooms.',
            readTime: '10 min read'
        },
        'adopt-me-retired-items-collection': {
            title: 'Adopt Me Retired Items: Investment Guide to Rare Toys and Vehicles',
            excerpt: 'Build wealth through retired item collecting. Understand which discontinued items appreciate in value and how to spot investment opportunities.',
            readTime: '10 min read'
        },
        'adopt-me-font-design-readability': {
            title: 'Adopt Me Font Design: Balancing Aesthetics with Readability',
            excerpt: 'Create the perfect name font that\'s both beautiful and functional. Learn minimalist symbol usage and legibility-first design principles.',
            readTime: '9 min read'
        },
        'adopt-me-gold-farming-automation': {
            title: 'Adopt Me Gold Farming: Maximize Earnings with Pet Task Automation',
            excerpt: 'Turn pet needs into an efficient gold production line. Master task loops, AFK techniques, and time management for maximum earnings.',
            readTime: '9 min read'
        },
        'adopt-me-trading-psychology': {
            title: 'Adopt Me Trading Psychology: Win Negotiations with Strategic Tactics',
            excerpt: 'Master the mental game of trading. Learn rejection tactics, slow acceptance strategies, and psychological pricing techniques.',
            readTime: '9 min read'
        },
        'adopt-me-asset-management-guide': {
            title: 'Adopt Me Asset Management: Protect Your Wealth from Pet Devaluation',
            excerpt: 'Preserve your virtual wealth with smart portfolio management. Learn diversification strategies and how to lock in retired asset value.',
            readTime: '10 min read'
        },
        'best-adopt-me-pet-names-2024': {
            title: 'Best Adopt Me Pet Names for 2024: Creative Ideas for Your Pets',
            excerpt: 'Discover the most creative and popular pet names for Roblox Adopt Me. From cute to cool, find the perfect name for your frost dragon, shadow dragon, or any pet.',
            readTime: '8 min read'
        },
        'how-to-prevent-name-filtering-roblox': {
            title: 'How to Prevent Your Name from Being Filtered in Roblox',
            excerpt: 'Learn why Roblox filters certain names and how to create names that pass the filter. Tips for using special characters safely.',
            readTime: '6 min read'
        }
    };

    const info = titles[article.slug];
    return `  {
    slug: "${article.slug}",
    title: "${info.title}",
    excerpt: "${info.excerpt}",
    date: "${article.date}",
    readTime: "${info.readTime}",
  }`;
}).join(',\n');

console.log(`const blogPosts = [\n${blogListData}\n];`);

console.log('\n✅ All article dates updated!');
