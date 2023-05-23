import useSWR from "swr";
import Layout from "../../components/layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
function Profile() {
    const { data, error, isLoading } = useSWR(
        "http://localhost:3003/posts",
        fetcher
    );

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;
    // render data
    return (
        <div>
            {data.map((dat) => {
                return (
                    <div>
                        <h1>{dat.title}</h1>
                        <h1>{dat.author}</h1>
                    </div>
                );
            })}
        </div>
    );
}
function Form() {
    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {
            id: event.target.id.value,
            title: event.target.title.value,
            author: event.target.author.value,
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = 'http://localhost:3003/posts'
        const options = {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        const response = await fetch(endpoint, options)
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">Id</label>
            <input type="text" id="id" name="id" required />

            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="Title" required />

            <label htmlFor="author">Author</label>
            <input type="text" id="author" name="Author" required />
            
            <button type="submit">Submit</button>
        </form>
    );
}
function App() {
    return (
        <Layout>
            <Form />
            <Profile />
        </Layout>
    );
}
export default App;