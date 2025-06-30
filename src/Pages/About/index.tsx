import React from 'react'

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-black font-mono px-6 py-12 flex items-center justify-center">
      <div className="max-w-3xl w-full space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-center">
          About Us
        </h1>

        <p className="text-base sm:text-lg leading-relaxed text-justify">
          Welcome to <strong>Techstaurant</strong> — your go-to digital solution for discovering, browsing, and ordering from top-rated restaurants near you. Our mission is to connect food lovers with great meals through intuitive design and cutting-edge technology.
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-justify">
          Founded by a team of developers and foodies, Techstaurant blends user-focused UX with powerful backend systems to ensure that your food experience is smooth from start to finish. Whether you're craving sushi, burgers, or fine dining — we've got you covered.
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-justify">
          We believe in transparency, reliability, and the joy of a great meal. With every click, scroll, and tap, our platform is designed to make dining easier and more enjoyable for everyone.
        </p>

        <div className="text-center pt-4">
          <span className="text-sm text-gray-500">Made with ❤️ by the TechnoFushion Team</span>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
