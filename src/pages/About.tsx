import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Heart,
  Lightbulb,
  Shield
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Compromiso",
      description: "Nos comprometemos con el éxito de cada cliente, trabajando como un verdadero aliado estratégico."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Confiabilidad",
      description: "Construimos relaciones duraderas basadas en la transparencia y la excelencia en nuestro servicio."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovación",
      description: "Implementamos soluciones creativas y tecnológicas para impulsar el crecimiento empresarial."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Trabajo en Equipo",
      description: "Creemos en la colaboración y el apoyo mutuo para alcanzar objetivos comunes excepcionales."
    }
  ];

  const timeline = [
    {
      year: "2017",
      title: "Fundación de 5 Direcciones",
      description: "Nace en la era del emprendimiento con el objetivo de acompañar a los empresarios."
    },
    {
      year: "2020",
      title: "Expansión de Servicios",
      description: "Ampliamos nuestro portafolio con nuevas áreas de consultoría especializada."
    },
   
    {
      year: "2021",
      title: "Facturación Electrónica",
      description: "Lanzamos nuestra plataforma integral de facturación electrónica."
    },
     {
      year: "2022",
      title: "Certificaciones Internacionales",
      description: "Obtenemos certificaciones que respaldan la calidad de nuestros servicios con nuestros clientes aliados."
    },
    {
      year: "2023",
      title: "Más de 500 Clientes",
      description: "Alcanzamos el hito de 500+ empresas asesoradas exitosamente."
    },
    {
      year: "2024",
      title: "Servicios Digitales",
      description: "Incorporamos marketing digital y desarrollo web a nuestro portafolio."
    },
     {
      year: "2025",
      title: "Marca Registrada",
      description: "Obtenemos la marca registrada de 5 Direcciones para consolidar nuestra identidad empresarial."
    }
  ];

  const team = [
    {
      name: "María Fernanda Gómez",
      position: "Directora General",
      speciality: "Administración de Empresas, MBA",
      experience: "15+ años"
    },
    {
      name: "Carlos Alberto Ruiz",
      position: "Director Financiero",
      speciality: "Contador Público, Especialista en NIIF",
      experience: "12+ años"
    },
    {
      name: "Ana Lucía Martínez",
      position: "Directora de Talento Humano",
      speciality: "Psicología Organizacional",
      experience: "10+ años"
    },
    {
      name: "Roberto Sánchez",
      position: "Director Jurídico",
      speciality: "Abogado, Especialista en Derecho Comercial",
      experience: "14+ años"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Sobre 5 Direcciones
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Acompañamos tu 
              <span className="block text-accent">Crecimiento Empresarial</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Desde 2017, hemos sido el aliado estratégico de más de 500 empresas, 
              brindando soluciones integrales para el éxito empresarial.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 border-primary/20 hover:border-primary/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-primary">Nuestra Misión</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Acompañar a los emprendedores y empresarios en la consecución de sus objetivos 
                empresariales, proporcionando soluciones integrales y especializadas que les 
                permitan enfocarse en su pasión mientras nosotros gestionamos las demás áreas 
                críticas de su empresa.
              </p>
            </Card>

            <Card className="p-8 border-accent/20 hover:border-accent/40 transition-colors">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-accent">Nuestra Visión</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconocidos como la consultoría empresarial líder en Colombia, 
                transformando empresas y contribuyendo al desarrollo económico sostenible 
                del país a través de la innovación, la excelencia y el compromiso con 
                nuestros clientes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Nuestros Valores
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Los Principios que nos Guían
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nuestros valores fundamentales definen cómo trabajamos y nos relacionamos 
              con nuestros clientes y colaboradores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent">
              Nuestra Historia
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Un Camino de Crecimiento Continuo
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-brand"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                    <Card className="p-6">
                      <Badge className="mb-2 bg-primary/10 text-primary">
                        {item.year}
                      </Badge>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Nuestro Equipo
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Profesionales Especializados
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contamos con un equipo multidisciplinario de más de 50 profesionales 
              especializados en diferentes áreas empresariales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.position}</p>
                <p className="text-sm text-muted-foreground mb-2">{member.speciality}</p>
                <Badge variant="secondary" className="text-xs">
                  {member.experience}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent">
                ¿Por Qué Elegirnos?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                La Experiencia que tu Empresa Necesita
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Experiencia Comprobada</h4>
                    <p className="text-muted-foreground text-sm">Más de 8 años asesorando empresas de diferentes sectores y tamaños.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Enfoque Integral</h4>
                    <p className="text-muted-foreground text-sm">Cubrimos todas las áreas críticas para el éxito empresarial.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Resultados Medibles</h4>
                    <p className="text-muted-foreground text-sm">98% de satisfacción del cliente y resultados tangibles.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Acompañamiento Personalizado</h4>
                    <p className="text-muted-foreground text-sm">Cada empresa recibe atención especializada según sus necesidades.</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="btn-hero" asChild>
                <Link to="/contacto">
                  Agenda una Consulta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Empresas Asesoradas</p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <p className="text-sm text-muted-foreground">Satisfacción</p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Profesionales</p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">8+</div>
                <p className="text-sm text-muted-foreground">Años Experiencia</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Quieres Conocer Más Sobre Nosotros?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Agenda una reunión sin compromiso y descubre cómo podemos impulsar 
            el crecimiento de tu empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contacto">
                Contactar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/servicios">
                Ver Servicios
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;