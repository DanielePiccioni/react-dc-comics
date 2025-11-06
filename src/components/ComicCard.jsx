export default function ComicCard(props) {
    return (
        <div className="comic-card">
            <img src={props.image} alt={props.title} className="comic-thumb" />
            <h6 className="comic-series">{props.title}</h6>
        </div>
    )
}