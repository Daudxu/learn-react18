
const BookList = () => {
    return <section>
        <Books/>
        <Books/>
        <Books/>
        <Books/>
        <Books/>
    </section>
}
const Image = () => <h2>image placeholder</h2>
const Title = () => <h2>Book Title</h2>
const Author = () => {
    <h4>Author</h4>
}

const Books = () => {
    return <article>
        <Image />
        <Title />
        <Author />
    </article>
}


export default BookList;