import { collection, getDocs, doc, getDoc, query, orderBy, limit, where, addDoc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  author: {
    name: string;
  };
  categories: string[];
  images: string[];
  read_time: string;
  publishedAt?: Date;
  featured?: boolean;
}

// Fetch all blog posts
export const getAllBlogs = async (): Promise<BlogPost[]> => {
  try {
    const blogsCollection = collection(db, 'blogs');
    const querySnapshot = await getDocs(blogsCollection);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as BlogPost[];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

// Add a new blog post
export const addBlog = async (blogData: Omit<BlogPost, 'id' | 'publishedAt'>): Promise<string | null> => {
  try {
    const blogsCollection = collection(db, 'blogs');
    const docRef = await addDoc(blogsCollection, {
      ...blogData,
      publishedAt: serverTimestamp()
    });
    
    return docRef.id;
  } catch (error) {
    console.error('Error adding blog:', error);
    return null;
  }
};

// Fetch featured blog posts
export const getFeaturedBlogs = async (limitCount: number = 3): Promise<BlogPost[]> => {
  try {
    const blogsCollection = collection(db, 'blogs');
    const blogsQuery = query(
      blogsCollection, 
      where('featured', '==', true),
      limit(limitCount)
    );
    const querySnapshot = await getDocs(blogsQuery);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as BlogPost[];
  } catch (error) {
    console.error('Error fetching featured blogs:', error);
    return [];
  }
};

// Fetch a single blog post by ID
export const getBlogById = async (id: string): Promise<BlogPost | null> => {
  try {
    const blogDoc = doc(db, 'blogs', id);
    const docSnapshot = await getDoc(blogDoc);
    
    if (docSnapshot.exists()) {
      return {
        id: docSnapshot.id,
        ...docSnapshot.data()
      } as BlogPost;
    }
    return null;
  } catch (error) {
    console.error('Error fetching blog by ID:', error);
    return null;
  }
};

// Update an existing blog post
export const updateBlog = async (id: string, blogData: Partial<Omit<BlogPost, 'id' | 'publishedAt'>>): Promise<boolean> => {
  try {
    const blogDoc = doc(db, 'blogs', id);
    await updateDoc(blogDoc, {
      ...blogData,
      updatedAt: serverTimestamp()
    });
    return true;
  } catch (error) {
    console.error('Error updating blog:', error);
    return false;
  }
};

// Delete a blog post
export const deleteBlog = async (id: string): Promise<boolean> => {
  try {
    const blogDoc = doc(db, 'blogs', id);
    await deleteDoc(blogDoc);
    return true;
  } catch (error) {
    console.error('Error deleting blog:', error);
    return false;
  }
};

// Get all blogs with admin features (includes unpublished, etc.)
export const getAllBlogsForAdmin = async (): Promise<BlogPost[]> => {
  try {
    const blogsCollection = collection(db, 'blogs');
    const blogsQuery = query(blogsCollection, orderBy('publishedAt', 'desc'));
    const querySnapshot = await getDocs(blogsQuery);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as BlogPost[];
  } catch (error) {
    console.error('Error fetching blogs for admin:', error);
    return [];
  }
};

// Fetch blog posts by category
export const getBlogsByCategory = async (category: string): Promise<BlogPost[]> => {
  try {
    const blogsCollection = collection(db, 'blogs');
    const blogsQuery = query(
      blogsCollection,
      where('categories', 'array-contains', category)
    );
    const querySnapshot = await getDocs(blogsQuery);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as BlogPost[];
  } catch (error) {
    console.error('Error fetching blogs by category:', error);
    return [];
  }
};

// Fetch recent blog posts
export const getRecentBlogs = async (limitCount: number = 5): Promise<BlogPost[]> => {
  try {
    const blogsCollection = collection(db, 'blogs');
    const blogsQuery = query(
      blogsCollection,
      limit(limitCount)
    );
    const querySnapshot = await getDocs(blogsQuery);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as BlogPost[];
  } catch (error) {
    console.error('Error fetching recent blogs:', error);
    return [];
  }
};