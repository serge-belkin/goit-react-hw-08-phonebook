export const Verification = (name, data) => {
    const newName = name.toLowerCase();
    return data.find(({ name }) => name.toLowerCase() === newName);
};   