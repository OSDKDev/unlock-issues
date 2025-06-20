Unlock an issue. By default, it uses the context's but can be targetted.

### Targetting context's issue:
```yml
- name: Unlock issue
  uses: IOrlandoni/unlock-issues@v1.2
```  
#### Sample file: `.github/workflows/unlock-reopened-issues.yml`
```yml
name: Unlock reopened issue

on:
  issues:
    types: [reopened]

jobs:
  unlock:
    name: Unlock
    runs-on: ubuntu-latest
    permissions:
      issues: write
    steps:
    - name: Unlock issue
      uses: IOrlandoni/unlock-issues@v1.2
```
As simple as that!

### Targetting a specific issue / repo:
```yml
    - name: Unlock issue
      uses: IOrlandoni/unlock-issues@v1.2
      with:
        repo-token: {Token with permissions over the target repository / issue}
        owner-name: {Owner Name - Optional - Default: Context's Repository Owner}
        repo-name: {Repository Name - Optional - Default: Context's Repository}
        issue-number: {Issue Number - Optional - Default: Context's Issue}
```
