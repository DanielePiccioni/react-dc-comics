import comics from "./Comics";
import ComicCard from "./ComicCard";

export default function ComicsList() {
    return (
        <section className="container">
            <div className="row">
                {comics.map((comic) => (
                    <ComicCard key={comic.id} comic={comic} />
                ))}
            </div>
        </section>
    )
}


