'use client';

import { ShoppingCart, Trash2, Plus, Minus, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { CartItem, getCartTotal, getCartItemCount, generateWhatsAppMessage } from '@/lib/cart';
import { formatPrice } from '@/lib/products';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

interface CartDrawerProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export function CartDrawer({ cart, onUpdateQuantity, onRemoveItem }: CartDrawerProps) {
  const t = useTranslations('cart');
  const itemCount = getCartItemCount(cart);
  const total = getCartTotal(cart);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const url = generateWhatsAppMessage(cart);
    window.open(url, '_blank');
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="lg" className="relative gap-2">
          <ShoppingCart className="h-5 w-5" />
          <span className="hidden sm:inline">{t('title')}</span>
          {itemCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center"
            >
              {itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-2xl">{t('title')}</SheetTitle>
          <SheetDescription>
            {itemCount === 0 
              ? t('empty')
              : t('itemCount', { count: itemCount })
            }
          </SheetDescription>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-4">
              <ShoppingCart className="h-24 w-24 mx-auto text-muted-foreground" />
              <p className="text-muted-foreground">{t('startShopping')}</p>
            </div>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex gap-4 border rounded-lg p-3">
                    <div className="relative h-20 w-20 rounded-md overflow-hidden bg-muted flex-shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div>
                        <h4 className="font-semibold text-sm leading-tight line-clamp-2">
                          {item.product.name}
                        </h4>
                        <p className="text-sm font-bold text-primary mt-1">
                          {formatPrice(item.product.price, item.product.currency)}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive"
                          onClick={() => onRemoveItem(item.product.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="space-y-4 pt-4">
              <Separator />
              <div className="flex justify-between items-center text-lg font-bold">
                <span>{t('total')}</span>
                <span className="text-2xl text-primary">
                  {formatPrice(total, 'FCFA')}
                </span>
              </div>
              
              <SheetFooter>
                <Button 
                  onClick={handleCheckout} 
                  className="w-full gap-2" 
                  size="lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  {t('checkout')}
                </Button>
              </SheetFooter>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
