// Wedding Website Configuration
// Update these values to customize your website

export const weddingConfig = {
  // Basic Information
  names: {
    partner1: "Ana",
    partner2: "João",
    surname1: "Dias",
    surname2: "Trevizan",
  },

  // Wedding Details
  wedding: {
    date: "2025-12-06",
    time: "11:00",
    venue: "Mila Restaurante",
    city: "Coimbra, Portugal",
    registryVenue: "Santa Comba Dão",
    dressCode: "Traje Formal",
  },

  // Contact Information
  contact: {
    email: "wedding@example.com",
    phone: "+351 XXX XXX XXX",
  },

  // Social Media (optional)
  social: {
    instagram: "@yourwedding",
    hashtag: "#DiasTrevizanWedding",
  },

  // Colors (you can customize these to match your invitation)
  colors: {
    primary: "#2c3e50",
    accent: "#e74c3c",
    gold: "#d4af37",
    lightBg: "#f8f9fa",
    white: "#ffffff",
  },

  // Fonts (update with your invitation fonts)
  fonts: {
    primary: "'Playfair Display', serif",
    secondary: "'Inter', sans-serif",
  },
};

// Helper function to get full names
export function getFullNames() {
  return `${weddingConfig.names.partner1} & ${weddingConfig.names.partner2}`;
}

// Helper function to get surnames
export function getSurnames() {
  return `${weddingConfig.names.surname1} & ${weddingConfig.names.surname2}`;
}

// Helper function to format wedding date
export function formatWeddingDate() {
  const date = new Date(weddingConfig.wedding.date);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
