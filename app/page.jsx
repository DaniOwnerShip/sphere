import Link from 'next/link'


function HomePage() {
    return (
        <div className="app">

            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>

            <p>Esta es mi página.</p>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/sphere">sphere</Link>
                </li>
                <li>
                    <Link href="/blog/hello-world">Blog Post</Link>
                </li>
            </ul>

        </div>
    );
}

export default HomePage;

