import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Youtube
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Dirección Administrativa", href: "/servicios/direccion-administrativa" },
    { name: "Dirección Contable", href: "/servicios/direccion-contable" },
    { name: "Gestión de Proyectos", href: "/servicios/gestion-proyectos" },
    { name: "Talento Humano", href: "/servicios/talento-humano" },
    { name: "Dirección Jurídica", href: "/servicios/direccion-juridica" },
    { name: "Marketing Digital", href: "/servicios/marketing-digital" },
    { name: "Desarrollo Web", href: "/servicios/desarrollo-web" }
  ];

  const quickLinks = [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Cursos", href: "/cursos" },
    { name: "Facturación Electrónica", href: "/facturacion" },
    { name: "Emprende con Nosotros", href: "/emprende" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contacto" }
  ];

  return (
    <footer className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-hero py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Mantente Actualizado con 5 Direcciones
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Recibe consejos empresariales, actualizaciones normativas y noticias del sector
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Button className="bg-white text-primary hover:bg-white/90 px-6">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center text-white font-bold text-xl">
                5D
              </div>
              <div>
                <h2 className="text-xl font-bold">5 Direcciones</h2>
                <p className="text-sm text-neutral-300">Estrategia Empresarial</p>
              </div>
            </div>
            
            <p className="text-neutral-300 text-sm leading-relaxed">
              Acompañamos a los emprendedores en la consecución de sus objetivos empresariales, 
              proporcionando soluciones integrales para el crecimiento de su negocio.
            </p>

            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/5DireccionesCol" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/5DireccionesCol" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Nuestros Servicios</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-neutral-300 text-sm hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-neutral-300 text-sm hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contáctanos</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-neutral-300 text-sm">
                  <p>Medellín, Colombia</p>
                  <p>Antioquia</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+573223674992" 
                  className="text-neutral-300 text-sm hover:text-white transition-colors"
                >
                  (+57) 322 367 4992
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@5direcciones.com.co" 
                  className="text-neutral-300 text-sm hover:text-white transition-colors"
                >
                  info@5direcciones.com.co
                </a>
              </div>
            </div>

            <Button 
              className="w-full bg-accent hover:bg-accent/90 text-white mt-4"
              asChild
            >
              <a 
                href="https://api.whatsapp.com/send?phone=573223674992&text=Hola,%20tengo%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consulta por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © {currentYear} 5 Direcciones. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacidad" className="text-neutral-400 text-sm hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/terminos" className="text-neutral-400 text-sm hover:text-white transition-colors">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;