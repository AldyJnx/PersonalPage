import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogCard } from "@/components/blog/BlogCard";
import { Badge } from "@/components/ui/Badge";
import { getAllBlogPosts, getAllTags } from "@/lib/blog";

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map((tag) => ({
    tag: tag.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const tagName = tag.replace(/-/g, ' ');
  return {
    title: `Posts tagged with "${tagName}"`,
    description: `Browse all blog posts tagged with ${tagName}`,
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const tagName = tag.replace(/-/g, ' ');
  const allPosts = await getAllBlogPosts();

  const posts = allPosts.filter((post) =>
    post.tags.some((t) => t.toLowerCase().replace(/\s+/g, '-') === tag)
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto mb-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-bold">Posts tagged with</h1>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  {tagName}
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground">
                {posts.length} {posts.length === 1 ? 'post' : 'posts'} found
              </p>
            </div>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No posts found with this tag
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
