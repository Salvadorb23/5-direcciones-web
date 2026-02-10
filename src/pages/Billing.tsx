import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Upload, 
  Users, 
  CreditCard,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Cloud,
  Shield,
  Clock,
  BarChart3,
  Zap
} from "lucide-react";

const Billing = () => {
  const services = [
    {
      icon: <FileText className="h-12 w-12" />,
      title: "Emisión de Facturas Electrónicas",
      description: "Emite tus facturas electrónicas completamente en línea de manera rápida y sencilla.",
      features: [
        "Interfaz intuitiva y fácil de usar",
        "Validación automática de datos",
        "Envío automático a la DIAN",
        "Respuesta inmediata del estado",
        "Múltiples formatos de salida",
        "Integración con sistemas contables"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Upload className="h-12 w-12" />,
      title: "Recepción de Facturas Electrónicas",
      description: "Recibe todas tus facturas electrónicas en un mismo buzón digital organizado.",
      features: [
        "Buzón unificado para todas las facturas",
        "Clasificación automática",
        "Búsqueda avanzada",
        "Descarga masiva de documentos",
        "Notificaciones en tiempo real",
        "Integración con ERP/Contabilidad"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Documento Soporte de Nómina Electrónica",
      description: "Realiza tus soportes de pago de nómina de manera electrónica y eficiente.",
      features: [
        "Generación automática de soportes",
        "Cumplimiento normativo DIAN",
        "Firmas digitales incluidas",
        "Envío seguro a empleados",
        "Histórico completo",
        "Reportes de gestión"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <CreditCard className="h-12 w-12" />,
      title: "Documento Soporte Electrónico",
      description: "Activa nuestra plataforma para recibir las cuentas de tus proveedores como documentos soporte.",
      features: [
        "Recepción automática de documentos",
        "Validación de proveedores",
        "Flujos de aprobación configurables",
        "Trazabilidad completa",
        "Reportes de gestión",
        "Integración con pagos"
      ],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Ahorro de Tiempo",
      description: "Reduce hasta 80% el tiempo dedicado a procesos de facturación"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cumplimiento Garantizado",
      description: "100% compatible con las regulaciones de la DIAN"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Acceso Desde Cualquier Lugar",
      description: "Plataforma en la nube disponible 24/7"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Reportes Avanzados",
      description: "Analytics completos de tu facturación"
    }
  ];

  const plans = [
    {
      name: "Básico",
      price: "$89.000",
      period: "mes",
      description: "Perfecto para pequeñas empresas",
      features: [
        "Hasta 100 facturas/mes",
        "Emisión y recepción",
        "Soporte básico",
        "1 usuario",
        "Reportes básicos"
      ],
      popular: false
    },
    {
      name: "Profesional",
      price: "$159.000",
      period: "mes",
      description: "Ideal para empresas en crecimiento",
      features: [
        "Hasta 500 facturas/mes",
        "Todos los documentos electrónicos",
        "Soporte prioritario",
        "Hasta 5 usuarios",
        "Reportes avanzados",
        "Integración API"
      ],
      popular: true
    },
    {
      name: "Empresarial",
      price: "$299.000",
      period: "mes",
      description: "Para grandes empresas",
      features: [
        "Facturas ilimitadas",
        "Suite completa",
        "Soporte 24/7",
        "Usuarios ilimitados",
        "Analytics avanzados",
        "Integración completa",
        "Consultor dedicado"
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: 1,
      title: "Configuración Inicial",
      description: "Configuramos tu empresa en nuestra plataforma según los requerimientos de la DIAN."
    },
    {
      step: 2,
      title: "Capacitación",
      description: "Entrenamos a tu equipo para usar eficientemente todas las funcionalidades."
    },
    {
      step: 3,
      title: "Migración de Datos",
      description: "Transferimos tu información existente de manera segura y ordenada."
    },
    {
      step: 4,
      title: "Puesta en Marcha",
      description: "Activamos tu sistema y comenzamos la facturación electrónica."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Facturación Electrónica
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ecosistema Completo de
              <span className="block text-accent">Facturación Electrónica</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Plataforma integral en línea que da solución a todas tus necesidades 
              del ecosistema de facturación electrónica en Colombia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Prueba Gratuita 30 Días
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Smartphone className="mr-2 h-5 w-5" />
                Ver Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Servicios de Facturación Electrónica
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferta totalmente en línea con paquetes completos para todas tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 group">
                <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-6 group-hover:bg-primary/90 transition-colors" asChild>
                  <a 
                    href="https://api.whatsapp.com/send?phone=573223674992&text=Hola,%20tengo%20una%20consulta%20sobre%20facturación%20electrónica"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Más Información
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Beneficios
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Por qué elegir nuestra plataforma?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent">
              Planes
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Elige el Plan Perfecto para tu Empresa
            </h2>
            <p className="text-xl text-muted-foreground">
              Planes flexibles que se adaptan al tamaño y necesidades de tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`p-8 relative ${plan.popular ? 'border-primary shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Más Popular
                  </Badge>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full ${plan.popular ? 'btn-hero' : ''}`} 
                  variant={plan.popular ? 'default' : 'outline'}
                  asChild
                >
                  <a 
                    href="https://api.whatsapp.com/send?phone=573223674992&text=Hola,%20me%20interesa%20el%20plan%20de%20facturación%20electrónica"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar Plan
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">
              Proceso de Implementación
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Implementación Rápida y Sencilla
            </h2>
            <p className="text-xl text-muted-foreground">
              En solo 4 pasos tendrás tu sistema de facturación electrónica funcionando
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                Características Técnicas
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tecnología de Vanguardia
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">API REST Completa</h4>
                    <p className="text-white/80 text-sm">Integración total con tu sistema contable o ERP existente.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Seguridad Bancaria</h4>
                    <p className="text-white/80 text-sm">Encriptación SSL de 256 bits y certificados digitales seguros.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Backup Automático</h4>
                    <p className="text-white/80 text-sm">Respaldo diario de toda tu información en la nube.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Actualizaciones Automáticas</h4>
                    <p className="text-white/80 text-sm">Siempre al día con los cambios normativos de la DIAN.</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contacto">
                  Solicitar Información Técnica
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center bg-white/10 border-white/20 text-white">
                <Clock className="h-8 w-8 mx-auto mb-3 text-accent" />
                <div className="text-2xl font-bold mb-1">99.9%</div>
                <p className="text-sm opacity-80">Tiempo de Actividad</p>
              </Card>
              
              <Card className="p-6 text-center bg-white/10 border-white/20 text-white">
                <Shield className="h-8 w-8 mx-auto mb-3 text-accent" />
                <div className="text-2xl font-bold mb-1">100%</div>
                <p className="text-sm opacity-80">Cumplimiento DIAN</p>
              </Card>
              
              <Card className="p-6 text-center bg-white/10 border-white/20 text-white">
                <Zap className="h-8 w-8 mx-auto mb-3 text-accent" />
                <div className="text-2xl font-bold mb-1">&lt;2s</div>
                <p className="text-sm opacity-80">Tiempo de Respuesta</p>
              </Card>
              
              <Card className="p-6 text-center bg-white/10 border-white/20 text-white">
                <Users className="h-8 w-8 mx-auto mb-3 text-accent" />
                <div className="text-2xl font-bold mb-1">24/7</div>
                <p className="text-sm opacity-80">Soporte Técnico</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Digitalizar tu Facturación?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a las miles de empresas que ya están aprovechando los beneficios 
            de la facturación electrónica con nuestra plataforma.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero" asChild>
              <a 
                href="https://api.whatsapp.com/send?phone=573223674992&text=Hola,%20quiero%20iniciar%20con%20facturación%20electrónica"
                target="_blank"
                rel="noopener noreferrer"
              >
                Comenzar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button size="lg" variant="outline" asChild>
              <Link to="/contacto">
                Agenda una Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Billing;