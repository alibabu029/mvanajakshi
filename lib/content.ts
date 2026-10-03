export const site = {
  name: "Bujji Non Veg Pickles",
  whatsapp: "919704046097",
  phone: "9704046097",
  email: "bujjinonvegpickles@gmail.com",
  address: "1-126, Mallepadu, Nelapadu, Tenali, Guntur Dt, Andhra Pradesh 522202",
  tagline: "Fresh, Homemade, Delivered With Love",
} as const;

export const products = [
  {name:"Chicken Pickle", desc:"Tender chicken cooked in traditional Andhra spices and oil."},
  {name:"Mutton Pickle", desc:"Rich, deeply spiced mutton pickle with bold home-style flavour."},
  {name:"Prawn Pickle", desc:"Tangy, spicy coastal-style prawns in a fragrant Andhra masala."},
  {name:"Fish Pickle", desc:"Boneless fish pieces coated in classic Andhra pickle masala."},
] as const;

export const whatsappGreeting = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Bujji Non Veg Pickles, I found you on your website and would like to know more.")}`;
