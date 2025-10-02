import React from "react";

const STRAPI_URL = "http://localhost:1337"; // Update this to your Strapi URL

interface StrapiBlock {
  type: string;
  children?: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  level?: number;
  format?: string;
}

export interface StrapiBlog {
  id: number;
  attributes: {
    title: string;
    slug: string;
    category: string;
    excerpt: string;
    featured_image: {
      data: Array<{
        attributes: {
          url: string;
        };
      }>;
    };
    content: StrapiBlock[]; // Rich text blocks
    featured_image_1: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    featured_image_2: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    author_name: string;
    read_time: string;
    createdAt: string;
    publishedAt: string;
  };
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  slug: string;
}

export interface BlogPostDetail extends BlogPost {
  content: StrapiBlock[]; // Rich text blocks
  images: string[];
}

export const fetchBlogs = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/blogs?populate=*`);
    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }
    const data = await response.json();
    return data.data.map((item: any) => ({ // eslint-disable-line @typescript-eslint/no-explicit-any
      id: item.id,
      title: item.title || "",
      description: item.excerpt || "",
      thumbnail: item.featured_image_1?.url
        ? `${STRAPI_URL}${item.featured_image_1.url}`
        : item.featured_image?.[0]?.url
        ? `${STRAPI_URL}${item.featured_image[0].url}`
        : "",
      date: item.publishedAt || item.createdAt || "",
      readTime: item.read_time || "",
      author: item.author_name || "",
      category: item.Category || "",
      slug: item.slug || "",
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

export const fetchBlogBySlug = async (
  slug: string
): Promise<BlogPostDetail | null> => {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch blog");
    }
    const data = await response.json();
    if (data.data.length === 0) return null;
    const item = data.data[0];
    return {
      id: item.id,
      title: item.title || "",
      description: item.excerpt || "",
      thumbnail:
        item.featured_image_1?.url
          ? `${STRAPI_URL}${item.featured_image_1.url}`
          : item.featured_image?.[0]?.url
          ? `${STRAPI_URL}${item.featured_image[0].url}`
          : "",
      date: item.publishedAt || item.createdAt || "",
      readTime: item.read_time || "",
      author: item.author_name || "",
      category: item.Category || "",
      slug: item.slug || "",
      content: item.content || [],
      images: [
        item.featured_image_1?.url ? `${STRAPI_URL}${item.featured_image_1.url}` : "",
        item.featured_image_2?.url ? `${STRAPI_URL}${item.featured_image_2.url}` : "",
      ].filter(Boolean),
    };
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};

// Simple renderer for Strapi rich text blocks
export const renderRichText = (blocks: StrapiBlock[]): JSX.Element[] => {
  return blocks
    .filter((block) => {
      // Filter out empty paragraphs
      if (block.type === "paragraph") {
        return block.children?.some(
          (child) => child.text && child.text.trim() !== ""
        );
      }
      return true;
    })
    .map((block, index) => {
      switch (block.type) {
        case "paragraph": {
          return (
            <p key={index} className="text-gray-700 mb-6 leading-relaxed">
              {block.children?.map((child, childIndex) => {
                if (child.type === "text") {
                  const style: React.CSSProperties = {};
                  if (child.bold) style.fontWeight = "bold";
                  if (child.italic) style.fontStyle = "italic";
                  if (child.underline) style.textDecoration = "underline";
                  return (
                    <span key={childIndex} style={style}>
                      {child.text}
                    </span>
                  );
                }
                return null;
              })}
            </p>
          );
        }
        case "heading": {
          const HeadingTag = `h${
            block.level || 2
          }` as keyof JSX.IntrinsicElements;
          return (
            <HeadingTag key={index} className="text-2xl font-bold mb-4 mt-8">
              {block.children?.map((child) => child.text).join("")}
            </HeadingTag>
          );
        }
        case "list": {
          const ListTag = block.format === "ordered" ? "ol" : "ul";
          return (
            <ListTag key={index} className="mb-6 ml-6">
              {block.children?.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-2">
                  {item.children?.map((child: any) => child.text).join("")} {/* eslint-disable-line @typescript-eslint/no-explicit-any */}
                </li>
              ))}
            </ListTag>
          );
        }
        default:
          return <div key={index}></div>;
      }
    });
};
