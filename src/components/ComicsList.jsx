import comics from "./Comics";
import ComicCard from "./ComicCard";

export default function ComicsList() {
    return (
        <section className="sfondocontainer">
            <div className="row">
                {comics.slice(0, 6).map((comic) => (
                    <ComicCard key={comic.id} comic={comic} />
                ))}
            </div>
            <div className="row">
                {comics.slice(6, 12).map((comic) => (
                    <ComicCard key={comic.id} comic={comic} />
                ))}
            </div>
            <div className="load-more-container">
                <button className="load-more">LOAD MORE</button>
            </div>
        </section>
    )
}
