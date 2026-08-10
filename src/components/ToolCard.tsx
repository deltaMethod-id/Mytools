import { ExternalLink, CheckCircle, Star } from "lucide-react";
import type { Tool } from "../data/tools";

interface ToolCardProps {
  tool: Tool;
  compact?: boolean;
}

export default function ToolCard({ tool, compact = false }: ToolCardProps) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "rgba(0, 0, 0, 0.35)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 220, 50, 0.08)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.border =
          "1px solid rgba(255, 220, 50, 0.25)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 32px rgba(255, 220, 50, 0.08), 0 4px 24px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.border =
          "1px solid rgba(255, 220, 50, 0.08)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 4px 24px rgba(0,0,0,0.2)";
      }}
    >
      <div className={compact ? "p-4" : "p-5"}>
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3 min-w-0">
            {/* Icon placeholder */}
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold"
              style={{
                background: "rgba(255, 220, 50, 0.1)",
                border: "1px solid rgba(255, 220, 50, 0.15)",
                color: "rgba(255, 220, 50, 0.8)",
              }}
            >
              {tool.name.charAt(0)}
            </div>
            <div className="min-w-0">
              <h3 className="text-white font-semibold text-sm leading-tight truncate group-hover:text-yellow-400 transition-colors">
                {tool.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(255, 220, 50, 0.1)",
                    color: "rgba(255, 220, 50, 0.7)",
                    border: "1px solid rgba(255, 220, 50, 0.12)",
                  }}
                >
                  {tool.category}
                </span>
                {tool.featured && (
                  <Star
                    className="w-3 h-3 text-yellow-400/70 fill-yellow-400/70"
                  />
                )}
              </div>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-yellow-400/60 transition-colors flex-shrink-0 mt-1" />
        </div>

        {/* Description */}
        {!compact && (
          <p className="text-white/45 text-[13px] leading-relaxed mb-4 line-clamp-2">
            {tool.description}
          </p>
        )}
        {compact && (
          <p className="text-white/40 text-xs leading-relaxed mb-3 line-clamp-2">
            {tool.description}
          </p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400/70" />
            <span className="text-[11px] font-medium text-emerald-400/70">
              Free
            </span>
          </div>
          <span className="text-[11px] text-white/25 group-hover:text-white/40 transition-colors">
            Visit →
          </span>
        </div>
      </div>
    </a>
  );
}
