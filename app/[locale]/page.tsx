'use client';

import { useState, useMemo, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { products, getAllCategories, Product } from '@/lib/products';
import { addToCart, updateQuantity, removeFromCart, CartItem } from '@/lib/cart';
import { ProductCard } from '@/components/product-card';
import { CartDrawer } from '@/components/cart-drawer';
import { CategoryFilter } from '@/components/category-filter';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Button } from '@/components/ui/button';

export default function Home() {
  const t = useTranslations();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Product['category'] | 'all'>('all');
  const [currentWord, setCurrentWord] = useState(0);
  
  const categories = getAllCategories();
  const rotatingWords = [
    t('hero.rotatingWords.home'),
    t('hero.rotatingWords.living'),
    t('hero.rotatingWords.bedroom'),
    t('hero.rotatingWords.office'),
    t('hero.rotatingWords.kitchen')
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);
  
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleAddToCart = (product: Product) => {
    setCart(prevCart => addToCart(prevCart, product));
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCart(prevCart => updateQuantity(prevCart, productId, quantity));
  };

  const handleRemoveItem = (productId: string) => {
    setCart(prevCart => removeFromCart(prevCart, productId));
  };

  const handleContactWhatsApp = () => {
    const message = t('whatsapp.contact');
    window.open(`https://wa.me/237697111394?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold">{t('header.title')}</h1>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleContactWhatsApp}
              className="gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="hidden sm:inline">{t('header.contact')}</span>
            </Button>
            <CartDrawer 
              cart={cart}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-20 sm:py-32 bg-gradient-to-br from-primary/5 via-background to-muted/30 relative overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-semibold text-primary">✨ {t('hero.badge')}</span>
                <span className="text-sm text-muted-foreground">{t('hero.collection')}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
                {t('hero.title').split(t('hero.quality'))[0]}
                <span className="text-primary">{t('hero.quality')}</span>
                {t('hero.title').split(t('hero.quality'))[1]}{' '}
                <span className="relative inline-block min-w-[200px] sm:min-w-[280px] align-bottom" style={{ height: '1.2em' }}>
                  {rotatingWords.map((word, index) => (
                    <span
                      key={word}
                      className={`absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 text-primary transition-all duration-700 whitespace-nowrap ${
                        index === currentWord
                          ? 'opacity-100 translate-y-0 scale-100'
                          : 'opacity-0 translate-y-8 scale-95'
                      }`}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="text-lg h-14 px-8 gap-2 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('hero.viewCatalog')}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg h-14 px-8 gap-2"
                  onClick={handleContactWhatsApp}
                >
                  <MessageCircle className="h-5 w-5" />
                  {t('hero.contactUs')}
                </Button>
              </div>
            </div>
            {/* Right Image Placeholder */}
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl bg-gradient-to-br from-primary/20 to-muted border-2 border-dashed border-primary/30 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <p className="text-2xl font-bold">📸 Ajoutez votre image ici</p>
                <p className="text-muted-foreground">Image hero: showroom ou produit vedette</p>
                <p className="text-sm text-muted-foreground">Recommandé: 1200x800px</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-20 bg-muted/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-6xl font-bold">{t('whyUs.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('whyUs.subtitle')}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '✨', key: 'quality' },
              { icon: '🚚', key: 'delivery' },
              { icon: '💰', key: 'price' },
              { icon: '🛡️', key: 'warranty' },
            ].map((feature, i) => (
              <div key={i} className="text-center space-y-4 p-6 rounded-xl bg-card border hover:shadow-lg transition-all">
                <div className="text-5xl">{feature.icon}</div>
                <h3 className="text-xl font-bold">{t(`whyUs.features.${feature.key}.title`)}</h3>
                <p className="text-muted-foreground">{t(`whyUs.features.${feature.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full py-8 border-b">
        <div className="container px-4 sm:px-6 lg:px-8">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="w-full py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl sm:text-6xl font-bold">{t('products.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('products.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                {t('products.noProducts')}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-muted/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl sm:text-6xl font-bold">{t('faq.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('faq.subtitle')}</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {['delivery', 'showroom', 'payment', 'warranty'].map((key, i) => (
              <details key={i} className="group border rounded-xl p-6 bg-card hover:shadow-md transition-all">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-lg font-semibold">{t(`faq.questions.${key}.q`)}</span>
                  <span className="text-2xl group-open:rotate-180 transition-transform">›</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{t(`faq.questions.${key}.a`)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-primary text-primary-foreground">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-6xl font-bold leading-tight">
              {t('cta.title')}
            </h2>
            <p className="text-xl opacity-90">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="text-lg h-14 px-8 gap-2 shadow-lg"
                onClick={handleContactWhatsApp}
              >
                <MessageCircle className="h-5 w-5" />
                {t('cta.orderWhatsApp')}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-lg h-14 px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('cta.viewProducts')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t py-16 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">{t('footer.title')}</h3>
              <p className="text-muted-foreground">
                {t('footer.description')}
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">{t('footer.categories')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>{t('products.categories.beds')}</li>
                <li>{t('products.categories.sofas')}</li>
                <li>{t('products.categories.chairs')}</li>
                <li>{t('products.categories.tables')}</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">{t('footer.contact')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>{t('footer.phone')}</li>
                <li>{t('footer.location')}</li>
                <li>{t('footer.hours')}</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">{t('footer.followUs')}</h4>
              <Button 
                onClick={handleContactWhatsApp}
                variant="outline"
                className="w-full gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                {t('footer.whatsapp')}
              </Button>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
