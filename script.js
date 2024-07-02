const heroData = [
    {
        title: "Visit Tokyo",
        text: "Discover the beauty and culture of Tokyo with our exclusive tours.",
        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/0e/b9/79.jpg"
    },
    {
        title: "Explore Kyoto",
        text: "Experience the historical and cultural richness of Kyoto.",
        image: "https://www.kcpinternational.com/wp-content/uploads/2011/07/Spring-in-Tokyo.jpg"
    },
    {
        title: "Discover Osaka",
        text: "Enjoy the vibrant city life and culinary delights of Osaka.",
        image: "http://upload.wikimedia.org/wikipedia/commons/a/a5/Tokyo_National_Museum,_Honkan_2010.jpg"
    },
    {
        title: "Adventure in Hokkaido",
        text: "Embrace the natural beauty and outdoor activities in Hokkaido.",
        image: "https://i.pinimg.com/originals/b6/a4/82/b6a48272fc31b632d1eb9e913332741f.jpg"
    },
    {
        title: "Relax in Okinawa",
        text: "Unwind on the beautiful beaches and enjoy the tropical climate of Okinawa.",
        image: "http://www.jsjapan.com/blog/wp-content/uploads/2015/03/DSC01665.jpg"
    }
];

function changeHero(index) {
    const heroTitle = document.getElementById('hero-title');
    const heroText = document.getElementById('hero-text');
    const header = document.querySelector('header');
    
    heroTitle.style.opacity = 0;
    heroText.style.opacity = 0;
    header.style.opacity = 0;
    
    setTimeout(() => {
        heroTitle.textContent = heroData[index].title;
        heroText.textContent = heroData[index].text;
        header.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${heroData[index].image})`;

        heroTitle.style.opacity = 1;
        heroText.style.opacity = 1;
        header.style.opacity = 1;
    }, 500);

    const buttons = document.querySelectorAll('.hero-controls button');
    buttons.forEach(button => button.classList.remove('active'));
    buttons[index].classList.add('active');
}
