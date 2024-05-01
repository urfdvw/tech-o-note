# design

## concept
- note: a note is a piece of markdown that has a topic
- tag: a tag is a string marked on the note
- tag group: a group of tags

## goal
- basics markdown note operations
    - organize in storage
        - should be readable in github markdown preview.
    - add, edit, delete, retrieve
    - preview when editing 
    - insert image file
- tag based operations of notes
    - filtering
    - re structuring by tag group
    - sorting
- tag managing
    - add, edit, delete, retrieve tags
    - add, edit, delete, retrieve tag groups
    - move tag across/out of groups
- word search
    - filtering notes by search results
    - multiple word search
    - and/or, wild card, regex support
- auto time tag
    - latest update of note, tag
    - tag group update time is the latest updated time of tag
    - save time tag of incremental changes of files
- link of notes
    - not affected by editing a filename or title
    - can jump forward and backward by a link
- extensions
    - global replacement in the presentation layer.

## Tabs

### Note View Tab
- View
    - show notes
        - with filtering
        - with structure
        - with sorting
    - show notes that have links pointing to this note
    - show tags
        - tags
        - group
        - time tag
- Tools
    - with tags
        - sorting
            - by tag name
            - by creation date
            - by update date
        - filtering
            - show all
            - show matching
    - with multiple word search
- Options
    - bookmark view, which saves tags and search
    - on note
        - Change title
        - Edit
            - markdown
            - tag
        - get link to the note
- Behavior
    - can have multiple tabs
    - if want to open a tab specific to a note, leave one filter with a creation time tag up to second precision, so that is going to only have 1 note.

### Bookmarks
- see all bookmarks
- remove, rename
- folders?
- Behavior
    - only one
    - no close

### Editor
- tag Editor
    - view existing tag
    - add tags
    - create new tags by
        - given name
        - select group
    - remove existing tag
- markdown editor
    - markdown
    - preview markdown render
- Behavior
    - can have multiple tabs
    - each tab is for one note only

### Tags
- view tags in groups
- add tags by name and group
- add new group
- move tags into groups
- Options
    - drag and drop tags from tags tab to Viewer and Editor
- Behavior
    - only one
    - no close

### Settings
- options
    - Global
        - Dark Mode
        - Global replace (array)
    - Editor
        - Font size
    - Viewer
        - expand all
        - hide content
        - hide all
- Behavior
    - only one
    - no close

## implementation
