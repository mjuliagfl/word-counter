function countStrings(values: Object) {
    if ('text' in values) {
        const t = values['text']
        if (typeof t === "string") {
            const words = t.split(' ')
            var count = 0
            for(var word of words) {
                if (!(word === '' || word === ' ')) {
                    count = count + 1
                }
            }
            return count
        }
    }
};

export default countStrings 