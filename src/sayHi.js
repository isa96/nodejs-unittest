export const sayHi = (name) => {
    if (name) {
        return `Hi ${name}`;
    } else {
        throw new Error("Name is required");
    }
};