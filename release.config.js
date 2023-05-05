module.exports = {
  branches: ["master", "workflow"],
  repositoryUrl: "https://github.com/CristinaRibateCog/github-actions-react",
  // pluginS: [
  //   "@semantic-release/commit-analyzer",
  //   "@semantic-release/release-notes-generator",
  //   [
  //     "@semantic-release/changelog",
  //     {
  //       changelogFile: "CHANGELOG.md"
  //     }
  //   ],
  //   [
  //     "@semantic-release/git",
  //     {
  //       assets: ["CHANGELOG.md"]
  //     }
  //   ],
  //   [
  //     "@semantic-release/github",
  //     {
  //       assets: [
  //         { path: "build.zip", label: "Build" },
  //         { path: "coverage.zip", label: "Coverage" },
  //         { path: "CHANGELOG.md", label: "CHANGELOG" }
  //       ]
  //     }
  //   ]
  // ]
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "docs/CHANGELOG.md"
      }
    ],
    [
      "@semantic-release/git",
      {
        assets: ["docs/CHANGELOG.md"]
      }
    ]
  ]
};
