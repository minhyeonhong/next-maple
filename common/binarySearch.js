import _ from 'lodash';

function binarySearch(array, targetKey, targetValue) {

    const sortArray = _.orderBy(array, [targetKey], ['asc']);

    const index = _.sortedIndexBy(sortArray, { [targetKey]: targetValue }, targetKey);

    if (sortArray[index] && sortArray[index][targetKey] === targetValue) {
        return {
            index,
            data: sortArray[index]
        };
    }

    return null;
}

export { binarySearch }