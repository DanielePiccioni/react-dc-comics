export default function ComicCard({ comic }) {
    return (
        <div className="col">
            <article className="comic-card">
                <img
                    src={comic.thumb}
                    alt={comic.title}
                    className="comic-thumb"
                />
                <h6 className="comic-series">{comic.series}</h6>
            </article>
        </div>
    )
}