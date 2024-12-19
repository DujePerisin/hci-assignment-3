export default async function BlogPost({
    params,
  }: {
    params: { id: string };
  }) {
    const { id } = await params; // safely accessing "id" while awaiting params to load properly to avoid errors
  
    // fetching the blog post data from JSONPlaceholder
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      { next: { revalidate: 60 } } // optional caching for ISR; sounds cool will keep it
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch blog post with id: ${id}`);
    }
    
    const blog = await res.json();
  
    return (
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
        <p>{blog.body}</p>
      </main>
    );
  }
  