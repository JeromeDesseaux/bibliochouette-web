const flatten = (obj) => {
    const result = [];
    for (const key of Object.keys(obj)) {
        let resultObject = {};
        resultObject['uid'] = key;
        result.push({ ...resultObject, ...obj[key] });
    }
    return result;
};

export { flatten };
