import { softSkillsList } from '../data/portfolioData'

function SoftSkillCard({ skill, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 min-h-[220px] text-center flex flex-col items-center justify-between transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(255,42,42,0.12)] hover:border-red-200 cursor-default"
    >
      <div className="flex flex-col items-center">
        {/* Emoji Icon in rounded square that tints red and scales on hover */}
        <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-3xl shadow-sm mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-50 group-hover:border-red-200">
          <span role="img" aria-label={skill.name}>
            {skill.icon}
          </span>
        </div>

        {/* Skill Name */}
        <h3 className="text-base font-black text-gray-900 uppercase tracking-tight mb-2">
          {skill.name}
        </h3>

        {/* Skill Description */}
        <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
          {skill.desc}
        </p>
      </div>
    </div>
  )
}

export default function SoftSkills() {
  return (
    <section className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]">
      {/* Top Edge: Inverted Torn-Paper SVG Divider from #0a0a0a */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none -translate-y-[1px] rotate-180 z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-[#0a0a0a]"
          aria-hidden="true"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Header */}
      <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#ff2a2a] text-xs font-bold uppercase tracking-wider mb-4">
          Core Competencies
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-black text-gray-900 tracking-tight mb-4">
          Professional Soft Skills
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          Essential interpersonal and problem-solving abilities that drive team success, project delivery, and effective communication.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative z-10">
        {softSkillsList.map((skill, index) => (
          <SoftSkillCard
            key={skill.name}
            skill={skill}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
