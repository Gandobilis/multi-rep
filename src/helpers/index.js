const useHelpers = () => {
    const mapObjectKeys = (obj, keys) => Object.fromEntries(keys.map(key => [key, obj[key]]))

    return {mapObjectKeys}
}

export default useHelpers
