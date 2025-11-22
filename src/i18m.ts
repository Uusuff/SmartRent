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
              kharkiv: 'Kharkiv',
              vinnytsia: 'Vinnytsia',
              ternopil: 'Ternopil',
              'ivano-frankivsk': 'Ivano-Frankivsk',
              zaporizhzhia: 'Zaporizhzhia',
              chernihiv: 'Chernihiv',
            },

            cities_title: {
              kyiv: 'Kyiv',
              lviv: 'Lviv',
              dnipro: 'Dnipro',
              odesa: 'Odesa',
              kharkiv: 'Kharkiv',
              vinnytsia: 'Vinnytsia',
              ternopil: 'Ternopil',
              'ivano-frankivsk': 'Ivano-Frankivsk',
              zaporizhzhia: 'Zaporizhzhia',
              chernihiv: 'Chernihiv',
            },

            property_types: {
              all: 'All apartments',
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
              'university district': 'University District',
              suburb: 'Suburb',
              'near park': 'Near Park',
              'industrial zone': 'Industrial Zone',
              'old town': 'Old Town',
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
          month: 'month',
        },

        months: {
          '1': 'January',
          '2': 'February',
          '3': 'March',
          '4': 'April',
          '5': 'May',
          '6': 'June',
          '7': 'July',
          '8': 'August',
          '9': 'September',
          '10': 'October',
          '11': 'November',
          '12': 'December',
        },
      },

      apartments_map: {
        hide: 'Hide map',
        expand: 'Expand',
        collapse: 'Collapse',
      },

      favorites: {
        title: 'Favorites',
        item: '1 favorite',
        items: '{{count}} favorites',
      },

      errors: {
        notFound: 'There are no results found!',
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
      catalog_page: {
        catalog_page_head: {
          title: '{{propertyType}} en alquiler en {{city}}',
          quantity: '{{quantity}} resultados',
          links: {
            recommended: 'Recomendado',
            map: 'Mapa',
          },
        },
        catalog_page_filter: {
          categories: {
            cities: {
              kyiv: 'Kyiv',
              lviv: 'Lviv',
              dnipro: 'Dnipro',
              odesa: 'Odesa',
              kharkiv: 'Járkov',
              vinnytsia: 'Vinnytsia',
              ternopil: 'Ternópil',
              'ivano-frankivsk': 'Ivano-Frankivsk',
              zaporizhzhia: 'Zaporiyia',
              chernihiv: 'Chernígov',
            },

            cities_title: {
              kyiv: 'Kyiv',
              lviv: 'Lviv',
              dnipro: 'Dnipro',
              odesa: 'Odesa',
              kharkiv: 'Járkov',
              vinnytsia: 'Vinnytsia',
              ternopil: 'Ternópil',
              'ivano-frankivsk': 'Ivano-Frankivsk',
              zaporizhzhia: 'Zaporiyia',
              chernihiv: 'Chernígov',
            },

            property_types: {
              all: 'Todos los apartamentos',
              apartment: 'departamento',
              room: 'habitación',
              house: 'casa',
              studio: 'estudio',
            },
            price: {
              upTo: 'arriba a',
            },
            neighborhoods: {
              downtown: 'Centro',
              riverside: 'Orilla',
              'university district': 'Distrito Universitario',
              suburb: 'Suburbio',
              'near park': 'Cerca del parque',
              'industrial zone': 'Zona industrial',
              'old town': 'Casco antiguo',
            },
          },

          titles: {
            location: 'Ubicación',
            date: 'Fecha',
            neighborhood: 'Vecindario',
            price: 'Precio',
            propertyType: 'Tipo de propiedad',
            allFilters: 'Todos los filtros',
            showAll: 'Mostrar todo',
          },
        },
      },

      apartment_card: {
        apartment_card_head: {
          title: '{{propertyType}} en {{city}}',
        },

        apartment_card_badges: {
          pet_friendly: 'Se admiten mascotas',
          new: 'Nueva',
        },

        apartment_card_details: {
          contacts: 'Propietario de texto',
          utilities: 'Servicios públicos excluidos',
          price: '{{price}}/mes',
          available: 'Ya disponible',
          not_available: 'Disponible en',
          month: 'mes',
        },

        months: {
          '1': 'Enero',
          '2': 'Febrero',
          '3': 'Marzo',
          '4': 'Abril',
          '5': 'Puede',
          '6': 'Junio',
          '7': 'Julio',
          '8': 'Agosto',
          '9': 'Septiembre',
          '10': 'Octubre',
          '11': 'Noviembre',
          '12': 'Diciembre',
        },
      },

      apartments_map: {
        hide: 'Ocultar mapa',
        expand: 'Expandir',
        collapse: 'Colapsar',
      },
      errors: {
        notFound: '¡No se han encontrado resultados!',
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
      catalog_page: {
        catalog_page_head: {
          title: '{{propertyType}} zu mieten in {{city}}',
          quantity: '{{quantity}} ergebnisse',
          links: {
            recommended: 'Empfohlen',
            map: 'Karte',
          },
        },
        catalog_page_filter: {
          categories: {
            cities: {
              kyiv: 'Kiew',
              lviv: 'Lemberg',
              dnipro: 'Dnipro',
              odesa: 'Odessa',
              kharkiv: 'Charkiw',
              vinnytsia: 'Winnyzja',
              ternopil: 'Ternopil',
              'ivano-frankivsk': 'Iwano-Frankiwsk',
              zaporizhzhia: 'Saporischschja',
              chernihiv: 'Tschernihiw',
            },

            cities_title: {
              kyiv: 'Kiew',
              lviv: 'Lemberg',
              dnipro: 'Dnipro',
              odesa: 'Odessa',
              kharkiv: 'Charkiw',
              vinnytsia: 'Winnyzja',
              ternopil: 'Ternopil',
              'ivano-frankivsk': 'Iwano-Frankiwsk',
              zaporizhzhia: 'Saporischschja',
              chernihiv: 'Tschernihiw',
            },

            property_types: {
              all: 'Alle wohnungen',
              apartment: 'wohnung',
              room: 'zimmer',
              house: 'haus',
              studio: 'studio',
            },
            price: {
              upTo: 'bis zu',
            },
            neighborhoods: {
              downtown: 'Innenstadt',
              riverside: 'Flussufer',
              'university district': 'Universitätsviertel',
              suburb: 'Vorort',
              'near park': 'In der Nähe des Parks',
              'industrial zone': 'Industriegebiet',
              'old town': 'Altstadt',
            },
          },

          titles: {
            location: 'Standort',
            date: 'Datum',
            neighborhood: 'Nachbarschaft',
            price: 'Preis',
            propertyType: 'Immobilientyp',
            allFilters: 'Alle filter',
            showAll: 'Alle anzeigen',
          },
        },
      },

      apartment_card: {
        apartment_card_head: {
          title: '{{propertyType}} in {{city}}',
        },

        apartment_card_badges: {
          pet_friendly: 'Haustierfreundlich',
          new: 'Neu',
        },

        apartment_card_details: {
          contacts: 'Vermieter per SMS kontaktieren',
          utilities: 'ausgenommen Versorgungsleistungen',
          price: '{{price}}/monat',
          available: 'Jetzt erhältlich',
          not_available: 'Erhältlich ab',
          month: 'monat',
        },

        months: {
          '1': 'Januar',
          '2': 'Februar',
          '3': 'Marsch',
          '4': 'April',
          '5': 'Mai',
          '6': 'Juni',
          '7': 'Juli',
          '8': 'August',
          '9': 'September',
          '10': 'Oktober',
          '11': 'November',
          '12': 'Dezember',
        },
      },

      apartments_map: {
        hide: 'Karte ausblenden',
        expand: 'Expandieren',
        collapse: 'Zusammenbruch',
      },
      errors: {
        notFound: 'Es wurden keine Ergebnisse gefunden!',
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
      catalog_page: {
        catalog_page_head: {
          title: '{{propertyType}} affittare in {{city}}',
          quantity: '{{quantity}} risultati',
          links: {
            recommended: 'Consigliato',
            map: 'Mappa',
          },
        },
        catalog_page_filter: {
          categories: {
            cities: {
              kyiv: 'Kiev',
              lviv: 'Leopoli',
              dnipro: 'Dnipro',
              odesa: 'Odessa',
              kharkiv: 'Kharkiv',
              vinnytsia: 'Vinnytsia',
              ternopil: 'Ternopil',
              'ivano-frankivsk': 'Ivano-Frankivsk',
              zaporizhzhia: 'Zaporizhia',
              chernihiv: 'Černihiv',
            },

            cities_title: {
              kyiv: 'Kiev',
              lviv: 'Leopoli',
              dnipro: 'Dnipro',
              odesa: 'Odessa',
              kharkiv: 'Kharkiv',
              vinnytsia: 'Vinnytsia',
              ternopil: 'Ternopil',
              'ivano-frankivsk': 'Ivano-Frankivsk',
              zaporizhzhia: 'Zaporizhia',
              chernihiv: 'Černihiv',
            },

            property_types: {
              all: 'Tutti gli appartamenti',
              apartment: 'appartamento',
              room: 'camera',
              house: 'casa',
              studio: 'studio',
            },
            price: {
              upTo: 'fino a',
            },
            neighborhoods: {
              downtown: 'Centro',
              riverside: 'Lungofiume',
              'university district': 'Distretto universitario',
              suburb: 'Sobborgo',
              'near park': 'Vicino al parco',
              'industrial zone': 'Zona industriale',
              'old town': 'Città Vecchia',
            },
          },

          titles: {
            location: 'Posizione',
            date: 'Data',
            neighborhood: 'Quartiere',
            price: 'Prezzo',
            propertyType: 'Tipo di proprietà',
            allFilters: 'Tutti i filtri',
            showAll: 'Mostra tutto',
          },
        },
      },

      apartment_card: {
        apartment_card_head: {
          title: '{{propertyType}} nella {{city}}',
        },

        apartment_card_badges: {
          pet_friendly: 'Animali ammessi',
          new: 'Nuova',
        },

        apartment_card_details: {
          contacts: 'Invia un messaggio al proprietario',
          utilities: 'escl. utenze',
          price: '{{price}}/mese',
          available: 'Disponibile ora',
          not_available: 'Disponibile da',
          month: 'mese',
        },

        months: {
          '1': 'Gennaio',
          '2': 'Febbraio',
          '3': 'Marzo',
          '4': 'Aprile',
          '5': 'Maggio',
          '6': 'Giugno',
          '7': 'Luglio',
          '8': 'Agosto',
          '9': 'Settembre',
          '10': 'Ottobre',
          '11': 'Novembre',
          '12': 'Dicembre',
        },
      },

      apartments_map: {
        hide: 'Nascondi mappa',
        expand: 'Espandere',
        collapse: 'Crollo',
      },
      errors: {
        notFound: 'Nessun risultato trovato!',
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
      catalog_page: {
        catalog_page_head: {
          title: '{{propertyType}} louer à {{city}}',
          quantity: '{{quantity}} résultats',
          links: {
            recommended: 'Recommandée',
            map: 'Carte',
          },
        },
        catalog_page_filter: {
          categories: {
            cities: {
              kyiv: 'Kyiv',
              lviv: 'Lviv',
              dnipro: 'Dnipro',
              odesa: 'Odessa',
              kharkiv: 'Kharkiv',
              vinnytsia: 'Vinnytsia',
              ternopil: 'Ternopil',
              'ivano-frankivsk': 'Ivano-Frankivsk',
              zaporizhzhia: 'Zaporizhzhia',
              chernihiv: 'Tchernihiv',
            },

            cities_title: {
              kyiv: 'Kyiv',
              lviv: 'Lviv',
              dnipro: 'Dnipro',
              odesa: 'Odessa',
              kharkiv: 'Kharkiv',
              vinnytsia: 'Vinnytsia',
              ternopil: 'Ternopil',
              'ivano-frankivsk': 'Ivano-Frankivsk',
              zaporizhzhia: 'Zaporizhzhia',
              chernihiv: 'Tchernihiv',
            },

            property_types: {
              all: 'Tous les appartements',
              apartment: 'appartement',
              room: 'chambre',
              house: 'maison',
              studio: 'studio',
            },
            price: {
              upTo: "jusqu'à",
            },
            neighborhoods: {
              downtown: 'Centre-ville',
              riverside: 'Riverside',
              'university district': 'Quartier universitaire',
              suburb: 'Banlieue',
              'near park': 'À proximité du parc',
              'industrial zone': 'Zone industrielle',
              'old town': 'Vieille ville',
            },
          },

          titles: {
            location: 'Emplacement',
            date: 'Date',
            neighborhood: 'Quartier',
            price: 'Prix',
            propertyType: 'Type de propriété',
            allFilters: 'Tous les filtres',
            showAll: 'Afficher tout',
          },
        },
      },

      apartment_card: {
        apartment_card_head: {
          title: '{{propertyType}} dans {{city}}',
        },

        apartment_card_badges: {
          pet_friendly: 'Animaux acceptés',
          new: 'Nouvelle',
        },

        apartment_card_details: {
          contacts: 'SMS au propriétaire',
          utilities: 'exclusions services publics',
          price: '{{price}}/mois',
          available: 'Disponible dès maintenant',
          not_available: 'Disponible chez',
          month: 'mois',
        },

        months: {
          '1': 'Janvier',
          '2': 'Février',
          '3': 'Mars',
          '4': 'Avril',
          '5': 'Peut',
          '6': 'Juin',
          '7': 'Juillet',
          '8': 'Août',
          '9': 'Septembre',
          '10': 'Octobre',
          '11': 'Novembre',
          '12': 'Décembre',
        },
      },

      apartments_map: {
        hide: 'Masquer la carte',
        expand: 'Développer',
        collapse: 'Effondrement',
      },
      errors: {
        notFound: 'Aucun résultat trouvé !',
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
          title: '{{propertyType}} для оренди у {{city}}',
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
              kharkiv: 'Харків',
              vinnytsia: 'Вінниця',
              ternopil: 'Тернопіль',
              'ivano-frankivsk': 'Івано-Франківськ',
              zaporizhzhia: 'Запоріжжя',
              chernihiv: 'Чернігів',
            },
            cities_title: {
              kyiv: 'Києві',
              lviv: 'Львові',
              dnipro: 'Дніпрі',
              odesa: 'Одесі',
              kharkiv: 'Харкові',
              vinnytsia: 'Вінниці',
              ternopil: 'Тернополі',
              'ivano-frankivsk': 'Івано-Франківську',
              zaporizhzhia: 'Запоріжжі',
              chernihiv: 'Чернігові',
            },
            property_types: {
              all: 'Всі апартаменти',
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
              'university district': 'Університетський район',
              suburb: 'Передмістя',
              'near park': 'Біля парку',
              'industrial zone': 'Промислова зона',
              'old town': 'Старе місто',
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
          utilities: 'без комунал.',
          price: '{{price}}/місяць',
          available: 'Доступно зараз',
          not_available: 'Доступно з',
          month: 'місяць',
        },

        months: {
          '1': 'Січня',
          '2': 'Лютого',
          '3': 'Березня',
          '4': 'Квітня',
          '5': 'Травня',
          '6': 'Червня',
          '7': 'Липня',
          '8': 'Серпня',
          '9': 'Вересня',
          '10': 'Жовтня',
          '11': 'Листопада',
          '12': 'Грудня',
        },
      },

      apartments_map: {
        hide: 'Сховати карту',
        expand: 'Розгорнути',
        collapse: 'Згорнути',
      },

      favorites: {
        title: 'Обрані',
        item: '1 обране',
        items: '{{count}} обраних',
      },

      errors: {
        notFound: 'Результатів не знайдено!',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lang') || 'ENG',
  fallbackLng: 'ENG',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
