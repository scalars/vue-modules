const getProp = (name) => {
    return (props) => {
        return props[name];
    }
};

export {
    getProp
}
