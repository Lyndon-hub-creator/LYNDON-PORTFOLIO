const tools = [
  {
    name: 'Photoshop',
    bg: '#31a8ff',
    label: 'Ps',
    labelColor: '#001e36',
  },
  {
    name: 'Premiere Pro',
    bg: '#9999ff',
    label: 'Pr',
    labelColor: '#00005b',
  },
  {
    name: 'CapCut',
    bg: '#000000',
    label: 'CC',
    labelColor: '#fff',
    border: true,
  },
  {
    name: 'Canva',
    bg: '#00c4cc',
    label: 'C',
    labelColor: '#fff',
  },
];

export default function ToolLogos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
      {tools.map((tool) => (
        <div
          key={tool.name}
          className="group flex flex-col items-center gap-3"
        >
          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg sm:h-20 sm:w-20"
            style={{
              backgroundColor: tool.bg,
              border: tool.border ? '1px solid #333' : 'none',
            }}
          >
            <span
              className="font-display text-2xl font-bold sm:text-3xl"
              style={{ color: tool.labelColor }}
            >
              {tool.label}
            </span>
          </div>
          <span className="text-xs font-medium text-cream-200/50 transition-colors duration-300 group-hover:text-cream-100 sm:text-sm">
            {tool.name}
          </span>
        </div>
      ))}
    </div>
  );
}
