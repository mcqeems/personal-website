import BlurFade from '@/components/magicui/blur-fade';
import { getBlogPosts } from '@/data/blog';
import Link from 'next/link';

export const metadata = {
  title: 'Blog',
  description: 'My thoughts on software development, life, and more.',
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-2 tracking-tighter">My Blog</h1>
        <p className="text-md mb-8 tracking-tighter text-gray-500">
          I will write some articles and anything related to Technologies soon!
        </p>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4 border border-gray-300 dark:border-gray-800 dark:hover:border-gray-500 p-5 rounded-md transition  ease-in-out  delay-100 shadow-xl hover:shadow-2xl "
              href={`/blog/${post.slug}`}
            >
              <div className="rounded-md max-h-[450px] flex justify-center items-center bg-slate-300 dark:bg-slate-700">
                <img className="rounded-md max-h-[450px]" src={post.metadata.image}></img>
              </div>
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <p className="mb-2 text-xs text-muted-foreground">{post.metadata.summary}</p>
                <p className="h-6 text-xs text-muted-foreground">{post.metadata.publishedAt}</p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
