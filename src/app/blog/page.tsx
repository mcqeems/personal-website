import BlurFade from '@/components/magicui/blur-fade';
import { Pagination } from '@/components/pagination';
import { getBlogPosts } from '@/data/blog';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Blog',
  description: 'My thoughts on software development, life, and more.',
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const allPosts = await getBlogPosts();

  // Urutkan semua postingan dari yang terbaru ke yang terlama
  const sortedPosts = allPosts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  // Ambil postingan terbaru untuk ditampilkan di bagian atas
  const newestPost = sortedPosts[0];

  // Logika Paginasi
  const currentPage = Number(searchParams?.page) || 1;
  const postsPerPage = 6;
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

  const paginatedPosts = sortedPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-2 tracking-tighter">My Blog</h1>
        <p className="text-md mb-8 tracking-tighter text-gray-500">
          Explore articles on technology, personal experiences, life insights, and more about me.
        </p>
      </BlurFade>

      {/* Bagian Postingan Terbaru */}
      {newestPost && (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h2 className="text-xl font-bold mb-4 tracking-tighter">Newest Post</h2>
          <Link
            href={`/blog/${newestPost.slug}`}
            className="block mb-12 border border-gray-300 dark:border-gray-800 dark:hover:border-gray-500 p-5 rounded-md transition ease-in-out delay-100 shadow-lg hover:shadow-xl"
          >
            <div className="rounded-md max-h-[450px] flex justify-center items-center bg-slate-300 dark:bg-slate-700 overflow-hidden">
              <Image
                width={500}
                height={250}
                className="rounded-md w-full h-auto object-cover"
                src={newestPost.metadata.image || '/placeholder.jpg'}
                alt={`Cover image for ${newestPost.metadata.title}`}
              />
            </div>
            <div className="w-full flex flex-col mt-4">
              <p className="font-semibold tracking-tight text-lg">{newestPost.metadata.title}</p>
              <p className="mb-2 text-sm text-muted-foreground">{newestPost.metadata.summary}</p>
              <p className="h-6 text-xs text-muted-foreground">{newestPost.metadata.publishedAt}</p>
            </div>
          </Link>
        </BlurFade>
      )}

      {/* Bagian Semua Postingan dengan Grid */}
      <h2 className="text-xl font-bold mb-4 tracking-tighter">All Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paginatedPosts.map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 4 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 h-full border border-gray-300 dark:border-gray-800 dark:hover:border-gray-500 p-5 rounded-md transition ease-in-out delay-100 shadow-lg hover:shadow-xl"
              href={`/blog/${post.slug}`}
            >
              <div className="rounded-md h-48 w-full relative overflow-hidden bg-slate-300 dark:bg-slate-700">
                <Image
                  fill
                  className="object-cover"
                  src={post.metadata.image || '/placeholder.jpg'}
                  alt={`Cover image for ${post.metadata.title}`}
                />
              </div>
              <div className="w-full flex flex-col pt-4">
                <p className="tracking-tight font-semibold">{post.metadata.title}</p>
                <p className="mb-2 text-xs text-muted-foreground">{post.metadata.summary}</p>
                <p className="h-6 text-xs text-muted-foreground mt-auto">{post.metadata.publishedAt}</p>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>

      {/* Komponen Paginasi */}
      <div className="mt-8 flex justify-center">
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </section>
  );
}
