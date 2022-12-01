import fs from 'fs';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import SocialShare from '../../components/SocialShare';

export default function Blog({ frontmatter, markdown }) {
  return (
    <Layout>
      <Head>
        <title>Muslim Insight | {frontmatter.title}</title>
      </Head>
      <div className='bg-slate-200 px-5 py-5 md:py-10'>
        <h1 className='text-xl font-semibold'>{frontmatter.title}</h1>
        <span className='text-sm text-orange-700'>{frontmatter.date}</span>
        <SocialShare page={frontmatter.title} />
        <hr />
        <ReactMarkdown className='leading-8 text-slate-800'>
          {markdown}
        </ReactMarkdown>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const fileContent = matter(
    fs.readFileSync(`./content/blogs/${slug}.md`, 'utf8')
  );
  let frontmatter = fileContent.data;
  const markdown = fileContent.content;

  return {
    props: { frontmatter, markdown }
  };
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync('./content/blogs');

  // Getting the filenames excluding .md extension
  // and returning an array containing slug (the filename) as params for every route
  // It looks like this
  // paths = [
  //   { params: { slug: 'my-first-blog' }},
  //   { params: { slug: 'how-to-train-a-dragon' }},
  //   { params: { slug: 'how-to-catch-a-pokemon' }},
  // ]
  const paths = filesInProjects?.map((file) => {
    const filename = file.slice(0, file.indexOf('.'));
    return { params: { slug: filename } };
  });

  return {
    paths,
    fallback: false // This shows a 404 page if the page is not found
  };
}
