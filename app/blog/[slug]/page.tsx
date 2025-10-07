import type { Metadata } from "next";
import { posts } from "../posts";

type Params = { slug: string };

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) return { title: "Post Not Found | TalentX" };
  return {
    title: `${post.title} | TalentX Blog`,
    description: post.excerpt
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) {
    return (
      <main className="container py-20">
        <h1>Post Not Found</h1>
        <p className="mt-2">The post you are looking for does not exist.</p>
        <a className="btn-primary mt-6 inline-block" href="/blog">Back to Blog</a>
      </main>
    );
  }

  const date = new Date(post.date).toLocaleDateString();

  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-900 text-white">
        <div className="container py-16">
          <div className="text-sm text-white/70">{date} · {post.tag}</div>
          <h1 className="max-w-5xl">{post.title}</h1>
          <p className="mt-4 max-w-3xl text-white/80">{post.excerpt}</p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <a className="btn-outline" href="/blog">All Posts</a>
            <a className="btn-primary" href="/newsletter">Subscribe</a>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="container py-12">
        <article className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </article>
      </section>

      {/* CTA */}
      <section className="bg-slate-100">
        <div className="container py-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2>Get monthly playbooks and case notes.</h2>
            <p className="text-slate-700 mt-1">We share practical ways to hire better and deliver outcomes reliably.</p>
          </div>
          <a className="btn-primary" href="/newsletter">Subscribe</a>
        </div>
      </section>
    </main>
  );
}