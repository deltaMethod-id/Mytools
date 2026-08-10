import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Layers,
  Grid3X3,
  Star,
  ArrowRight,
  TrendingUp,
  CheckCircle,
  Zap,
} from "lucide-react";
import { tools, categories } from "../data/tools";

export default function StatsPage() {
  const stats = useMemo(() => {
    const catCounts: Record<string, number> = {};
    let featuredCount = 0;

    tools.forEach((t) => {
      catCounts[t.category] = (catCounts[t.category] || 0) + 1;
      if (t.featured) featuredCount++;
    });

    const sortedCategories = Object.entries(catCounts).sort(
      (a, b) => b[1] - a[1]
    );

    const topCategory = sortedCategories[0];
    const avgPerCategory =
      tools.length / (categories.length - 1); // subtract "All"

    return {
      totalTools: tools.length,
      totalCategories: categories.length - 1,
      featuredCount,
      catCounts,
      sortedCategories,
      topCategory,
      avgPerCategory,
      freePercentage: 100,
    };
  }, []);

  const featuredTools = useMemo(
    () => tools.filter((t) => t.featured),
    []
  );

  const maxCategoryCount = stats.sortedCategories[0]?.[1] || 1;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Statistics
          </h1>
          <p className="text-white/40 text-sm">
            Overview of all tools and categories in Mytools.
          </p>
        </div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            {
              icon: Layers,
              label: "Total Tools",
              value: stats.totalTools,
              accent: "yellow",
            },
            {
              icon: Grid3X3,
              label: "Categories",
              value: stats.totalCategories,
              accent: "yellow",
            },
            {
              icon: Star,
              label: "Featured",
              value: stats.featuredCount,
              accent: "yellow",
            },
            {
              icon: CheckCircle,
              label: "Free Rate",
              value: "100%",
              accent: "green",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-xl p-5 sm:p-6"
              style={{
                background: "rgba(0, 0, 0, 0.35)",
                backdropFilter: "blur(16px)",
                border: `1px solid ${
                  stat.accent === "green"
                    ? "rgba(52, 211, 153, 0.1)"
                    : "rgba(255, 220, 50, 0.08)"
                }`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{
                    background:
                      stat.accent === "green"
                        ? "rgba(52, 211, 153, 0.1)"
                        : "rgba(255, 220, 50, 0.1)",
                    border: `1px solid ${
                      stat.accent === "green"
                        ? "rgba(52, 211, 153, 0.15)"
                        : "rgba(255, 220, 50, 0.15)"
                    }`,
                  }}
                >
                  <stat.icon
                    className={`w-4 h-4 ${
                      stat.accent === "green"
                        ? "text-emerald-400/70"
                        : "text-yellow-400/70"
                    }`}
                  />
                </div>
                <span className="text-xs text-white/35 uppercase tracking-wider font-medium">
                  {stat.label}
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Category Breakdown + Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          {/* Category Breakdown - Custom Bar Chart */}
          <div
            className="lg:col-span-8 rounded-xl p-6"
            style={{
              background: "rgba(0, 0, 0, 0.35)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 220, 50, 0.08)",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-4 h-4 text-yellow-400/60" />
                <h2 className="text-base font-semibold text-white/80">
                  Tools per Category
                </h2>
              </div>
              <span className="text-[11px] text-white/25">
                {stats.totalCategories} categories
              </span>
            </div>

            <div className="space-y-3">
              {stats.sortedCategories.map(([cat, count]) => {
                const percentage = (count / maxCategoryCount) * 100;
                return (
                  <div key={cat} className="group">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                        {cat}
                      </span>
                      <span className="text-xs text-white/30 tabular-nums">
                        {count} tool{count !== 1 ? "s" : ""}
                      </span>
                    </div>
                    <div
                      className="h-2 rounded-full overflow-hidden"
                      style={{
                        background: "rgba(255, 255, 255, 0.04)",
                      }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${percentage}%`,
                          background:
                            "linear-gradient(90deg, rgba(255, 220, 50, 0.4), rgba(255, 220, 50, 0.2))",
                          boxShadow: "0 0 8px rgba(255, 220, 50, 0.1)",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar Stats */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Quick Facts */}
            <div
              className="rounded-xl p-6"
              style={{
                background: "rgba(0, 0, 0, 0.35)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 220, 50, 0.08)",
              }}
            >
              <h3 className="text-sm font-semibold text-white/70 mb-4">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/35">
                    Largest Category
                  </span>
                  <span className="text-xs text-yellow-400/70 font-medium">
                    {stats.topCategory?.[0]}
                  </span>
                </div>
                <div
                  className="border-0 h-px"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                  }}
                />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/35">
                    Avg per Category
                  </span>
                  <span className="text-xs text-white/60 font-medium">
                    {stats.avgPerCategory.toFixed(1)}
                  </span>
                </div>
                <div
                  className="border-0 h-px"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                  }}
                />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/35">
                    Featured Ratio
                  </span>
                  <span className="text-xs text-white/60 font-medium">
                    {Math.round(
                      (stats.featuredCount / stats.totalTools) * 100
                    )}
                    %
                  </span>
                </div>
                <div
                  className="border-0 h-px"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                  }}
                />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/35">Free Rate</span>
                  <span className="text-xs text-emerald-400/70 font-medium">
                    100%
                  </span>
                </div>
              </div>
            </div>

            {/* Category Distribution Dots */}
            <div
              className="rounded-xl p-6"
              style={{
                background: "rgba(0, 0, 0, 0.35)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 220, 50, 0.08)",
              }}
            >
              <h3 className="text-sm font-semibold text-white/70 mb-4">
                Distribution
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {tools.map((tool) => (
                  <div
                    key={tool.id}
                    className="w-3 h-3 rounded-sm"
                    title={`${tool.name} (${tool.category})`}
                    style={{
                      background: tool.featured
                        ? "rgba(255, 220, 50, 0.5)"
                        : "rgba(255, 220, 50, 0.12)",
                      border: `1px solid ${
                        tool.featured
                          ? "rgba(255, 220, 50, 0.6)"
                          : "rgba(255, 220, 50, 0.08)"
                      }`,
                    }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-3 h-3 rounded-sm"
                    style={{
                      background: "rgba(255, 220, 50, 0.5)",
                      border: "1px solid rgba(255, 220, 50, 0.6)",
                    }}
                  />
                  <span className="text-[10px] text-white/30">
                    Featured
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-3 h-3 rounded-sm"
                    style={{
                      background: "rgba(255, 220, 50, 0.12)",
                      border: "1px solid rgba(255, 220, 50, 0.08)",
                    }}
                  />
                  <span className="text-[10px] text-white/30">
                    Regular
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Tools Section */}
        <div
          className="rounded-xl p-6 mb-10"
          style={{
            background: "rgba(0, 0, 0, 0.35)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 220, 50, 0.08)",
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(255, 220, 50, 0.1)",
                  border: "1px solid rgba(255, 220, 50, 0.15)",
                }}
              >
                <Zap className="w-4 h-4 text-yellow-400/80" />
              </div>
              <h2 className="text-base font-semibold text-white/80">
                Featured Tools ({stats.featuredCount})
              </h2>
            </div>
            <Link
              to="/dashboard"
              className="text-xs text-yellow-400/50 hover:text-yellow-400/80 transition-colors flex items-center gap-1"
            >
              Open Dashboard <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {featuredTools.map((tool) => (
              <a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg p-3 transition-all duration-200"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "rgba(255, 220, 50, 0.04)";
                  e.currentTarget.style.border =
                    "1px solid rgba(255, 220, 50, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.02)";
                  e.currentTarget.style.border =
                    "1px solid rgba(255, 255, 255, 0.04)";
                }}
              >
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{
                    background: "rgba(255, 220, 50, 0.1)",
                    border: "1px solid rgba(255, 220, 50, 0.15)",
                    color: "rgba(255, 220, 50, 0.8)",
                  }}
                >
                  {tool.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-medium text-white/70 group-hover:text-yellow-400/90 transition-colors truncate">
                    {tool.name}
                  </h4>
                  <span className="text-[10px] text-white/25">
                    {tool.category}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className="mb-8">
          <h2 className="text-base font-semibold text-white/70 mb-4">
            Category Overview
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {stats.sortedCategories.map(([cat, count]) => {
              const catTools = tools.filter((t) => t.category === cat);
              const featuredInCat = catTools.filter(
                (t) => t.featured
              ).length;
              return (
                <Link
                  key={cat}
                  to={`/dashboard`}
                  className="group rounded-xl p-4 transition-all duration-200"
                  style={{
                    background: "rgba(0, 0, 0, 0.3)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 220, 50, 0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.border =
                      "1px solid rgba(255, 220, 50, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.border =
                      "1px solid rgba(255, 220, 50, 0.06)";
                  }}
                >
                  <h3 className="text-sm font-medium text-white/60 group-hover:text-yellow-400/80 transition-colors mb-1 truncate">
                    {cat}
                  </h3>
                  <div className="text-2xl font-bold text-white mb-2">
                    {count}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400/40" />
                    <span className="text-[10px] text-white/25">
                      {featuredInCat} featured
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
