Automatically unlock issues, most commonly used on "reopened" event.

To add it to your workflow:

    - uses: Dunning-Kruger/unlock-issues@v1
      with:
        repo-token: "${{ secrets.GITHUB_TOKEN }}"
        
Sample file: `.github/workflows/unlock-reopened-issues.yml`

    name: Unlock reopened issue

    on: 
      issues:
        types: [reopened]

    jobs:
      triage:
        runs-on: ubuntu-latest
        steps:
        - uses: Dunning-Kruger/unlock-issues@v1
          with:
            repo-token: "${{ secrets.GITHUB_TOKEN }}"
        
As simple as that!
