function rotateNinetyDeg(matrix) {
    let left = 0, right = matrix.length - 1;
    while (left < right) {
        for (let i = left; i < right; i++) {
            let top = left, bottom = right;

            // save top left
            let topLeft = matrix[top][left + i];
            
            // swap top left and bottom left
            matrix[top][left + i] = matrix[bottom - i][left];

            // swap bottom left and bottom right
            matrix[bottom - i][left] = matrix[bottom][right - i];
            
            // swap bottom right and top right
            matrix[bottom][right - i] = matrix[top + i][right];

            // swap top right and top left
            matrix[top + i][right] = topLeft;

        }
        left++;
        right--;
    }
}


let matrix = [
    ['A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'H'],
    ['I', 'J', 'K', 'L'],
    ['M', 'N', 'O', 'P']
            ]

console.log('before');
console.log(matrix);
rotateNinetyDeg(matrix);
console.log('after');
console.log(matrix);