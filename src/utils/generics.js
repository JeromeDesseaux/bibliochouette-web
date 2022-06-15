const flatten = (obj) => {
    const result = [];
    if (obj) {
        for (const key of Object.keys(obj)) {
            let resultObject = {};
            resultObject['uid'] = key;
            result.push({ ...resultObject, ...obj[key] });
        }
    }
    return result;
};

export { flatten };
