const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Plants collection and inserts the plants below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/plants"
);

const plantsSeed = [
    {
        title: "Daylily",
        description: "Plant breeders continue to expand the color palette available in daylilies, which now includes yellow, orange, red, white, and purple flowers. Varieties with muliticolored blooms, often with a contrasting 'eye,' or center, are increasingly popular. Most daylilies have a distinct, three- to four-week bloom period in early to late summer, although some varieties continue to bloom sporadically all season long. Most daylilies bloom during the day (diurnal), but some open in the evening (nocturnal). Individual flowers last just one day but new ones open daily for the duration of the bloom time. Foliage height ranges from 1 to 4 feet, depending on variety. Flower stalks, or scapes, on the tallest varieties can reach 6 feet. Flowers are edible.",
        image: "https://garden.org/pics/2018-09-29/Betja/60bcb6.jpg",
        isSaved: false
    },
    {
        title: "Apple",
        description: "Apples require a fair amount of patience and planning. If you want a choice crop, you'll have to control insects, diseases, and other pests, keep an eye on the weather, and prune annually. And your first harvest will only come 3 years or more after planting. But the reward picking apples from your own garden is worth the effort.",
        image: "https://garden.org/pics/2018-10-13/cliftoncat/51940e.jpg",
        isSaved: false
    },
    {
        title: "Basil",
        description: "There are several types of basil to choose from. The most common is bush or sweet basil, a compact plant growing to 18 inches or so during the season. Purple basil adds a splendid burgundy color to the garden. It can be used like common basil, though it's a little less sweet. The purple leaves create a beautiful color when steeped in white vinegar. Recently rediscovered by many cooks, lemon basil adds a lemony basil fragrance to both the garden and the kitchen. Thai basil adds a licorice flavor and tastes great in Asian cooking. Basil is a heat-loving annual herb.",
        image: "https://garden.org/pics/2014-05-08/wildflowers/9e62c5.jpg",
        isSaved: false
    },
    {
        title: "Beet",
        description: "Beets' original ancestors were leafy plants, without bulbous roots, that grew in the moderate climates of the Mediterranean region. Like their cousin, Swiss chard, beet greens are packed with nutrition. However, it's the roots for which beets are best known. Select a site with full sun and well-drained soil. Prepare the garden bed by using a garden fork or tiller to loosen the soil to a depth of 12 to 15 inches, then mix in a 2- to 4-inch layer of compost.",
        image: "https://garden.org/pics/2014-06-02/farmerdill/3f9994.jpg",
        isSaved: false
    },
    {
        title: "Cilantro",
        description: "Coriandrum sativum goes by many names: cilantro, coriander, Mexican or Chinese parsley. The green, leafy part is the herb, called cilantro, is often the 'secret ingredient' (along with cumin) that makes Mexican food taste authentic. The dried seedpod is known as coriander and is usually used as a spice in baking and desserts. Native to Egypt, cilantro is one of the most ancient herbs still cultivated. This annual plant does best in cool weather. Cilantro grows 2 to 3 feet tall and thrives in moderately rich, light, well-drained soil in full to partial sun.",
        image: "https://garden.org/pics/2019-01-16/queen1694/e5d058.jpg",
        isSaved: false
    },
    {
        title: "Cucumber",
        description: "There are many cucumber types, including picklers, slicers, gherkins, white, and bush cukes. The art of pickling and preserving cucumbers is centuries old. You can pickle or preserve any small cucumber, or eat picklers fresh right off the vine, so experiment with different varieties, regardless of how you intend to use them. In general, picklers are smallish, often warty, green, used for small sweet pickles or large dills, but the can also be eaten fresh. Slicers form 5- to 8-inch cylindrical cucumbers, used for slicing and serving fresh. Cucumbers grow best with long, hot, humid days with maximum sunshine and warm nights. Plants are extremely susceptible to frost.",
        image: "https://garden.org/pics/2017-08-29/Newyorkrita/0d876d.jpg",
        isSaved: false
    },
    {
        title: "Fig",
        description: "The common fig is a deciduous, small tree usually growing 10 to 30 feet tall, with large, lobed, deep green leaves that lend a tropical air to the plant. (There are other types of figs less commonly grown that have different pollination requirements. This information pertains to common figs.) The flowers of the common fig are all female and don't need pollinating to set fruit. The first crop of fruit in spring is called the 'breba' crop, maturing from buds set the previous season. The main crop that follows in the fall matures on the new growth made that summer. In cooler parts of its range, the breba crop is often lost to spring frosts.",
        image: "https://garden.org/pics/2019-01-29/scvirginia/40a273.jpg",
        isSaved: false
    },
    {
        title: "Garlic",
        description: "You can buy garlic bulbs or sets from garden stores or mail-order sources. There are three types of garlic: Elephant, hardneck and softneck. ,Elephant, garlic is actually a bulbing leek and a good variety to look for if you want large, mild-flavored clusters. Elephant bulbs can weigh as much as 1lb. with 4-6 large cloves. Hardneck garlic will produce bulbs of 6-12 cloves while softneck produces 8-24 smaller cloves. Hardneck garlic does best in cold winter areas, while softneck garlic is a good choice for mild winter climates.",
        image: "https://garden.org/pics/2014-06-03/dave/5c9ed9.jpg",
        isSaved: false
    },
    {
        title: "Lettuce",
        description: "Lettuce is a cool-weather crop. Sow seeds as soon as the ground can be worked in the spring and follow with small sowings at 10- to 14-day intervals until late spring in warm summer areas or early summer in the North.",
        image: "https://garden.org/pics/2013-06-18/gardengus/d65ce5.jpg",
        isSaved: false
    },
    {
        title: "Mint",
        description: "Spearmint is used most commonly in the kitchen for mint juleps, sauces, jellies, teas, or to highlight flavors in a fruit salad. It's very fragrant and grows 2 to 3 feet tall with pale violet blooms in mid- to late summer. Peppermint is another popular mint with a strong aroma; it grows to 3 feet tall with smooth leaves 1 to 3 inches long. Another dozen or so mint varieties, including some interesting fruit-scented types such as orange mint, are also available. Choose a site in full sun to part shade and moist soil. Or, since plants can be invasive, grow your mint in containers filled with potting mix enriched with compost.",
        image: "https://garden.org/pics/2012-11-11/SongofJoy/85bbb7.jpg",
        isSaved: false
    },
    {
        title: "Okra",
        description: "Okra is considered a 'southern' crop because it thrive in hot weather. However, okra can be grown anywhere, although it bears most abundantly in regions with long, hot summers. Okra is often stewed with tomatoes, deep fried, pickled, boiled or steamed and served with butter, as well as eaten raw, fresh from the garden. Some folks don't like okra's gummy quality when it's boiled or steamed, and it seems to be more popular when combined with other vegetables, fried or pickled.",
        image: "https://garden.org/pics/2012-07-20/farmerdill/6a066c.jpg",
        isSaved: false
    },
    {
        title: "Pea",
        description: "Plant dwarf varieties to save space and produce early harvests. Plant tall or pole varieties for bigger harvests over a longer period of time. Peas are a cool-weather crop that can withstand frost. Northern gardeners can often plant their first crop near the end of March, as soon as the garden has thawed and the soil can be worked.",
        image: "https://garden.org/pics/2019-04-10/farmerdill/1b3058.jpg",
        isSaved: false
    },
    {
        title: "Pepper",
        description: "The glistening greens of the leaves and the rainbow of colors of the ripening peppers -- red, yellow, orange, green, brown or purple -- make pepper plants an ornamental, as well as delicious, addition to the garden. Sweet bell peppers go well with just about anything and are wonderful eaten right out of the garden, while the hotter varieties spice up many recipes. Stuffed peppers, pickled peppers, fried peppers -- peppers fit in, deliciously, everywhere. Peppers like warmth, so wait to plant until the soil and air temperature has warmed up reliably.",
        image: "https://garden.org/pics/2015-08-02/Weedwhacker/294e32.jpg",
        isSaved: false
    },
    {
        title: "Potato",
        description: "There has a resurgence of interest in home-grown potatoes, especially now that they are available in a wide variety of colors, shapes, and tastes. Most gardeners plant 'seed' potatoes, a confusing term since these aren't seeds at all but rather small potato tubers. For best results, purchase certified seed potatoes; these will have been inspected to ensure they are free from disease. Avoid planting supermarket potatoes, because they may have been treated with a growth inhibitor to prevent them from sprouting. Consider trying some unusual varieties, such as fingerlings or blue potatoes.",
        image: "https://garden.org/pics/2015-05-28/Heidlberg/58b50c.jpg",
        isSaved: false
    },
    {
        title: "Radish",
        description: "Radish varieties vary in size, color, shape, and taste --some are very pungent, while others are quite mild. Plant short-season or spring varieties in spring or fall, depending on local temperatures. Ideal growing temperature is 60 degrees F to 65 degrees F. Cooler or warmer weather results in harsher-tasting radishes. Plants will mature in 18 to 45 days, depending on variety. Plant winter types in the summer or fall, depending on the variety; they mature in 45 to 70 days.",
        image: "https://garden.org/pics/2014-10-20/farmerdill/3f5e40.jpg",
        isSaved: false
    },
    {
        title: "Spinach",
        description: "Spinach must have at least 6 weeks of cool weather from seeding to harvest. Preparing a spot for spinach in the garden is best done in the fall so that, come spring, you can sow the seeds outdoors as soon as the ground thaws. Or, if you live where winters are mild, you can prepare soil and plant in fall. Select a site with full sun to light shade and well-drained soil. Prepare the garden bed by using a garden fork or tiller to loosen the soil to a depth of 12 to 15 inches, then mix in a 2- to 4-inch layer of compost.",
        image: "https://garden.org/pics/2014-04-29/farmerdill/2e16bf.jpg",
        isSaved: false
    },
    {
        title: "Strawberry",
        description: "Strawberries require a fair amount of maintenance to produce a good crop. You can maximize yields by continually renewing your strawberry bed with new plants. Plants bear in their second season. Plan to set your new plants out in early spring, just as the trees in your area leaf out. For best yields, start a new bed of plants each year and take out beds that have fruited. Select a site that offers full sun and good drainage and air circulation.",
        image: "https://garden.org/pics/2015-07-26/gardengus/056953.jpg",
        isSaved: false
    },
    {
        title: "Thyme",
        description: "Thyme most often used in cooking is known as English thyme. Like the other thymes, it has woody stems with small oval leaves. It will grow 8 to 12 inches high (many other thymes are smaller). Creeping varieties are good as edging plants or in rock gardens. Lemon thyme is a delightful plant for both garden and kitchen. Caraway thyme is a low-growing plant combining the fragrances of caraway and thyme; it has dark green leaves.",
        image: "https://garden.org/pics/2014-08-20/dirtdorphins/802c94.jpg",
        isSaved: false
    },
    {
        title: "Tomato",
        description: "With hundreds of varieties to choose from, and more being introduced every year, there is a tomato for every garden situation and every personal taste. The size of the fruit is no indication of plant size -- tiny 'currant' tomatoes might grow on huge, vining (indeterminate) plants, while large 'beefsteak' varieties can be found on more manageable bush (determinate) plants. Newer hybrid varieties have been bred for disease resistance, but don't overlook heirlooms that are famous for their rich flavors. By planting early-, mid-, and late-season varieties, you can extend the harvest.",
        image: "https://garden.org/pics/2015-08-09/Fleur569/fb6daa.jpg",
        isSaved: false
    }
];

db.Plants
    .remove({})
    .then(() => db.Plants.collection.insertMany(plantsSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
