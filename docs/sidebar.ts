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
          id: "retrieve-user-collected-fields-for-a-user",
          label: "Retrieve user-collected fields for a user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "create-or-update-user-collected-fields",
          label: "Create or update user-collected fields",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "update-user-collected-fields",
          label: "Update user-collected fields",
          className: "api-method patch",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
