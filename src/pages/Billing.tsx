import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { useState } from "react";
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
        "Múltiples formatos de salida"
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
        "Notificaciones en tiempo real"
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
        "Reportes de gestión"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <CreditCard className="h-12 w-12" />,
      title: "Eventos de título valor",
      description: "Gestiona eventos de título valor como emisión, transferencia y cancelación de títulos.",
      features: [
        "Acuse de recibo de la factura, de los bienes o servicios.",
        "Generación de rechazo de la factura en caso de que aplique.",
        "Aceptación expresa de la factura como título valor.",
        "Validación de facturas validas según la Dian."
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
      name: "Con Todo",
      price: "$189.900",
      period: "Vigencia 1 año",
      description: "Es el paquete que necesitas para empezar a gestionar tu negocio de la mejor manera.",
      features: [
        "50 folios para facturación electrónica, buzón tributario y eventos de título valor",
        "25 folios para documentos soporte",
        "25 folios para documentos soporte de nómina electrónica"
      ],
      popular: false
    },
    {
      name: "Con todo PRO",
      price: "$309.900",
      period: "Vigencia 1 año",
      description: "Es el paquete ideal para empresas en crecimiento que necesitan una solución completa y escalable.",
      features: [
        "200 folios para facturación electrónica, buzón tributario y eventos de título valor",
        "150 folios para documentos soporte",
        "50 folios para documentos soporte de nómina electrónica"
      ],
      popular: true
    },
    {
      name: "Con todo MAX",
      price: "$699.900",
      period: "Vigencia 1 año",
      description: "El mejor plan para gestionar tu negocio",
      features: [
        "600 folios para facturación electrónica, buzón tributario y eventos de título valor",
        "400 folios para documentos soporte",
        "300 folios para documentos soporte de nómina electrónica"
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

  const documentosElectronicos = [
    { folios: 12, price: "$50.000" },
    { folios: 25, price: "$92.900" },
    { folios: 50, price: "$109.900" },
    { folios: 100, price: "$169.900" },
    { folios: 200, price: "$255.900" },
    { folios: 400, price: "$383.900" },
    { folios: 500, price: "$429.900" },
    { folios: 1000, price: "$642.900" },
    { folios: 2500, price: "$1.342.900" },
    { folios: 5000, price: "$2.347.900" },
    { folios: 10000, price: "$4.279.900" },
    { folios: 15000, price: "$6.253.900" },
    { folios: 20000, price: "$8.142.900" },
    { folios: 25000, price: "$9.822.900" },
    { folios: 50000, price: "$18.636.900" },
    { folios: 100000, price: "$33.442.900" }
  ];

  const [activeTab, setActiveTab] = useState('documentos');

  const productData = {
    documentos: {
      title: "Documentos Electrónicos",
      subtitle: "Con este paquete podrás emitir facturas electrónicas, notas debito y notas crédito, activar tu buzón tributario y generar eventos título valor.",
      legal: "* Precios netos * Soporte técnico incluido * Los paquetes con hasta 1.000 folios tienen vigencia de 1 año. * Los paquetes con más de 1.000 folios tienen vigencia de 2 años. * El tiempo de vigencia inicia a partir de la fecha de activación del paquete.",
      plans: documentosElectronicos
    },
    nomina: {
      title: "Nómina Electrónica",
      subtitle: "Nómina. Con este paquete podrás emitir los documentos soporte de nómina electrónica de tus empleados.",
      legal: "* Precios netos * Soporte técnico incluido * Los paquetes con hasta 1.000 folios tienen vigencia de 1 año. * Los paquetes con más de 1.000 folios tienen vigencia de 2 años. * El tiempo de vigencia inicia a partir de la fecha de activación del paquete.",
      plans: [
        { folios: 12, price: "$50.000" },
        { folios: 25, price: "$92.900" },
        { folios: 36, price: "$100.900" },
        { folios: 48, price: "$105.900" },
        { folios: 50, price: "$109.900" },
        { folios: 60, price: "$122.900" },
        { folios: 72, price: "$132.900" },
        { folios: 84, price: "$146.900" },
        { folios: 96, price: "$165.900" },
        { folios: 100, price: "$169.900" },
        { folios: 108, price: "$180.900" },
        { folios: 120, price: "$193.900" },
        { folios: 200, price: "$255.900" },
        { folios: 240, price: "$293.900" },
        { folios: 400, price: "$383.900" },
        { folios: 500, price: "$429.900" },
        { folios: 1000, price: "$642.900" },
        { folios: 2500, price: "$1.342.900" },
        { folios: 5000, price: "$2.347.900" },
        { folios: 10000, price: "$4.279.900" },
        { folios: 15000, price: "$6.253.900" },
        { folios: 20000, price: "$8.142.900" },
        { folios: 25000, price: "$9.822.900" },
        { folios: 30000, price: "$11.472.900" },
        { folios: 50000, price: "$18.636.900" },
        { folios: 100000, price: "$33.442.900" }
      ]
    },
    soporte: {
      title: "Documentos Soporte Electrónico",
      subtitle: "Con estos paquetes podrás generar los documento soporte electrónico de todos tus proveedores.",
      legal: "* Precios netos * Soporte técnico incluido * Los paquetes con hasta 1.000 folios tienen vigencia de 1 año. * Los paquetes con más de 1.000 folios tienen vigencia de 2 años. * El tiempo de vigencia inicia a partir de la fecha de activación del paquete.",
      plans: [
        { folios: 12, price: "$50.000" },
        { folios: 25, price: "$92.900" },
        { folios: 50, price: "$109.900" },
        { folios: 100, price: "$169.900" },
        { folios: 200, price: "$255.900" },
        { folios: 400, price: "$383.900" },
        { folios: 500, price: "$429.900" },
        { folios: 1000, price: "$642.900" },
        { folios: 2500, price: "$1.342.900" },
        { folios: 5000, price: "$2.347.900" },
        { folios: 10000, price: "$4.279.900" },
        { folios: 20000, price: "$8.142.900" },
        { folios: 30000, price: "$11.472.900" }
      ]
    },
    implementaciones: {
      title: "Implementaciones",
      subtitle: "Con estos paquetes podrás acceder a la implementación de procesos de nuestra plataforma, de manera personalizada.",
      legal: "* Precios netos * Soporte técnico incluido * Los paquetes con hasta 1.000 folios tienen vigencia de 1 año. * Los paquetes con más de 1.000 folios tienen vigencia de 2 años. * El tiempo de vigencia inicia a partir de la fecha de activación del paquete.",
      plans: [
        { name: "Habilitación de resolución", price: "$60.000" },
        
        { name: "Implementación Premium Factura", price: "$300.000" },
        { name: "Implementación Básico Nómina", price: "$150.000" },
        
        { name: "Implementación Premium Nómina", price: "$300.000" },
        { name: "Combo Intermedio Implementación", price: "$300.000" },
        { name: "Combo Premium Implementación", price: "$450.000" },
        { name: "Implementación Doc. Soporte Electrónico", price: "$150.000" },

      ]
    }
  };

  const generateWhatsAppMessage = (paquete, categoria, precio) => {
    const categoriaNombre = {
      documentos: "Documentos Electrónicos",
      nomina: "Nómina Electrónica",
      soporte: "Documento Soporte Electrónico",
      implementaciones: "Implementaciones"
    }[categoria];

    let paqueteTexto;
    if (categoria === 'implementaciones') {
      paqueteTexto = paquete;
    } else if (categoria === 'soporte') {
      paqueteTexto = `${paquete} folios de Doc. Soporte Electrónico`;
    } else {
      paqueteTexto = `${paquete} folios de ${categoriaNombre}`;
    }

    return `Hola, quiero comprar ${paqueteTexto} por ${precio} COP`;
  };

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
                Obten tus folios de cortesía 
                <ArrowRight className="ml-2 h-5 w-5" />
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
                    href="https://api.whatsapp.com/send?phone=573013936616&text=Hola,%20tengo%20una%20consulta%20sobre%20facturación%20electrónica"
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
                    href="https://api.whatsapp.com/send?phone=573013936616&text=Hola,%20me%20interesa%20el%20plan%20de%20facturación%20electrónica"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar Plan
                  </a>
                </Button>
              </Card>
            ))}
          </div>
          {/* Nota de términos y condiciones */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Aplica términos y condiciones para clientes nuevos
          </p>
        </div>
      </section>

      {/* Folios Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Cómo funcionan los folios de facturación?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Con el respaldo contable y tecnológico de 5 Direcciones, emitir tus documentos ante la DIAN es rápido y seguro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center hover:drop-shadow-lg transition-all duration-300 group">
              <FileText className="h-16 w-16 mx-auto mb-6 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-4">¿Qué es un folio?</h3>
              <p className="text-muted-foreground">
                Cada folio equivale a un documento electrónico procesado con éxito, ya sea una Factura Electrónica de venta, una Nota Crédito o una Nota Débito, incluyendo su archivo XML oficial.
              </p>
            </Card>

            <Card className="p-8 text-center hover:drop-shadow-lg transition-all duration-300 group">
              <Shield className="h-16 w-16 mx-auto mb-6 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-4">Cumplimiento DIAN 100%</h3>
              <p className="text-muted-foreground">
                Te apoyamos con la gestión, autorización y asociación de los rangos de numeración y resoluciones de facturación exigidos por la ley.
              </p>
            </Card>

            <Card className="p-8 text-center hover:drop-shadow-lg transition-all duration-300 group">
              <Cloud className="h-16 w-16 mx-auto mb-6 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-4">Plataforma Web Centralizada</h3>
              <p className="text-muted-foreground">
                Todos tus folios se administran desde una plataforma estable, con el acompañamiento en marketing y contabilidad de 5 Direcciones.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" asChild>
              <a href="https://api.whatsapp.com/send?phone=573013936616&text=Hola,%20quiero%20hablar%20con%20un%20asesor%20contable" target="_blank" rel="noopener noreferrer">
                Hablar con un asesor contable
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Servicios Multi-Producto */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="documentos">Documentos Electrónicos</TabsTrigger>
              <TabsTrigger value="nomina">Nómina Electrónica</TabsTrigger>
              <TabsTrigger value="soporte">Documento Soporte Electrónico</TabsTrigger>
              <TabsTrigger value="implementaciones">Implementaciones</TabsTrigger>
            </TabsList>

            {Object.entries(productData).map(([key, data]) => (
              <TabsContent key={key} value={key}>
                <div className="text-center mb-16">
                  <Badge className="mb-4 bg-accent/10 text-accent">
                    {data.title}
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {data.title}
                  </h2>
                  <p className="text-xl text-muted-foreground mb-4">
                    {data.subtitle}
                  </p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>{data.legal.split('*').filter(line => line.trim()).map((line, index) => (
                      <span key={index}>* {line.trim()}<br /></span>
                    ))}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                  {data.plans.map((plan, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold mb-2">
                          {plan.folios ? `${plan.folios} folios` : plan.name}
                        </h3>
                        <div className="text-3xl font-bold text-primary mb-4">{plan.price} COP</div>
                      </div>
                      
                      <Button className="w-full" asChild>
                        <a 
                          href={`https://api.whatsapp.com/send?phone=573013936616&text=${encodeURIComponent(generateWhatsAppMessage(plan.folios || plan.name, key, plan.price))}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Comprar
                        </a>
                      </Button>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
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
                href="https://api.whatsapp.com/send?phone=573013936616&text=Hola,%20quiero%20iniciar%20con%20facturación%20electrónica"
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