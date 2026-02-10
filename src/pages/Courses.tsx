import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  Search,
  Filter,
  BookOpen,
  Award,
  Video,
  Download,
  CheckCircle
} from "lucide-react";

// Import images
import cursosFormacion from "@/assets/cursos-formacion.jpg";
import direccionAdministrativa from "@/assets/direccion-administrativa.jpg";
import direccionContable from "@/assets/direccion-contable.jpg";
import gestionProyectos from "@/assets/gestion-proyectos.jpg";
import talentoHumano from "@/assets/talento-humano.jpg";
import direccionJuridica from "@/assets/direccion-juridica.jpg";
import marketingDigital from "@/assets/marketing-digital.jpg";
import desarrolloWeb from "@/assets/desarrollo-web.jpg";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todos los Cursos" },
    { id: "administrativa", name: "Administración" },
    { id: "contable", name: "Contabilidad" },
    { id: "proyectos", name: "Gestión de Proyectos" },
    { id: "talento", name: "Talento Humano" },
    { id: "juridica", name: "Jurídica" },
    { id: "marketing", name: "Marketing Digital" },
    { id: "desarrollo", name: "Desarrollo Web" },
    { id: "facturacion", name: "Facturación Electrónica" }
  ];

  const courses = [
    {
      id: 1,
      title: "Fundamentos de Administración Empresarial",
      description: "Aprende los conceptos básicos para una gestión administrativa eficiente y moderna.",
      category: "administrativa",
      level: "Básico",
      duration: "8 horas",
      students: 245,
      rating: 4.8,
      price: "$150.000",
      image: direccionAdministrativa,
      instructor: "María Fernanda Gómez",
      modules: [
        "Introducción a la administración",
        "Planificación estratégica",
        "Organización empresarial",
        "Control de gestión"
      ]
    },
    {
      id: 2,
      title: "Contabilidad bajo NIIF para PYMES",
      description: "Domina las Normas Internacionales de Información Financiera aplicadas a pequeñas y medianas empresas.",
      category: "contable",
      level: "Intermedio",
      duration: "12 horas",
      students: 189,
      rating: 4.9,
      price: "$220.000",
      image: direccionContable,
      instructor: "Carlos Alberto Ruiz",
      modules: [
        "Marco conceptual NIIF",
        "Estados financieros",
        "Reconocimiento y medición",
        "Presentación y revelación"
      ]
    },
    {
      id: 3,
      title: "Gestión Ágil de Proyectos",
      description: "Metodologías ágiles para la gestión efectiva de proyectos empresariales.",
      category: "proyectos",
      level: "Avanzado",
      duration: "10 horas",
      students: 156,
      rating: 4.7,
      price: "$180.000",
      image: gestionProyectos,
      instructor: "Roberto Sánchez",
      modules: [
        "Metodologías ágiles",
        "Scrum y Kanban",
        "Gestión de riesgos",
        "Cierre de proyectos"
      ]
    },
    {
      id: 4,
      title: "Gestión Estratégica del Talento Humano",
      description: "Estrategias modernas para atraer, desarrollar y retener el mejor talento.",
      category: "talento",
      level: "Intermedio",
      duration: "9 horas",
      students: 203,
      rating: 4.8,
      price: "$170.000",
      image: talentoHumano,
      instructor: "Ana Lucía Martínez",
      modules: [
        "Reclutamiento 4.0",
        "Evaluación de desempeño",
        "Desarrollo organizacional",
        "Compensación y beneficios"
      ]
    },
    {
      id: 5,
      title: "Aspectos Jurídicos para Empresarios",
      description: "Todo lo que necesitas saber sobre el marco legal empresarial en Colombia.",
      category: "juridica",
      level: "Básico",
      duration: "6 horas",
      students: 178,
      rating: 4.6,
      price: "$130.000",
      image: direccionJuridica,
      instructor: "Dr. Roberto Sánchez",
      modules: [
        "Constitución de empresas",
        "Contratos comerciales",
        "Derecho laboral",
        "Propiedad intelectual"
      ]
    },
    {
      id: 6,
      title: "Marketing Digital para Empresas",
      description: "Estrategias digitales para hacer crecer tu negocio en el mundo online.",
      category: "marketing",
      level: "Intermedio",
      duration: "15 horas",
      students: 312,
      rating: 4.9,
      price: "$250.000",
      image: marketingDigital,
      instructor: "Laura Vélez",
      isNew: true,
      modules: [
        "Estrategia digital",
        "SEO y SEM",
        "Redes sociales",
        "Email marketing",
        "Publicidad digital"
      ]
    },
    {
      id: 7,
      title: "Desarrollo Web para Empresarios",
      description: "Aprende a crear y gestionar sitios web profesionales sin conocimientos técnicos avanzados.",
      category: "desarrollo",
      level: "Básico",
      duration: "12 horas",
      students: 98,
      rating: 4.7,
      price: "$200.000",
      image: desarrolloWeb,
      instructor: "Andrés Morales",
      isNew: true,
      modules: [
        "Fundamentos web",
        "WordPress avanzado",
        "E-commerce básico",
        "SEO técnico"
      ]
    },
    {
      id: 8,
      title: "Facturación Electrónica en Colombia",
      description: "Implementación completa del sistema de facturación electrónica según la DIAN.",
      category: "facturacion",
      level: "Intermedio",
      duration: "8 horas",
      students: 267,
      rating: 4.8,
      price: "$160.000",
      image: cursosFormacion,
      instructor: "Patricia López",
      modules: [
        "Normatividad DIAN",
        "Implementación técnica",
        "Documentos electrónicos",
        "Resolución de problemas"
      ]
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Básico": return "bg-green-100 text-green-800";
      case "Intermedio": return "bg-yellow-100 text-yellow-800";
      case "Avanzado": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={cursosFormacion} 
            alt="Cursos de Formación 5 Direcciones" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            🎓 Plataforma de Cursos Especializada
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Aprende y Capacita
            <span className="block text-accent">tu Equipo</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Cursos especializados en todas las áreas empresariales, impartidos por expertos 
            con certificación al completar cada módulo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero">
              <BookOpen className="mr-2 h-5 w-5" />
              Explorar Cursos
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Video className="mr-2 h-5 w-5" />
              Ver Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar cursos... (ej: contabilidad, marketing, administración)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-sm"
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Results count */}
            <div className="text-center mt-4 text-muted-foreground">
              {filteredCourses.length} curso{filteredCourses.length !== 1 ? 's' : ''} encontrado{filteredCourses.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stats */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Cursos Disponibles</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">1,200+</div>
              <p className="text-muted-foreground">Estudiantes Activos</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Satisfacción</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <p className="text-muted-foreground">Acceso Disponible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="course-card overflow-hidden">
                {course.isNew && (
                  <Badge className="absolute top-4 right-4 z-10 bg-accent text-white">
                    Nuevo
                  </Badge>
                )}
                
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className={`mb-2 ${getLevelColor(course.level)}`}>
                      {course.level}
                    </Badge>
                    <div className="flex items-center text-white text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students} estudiantes
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                      {course.rating}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Instructor: {course.instructor}</p>
                    <div className="space-y-1">
                      {course.modules.slice(0, 3).map((module, index) => (
                        <div key={index} className="flex items-center text-xs text-muted-foreground">
                          <CheckCircle className="h-3 w-3 mr-2 text-primary" />
                          {module}
                        </div>
                      ))}
                      {course.modules.length > 3 && (
                        <div className="text-xs text-muted-foreground">
                          +{course.modules.length - 3} módulos más
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">
                      {course.price}
                    </div>
                    <Button size="sm" className="btn-accent">
                      <Play className="h-4 w-4 mr-2" />
                      Iniciar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Por qué elegir nuestros cursos?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Certificación Oficial</h3>
              <p className="text-muted-foreground">
                Recibe certificados oficiales al completar cada curso, respaldados por nuestra experiencia.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Video className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Contenido Práctico</h3>
              <p className="text-muted-foreground">
                Videos, ejercicios prácticos y casos reales para una experiencia de aprendizaje completa.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Download className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Acceso de por Vida</h3>
              <p className="text-muted-foreground">
                Una vez adquirido, tendrás acceso al curso y futuras actualizaciones de por vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Impulsar tu Carrera?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Únete a más de 1,200 profesionales que ya están transformando sus empresas 
            con nuestros cursos especializados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <BookOpen className="mr-2 h-5 w-5" />
              Comenzar Ahora
            </Button>
            
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Ver Catálogo Completo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;