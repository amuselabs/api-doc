import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "puzzleme-api",
    },
    {
      type: "category",
      label: "Auth",
      items: [
        {
          type: "doc",
          id: "generate-api-token",
          label: "Generate API token",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Puzzles",
      items: [
        {
          type: "doc",
          id: "retrieve-puzzle-metadata",
          label: "Retrieve puzzle metadata",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Plays",
      items: [
        {
          type: "doc",
          id: "get-leaderboard-for-a-puzzle",
          label: "Get leaderboard for a puzzle",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "get-series-or-puzzle-specific-aggregate-metrics",
          label: "Get series or puzzle specific aggregate metrics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "get-plays-for-a-series-puzzle-or-user",
          label: "Get plays for a series, puzzle, or user",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
