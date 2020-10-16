- add conf files to repo
- validation of changes by admin
    - notifications
        - install toasted-notes
        - add helper function
        - show notifications to non-admin users on edit
    - provide `user` variable to object handlers to differenciate between normal user and admin
    - create `ld-r-mhdb.ttl` vocabulary with new properties (e.g. `isPendingDelete`)
    - modify handling of resource editing (e.g. if not admin, instead of deletion add isPendingDelete property)
- prompt for name of new resource before creation
- remove alphabetical sorting of property categories, so they appear in the same order as in the config
- add autocomplete for mhdb properties, classes, prefixes, base URIs
- add EditorOf scopes to new users for all datasets (except admin and config datasets)
- UI changes (logo, github link, etc)
- make datatasets page homepage
- make display of the resource lookup form on the datasets page configurable
- add logging to some files 