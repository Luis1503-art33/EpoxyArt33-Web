import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Clock, Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts } from '../blogData';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.slug === slug);
    setPost(foundPost);

    if (foundPost) {
      const related = blogPosts.filter(p => p.slug !== slug).slice(0, 2);
      setRelatedPosts(related);
    }

    window.scrollTo(0, 0);
  }, [slug]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button className="bg-amber-700 hover:bg-amber-800 text-white">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-amber-700 hover:text-amber-800 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-amber-700 text-white">{post.category}</Badge>
            {post.tags.slice(0, 3).map(tag => (
              <Badge key={tag} variant="outline" className="border-amber-700 text-amber-700">{tag}</Badge>
            ))}
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              {post.author}
            </span>
            <span className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              {post.readTime} min read
            </span>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="container mx-auto max-w-4xl">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg shadow-xl"
          />
        </div>
      </section>

      <article className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown 
              components={{
                h1: ({node, ...props}) => <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-8" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6" {...props} />,
                p: ({node, ...props}) => <p className="text-gray-700 mb-4 leading-relaxed text-lg" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4 text-gray-700" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4 text-gray-700" {...props} />,
                li: ({node, ...props}) => <li className="mb-2" {...props} />,
                strong: ({node, ...props}) => <strong className="font-bold text-gray-900" {...props} />,
                table: ({node, ...props}) => <div className="overflow-x-auto mb-6"><table className="min-w-full border border-gray-300" {...props} /></div>,
                th: ({node, ...props}) => <th className="border border-gray-300 px-4 py-2 bg-amber-50 font-bold" {...props} />,
                td: ({node, ...props}) => <td className="border border-gray-300 px-4 py-2" {...props} />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-amber-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Floors?
          </h2>
          <p className="text-xl text-amber-100 mb-6">
            Contact EpoxyArt33 for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100">
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:2392761462">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-amber-700">
                Call (239) 276-1462
              </Button>
            </a>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="border-2 border-gray-200 hover:border-amber-700 hover:shadow-xl transition-all duration-300 group">
                  <div className="overflow-hidden">
                    <img 
                      src={relatedPost.imageUrl} 
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="bg-amber-100 text-amber-800 mb-3">{relatedPost.category}</Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{relatedPost.title}</h3>
                    <p className="text-gray-600 mb-4">{relatedPost.excerpt.substring(0, 120)}...</p>
                    <Link to={`/blog/${relatedPost.slug}`}>
                      <Button variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white">
                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
