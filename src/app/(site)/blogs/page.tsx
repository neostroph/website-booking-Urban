
import BlogCard from "@/app/components/shared/blog/blogCard";
import HeroSub from "@/app/components/shared/hero-sub";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Property-pro",
};

const Blog = () => {
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/blogs", text: "Blog List" },
    ];

    return (
        <>
            <HeroSub
    title="Urban Insights"
    description="Stay informed with the latest property trends, buying guides, and renting tips from Urban's experts."
    breadcrumbLinks={breadcrumbLinks}
/>
            <section className="flex flex-wrap justify-center dark:bg-darkmode px-4">
                <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto ">
                    <div className="grid grid-cols-12 lg:gap-14 gap-6">
                        {posts.map((blog, i) => (
                            <div key={i} className="w-full col-span-12 lg:col-span-6">
                                <BlogCard blog={blog} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
