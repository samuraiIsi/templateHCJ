var tables = function() {
    var tablesHttps = new XMLHttpRequest();
    var urltables = "../../../data/tables.json";

    tablesHttps.onreadystatechange = function() {
        if (tablesHttps.readyState == 4 && tablesHttps.status == 200) {
            var info = JSON.parse(tablesHttps.responseText);
            tables(info);
        }
    };

    tablesHttps.open("GET", urltables, true);
    tablesHttps.send();

    var tables = function(data) {
        var divWrapper, h2Title, tableParent, tableHead, tableBody, titlesColumns, rowTable, rowTitleTable, cellTable, cellTitleTable, spanTitle, textTitleTable, textCell;

        for (var n = 0; n < data.rankingTitles.length; n++) {
            divWrapper = document.createElement('div');

        }

        for (var z = 0; z < data.ranking.length; z++) {
            divWrapper = document.createElement('div');
            divWrapper.setAttribute('class', 'table-qualification');
            h2Title = document.createElement('h2');
            rankingTextTitle = document.createTextNode(data.rankingTitles[z]);
            h2Title.appendChild(rankingTextTitle);
            tableParent = document.createElement('table');
            tableParent.setAttribute('id', data.tableId[z]);
            tableHead = document.createElement('thead');
            tableBody = document.createElement('tbody');
            for (var i = 1; i < data.ranking[z].length; i++) {
                rowTable = document.createElement('tr');
                rowTitleTable = document.createElement('tr');
                for (var j = 0; j < data.ranking[z][i].length; j++) {
                    cellTable = document.createElement('td');
                    cellTitleTable = document.createElement('th');
                    if(data.flagTableDynamic[z][j] == "off") {
                        spanTitle = document.createElement('i');
                        spanTitle.setAttribute('class', null);
                        cellTitleTable.setAttribute('onclick', null);
                    }else{
                        spanTitle = document.createElement('i');
                        spanTitle.setAttribute('class', 'arrow-up cursor-pointer');
                        cellTitleTable.setAttribute('onclick', 'sortTable(this)');
                    }
                    textCell = document.createTextNode(data.ranking[z][i][j]);
                    cellTable.appendChild(textCell);
                    textTitleTable = document.createTextNode(data.ranking[z][0][j]);
                    cellTitleTable.appendChild(textTitleTable);
                    cellTitleTable.appendChild(spanTitle);
                    rowTitleTable.appendChild(cellTitleTable);
                    rowTable.appendChild(cellTable);
                }
                tableBody.appendChild(rowTable);
            }
            tableHead.appendChild(rowTitleTable);
            tableParent.appendChild(tableHead);
            tableParent.appendChild(tableBody);
            divWrapper.appendChild(h2Title);
            divWrapper.appendChild(tableParent);
            document.getElementById(data.wrapperId[z]).appendChild(divWrapper);
        }
    };
};
