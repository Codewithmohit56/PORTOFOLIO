# Mohit Kumar - Modern Portfolio Website

A modern, responsive personal portfolio website built with HTML5, CSS3, and vanilla JavaScript. Perfect for showcasing projects and applying for internships or jobs.

## 🎨 Features

### Design & UI
- **Modern Color Palette**: Primary (#4f46e5), Secondary (#f9fafb), Accent (#22c55e)
- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop devices
- **Dark Mode**: Toggle between light and dark themes with persistent storage
- **Smooth Animations**: Fade-in effects, hover transitions, and scroll animations
- **Professional Typography**: Clean, readable font stack with proper spacing

### Sections

#### 1. **Navigation Bar**
- Fixed sticky navbar with smooth scrolling
- Active link highlighting with animated underline
- Dark mode toggle button
- Mobile hamburger menu for smaller screens
- Subtle shadow on scroll

#### 2. **Hero Section**
- Full-width hero with gradient background
- Animated typing effect cycling through roles
- Circular profile image
- Call-to-action buttons
- Social media links
- Floating animation background

#### 3. **About Section**
- Professional summary
- Statistics showcase (projects, experience, dedication)
- Download Resume button
- Responsive grid layout

#### 4. **Skills Section**
- Organized by categories (Frontend, Backend, Tools)
- Interactive skill badges with hover effects
- Grid layout that adapts to screen size
- Icon-based category headers

#### 5. **Projects Section**
- Modern card-based layout
- Project images with hover overlay
- Tech stack tags for each project
- Live Demo and GitHub links
- Lift animation on hover
- 6 featured projects included

#### 6. **Education Section**
- Timeline-style layout
- Color-coded timeline with indicators
- Education details and coursework
- Institution names and years
- Professional styling

#### 7. **Contact Section**
- Clean contact form with validation
- Name, Email, Message fields
- Styled input with focus effects
- Contact information display
- Social media links
- Alternative contact methods

#### 8. **Footer**
- Copyright information
- Social media icons
- Responsive footer layout

### Advanced Features

#### JavaScript Functionality
- **Dark Mode Toggle**: Persists user preference in localStorage
- **Smooth Scrolling**: Smooth navigation between sections
- **Typing Animation**: Cycles through multiple role titles
- **Scroll Progress Indicator**: Visual progress bar at top of page
- **Active Link Highlighting**: Updates based on scroll position
- **Mobile Menu**: Hamburger menu for mobile devices
- **Form Validation**: Email validation and required fields
- **Scroll-to-Top Button**: Fixed button appears after scrolling
- **Intersection Observer**: Fade-in animations on scroll
- **Lazy Loading Ready**: Image optimization capabilities

#### CSS Features
- **Flexbox & Grid**: Modern layout techniques
- **CSS Variables**: Organized color and shadow system
- **Media Queries**: Breakpoints for all device sizes
- **Transitions & Animations**: Smooth visual feedback
- **Box Shadows**: Depth and dimension
- **Border Radius**: Modern rounded corners
- **Gradients**: Linear and radial gradients

## 📁 File Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styling and responsive design
├── js/
│   └── script.js          # All JavaScript functionality
├── assets/
│   ├── images/            # Project images folder
│   └── ...
└── PORTFOLIO_README.md    # Documentation (this file)
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation
1. Clone or download the portfolio files
2. Open `index.html` in your browser
3. That's it! No installation needed.

### Customization

#### Update Personal Information
Open `index.html` and replace placeholders:
- Name: "Mohit Kumar"
- Email: "mohit@example.com"
- Phone: "+91 9876543210"
- Social media links
- Project information
- Education details

#### Customize Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary: #4f46e5;      /* Main brand color */
    --secondary: #f9fafb;    /* Background color */
    --accent: #22c55e;       /* Accent color */
    /* ... other variables ... */
}
```

#### Add Your Project Images
1. Place images in `assets/images/` folder
2. Update `index.html` `src` attributes to point to your images
3. Or use external image URLs (currently using Unsplash for demo)

#### Update Education & Experience
Modify the Education section in `index.html` with your institutions and credentials

#### Add Your Skills
Add more skill categories or update existing ones in the Skills section

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## ⌨️ Keyboard Navigation

- **Tab**: Navigate through interactive elements
- **Enter/Space**: Activate buttons and links
- **Escape**: Close mobile menu
- **Click on nav links**: Smooth scroll to sections

## 🔒 Accessibility Features

- Semantic HTML5 tags
- ARIA labels for buttons
- Focus visible outlines
- Proper heading hierarchy
- Alt text for images
- Color contrast compliance
- Responsive text sizing

## 💡 Features Implemented

✅ Clean, modern UI design
✅ Full responsiveness (mobile, tablet, desktop)
✅ Gradient backgrounds
✅ Sticky navigation bar
✅ Smooth scrolling
✅ Dark mode toggle
✅ Typing animation
✅ Scroll progress indicator
✅ Fade-in animations
✅ Hover effects and transitions
✅ Box shadows and rounded corners
✅ Professional card layouts
✅ Form validation
✅ Social media integration
✅ Timeline layout for education
✅ Skill badges with categories
✅ Project showcase with images
✅ Contact form
✅ Scroll-to-top button
✅ Mobile hamburger menu
✅ Keyboard accessibility
✅ Performance optimized
✅ localStorage for theme preference

## 🎓 Code Quality

- Semantic HTML5 structure
- Organized CSS with variables and comments
- Clean, readable JavaScript with proper organization
- No external dependencies (except Font Awesome for icons)
- Responsive design using Flexbox and Grid
- Performance optimizations included
- Accessibility standards followed

## 📝 Form Setup

The contact form currently shows a success message. To send actual emails:

### Simple Option (Using FormSubmit):
```javascript
// In script.js, replace the form handler with:
window.location.href = mailtoLink;
```

### Advanced Option (Using Backend Service):
- Set up a backend service (Node.js, Python, etc.)
- Use FormSubmit.co or EmailJS API
- Update form submission code with API endpoint

## 🌟 Tips for Customization

1. **Add More Projects**: Copy a project card and modify the content
2. **Update Timeline**: Add more education items in the same format
3. **Change Colors**: Only need to change CSS variables at the root
4. **Add More Skills**: Add skill badges within categories
5. **Social Links**: Update href attributes with your actual profiles
6. **Resume Button**: Link to your actual resume file

## 🔗 External Resources

- **Font Awesome Icons**: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/
- **Unsplash Images**: https://unsplash.com/ (for free stock images)
- **Google Fonts**: Add custom fonts by importing in CSS

## 📊 Performance Tips

- Images are optimized for web (consider compressing further)
- Lazy loading ready (code included in JS)
- Minimal JavaScript - vanilla JS, no frameworks
- CSS is compiled and optimized
- Dark mode reduces eye strain and battery usage

## ⚙️ Deployment

### Local Testing
```bash
# Open in browser directly
open index.html
# or
start index.html
```

### Deploy to GitHub Pages
1. Create a GitHub repository
2. Push files to main branch
3. Go to Settings > Pages
4. Select main branch as source
5. Your site is live!

### Deploy to Netlify
1. Connect GitHub repository
2. Netlify auto-deploys on push
3. Get a live URL instantly

### Deploy to Vercel
1. Import GitHub repo
2. Click Deploy
3. Get instant live preview

## 👨‍💻 For Developers

### Extending the Portfolio

#### Add New Sections
1. Create HTML section with unique ID
2. Add CSS styling in stylesheet
3. Add navigation link in navbar
4. Add scroll animation in JavaScript

#### Add More Interactivity
- GSAP for advanced animations
- AOS (Animate On Scroll) library
- Three.js for 3D elements
- Chart.js for data visualization

#### Backend Integration
- Node.js/Express for server
- MongoDB/PostgreSQL for database
- Authentication system
- CMS integration

## 📄 License

This portfolio template is free to use and modify for personal use.

## 🤝 Contributing

Feel free to fork, modify, and improve this template for your own use.

## 📧 Support

For issues or questions about specific implementations, refer to the inline comments in the code.

## 🎉 Getting Help

- **CSS Issues**: Check media queries and responsive breakpoints
- **JavaScript Issues**: Check browser console for errors
- **Layout Issues**: Verify container widths and remove any inline styling conflicts
- **Performance Issues**: Use browser DevTools to profile

---

**Created for**: Mohit Kumar - Computer Science Student  
**Last Updated**: 2024  
**Version**: 1.0.0

Enjoy your new portfolio website! Good luck with your job search! 🚀
