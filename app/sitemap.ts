import { getSortedPostsData } from "@/lib/posts";
import { siteUrl } from "@/meta.config";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const base: MetadataRoute.Sitemap = [
        {
            url: `${siteUrl}/`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${siteUrl}/terms`,
            lastModified: '2024-11-11',
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${siteUrl}/privacy`,
            lastModified: '2024-11-11',
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${siteUrl}/about`,
            lastModified: '2024-11-11',
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${siteUrl}/guides`,
            lastModified: '2024-11-13',
            changeFrequency: 'daily',
            priority: 0.9,
        }
    ];

    const posts: MetadataRoute.Sitemap = getSortedPostsData().map(post => ({
        url: `${siteUrl}/guides/${post.id}`,
        lastModified: post.date,
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    return [...base, ...posts];
}