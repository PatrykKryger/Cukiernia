import cake1 from "./images/ChocolateCake.png";
import cake2 from "./images/StrawberryCake.png";
import cake3 from "./images/VanillaCake.png";

const descriptions = [
    "To ciasto to prawdziwy klasyk – wilgotne i pełne smaku.",
    "Nowoczesna kompozycja smaków i kolorów, która zachwyca!",
    "Idealne na każdą okazję – lekka, puszysta i pyszna propozycja.",
    "Delikatne i kremowe, idealne do popołudniowej kawy.",
    "Czekoladowa rozkosz, której nie sposób się oprzeć.",
    "Soczyste owoce i aksamitny krem – idealne połączenie!",
    "Domowy smak w nowoczesnym wydaniu.",
    "Pachnie wanilią i dzieciństwem – po prostu pyszne.",
    "Wygląda jak dzieło sztuki, smakuje jeszcze lepiej!",
    "Słodycz idealnie zbalansowana z nutą orzeźwienia.",
    "Kremowa konsystencja i chrupiąca baza – poezja smaków.",
    "Wyjątkowy deser na wyjątkowe okazje.",
    "Zaskakująca tekstura i niesamowity aromat.",
    "Ciasto inspirowane tradycyjną recepturą babci.",
    "To ciasto rozpływa się w ustach – dosłownie!",
    "Klasyczne, ale z nowoczesnym twistem.",
    "Lekkość tego ciasta to prawdziwa magia.",
    "Owocowa świeżość i kremowa delikatność w jednym.",
    "Świetny wybór dla miłośników subtelnych smaków.",
    "Z każdym kęsem odkrywasz nowy wymiar słodyczy."
];


const Gallery = () => {
    const images = [
        { src: cake1, alt: "Ciasto 1", description: descriptions[Math.floor(Math.random() * descriptions.length)] },
        { src: cake2, alt: "Ciasto 2", description: descriptions[Math.floor(Math.random() * descriptions.length)] },
        { src: cake3, alt: "Ciasto 3", description: descriptions[Math.floor(Math.random() * descriptions.length)] },
    ];

    return (
        <div className="gallery-container" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "20px" }}>
            {images.map((img, index) => (
                <div key={index} style={{ marginBottom: "20px", display: "flex", gap: "20px", alignItems: "center" }}>
                    <img src={img.src} alt={img.alt} style={{ width: "200px", height: "auto", borderRadius: "8px" }} />
                    <p style={{ maxWidth: "400px" }}>{img.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
