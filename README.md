# Counting Sort - Interactive Educational Handout

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Gulp](https://img.shields.io/badge/Gulp-CF4647?style=flat&logo=gulp&logoColor=white)](https://gulpjs.com/)
[![Markdown](https://img.shields.io/badge/Markdown-000000?style=flat&logo=markdown&logoColor=white)](https://www.markdownguide.org/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)](https://www.python.org/)

An interactive, comprehensive educational handout on the Counting Sort algorithm, developed for the Programming Challenges (Desafios de Programação) course at Insper - Instituto de Ensino e Pesquisa. This project transforms theoretical concepts into an engaging learning experience through interactive exercises, visualizations, and practical implementations.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Educational Content](#educational-content)
- [Building the Site](#building-the-site)
- [Authors](#authors)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Overview

This project is an interactive educational website that teaches the Counting Sort algorithm through a practical, hands-on approach. Unlike traditional static documentation, it uses real-world analogies (such as organizing clothes by size) and progressive exercises to build intuitive understanding before diving into technical implementation details.

The handout is designed for computer engineering students and includes:
- Step-by-step algorithm explanation
- Interactive exercises with solutions
- Visual demonstrations of each sorting step
- Python implementation with complexity analysis
- Practical use cases and applications
- Challenge problems for advanced learners

## Features

- **Interactive Learning**: Progressive exercises guide students from intuitive understanding to technical implementation
- **Visual Demonstrations**: Step-by-step visual representations of the sorting process
- **Real-World Analogies**: Practical examples that make abstract concepts concrete
- **Comprehensive Coverage**: From basic concepts to advanced optimization techniques
- **Code Examples**: Complete Python implementations with detailed explanations
- **Complexity Analysis**: In-depth examination of time and space complexity
- **Responsive Design**: Optimized for viewing on different devices
- **Live Development**: Hot-reload capability for content development

## Technologies

This project leverages a custom static site generator built with modern JavaScript tools:

- **Node.js**: Runtime environment for the build system
- **Gulp**: Task automation and build pipeline
- **Handlebars**: Templating engine for HTML generation
- **Markdown-it**: Advanced Markdown processor with custom plugins
- **JSDOM**: JavaScript-based DOM manipulation
- **BrowserSync**: Live development server with hot-reload
- **Custom Orfalius**: Proprietary markdown-to-HTML converter for educational content

### Markdown Extensions

The project uses several Markdown-it plugins to enhance the educational experience:

- `markdown-it-color`: Color-coded text for better readability
- `markdown-it-include`: Modular content organization
- `markdown-it-kbd`: Keyboard input styling
- `markdown-it-mathjax`: Mathematical notation support
- `markdown-it-multimd-table`: Advanced table formatting

## Project Structure

```
proj1_desprog/
├── src/                      # Source content
│   ├── index.md             # Main handout content
│   └── img/                 # Images and visual assets
│       ├── loop2/           # Loop visualization images
│       ├── loop3/
│       ├── loop4/
│       ├── ord_roupas/      # Clothes sorting demonstration
│       └── ...
├── resources/               # Site resources
│   ├── template.html       # HTML template
│   └── assets/             # CSS, fonts, icons, and scripts
├── site/                   # Generated static site (build output)
├── gulpfile.js            # Build configuration
├── orfalius.js            # Custom Markdown processor
├── container.js           # Utility functions
└── package.json           # Project dependencies
```

## Installation

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Steps

1. Clone the repository:
```bash
git clone https://github.com/pedrocivita/proj1_desprog.git
cd proj1_desprog
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development Mode

Start the development server with live-reload:

```bash
npm run dev
```

Or using Gulp directly:

```bash
gulp serve
```

The site will be available at `http://localhost:3000` and will automatically reload when you make changes to the source files.

### Production Build

Generate the static site for deployment:

```bash
gulp build
```

The generated site will be in the `site/` directory and can be deployed to any static hosting service.

### Clean Build

Remove previous build artifacts:

```bash
gulp clean
```

## Educational Content

The handout covers the following topics:

### 1. Introduction with Real-World Analogy
- The clothes sorting problem
- Intuitive understanding of counting-based sorting

### 2. Core Algorithm Concepts
- Occurrence counting
- Cumulative sum arrays
- Stable sorting properties

### 3. Implementation
- Complete Python implementation
- Step-by-step code walkthrough
- Loop-by-loop execution trace

### 4. Complexity Analysis
- Time complexity: O(n + k)
- Space complexity analysis
- When to use Counting Sort

### 5. Practical Applications
- Effective use cases (ages, votes, clothing sizes)
- Ineffective scenarios (decimals, large ranges)
- Adaptation techniques for negative numbers and decimals

### 6. Advanced Topics
- Sorting complex objects
- Stability demonstration
- Performance optimization

## Building the Site

The build process uses Gulp to orchestrate several tasks:

1. **Compile**: Converts Markdown files to HTML using the custom Orfalius processor
2. **Copy Static**: Transfers static assets (images, etc.) to the build directory
3. **Copy Assets**: Copies CSS, fonts, icons, and JavaScript files
4. **Watch**: Monitors files for changes and triggers rebuilds

The custom Orfalius processor enhances standard Markdown with:
- Exercise/solution blocks
- Image references with custom syntax
- Interactive elements
- Code highlighting
- Mathematical expressions

## Authors

### Development Team

**Pedro Civita**
- GitHub: [@pedrocivita](https://github.com/pedrocivita)
- LinkedIn: [Pedro Civita](https://www.linkedin.com/in/pedro-civita)
- Email: pedroac2@al.insper.edu.br

**Caio Boa**
- Computer Engineering Student - Insper

**Gabriel Hermida**
- Computer Engineering Student - Insper

## License

This project is licensed under the ISC License. See the package.json for details.

## Acknowledgments

- **Insper - Instituto de Ensino e Pesquisa**: For providing the educational framework and support
- **Programming Challenges Course**: For the opportunity to create comprehensive educational materials
- **Orfalius Framework**: Custom educational content framework developed for Insper courses
- **Open Source Community**: For the excellent tools and libraries that made this project possible

---

**Developed as part of the Computer Engineering curriculum at Insper**

For questions, suggestions, or collaboration opportunities, please reach out via email or LinkedIn.
