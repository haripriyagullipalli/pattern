function filledRectangle(coloumns, rows) {
  const array = [];

  for (let index = 0; index < rows; index++) {
    array.push('*'.repeat(coloumns));
  }

  return array.join("\n");
}

function getMiddleRows(coloumns, char) {
  let row = '';

  for (let i = 0; i < coloumns; i++) {
    if (i === 0 || i + 1 === coloumns) {
      row += char;
    } else {
      row += " ";
    }
  }

  return row;
}

function hollowRectangle(coloumns, rows) {
  const array = [];

  for (let index = 0; index < rows; index++) {
    if (index === 0 || index + 1 === rows) {
      array.push('*'.repeat(coloumns));
    } else {
      array.push(getMiddleRows(coloumns, '*'));
    }
  }

  return array.join("\n");
}

function isEven(index) {
  return index % 2 === 0;
}

function alternatingRectangle(coloumns, rows) {
  const array = [];

  for (let index = 0; index < rows; index++) {
    if (isEven(index)) {
      array.push('*'.repeat(coloumns));
    } else {
      array.push('-'.repeat(coloumns));
    }
  }

  return array.join("\n");
}

function triangle(noOfRows) {
  const rows = [];

  for (let i = 1; i <= noOfRows; i++) {
    rows.push('*'.repeat(i));
  }

  return rows.join('\n');
}

function rightAlignedTriangle(noOfRows) {
  const rows = [];

  for (let index = 0; index < noOfRows; index++) {
    const row = '*'.repeat(index + 1).padStart(noOfRows);
    rows.push(row);
  }

  return rows.join("\n");
}

function spacedAlternatingRectangle(coloumns, rows) {
  const array = [];
  const symbols = [' ', '*', '-'];

  for (let index = 1; index <= rows; index++) {
    array.push(symbols[index % 3].repeat(coloumns));
  }

  return array.join("\n");
}

function generatePattern(style, dimensions) {
  if (dimensions[0] === 0 || dimensions[1] === 0) {
    return '';
  }

  const coloumns = dimensions[0];
  const rows = dimensions[1];

  if (style === 'filled-rectangle') {
    return filledRectangle(coloumns, rows);
  }

  if (style === 'hollow-rectangle') {
    return hollowRectangle(coloumns, rows);
  }

  if (style === 'alternating-rectangle') {
    return alternatingRectangle(coloumns, rows);
  }

  if (style === 'triangle') {
    return triangle(coloumns);
  }

  if (style === 'right-aligned-triangle') {
    return rightAlignedTriangle(coloumns);
  }

  if (style === 'spaced-alternating-rectangle') {
    return spacedAlternatingRectangle(coloumns, rows)
  }

}

function testGeneratePattern(style, dimensions, expected, failed) {
  const actual = generatePattern(style, dimensions);
  if (actual !== expected) {
    failed.push([style, dimensions, actual, expected]);
  }
}

function testFilledRectangle(failed) {
  testGeneratePattern('filled-rectangle', [0, 0], '', failed);
  testGeneratePattern('filled-rectangle', [1, 0], '', failed);
  testGeneratePattern('filled-rectangle', [1, 1], '*', failed);
  testGeneratePattern('filled-rectangle', [1, 2], '*\n*', failed);
  testGeneratePattern('filled-rectangle', [2, 2], '**\n**', failed);
  testGeneratePattern('filled-rectangle', [3, 2], '***\n***', failed);
  testGeneratePattern('filled-rectangle', [3, 3], '***\n***\n***', failed);
  testGeneratePattern('filled-rectangle', [2, 4], '**\n**\n**\n**', failed);
}

function testHollowRectangle(failed) {
  testGeneratePattern('hollow-rectangle', [2, 2], '**\n**', failed);
  testGeneratePattern('hollow-rectangle', [2, 2], '**\n**', failed);
  testGeneratePattern('hollow-rectangle', [3, 3], '***\n* *\n***', failed); testGeneratePattern("hollow-rectangle", [5, 4], '*****\n*   *\n*   *\n*****', failed);
  testGeneratePattern("hollow-rectangle", [5, 1], '*****', failed);
  testGeneratePattern("hollow-rectangle", [4, 3], '****\n*  *\n****', failed);
}

function testAlternatingRectangle(failed) {
  testGeneratePattern("alternating-rectangle", [5, 1], '*****', failed);
  testGeneratePattern("alternating-rectangle", [5, 2], '*****\n-----', failed);
  testGeneratePattern("alternating-rectangle", [5, 3], '*****\n-----\n*****', failed);
  testGeneratePattern("alternating-rectangle", [0, 5], '', failed);
  testGeneratePattern("alternating-rectangle", [6, 2], '******\n------', failed);
}

function testTriangle(failed) {
  testGeneratePattern("triangle", [3], '*\n**\n***', failed);
  testGeneratePattern("triangle", [1], '*', failed);
  testGeneratePattern("triangle", [0], '', failed);
  testGeneratePattern("triangle", [2], '*\n**', failed);
}

function testrightAlignedTriangle(failed) {
  testGeneratePattern("right-aligned-triangle", [2], ' *\n**', failed);
  testGeneratePattern("right-aligned-triangle", [3], '  *\n **\n***', failed);
  testGeneratePattern("right-aligned-triangle", [1], '*', failed);
  testGeneratePattern("right-aligned-triangle", [0], '', failed);
  testGeneratePattern("right-aligned-triangle", [4], '   *\n  **\n ***\n****', failed);
}

function testSpacedAlternatingRectangle(failed) {
  testGeneratePattern("spaced-alternating-rectangle", [3, 4], '***\n---\n   \n***', failed);
  testGeneratePattern("spaced-alternating-rectangle", [3, 6], '***\n---\n   \n***\n---\n   ', failed);
  testGeneratePattern("spaced-alternating-rectangle", [3, 7], '***\n---\n   \n***\n---\n   \n***', failed);
}

function testAll() {
  const failed = [];
  testFilledRectangle(failed);
  testHollowRectangle(failed);
  testAlternatingRectangle(failed);
  testTriangle(failed);
  testrightAlignedTriangle(failed);
  testSpacedAlternatingRectangle(failed);
  console.table(failed);
}

testAll();
