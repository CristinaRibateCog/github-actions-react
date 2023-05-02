module.exports = {
  branches: ["master"],
  repositoryUrl: "https://github.com/CristinaRibateCog/github-actions-react",
  pluginS: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "build/build.zip", label: "Build" },
          { path: "coverage/coverage.zip", label: "Coverage" }
        ]
      }
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md"
      }
    ],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md"]
      }
    ],
    "@semantic-release/npm"
  ]
};
