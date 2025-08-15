# Dias & Trevizan Wedding Website

A beautiful, responsive wedding website built with Astro featuring a modern design with sections for your story, photos, wedding details, and RSVP functionality.

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**

   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🎨 Customization Guide

### 1. Update Basic Information

Edit the variables at the top of `src/pages/index.astro`:

```astro
const weddingDate = "2025-06-21"; // Your actual wedding date
const venue = "Beautiful Venue Name"; // Your venue name
const city = "City, Country"; // Your location
```

### 2. Personalize Content

- **Names**: Update "João & Maria" with your actual names
- **Date**: Change the wedding date in the hero section
- **Story**: Replace the placeholder text in "Our Story" section with your actual story
- **Venue Details**: Update the venue information in the wedding details section

### 3. Add Your Photos

Replace the photo placeholders with your actual images:

1. **Add photos to the `public/` folder** (e.g., `public/photos/photo1.jpg`)
2. **Update the photo sections** in the HTML:

```html
<!-- Replace this: -->
<div class="photo-item">[Photo 1 - Add your photo here]</div>

<!-- With this: -->
<div class="photo-item">
  <img
    src="/photos/photo1.jpg"
    alt="Description of photo"
    style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;"
  />
</div>
```

### 4. Customize Google Fonts

Update the Google Fonts link in the `<head>` section with the fonts you used in your invitation:

```html
<!-- Replace with your invitation fonts -->
<link
  href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

Then update the CSS variables:

```css
:root {
  --primary-font: "YOUR_FONT", serif;
  --body-font: "YOUR_FONT", sans-serif;
}
```

### 5. Color Scheme

Customize the color scheme by updating the CSS variables:

```css
:root {
  --primary-color: #2c3e50; /* Main brand color */
  --accent-color: #e74c3c; /* Accent color */
  --gold: #d4af37; /* Gold accent */
  --light-bg: #f8f9fa; /* Light background */
}
```

### 6. RSVP Form

The RSVP form is currently set up with a simple alert. To make it functional:

1. **Add a form handling service** (e.g., Formspree, Netlify Forms, or your own backend)
2. **Update the form action** in the HTML
3. **Customize the success message**

## 📱 Features

- **Responsive Design**: Mobile-first approach that works on all devices
- **Modern UI**: Clean, elegant design with smooth animations
- **Photo Gallery**: Grid layout for showcasing your photos
- **RSVP System**: Built-in form for guest responses
- **Smooth Scrolling**: Enhanced user experience with smooth navigation
- **Parallax Effects**: Subtle animations for visual appeal

## 🎯 Sections

1. **Hero**: Eye-catching introduction with your names and date
2. **Our Story**: Share how you met and your journey together
3. **Photo Gallery**: Showcase your favorite moments
4. **Wedding Details**: Venue, time, dress code, and other important information
5. **RSVP**: Allow guests to respond to your invitation
6. **Footer**: Simple footer with your names

## 🛠️ Technical Details

- **Framework**: Astro (static site generator)
- **Styling**: CSS with CSS variables for easy customization
- **JavaScript**: Vanilla JS for interactions
- **Responsive**: CSS Grid and Flexbox for layouts
- **Performance**: Optimized for fast loading

## 📸 Photo Recommendations

- **Hero Background**: Consider adding a beautiful background image
- **Story Photo**: A meaningful photo that represents your relationship
- **Gallery Photos**: 6-12 high-quality photos of your journey together
- **Photo Sizes**: Recommended minimum 600x400px for good quality

## 🎨 Design Tips

- Keep photos consistent in style and quality
- Use complementary colors that match your wedding theme
- Ensure text is readable on all backgrounds
- Test on mobile devices for the best user experience

## 🚀 Deployment

The website can be deployed to:

- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Enable GitHub Pages in your repository settings
- **Any static hosting service**

## 📞 Support

If you need help customizing your wedding website, feel free to:

- Check the Astro documentation: https://docs.astro.build/
- Review the CSS and HTML structure for customization
- Test changes locally before deploying

---

**Made with ❤️ for your special day!**
