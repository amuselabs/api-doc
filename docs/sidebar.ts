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
          id: "get-series-or-puzzle-specific-aggregate-metrics",
          label: "Get series or puzzle specific aggregate metrics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "get-plays-for-a-given-user",
          label: "Get plays for a given user",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Series",
      items: [
        {
          type: "doc",
          id: "retrieve-series-information",
          label: "Retrieve series information",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "User Fields",
      items: [
        {
          type: "doc",
          id: "get-user-fields",
          label: "Get user fields",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "set-user-fields",
          label: "Set user fields",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "User Stats",
      items: [
        {
          type: "doc",
          id: "get-series-specific-user-stats",
          label: "Get series specific user stats",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
