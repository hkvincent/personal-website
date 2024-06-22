Vincent's personal website in [Next.js](https://nextjs.org/).


- using headless CMS (directus)
- using tailwindcss
- using next.js


## HOW TO START

<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">PERSONAL-WEBSITE</h1>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/hkvincent/personal-website?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/hkvincent/personal-website?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/hkvincent/personal-website?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/hkvincent/personal-website?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running personal-website](#-running-personal-website)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)
> - [ License](#-license)
> - [ Acknowledgments](#-acknowledgments)

---


##  Repository Structure

```sh
└── personal-website/
    ├── README.md
    ├── app
    │   ├── layout.jsx
    │   ├── loading.jsx
    │   ├── page.jsx
    │   ├── posts
    │   │   ├── [id]
    │   │   │   ├── loading.jsx
    │   │   │   └── page.jsx
    │   │   ├── loading.jsx
    │   │   └── page.jsx
    │   ├── resume
    │   │   └── page.jsx
    │   └── webhook
    │       └── route.js
    ├── components
    │   ├── ScrollToTopButton.css
    │   ├── ScrollToTopButton.jsx
    │   ├── component
    │   │   └── post-detail.jsx
    │   ├── my-obfucate.jsx
    │   ├── path-link.jsx
    │   ├── post-listing.jsx
    │   ├── skeleton-loading.jsx
    │   └── ui
    │       └── avatar.jsx
    ├── components.json
    ├── jsconfig.json
    ├── lib
    │   └── utils.js
    ├── next.config.js
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   ├── V.jpg
    │   ├── avatar.jpg
    │   ├── favicon.ico
    │   ├── placeholder-user.jpg
    │   └── sitemap.xml
    ├── styles
    │   └── global.css
    ├── tailwind.config.js
    └── utils
        ├── directus.ts
        └── helper.ts
---

##  Getting Started

***Requirements***
A headless CMS, here is directus

Ensure you have the following dependencies installed on your system:

* **JavaScript**: `version x.y.z`

###  Installation

1. Clone the personal-website repository:

```sh
git clone https://github.com/hkvincent/personal-website
```

2. Change to the project directory:

```sh
cd personal-website
```

3. Install the dependencies:

```sh
npm install
```

###  Running personal-website

Use the following command to run personal-website:

```sh
node app.js
```

###  Tests

To execute tests, run:

```sh
npm test
```

---

##  Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/hkvincent/personal-website/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/hkvincent/personal-website/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/hkvincent/personal-website/issues)**: Submit bugs found or log feature requests for Personal-website.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/hkvincent/personal-website
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---



