import comics from "./Comics";
import ComicCard from "./ComicCard";

export default function ComicsList() {
    return (
        <section className="sfondocontainer">
            <div className="container">
                {/* riga con 6 colonne per riga */}
                <div className="row row-cols-6 g-4">
                    {comics.slice(0, 12).map((comic) => (
                        <div className="col" key={comic.id}>
                            <ComicCard
                                image={comic.thumb}
                                title={comic.series}
                            />
                        </div>
                    ))}
                </div>

                <div className="d-flex justify-content-center mt-4">
                    <button className="btn btn-primary text-uppercase py-2">
                        Load More
                    </button>
                </div>
            </div>
        </section>
    )
}
