import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Todo lo que debes saber sobre Nómina Electrónica",
      excerpt: "Guía completa sobre la implementación de nómina electrónica en Colombia según normativas vigentes.",
      date: "2025-01-30",
      author: "Patricia López",
      readTime: "5 min",
      category: "Normatividad"
    },
    {
      id: 2,
      title: "Facturación Electrónica en Colombia: Beneficios y Regulaciones",
      excerpt: "Descubre todos los beneficios de implementar facturación electrónica y cumple con las regulaciones.",
      date: "2025-01-28",
      author: "Carlos Ruiz",
      readTime: "8 min",
      category: "Facturación"
    },
    {
      id: 3,
      title: "Impuestos a Alimentos Ultraprocesados: Ley 2277 de 2022",
      excerpt: "Análisis completo de la implementación y alcance de la nueva ley de impuestos a alimentos.",
      date: "2025-01-25",
      author: "María Gómez",
      readTime: "6 min",
      category: "Tributario"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Blog 5 Direcciones
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Conexión <span className="text-accent">Empresarial</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Mantente actualizado con las últimas noticias, consejos y regulaciones empresariales.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-4">{post.category}</Badge>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('es-ES')}
                    </div>
                    <Button size="sm">
                      Leer Más <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;