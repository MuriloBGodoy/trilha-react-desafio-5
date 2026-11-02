import { getGlobalData } from '../../utils/global-data';
import { getPostBySlug } from '../../utils/mdx-utils';

import Head from 'next/head';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';

export default function PostPage({
  posts,
  globalData,
}) {
  return (
    <Layout>
      <SEO
        title={`${posts?.title || 'Post'} - ${globalData?.name || 'DIO Blog'}`}
        description={posts?.description || ''}
      />
      <Header name={globalData?.name} />
      <article className="px-6 md:px-0 max-w-3xl mx-auto w-full">
        <header className="mb-8">
          <Link href="/">
            <a className="inline-flex items-center text-primary dark:text-white font-semibold mb-6 hover:underline">
              ← Voltar para o início
            </a>
          </Link>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-6 font-bold leading-tight">
            {posts?.title}
          </h1>
          {posts?.created_at && (
            <p className="text-sm uppercase text-center font-semibold opacity-60 mb-4">
              {new Date(posts.created_at).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              })}
            </p>
          )}
          {posts?.description && (
            <p className="text-xl text-center text-gray-600 dark:text-gray-300 italic mb-8">
              {posts?.description}
            </p>
          )}
        </header>
        <main>
          <div className="prose dark:prose-dark max-w-none text-lg leading-relaxed space-y-4">
            <p>{posts?.body}</p>
          </div>
        </main>
      </article>
      <Footer copyrightText={globalData?.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const globalData = getGlobalData();
  const posts = await getPostBySlug(params.id);

  if (!posts || !posts.title) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      globalData,
      posts,
    },
  };
};
