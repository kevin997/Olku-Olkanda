'use client';

import { useTranslations } from 'next-intl';
import { Product } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: Product['category'][];
  selectedCategory: Product['category'] | 'all';
  onSelectCategory: (category: Product['category'] | 'all') => void;
}

export function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  const t = useTranslations('products.categories');
  
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <Button
        variant={selectedCategory === 'all' ? 'default' : 'outline'}
        onClick={() => onSelectCategory('all')}
        className={cn(
          'rounded-full transition-all',
          selectedCategory === 'all' && 'shadow-lg'
        )}
      >
        {t('all')}
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'outline'}
          onClick={() => onSelectCategory(category)}
          className={cn(
            'rounded-full transition-all',
            selectedCategory === category && 'shadow-lg'
          )}
        >
          {t(category)}
        </Button>
      ))}
    </div>
  );
}
