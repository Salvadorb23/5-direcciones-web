import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Rocket, 
  TrendingUp, 
  Users, 
  Star,
  CheckCircle,
  ArrowRight,
  Target,
  Award,
  PiggyBank,
  Lightbulb,
  Handshake,
  BarChart3
} from "lucide-react";

const Entrepreneurship = () => {
  const benefits = [
    {
      icon: <PiggyBank className="h-8 w-8" />,
      title: "Ingresos Adicionales",
      description: "Genera ingresos recurrentes comercializando nuestros servicios especializados."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Capacitación Completa",
      description: "Recibe entrenamiento integral sobre todos nuestros productos y servicios."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Soporte Comercial",
      description: "Equipo dedicado que te apoya en todo el proceso de venta y postventa."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Reconocimientos",
      description: "Sistema de incentivos y reconocimientos por desempeño destacado."
    }
  ];

  const services = [
    {
      title: "Dirección Administrativa",
      commission: "15%",
      description: "Asesoría en procesos administrativos y optimización empresarial"
    },
    {
      title: "Dirección Contable",
      commission: "18%",
      description: "Servicios contables y financieros bajo normativa NIIF"
    },
    {
      title: "Gestión de Proyectos",
      commission: "20%",
      description: "Gestión integral de proyectos empresariales"
    },
    {
      title: "Talento Humano",
      commission: "16%",
      description: "Servicios completos de gestión del talento humano"
    },
    {
      title: "Dirección Jurídica",
      commission: "17%",
      description: "Asesoría legal empresarial y constitución de empresas"
    },
    {
      title: "Marketing Digital",
      commission: "22%",
      description: "Estrategias digitales para crecimiento empresarial"
    },
    {
      title: "Desarrollo Web",
      commission: "25%",
      description: "Creación de sitios web y aplicaciones empresariales"
    },
    {
      title: "Facturación Electrónica",
      commission: "12%",
      description: "Plataforma completa de facturación electrónica"
    }
  ];

  const requirements = [
    "Experiencia comercial mínima de 2 años",
    "Conocimientos básicos en servicios empresariales",
    "Red de contactos empresariales",
    "Disponibilidad de tiempo para dedicar al proyecto",
    "Actitud proactiva y orientada a resultados",
    "Capacidad para trabajar de forma independiente"
  ];

  const process = [
    {
      step: 1,
      title: "Aplicación",
      description: "Completa el formulario de aplicación y envía tu hoja de vida actualizada."
    },
    {
      step: 2,
      title: "Evaluación",
      description: "Nuestro equipo evalúa tu perfil y experiencia comercial."
    },
    {
      step: 3,
      title: "Entrevista",
      description: "Entrevista personal para conocerte mejor y resolver dudas."
    },
    {
      step: 4,
      title: "Capacitación",
      description: "Programa intensivo de capacitación en nuestros servicios."
    },
    {
      step: 5,
      title: "Inicio",
      description: "¡Comienza a comercializar y generar ingresos!"
    }
  ];

  const testimonials = [
    {
      name: "Sandra Milena García",
      location: "Bogotá",
      text: "Llevo 2 años como representante de 5 Direcciones y ha sido una experiencia increíble. El soporte del equipo es excepcional.",
      monthlyIncome: "$2.800.000",
      rating: 5
    },
    {
      name: "Carlos Eduardo Ruiz",
      location: "Medellín",
      text: "La capacitación que recibí me permitió entender completamente los servicios y poder ofrecerlos con confianza.",
      monthlyIncome: "$3.200.000",
      rating: 5
    },
    {
      name: "María Fernanda López",
      location: "Cali",
      text: "Como emprendedora independiente, esta oportunidad me ha dado la estabilidad económica que buscaba.",
      monthlyIncome: "$2.400.000",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Oportunidad de Negocio
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Emprende con
              <span className="block text-accent">5 Direcciones</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Conviértete en un aliado estratégico de nuestro equipo e inicia tu propio negocio 
              comercializando toda nuestra oferta comercial especializada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Rocket className="mr-2 h-5 w-5" />
                Aplicar Ahora
              </Button>
              
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Users className="mr-2 h-5 w-5" />
                Más Información
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Beneficios
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Por qué Emprender con Nosotros?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Únete a nuestro equipo de representantes y aprovecha una oportunidad 
              de negocio respaldada por años de experiencia y éxito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Commissions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent">
              Portafolio de Servicios
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Servicios que Puedes Comercializar
            </h2>
            <p className="text-xl text-muted-foreground">
              Amplio portafolio de servicios especializados con comisiones atractivas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-primary/10 text-primary font-semibold">
                    {service.commission}
                  </Badge>
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="p-8 max-w-2xl mx-auto bg-gradient-brand text-white">
              <h3 className="text-2xl font-bold mb-4">Potencial de Ingresos</h3>
              <p className="text-lg mb-4 opacity-90">
                Nuestros representantes más exitosos generan entre
              </p>
              <div className="text-4xl font-bold text-accent mb-2">
                $2.000.000 - $5.000.000
              </div>
              <p className="opacity-90">por mes en comisiones</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">
                Requisitos
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Cumples con el Perfil?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Buscamos personas comprometidas y con visión empresarial para unirse a nuestro equipo.
              </p>
              
              <div className="space-y-4 mb-8">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span>{requirement}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg" className="btn-hero" asChild>
                <a 
                  href="https://api.whatsapp.com/send?phone=573223674992&text=Hola,%20me%20interesa%20ser%20representante%20de%205%20Direcciones"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aplicar Ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Representantes Activos</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-2xl font-bold text-accent mb-2">4.9</div>
                <p className="text-sm text-muted-foreground">Satisfacción Promedio</p>
              </Card>
              
              <Card className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary mb-2">85%</div>
                <p className="text-sm text-muted-foreground">Retención Anual</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-2xl font-bold text-accent mb-2">12</div>
                <p className="text-sm text-muted-foreground">Meses Promedio</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent">
              Proceso de Selección
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cómo Unirte a Nuestro Equipo
            </h2>
            <p className="text-xl text-muted-foreground">
              Proceso sencillo y transparente para convertirte en nuestro representante
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-brand hidden lg:block"></div>
              
              {process.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center text-white font-bold hidden lg:flex">
                    {item.step}
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:pl-8'}`}>
                    <Card className="p-6">
                      <div className="lg:hidden w-12 h-12 bg-accent rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold mb-4">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Testimonios
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Historias de Éxito
            </h2>
            <p className="text-xl text-muted-foreground">
              Conoce las experiencias de nuestros representantes exitosos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-6 italic text-center">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="text-center">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground mb-3">{testimonial.location}</div>
                  <Badge className="bg-primary/10 text-primary">
                    Ingresos: {testimonial.monthlyIncome}/mes
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent">
                Soporte y Acompañamiento
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                No Estarás Solo en este Camino
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Handshake className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Gerente de Cuenta Dedicado</h4>
                    <p className="text-muted-foreground text-sm">Un profesional experimentado te acompañará en todo momento.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Lightbulb className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Capacitación Continua</h4>
                    <p className="text-muted-foreground text-sm">Actualizaciones constantes sobre productos y técnicas de venta.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Comunidad de Representantes</h4>
                    <p className="text-muted-foreground text-sm">Red de apoyo con otros representantes exitosos.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <BarChart3 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Herramientas de Gestión</h4>
                    <p className="text-muted-foreground text-sm">CRM y herramientas para gestionar tus ventas eficientemente.</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" variant="outline" asChild>
                <Link to="/contacto">
                  Agendar Reunión Informativa
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-64 h-64 bg-gradient-brand rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  <div className="text-center">
                    <Rocket className="h-16 w-16 mx-auto mb-4" />
                    <div className="text-2xl font-bold">¡Tu Futuro</div>
                    <div className="text-lg">Te Espera!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Comenzar tu Propio Negocio?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            No dejes pasar esta oportunidad única de emprender con el respaldo 
            de una empresa consolidada y exitosa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <a 
                href="https://api.whatsapp.com/send?phone=573223674992&text=Hola,%20quiero%20ser%20representante%20de%205%20Direcciones"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aplicar Ahora
                <Rocket className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contacto">
                Más Información
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Entrepreneurship;