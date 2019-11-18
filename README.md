Automatically unlock context issue, most commonly used on "reopened" event.

To add it to your workflow:

    - uses: OSDKDev/unlock-issues@v1
      with:
        repo-token: "${{ secrets.GITHUB_TOKEN }}"
        
Sample file: `.github/workflows/unlock-reopened-issues.yml`

    name: Unlock reopened issue

    on: 
      issues:
        types: [reopened]

    jobs:
      unlock:
        runs-on: ubuntu-latest
        steps:
        - uses: OSDKDev/unlock-issues@v1
          with:
            repo-token: "${{ secrets.GITHUB_TOKEN }}"
        
As simple as that!
