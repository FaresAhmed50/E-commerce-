# E-Commerce Platform

A modern, full-featured e-commerce platform built with Angular 19, featuring a responsive design and comprehensive shopping experience.

## 🚀 Features

- **User Authentication**
  - Secure login and registration
  - JWT-based authentication
  - Protected routes with guards

- **Product Management**
  - Browse products
  - Product categories
  - Product details
  - Search functionality

- **Shopping Experience**
  - Shopping cart
  - Wishlist
  - User profile management
  - Order tracking

- **Additional Features**
  - Contact us page
  - Responsive design
  - Modern UI with Flowbite components
  - Server-side rendering (SSR) support

## 🛠️ Technology Stack

- **Frontend Framework**: Angular 19
- **Styling**: 
  - Tailwind CSS
  - SCSS
  - Flowbite UI Components
- **Authentication**: JWT
- **Icons**: FontAwesome
- **Server**: Express.js
- **Testing**: Jasmine & Karma

## 📁 Project Structure

```
src/
├── app/
│   ├── Core/
│   │   ├── Pages/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── not-found/
│   │   ├── Services/
│   │   │   ├── auth/
│   │   │   └── NavServices/
│   │   ├── Guards/
│   │   ├── Interfaces/
│   │   └── Layout/
│   ├── Feature/
│   │   └── Pages/
│   │       ├── home/
│   │       ├── products/
│   │       ├── shop/
│   │       ├── cart/
│   │       ├── wish-list/
│   │       ├── user-profile/
│   │       └── contact-us/
│   └── Shared/
```

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## 🛠️ Development

### Available Scripts

- `ng serve`: Start development server
- `ng build`: Build the project
- `ng test`: Run unit tests
- `ng e2e`: Run end-to-end tests
- `ng generate component component-name`: Generate new component

### Building for Production

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## 🧪 Testing

- **Unit Tests**: Run with `ng test`
- **End-to-End Tests**: Run with `ng e2e`

## 📦 Dependencies

Key dependencies include:
- @angular/* (v19.0.0)
- @fortawesome/fontawesome-free (v6.7.2)
- flowbite (v3.1.2)
- jwt-decode (v4.0.0)
- express (v4.18.2)

## 🔒 Security

- JWT-based authentication
- Protected routes
- Secure API endpoints

## 🎨 UI/UX

- Responsive design
- Modern UI components from Flowbite
- Custom styling with SCSS
- FontAwesome icons

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Angular Team
- Flowbite
- FontAwesome
- All contributors
