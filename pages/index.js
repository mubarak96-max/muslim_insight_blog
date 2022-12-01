import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function Home({ blogs }) {
  return (
    <div className='container text-center'>
      <Layout>
        <Head>
          <title>Muslim Insight</title>
        </Head>
        <div>
          <ul className=''>
            {blogs.map((blog) => (
              <li key={blog.slug} className='my-6 underline'>
                <Link
                  href={`/blog/${blog.slug}`}
                  className='text-cyan-500 text-xl '
                >
                  {blog.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  // List of files in blgos folder
  const filesInBlogs = fs.readdirSync('./content/blogs');

  // Get the front matter and slug (the filename without .md) of all files
  const blogs = filesInBlogs?.map((filename) => {
    const file = fs.readFileSync(`./content/blogs/${filename}`, 'utf8');
    const matterData = matter(file);

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.'))
    };
  });

  return {
    props: {
      blogs
    }
  };
}
