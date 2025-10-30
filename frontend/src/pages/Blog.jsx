import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Clock, Calendar, ArrowRight, User } from 'lucide-react';
import { blogPosts } from '../blogData';

const Blog = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-amber-100 text-amber-800 hover:bg-amber-200 px-4 py-1.5">
            Expert Insights
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            EpoxyArt33 Blog
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Expert tips, trends, and guides for epoxy flooring in Southwest Florida.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
          <Card className="border-2 border-gray-200 hover:border-amber-700 hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-auto">
                <img 
                  src={blogPosts[0].imageUrl} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-amber-700 text-white">{blogPosts[0].category}</Badge>
                  {blogPosts[0].tags.slice(0, 2).map(tag => (
                    <Badge key={tag} variant="outline" className="border-amber-700 text-amber-700">{tag}</Badge>
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(blogPosts[0].publishedAt)}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {blogPosts[0].readTime} min read
                  </span>
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {blogPosts[0].author}
                  </span>
                </div>
                <Link to={`/blog/${blogPosts[0].slug}`}>
                  <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                    Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-2 border-gray-200 hover:border-amber-700 hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className="bg-amber-100 text-amber-800">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900 line-clamp-2 mb-2">{post.title}</CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime} min
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(post.publishedAt)}
                    </span>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Epoxy Project?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Get expert advice and a free quote from Southwest Florida's epoxy flooring specialists.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;