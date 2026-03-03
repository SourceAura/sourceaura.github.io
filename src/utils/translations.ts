// Translation utility functions
export function getCurrentLocale(): string {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(Boolean);
    
    if (pathParts.length > 0) {
      const potentialLocale = pathParts[0];
      // Check if it's a valid locale (2-letter codes)
      if (/^[a-z]{2}(-[A-Z]{2})?$/.test(potentialLocale)) {
        return potentialLocale;
      }
    }
  }
  
  return 'en';
}

// Simple synchronous translation function
// For now, returns English - in production you'd load actual translations
export function t(key: string): string {
  const translations = {
    'en': {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.petals': 'Petals',
      'nav.search': 'Search',
      'footer.backToTop': 'Back to top',
      'footer.theme': 'Theme',
      'footer.language': 'Language',
      'common.loading': 'Loading...',
      'common.error': 'Error',
      'common.notFound': 'Not found',
      'common.readMore': 'Read more',
      'common.close': 'Close',
      'common.open': 'Open',
      'common.menu': 'Menu',
      'common.searchPlaceholder': 'Search...'
    },
    'es': {
      'nav.home': 'Inicio',
      'nav.about': 'Acerca de',
      'nav.petals': 'Pétalos',
      'nav.search': 'Buscar',
      'footer.backToTop': 'Volver arriba',
      'footer.theme': 'Tema',
      'footer.language': 'Idioma',
      'common.loading': 'Cargando...',
      'common.error': 'Error',
      'common.notFound': 'No encontrado',
      'common.readMore': 'Leer más',
      'common.close': 'Cerrar',
      'common.open': 'Abrir',
      'common.menu': 'Menú',
      'common.searchPlaceholder': 'Buscar...'
    },
    'fr': {
      'nav.home': 'Accueil',
      'nav.about': 'À propos',
      'nav.petals': 'Pétales',
      'nav.search': 'Rechercher',
      'footer.backToTop': 'Retour en haut',
      'footer.theme': 'Thème',
      'footer.language': 'Langue',
      'common.loading': 'Chargement...',
      'common.error': 'Erreur',
      'common.notFound': 'Non trouvé',
      'common.readMore': 'Lire plus',
      'common.close': 'Fermer',
      'common.open': 'Ouvrir',
      'common.menu': 'Menu',
      'common.searchPlaceholder': 'Rechercher...'
    },
    'zh-CN': {
      'nav.home': '主页',
      'nav.about': '关于',
      'nav.petals': '花瓣',
      'nav.search': '搜索',
      'footer.backToTop': '返回顶部',
      'footer.theme': '主题',
      'footer.language': '语言',
      'common.loading': '加载中...',
      'common.error': '错误',
      'common.notFound': '未找到',
      'common.readMore': '阅读更多',
      'common.close': '关闭',
      'common.open': '打开',
      'common.menu': '菜单',
      'common.searchPlaceholder': '搜索...'
    }
  };

  const locale = getCurrentLocale();
  const localeTranslations = translations[locale as keyof typeof translations] || translations['en'];
  return localeTranslations[key as keyof typeof localeTranslations] || key;
}
