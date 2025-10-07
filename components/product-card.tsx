'use client';

import Image from 'next/image';
import { ShoppingCart, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Product, formatPrice } from '@/lib/products';
import { generateProductInquiryMessage } from '@/lib/cart';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const t = useTranslations('products');
  
  const handleWhatsAppInquiry = () => {
    const url = generateProductInquiryMessage(product);
    window.open(url, '_blank');
  };

  return (
    <div className="group relative border rounded-xl overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] bg-card">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="destructive" className="text-lg">{t('outOfStock')}</Badge>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg leading-tight line-clamp-2">
            {product.name}
          </h3>
          {product.description && (
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {product.description}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            {formatPrice(product.price, product.currency)}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="flex-1 gap-2"
            size="lg"
          >
            <ShoppingCart className="h-4 w-4" />
            {t('addToCart')}
          </Button>
          <Button
            onClick={handleWhatsAppInquiry}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            {t('info')}
          </Button>
        </div>
      </div>
    </div>
  );
}
