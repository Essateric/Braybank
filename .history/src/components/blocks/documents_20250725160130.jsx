import React from "react";
import {
  FileText,
  Shield,
  TrendingUp,
  Calendar,
  Download
} from "lucide-react";

export default function DocumentsSection({ setCurrentPage }) {
  // Data for document categories
  const categories = [
    {
      title: "Board Minutes",
      description: "Official minutes from board meetings and community decisions.",
      count: "12 Documents",
      icon: FileText,
      color: "blue"
    },
    {
      title: "Newsletters",
      description: "Community newsletters and important announcements.",
      count: "8 Documents",
      icon: FileText,
      color: "green"
    },
    {
      title: "Guidelines & Policies",
      description: "Estate guidelines, policies, and community regulations.",
      count: "6 Documents",
      icon: Shield,
      color: "purple"
    },
    {
      title: "Financial Reports",
      description: "Annual reports, budgets, and financial statements.",
      count: "4 Documents",
      icon: TrendingUp,
      color: "red"
    }
  ];

  // Data for recent documents
  const recentDocs = [
    {
      title: "Community Newsletter - January 2024",
      type: "Newsletter",
      date: "January 15, 2024",
      size: "2.4 MB",
      description: "Monthly community updates, upcoming events, and important announcements.",
      restricted: false
    },
    {
      title: "Board Meeting Minutes - December 2023",
      type: "Minutes",
      date: "January 10, 2024",
      size: "1.8 MB",
      description: "Official minutes from the December board meeting covering budget discussions.",
      restricted: true
    },
    {
      title: "Estate Guidelines Update",
      type: "Guidelines",
      date: "January 8, 2024",
      size: "3.2 MB",
      description: "Updated community guidelines including new parking regulations.",
      restricted: true
    },
    {
      title: "Annual Financial Report 2023",
      type: "Financial",
      date: "December 20, 2023",
      size: "4.1 MB",
      description: "Comprehensive financial report for the 2023 fiscal year.",
      restricted: true
    },
    {
      title: "Christmas Carol Event Photos",
      type: "Photos",
      date: "December 18, 2023",
      size: "12.5 MB",
      description: "Photo collection from our annual Christmas carol gathering.",
      restricted: false
    }
  ];

  return (
    <section id="documents" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-blue-900 mb-6 tracking-tight animate-fade-in-up">
            Documents & Resources
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Access important documents, newsletters, and community resources for Braybank Estate residents
          </p>
        </div>

        {/* Document Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
           <a
    href="?admin=true"
    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
  >
    Login to Admin
  </a>
          {categories.map((category, index) => (
            <div
              key={index}
              className="group card-hover cursor-pointer"
              onClick={category.title === "Newsletters" ? () => setCurrentPage('newsletters') : undefined}
            >
              <div className="bg-white/90 rounded-3xl border ring-1 ring-blue-100 shadow-luxury p-8 flex flex-col items-center transition-all hover:-translate-y-2 hover:shadow-2xl">
                <div className={`
                  w-16 h-16 flex items-center justify-center rounded-full border-4 shadow-inner mb-6 transition-transform duration-300 group-hover:scale-110
                  ${category.color === 'blue' ? 'border-blue-300 bg-gradient-to-tr from-blue-50 to-white' : ''}
                  ${category.color === 'green' ? 'border-green-300 bg-gradient-to-tr from-green-50 to-white' : ''}
                  ${category.color === 'purple' ? 'border-purple-300 bg-gradient-to-tr from-purple-50 to-white' : ''}
                  ${category.color === 'red' ? 'border-red-300 bg-gradient-to-tr from-red-50 to-white' : ''}
                `}>
                  <category.icon className={`h-8 w-8
                    ${category.color === 'blue' ? 'text-blue-700' : ''}
                    ${category.color === 'green' ? 'text-green-600' : ''}
                    ${category.color === 'purple' ? 'text-purple-600' : ''}
                    ${category.color === 'red' ? 'text-red-600' : ''}
                  `} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2 text-center">{category.title}</h3>
                <p className="text-slate-600 mb-3 text-sm text-center">{category.description}</p>
                <div className={`
                  px-3 py-1 rounded-full text-xs font-semibold mt-auto
                  ${category.color === 'blue' ? 'bg-blue-50 text-blue-700' : ''}
                  ${category.color === 'green' ? 'bg-green-50 text-green-700' : ''}
                  ${category.color === 'purple' ? 'bg-purple-50 text-purple-700' : ''}
                  ${category.color === 'red' ? 'bg-red-50 text-red-700' : ''}
                `}>
                  {category.count}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Documents */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-8 py-6 border-b border-slate-200">
            <h3 className="text-2xl font-light text-slate-900 mb-2">Recent Documents</h3>
            <p className="text-slate-600 font-light">Latest documents and announcements for residents</p>
          </div>
          <div className="p-8">
            <div className="space-y-4">
              {recentDocs.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-6 bg-gradient-to-r from-slate-50 to-white rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-200 transition-colors">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <h4 className="font-medium text-slate-900">{doc.title}</h4>
                        {doc.restricted && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            <Shield className="h-3 w-3 mr-1" />
                            Residents Only
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-600 mb-2">{doc.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-slate-500">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {doc.date}
                        </span>
                        <span>{doc.size}</span>
                        <span className="px-2 py-1 bg-slate-100 rounded-full">{doc.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {doc.restricted ? (
                      <button className="flex items-center px-4 py-2 text-slate-500 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors text-sm">
                        <Shield className="h-4 w-4 mr-2" />
                        Login Required
                      </button>
                    ) : (
                      <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm group-hover:shadow-lg">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Access Notice */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl border border-blue-100">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">Document Access</h4>
                  <p className="text-sm text-slate-600 mb-3">
                    Some documents are restricted to registered leaseholders only. To access these documents, please log in to your resident account.
                  </p>
                  <p className="text-sm text-slate-600">
                    Need access? Contact <a href="mailto:admin@braybank.info" className="text-blue-600 hover:text-blue-800 font-medium">admin@braybank.info</a> to register for an account.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
