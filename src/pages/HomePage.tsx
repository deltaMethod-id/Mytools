import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowRight,
  Zap,
  Sparkles,
  ChevronRight,
  Shield,
  Layers,
  Globe,
} from "lucide-react";
import { tools, categories } from "../data/tools";
import ToolCard from "../components/ToolCard";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredTools = useMemo(
    () => tools.filter((t) => t.featured),
    []
  );

  const filteredTools = useMemo(() => {
    let result = tools;
    if (selectedCategory !== "All") {
      result = result.filter((t) => t.category === selectedCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [search, selectedCategory]);

  const recommendedTools = useMemo(
    () =>
      tools
        .filter((t) => t.featured)
        .slice(0, 6),
    []
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{
              background: "rgba(255, 220, 50, 0.08)",
              border: "1px solid rgba(255, 220, 50, 0.15)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-400/80" />
            <span className="text-xs font-medium text-yellow-400/80 tracking-wide uppercase">
              100% Free Tools — No Catch
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Discover the best
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #FBBF24 0%, #F59E0B 50%, #FDE68A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              free tools
            </span>{" "}
            on the web
          </h1>

          {/* Subtitle */}
          <p className="text-white/45 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Mytools curates genuinely free tools across {categories.length - 1}{" "}
            categories — from AI and development to design and productivity. No
            hidden fees, no premium-only features.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div
              className="relative flex items-center rounded-xl overflow-hidden"
              style={{
                background: "rgba(0, 0, 0, 0.35)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 220, 50, 0.12)",
              }}
            >
              <Search className="absolute left-4 w-5 h-5 text-white/30" />
              <input
                type="text"
                placeholder="Search tools, categories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-white placeholder:text-white/25 px-12 py-4 text-sm focus:outline-none"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 text-white/30 hover:text-white/60 transition-colors text-sm"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 text-black hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,220,50,0.85), rgba(245,158,11,0.85))",
                border: "1px solid rgba(255, 220, 50, 0.3)",
                boxShadow: "0 4px 20px rgba(255, 220, 50, 0.15)",
              }}
            >
              Browse All Tools
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/stats"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white/70 hover:text-white transition-all duration-200"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              View Statistics
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-5xl mx-auto">
          <div
            className="grid grid-cols-3 rounded-xl overflow-hidden"
            style={{
              background: "rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 220, 50, 0.08)",
            }}
          >
            {[
              {
                icon: Layers,
                value: tools.length + "+",
                label: "Free Tools",
              },
              {
                icon: Globe,
                value: (categories.length - 1).toString(),
                label: "Categories",
              },
              {
                icon: Shield,
                value: "100%",
                label: "Free to Use",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center py-6 px-4"
                style={
                  i < 2
                    ? {
                        borderRight: "1px solid rgba(255, 220, 50, 0.06)",
                      }
                    : {}
                }
              >
                <stat.icon className="w-5 h-5 text-yellow-400/50 mb-2" />
                <span className="text-xl sm:text-2xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-[11px] text-white/35 mt-1 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Selector */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white/80">
              Browse by Category
            </h2>
            <Link
              to="/dashboard"
              className="text-xs text-yellow-400/60 hover:text-yellow-400/90 transition-colors flex items-center gap-1"
            >
              See all <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setSelectedCategory(cat === selectedCategory ? "All" : cat)
                }
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                  cat === selectedCategory
                    ? "text-yellow-400"
                    : "text-white/40 hover:text-white/70"
                }`}
                style={
                  cat === selectedCategory
                    ? {
                        background: "rgba(255, 220, 50, 0.12)",
                        border: "1px solid rgba(255, 220, 50, 0.25)",
                      }
                    : {
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Search/Filter Results */}
      {(search || selectedCategory !== "All") && (
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-base font-medium text-white/60">
                {filteredTools.length} tool
                {filteredTools.length !== 1 ? "s" : ""} found
                {selectedCategory !== "All" && (
                  <span className="text-yellow-400/60">
                    {" "}
                    in {selectedCategory}
                  </span>
                )}
                {search && (
                  <span className="text-white/30">
                    {" "}
                    matching &ldquo;{search}&rdquo;
                  </span>
                )}
              </h2>
              {(search || selectedCategory !== "All") && (
                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                  }}
                  className="text-xs text-white/30 hover:text-white/60 transition-colors"
                >
                  Clear filters
                </button>
              )}
            </div>
            {filteredTools.length === 0 ? (
              <div
                className="text-center py-16 rounded-xl"
                style={{
                  background: "rgba(0, 0, 0, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <Search className="w-8 h-8 text-white/15 mx-auto mb-3" />
                <p className="text-white/30 text-sm">
                  No tools found. Try adjusting your search or filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} compact />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Featured Tools */}
      {!search && selectedCategory === "All" && (
        <>
          <section className="px-4 sm:px-6 lg:px-8 pb-16">
            <div className="max-w-7xl mx-auto">
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
                  <h2 className="text-lg font-semibold text-white/80">
                    Featured Tools
                  </h2>
                </div>
                <Link
                  to="/dashboard"
                  className="text-xs text-yellow-400/60 hover:text-yellow-400/90 transition-colors flex items-center gap-1"
                >
                  View all <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {featuredTools.slice(0, 8).map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>
          </section>

          {/* Recommended Tools */}
          <section className="px-4 sm:px-6 lg:px-8 pb-20">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(255, 220, 50, 0.1)",
                      border: "1px solid rgba(255, 220, 50, 0.15)",
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-yellow-400/80" />
                  </div>
                  <h2 className="text-lg font-semibold text-white/80">
                    Recommended for You
                  </h2>
                </div>
              </div>

              {/* Large featured card + grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Large card */}
                <div className="lg:col-span-5">
                  <a
                    href={recommendedTools[0]?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl h-full group transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(0, 0, 0, 0.35)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(255, 220, 50, 0.08)",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.border =
                        "1px solid rgba(255, 220, 50, 0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.border =
                        "1px solid rgba(255, 220, 50, 0.08)";
                    }}
                  >
                    <div className="p-6 sm:p-8 flex flex-col justify-between h-full">
                      <div>
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold mb-5"
                          style={{
                            background: "rgba(255, 220, 50, 0.1)",
                            border: "1px solid rgba(255, 220, 50, 0.15)",
                            color: "rgba(255, 220, 50, 0.8)",
                          }}
                        >
                          {recommendedTools[0]?.name.charAt(0)}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                          {recommendedTools[0]?.name}
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed mb-6">
                          {recommendedTools[0]?.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span
                          className="inline-flex items-center gap-1 text-[11px] font-medium px-3 py-1 rounded-full"
                          style={{
                            background: "rgba(255, 220, 50, 0.1)",
                            color: "rgba(255, 220, 50, 0.7)",
                            border: "1px solid rgba(255, 220, 50, 0.12)",
                          }}
                        >
                          {recommendedTools[0]?.category}
                        </span>
                        <span className="text-xs text-white/25 group-hover:text-yellow-400/50 transition-colors">
                          Open tool →
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Right grid */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {recommendedTools.slice(1, 5).map((tool) => (
                    <ToolCard key={tool.id} tool={tool} compact />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
