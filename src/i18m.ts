/* eslint-disable max-len */
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

      omePage: {
        regions: 'RE',
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
          titleNoCity: '{{propertyType}} to rent',
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
        'no-favorites': 'You have no favorites!',
        backHome: ' Back home',
      },

      apartment_page: {
        allProperties: 'See all properties',
        country: 'Ukraine',
        description: 'Description',
        less: 'Show less',
        more: 'Show more',
        qa: {
          title: 'How to rent this place',
          howToRent: {
            question: 'I like this place, how do I rent it?',
            answer:
              'You can secure this apartment directly by submitting your application and making the payment through the Apply to Rent button at the top of the page. Once your application is submitted and the payment is processed, the apartment will be reserved exclusively for you. After that, you can contact the landlord to arrange a viewing, discuss details, or clarify any questions about the lease. This way, you have full control over the rental process and ensure the apartment is officially yours before any direct communication.',
          },
          view: {
            question: 'Can I view this property?',
            answer:
              'The listing includes photos and videos of the apartment for a detailed preview. If you would like to see it in person, you should contact the landlord directly to schedule a live viewing at a convenient time.',
          },
          contact: {
            question: 'How do I contact the landlord?',
            answer:
              'At the top of the apartment page, you can find all the landlord’s contact details, including their name, phone number, and email. Use these to get in touch directly for any inquiries or to arrange a viewing.',
          },
          repair: {
            question: 'Who is responsible for maintenance and repairs?',
            answer:
              'Responsibility for maintenance and repairs depends on the apartment and the specific situation. Typically, these matters are discussed and agreed upon with the landlord and are clearly stated in the rental agreement.',
          },
          confirmation: {
            question: 'What happens after the rental confirmation?',
            answer:
              'Once the landlord receives your rental request and confirms it, the apartment will be reserved for you. The landlord will usually arrange a meeting for a live viewing and finalize the lease agreement, ensuring everything is officially documented and agreed upon.',
          },
        },
        guarantees: {
          title: 'Safety Guarantees',
          deposit: {
            question: 'Deposit protected',
            answer:
              'We are here to help! If your landlord doesn’t return your deposit, we will.',
          },
          verified: {
            question: 'Property verified by Anna',
            answer:
              ' This property was personally inspected and verified by our local expert Anna. She checked the apartment’s condition, photos, amenities, and overall compliance with the listing to ensure that everything matches reality.',
          },
          landlord: {
            question: 'Verified landlord',
            answer:
              'The landlord has successfully passed our verification process. We confirm their identity, ownership of the property, and reliability based on previous rental history. You can rent with confidence knowing you’re dealing with a trusted host.',
          },
        },
        nav: {
          video: 'Video',
          floor: ' Floor plan',
          map: 'Map',
        },
        applyToRent: {
          landlordPhoto: 'Landlord photo',
          moveIn: 'Move-in date',
          moveOut: 'Move-out date',
          firstMonth: 'First month’s rent',
          utilities: 'Utilities per month',
          protection: 'Tenant protection',
          total: 'TOTAL',
          applyButton: 'Apply to rent',
          contactButton: 'Text Landlord',
          publishedBy: 'Published by',
          date: 'Choose date',
        },
        specs: {
          bedroom: 'bedroom',
          bedrooms: 'bedrooms',
          bathroom: 'bathroom',
          bathrooms: 'bathrooms',
        },
        features: {
          title: 'What this place offers',
          button: 'Show all 20 amenities',
          wifi: 'Wifi',
          kitchen: 'Equipped kitchen',
          tv: 'TV',
          conditioning: 'Air conditioning',
          workspace: 'Dedicated workplace',
          furnished: 'Fully furnished',
          washing: 'Washing machine',
          heating: 'Central heating',
          bath: 'Bath tube',
          elevator: 'Elevator',
        },
        policies: {
          title: 'Landlord policies',
          rules: 'Living Rules',
          pets: 'Pets:',
          allowed: 'allowed',
          notAllowed: 'not allowed',
          smoking: 'Smoking:',
          outside: 'outside only',
          instruments: 'Musical instruments:',
          negotiable: 'negotiable',
          forCouples: 'Suitable for couples:',
          yes: 'yes',
          no: 'no',
          eligibility: 'Eligibility & Documentation',
          proof: 'Proof of temporary stay required',
          id: 'Valid ID or passport',
          contract:
            'Work contract or university acceptance letter (if applicable)',
          payments: 'Payments',
          paymentMethods: 'Accepted payment methods:',
          methods: 'cash, bank transfer, PayPal',
          utilityBills: 'Utility bills:',
          paidByLandlord: 'paid directly to the landlord',
        },
        cancelation: {
          title: 'Cancellation policy',
          fullRef:
            'Within 15 days of confirmation – Full refund of first month’s rent',
          noRef: 'After 15 days of confirmation – No refund',
          protection: 'The Tenant Protection fee is non-refundable',
          link: 'See our cancellation and early termination policies',
        },
        reviews: {
          title: 'Reviews',
          photoAlt: 'Reviewer photo',
          review_1: {
            name: 'Maria',
            country: 'Ukraine',
            date: '1 week ago',
            text: 'Great place for a 4 month stay! Cozy, clean, and very well located. I would definitely recommend it.',
          },
          review_2: {
            name: 'Peter',
            country: 'Poland',
            date: 'October 2025',
            text: 'Loved my stay here! The apartment is cozy, clean, and close to everything. The host was helpful.',
          },
          review_3: {
            name: 'Sofia',
            country: 'Ukraine',
            date: 'September 2025',
            text: 'A wonderful experience! The apartment had everything I needed and more. Amazing balcony view!',
          },
          review_4: {
            name: 'Max',
            country: 'Germany',
            date: 'October 2024',
            text: 'Very good stay. Nicely decorated and clean. Small issue with Wi-Fi but quickly fixed.',
          },
          review_5: {
            name: 'Julia',
            country: 'Ukraine',
            date: 'April 2024',
            text: 'Absolutely loved it! Perfect location, amenities, and comfort. Felt like home!',
          },
        },
        whatsNearby: {
          title: "What's nearby",
          apartment: 'Your Apartment',
          distance: 'min walk from apartment',
          filters: {
            supermarkets: 'Supermarkets',
            transport: 'Transport',
            gyms: 'Gyms',
            restaurants: 'Restaurants',
            schools: 'Schools/Universities',
            shops: 'Shops',
            bars: 'Bars',
            hospitals: 'Hospitals',
            parks: 'Parks',
            parking: 'Parking Lots',
          },
          mapMarkers: {
            supermarket: 'Supermarket',
            transport: 'Transport stop',
            restaurant: 'Restaurant',
            gym: 'Gym',
            school: 'School',
            shop: 'Shop',
            bar: 'Bar',
            hospital: 'Hospital',
            park: 'Park',
            parking: 'Parking',
          },
        },
      },

      errors: {
        notFound: 'There are no results found!',
        pageNotFound: 'Page not found',
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
          titleNoCity: '{{propertyType}} en alquiler',
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

      apartment_page: {
        allProperties: 'Ver todas las propiedades',
        country: 'Ucrania',
        description: 'Descripción',
        less: 'Mostrar menos',
        more: 'Mostrar más',
        qa: {
          title: 'Cómo alquilar este lugar',
          howToRent: {
            question: 'Me gusta este lugar, ¿cómo lo alquilo?',
            answer:
              'Puede reservar este apartamento directamente enviando su solicitud y realizando el pago a través del botón "Solicitar Alquiler" en la parte superior de la página. Una vez enviada su solicitud y procesado el pago, el apartamento quedará reservado exclusivamente para usted. Después, podrá contactar al propietario para concertar una visita, hablar sobre los detalles o aclarar cualquier duda sobre el contrato de arrendamiento. De esta forma, tendrá control total sobre el proceso de alquiler y se asegurará de que el apartamento sea oficialmente suyo antes de cualquier comunicación directa.',
          },
          view: {
            question: 'Puedo ver esta propiedad?',
            answer:
              'El anuncio incluye fotos y videos del apartamento para una vista previa detallada. Si desea verlo en persona, contacte directamente con el propietario para programar una visita en vivo en un horario conveniente.',
          },
          contact: {
            question: 'Cómo puedo contactar al propietario?',
            answer:
              'En la parte superior de la página del apartamento, encontrará todos los datos de contacto del propietario, incluyendo su nombre, número de teléfono y correo electrónico. Úselos para contactar directamente si tiene alguna consulta o para concertar una visita.',
          },
          repair: {
            question:
              'Quién es responsable del mantenimiento y las reparaciones?',
            answer:
              'La responsabilidad del mantenimiento y las reparaciones depende del apartamento y de la situación específica. Normalmente, estos asuntos se discuten y acuerdan con el propietario y se estipulan claramente en el contrato de alquiler.',
          },
          confirmation: {
            question: 'Qué sucede después de la confirmación del alquiler?',
            answer:
              'Una vez que el propietario reciba y confirme su solicitud de alquiler, el apartamento quedará reservado para usted. Normalmente, el propietario concertará una cita para una visita en directo y formalizará el contrato de arrendamiento, asegurándose de que todo esté documentado y acordado oficialmente.',
          },
        },
        guarantees: {
          title: 'Garantías de seguridad',
          deposit: {
            question: 'Depósito protegido',
            answer:
              'Estamos aquí para ayudarte! Si tu arrendador no te devuelve el depósito, lo haremos.',
          },
          verified: {
            question: 'Propiedad verificada por Anna',
            answer:
              'Esta propiedad fue inspeccionada y verificada personalmente por nuestra experta local, Anna. Ella revisó el estado del apartamento, las fotos, las comodidades y el cumplimiento general de la descripción del anuncio para garantizar que todo coincidiera con la realidad.',
          },
          landlord: {
            question: 'Propietario verificado',
            answer:
              'El propietario ha superado nuestro proceso de verificación. Confirmamos su identidad, titularidad de la propiedad y fiabilidad basándonos en su historial de alquiler. Puede alquilar con la tranquilidad de saber que está tratando con un anfitrión de confianza.',
          },
        },
        nav: {
          video: 'Video',
          floor: 'Plano de planta',
          map: 'Mapa',
        },
        applyToRent: {
          landlordPhoto: 'Foto del propietario',
          moveIn: 'Fecha de mudanza',
          moveOut: 'Fecha de mudanza',
          firstMonth: 'Alquiler del primer mes',
          utilities: 'Servicios públicos por mes',
          protection: 'Protección de los inquilinos',
          total: 'TOTAL',
          applyButton: 'Solicitar alquiler',
          contactButton: 'Texto del propietario',
          publishedBy: 'Publicado por',
          date: 'Elegir',
        },
        specs: {
          bedroom: 'dormitorio',
          bedrooms: 'dormitorios',
          bathroom: 'baño',
          bathrooms: 'baños',
        },
        features: {
          title: 'Lo que ofrece este lugar',
          button: 'Mostrar las 20 comodidades',
          wifi: 'Wifi',
          kitchen: 'Cocina equipada',
          tv: 'TELEVISOR',
          conditioning: 'Aire acondicionado',
          workspace: 'Lugar de trabajo dedicado',
          furnished: 'Totalmente amueblada',
          washing: 'Lavadora',
          heating: 'Calefacción central',
          bath: 'Bañera',
          elevator: 'Ascensor',
        },
        policies: {
          title: 'Políticas de propietarios',
          rules: 'Reglas de vida',
          pets: 'Mascotas:',
          allowed: 'permitida',
          notAllowed: 'no permitido',
          smoking: 'De fumar:',
          outside: 'solo afuera',
          instruments: 'Instrumentos musicales:',
          negotiable: 'negociable',
          forCouples: 'Apta para parejas:',
          yes: 'sí',
          no: 'no',
          eligibility: 'Elegibilidad y documentación',
          proof: 'Se requiere comprobante de estancia temporal',
          id: 'Documento de identidad o pasaporte válido',
          contract:
            'Contrato de trabajo o carta de aceptación universitaria (si aplica)',
          payments: 'Pagos',
          paymentMethods: 'Métodos de pago aceptados:',
          methods: 'efectivo, transferencia bancaria, PayPal',
          utilityBills: 'Facturas de servicios públicos:',
          paidByLandlord: 'pagado directamente al propietario',
        },
        cancelation: {
          title: 'Política de cancelación',
          fullRef:
            'Dentro de los 15 días siguientes a la confirmación: reembolso completo del alquiler del primer mes',
          noRef: 'Después de 15 días de la confirmación – Sin reembolso',
          protection:
            'La tarifa de protección del inquilino no es reembolsable.',
          link: 'Consulte nuestras políticas de cancelación y terminación anticipada',
        },
        reviews: {
          title: 'Reseñas',
          photoAlt: 'Foto del revisor',
          review_1: {
            name: 'María',
            country: 'Ucrania',
            date: 'Hace 1 semana',
            text: '¡Un lugar fantástico para una estancia de 4 meses! Acogedor, limpio y muy bien ubicado. Lo recomiendo sin duda.',
          },
          review_2: {
            name: 'Pedro',
            country: 'Polonia',
            date: 'Octubre de 2025',
            text: 'Loved my stay here! The apartment is cozy, clean, and close to everything. The host was helpful.',
          },
          review_3: {
            name: 'Sofía',
            country: 'Ucrania',
            date: 'Septiembre de 2025',
            text: '¡Una experiencia maravillosa! El apartamento tenía todo lo que necesitaba y más. ¡Increíble vista desde el balcón!',
          },
          review_4: {
            name: 'Máx',
            country: 'Alemania',
            date: 'Octubre de 2024',
            text: 'Muy buena estancia. Bien decorado y limpio. Tuvimos un pequeño problema con el wifi, pero lo solucionaron rápidamente.',
          },
          review_5: {
            name: 'Julia',
            country: 'Ucrania',
            date: 'Abril de 2024',
            text: '¡Me encantó! Ubicación, servicios y comodidad perfectos. ¡Me sentí como en casa!',
          },
        },
        whatsNearby: {
          title: 'Qué hay cerca?',
          apartment: 'Tu apartamento',
          distance: 'minutos a pie del apartamento',
          filters: {
            supermarkets: 'Supermercados',
            transport: 'Transporte',
            gyms: 'Gimnasios',
            restaurants: 'Restaurantes',
            schools: 'Escuelas/Universidades',
            shops: 'Tiendas',
            bars: 'Verja',
            hospitals: 'Hospitales',
            parks: 'Parques',
            parking: 'Estacionamientos',
          },
          mapMarkers: {
            supermarket: 'Supermercado',
            transport: 'Parada de transporte',
            restaurant: 'Restaurante',
            gym: 'Gimnasia',
            school: 'Escuela',
            shop: 'Comercio',
            bar: 'Bar',
            hospital: 'Hospital',
            park: 'Parque',
            parking: 'Aparcamiento',
          },
        },
      },

      favorites: {
        title: 'Favoritas',
        item: '1 favorito',
        items: '{{count}} favoritas',
        'no-favorites': 'No tienes favoritas',
        backHome: 'De vuelta a casa',
      },

      errors: {
        notFound: '¡No se han encontrado resultados!',
        pageNotFound: 'Página no encontrada',
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
          titleNoCity: '{{propertyType}} zu vermieten',
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

      apartment_page: {
        allProperties: 'Alle Objekte anzeigen',
        country: 'Ukraine',
        description: 'Beschreibung',
        less: 'Weniger anzeigen',
        more: 'Mehr anzeigen',
        qa: {
          title: 'Wie kann man diese Unterkunft mieten?',
          howToRent: {
            question: 'Mir gefällt diese Unterkunft, wie kann ich sie mieten?',
            answer:
              'Sie können sich diese Wohnung direkt sichern, indem Sie Ihre Bewerbung einreichen und die Zahlung über den Button „Jetzt bewerben“ oben auf der Seite vornehmen. Sobald Ihre Bewerbung eingegangen und die Zahlung verarbeitet ist, wird die Wohnung exklusiv für Sie reserviert. Anschließend können Sie den Vermieter kontaktieren, um einen Besichtigungstermin zu vereinbaren, Details zu besprechen oder Fragen zum Mietvertrag zu klären. So haben Sie die volle Kontrolle über den Mietprozess und stellen sicher, dass die Wohnung offiziell Ihnen gehört, bevor Sie direkt mit dem Vermieter in Kontakt treten.',
          },
          view: {
            question: 'Kann ich diese Immobilie besichtigen?',
            answer:
              'Die Anzeige enthält Fotos und Videos der Wohnung für einen detaillierten Einblick. Wenn Sie die Wohnung persönlich besichtigen möchten, kontaktieren Sie bitte direkt den Vermieter, um einen Besichtigungstermin zu vereinbaren.',
          },
          contact: {
            question: 'Wie kann ich den Vermieter kontaktieren?',
            answer:
              'Ganz oben auf der Seite der Wohnung finden Sie alle Kontaktdaten des Vermieters, einschließlich Name, Telefonnummer und E-Mail-Adresse. Nutzen Sie diese, um direkt Kontakt aufzunehmen, falls Sie Fragen haben oder einen Besichtigungstermin vereinbaren möchten.',
          },
          repair: {
            question: 'Wer ist für Wartung und Reparaturen zuständig?',
            answer:
              'Die Zuständigkeit für Instandhaltung und Reparaturen hängt von der jeweiligen Wohnung und den individuellen Gegebenheiten ab. Üblicherweise werden diese Angelegenheiten mit dem Vermieter besprochen und vereinbart und im Mietvertrag klar festgehalten.',
          },
          confirmation: {
            question: 'Was geschieht nach der Mietbestätigung?',
            answer:
              'Sobald der Vermieter Ihre Mietanfrage erhalten und bestätigt hat, wird die Wohnung für Sie reserviert. In der Regel vereinbart der Vermieter einen Besichtigungstermin und finalisiert den Mietvertrag, um sicherzustellen, dass alles offiziell dokumentiert und vereinbart ist.',
          },
        },
        guarantees: {
          title: 'Sicherheitsgarantien',
          deposit: {
            question: 'Einlagenschutz',
            answer:
              'Wir helfen Ihnen gerne! Wenn Ihr Vermieter Ihre Kaution nicht zurückzahlt, übernehmen wir das.',
          },
          verified: {
            question: 'Objekt von Anna geprüft',
            answer:
              'Diese Immobilie wurde von unserer lokalen Expertin Anna persönlich besichtigt und verifiziert. Sie überprüfte den Zustand der Wohnung, die Fotos, die Ausstattung und die Übereinstimmung mit der Anzeige, um sicherzustellen, dass alles der Realität entspricht.',
          },
          landlord: {
            question: 'Verifizierter Vermieter',
            answer:
              'Der Vermieter hat unseren Verifizierungsprozess erfolgreich durchlaufen. Wir bestätigen seine Identität, das Eigentum an der Immobilie und seine Zuverlässigkeit anhand seiner bisherigen Mietgeschichte. Sie können die Wohnung daher beruhigt mieten, da Sie es mit einem vertrauenswürdigen Gastgeber zu tun haben.',
          },
        },
        nav: {
          video: 'Video',
          floor: 'Grundriss',
          map: 'Karte',
        },
        applyToRent: {
          landlordPhoto: 'Vermieterfoto',
          moveIn: 'Einzugsdatum',
          moveOut: 'Auszugsdatum',
          firstMonth: 'Miete für den ersten Monat',
          utilities: 'Nebenkosten pro Monat',
          protection: 'Mieterschutz',
          total: 'GESAMT',
          applyButton: 'Bewerben Sie sich um eine Mietwohnung',
          contactButton: 'Text Vermieter',
          publishedBy: 'Herausgegeben von',
          date: 'Wählen',
        },
        specs: {
          bedroom: 'schlafzimmer',
          bedrooms: 'schlafzimmer',
          bathroom: 'badezimmer',
          bathrooms: 'badezimmer',
        },
        features: {
          title: 'Was dieser Ort bietet',
          button: 'Alle 20 Ausstattungsmerkmale anzeigen',
          wifi: 'W-lan',
          kitchen: 'Ausgestattete Küche',
          tv: 'Fernseher',
          conditioning: 'Klimaanlage',
          workspace: 'Eigenständiger Arbeitsplatz',
          furnished: 'Vollständig möbliert',
          washing: 'Waschmaschine',
          heating: 'Zentralheizung',
          bath: 'Badewanne',
          elevator: 'Aufzug',
        },
        policies: {
          title: 'Richtlinien des Vermieters',
          rules: 'Lebensregeln',
          pets: 'Haustiere:',
          allowed: 'erlaubt',
          notAllowed: 'nicht erlaubt',
          smoking: 'Rauchen:',
          outside: 'nur im freien',
          instruments: 'Musikinstrumente:',
          negotiable: 'verhandelbar',
          forCouples: 'Geeignet für Paare:',
          yes: 'ja',
          no: 'nein',
          eligibility: 'Teilnahmeberechtigung und Dokumentation',
          proof: 'Nachweis des vorübergehenden Aufenthalts erforderlich',
          id: 'Gültiger Ausweis oder Reisepass',
          contract:
            'Arbeitsvertrag oder Zulassungsbescheid der Universität (falls zutreffend)',
          payments: 'Zahlungen',
          paymentMethods: 'Akzeptierte Zahlungsmethoden:',
          methods: 'Barzahlung, Banküberweisung, PayPal',
          utilityBills: 'Stromrechnungen:',
          paidByLandlord: 'direkt an den Vermieter gezahlt',
        },
        cancelation: {
          title: 'Stornierungsbedingungen',
          fullRef:
            'Innerhalb von 15 Tagen nach Bestätigung – Volle Rückerstattung der ersten Monatsmiete.',
          noRef: 'Nach 15 Tagen ab Bestätigung – Keine Rückerstattung',
          protection:
            'Die Gebühr für den Mieterschutz ist nicht erstattungsfähig.',
          link: 'Unsere Stornierungs- und Kündigungsbedingungen finden Sie hier.',
        },
        reviews: {
          title: 'Rezensionen',
          photoAlt: 'Foto des Rezensenten',
          review_1: {
            name: 'Maria',
            country: 'Ukraine',
            date: 'vor 1 Woche',
            text: 'Ein toller Ort für einen viermonatigen Aufenthalt! Gemütlich, sauber und sehr gut gelegen. Ich kann ihn absolut empfehlen.',
          },
          review_2: {
            name: 'Peter',
            country: 'Polen',
            date: 'Oktober 2025',
            text: 'Ich habe meinen Aufenthalt hier sehr genossen! Die Wohnung ist gemütlich, sauber und zentral gelegen. Der Gastgeber war sehr hilfsbereit.',
          },
          review_3: {
            name: 'Sofia',
            country: 'Ukraine',
            date: 'September 2025',
            text: 'Ein wunderbares Erlebnis! Die Wohnung hatte alles, was ich brauchte und noch mehr. Fantastischer Ausblick vom Balkon!',
          },
          review_4: {
            name: 'Max',
            country: 'Deutschland',
            date: 'Oktober 2024',
            text: 'Sehr guter Aufenthalt. Schön eingerichtet und sauber. Es gab ein kleines Problem mit dem WLAN, das aber schnell behoben wurde.',
          },
          review_5: {
            name: 'Julia',
            country: 'Ukraine',
            date: 'April 2024',
            text: 'Ich war absolut begeistert! Perfekte Lage, Ausstattung und Komfort. Ich habe mich wie zu Hause gefühlt!',
          },
        },
        whatsNearby: {
          title: 'Was befindet sich in der Nähe',
          apartment: 'Ihre Wohnung',
          distance: 'minuten Fußweg von der Wohnung entfernt',
          filters: {
            supermarkets: 'Supermärkte',
            transport: 'Transport',
            gyms: 'Fitnessstudios',
            restaurants: 'Restaurants',
            schools: 'Schulen/Universitäten',
            shops: 'Geschäfte',
            bars: 'Barren',
            hospitals: 'Krankenhäuser',
            parks: 'Parks',
            parking: 'Parkplätze',
          },
          mapMarkers: {
            supermarket: 'Supermarkt',
            transport: 'Haltestelle',
            restaurant: 'Restaurant',
            gym: 'Fitnessstudio',
            school: 'Schule',
            shop: 'Geschäft',
            bar: 'Bar',
            hospital: 'Krankenhaus',
            park: 'Park',
            parking: 'Parken',
          },
        },
      },

      favorites: {
        title: 'Favoriten',
        item: '1 favoritin',
        items: '{{count}} favoriten',
        'no-favorites': 'Es sind keine Favoriten gespeichert',
        backHome: 'Zurück nach Hause',
      },

      errors: {
        notFound: 'Es wurden keine Ergebnisse gefunden!',
        pageNotFound: 'Seite nicht gefunden',
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
          titleNoCity: '{{propertyType}} in affitto',
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

      apartment_page: {
        allProperties: 'Vedi tutte le proprietà',
        country: 'Ucraina',
        description: 'Descrizione',
        less: 'Mostra meno',
        more: 'Mostra altro',
        qa: {
          title: 'Come affittare questo posto',
          howToRent: {
            question: 'Mi piace questo posto, come posso affittarlo?',
            answer:
              "Puoi assicurarti questo appartamento direttamente inviando la tua candidatura ed effettuando il pagamento tramite il pulsante 'Richiedi Affitto' in cima alla pagina. Una volta inviata la candidatura ed elaborato il pagamento, l'appartamento sarà riservato esclusivamente a te. Successivamente, potrai contattare il proprietario per organizzare una visita, discutere i dettagli o chiarire qualsiasi domanda sul contratto di locazione. In questo modo, avrai il pieno controllo del processo di affitto e ti assicurerai che l'appartamento sia ufficialmente tuo prima di qualsiasi comunicazione diretta.",
          },
          view: {
            question: 'Posso vedere questa proprietà?',
            answer:
              "L'annuncio include foto e video dell'appartamento per un'anteprima dettagliata. Se desiderate vederlo di persona, contattate direttamente il proprietario per fissare un appuntamento per una visita dal vivo in un orario a voi più comodo.",
          },
          contact: {
            question: 'Come posso contattare il proprietario?',
            answer:
              "Nella parte superiore della pagina dell'appartamento, puoi trovare tutti i recapiti del proprietario, inclusi nome, numero di telefono ed email. Utilizzali per contattarlo direttamente per qualsiasi richiesta o per organizzare una visita.",
          },
          repair: {
            question:
              'Chi è responsabile della manutenzione e delle riparazioni?',
            answer:
              "La responsabilità per la manutenzione e le riparazioni dipende dall'appartamento e dalla situazione specifica. In genere, queste questioni vengono discusse e concordate con il proprietario e sono chiaramente indicate nel contratto di locazione.",
          },
          confirmation: {
            question: 'Cosa succede dopo la conferma del noleggio?',
            answer:
              "Una volta che il proprietario riceverà la tua richiesta di affitto e la confermerà, l'appartamento ti verrà riservato. Di solito, il proprietario organizzerà un incontro per una visita dal vivo e finalizzerà il contratto di locazione, assicurandosi che tutto sia ufficialmente documentato e concordato.",
          },
        },
        guarantees: {
          title: 'Garanzie di sicurezza',
          deposit: {
            question: 'Deposito protetto',
            answer:
              'Siamo qui per aiutarti! Se il tuo padrone di casa non ti restituisce la caparra, lo faremo noi.',
          },
          verified: {
            question: 'Proprietà verificata da Anna',
            answer:
              "Questa proprietà è stata ispezionata e verificata personalmente dalla nostra esperta locale Anna. Ha verificato le condizioni dell'appartamento, le foto, i servizi e la conformità generale con l'annuncio per assicurarsi che tutto corrispondesse alla realtà.",
          },
          landlord: {
            question: 'Proprietario verificato',
            answer:
              "Il proprietario ha superato con successo la nostra procedura di verifica. Confermiamo la sua identità, la proprietà dell'immobile e l'affidabilità in base alla cronologia degli affitti precedenti. Puoi affittare con tranquillità, sapendo di avere a che fare con un host affidabile.",
          },
        },
        nav: {
          video: 'Video',
          floor: 'Pianta del piano',
          map: 'Mappa',
        },
        applyToRent: {
          landlordPhoto: 'Foto del proprietario',
          moveIn: 'Data di trasloco',
          moveOut: 'Data di trasloco',
          firstMonth: 'Primo mese di affitto',
          utilities: 'Utenze al mese',
          protection: 'Protezione degli inquilini',
          total: 'TOTALE',
          applyButton: "Richiedi l'affitto",
          contactButton: 'Invia un messaggio al proprietario',
          publishedBy: 'Pubblicato da',
          date: 'Scegliere',
        },
        specs: {
          bedroom: 'camera da letto',
          bedrooms: 'camere da letto',
          bathroom: 'bagno',
          bathrooms: 'bagni',
        },
        features: {
          title: 'Cosa offre questo posto',
          button: 'Mostra tutti i 20 servizi',
          wifi: 'Wifi',
          kitchen: 'Cucina attrezzata',
          tv: 'TV',
          conditioning: 'Aria condizionata',
          workspace: 'Posto di lavoro dedicato',
          furnished: 'Completamente arredato',
          washing: 'Lavatrice',
          heating: 'Riscaldamento centralizzato',
          bath: 'Vasca da bagno',
          elevator: 'Ascensore',
        },
        policies: {
          title: 'Politiche del locatore',
          rules: 'Regole di vita',
          pets: 'Animali domestici:',
          allowed: 'permessa',
          notAllowed: 'non consentito',
          smoking: 'Fumo:',
          outside: "solo all'esterno",
          instruments: 'Strumenti musicali:',
          negotiable: 'negoziabile',
          forCouples: 'Adatto alle coppie:',
          yes: 'sì',
          no: 'no',
          eligibility: 'Idoneità e documentazione',
          proof: 'È richiesta la prova del soggiorno temporaneo',
          id: "Documento d'identità o passaporto valido",
          contract:
            'Contratto di lavoro o lettera di accettazione universitaria (se applicabile)',
          payments: 'Pagamenti',
          paymentMethods: 'Metodi di pagamento accettati:',
          methods: 'contanti, bonifico bancario, PayPal',
          utilityBills: 'Bollette delle utenze:',
          paidByLandlord: 'aiuto direttamente al proprietario',
        },
        cancelation: {
          title: 'Politica di cancellazione',
          fullRef:
            'Entro 15 giorni dalla conferma – Rimborso completo del primo mese di affitto',
          noRef: 'Dopo 15 giorni dalla conferma – Nessun rimborso',
          protection:
            "La quota di protezione dell'inquilino non è rimborsabile",
          link: 'Consulta le nostre politiche di cancellazione e risoluzione anticipata',
        },
        reviews: {
          title: 'Recensioni',
          photoAlt: 'Foto del revisore',
          review_1: {
            name: 'Maria',
            country: 'Ucraina',
            date: '1 settimana fa',
            text: 'Ottimo posto per un soggiorno di 4 mesi! Accogliente, pulito e in ottima posizione. Lo consiglio vivamente.',
          },
          review_2: {
            name: 'Pietro',
            country: 'Polonia',
            date: 'Ottobre 2025',
            text: "Ho adorato il mio soggiorno qui! L'appartamento è accogliente, pulito e vicino a tutto. L'host è stato molto disponibile.",
          },
          review_3: {
            name: 'Sofia',
            country: 'Ucraina',
            date: 'Settembre 2025',
            text: "Un'esperienza meravigliosa! L'appartamento aveva tutto ciò di cui avevo bisogno e anche di più. Vista spettacolare dal balcone!",
          },
          review_4: {
            name: 'Massimo',
            country: 'Germania',
            date: 'Ottobre 2024',
            text: 'Ottimo soggiorno. Ben arredato e pulito. Piccolo problema con il Wi-Fi, risolto subito.',
          },
          review_5: {
            name: 'Giulia',
            country: 'Ucraina',
            date: 'Aprile 2024',
            text: 'Mi è piaciuto tantissimo! Posizione perfetta, servizi e comfort impeccabili. Mi sono sentito come a casa!',
          },
        },
        whatsNearby: {
          title: "Cosa c'è nelle vicinanze",
          apartment: 'Il tuo appartamento',
          distance: "minuti a piedi dall'appartamento",
          filters: {
            supermarkets: 'Supermercati',
            transport: 'Trasporto',
            gyms: 'Palestre',
            restaurants: 'Ristoranti',
            schools: 'Scuole/Università',
            shops: 'Negozi',
            bars: 'Barre',
            hospitals: 'Ospedali',
            parks: 'Parchi',
            parking: 'Parcheggi',
          },
          mapMarkers: {
            supermarket: 'Supermercato',
            transport: 'Fermata del trasporto',
            restaurant: 'Ristorante',
            gym: 'Palestra',
            school: 'Scuola',
            shop: 'Negozio',
            bar: 'Sbarra',
            hospital: 'Ospedale',
            park: 'Parco',
            parking: 'Parcheggio',
          },
        },
      },

      favorites: {
        title: 'Preferite',
        item: '1 preferita',
        items: '{{count}} preferite',
        'no-favorites': 'Non hai preferiti',
        backHome: 'Di ritorno a casa',
      },

      errors: {
        notFound: 'Nessun risultato trovato!',
        pageNotFound: 'Pagina non trovata',
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
          titleNoCity: '{{propertyType}} à louer',
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

      apartment_page: {
        allProperties: 'Voir toutes les propriétés',
        country: 'Ukraine',
        description: 'Description',
        less: 'Afficher moins',
        more: 'Afficher plus',
        qa: {
          title: 'Comment louer cet endroit',
          howToRent: {
            question: "J'aime bien cet endroit, comment puis-je le louer ?",
            answer:
              "Vous pouvez réserver cet appartement directement en soumettant votre candidature et en effectuant le paiement via le bouton « Demander une location » en haut de la page. Une fois votre candidature soumise et le paiement traité, l'appartement vous sera réservé exclusivement. Vous pourrez ensuite contacter le propriétaire pour organiser une visite, discuter des détails ou obtenir des précisions concernant le bail. Ainsi, vous gardez le contrôle total du processus de location et vous vous assurez que l'appartement vous est bien réservé avant toute communication directe.",
          },
          view: {
            question: 'Puis-je visiter ce bien ?',
            answer:
              "L'annonce comprend des photos et des vidéos de l'appartement pour un aperçu détaillé. Si vous souhaitez le visiter, veuillez contacter directement le propriétaire pour convenir d'un rendez-vous à un moment qui vous convient.",
          },
          contact: {
            question: 'Comment puis-je contacter le propriétaire ?',
            answer:
              "En haut de la page de l'appartement, vous trouverez toutes les coordonnées du propriétaire : son nom, son numéro de téléphone et son adresse e-mail. N'hésitez pas à les utiliser pour toute question ou pour organiser une visite.",
          },
          repair: {
            question: "Qui est responsable de l'entretien et des réparations ?",
            answer:
              "La responsabilité de l'entretien et des réparations dépend de l'appartement et de la situation particulière. Généralement, ces points sont discutés et convenus avec le propriétaire et sont clairement stipulés dans le contrat de location.",
          },
          confirmation: {
            question:
              'Que se passe-t-il après la confirmation de la location ?',
            answer:
              "Une fois que le propriétaire aura reçu et confirmé votre demande de location, l'appartement sera réservé. Il organisera généralement une visite et finalisera le bail, s'assurant ainsi que tout soit officiellement formalisé et accepté.",
          },
        },
        guarantees: {
          title: 'Garanties de sécurité',
          deposit: {
            question: 'Dépôt protégé',
            answer:
              'Nous sommes là pour vous aider ! Si votre propriétaire ne vous restitue pas votre caution, nous le ferons.',
          },
          verified: {
            question: 'Propriété vérifiée par Anna',
            answer:
              "Ce bien a été personnellement inspecté et vérifié par notre experte locale, Anna. Elle a contrôlé l'état de l'appartement, les photos, les équipements et la conformité générale avec la description afin de garantir que tout corresponde à la réalité.",
          },
          landlord: {
            question: 'Propriétaire vérifié',
            answer:
              'Le propriétaire a passé avec succès notre processus de vérification. Nous confirmons son identité, la propriété du bien et sa fiabilité en nous basant sur son historique de location. Vous pouvez louer en toute confiance, sachant que vous avez affaire à un hôte de confiance.',
          },
        },
        nav: {
          video: 'Vidéo',
          floor: "Plan d'étage",
          map: 'Carte',
        },
        applyToRent: {
          landlordPhoto: 'Photo du propriétaire',
          moveIn: "Date d'arrivée",
          moveOut: 'Date de départ',
          firstMonth: 'Loyer du premier mois',
          utilities: 'Charges mensuelles',
          protection: 'Protection des locataires',
          total: 'TOTALE',
          applyButton: 'Demande de location',
          contactButton: 'Propriétaire par SMS',
          publishedBy: 'Publié par',
          date: 'Choisir',
        },
        specs: {
          bedroom: 'chambre à coucher',
          bedrooms: 'chambres',
          bathroom: 'salle de bain',
          bathrooms: 'salles de bains',
        },
        features: {
          title: 'Ce que cet endroit offre',
          button: 'Afficher les 20 équipements',
          wifi: 'Wi-Fi',
          kitchen: 'Cuisine équipée',
          tv: 'TV',
          conditioning: 'Climatisation',
          workspace: 'Espace de travail dédié',
          furnished: 'Entièrement meublé',
          washing: 'Machine à laver',
          heating: 'Chauffage central',
          bath: 'Baignoire',
          elevator: 'Ascenseur',
        },
        policies: {
          title: 'Politiques des propriétaires',
          rules: 'Règles de vie',
          pets: 'Animaux de compagnie :',
          allowed: 'permise',
          notAllowed: 'non autorisé',
          smoking: 'Fumeuse:',
          outside: 'extérieur seulement',
          instruments: 'Instruments de musique :',
          negotiable: 'négociable',
          forCouples: 'Convient aux couples :',
          yes: 'oui',
          no: 'non',
          eligibility: 'Admissibilité et documentation',
          proof: 'Preuve de séjour temporaire requise',
          id: "Pièce d'identité ou passeport valide",
          contract:
            "contrat de travail ou lettre d'admission à l'université (le cas échéant)",
          payments: 'Paiements',
          paymentMethods: 'Modes de paiement acceptés :',
          methods: 'espèces, virement bancaire, PayPal',
          utilityBills: 'Factures de services publics :',
          paidByLandlord: 'payé directement au propriétaire',
        },
        cancelation: {
          title: "Politique d'annulation",
          fullRef:
            'Dans les 15 jours suivant la confirmation – Remboursement intégral du premier mois de loyer',
          noRef: 'Après 15 jours de confirmation – Aucun remboursement',
          protection:
            'Les frais de protection des locataires ne sont pas remboursables.',
          link: "Consultez nos politiques d'annulation et de résiliation anticipée.",
        },
        reviews: {
          title: 'Avis',
          photoAlt: 'Photo du critique',
          review_1: {
            name: 'Marie',
            country: 'Ukraine',
            date: 'Il y a une semaine',
            text: 'Endroit idéal pour un séjour de 4 mois ! Confortable, propre et très bien situé. Je le recommande sans hésiter.',
          },
          review_2: {
            name: 'Pierre',
            country: 'Pologne',
            date: 'Octobre 2025',
            text: "J'ai adoré mon séjour ! L'appartement est confortable, propre et proche de tout. L'hôte était très serviable.",
          },
          review_3: {
            name: 'Sofia',
            country: 'Ukraine',
            date: 'Septembre 2025',
            text: "Une expérience formidable ! L'appartement avait tout ce dont j'avais besoin, et même plus. Vue imprenable depuis le balcon !",
          },
          review_4: {
            name: 'Max',
            country: 'Allemagne',
            date: 'Octobre 2024',
            text: 'Séjour très agréable. Joliment décoré et propre. Petit problème avec le Wi-Fi, rapidement résolu.',
          },
          review_5: {
            name: 'Julia',
            country: 'Ukraine',
            date: 'Avril 2024',
            text: "J'ai adoré ! Emplacement idéal, équipements et confort parfaits. Je me suis sentie comme chez moi !",
          },
        },
        whatsNearby: {
          title: "Qu'y a-t-il à proximité",
          apartment: 'Votre appartement',
          distance: "à quelques minutes à pied de l'appartement",
          filters: {
            supermarkets: 'Supermarchés',
            transport: 'Transport',
            gyms: 'Salles de sport',
            restaurants: 'Restaurants',
            schools: 'Écoles/Universités',
            shops: 'Magasins',
            bars: 'Bars',
            hospitals: 'Hôpitaux',
            parks: 'Parcs',
            parking: 'Parkings',
          },
          mapMarkers: {
            supermarket: 'Supermarché',
            transport: 'Arrêt de transport',
            restaurant: 'Restaurant',
            gym: 'Salle de sport',
            school: 'École',
            shop: 'Boutique',
            bar: 'Bar',
            hospital: 'Hôpital',
            park: 'Parc',
            parking: 'Parking',
          },
        },
      },

      favorites: {
        title: 'Favoris',
        item: '1 préférée',
        items: '{{count}} favoris',
        'no-favorites': "Vous n'avez pas de favoris",
        backHome: 'Retour à la maison',
      },

      errors: {
        notFound: 'Aucun résultat trouvé !',
        pageNotFound: 'Page introuvable',
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
          titleNoCity: '{{propertyType}} в оренду',
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

      apartment_page: {
        allProperties: "Переглянути всі об'єкти нерухомості",
        country: 'Україна',
        description: 'Опис',
        less: 'Показати менше',
        more: 'Показати більше',
        qa: {
          title: 'Як орендувати це місце',
          howToRent: {
            question: 'Мені подобається це місце, як мені його орендувати?',
            answer:
              'Ви можете забронювати цю квартиру безпосередньо, подавши заявку та здійснивши оплату за допомогою кнопки «Подати заявку на оренду» у верхній частині сторінки. Після подання заявки та обробки оплати квартира буде зарезервована виключно для вас. Після цього ви можете зв’язатися з орендодавцем, щоб домовитися про перегляд, обговорити деталі або уточнити будь-які питання щодо договору оренди. Таким чином, ви маєте повний контроль над процесом оренди та переконаєтеся, що квартира офіційно ваша, перш ніж ви будете безпосередньо спілкуватися.',
          },
          view: {
            question: 'Чи можу я оглянути цю нерухомість?',
            answer:
              "Оголошення містить фотографії та відео квартири для детального перегляду. Якщо ви хочете побачити її особисто, вам слід зв'язатися безпосередньо з орендодавцем, щоб домовитися про перегляд у зручний для вас час.",
          },
          contact: {
            question: "Як мені зв'язатися з орендодавцем?",
            answer:
              "У верхній частині сторінки квартири ви можете знайти всі контактні дані орендодавця, включаючи його ім'я, номер телефону та електронну пошту. Використовуйте їх, щоб зв'язатися безпосередньо з будь-якими питаннями або домовитися про перегляд.",
          },
          repair: {
            question: 'Хто відповідає за технічне обслуговування та ремонт?',
            answer:
              'Відповідальність за технічне обслуговування та ремонт залежить від квартири та конкретної ситуації. Зазвичай ці питання обговорюються та узгоджуються з орендодавцем і чітко викладаються в договорі оренди.',
          },
          confirmation: {
            question: 'Що відбувається після підтвердження оренди?',
            answer:
              'Щойно орендодавець отримає ваш запит на оренду та підтвердить його, квартира буде зарезервована для вас. Зазвичай орендодавець домовляється про зустріч для перегляду та остаточно укладає договір оренди, забезпечуючи офіційне оформлення та узгодження всіх деталей.',
          },
        },
        guarantees: {
          title: 'Гарантії безпеки',
          deposit: {
            question: 'Захищений депозит',
            answer:
              'Ми тут, щоб допомогти! Якщо ваш орендодавець не поверне ваш депозит, ми це зробимо.',
          },
          verified: {
            question: 'Власність перевірена Анною',
            answer:
              'Цю нерухомість особисто оглянула та підтвердила наша місцева експертка Анна. Вона перевірила стан квартири, фотографії, зручності та загальну відповідність опису, щоб переконатися, що все відповідає дійсності.',
          },
          landlord: {
            question: 'Перевірений орендодавець',
            answer:
              'Орендодавець успішно пройшов наш процес перевірки. Ми підтверджуємо його особу, право власності на нерухомість та надійність на основі попередньої історії оренди. Ви можете орендувати житло з упевненістю, знаючи, що маєте справу з перевіреним господарем.',
          },
        },
        nav: {
          video: 'Відео',
          floor: 'План поверху',
          map: 'Карта',
        },
        applyToRent: {
          landlordPhoto: 'Фото орендодавця',
          moveIn: 'Дата заселення',
          moveOut: 'Дата виїзду',
          firstMonth: 'Оренда за перший місяць',
          utilities: 'Комунальні послуги на місяць',
          protection: 'Захист орендарів',
          total: 'РАЗОМ',
          applyButton: 'Подати заявку на оренду',
          contactButton: "Зв'язатись з орендодавцем",
          publishedBy: 'Опубліковано',
          date: 'Вибрати дату',
        },
        specs: {
          bedroom: 'спальня',
          bedrooms: 'спальні',
          bathroom: 'ванна кімната',
          bathrooms: 'ванні кімнати',
        },
        features: {
          title: 'Що пропонує це місце',
          button: 'Показати всі 20 зручностей',
          wifi: 'Wi-Fi',
          kitchen: 'Обладнана кухня',
          tv: 'Телевізор',
          conditioning: 'Кондиціонування повітря',
          workspace: 'Виділене робоче місце',
          furnished: 'Повністю мебльований',
          washing: 'Пральна машина',
          heating: 'Центральне опалення',
          bath: 'Ванна',
          elevator: 'Ліфт',
        },
        policies: {
          title: 'Політика орендодавця',
          rules: 'Правила проживання',
          pets: 'Домашні тварини:',
          allowed: 'дозволено',
          notAllowed: 'не дозволено',
          smoking: 'Куріння:',
          outside: 'тільки зовні',
          instruments: 'Музичні інструменти:',
          negotiable: 'по домовленості',
          forCouples: 'Підходить для пар:',
          yes: 'так',
          no: 'ні',
          eligibility: 'Відповідність вимогам та документація',
          proof: 'Потрібне підтвердження тимчасового перебування',
          id: 'Дійсне посвідчення особи або паспорт',
          contract:
            'Трудовий договір або лист про зарахування до університету (якщо є)',
          payments: 'Платежі',
          paymentMethods: 'Прийняті способи оплати:',
          methods: 'готівка, банківський переказ, PayPal',
          utilityBills: 'Комунальні рахунки:',
          paidByLandlord: 'сплачувати безпосередньо орендодавцю',
        },
        cancelation: {
          title: 'Політика скасування',
          fullRef:
            'Протягом 15 днів після підтвердження – повне відшкодування орендної плати за перший місяць',
          noRef:
            'Після 15 днів підтвердження – повернення коштів не здійснюється',
          protection: 'Плата за захист орендарів не підлягає поверненню',
          link: 'Ознайомтеся з нашими правилами скасування та дострокового розірвання',
        },
        reviews: {
          title: 'Відгуки',
          photoAlt: 'Фото рецензента',
          review_1: {
            name: 'Марія',
            country: 'Україна',
            date: '1 тиждень тому',
            text: 'Чудове місце для 4-місячного перебування! Затишне, чисте та дуже зручне розташування. Я б точно рекомендував його.',
          },
          review_2: {
            name: 'Петро',
            country: 'Польща',
            date: 'Жовтень 2025 року',
            text: 'Мені дуже сподобалося моє перебування тут! Квартира затишна, чиста та поруч усе необхідне. Господар був привітним.',
          },
          review_3: {
            name: 'Софія',
            country: 'Україна',
            date: 'Вересень 2025 року',
            text: 'Чудовий досвід! У квартирі було все, що мені було потрібно, і навіть більше. Неймовірний краєвид з балкону!',
          },
          review_4: {
            name: 'Макс',
            country: 'Німеччина',
            date: 'Жовтень 2024 року',
            text: 'Дуже гарне перебування. Гарно оформлено та чисто. Невелика проблема з Wi-Fi, але швидко виправлена.',
          },
          review_5: {
            name: 'Юлія',
            country: 'Україна',
            date: 'Квітень 2024 року',
            text: 'Дуже сподобалося! Ідеальне розташування, зручності та комфорт. Відчував себе як вдома!',
          },
        },
        whatsNearby: {
          title: 'Що поруч',
          apartment: 'Ваша квартира',
          distance: 'хв пішки від квартири',
          filters: {
            supermarkets: 'Супермаркети',
            transport: 'Транспорт',
            gyms: 'Спортзали',
            restaurants: 'Ресторани',
            schools: 'Школи/Університети',
            shops: 'Магазини',
            bars: 'Бари',
            hospitals: 'Лікарні',
            parks: 'Парки',
            parking: 'Паркінги',
          },
          mapMarkers: {
            supermarket: 'Супермаркет',
            transport: 'Зупинка транспорту',
            restaurant: 'Ресторан',
            gym: 'Тренажерний зал',
            school: 'Школа',
            shop: 'Магазин',
            bar: 'Бар',
            hospital: 'Лікарня',
            park: 'Парк',
            parking: 'Паркінг',
          },
        },
      },

      favorites: {
        title: 'Обрані',
        item: '1 обране',
        items: '{{count}} обраних',
        'no-favorites': 'У вас немає обраних',
        backHome: 'На головну',
      },

      errors: {
        notFound: 'Результатів не знайдено!',
        pageNotFound: 'Сторінку не знайдено',
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
