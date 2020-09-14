---
name: Media Queries
category: Utils CSS
---

There are the following sass variables to be able to attack responsive cuts.

## Mobile first:

| Name        | Screen size |
| ----------- | ----------- |
| \$screen-xs | 320px       |
| \$screen-sm | 768px       |
| \$screen-md | 992px       |
| \$screen-lg | 1200px      |
| \$screen-xl | 1440px      |

```
@media (min-width: $screen-sm) {
    ...
}
```

## Desktop First:

| Name            | Screen size |
| --------------- | ----------- |
| \$screen-xs-max | 767px       |
| \$screen-sm-max | 991px       |
| \$screen-md-max | 1199px      |
| \$screen-lg-max | 1439px      |

```
@media (max-width: $screen-sm-max) {
    ...
}
```
