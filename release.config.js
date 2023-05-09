module.exports = {
  branches: ["master"],
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
    "@semantic-release/npm",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md"
      }
    ],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json"],
        message: "chore(release): ${nextRelease.gitTag}"
      }
    ],
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "build.zip", label: "Build" },
          { path: "coverage.zip", label: "Coverage" }
        ]
      }
    ]
  ]
};
