import { Link } from "react-router-dom";
import './styles/global.css';

const reviews = [
    { name: "Anna", text: "Ciasta są niesamowite! Najlepsze jakie jadłam!" },
    { name: "Marek", text: "Fantastyczne miejsce na każdą okazję. Polecam!" },
    { name: "Kasia", text: "Szybka obsługa i przepyszne słodkości!" },
    { name: "Jan", text: "Rewelacyjne torty, idealne na urodziny." },
    { name: "Ola", text: "Świetna atmosfera i pyszne wypieki!" },
];

const Main = () => {
    const randomReviews = reviews.slice(0, 2);
    const footerReviews = reviews.slice(2, 5);

    return (
        <div className="container">
            <div className="card">
                <header className="section text-center">
                    <h1 className="text-4xl font-bold">Witamy w naszej Cukierni!</h1>
                    <p className="mt-4 text-lg text-gray-700">
                        Nasza cukiernia to miejsce, gdzie pasja do pieczenia łączy się z
                        najlepszymi składnikami. Każdy wypiek to wyjątkowa historia smaku!
                    </p>
                </header>

                <section className="section flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                        Opinie naszych klientów
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {randomReviews.map((review, index) => (
                            <div key={index} className="card">
                                <h3 className="card-header">{review.name}</h3>
                                <p className="card-content">{review.text}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <div className="przerwa">
                    <div className="mt-8">
                        <Link to="/cakes" className="button">
                            Zobacz Nasze Wypieki
                        </Link>
                    </div>
                </div>
                <div className="przerwa"></div>
                <footer className="footer w-full">
                    <h3 className="text-lg font-semibold mb-4 text-center">
                        Co mówią o nas klienci?
                    </h3>
                    <div className="reviews-container">
                        {footerReviews.map((review, index) => (
                            <div key={index} className="card">
                                <p className="text-gray-700 text-sm">{`"${review.text}"`}</p>
                                <p className="mt-2 text-pink-500 font-semibold">{review.name}</p>
                            </div>
                        ))}
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Main;