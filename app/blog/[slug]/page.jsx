import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { posts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: `${post.title} | JarveX Solutions Blog`, description: post.excerpt };
}

function formatDate(d) {
  return new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const currentIndex = posts.findIndex((p) => p.slug === params.slug);
  const related = [
    posts[(currentIndex + 1) % posts.length],
    posts[(currentIndex + 2) % posts.length],
    posts[(currentIndex + 3) % posts.length],
  ];

  return (
    <div>
      {/* HERO — fixed background using the post's own image */}
      <section
        className="hero-fixed-bg relative min-h-[70vh] flex items-end"
        style={{ backgroundImage: `url('${post.image}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />

        <div className="relative max-w-4xl mx-auto px-6 md:px-10 pb-16 pt-40 w-full">
          <Reveal>
            <Link href="/blog" className="text-xs font-mono uppercase tracking-widest text-orange2">
              ← All Articles
            </Link>
            <p className="text-xs font-mono uppercase tracking-widest text-white/60 mt-6 mb-4">
              {post.category} · {formatDate(post.date)} · {post.readTime}
            </p>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl text-white leading-[1.05]">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 mt-8">
              <div className="w-10 h-10 rounded-full bg-orange flex items-center justify-center text-white text-xs font-bold shrink-0">
                {post.author.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{post.author.name}</p>
                <p className="text-xs text-white/60">{post.author.role}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="max-w-3xl mx-auto px-6 md:px-10 -mt-10 sm:-mt-14 relative z-10 pb-10">
        <Reveal>
          <div className="bg-white rounded-[28px] border border-line shadow-2xl p-6 sm:p-10 md:p-14">
            <div className="space-y-6 text-ink/70 text-lg leading-relaxed">
              {post.body.map((para, i) => (
                <p key={i} className={i === 0 ? "first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-orange first-letter:mr-2 first-letter:float-left" : ""}>
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-ink flex items-center justify-center text-orange2 text-sm font-bold shrink-0">
                  {post.author.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Written by {post.author.name}</p>
                  <p className="text-xs text-ink/45">{post.author.role} at JarveX Solutions</p>
                </div>
              </div>
              <Link href="/contact" className="px-7 py-3 rounded-full bg-orange text-white text-sm font-bold text-center hover:bg-ink transition-colors">
                Talk To A Dispatcher
              </Link>
            </div>
          </div>
        </Reveal>
      </article>

      {/* RELATED */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24 pt-10">
        <Reveal>
          <span className="tag-index font-mono text-xs text-ink/45">KEEP READING</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-4 mb-10">More From The BLog</h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <Link href={`/blog/${p.slug}`} className="card-premium group block bg-white rounded-2xl overflow-hidden border border-line h-full">
                <div className="relative h-40 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="eager" fetchpriority="high" />
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-orange mb-2">{p.category}</p>
                  <h3 className="font-display font-bold text-sm text-ink leading-snug group-hover:text-orange transition-colors">
                    {p.title}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
