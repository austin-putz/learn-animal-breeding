import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BookOpen, Code, GraduationCap, Library } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary-50 to-white dark:from-primary-950 dark:to-neutral-950">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4">Free Educational Resources</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Learn Animal Breeding
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
                Comprehensive resources for animal breeding education.
                Free access to books, courses, and industry tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" href="/learn/books">
                  Browse Books
                </Button>
                <Button size="lg" variant="outline" href="/about">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Grid */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-primary-600 mb-4" />
                <CardTitle className="text-xl">Books</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Essential textbooks and references for animal breeding and quantitative genetics.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-primary-600 mb-4" />
                <CardTitle className="text-xl">Course Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  University course materials and lecture notes from leading programs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Code className="w-12 h-12 text-primary-600 mb-4" />
                <CardTitle className="text-xl">Software</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Industry-standard tools for genetic evaluation and breeding programs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Library className="w-12 h-12 text-primary-600 mb-4" />
                <CardTitle className="text-xl">Short Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Intensive workshops and short courses from universities worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
                With the drastic reduction in animal breeding faculty and no remaining graduate
                programs focused on animal breeding, this platform serves as a centralized hub
                for knowledge preservation and dissemination.
              </p>
              <p className="text-lg text-neutral-700 dark:text-neutral-300">
                We aim to provide free, accessible education to students and professionals
                worldwide, ensuring that critical knowledge in animal breeding is preserved
                for future generations.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
