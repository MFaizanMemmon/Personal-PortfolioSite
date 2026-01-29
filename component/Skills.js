'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const languages = [
  {
    title: 'C#',
    icon: '/assets/Skills/CSharp.png',
    blog: 'https://chashprogramming.blogspot.com/'
  },
  { title: 'TypeScript', icon: '/assets/Skills/TS.png' },
  { title: 'JavaScript', icon: '/assets/Skills/JS.png' }
]

const frameworks = [
  {
    title: '.NET Core / ASP.NET',
    icon: '/assets/Skills/AspNetCore.png',
    items: [
      'ASP.NET Core Web API',
      'MVC / Razor Pages',
      'Entity Framework Core',
      'Dapper & Stored Procedures',
      'JWT Authentication',
      'Clean Architecture'
    ]
  },
  {
    title: 'Blazor',
    icon: '/assets/Skills/BlazorDotNet.png',
    items: [
      'Blazor Server',
      'Blazor WebAssembly (WASM)',
      'Razor Components',
      'JS Interop',
      'SignalR Integration'
    ]
  },
  {
    title: 'Angular',
    icon: '/assets/Skills/Angular.jpg',
    items: [
      'Standalone Components',
      'RxJS & Observables',
      'State Management',
      'Angular Forms',
      'REST API Integration'
    ]
  },
  {
    title: 'Next.js / React',
    icon: '/assets/Skills/NextJsNew.png',
    items: [
      'App Router',
      'Server & Client Components',
      'SSR / SSG',
      'Tailwind CSS',
      'Performance Optimization'
    ]
  },
  {
    title: 'Databases',
    icon: '/assets/Skills/SqlServer.png',
    items: [
      'SQL Server',
      'Stored Procedures',
      'Query Optimization',
      'Indexing',
      'Database Design'
    ]
  },
  {
    title: 'PDF Reports',
    icon: '/assets/Skills/PDFLogo.png',
    items: [
      'QuestPDF',
      'iText / PdfSharp',
      'Invoice & Reports',
      'Charts & Tables',
      'Print-ready Layouts'
    ]
  },
  {
    title: 'WPF',
    icon: '/assets/Skills/WPF.jpg',
    items: [
      'XAML UI Design',
      'MVVM Pattern',
      'Data Binding',
      'Custom Controls',
      'Desktop Applications',
      'Windows Only'
    ]
  },
  {
    title: '.NET MAUI',
    icon: '/assets/Skills/MauiLogo.jpg',
    items: [
      'Cross-Platform UI',
      'Android & iOS Apps',
      'Windows & macOS',
      'MVVM Pattern',
      'Device APIs',
      'Blazor Hybrid'
    ]
  }
]

const Skills = () => {
  const [mounted, setMounted] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="skills" className="bg-gray-50 px-6 md:px-20 py-20 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Programming fundamentals with enterprise-level frameworks and reporting solutions.
          </p>
        </div>

        {/* LANGUAGES */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center font-serif">
            Programming Languages
          </h3>

          <div className="flex justify-center gap-12 flex-wrap">
            {languages.map((lang, index) => {
              const Wrapper = lang.blog ? 'a' : 'div'

              return (
                <Wrapper
                  key={index}
                  {...(lang.blog && {
                    href: lang.blog,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  })}
                  className="flex flex-col items-center gap-1 cursor-pointer group"
                >
                  <Image
                    src={lang.icon}
                    alt={lang.title}
                    width={60}
                    height={60}
                    className="group-hover:scale-105 transition"
                  />

                  {/* INDICATOR BELOW ICON */}
                  {lang.blog && (
                    <span className="text-[11px] text-gray-400">
                      opens blog ↗
                    </span>
                  )}

                  <span className="text-sm font-medium text-gray-700">
                    {lang.title}
                  </span>
                </Wrapper>
              )
            })}
          </div>
        </div>

        {/* FRAMEWORKS */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center font-serif">
            Frameworks, Platforms & PDF
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {frameworks.map((fw, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 flex flex-col hover:shadow-2xl transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image src={fw.icon} alt={fw.title} width={40} height={40} />
                  <h4 className="text-lg font-semibold text-gray-900 font-serif">
                    {fw.title}
                  </h4>
                </div>

                <ul className="space-y-2 flex-1">
                  {fw.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 font-sans">
                      • {item}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setShowPopup(true)}
                  className="mt-6 w-full py-2 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white shadow transition"
                >
                  See Blog
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COMING SOON MODAL */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 text-center max-w-sm w-full shadow-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-2 font-serif">
              🚧 Coming Soon
            </h4>
            <p className="text-gray-600 mb-6 font-sans">
              Blogs & PDF guides are under preparation.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Skills
