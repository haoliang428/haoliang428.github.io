# Hao Liang's Personal Website 🚀

Welcome to my professional portfolio! This website showcases my experience, education, research, and skills as an AI/ML Engineer.

**Live Site**: [https://haoliang428.github.io/](https://haoliang428.github.io/)

---

## 🛠️ Tech Stack

This project is built with a focus on speed, scalability, and modern design:

- **Framework**: [Astro](https://astro.build/) (Static Site Generator)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [daisyUI](https://daisyui.com/) (Component Library)
- **Icons**: [Lucide](https://lucide.dev/) + [Devicons](https://devicon.dev/)
- **Architecture**: Single-Page (SPA) pattern for seamless navigation
- **Deployment**: [GitHub Actions](https://github.com/features/actions) to GitHub Pages

---

## 🏗️ Core Specializations

The site highlights my expertise in:
- **Agentic AI & LLM Systems**: RAG pipelines, autonomous workflows, and LLM orchestration.
- **Distributed Data Engineering**: Scalable cloud-native architectures and ETL/ELT pipelines.
- **Algorithmic Optimization**: Mathematical optimization and graph-based decision logic.
- **Production MLOps**: Containerized microservices and automated CI/CD.
- **Advanced Predictive Modeling**: Statistical and neural architectures for forecasting.

---

## 📂 Project Structure

```text
/
├── public/              # Static assets (images, logos, CV)
├── src/
│   ├── components/     # Reusable UI components (WorkItem, EducationItem, etc.)
│   ├── layouts/        # Page skeletons (BaseLayout.astro)
│   ├── pages/          # Individual pages (index.astro)
│   └── styles/         # Global styles and Tailwind configuration
├── .github/workflows/   # CI/CD deployment logic
├── astro.config.mjs     # Astro & Vite configuration
└── package.json         # Project dependencies and scripts
```

---

## 🚀 Getting Started

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/haoliang428/haoliang428.github.io.git
   cd haoliang428.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🚢 Deployment

This site is automatically deployed to **GitHub Pages** via GitHub Actions. Any push to the `main` branch will trigger a new build and update the live site.

- **Workflow**: `.github/workflows/deploy.yml`
- **Settings**: Ensure **Settings > Pages > Source** is set to **GitHub Actions**.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
