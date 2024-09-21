export const addressSchema = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: "Autos Direct Fredericksburg",
    image: "https://static.overfuel.com/dealers/autos-direct/image/autos-direct-og.webp",
    "@id": "www.autosdirectva.com",
    url: "www.autosdirectva.com",
    telephone: "(540) 300-4540",
    address: {
        contactType: "Showroom",
        "@type": "PostalAddress",
        streetAddress: "4540 Lafayette Blvd",
        addressLocality: "Fredericksburg",
        addressRegion: "VA",
        postalCode: "22408",
        addressCountry: "US"
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: "38.25726080",
        longitude: "-77.49562700"
    },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Monday",
            opens: "09:00:00",
            closes: "21:00:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Tuesday",
            opens: "09:00:00",
            closes: "21:00:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Wednesday",
            opens: "09:00:00",
            closes: "21:00:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Thursday",
            opens: "09:00:00",
            closes: "21:00:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Friday",
            opens: "09:00:00",
            closes: "21:00:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00:00",
            closes: "21:00:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Sunday",
            opens: "11:00:00",
            closes: "17:00:00"
        }
    ],
    sameAs: [
        "https://www.facebook.com/AutosDirectofFredericksburg/",
        null,
        "https://www.instagram.com/autosdirectva/",
        null
    ],
    department: [
        {
            "@type": "AutoDealer",
            name: "Autos Direct Fredericksburg",
            description: "Autos Direct Fredericksburg is a dealership located at 4540 Lafayette Blvd, Fredericksburg, VA 22408.",
            url: "https://undefined",
            image: "https://static.overfuel.com/dealers/autos-direct/image/autos-direct-og.webp",
            telephone: "(540) 300-4540",
            address: {
                "@type": "PostalAddress",
                streetAddress: "4540 Lafayette Blvd",
                addressLocality: "Fredericksburg",
                addressRegion: "VA",
                postalCode: "22408",
                addressCountry: "USA"
            },
            location: {
                "@type": "Place",
                geo: {
                    "@type": "GeoCoordinates",
                    latitude: "38.25726080",
                    longitude: "-77.49562700"
                }
            }
        },
        {
            "@type": "AutoDealer",
            name: "Autos Direct Manassas",
            description: "Autos Direct Manassas is a dealership located at 9075 Euclid Ave, Manassas, VA 20110.",
            url: "https://undefined",
            image: "https://static.overfuel.com/dealers/autos-direct/image/autos-direct-og.webp",
            telephone: "(540) 300-4540",
            address: {
                "@type": "PostalAddress",
                streetAddress: "9075 Euclid Ave",
                addressLocality: "Manassas",
                addressRegion: "VA",
                postalCode: "20110",
                addressCountry: "USA"
            },
            location: {
                "@type": "Place",
                geo: {
                    "@type": "GeoCoordinates",
                    latitude: "38.75926010",
                    longitude: "-77.45344440"
                }
            }
        }
    ]
};

