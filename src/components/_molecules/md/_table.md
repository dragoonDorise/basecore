---
name: Tables
category: Molecules
---

# Tabla responsive con scroll

```tables.html
<div class="table-responsive">
    <table class="table">
        <caption class="table__description">Descripción de la tabla</caption>
        <thead>
            <tr>
                <th scope="col">Movie Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Year</th>
                <th scope="col">Gross</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td scope="row">Star Wars</td>
                <td>Adventure, Sci-fi</td>
                <td>1977</td>
                <td>$460,935,665</td>
            </tr>
            <tr>
                <td scope="row">Howard The Duck</td>
                <td>"Comedy"</td>
                <td>1986</td>
                <td>$16,295,774</td>
            </tr>
            <tr>
                <td scope="row">American Graffiti</td>
                <td>Comedy, Drama</td>
                <td>1973</td>
                <td>$115,000,000</td>
            </tr>
        </tbody>
    </table>
</div>
```

# Tabla responsive con reflow

```tables-reflow.html
<div class="table-reflow">
    <table class="table">
        <caption class="table__description">Descripción de la tabla</caption>
        <thead>
            <tr>
                <th scope="col">Movie Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Year</th>
                <th scope="col">Gross</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td scope="row" data-th="Movie Title">Star Wars</td>
                <td data-th="Genre">Adventure, Sci-fi</td>
                <td data-th="Year">1977</td>
                <td data-th="Gross">$460,935,665</td>
            </tr>
            <tr>
                <td scope="row" data-th="Movie Title">Howard The Duck</td>
                <td data-th="Genre">"Comedy"</td>
                <td data-th="Year">1986</td>
                <td data-th="Gross">$16,295,774</td>
            </tr>
            <tr>
                <td scope="row" data-th="Movie Title">American Graffiti</td>
                <td data-th="Genre">Comedy, Drama</td>
                <td data-th="Year">1973</td>
                <td data-th="Gross">$115,000,000</td>
            </tr>
        </tbody>
    </table>
</div>
```

## CSS Variables

| Name                     | Description                              |
| ------------------------ | ---------------------------------------- |
| \$table-padding          | Table padding                            |
| \$table-mb               | Table margin bottom                      |
| \$table-border           | Table border - Use shorthand declaration |
| \$table-thead-bg-color   | Table background color for theads        |
| \$table-thead-color      | Table text color for theads              |
| \$table-td-bg-color      | Table background color for tds           |
| \$table-td-color         | Table text color for tds                 |
| \$table-td-bg-color-even | Table background color for tds :even     |
| \$table-td-color-even    | Table text color for tds :even           |
