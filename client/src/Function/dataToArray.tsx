export const dataToArray = (dataArray: any[], order: number) => {
    const resultArray: any[] = [];
    dataArray
        .map((item) => item[order])
        .forEach((item) => resultArray.push(item));
        return resultArray;
    };