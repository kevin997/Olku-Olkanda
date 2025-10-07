import { Product } from './products';

export interface CartItem {
  product: Product;
  quantity: number;
}

// Cart utilities for client-side state management
export function addToCart(cart: CartItem[], product: Product): CartItem[] {
  const existingItem = cart.find(item => item.product.id === product.id);
  
  if (existingItem) {
    return cart.map(item =>
      item.product.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  
  return [...cart, { product, quantity: 1 }];
}

export function removeFromCart(cart: CartItem[], productId: string): CartItem[] {
  return cart.filter(item => item.product.id !== productId);
}

export function updateQuantity(cart: CartItem[], productId: string, quantity: number): CartItem[] {
  if (quantity <= 0) {
    return removeFromCart(cart, productId);
  }
  
  return cart.map(item =>
    item.product.id === productId
      ? { ...item, quantity }
      : item
  );
}

export function getCartTotal(cart: CartItem[]): number {
  return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
}

export function getCartItemCount(cart: CartItem[]): number {
  return cart.reduce((count, item) => count + item.quantity, 0);
}

// Generate WhatsApp message for cart checkout
export function generateWhatsAppMessage(cart: CartItem[], phoneNumber: string = '237697111394'): string {
  const message = cart.map(item => 
    `${item.product.name} x${item.quantity} - ${item.product.price.toLocaleString('fr-FR')} FCFA`
  ).join('\n');
  
  const total = getCartTotal(cart);
  const fullMessage = `Bonjour! Je souhaite commander:\n\n${message}\n\nTotal: ${total.toLocaleString('fr-FR')} FCFA`;
  
  const encodedMessage = encodeURIComponent(fullMessage);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

// Generate WhatsApp message for single product inquiry
export function generateProductInquiryMessage(product: Product, phoneNumber: string = '237697111394'): string {
  const message = `Bonjour! Je suis intéressé(e) par:\n\n${product.name}\nPrix: ${product.price.toLocaleString('fr-FR')} FCFA\n\nPouvez-vous me donner plus d'informations?`;
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
