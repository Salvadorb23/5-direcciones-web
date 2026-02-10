import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";

// Helper function para WhatsApp
const openWhatsApp = (message: string) => {
  const phoneNumber = "573013936616"; // +57 301 393 6616
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, "_blank");
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Cursos", href: "/cursos" },
    { name: "Facturación", href: "/facturacion" },
    { name: "Emprende", href: "/emprende" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contacto" }
  ];

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  const handleConsultaClick = () => {
    openWhatsApp("Hola, me interesa una consulta gratuita sobre los servicios de 5 Direcciones");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/logo-5-direcciones.png" 
              alt="5 Direcciones - Estrategia Empresarial" 
              className="h-12 w-auto object-contain"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-foreground">5 Direcciones</h1>
              <p className="text-sm text-muted-foreground">Estrategia Empresarial</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  isActiveLink(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-200 ${
                  isActiveLink(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar servicios..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-primary to-accent text-white font-semibold px-6 py-2 rounded-lg hover:scale-105 transition-all duration-300"
              onClick={handleConsultaClick}
            >
              Consulta Gratis
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 pt-6">
                <div className="space-y-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActiveLink(item.href)
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-primary hover:bg-muted"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                <div className="border-t pt-6 space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Buscar servicios..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <Button 
                    variant="default" 
                    className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold px-6 py-2 rounded-lg hover:scale-105 transition-all duration-300"
                    onClick={() => {
                      handleConsultaClick();
                      setIsOpen(false);
                    }}
                  >
                    Consulta Gratis
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
