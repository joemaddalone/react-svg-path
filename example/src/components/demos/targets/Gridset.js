function* scan(arr, i) {
  let dir = 'f';
  let index = i ?? -1;
  const end = arr.length - 1;
  while (true) {
    // eslint-disable-next-line default-case
    switch (dir) {
      case 'f':
        if (index !== end) {
          index++;
        }
        if (index === end) {
          dir = 'r';
        }
        break;
      case 'r':
        if (index !== 0) {
          index--;
        }
        if (index === 0) {
          dir = 'f';
        }
        break;
    }
    yield arr[index];
  }
}

function* bounce(arr, sx, sy, initMx = 1, initMy = 1) {
  let mx = initMx;
  let my = initMy;
  // // Because the first yield adds mx/my we reduce sx/sy by mx/my.
  let x = sx ? sx - 1 : -1;
  let y = sy ? sy - 1 : -1;
  const w = arr.length - 1;
  const h = arr[0].length - 1;
  while (true) {
    if (mx + x > w || mx + x < 0) {
      mx *= -1;
    }
    if (my + y > h || my + y < 0) {
      my *= -1;
    }
    x = x + mx;
    y = y + my;
    yield arr[x][y];
  }
}

function* cycle(arr, d = 'f', si) {
  let index = si ? si - 1 : -1;
  let dir = d || 'f';
  const w = arr.length - 1;
  while (true) {
    if (dir === 'f') {
      if (index === w) {
        index = -1;
      }
      index++;
    } else {
      if (index <= 0) {
        index = w + 1;
      }
      index--;
    }
    yield arr[index];
  }
}

export class Gridset {
  constructor({
    width = 0,
    height = 0,
    rows = 0,
    cols = 0,
    cellWidth = null,
    cellHeight = null
  }) {
    this.properties = { width, height, rows, cols };
    this.width = Number(width);
    this.height = Number(height);
    this.rowCount = Number(rows);
    this.colCount = Number(cols);
    this.gWidth = width / cols;
    this.gHeight = height / rows;
    this.cellWidth = cellWidth;
    this.cellHeight = cellHeight;
    this.create();
  }
  __createCell(ci, ri) {
    const x = ci * this.gWidth;
    const y = ri * this.gHeight;
    const w = this.gWidth;
    const h = this.gHeight;
    const cellProps = {
      x,
      y,
      w,
      h,
      cx: x + w / 2,
      cy: y + h / 2,
      t: y,
      l: x,
      r: x + w,
      b: y + h,
      ri,
      ci,
      up: (by) => {
        this.cell({});
      }
    };

    if (this.cellWidth) {
      cellProps.x = ci * this.gWidth + this.cellWidth / 2;
      cellProps.w = this.cellWidth;
    }
    if (this.cellHeight) {
      cellProps.y = ri * this.gHeight + this.cellHeight / 2;
      cellProps.h = this.cellHeight;
    }

    return cellProps;
  }
  create() {
    this.gridMap = Array.from({ length: this.colCount }).map((c, ci) => {
      return Array.from({ length: this.rowCount }).map((r, ri) => {
        return this.__createCell(ci, ri);
      });
    });
  }
  get cells() {
    // filter null -> null = deleted cell functionality not yet implemented.
    return this.gridMap.map((c) => c.filter((r) => r !== null));
  }
  get flatCells() {
    return this.cells.flat(Infinity);
  }
  area({ ci1, ri1, ci2, ri2 }) {
    const cell1 = this.cell(ci1, ri1);
    const cell2 = this.cell(ci2, ri2);
    return this.areaByCell(cell1, cell2);
  }
  areaByCell(cell1, cell2) {
    const leftCell = cell1.ci <= cell2.ci ? cell1 : cell2;
    const rightCell = cell1.ci <= cell2.ci ? cell2 : cell1;
    const topCell = cell1.ri <= cell2.ri ? cell1 : cell2;
    const bottomCell = cell1.ri <= cell2.ri ? cell2 : cell1;
    const w =
      bottomCell.ci !== topCell.ci ? rightCell.r - leftCell.l : this.gWidth;
    const h =
      bottomCell.ri !== topCell.ri ? bottomCell.b - topCell.t : this.gHeight;

    const cols = Array.from({ length: rightCell.ci - leftCell.ci });
    const rows = Array.from({ length: bottomCell.ri - topCell.ri });
    const cells = cols.map((_, ci) => {
      return rows.map((_, ri) => {
        return this.cell(leftCell.ci + ci, topCell.ri + ri);
      });
    });

    return {
      x: leftCell.x,
      y: topCell.y,
      w,
      h,
      t: topCell.t,
      l: leftCell.l,
      r: rightCell.r,
      b: bottomCell.b,
      cx: (leftCell.l + w) / 2,
      cy: (topCell.t + h) / 2,
      cells
    };
  }
  row(ri) {
    return {
      cells: this.rowCells(ri),
      x: 0,
      y: this.gHeight * ri,
      w: this.gWidth * this.colCount,
      h: this.gHeight,
      cx: (this.gWidth * this.colCount) / 2,
      cy: (this.gHeight + this.gHeight * ri) / 2
    };
  }
  rowCells(ri) {
    return this.gridMap.map((c) => c[ri]);
  }
  get rows() {
    return Array.from({ length: this.rowCount }).map((_, i) =>
      this.rowCells(i)
    );
  }
  col(ci) {
    const x = ci * this.gWidth;
    const y = 0;
    const w = this.gWidth;
    const h = this.gHeight * this.rowCount;
    return {
      cells: this.colCells(ci),
      x,
      y,
      w,
      h,
      t: y,
      l: x,
      r: x + w,
      b: y + h,
      cx: (this.gWidth + this.gWidth * ci) / 2,
      cy: (this.gHeight * this.rowCount) / 2,
      ci: ci
    };
  }
  colCells(ci) {
    return this.gridMap[ci];
  }
  get cols() {
    return this.gridMap;
  }
  cell(ci, ri) {
    return this.gridMap[ci][ri];
  }
  scanRow(ri, dir = 'f', si = null) {
    const cells = this.rowCells(ri);
    if (dir === 'r') {
      cells.reverse();
    }
    return scan(cells, si);
  }
  scanCol(ci, dir = 'f', si = null) {
    const cells = this.colCells(ci);
    if (dir === 'r') {
      cells.reverse();
    }
    return scan(cells, si);
  }
  cycleRow(ri, dir = 'f', si = null) {
    return cycle(this.rowCells(ri), dir, si);
  }
  cycleCol(ci, dir = 'f', si = null) {
    return cycle(this.colCells(ci), dir, si);
  }
  bounce(area, sx, sy, mx, my) {
    const cells = area || this.cells;
    return bounce(cells, sx, sy, mx, my);
  }
}
