export const slideSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
  pauseOnHover: false,
}

export const slideImage = () => {
  const data = [
    { id: 1, link: '/images/top1.jpg' },
    { id: 2, link: '/images/top2.jpg' },
    { id: 3, link: '/images/top3.jpg' },
    { id: 4, link: '/images/top4.jpg' },
    { id: 5, link: '/images/top5.jpg' },
    { id: 6, link: '/images/top6.jpg' },
    { id: 7, link: '/images/top7.jpg' },
    { id: 8, link: '/images/top8.jpg' },
    { id: 9, link: '/images/top9.jpg' },
  ]
  return data
}
