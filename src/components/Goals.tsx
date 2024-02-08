export default function Goals({
    title,
    description
}: {
    title: string,
    description: string
} ){

    return (
    <article>
        <div>
            <h2>{ title }</h2>
            <p>{ description }</p>
        </div>
        <button>Delete</button>
    </article>
    )
}