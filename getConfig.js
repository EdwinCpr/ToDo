const getConfig = () => ({
    headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`}
});

export default getConfig;