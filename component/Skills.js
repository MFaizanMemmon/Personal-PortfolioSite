'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

/* =======================
   Programming Languages
======================= */
const languages = [
  { title: 'C#', icon: '/Assets/Skills/CSharp.png' },
  { title: 'TypeScript', icon: '/Assets/Skills/TS.png' },
  { title: 'JavaScript', icon: '/Assets/Skills/JS.png' }
]

/* =======================
   Frameworks, Platforms & PDF
======================= */
const frameworks = [
  {
    title: '.NET Core / ASP.NET',
    icon: '/Assets/Skills/AspNetCore.png',
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
    icon: '/Assets/Skills/BlazorDotNet.png',
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
    icon: '/Assets/Skills/Angular.jpg',
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
    icon: '/Assets/Skills/NextJsNew.png',
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
    icon: '/Assets/Skills/SqlServer.png',
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
    icon: '/Assets/Skills/PDFLogo.png',
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
  icon: '/Assets/Skills/WPF.jpg',
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
  icon: '/Assets/Skills/MauiLogo.jpg',
  items: [
    'Cross-Platform UI',
    'Android & iOS Apps',
    'Windows & macOS',
    'MVVM Pattern',
    'Device APIs',
    'Blazor Hybrid'
  ]
},

]

const Skills = () => {
  const [mounted, setMounted] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  // 🔒 Hydration-safe mount
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="skills" className="bg-white px-6 md:px-20 py-20">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Programming fundamentals with enterprise-level frameworks and reporting solutions.
          </p>
        </div>

        {/* LANGUAGES */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Programming Languages
          </h3>

          <div className="flex justify-center gap-12 flex-wrap">
            {languages.map((lang, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <Image src={lang.icon} alt={lang.title} width={60} height={60} />
                <span className="text-sm font-medium text-gray-700">
                  {lang.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* FRAMEWORKS */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">
            Frameworks, Platforms & PDF
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {frameworks.map((fw, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 flex flex-col hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image src={fw.icon} alt={fw.title} width={40} height={40} />
                  <h4 className="text-lg font-semibold text-gray-900">
                    {fw.title}
                  </h4>
                </div>

                <ul className="space-y-2 flex-1">
                  {fw.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600">
                      • {item}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setShowPopup(true)}
                  className="mt-6 w-full py-2 rounded-lg border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition"
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
          <div className="bg-white rounded-xl p-8 text-center max-w-sm w-full">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              🚧 Coming Soon
            </h4>
            <p className="text-gray-600 mb-6">
              Blogs & PDF guides are under preparation.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-6 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition"
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
