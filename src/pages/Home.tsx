import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  ArrowRight, 
  Users, 
  Target, 
  TrendingUp, 
  Shield,
  Play,
  CheckCircle,
  Star,
  BarChart3,
  Lightbulb,
  PiggyBank,
  Briefcase,
  Send,
  Phone,
  Mail,
  Building2
} from "lucide-react";

// Import images
import heroImage from "@/assets/hero-main.jpg";
import direccionAdministrativa from "@/assets/direccion-administrativa.jpg";
import direccionContable from "@/assets/direccion-contable.jpg";
import gestionProyectos from "@/assets/gestion-proyectos.jpg";
import talentoHumano from "@/assets/talento-humano.jpg";
import direccionJuridica from "@/assets/direccion-juridica.jpg";
import marketingDigital from "@/assets/marketing-digital.jpg";
import desarrolloWeb from "@/assets/desarrollo-web.jpg";
import cursosFormacion from "@/assets/cursos-formacion.jpg";

// Helper function para WhatsApp
const openWhatsApp = (message: string) => {
  const phoneNumber = "573013936616"; // +57 301 393 6616
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, "_blank");
};

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Estados del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    servicio: "",
    mensaje: ""
  });

  const services = [
    {
      id: 1,
      title: "Dirección Administrativa",
      description: "Implementación, mantenimiento y mejora de procesos administrativos para agregar valor a las empresas.",
      image: direccionAdministrativa,
      icon: <Briefcase className="h-8 w-8" />,
      link: "/servicios/direccion-administrativa",
      features: ["Optimización de procesos", "Gestión administrativa", "Mejora continua"]
    },
    {
      id: 2,
      title: "Dirección Contable y Financiera",
      description: "Planes de acción contable y financiero bajo las Normas de Información Financiera.",
      image: direccionContable,
      icon: <BarChart3 className="h-8 w-8" />,
      link: "/servicios/direccion-contable",
      features: ["NIIF", "Estados financieros", "Análisis financiero"]
    },
    {
      id: 3,
      title: "Gestión de Proyectos",
      description: "Acompañamiento integral desde la formulación hasta la ejecución de proyectos empresariales.",
      image: gestionProyectos,
      icon: <Target className="h-8 w-8" />,
      link: "/servicios/gestion-proyectos",
      features: ["Formulación", "Ejecución", "Seguimiento"]
    },
    {
      id: 4,
      title: "Gestión del Talento Humano",
      description: "Procesos integrados para atraer, gestionar, desarrollar, motivar y retener el mejor talento.",
      image: talentoHumano,
      icon: <Users className="h-8 w-8" />,
      link: "/servicios/talento-humano",
      features: ["Selección", "Desarrollo", "Retención"]
    },
    {
      id: 5,
      title: "Dirección Jurídica",
      description: "Asesoría en procesos de constitución, disolución y aspectos legales empresariales.",
      image: direccionJuridica,
      icon: <Shield className="h-8 w-8" />,
      link: "/servicios/direccion-juridica",
      features: ["Constitución", "Disolución", "Asesoría legal"]
    },
    {
      id: 6,
      title: "Marketing Digital",
      description: "Estrategias digitales para impulsar el crecimiento y presencia online de tu empresa.",
      image: marketingDigital,
      icon: <TrendingUp className="h-8 w-8" />,
      link: "/servicios/marketing-digital",
      features: ["SEO/SEM", "Redes sociales", "Publicidad digital"],
      isNew: true
    },
    {
      id: 7,
      title: "Desarrollo Web",
      description: "Creación de sitios web modernos, funcionales y optimizados para tu negocio.",
      image: desarrolloWeb,
      icon: <Lightbulb className="h-8 w-8" />,
      link: "/servicios/desarrollo-web",
      features: ["Sitios web", "E-commerce", "Aplicaciones"],
      isNew: true
    }
  ];

  const stats = [
    { number: "500+", label: "Empresas Asesoradas", icon: <Briefcase className="h-8 w-8" /> },
    { number: "5+", label: "Años de Experiencia", icon: <Star className="h-8 w-8" /> },
    { number: "98%", label: "Satisfacción del Cliente", icon: <CheckCircle className="h-8 w-8" /> },
    { number: "50+", label: "Profesionales Especializados", icon: <Users className="h-8 w-8" /> }
  ];

  const testimonials = [
    {
      name: "Carlos Rodríguez",
      company: "Tech Innovations S.A.S",
      text: "5 Direcciones transformó completamente nuestros procesos administrativos. Su equipo profesional nos ayudó a crecer de manera organizada.",
      rating: 5
    },
    {
      name: "Ana María López",
      company: "Comercial del Valle",
      text: "La asesoría contable y financiera ha sido fundamental para la toma de decisiones estratégicas en nuestra empresa.",
      rating: 5
    },
    {
      name: "Roberto Silva",
      company: "Constructora Horizonte",
      text: "Excelente gestión de proyectos. Cumplieron todos los tiempos y nos mantuvieron informados en cada etapa.",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: <PiggyBank className="h-12 w-12" />,
      title: "Reduce Costos Operativos",
      description: "Optimizamos tus procesos para reducir gastos innecesarios y maximizar la rentabilidad."
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Acelera el Crecimiento",
      description: "Estrategias probadas que impulsan el crecimiento sostenible de tu empresa."
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Garantiza Cumplimiento",
      description: "Mantenemos tu empresa al día con todas las regulaciones y normativas vigentes."
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Mejora la Productividad",
      description: "Optimizamos el talento humano y los procesos para maximizar la eficiencia."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handler para cambios en el formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handler para envío del formulario
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `
*Nuevo contacto desde el sitio web*

*Nombre:* ${formData.nombre}
*Email:* ${formData.email}
*Teléfono:* ${formData.telefono}
*Empresa:* ${formData.empresa}
*Servicio de interés:* ${formData.servicio}

*Mensaje:*
${formData.mensaje}
    `.trim();

    openWhatsApp(message);
    
    // Limpiar formulario
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      empresa: "",
      servicio: "",
      mensaje: ""
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="5 Direcciones - Consultoría Empresarial" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            ✨ Más de 500 empresas confían en nosotros
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Impulsa tu empresa con
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">
              5 Direcciones
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Acompañamos a emprendedores y empresarios en la consecución de sus objetivos empresariales 
            con soluciones integrales y especializadas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-hero text-lg px-8 py-4"
              onClick={() => openWhatsApp("Hola, me interesa una consulta gratuita sobre los servicios de 5 Direcciones")}
            >
              Consulta Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
           
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-accent mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Nuestros Servicios
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
              Soluciones Empresariales Integrales
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ofrecemos un portafolio completo de servicios especializados para que tu negocio 
              crezca de manera rentable y sostenible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="service-card group relative overflow-hidden">
                {service.isNew && (
                  <Badge className="absolute top-4 right-4 z-10 bg-accent text-white">
                    Nuevo
                  </Badge>
                )}
                
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="p-2 bg-white/20 backdrop-blur rounded-lg">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full group-hover:bg-primary/90 transition-colors"
                    onClick={() => openWhatsApp(`Hola, me interesa conocer más sobre ${service.title}`)}
                  >
                    Saber Más
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => openWhatsApp("Hola, me gustaría conocer todos los servicios que ofrecen")}
            >
              Ver Todos los Servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent">
              ¿Por Qué Elegirnos?
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Beneficios que Transforman tu Empresa
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-brand rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section - NUEVA SECCIÓN */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary">
                Contacto Directo
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                ¿Listo para Empezar?
              </h2>
              <p className="text-xl text-muted-foreground">
                Completa el formulario y nos pondremos en contacto contigo por WhatsApp
              </p>
            </div>

            <Card className="p-8 md:p-12">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>Nombre completo *</span>
                    </Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>Email *</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>

                  {/* Teléfono */}
                  <div className="space-y-2">
                    <Label htmlFor="telefono" className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>Teléfono *</span>
                    </Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      placeholder="+57 300 123 4567"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>

                  {/* Empresa */}
                  <div className="space-y-2">
                    <Label htmlFor="empresa" className="flex items-center space-x-2">
                      <Building2 className="h-4 w-4" />
                      <span>Empresa</span>
                    </Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      type="text"
                      placeholder="Nombre de tu empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Servicio de interés */}
                <div className="space-y-2">
                  <Label htmlFor="servicio" className="flex items-center space-x-2">
                    <Target className="h-4 w-4" />
                    <span>Servicio de interés *</span>
                  </Label>
                  <Input
                    id="servicio"
                    name="servicio"
                    type="text"
                    placeholder="¿Qué servicio te interesa?"
                    value={formData.servicio}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>

                {/* Mensaje */}
                <div className="space-y-2">
                  <Label htmlFor="mensaje">
                    Cuéntanos más sobre tu proyecto
                  </Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Describe brevemente qué necesitas..."
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>

                {/* Botón de envío */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:scale-105 transition-all duration-300"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar por WhatsApp
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Al enviar el formulario, aceptas que nos comuniquemos contigo por WhatsApp
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                🎓 Nueva Plataforma de Cursos
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Aprende y Capacita tu Equipo
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Accede a nuestra plataforma de cursos especializados en todas las áreas empresariales. 
                Formación práctica impartida por expertos.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent" />
                  <span>Cursos especializados por categorías</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent" />
                  <span>Certificación al completar módulos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent" />
                  <span>Acceso 24/7 desde cualquier dispositivo</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => openWhatsApp("Hola, me interesa conocer más sobre los cursos disponibles")}
              >
                Explorar Cursos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={cursosFormacion} 
                alt="Plataforma de Cursos 5 Direcciones"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Testimonios
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Lo que Dicen Nuestros Clientes
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-accent fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl font-medium mb-6 text-muted-foreground italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div>
                <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                <div className="text-muted-foreground">{testimonials[currentTestimonial].company}</div>
              </div>
            </Card>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Transformar tu Empresa?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos empresariales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-hero"
              onClick={() => openWhatsApp("Hola, quiero agendar una consulta gratuita con 5 Direcciones")}
            >
              Consulta Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => openWhatsApp("Hola, me gustaría conocer más sobre 5 Direcciones")}
            >
              Conoce Más Sobre Nosotros
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
