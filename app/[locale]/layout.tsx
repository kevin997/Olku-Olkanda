import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/request';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const metadata = {
    fr: {
      title: "Olkunda Ameublement - Meubles de Qualité au Cameroun",
      description: "Découvrez notre collection de lits, canapés, chaises et meubles élégants. Livraison rapide partout au Cameroun. Prix compétitifs et garantie 2 ans.",
      keywords: "meubles Cameroun, lits, canapés, chaises, tables, ameublement, mobilier, livraison Cameroun, Olkunda",
    },
    en: {
      title: "Olkunda Furniture - Quality Furniture in Cameroon",
      description: "Discover our collection of elegant beds, sofas, chairs and furniture. Fast delivery throughout Cameroon. Competitive prices and 2-year warranty.",
      keywords: "furniture Cameroon, beds, sofas, chairs, tables, furnishing, home decor, delivery Cameroon, Olkunda",
    },
  };

  const currentMetadata = metadata[locale as keyof typeof metadata] || metadata.fr;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://olkunda.okenlysolutions.com';

  return {
    title: currentMetadata.title,
    description: currentMetadata.description,
    keywords: currentMetadata.keywords,
    authors: [{ name: 'Olkunda Ameublement' }],
    creator: 'Olkunda Ameublement',
    publisher: 'Olkunda Ameublement',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'fr': '/fr',
        'en': '/en',
        'x-default': '/fr',
      },
    },
    openGraph: {
      title: currentMetadata.title,
      description: currentMetadata.description,
      url: `${baseUrl}/${locale}`,
      siteName: 'Olkunda Ameublement',
      locale: locale === 'fr' ? 'fr_CM' : 'en_CM',
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Olkunda Ameublement',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMetadata.title,
      description: currentMetadata.description,
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate locale
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
