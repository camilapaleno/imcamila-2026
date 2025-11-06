import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import '@/app/globals.css';

export default function AllCaseStudiesPage() {
  return (
    <div className="all-case-studies-page">
      <header className="case-studies-page-header">
        <h1>Case Studies</h1>
        <p>A collection of client work showcasing web design, development, and brand experiences.</p>
      </header>

      <div className="case-studies-grid-wrapper">
        <div className="case-studies-grid">
          {caseStudies.map((study) => (
            <Link
              href={`/case-studies/${study.id}`}
              key={study.id}
              className="case-study-card"
            >
              <div className="case-study-cover">
                <Image
                  src={study.coverImage}
                  alt={study.title}
                  width={600}
                  height={400}
                  className="cover-image"
                />
              </div>

              <div className="case-study-info">
                <h3>{study.title}</h3>
                <p>{study.shortDescription}</p>

                {study.category && study.category.length > 0 && (
                  <div className="case-study-tags">
                    {study.category.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
