import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ArrowRight, 
  Search,
  Briefcase,
  BarChart3,
  Target,
  Users,
  Shield,
  TrendingUp,
  Lightbulb,
  FileText,
  Calculator,
  CreditCard,
  CheckCircle
} from "lucide-react";

// Import images
import direccionAdministrativa from "@/assets/direccion-administrativa.jpg";
import direccionContable from "@/assets/direccion-contable.jpg";
import gestionProyectos from "@/assets/gestion-proyectos.jpg";
import talentoHumano from "@/assets/talento-humano.jpg";
import direccionJuridica from "@/assets/direccion-juridica.jpg";
import marketingDigital from "@/assets/marketing-digital.jpg";
import desarrolloWeb from "@/assets/desarrollo-web.jpg";

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todos los Servicios" },
    { id: "administrativa", name: "Administración" },
    { id: "financiera", name: "Financiera" },
    { id: "proyectos", name: "Proyectos" },
    { id: "talento", name: "Talento Humano" },
    { id: "juridica", name: "Jurídica" },
    { id: "digital", name: "Digital" },
    { id: "facturacion", name: "Facturación" }
  ];

  const services = [
    {
      id: 1,
      title: "Dirección Administrativa",
      description: "Implementación, mantenimiento y mejora de procesos administrativos para optimizar la operación empresarial.",
      image: direccionAdministrativa,
      icon: <Briefcase className="h-8 w-8" />,
      category: "administrativa",
      features: [
        "Diagnóstico organizacional",
        "Diseño de procesos",
        "Manuales de procedimientos",
        "Indicadores de gestión",
        "Mejora continua",
        "Automatización de procesos"
      ],
      benefits: [
        "Reducción de costos operativos hasta 30%",
        "Mejora en la eficiencia operacional",
        "Mayor control y seguimiento",
        "Optimización de recursos"
      ]
    },
    {
      id: 2,
      title: "Dirección Contable y Financiera",
      description: "Gestión integral contable y financiera bajo las Normas Internacionales de Información Financiera (NIIF).",
      image: direccionContable,
      icon: <BarChart3 className="h-8 w-8" />,
      category: "financiera",
      features: [
        "Implementación NIIF",
        "Estados financieros",
        "Análisis financiero",
        "Presupuestos y proyecciones",
        "Control interno",
        "Auditoría interna"
      ],
      benefits: [
        "Cumplimiento normativo garantizado",
        "Información financiera confiable",
        "Mejor toma de decisiones",
        "Optimización fiscal"
      ]
    },
    {
      id: 3,
      title: "Gestión de Proyectos",
      description: "Acompañamiento integral desde la formulación hasta la ejecución exitosa de proyectos empresariales.",
      image: gestionProyectos,
      icon: <Target className="h-8 w-8" />,
      category: "proyectos",
      features: [
        "Formulación de proyectos",
        "Planificación estratégica",
        "Gestión de recursos",
        "Seguimiento y control",
        "Gestión de riesgos",
        "Cierre de proyectos"
      ],
      benefits: [
        "95% de proyectos exitosos",
        "Reducción de tiempos de ejecución",
        "Control de presupuesto",
        "Mitigación de riesgos"
      ]
    },
    {
      id: 4,
      title: "Gestión del Talento Humano",
      description: "Procesos integrados para atraer, desarrollar, motivar y retener el mejor talento para tu organización.",
      image: talentoHumano,
      icon: <Users className="h-8 w-8" />,
      category: "talento",
      features: [
        "Selección y reclutamiento",
        "Evaluación de desempeño",
        "Desarrollo organizacional",
        "Capacitación y formación",
        "Gestión de nómina",
        "Clima organizacional"
      ],
      benefits: [
        "Reducción de rotación 40%",
        "Mejora del clima laboral",
        "Incremento en productividad",
        "Cumplimiento normativo laboral"
      ]
    },
    {
      id: 5,
      title: "Dirección Jurídica",
      description: "Asesoría legal integral en constitución, disolución y todos los aspectos jurídicos empresariales.",
      image: direccionJuridica,
      icon: <Shield className="h-8 w-8" />,
      category: "juridica",
      features: [
        "Constitución de empresas",
        "Contratos comerciales",
        "Cumplimiento normativo",
        "Resolución de conflictos",
        "Propiedad intelectual",
        "Derecho laboral"
      ],
      benefits: [
        "Protección legal completa",
        "Prevención de riesgos jurídicos",
        "Contratos blindados",
        "Cumplimiento regulatorio"
      ]
    },
    {
      id: 6,
      title: "Marketing Digital",
      description: "Estrategias digitales integrales para impulsar el crecimiento y la presencia online de tu empresa.",
      image: marketingDigital,
      icon: <TrendingUp className="h-8 w-8" />,
      category: "digital",
      isNew: true,
      features: [
        "Estrategia digital",
        "SEO y SEM",
        "Redes sociales",
        "Email marketing",
        "Publicidad digital",
        "Analytics y reporting"
      ],
      benefits: [
        "Incremento en ventas hasta 200%",
        "Mayor visibilidad online",
        "ROI medible y optimizable",
        "Generación de leads calificados"
      ]
    },
    {
      id: 7,
      title: "Desarrollo Web",
      description: "Creación de sitios web modernos, funcionales y optimizados para convertir visitantes en clientes.",
      image: desarrolloWeb,
      icon: <Lightbulb className="h-8 w-8" />,
      category: "digital",
      isNew: true,
      features: [
        "Sitios web responsivos",
        "E-commerce",
        "Aplicaciones web",
        "Diseño UX/UI",
        "Optimización SEO",
        "Mantenimiento web"
      ],
      benefits: [
        "Presencia profesional online",
        "Generación de leads 24/7",
        "Ventas automatizadas",
        "Credibilidad empresarial"
      ]
    }
  ];

  const billingServices = [
    {
      title: "Emisión de Facturas Electrónicas",
      description: "Emite facturas electrónicas completamente en línea",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Recepción de Facturas Electrónicas",
      description: "Recibe todas tus facturas en un mismo buzón digital",
      icon: <Calculator className="h-6 w-6" />
    },
    {
      title: "Documento Soporte de Nómina",
      description: "Realiza soportes de pago de nómina electrónicamente",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Documento Soporte Electrónico",
      description: "Recibe cuentas de proveedores como documentos soporte",
      icon: <CreditCard className="h-6 w-6" />
    },
     {
      title: "Eventos de Título Valor",
      description: "Gestiona tus títulos valor con eventos electrónicos",
      icon: <CreditCard className="h-6 w-6" />
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Nuestros Servicios
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Soluciones Empresariales 
              <span className="block text-accent">Integrales</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Un portafolio completo de servicios especializados para que tu negocio 
              crezca de manera rentable y sostenible.
            </p>
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
                placeholder="Buscar servicios... (ej: contable, administrativa, digital)"
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
              {filteredServices.length} servicio{filteredServices.length !== 1 ? 's' : ''} encontrado{filteredServices.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredServices.map((service) => (
              <Card key={service.id} className="service-card group overflow-hidden">
                {service.isNew && (
                  <Badge className="absolute top-4 right-4 z-10 bg-accent text-white">
                    Nuevo
                  </Badge>
                )}
                
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="p-3 bg-white/20 backdrop-blur rounded-lg">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Incluye:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-accent">Beneficios:</h4>
                      <div className="space-y-1">
                        {service.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full group-hover:bg-primary/90 transition-colors" size="lg">
                    Solicitar Información
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Billing Services */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Facturación Electrónica
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ecosistema Completo de Facturación
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tenemos una oferta totalmente en línea con paquetes completos que dan 
              solución a todas tus necesidades del ecosistema de facturación electrónica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {billingServices.map((service, index) => (
              <Card key={index} className="p-6 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <Button size="sm" variant="outline" className="w-full">
                  Saber Más
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="btn-hero" asChild>
              <Link to="/facturacion">
                Ver Todos los Servicios de Facturación
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent">
              Nuestro Proceso
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cómo Trabajamos Contigo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Diagnóstico",
                description: "Analizamos tu empresa para identificar oportunidades de mejora."
              },
              {
                step: "02", 
                title: "Propuesta",
                description: "Diseñamos una solución personalizada para tus necesidades específicas."
              },
              {
                step: "03",
                title: "Implementación",
                description: "Ejecutamos el plan con nuestro equipo de especialistas."
              },
              {
                step: "04",
                title: "Seguimiento",
                description: "Monitoreamos resultados y optimizamos continuamente."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Impulsar tu Empresa?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo nuestros servicios pueden 
            transformar tu negocio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contacto">
                Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a 
                href="https://api.whatsapp.com/send?phone=573223674992&text=Hola,%20tengo%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Directo
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;