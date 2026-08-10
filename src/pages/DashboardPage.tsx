import { useState, useMemo } from "react";
import {
  Search,
  SlidersHorizontal,
  Grid3X3,
  List,
  X,
} from "lucide-react";
import { tools, categories } from "../data/tools";
import ToolCard from "../components/ToolCard";

export default function DashboardPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"name" | "category">("name");

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

    result = [...result].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return a.category.localeCompare(b.category);
    });

    return result;
  }, [search, selectedCategory, sortBy]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: tools.length };
    tools.forEach((t) => {
      counts[t.category] = (counts[t.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Tool Dashboard
          </h1>
          <p className="text-white/40 text-sm">
            Browse and filter {tools.length} curated free tools across{" "}
            {categories.length - 1} categories.
          </p>
        </div>

        {/* Search & Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Search */}
          <div
            className="flex-1 relative flex items-center rounded-xl overflow-hidden"
            style={{
              background: "rgba(0, 0, 0, 0.35)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 220, 50, 0.08)",
            }}
          >
            <Search className="absolute left-4 w-4 h-4 text-white/30" />
            <input
              type="text"
              placeholder="Search tools by name, description, or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-white placeholder:text-white/20 pl-11 pr-10 py-3 text-sm focus:outline-none"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 p-1 rounded-md text-white/30 hover:text-white/60 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort */}
          <div
            className="flex items-center gap-2 px-4 py-3 rounded-xl"
            style={{
              background: "rgba(0, 0, 0, 0.35)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 220, 50, 0.08)",
            }}
          >
            <SlidersHorizontal className="w-4 h-4 text-white/30" />
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "name" | "category")
              }
              className="bg-transparent text-white/60 text-sm focus:outline-none cursor-pointer"
              style={{ WebkitAppearance: "none" }}
            >
              <option value="name" className="bg-neutral-900">
                Name
              </option>
              <option value="category" className="bg-neutral-900">
                Category
              </option>
            </select>
          </div>

          {/* View Toggle */}
          <div
            className="flex items-center rounded-xl overflow-hidden"
            style={{
              background: "rgba(0, 0, 0, 0.35)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 220, 50, 0.08)",
            }}
          >
            <button
              onClick={() => setViewMode("grid")}
              className={`p-3 transition-colors ${
                viewMode === "grid"
                  ? "text-yellow-400"
                  : "text-white/30 hover:text-white/60"
              }`}
              style={
                viewMode === "grid"
                  ? { background: "rgba(255, 220, 50, 0.1)" }
                  : {}
              }
              aria-label="Grid view"
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-3 transition-colors ${
                viewMode === "list"
                  ? "text-yellow-400"
                  : "text-white/30 hover:text-white/60"
              }`}
              style={
                viewMode === "list"
                  ? { background: "rgba(255, 220, 50, 0.1)" }
                  : {}
              }
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
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
                <span
                  className="text-[10px] opacity-60 ml-0.5 tabular-nums"
                >
                  {categoryCounts[cat] || 0}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs text-white/30">
            Showing {filteredTools.length} of {tools.length} tools
            {selectedCategory !== "All" && (
              <>
                {" "}
                in{" "}
                <span className="text-yellow-400/50">
                  {selectedCategory}
                </span>
              </>
            )}
          </p>
          {(search || selectedCategory !== "All") && (
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="text-xs text-white/25 hover:text-white/50 transition-colors flex items-center gap-1"
            >
              <X className="w-3 h-3" />
              Clear all
            </button>
          )}
        </div>

        {/* Tools Grid/List */}
        {filteredTools.length === 0 ? (
          <div
            className="text-center py-20 rounded-xl"
            style={{
              background: "rgba(0, 0, 0, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <Search className="w-10 h-10 text-white/10 mx-auto mb-4" />
            <p className="text-white/30 text-sm mb-2">No tools found</p>
            <p className="text-white/20 text-xs">
              Try adjusting your search or selecting a different category.
            </p>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filteredTools.map((tool) => (
              <a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 rounded-xl p-4 transition-all duration-200"
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
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold"
                  style={{
                    background: "rgba(255, 220, 50, 0.1)",
                    border: "1px solid rgba(255, 220, 50, 0.15)",
                    color: "rgba(255, 220, 50, 0.8)",
                  }}
                >
                  {tool.name.charAt(0)}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors truncate">
                      {tool.name}
                    </h3>
                    {tool.featured && (
                      <span className="text-[10px] text-yellow-400/50 font-medium uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-white/35 line-clamp-1">
                    {tool.description}
                  </p>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(255, 220, 50, 0.08)",
                      color: "rgba(255, 220, 50, 0.6)",
                      border: "1px solid rgba(255, 220, 50, 0.1)",
                    }}
                  >
                    {tool.category}
                  </span>
                  <span
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(52, 211, 153, 0.08)",
                      color: "rgba(52, 211, 153, 0.7)",
                      border: "1px solid rgba(52, 211, 153, 0.1)",
                    }}
                  >
                    Free
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
