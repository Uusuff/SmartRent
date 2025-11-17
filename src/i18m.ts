import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ENG: {
    translation: {
      header: {
        buttonText: 'I’m a landlord',
        dropdownLanguage: 'Language',
        dropdownCurrency: 'Currency',
      },

      footer: {
        footer_top_social_media: {
          subtitle: 'Your trusted partner',
        },
        footer_top_company: {
          title: 'Company',
          aboutUs: 'About Us',
          howItWorks: 'How It Works',
          blog: 'Blog',
          contactUs: 'Contact Us',
        },
        footer_top_for_landlords: {
          title: 'For Landlords',
          listYourProperty: 'List Your Property',
          pricingPlans: 'Pricing Plans',
          landlordSupport: 'Landlord Support',
          safetyAndVerification: 'Safety and Verification',
        },
        footer_top_for_tenants: {
          title: 'For Tenants',
          findAnApartment: 'Find an Apartment',
          tenantGuide: 'Tenant Guide',
          reviews: 'Reviews',
          helpCenter: 'Help Center',
        },
        footer_top_legal: {
          title: 'Legal',
          termsAndConditions: 'Terms and Conditions',
          privacyPolicy: 'Privacy Policy',
          cookiePolicy: 'Cookie Policy',
        },
        footer_bottom_text: 'All rights reserved.',
        backToTop: 'Back to top',
      },

      catalog_page: {
        catalog_page_head: {
          title: '{{propertyType}} to rent in {{city}}',
          quantity: '{{quantity}} results',
          links: {
            recommended: 'Recommended',
            map: 'Map',
          },
        },
        catalog_page_filter: {
          categories: {
            cities: {
              kyiv: 'Kyiv',
              lviv: 'Lviv',
              dnipro: 'Dnipro',
              odesa: 'Odesa',
              khakiv: 'Kharkiv',
              vinnytsia: 'Vinnytsia',
              ternopil: 'Ternopil',
              frankivsk: 'Ivano-Frankivsk',
              zaporizhzhia: 'Zaporizhzhia',
              chernihiv: 'Chernihiv',
            },

            property_types: {
              apartment: 'apartment',
              room: 'room',
              house: 'house',
              studio: 'studio',
            },
            price: {
              upTo: 'up to',
            },
            neighborhoods: {
              downtown: 'Downtown',
              riverside: 'Riverside',
              university: 'University District',
              suburb: 'Suburb',
              park: 'Near Park',
              industrial: 'Industrial Zone',
              oldTown: 'Old Town',
            },
          },

          titles: {
            location: 'Location',
            date: 'Date',
            neighborhood: 'Neighborhood',
            price: 'Price',
            propertyType: 'Property type',
            allFilters: 'All filters',
            showAll: 'Show all',
          },
        },
      },

      apartment_card: {
        apartment_card_head: {
          title: '{{propertyType}} in {{city}}',
        },

        apartment_card_badges: {
          pet_friendly: 'Pet-Friendly',
          new: 'New',
        },

        apartment_card_details: {
          contacts: 'Text landlord',
          utilities: 'excl. utilities',
          price: '{{price}}/month',
          available: 'Available now',
          not_available: 'Available from',
        },
      },

      apartments_map: {
        apartment_map_buttons: {
          hide: 'Hide map',
          expand: 'Expand',
        },
      },
    },
  },
  ES: {
    translation: {
      header: {
        buttonText: 'Jag är en hyresvärd',
        dropdownLanguage: 'Språk',
        dropdownCurrency: 'Valuta',
      },
      footer: {
        footer_top_social_media: {
          subtitle: 'Din pålitliga partner',
        },
        footer_top_company: {
          title: 'Företag',
          aboutUs: 'Om oss',
          howItWorks: 'Hur det fungerar',
          blog: 'Blogg',
          contactUs: 'Kontakta oss',
        },
        footer_top_for_landlords: {
          title: 'För hyresvärdar',
          listYourProperty: 'Lista din egendom',
          pricingPlans: 'Prissättningsplaner',
          landlordSupport: 'Hyresvärdsstöd',
          safetyAndVerification: 'Säkerhet och verifiering',
        },
        footer_top_for_tenants: {
          title: 'För hyresgäster',
          findAnApartment: 'Hitta en lägenhet',
          tenantGuide: 'Hyresgästguide',
          reviews: 'Recensioner',
          helpCenter: 'Hjälpcenter',
        },
        footer_top_legal: {
          title: 'Juridiskt',
          termsAndConditions: 'Villkor',
          privacyPolicy: 'Integritetspolicy',
          cookiePolicy: 'Cookiepolicy',
        },
        footer_bottom_text: 'Alla rättigheter förbehållna.',
        backToTop: 'Tillbaka till toppen',
      },
    },
  },
  DE: {
    translation: {
      header: {
        buttonText: 'Ich bin Vermieter',
        dropdownLanguage: 'Sprache',
        dropdownCurrency: 'Währung',
      },
      footer: {
        footer_top_social_media: {
          subtitle: 'Ihr vertrauenswürdiger Partner',
        },
        footer_top_company: {
          title: 'Unternehmen',
          aboutUs: 'Über uns',
          howItWorks: 'Wie es funktioniert',
          blog: 'Blog',
          contactUs: 'Kontaktieren Sie uns',
        },
        footer_top_for_landlords: {
          title: 'Für Vermieter',
          listYourProperty: 'Ihre Immobilie auflisten',
          pricingPlans: 'Preismodelle',
          landlordSupport: 'Vermieterunterstützung',
          safetyAndVerification: 'Sicherheit und Verifizierung',
        },
        footer_top_for_tenants: {
          title: 'Für Mieter',
          findAnApartment: 'Eine Wohnung finden',
          tenantGuide: 'Mietführer',
          reviews: 'Bewertungen',
          helpCenter: 'Hilfezentrum',
        },
        footer_top_legal: {
          title: 'Juridiskt',
          termsAndConditions: 'Villkor',
          privacyPolicy: 'Integritetspolicy',
          cookiePolicy: 'Cookiepolicy',
        },
        footer_bottom_text: 'Alle Rechte vorbehalten.',
        backToTop: 'Zurück nach oben',
      },
    },
  },
  IT: {
    translation: {
      header: {
        buttonText: 'Sono un proprietario',
        dropdownLanguage: 'Lingua',
        dropdownCurrency: 'Moneta',
      },
      footer: {
        footer_top_social_media: {
          subtitle: 'Il tuo partner di fiducia',
        },
        footer_top_company: {
          title: 'Azienda',
          aboutUs: 'Chi siamo',
          howItWorks: 'Come funziona',
          blog: 'Blog',
          contactUs: 'Contattaci',
        },
        footer_top_for_landlords: {
          title: 'Per i Proprietari',
          listYourProperty: 'Elenca la tua proprietà',
          pricingPlans: 'Piani tariffari',
          landlordSupport: 'Supporto per i proprietari',
          safetyAndVerification: 'Sicurezza e verifica',
        },
        footer_top_for_tenants: {
          title: 'Per i Inquilini',
          findAnApartment: 'Trova un Appartamento',
          tenantGuide: 'Guida per Inquilini',
          reviews: 'Recensioni',
          helpCenter: 'Centro Assistenza',
        },
        footer_top_legal: {
          title: 'Legale',
          termsAndConditions: 'Termini e Condizioni',
          privacyPolicy: 'Informativa sulla Privacy',
          cookiePolicy: 'Informativa sui Cookie',
        },
        footer_bottom_text: 'Tutti i diritti riservati.',
        backToTop: 'Torna su',
      },
    },
  },
  FR: {
    translation: {
      header: {
        buttonText: 'Je suis propriétaire',
        dropdownLanguage: 'Langue',
        dropdownCurrency: 'Monnaie',
      },
      footer: {
        footer_top_social_media: {
          subtitle: 'Votre partenaire de confiance',
        },
        footer_top_company: {
          title: 'Entreprise',
          aboutUs: 'À propos de nous',
          howItWorks: 'Comment ça fonctionne',
          blog: 'Blog',
          contactUs: 'Contactez-nous',
        },
        footer_top_for_landlords: {
          title: 'Pour les propriétaires',
          listYourProperty: 'Listez votre propriété',
          pricingPlans: 'Plans tarifaires',
          landlordSupport: 'Support aux propriétaires',
          safetyAndVerification: 'Sécurité et vérification',
        },
        footer_top_for_tenants: {
          title: 'Pour les locataires',
          findAnApartment: 'Trouvez un appartement',
          tenantGuide: 'Guide du locataire',
          reviews: 'Avis',
          helpCenter: `Centre d'aide`,
        },
        footer_top_legal: {
          title: 'Légal',
          termsAndConditions: 'Termes et Conditions',
          privacyPolicy: 'Politique de Confidentialité',
          cookiePolicy: 'Politique de Cookies',
        },
        footer_bottom_text: 'Tous droits réservés.',
        backToTop: 'Retourner en haut',
      },
    },
  },
  UA: {
    translation: {
      header: {
        buttonText: 'Я орендодавець',
        dropdownLanguage: 'Мова',
        dropdownCurrency: 'Валюта',
      },
      footer: {
        footer_top_social_media: {
          subtitle: 'Ваш надійний партнер',
        },
        footer_top_company: {
          title: 'Компанія',
          aboutUs: 'Про нас',
          howItWorks: 'Як це працює',
          blog: 'Блог',
          contactUs: `Зв'яжіться з нами`,
        },
        footer_top_for_landlords: {
          title: 'Для орендодавців',
          listYourProperty: 'Перелічіть свою власність',
          pricingPlans: 'Тарифи',
          landlordSupport: 'Підтримка орендодавців',
          safetyAndVerification: 'Безпека та перевірка',
        },
        footer_top_for_tenants: {
          title: 'Для орендарів',
          findAnApartment: 'Знайти квартиру',
          tenantGuide: 'Посібник для орендарів',
          reviews: 'Відгуки',
          helpCenter: 'Центр допомоги',
        },
        footer_top_legal: {
          title: 'Юридична інформація',
          termsAndConditions: 'Умови та положення',
          privacyPolicy: 'Політика конфіденційності',
          cookiePolicy: 'Політика використання файлів cookie',
        },
        footer_bottom_text: 'Всі права захищені.',
        backToTop: 'Повернутися до початку',
      },
      catalog_page: {
        catalog_page_head: {
          title: '{{propertyType}} для оренди в {{city}}',
          quantity: 'Результати пошуку: {{quantity}}',
          links: {
            recommended: 'Рекомендовані',
            map: 'Карта',
          },
        },
        catalog_page_filter: {
          categories: {
            cities: {
              kyiv: 'Київ',
              lviv: 'Львів',
              dnipro: 'Дніпро',
              odesa: 'Одеса',
              khakiv: 'Харків',
              vinnytsia: 'Вінниця',
              ternopil: 'Тернопіль',
              frankivsk: 'Івано-Франківськ',
              zaporizhzhia: 'Запоріжжя',
              chernihiv: 'Чернігів',
            },
            property_types: {
              apartment: 'квартира',
              room: 'кімната',
              house: 'будинок',
              studio: 'студія',
            },
            price: {
              upTo: 'до',
            },
            neighborhoods: {
              downtown: 'Центр',
              riverside: 'Набережна',
              university: 'Університетський район',
              suburb: 'Передмістя',
              park: 'Біля парку',
              industrial: 'Промислова зона',
              oldTown: 'Старе місто',
            },
          },
          titles: {
            location: 'Локація',
            date: 'Дата',
            neighborhood: 'Район',
            price: 'Ціна',
            propertyType: 'Тип житла',
            allFilters: 'Усі фільтри',
            showAll: 'Показати всі',
          },
        },
      },

      apartment_card: {
        apartment_card_head: {
          title: '{{propertyType}} у {{city}}',
        },
        apartment_card_badges: {
          pet_friendly: 'Дозволені тварини',
          new: 'Нове',
        },
        apartment_card_details: {
          contacts: 'Написати орендодавцю',
          utilities: 'без комунальних',
          price: '{{price}}/місяць',
          available: 'Доступно зараз',
          not_available: 'Доступно з',
        },
      },

      apartments_map: {
        apartment_map_buttons: {
          hide: 'Сховати карту',
          expand: 'Розгорнути',
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ENG',
  fallbackLng: 'ENG',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
